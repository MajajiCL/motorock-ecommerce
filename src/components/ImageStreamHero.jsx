import React, { useId, useMemo } from "react";
import { cn } from "../lib/utils";

const PATH = {
  perspective: 30,
  cardWidth: 14,
  cardHeight: 18,
  cardRadius: 1.2,
  birthHeight: 2.8,
  exitHeight: 38,
  railBirth: -8,
  railExit: 44,
  fan: 3.0,
  turnBirth: 5,
  turnExit: 22,
  stops: 24,
};

/** Sample the path once so CSS keyframes trace the real curve with ultra-smooth opacity fading */
function keyframes(dir, name, p) {
  const steps = [];
  for (let s = 0; s <= p.stops; s++) {
    const u = s / p.stops;
    const scale =
      (p.birthHeight / p.cardHeight) *
      Math.pow(p.exitHeight / p.birthHeight, u);
    const z = p.perspective * (1 - 1 / scale);
    const rail =
      p.railExit - (p.railExit - p.railBirth) * Math.pow(1 - u, p.fan);
    const turn = p.turnBirth + (p.turnExit - p.turnBirth) * u;
    
    // Smooth quadratic opacity curve so cards naturally dissolve without any hard edges
    let opacity = 1;
    if (u < 0.15) {
      opacity = Math.max(0, u / 0.15);
    } else if (u > 0.72) {
      opacity = Math.max(0, (1 - u) / 0.28);
    }
    
    steps.push(
      `${(u * 100).toFixed(2)}%{transform:translate3d(${(dir * rail).toFixed(
        2
      )}cqw,0,${z.toFixed(2)}cqw) rotateY(${(-dir * turn).toFixed(2)}deg); opacity:${opacity.toFixed(3)};}`
    );
  }
  return `@keyframes ${name}{${steps.join("")}}`;
}

export default function ImageStreamHero({
  images,
  cards = 8,
  speed = 20,
  axis = 50,
  path,
  children,
  className,
  ...props
}) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const right = `ish-r-${id}`;
  const left = `ish-l-${id}`;
  const card = `ish-c-${id}`;

  const p = useMemo(() => ({ ...PATH, ...path }), [path]);

  const css = useMemo(
    () =>
      `${keyframes(1, right, p)}${keyframes(-1, left, p)}` +
      `@media(prefers-reduced-motion:reduce){.${card}{animation-play-state:paused}}`,
    [right, left, card, p]
  );

  return (
    <div
      className={cn("relative overflow-hidden w-full", className)}
      style={{ containerType: "inline-size", ...props.style }}
      {...props}
    >
      <style>{css}</style>

      {/* 3D Perspective Viewport with Edge Fade Masks to prevent any sharp cutoff */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          perspective: `${p.perspective}cqw`,
          perspectiveOrigin: `50% ${axis}%`,
          maskImage: "radial-gradient(ellipse 75% 70% at 50% 50%, black 45%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 50%, black 45%, transparent 95%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {[right, left].map((name) =>
            Array.from({ length: cards }, (_, i) => {
              const img = images[i % Math.max(images.length, 1)];
              return (
                <div
                  key={`${name}-${i}`}
                  className={cn(
                    card,
                    "absolute overflow-hidden bg-white/80 p-2 shadow-[0_12px_32px_rgba(15,23,42,0.06)] border border-white/90 backdrop-blur-xl rounded-[1.3cqw] transition-transform"
                  )}
                  style={{
                    left: "50%",
                    top: `${axis}%`,
                    width: `${p.cardWidth}cqw`,
                    height: `${p.cardHeight}cqw`,
                    marginLeft: `${-p.cardWidth / 2}cqw`,
                    marginTop: `${-p.cardHeight / 2}cqw`,
                    borderRadius: `${p.cardRadius}cqw`,
                    animation: `${name} ${speed}s linear infinite`,
                    animationDelay: `${-(i * speed) / cards}s`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {img ? (
                    <div className="w-full h-full flex flex-col items-center justify-between bg-white/60 rounded-[calc(1.2cqw-2px)] p-1.5 overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.title || "MotoRock Repuesto"}
                        loading="lazy"
                        decoding="async"
                        className="h-[72%] w-full object-contain p-1 filter drop-shadow-sm"
                        draggable={false}
                      />
                      {img.title && (
                        <div className="w-full text-center px-1 pb-0.5">
                          <p className="text-[1cqw] font-bold text-[#0f172a] truncate leading-tight font-heading">
                            {img.title}
                          </p>
                          {img.price && (
                            <p className="text-[0.9cqw] font-extrabold text-[#e60000] leading-none mt-0.5">
                              {img.price}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })
          )}
        </div>

        {/* Seamless Soft Ambient Vignettes */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fafafc] via-[#fafafc]/60 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fafafc] via-[#fafafc]/80 to-transparent z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
