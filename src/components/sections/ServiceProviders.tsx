import ServiceProviderCard from '../ui/ServiceProviderCard'
import HowItWorksSection from './HowItWorks'

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
  isTopRated: boolean
}

const ServiceProvidersSection = () => {
  const topProviders: ServiceProvider[] = [
    {
      id: 1,
      name: "Mike Johnson",
      businessName: "Mikken Services Lawn Services",
      location: "Columbia, SC",
      image: "/images/toprated1.jpg",
      hiredCount: 40,
      rating: 4.4,
      reviewCount: 150,
      testimonial:
        "We know your lawn and landscape is a major investment, and that is what my company specializes in preserving. Our team focuses on meticulous mowing, trimming, and edging to ensure your yard is healthy and attractive year-round. We take pride in consistent service, open communication, and reliable results that enhance your property’s value and curb appeal season after season.",
      isTopRated: true
    },
    {
      id: 2,
      name: "Sarah Williams",
      businessName: "Perfect Green Lawn Care",
      location: "Columbus, OH",
      image: "/images/toprated2.jpg",
      hiredCount: 65,
      rating: 4.8,
      reviewCount: 203,
      testimonial:
        "With over 10 years of experience, we provide reliable and professional lawn care services that keep your property looking its best. From regular maintenance to specialized treatments for stubborn weeds and patchy growth, we work with you to create a lush, vibrant lawn. Our dedication to quality and customer satisfaction means you can trust us to be punctual, thorough, and detail-oriented on every visit.",
      isTopRated: true
    },
    {
      id: 3,
      name: "David Martinez",
      businessName: "Elite Yard Solutions",
      location: "Columbus, OH",
      image: "/images/toprated3.jpg",
      hiredCount: 32,
      rating: 4.6,
      reviewCount: 89,
      testimonial:
        "Our team is dedicated to transforming your outdoor space into a beautiful, well-maintained landscape that you can be proud of. We handle everything from precision mowing and edging to seasonal cleanups and landscape enhancements. Using top-quality equipment and eco-friendly practices, we ensure your lawn is both stunning and sustainable, giving you more time to enjoy your yard without the hassle of upkeep.",
      isTopRated: true
    },
    {
      id: 4,
      name: "Mike Johnson",
      businessName: "Mikken Services Lawn Services",
      location: "Columbia, SC",
      image: "/images/toprated4.jpeg",
      hiredCount: 40,
      rating: 4.4,
      reviewCount: 150,
      testimonial:
        "We know your lawn and landscape is a major investment. That is what my company specializes in preserving our clients' outdoor investments through professional lawn care services. From aeration and fertilization to weed control and precise mowing, we take a comprehensive approach to lawn health. Every property we maintain is treated like our own, ensuring results that are consistent, long-lasting, and worthy of your trust.",
      isTopRated: true
    }
  ]

  return (
    <div className="bg-white pt-9 md:pt-12">
      <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-700 mb-4 leading-snug">
            Top Rated Lawn Mowing Service Providers in Columbus, OH
          </h2>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-6">
          {topProviders.map((provider) => (
            <ServiceProviderCard
              key={provider.id}
              provider={provider}
            />
          ))}
        </div>
      </div>

      <HowItWorksSection />
    </div>
  )
}

export default ServiceProvidersSection
