interface BenefitItemProps {
  icon: string | 'quotes' | 'reviews' | 'booking'
  title: string
}

const Circle = ({ children }: { children: any }) => (
  <div className="mx-auto grid place-items-center w-28 h-28 md:w-32 md:h-32
                  rounded-full bg-[#0E6D86] ring-4 ring-white/15 shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
    {children}
  </div>
)

const QuotesIcon = () => (
  <svg viewBox="0 0 140 140" className="w-18 h-18">
    <rect x="58" y="82" width="40" height="22" rx="8" fill="#F8B58A" />
    <rect x="40" y="98" width="62" height="14" rx="7" fill="#F8B58A" />
    <g fontFamily="sans-serif" fontWeight="800" fontSize="16" textAnchor="middle">
      <rect x="30" y="40" width="40" height="28" rx="6" fill="#FF8A00" /><text x="50" y="59" fill="#fff">$28</text>
      <rect x="60" y="28" width="40" height="28" rx="6" fill="#0EA5E9" /><text x="80" y="47" fill="#fff">$37</text>
      <rect x="78" y="48" width="40" height="28" rx="6" fill="#FF8A00" /><text x="98" y="67" fill="#fff">$45</text>
    </g>
  </svg>
)

const ReviewsIcon = () => (
  <svg viewBox="0 0 140 140" className="w-18 h-18">
    <rect x="62" y="70" width="34" height="30" rx="10" fill="#F8B58A" />
    <rect x="46" y="82" width="24" height="24" rx="8" fill="#1F9BD1" />
    <g fill="#FFA51A">
      <path d="M28 50l6-4 6 4-2-7 6-5h-7l-3-7-3 7h-7l6 5-2 7z" />
      <path d="M62 44l6-4 6 4-2-7 6-5h-7l-3-7-3 7h-7l6 5-2 7z" />
      <path d="M96 50l6-4 6 4-2-7 6-5h-7l-3-7-3 7h-7l6 5-2 7z" />
    </g>
  </svg>
)

const BookingIcon = () => (
  <svg viewBox="0 0 140 140" className="w-18 h-18">
    <rect x="52" y="30" width="36" height="70" rx="8" fill="#fff" />
    <rect x="58" y="36" width="24" height="8" rx="2" fill="#22C55E" />
    <rect x="62" y="82" width="16" height="8" rx="3" fill="#22C55E" />
    <rect x="40" y="84" width="60" height="20" rx="10" fill="#F8B58A" />
  </svg>
)

const BenefitItem = ({ icon, title }: BenefitItemProps) => {
  const Icon =
    icon === 'quotes' ? QuotesIcon : icon === 'reviews' ? ReviewsIcon : BookingIcon

  return (
    <div className="text-center text-white">
      <Circle><Icon /></Circle>

      <h3 className="mt-5 text-[23px] md:text-[26px] leading-snug font-semibold">
        {title}
      </h3>
    </div>
  )
}

export default BenefitItem
