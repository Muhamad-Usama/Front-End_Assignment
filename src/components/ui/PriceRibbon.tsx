export function PriceRibbon({
  amount,
  unit = '/mowing',
}: { amount: number; unit?: string }) {
  return (
    <div className="absolute -top-0.5 right-2 z-10 select-none pointer-events-none">
      <svg width="78" height="56" viewBox="0 0 78 56">
        <defs>
          <linearGradient id="ribbonGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ff8a00" />
            <stop offset="100%" stopColor="#ffa500" />
          </linearGradient>

          <filter id="ds" x="-20%" y="-20%" width="160%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="0" dy="2" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.28" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M0 0 H62
             Q78 0 78 16
             V36
             L39 56
             L0 36
             V0 Z"
          fill="url(#ribbonGrad)"
          filter="url(#ds)"
        />

        <text x="39" y="22" textAnchor="middle"
              fontSize="22" fontWeight="800" fill="#fff">
          ${amount}
        </text>
        <text x="39" y="37" textAnchor="middle"
              fontSize="11" fontWeight="700" fill="#fff">
          {unit}
        </text>
      </svg>
    </div>
  );
}
