interface HowItWorksExplanationProps {
  showFull: boolean
  onReadMore: () => void
}

const HowItWorksExplanation = ({ showFull, onReadMore }: HowItWorksExplanationProps) => {
  const fullText =
    "How long did it take you to contract a cheap lawn mower the last time? If it took you more than an hour you are wasting thirty minutes of your life. GreenPal can connect you not only to the same landscapers in Indianapolis, IN but also to lawn care professionals who are vetted, insured, and ready to provide quality service at competitive prices. Our platform makes it easy to compare quotes, read reviews, and book services all in one place."
  const truncatedText =
    "How long did it take you to contract a cheap lawn mower the last time? If it took you more than an hour you are wasting thirty minutes of your life. GreenPal can connect you not only to the same landscapers in Indianapolis, IN..."

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        How does GreenPal Work?
      </h2>

      <div className="bg-[#E5F3E9] rounded-2xl p-3 mb-3 shadow-sm">
        <img
          src="/images/greenfield.jpeg"
          alt="Professional lawn mowing"
          className="w-full h-55 md:h-56 object-cover rounded-xl"
        />
      </div>

      <p className="text-gray-800 text-base leading-relaxed text-left mb-5">
        {showFull ? fullText : truncatedText}
      </p>

      <button
        onClick={onReadMore}
        className="w-full px-6 py-3 rounded-full border-2 border-gray-500 text-black bg-transparent 
             hover:bg-gray-50 transition-colors duration-200 font-semibold text-md max-w-sm mx-auto"
      >
        {showFull ? 'Read Less' : 'Read More'}
      </button>

    </div>
  )
}

export default HowItWorksExplanation
