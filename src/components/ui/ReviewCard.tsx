import { MapPin, BadgeCheck } from 'lucide-react'

interface Review {
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

const ReviewCard = ({ review }: { review: Review }) => {
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-[#FFC107]' : 'text-gray-300'}>★</span>
    ))

  return (
    <div className="py-5 bg-white">
      <div className="flex items-center gap-2">
        <div className="flex text-2xl">{renderStars(review.rating)}</div>
        {review.isVerified && (
          <span className="flex items-center text-[13px] text-[#16A34A]">
            <BadgeCheck className="w-[18px] h-[18px] mr-1" />
            Verified by GreenPal
          </span>
        )}
      </div>

      <div className="mt-2 flex items-center text-[13px] text-gray-900">
        <MapPin className="w-[16px] h-[16px] mr-1" />
        {review.location}
      </div>

      <div className="mt-1 inline-flex items-center text-[12px] text-[#6B7280] bg-[#EEF2F7] px-2 py-1 rounded">
        {review.nearbyLandmark}
      </div>

      <p className="mt-2.5 text-[14px] leading-relaxed text-[#505050]">
        {review.reviewText}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {review.customerImage ? (
            <img
              src={review.customerImage}
              alt={review.customerName}
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-[#E5F0FF] text-[#3B82F6] flex items-center justify-center text-sm font-semibold">
              {review.customerInitials}
            </div>
          )}
          <span className="font-semibold text-[#1F2937]">{review.customerName}</span>
        </div>
        <span className="text-sm text-[#9CA3AF]">{review.date}</span>
      </div>
    </div>
  )
}

export default ReviewCard
