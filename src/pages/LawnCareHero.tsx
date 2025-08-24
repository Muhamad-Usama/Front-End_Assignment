import SearchSection from '@/components/sections/Search'
import AddressInput from '@/components/ui/AddressInput'
import PaginationDots from '@/components/ui/PaginationDots'
import ServiceCard from '@/components/ui/ServiceCard'
import ServiceCardMobile from '@/components/ui/ServiceCardMobile'
import TopNavigation from '@/components/ui/TopNavigation'
import { useState } from 'react'

const LawnCareHero = () => {
  const [address, setAddress] = useState('')
  const [currentCard, setCurrentCard] = useState(0)

const serviceProviders = [
  {
    id: 1,
    name: "Green Lawn Care",
    image: "/images/lawnman.png",
    rating: 4.8,
    reviews: 109,
    avgPrice: 75,
    available: true
  },
  {
    id: 2,
    name: "Perfect Grass Co",
    image: "/images/lawn-care-professional.png",
    rating: 4.9,
    reviews: 87,
    avgPrice: 80,
    available: true
  },
  {
    id: 3,
    name: "Yard Masters",
    image: "/images/landscaping-professional.png",
    rating: 4.7,
    reviews: 156,
    avgPrice: 70,
    available: false
  },
  {
    id: 4,
    name: "Eco Turf Solutions",
    image: "/images/lawnimage4.png",
    rating: 4.6,
    reviews: 92,
    avgPrice: 78,
    available: true
  },
  {
    id: 5,
    name: "Premium Lawn Pros",
    image: "/images/lawnimage5.jpg",
    rating: 4.85,
    reviews: 134,
    avgPrice: 82,
    available: false
  },
  {
    id: 6,
    name: "Fresh Cut Landscaping",
    image: "/images/lawnimage6.jpg",
    rating: 4.75,
    reviews: 120,
    avgPrice: 72,
    available: true
  }
]

  const handleSeePrice = () => {
    console.log('See prices clicked with address:', address)
  }

  const handleNavSeePrice = () => {
    console.log('Navigation See Prices clicked')
  }

  return (
    <div>
      <div className="relative min-h-screen bg-gradient-to-b from-green-600 to-green-800">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/grass-background.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <TopNavigation onSeePrices={handleNavSeePrice} />

        <div className="relative z-10 px-4 pb-8 md:pb-16">
          <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
            <div className="text-center text-white mb-8 md:mb-12 mt-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Professional Lawn Care Services in Columbus
              </h1>
              <p className="text-lg md:text-xl font-bold opacity-90 mb-12">
                Fast, Easy, & Free Quotes
              </p>
            </div>

            <div className="mb-12 text-center text-white">
              <p className="text-sm md:text-base font-bold opacity-80 mb-4">
                Book your grass cutting in 60 seconds
              </p>
              <AddressInput
                value={address}
                onChange={setAddress}
                placeholder="Enter your house address"
              />
              <button
                onClick={handleSeePrice}
                className="w-full bg-gradient-to-r from-[#ff8008] to-[#ffa500] hover:opacity-90 text-white font-bold py-4 px-6 rounded-full text-md transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                <span className="flex items-center gap-1">
                  See Prices
                  <span className="text-3xl leading-none relative bottom-[2px]">›</span>
                </span>
              </button>
            </div>

            <div className="text-center text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-5">
                Get a free instant quote
              </h2>
            </div>

            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentCard * 100}%)` }}
                >
                  {serviceProviders.map((p) => (
                    <div
                      key={p?.id}
                      className="min-w-full px-4 cursor-pointer"
                      onClick={() => setCurrentCard((currentCard + 1) % serviceProviders.length)}
                      role="button"
                      aria-label={`Go to next provider from ${p?.name}`}
                    >
                      <ServiceCardMobile provider={p} />
                    </div>
                  ))}
                </div>
              </div>

              <PaginationDots
                total={serviceProviders.length}
                current={currentCard}
                onChange={setCurrentCard}
              />
            </div>


            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {serviceProviders.map((provider) => (
                // @ts-ignore - React 19 key prop compatibility
                <ServiceCard key={provider.id} provider={provider} />
              ))}
            </div>

          </div>
        </div>
      </div>

      <SearchSection />
    </div>
  )
}

export default LawnCareHero
