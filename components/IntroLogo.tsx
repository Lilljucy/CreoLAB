"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { montserratLight } from "@/lib/fonts";

const ICON_POLYGONS = [
  "338.72,101.03 317.42,122.34 249.69,54.61 181.96,122.34 160.66,101.03 249.69,12.00",
  "136.86,124.83 158.17,146.13 54.61,249.69 122.34,317.42 101.03,338.72 12.00,249.69",
  "124.62,362.31 145.93,341.01 213.65,408.74 317.21,305.18 338.52,326.48 213.65,451.35",
  "273.28,213.66 362.31,302.69 362.31,124.62",
];

const PIECE_OFFSETS = [
  { x: 0, y: -160 },
  { x: -160, y: 0 },
  { x: 0, y: 160 },
  { x: 160, y: 0 },
];

const WORD = "CREOLAB";

export default function IntroLogo({ onComplete }: { onComplete: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ onComplete });

      tl.from(".intro-piece", {
        x: (i) => PIECE_OFFSETS[i].x,
        y: (i) => PIECE_OFFSETS[i].y,
        opacity: 0,
        rotation: 20,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
      })
        .from(
          ".intro-letter",
          {
            rotationX: -100,
            opacity: 0,
            duration: 0.45,
            stagger: 0.045,
            ease: "power2.out",
            transformOrigin: "50% 100%",
          },
          "-=0.35"
        )
        .to({}, { duration: 0.55 })
        .to(".intro-letter", {
          rotationX: 100,
          opacity: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.in",
          transformOrigin: "50% 0%",
        })
        .to(
          ".intro-piece",
          {
            x: (i) => PIECE_OFFSETS[i].x * 1.7,
            y: (i) => PIECE_OFFSETS[i].y * 1.7,
            opacity: 0,
            rotation: -20,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(rootRef.current, { opacity: 0, duration: 0.4 }, "-=0.35");
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className="flex flex-col items-center justify-center gap-8"
      style={{ perspective: 900 }}
    >
      <svg viewBox="0 0 374.31 463.35" className="h-40 w-auto md:h-52">
        {ICON_POLYGONS.map((points, i) => (
          <polygon
            key={i}
            className="intro-piece"
            points={points}
            fill="#f5f5f5"
            style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
          />
        ))}
      </svg>
      <div className="flex items-baseline leading-none text-[4.5rem] md:text-[6.5rem]">
        {WORD.split("").map((ch, i) => (
          <span
            key={i}
            className={`intro-letter inline-block ${
              i < 4 ? "font-creo text-[#f5f5f5]" : `${montserratLight.className} font-light text-[#9a9a9a]`
            }`}
          >
            {ch}
          </span>
        ))}
      </div>
    </div>
  );
}
