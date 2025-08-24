import ServiceFrequencySection from './ServiceFrequency'
import ProcessStep from '../ui/ProcessStep'

const HowItWorksSection = () => {
  const handleSeePrice = () => {
    console.log('See Prices clicked from How It Works')
  }

  return (
    <div className="bg-[#e5fcf1] pt-12 md:pt-16 mt-12">
      <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-800">
            Fast, Easy, & Free Quotes
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32 w-0.5 border-l-2 border-dotted border-green-400 hidden md:block" />

          <ProcessStep
            stepNumber={1}
            title="Your Details"
            src="/images/professional1.png"
            isLast={false}
          />

          <ProcessStep
            stepNumber={2}
            title="Choose a Pro"
            src="/images/professional2.png"
            isLast={false}
          />

          <ProcessStep
            stepNumber={3}
            title="Book Your Appointment"
            src="/images/professional3.png"
            isLast={true}
          />
        </div>

        <div className="text-center mt-12 mb-10">
          <button
            onClick={handleSeePrice}
            className="inline-flex items-center justify-center
               rounded-full px-4 py-4 text-white font-bold text-[20px]
               bg-gradient-to-r from-[#ff8008] to-[#ffa500]
               shadow-lg hover:opacity-95 transition w-full max-w-sm mx-auto"
          >
            <span className="flex items-center gap-1">
              See Prices
              <span className="text-3xl leading-none relative bottom-[2px]">›</span>
            </span>
          </button>
        </div>
      </div>

      <ServiceFrequencySection />
    </div>
  )
}

export default HowItWorksSection
