interface TopNavigationProps {
  onSeePrices: () => void
}

const TopNavigation = ({ onSeePrices }: TopNavigationProps) => {
  return (
    <nav className="relative z-20 flex items-center justify-between px-2 py-5 md:py-6">
      <div className="w-full px-2 sm:px-4 md:px-8 lg:px-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="GREENPAL Logo"
            className="h-4 md:h-8 object-contain ml-0 md:ml-2"
          />
        </div>

        <button
          onClick={onSeePrices}
          className="bg-gradient-to-r from-[#ff8008] to-[#ffa500] hover:opacity-90 text-white font-semibold px-6 py-3 md:px-8 md:py-3 rounded-full text-sm md:text-base transition-all duration-200 shadow-lg"
        >
          See Prices
        </button>
      </div>
    </nav>
  )
}

export default TopNavigation
