import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "../../lib/utils";

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  prefix = "",
  suffix = ""
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0);

  useEffect(() => {
    if (!isInView) return;

    let start = direction === "down" ? value : 0;
    const end = direction === "down" ? 0 : value;
    const duration = 1500; // ms
    const startTime = performance.now() + delay * 1000;

    let animationFrameId;

    const update = (currentTime) => {
      if (currentTime < startTime) {
        animationFrameId = requestAnimationFrame(update);
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOutProgress;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      } else {
        setDisplayValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, direction, delay]);

  return (
    <span ref={ref} className={cn("inline-block tabular-nums font-bold", className)}>
      {prefix}
      {displayValue.toLocaleString("es-CL", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      })}
      {suffix}
    </span>
  );
}

export default NumberTicker;
