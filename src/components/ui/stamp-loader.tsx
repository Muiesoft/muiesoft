import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-16 w-16",
  md: "h-28 w-28",
  lg: "h-[min(11rem,42vw)] w-[min(11rem,42vw)]",
} as const;

type StampLoaderProps = {
  size?: keyof typeof sizes;
  className?: string;
  label?: string;
};

export function StampLoader({
  size = "md",
  className,
  label = "Se încarcă",
}: StampLoaderProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn(
        "stamp-press relative aspect-square shrink-0 text-acid",
        sizes[size],
        className,
      )}
    >
      <span className="sr-only">{label}</span>
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <path
            id="stamp-ring-path"
            d="M100,100 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0"
          />
          <radialGradient id="stamp-ink" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
            <stop offset="55%" stopColor="currentColor" stopOpacity="0.04" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="92" fill="url(#stamp-ink)" />

        <circle
          cx="100"
          cy="100"
          r="94"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeOpacity="0.25"
        />

        <g className="stamp-orbit-slow">
          {Array.from({ length: 48 }, (_, i) => {
            const a = (i / 48) * Math.PI * 2;
            const outer = 90;
            const inner = i % 4 === 0 ? 82 : 86;
            return (
              <line
                key={i}
                x1={100 + Math.cos(a) * inner}
                y1={100 + Math.sin(a) * inner}
                x2={100 + Math.cos(a) * outer}
                y2={100 + Math.sin(a) * outer}
                stroke="currentColor"
                strokeWidth={i % 4 === 0 ? 1.4 : 0.7}
                strokeOpacity={i % 4 === 0 ? 0.75 : 0.35}
                strokeLinecap="round"
              />
            );
          })}
        </g>

        <g className="stamp-orbit">
          <circle
            cx="100"
            cy="100"
            r="78"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeDasharray="1.5 6"
            strokeOpacity="0.9"
            className="stamp-dash-crawl"
          />
          <circle
            cx="100"
            cy="100"
            r="72"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeOpacity="0.35"
          />
        </g>

        <g className="stamp-orbit-reverse">
          <text
            fill="currentColor"
            fontSize="9.5"
            fontFamily="var(--font-mono), ui-monospace, monospace"
            letterSpacing="3.2"
          >
            <textPath href="#stamp-ring-path" startOffset="0%">
              MUIESOFT · MUIESOFT · MUIESOFT · MUIESOFT ·
            </textPath>
          </text>
          <circle
            cx="100"
            cy="100"
            r="58"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="10 5 2 5"
            strokeOpacity="0.65"
            className="stamp-dash-crawl-reverse"
          />
        </g>

        <g className="stamp-orbit-mid">
          {([0, 90, 180, 270] as const).map((deg) => (
            <circle
              key={deg}
              cx={100 + Math.cos((deg * Math.PI) / 180) * 50}
              cy={100 + Math.sin((deg * Math.PI) / 180) * 50}
              r="2.2"
              fill="currentColor"
              fillOpacity="0.85"
            />
          ))}
          <circle
            cx="100"
            cy="100"
            r="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 4"
            strokeOpacity="0.45"
          />
        </g>

        <circle
          cx="100"
          cy="100"
          r="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeOpacity="0.95"
        />
        <circle
          cx="100"
          cy="100"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />

        <g className="stamp-core">
          <circle
            cx="100"
            cy="100"
            r="22"
            fill="currentColor"
            fillOpacity="0.06"
          />
          <text
            x="100"
            y="104"
            textAnchor="middle"
            fill="currentColor"
            fontSize="13"
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontWeight="600"
            letterSpacing="1"
          >
            M
          </text>
        </g>
      </svg>
    </div>
  );
}
