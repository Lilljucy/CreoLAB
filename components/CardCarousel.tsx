import Image from "next/image";

export default function CardCarousel({
  images,
  cycleSeconds,
}: {
  images: string[];
  cycleSeconds?: number;
}) {
  const cycle = cycleSeconds ?? images.length * 4;
  const perSlot = cycle / images.length;
  const slotPct = 100 / images.length;
  const fadeIn = slotPct * 0.2;
  const holdEnd = slotPct * 0.9;
  const fadeOutEnd = slotPct * 1.1;
  const animName = `card-carousel-fade-${images.length}`;

  return (
    <div
      className="card-carousel"
      style={{ "--cycle": `${cycle}s` } as React.CSSProperties}
      aria-hidden
    >
      <style>{`
        @keyframes ${animName} {
          0%, 100% { opacity: 0; }
          ${fadeIn.toFixed(2)}%, ${holdEnd.toFixed(2)}% { opacity: 1; }
          ${fadeOutEnd.toFixed(2)}% { opacity: 0; }
        }
      `}</style>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{
            animation: `${animName} ${cycle}s infinite`,
            animationDelay: `${i * perSlot}s`,
          }}
        />
      ))}
    </div>
  );
}
