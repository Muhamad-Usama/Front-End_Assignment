import { useState } from 'react'
import ServiceComparisonTable from '../ui/ServiceComparisonTable'
import InstantQuoteCalculator from './InstantQuoteCalculator'
import ServiceOptionsList from '../ui/ServiceOption'

const ServiceFrequencySection = () => {
  const [selectedOption, setSelectedOption] = useState<'one-time' | 'recurring'>('recurring')

  return (
    <div className="bg-white pt-12 md:pt-16">
      <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
            Pick Your Mowing Frequency
          </h2>
          <p className="text-md ">
            The GreenPal community provides
          </p>
        </div>

        <div className=" w-full space-y-4 mb-4">
          <ServiceOptionsList selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </div>

        <ServiceComparisonTable />

        <div className="text-center p-6 rounded-lg">
          <p className="text-xl text-gray-700 mb-2">
            Weekly customers save
          </p>
          <p className="text-xl md:text-2xl font-extrabold text-orange-500">
            up to 30%
          </p>
        </div>
      </div>

      <InstantQuoteCalculator />
    </div>
  )
}

export default ServiceFrequencySection
