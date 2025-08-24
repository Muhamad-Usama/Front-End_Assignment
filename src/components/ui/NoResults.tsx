function MowerIllustration() {
  return (
    <svg viewBox="0 0 120 120" className="w-16 h-16">
      <circle cx="60" cy="60" r="56" fill="#F2FAFF" />
      <rect x="25" y="68" width="50" height="8" rx="4" fill="#9EE3B1" />
      <circle cx="40" cy="76" r="7" fill="#3B6E85" />
      <circle cx="64" cy="76" r="7" fill="#3B6E85" />
      <rect x="48" y="50" width="20" height="12" rx="2" fill="#F25555" />
      <rect x="54" y="40" width="4" height="12" rx="1" fill="#2F4858" />
      <circle cx="40" cy="76" r="3" fill="#CFE8F5" />
      <circle cx="64" cy="76" r="3" fill="#CFE8F5" />
    </svg>
  )
}

export default function NoResults() {
  return (
    <div className="flex flex-col items-center text-center">
      <MowerIllustration />
      <h3 className="mt-4 font-extrabold text-gray-700 text-xl">
        No Result Found
      </h3>
      <p className="mt-2 text-gray-600 max-w-[22ch]">
        No lawn pros found near you. <br />
        Try another ZIP code.
      </p>
    </div>
  )
}
