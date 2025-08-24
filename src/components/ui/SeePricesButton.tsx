import React from "react"

interface SeePricesButtonProps {
  onClick: () => void
}

const SeePricesButton: React.FC<SeePricesButtonProps> = ({ onClick }) => {
  return (
      <button
        onClick={onClick}
        className="mb-3 w-full max-w-sm mx-auto flex items-center justify-center py-2 px-24 rounded-full 
                   text-white font-bold text-lg
                   bg-gradient-to-r from-[#FF8A00] to-[#FF6A00] shadow
                   hover:from-[#FF7A00] hover:to-[#FF5A00] transition-colors"
      >
        <span className="flex items-center gap-1">
          See Prices
          <span className="text-2xl leading-none relative bottom-[2px]">›</span>
        </span>
      </button>
  )
}

export default SeePricesButton
