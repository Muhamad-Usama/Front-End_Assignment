import { useEffect, useState } from 'react'
import LawnProjectCard from '../ui/LawnProjectCard'
import PaginationDots from '../ui/PaginationDots'
import ServiceCoverageSection from './ServiceCoverage'

interface LawnProject {
  id: number
  title: string
  location: string
  nearbyLandmark: string
  price: number
  lastMowed: string
  frequency: string
  customerNote: string
  image: string
  overlayPrice: number
}

const RecentLawnsSection = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(1)

  // responsive: 1 card on mobile, 2 on md+
  useEffect(() => {
    const update = () =>
      setItemsPerPage(window.matchMedia('(min-width: 768px)').matches ? 2 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const lawnProjects: LawnProject[] = [
    {
      id: 1, title: "Yard Cutting – Kansas City, Missouri", location: "Kansas City, Missouri",
      nearbyLandmark: "Near Routine Yard Maintenance near Robertson", price: 75, lastMowed: "2 months ago",
      frequency: "Weekly", customerNote: "I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions.",
      image: "/images/recent-lawn1.jpg", overlayPrice: 45
    },
    {
      id: 2, title: "Yard Cutting – Kansas City, Missouri", location: "Kansas City, Missouri",
      nearbyLandmark: "Near Routine Yard Maintenance near Robertson", price: 75, lastMowed: "2 months ago",
      frequency: "Weekly", customerNote: "I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions.",
      image: "/images/recent-lawn2.jpeg", overlayPrice: 45
    },
    {
      id: 3, title: "Yard Cutting – Columbus, Ohio", location: "Columbus, Ohio",
      nearbyLandmark: "Near Downtown Columbus near High Street", price: 65, lastMowed: "1 month ago",
      frequency: "Bi-weekly", customerNote: "Please focus on the front yard and make sure the edges are clean. The backyard can be done every other visit. Thank you for your excellent service!",
      image: "/images/recent-lawn3.jpeg", overlayPrice: 50
    },
    {
      id: 4, title: "Yard Cutting – Indianapolis, Indiana", location: "Indianapolis, Indiana",
      nearbyLandmark: "Near Monument Circle near Meridian Street", price: 80, lastMowed: "3 weeks ago",
      frequency: "Weekly", customerNote: "Regular maintenance needed for both front and back yards. Please trim around the flower beds carefully and clean up all clippings.",
      image: "/images/recent-lawn4.jpeg", overlayPrice: 55
    }
  ]

  const totalPages = Math.ceil(lawnProjects.length / itemsPerPage)
  const sliceStart = currentPage * itemsPerPage
  const currentProjects = lawnProjects.slice(sliceStart, sliceStart + itemsPerPage)

  useEffect(() => {
    if (currentPage > totalPages - 1) setCurrentPage(0)
  }, [itemsPerPage, totalPages, currentPage])

  const handleSeePrice = () => console.log('See Prices clicked from Recent Lawns')
  const nextPage = () => {
    // @ts-ignore - React 19 function parameter type compatibility
    setCurrentPage(p => (p + 1) % totalPages)
  }

  const handleCardClick: React.MouseEventHandler<HTMLDivElement> = () => nextPage()

  return (
    <div className="bg-white pt-14 md:pt-20">
      <div className="max-w-md mx-auto md:max-w-4xl px-4 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold text-gray-700 leading-tight md:text-5xl md:leading-[1.15] text-center tracking-tight max-w-[22ch] mx-auto">
            Recent lawns
            mowed in
            Columbus, OH
          </h2>
          <p className="text-[#6b6b6b] text-sm md:text-base">
            by GreenPal&apos;s community of lawn care pros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              onClick={handleCardClick}
              className="cursor-pointer"
              role="button"
              aria-label="Next"
            >
              <LawnProjectCard project={project} />
            </div>
          ))}
        </div>

        <PaginationDots total={totalPages} current={currentPage} onChange={setCurrentPage} />

        <div className="mt-8 md:mt-10 text-center">
          <button
            onClick={handleSeePrice}
            className="inline-flex items-center justify-center w-full max-w-sm mx-auto px-10 py-4 rounded-full text-white font-bold text-lg shadow-lg
                       bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-colors"
          >
            <span className="flex items-center gap-1">
              See Prices
              <span className="text-3xl leading-none relative bottom-[2px]">›</span>
            </span>
          </button>
        </div>
      </div>

      <ServiceCoverageSection />
    </div>
  )
}

export default RecentLawnsSection
