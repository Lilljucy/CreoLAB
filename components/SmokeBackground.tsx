"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Liquid-silk background: ONE single continuous diagonal ridge — no FBM, no
   noise octaves. Elevation is a closed-form windowed cosine crest evaluated
   per-pixel in the fragment shader (smoother than a vertex-displaced mesh,
   since it isn't limited by geometry subdivision). Surface normals come
   from finite differences of that same elevation function, then get lit
   with diffuse + specular + Fresnel for a chrome/silk sheen — the ridge
   goes bright silver-white, everywhere else fades to true black. */

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  /* One single narrow crest along the diagonal — windowed so it never
     repeats into a second ridge on its own (a raw unclamped sin() would),
     with a light snoise-driven wobble on top for organic liveliness. */
  float getElevation(vec2 st) {
    float t = uTime * 0.264;
    /* Rotated another 30 degrees clockwise past the previous orientation. */
    float diagonal = st.x * -0.49 + st.y * 0.95;

    float halfWidth = 0.55;
    float x = clamp((diagonal - 0.08) / halfWidth, -1.0, 1.0);
    float mainWave = 0.5 + 0.5 * cos(x * 3.14159265 + sin(t) * 0.3);

    float noiseDrift = snoise(vec2(st.x * 0.8 + t * 0.2, st.y * 0.8 - t * 0.15)) * 0.15;

    float crest = smoothstep(0.15, 0.85, mainWave + noiseDrift);
    return pow(crest, 2.2);
  }

  void main() {
    vec2 st = vUv;
    st.x *= uResolution.x / uResolution.y;

    float e = 0.003;
    float h = getElevation(st);
    float hRight = getElevation(st + vec2(e, 0.0));
    float hUp = getElevation(st + vec2(0.0, e));
    vec3 normal = normalize(vec3((h - hRight) / e, (h - hUp) / e, 1.0));

    vec3 lightDir = normalize(vec3(-0.5, 0.8, 1.2));
    float diff = max(dot(normal, lightDir), 0.0);

    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 16.0);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);

    vec3 silkColor = vec3(0.36, 0.37, 0.4);
    float brightness = diff * 0.7 + spec * 0.9 + fresnel * 0.4;
    vec3 color = silkColor * brightness;

    gl_FragColor = vec4(color, clamp(brightness, 0.0, 1.0) * h);
  }
`;

export default function SmokeBackground({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      uniforms.uResolution.value.set(w, h);
    }
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let rafId = 0;
    let visible = true;
    const start = performance.now();

    function animate(now: number) {
      rafId = requestAnimationFrame(animate);
      if (!visible) return;
      uniforms.uTime.value = (now - start) / 1000;
      renderer.render(scene, camera);
    }

    let intersectionObserver: IntersectionObserver | undefined;

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0 }
      );
      intersectionObserver.observe(container);
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ filter: "blur(0.5px)" }}
      aria-hidden
    />
  );
}
