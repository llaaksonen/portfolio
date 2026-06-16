import { useEffect, useState } from "react";

interface ConstellationMotifProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  opacity?: number;
  color?: string;
  /** Continuously drift the nodes. */
  animate?: boolean;
}

const NODES: [number, number][] = [
  [15, 35], [85, 12], [165, 28], [245, 18],
  [50, 90], [130, 72], [210, 88], [270, 65],
  [25, 155], [105, 140], [180, 162], [255, 145],
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3],
  [4, 5], [5, 6], [6, 7],
  [8, 9], [9, 10], [10, 11],
  [0, 4], [1, 5], [2, 6], [3, 7],
  [4, 8], [5, 9], [6, 10], [7, 11],
  [1, 4], [2, 5], [5, 8], [6, 9],
];

// Deterministic per-node drift: each node floats around its base position on
// its own slow sine loop (periods land in the ~12-22s range so it never feels
// busy), with a gentle out-of-phase twinkle on the dots.
const DRIFT = NODES.map((_, i) => ({
  ampX: 4 + (i % 3) * 2.2,
  ampY: 3 + ((i * 2) % 3) * 1.8,
  phaseX: (i * 1.7) % (Math.PI * 2),
  phaseY: (i * 2.3) % (Math.PI * 2),
  speed: 0.5 + (i % 4) * 0.11,
  twinklePhase: (i * 1.1) % (Math.PI * 2),
}));

/**
 * Decorative star-map drawn from a fixed node graph. The nodes drift slowly and
 * the connecting lines follow, giving a faint "living constellation" feel.
 *
 * This is purely ornamental, so it animates regardless of the reduced-motion
 * preference — the drift is slow and low-contrast by design.
 */
export function ConstellationMotif({
  width = 280,
  height = 180,
  className = "",
  opacity = 1,
  color = "currentColor",
  animate = true,
}: ConstellationMotifProps) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const points = NODES.map(([x, y], i) => {
    if (!animate) return [x, y] as const;
    const d = DRIFT[i];
    return [
      x + d.ampX * Math.sin(t * d.speed + d.phaseX),
      y + d.ampY * Math.cos(t * d.speed * 0.85 + d.phaseY),
    ] as const;
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, display: "block" }}
      aria-hidden="true"
    >
      {CONNECTIONS.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0]}
          y1={points[a][1]}
          x2={points[b][0]}
          y2={points[b][1]}
          stroke={color}
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      ))}
      {points.map(([x, y], i) => {
        const twinkle = animate
          ? 0.72 + 0.28 * Math.sin(t * (DRIFT[i].speed * 1.6) + DRIFT[i].twinklePhase)
          : 1;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 4 === 0 ? 2 : 1.25}
            fill={color}
            opacity={twinkle}
          />
        );
      })}
    </svg>
  );
}
