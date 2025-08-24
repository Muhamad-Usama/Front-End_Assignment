import { useState } from 'react'

interface ServiceProvider {
  id: number
  name: string
  businessName: string
  location: string
  image: string
  hiredCount: number
  rating: number
  reviewCount: number
  testimonial: string
}

interface CompactProviderCardProps {
  provider: ServiceProvider
}

const CompactProviderCard = ({ provider }: CompactProviderCardProps) => {
  const [showFullTestimonial, setShowFullTestimonial] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ))
  }

  const handleSeePrices = () => {
    console.log(`See prices for ${provider.businessName}`)
  }

  const toggleTestimonial = () => {
    setShowFullTestimonial(!showFullTestimonial)
  }

  const truncatedTestimonial = provider.testimonial.length > 80 
    ? provider.testimonial.substring(0, 80) + '...'
    : provider.testimonial

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={provider.image || "/placeholder.svg"}
            alt={provider.name}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>

        {/* Provider Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-gray-900 mb-1">
            {provider.businessName} in {provider.location}
          </h3>
          
          <p className="text-sm text-gray-600 mb-2">
            Hired {provider.hiredCount} times on GreenPal
          </p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex mr-2">
              {renderStars(provider.rating)}
            </div>
            <span className="text-xs text-gray-600">
              (overall rating {provider.rating}/5, {provider.reviewCount} Reviews)
            </span>
          </div>

          {/* See Prices Button */}
          <button
            onClick={handleSeePrices}
            className="inline-flex items-center px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-colors duration-200 text-sm mb-3"
          >
            See Prices
            <span className="ml-1">→</span>
          </button>

          {/* Testimonial */}
          <div className="mt-3">
            <blockquote className="text-gray-700 text-sm leading-relaxed">
              <span className="text-xl text-gray-400 leading-none">"</span>
              {showFullTestimonial ? provider.testimonial : truncatedTestimonial}
            </blockquote>
            
            <button
              onClick={toggleTestimonial}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors duration-200"
            >
              {showFullTestimonial ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompactProviderCard
