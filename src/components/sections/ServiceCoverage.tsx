import { useState } from 'react'
import ServiceAreaMap from '../ui/ServiceAreaMap'
import CityGrid from '../ui/CityGrid'
import ZipCodeGrid from '../ui/ZipCodeGrid'
import HowItWorksExplanation from '../ui/HowItWorksExplanation'
import LocalInfoAndReviewsSection from './LocalInfoAndReviews'

const ServiceCoverageSection = () => {
  const [showAllZipCodes, setShowAllZipCodes] = useState(false)
  const [showFullExplanation, setShowFullExplanation] = useState(false)

  const nearbyCities = [
    'Asheville', 'Greenville', 'Rock Hill',
    'Fayetteville', 'Milledgeville', 'Athens',
    'Augusta', 'Charleston', 'Summerville',
    'Statesboro', 'Pooler', 'Savannah'
  ]

  const zipCodes =
    ['46201', '46201', '46201', '46201', '46201', '46201', '46217', '46217', '46217', '46217', '46217', '46217']

  return (
    <div className="bg-[#EAF8F0] pt-14 md:pt-20">
      <div className="max-w-md md:max-w-2xl mx-auto px-4">
        <HowItWorksExplanation
          showFull={showFullExplanation}
          onReadMore={() => setShowFullExplanation(v => !v)}
        />

        <div className="mt-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl font-bold text-gray-700 mb-2">
              Not in Columbia ?
            </h2>
            <p className="text-3xl font-bold text-green-600">
              GreenPal also covers these nearby cities
            </p>
          </div>

          <div className="mb-8">
            <ServiceAreaMap />
          </div>

          <div className="mb-6">
            <CityGrid cities={nearbyCities} />
          </div>

          <div className="mb-8">
            <h3 className="text-[21px] md:text-2xl font-bold text-gray-700 mb-4">
              GreenPal offers nearby lawn maintenance services in these
              Columbia Zip Codes
            </h3>

            <ZipCodeGrid zipCodes={zipCodes} showAll={showAllZipCodes} />

            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllZipCodes(v => !v)}
                className="w-full px-8 py-3 rounded-full border-2 border-gray-500 text-black font-semibold hover:bg-gray-50 max-w-sm mx-auto"
              >
                {showAllZipCodes ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <LocalInfoAndReviewsSection />
    </div>
  )
}

export default ServiceCoverageSection
