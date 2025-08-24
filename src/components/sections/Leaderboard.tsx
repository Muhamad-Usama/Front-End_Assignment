import { useEffect, useState } from 'react'
import LeaderboardCard from '../ui/LeaderboardCard'
import PaginationDots from '../ui/PaginationDots'
import RecentLawnsSection from './RecentLawns'

interface LeaderboardProvider {
  id: number
  rank: number
  name: string
  businessName: string
  image: string
  location: string
  state: string
  ranking: string
  rating: number
  reliabilityRating: number
  price: number
  earned: number
  lawnsCount: number
  hiredCount: number
  services: string[]
  additionalServicesCount: number
}

const LeaderboardSection = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const update = () => setItemsPerPage(window.matchMedia('(min-width: 768px)').matches ? 2 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const providers: LeaderboardProvider[] = [
    {
      id: 1,
      rank: 1,
      name: "Mike Johnson",
      businessName: "Landscape Solutions",
      image: "/images/Leader1.webp",
      location: "Indianapolis",
      state: "IN",
      ranking: "Ranked #1 in Texas",
      rating: 5.0,
      reliabilityRating: 84,
      price: 45,
      earned: 85749,
      lawnsCount: 82,
      hiredCount: 81,
      services: ["Shrub Pruning"],
      additionalServicesCount: 5
    },
    {
      id: 2,
      rank: 2,
      name: "Sarah Williams",
      businessName: "Landscape Solutions",
      image: "/images/Leader2.webp",
      location: "Indianapolis",
      state: "IN",
      ranking: "Ranked #2 in Texas",
      rating: 4.9,
      reliabilityRating: 89,
      price: 42,
      earned: 72340,
      lawnsCount: 76,
      hiredCount: 68,
      services: ["Tree Trimming"],
      additionalServicesCount: 4
    },
    {
      id: 3,
      rank: 3,
      name: "David Martinez",
      businessName: "Green Yard Pros",
      image: "/images/Leader3.jpg",
      location: "Indianapolis",
      state: "IN",
      ranking: "Ranked #3 in Texas",
      rating: 4.8,
      reliabilityRating: 91,
      price: 48,
      earned: 68920,
      lawnsCount: 65,
      hiredCount: 59,
      services: ["Leaf Removal"],
      additionalServicesCount: 6
    }
  ]

  const totalPages = Math.ceil(providers.length / itemsPerPage)
  const start = currentPage * itemsPerPage
  const currentProviders = providers.slice(start, start + itemsPerPage)

  useEffect(() => {
    if (currentPage > totalPages - 1) setCurrentPage(0)
  }, [itemsPerPage, totalPages, currentPage])

  const handleSeeAllCompanies = () => {
    console.log('See all companies clicked')
  }
  const nextPage = () => {
    // @ts-ignore - React 19 function parameter type compatibility
    setCurrentPage(p => (p + 1) % totalPages)
  }

  const handleCardClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = e.target as HTMLElement
    if (el.closest('[data-no-paginate]')) return
    nextPage()
  }

  return (
    <div className="bg-[#EAF6FB]">
      <div className="max-w-screen-md mx-auto md:max-w-4xl px-4">
        <div className="pt-12 md:pt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <h2 className="text-4xl font-semibold text-gray-700 leading-tight md:text-5xl md:leading-[1.15] text-center tracking-tight max-w-[22ch] mx-auto">
              Columbia Lawn
              Care Companies
              Leaderboard
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentProviders.map((provider) => (
            <div
              key={provider.id}
              onClick={handleCardClick}
              className="cursor-pointer"
            >
              <LeaderboardCard provider={provider} />
            </div>

          ))}
        </div>

        <PaginationDots
          total={totalPages}
          current={currentPage}
          onChange={setCurrentPage}
        />

        <div className="py-8 md:py-10 text-center">
          <button
            onClick={handleSeeAllCompanies}
            className="text-xl inline-flex items-center px-6 md:px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-colors duration-200"
          >
            <span className="flex items-center gap-1">
              See all Indianapolis, IN Lawn Care Companies
              <span className="text-4xl leading-none relative bottom-[2px]">›</span>
            </span>
          </button>
        </div>
      </div>

      <RecentLawnsSection />
    </div>
  )
}

export default LeaderboardSection
