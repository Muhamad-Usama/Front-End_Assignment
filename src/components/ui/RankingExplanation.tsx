const RankingExplanation = () => {
  return (
    <div className="text-center px-4 rounded-lg">
      <div>
        <img
          src="/images/ranking.png"
          alt="Professional lawn care service with riding mower"
          className="mx-auto w-60 md:w-80 bg-[#f8f9fb]"
        />
      </div>

      <h2 className="text-[27px] md:text-3xl font-bold text-[#333333] leading-snug mb-2">
        How the GreenPal{' '}
        <span className="text-[#FFA500] font-bold">network ranks</span>{' '}
        lawn & landscape companies
      </h2>

      <p className="text-[15px] text-gray-700 md:text-[16px] leading-relaxed max-w-xl mx-auto">
        Each week, thousands of customers across the U.S. trust our network of professional
        landscapers. In Columbus, GA, we evaluate lawn care companies based on five key
        performance areas: customer satisfaction, service quality, punctuality, job volume, and
        responsiveness. This approach helps us identify and highlight the top-performing lawn
        mowing services in the area.
      </p>
    </div>
  )
}

export default RankingExplanation
