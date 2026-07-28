import { montserratLight } from "@/lib/fonts";

const ICON_POLYGONS = [
  "338.72,101.03 317.42,122.34 249.69,54.61 181.96,122.34 160.66,101.03 249.69,12.00",
  "136.86,124.83 158.17,146.13 54.61,249.69 122.34,317.42 101.03,338.72 12.00,249.69",
  "124.62,362.31 145.93,341.01 213.65,408.74 317.21,305.18 338.52,326.48 213.65,451.35",
  "273.28,213.66 362.31,302.69 362.31,124.62",
];

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 374.31 463.35"
        style={{ width: size, height: size * (463.35 / 374.31) }}
        className="shrink-0"
      >
        {ICON_POLYGONS.map((points, i) => (
          <polygon key={i} points={points} fill="#f5f5f5" />
        ))}
      </svg>
      <span className="flex items-baseline leading-none" style={{ fontSize: size * 0.62 }}>
        <span className="font-creo text-[#f5f5f5]">CREO</span>
        <span className={`${montserratLight.className} font-light text-[#9a9a9a]`}>LAB</span>
      </span>
    </div>
  );
}
