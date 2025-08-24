import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import ReviewCard from './ReviewCard'
import ReviewFilters from './ReviewFilters'

export interface Review {
  id: number
  customerName: string
  customerInitials: string
  customerImage?: string
  location: string
  nearbyLandmark: string
  rating: number
  reviewText: string
  date: string
  isVerified: boolean
}

const CustomerReviewsSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('Most Relevant')
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [showAllReviews, setShowAllReviews] = useState(false)

  const reviews: Review[] = [
    { id: 1, customerName: 'Michael Rogers', customerInitials: 'MR',
      location: 'Nashville, TN 37220', nearbyLandmark: "Near Lawn Cutting near Talbot's Corner",
      rating: 5, reviewText: 'They did great, I love Mercury Greens they always do such a detailed job.',
      date: 'May 21, 2025', isVerified: true
    },
    { id: 2, customerName: 'Lucian Radu', customerInitials: 'LR', customerImage: '/images/review1.png',
      location: 'Nashville, TN 37220', nearbyLandmark: "Near Lawn Cutting near Talbot's Corner",
      rating: 5, reviewText: 'They did great, I love Mercury Greens they always do such a detailed job.',
      date: 'May 21, 2025', isVerified: true
    },
    { id: 3, customerName: 'Family Cox', customerInitials: 'FC',
      location: 'Nashville, TN 37220', nearbyLandmark: "Near Lawn Cutting near Talbot's Corner",
      rating: 5, reviewText: 'They did great, I love Mercury Greens they always do such a detailed job.',
      date: 'May 21, 2025', isVerified: true
    },
    { id: 4, customerName: 'Stacy Miller', customerInitials: 'SM', customerImage: '/images/review2.jpeg',
      location: 'Nashville, TN 37220', nearbyLandmark: "Near Lawn Cutting near Talbot's Corner",
      rating: 5, reviewText: 'They did great, I love Mercury Greens they always do such a detailed job.',
      date: 'May 21, 2025', isVerified: true
    },
    { id: 5, customerName: 'Alex Doe', customerInitials: 'AD',
      location: 'Nashville, TN 37220', nearbyLandmark: "Near Lawn Cutting near Talbot's Corner",
      rating: 5, reviewText: 'They did great, I love Mercury Greens they always do such a detailed job.',
      date: 'May 21, 2025', isVerified: true
    }
  ]

  const filterOptions = [
    { label: 'Lawn', count: 6 }, { label: 'Landscaping', count: 2 },
    { label: 'Garden', count: 2 }, { label: 'Removal', count: 2 },
    { label: 'Plant', count: 2 }, { label: 'Yard', count: 1 }, { label: 'Weeds', count: 1 }
  ]
  const sortOptions = ['Most Relevant', 'Most Recent', 'Highest Rating', 'Lowest Rating']

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4)

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-[#FFC107]' : 'text-gray-300'}>★</span>
    ))

  return (
    <section className="bg-white">
      <h2 className="text-3xl leading-[1.15] font-bold text-gray-700 text-center">
        Here is what other GreenPal users have to say as of July 2025
      </h2>

      <div className="mt-2.5 flex items-center justify-center">
        <div className="mr-2 flex text-2xl">{renderStars(4.5)}</div>
        <span className="text-[#00a3e7] text-sm font-bold">( 4,940 reviews )</span>
      </div>

      <div className="mt-5 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-7 h-7" />
          <input
            type="text"
            placeholder="Search Reviews"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-4 rounded-[12px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
          />
        </div>
        <div className="relative">
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="w-full appearance-none px-4 py-4 rounded-[12px] border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
          >
            {sortOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-black pointer-events-none" />
        </div>
      </div>

      <div className="mt-5">
        <ReviewFilters
          filters={filterOptions}
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
      </div>

      <div className="mt-5 border-t border-gray-200 divide-y divide-gray-200">
        {displayedReviews.map(r => <ReviewCard key={r.id} review={r} />)}
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowAllReviews(v => !v)}
          className="w-full max-w-sm mx-auto mt-3 inline-flex items-center justify-center px-8 py-3 rounded-full border border-gray-600 text-[#374151] font-bold bg-white"
        >
          {showAllReviews ? 'Show Less Reviews' : 'Read More Reviews'}
        </button>
      </div>
    </section>
  )
}

export default CustomerReviewsSection
