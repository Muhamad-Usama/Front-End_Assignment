import { useState } from 'react'

const LocalCityInfo = () => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  const fullDescription =
    "The city of Columbia is the capital of the state of South Carolina. It is also the second largest city in the state, which is part of the continental US. As of 2016 the population was 134,309. Columbia is known for its rich history, vibrant cultural scene, and beautiful landscapes. The city offers numerous parks, recreational facilities, and is home to the University of South Carolina. With its warm climate and well-maintained neighborhoods, Columbia provides an ideal environment for professional lawn care services."
  const truncatedDescription =
    "The city of Columbia is the capital of the state of South Carolina. It is also the second largest city in the state, which is part of the continental US. As of 2016 the population was 134,309."

  return (
    <section className="text-center">
      <h2 className="text-3xl leading-[1.15] font-bold text-gray-700">
        About Columbia South Carolina
      </h2>
      <p className="mt-2 text-[16px] text-gray-600">
        Columbia is a city in South Carolina, United States.
      </p>

      <div className="mt-6 rounded-2xl overflow-hidden">
        <img
          src="/images/columbia.jpg"
          alt="Columbia South Carolina skyline at sunset"
          className="w-full h-44 md:h-56 object-cover rounded-2xl"
        />
      </div>

      <p className="mt-3 text-left text-[16px] md:text-[16px] leading-relaxed text-[#6B7280]">
        {showFullDescription ? fullDescription : truncatedDescription}
      </p>

      <button
        onClick={() => setShowFullDescription(v => !v)}
        className="max-w-sm mx-auto mt-5 inline-flex items-center justify-center w-full px-8 py-3 rounded-full border border-black text-[#374151] font-semibold"
      >
        {showFullDescription ? 'Read Less' : 'Read More'}
      </button>

      <button
        onClick={() => console.log('See Prices clicked from Local Info')}
        className="mt-5 w-full max-w-sm mx-auto inline-flex items-center justify-center py-4 px-6 rounded-full text-white font-bold text-lg
                   bg-gradient-to-r from-[#FF8A00] to-[#FF6A00] shadow
                   hover:from-[#FF7A00] hover:to-[#FF5A00] transition-colors"
      >
        <span className="flex items-center gap-1">
          See Prices
          <span className="text-3xl leading-none relative bottom-[2px]">›</span>
        </span>
      </button>
    </section>
  )
}

export default LocalCityInfo
