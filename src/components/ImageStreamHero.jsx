import React, { useId, useMemo } from "react";
import { cn } from "../lib/utils";

const PATH = {
  perspective: 32,
  cardWidth: 15,
  cardHeight: 20,
  cardRadius: 1.1,
  birthHeight: 2.8,
  exitHeight: 42,
  railBirth: -10,
  railExit: 48,
  fan: 3.2,
  turnBirth: 6,
  turnExit: 24,
  stops: 24,
};

/** Sample the path once so the CSS keyframes trace the real curve in 3D perspective */
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
    
    // Dynamic opacity fade in/out so cards don't pop abruptly
    const opacity = u < 0.12 ? (u / 0.12).toFixed(2) : u > 0.88 ? ((1 - u) / 0.12).toFixed(2) : 1;
    
    steps.push(
      `${(u * 100).toFixed(2)}%{transform:translate3d(${(dir * rail).toFixed(
        2
      )}cqw,0,${z.toFixed(2)}cqw) rotateY(${(-dir * turn).toFixed(2)}deg); opacity:${opacity};}`
    );
  }
  return `@keyframes ${name}{${steps.join("")}}`;
}

export default function ImageStreamHero({
  images,
  cards = 8,
  speed = 18,
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

      {/* 3D Perspective Viewport */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          perspective: `${p.perspective}cqw`,
          perspectiveOrigin: `50% ${axis}%`,
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
                    "absolute overflow-hidden bg-white/95 p-2 shadow-[0_12px_36px_rgba(21,21,129,0.09)] border border-[#e5e5eb] backdrop-blur-md rounded-[1.2cqw] transition-transform"
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
                    <div className="w-full h-full flex flex-col items-center justify-between bg-[#f6f6fa]/90 rounded-[calc(1.1cqw-2px)] p-1.5 overflow-hidden">
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
                          <p className="text-[1.05cqw] font-bold text-[#151581] truncate leading-tight">
                            {img.title}
                          </p>
                          {img.price && (
                            <p className="text-[0.95cqw] font-bold text-[#00bb76] leading-none mt-0.5">
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

        {/* Ambient Top & Bottom Vignettes for Seamless Blending */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f6f6fa] via-[#f6f6fa]/60 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f6fa] via-[#f6f6fa]/80 to-transparent z-10" />
      </div>

      {/* Foreground Interactive Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
