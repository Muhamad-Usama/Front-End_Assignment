interface ServiceProvider {
  id: number
  name: string
  image: string
  rating: number
  reviews: number
  avgPrice: number
  available: boolean
}

interface ServiceCardProps {
  provider: ServiceProvider
}

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-4 w-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    aria-hidden
  >
    <path d="M10 15.27l-5.18 3.05 1.64-5.64L1 7.97l5.91-.51L10 2l3.09 5.46 5.91.51-5.46 4.71 1.64 5.64z" />
  </svg>
)

const ServiceCard = ({ provider }: ServiceCardProps) => {
  const fullStars = Math.round(provider.rating)

  return (
    <div
      className="group relative bg-white/95 rounded-3xl p-6 shadow-[0_6px_18px_rgba(0,0,0,0.12)]
                 border border-black/5 transition-all duration-200
                 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
    >
      <div className="absolute -top-3 right-4">
        <span className="bg-gradient-to-r from-[#ff8008] to-[#ffa500] text-white
                         px-3 py-1 rounded-full text-sm font-bold shadow">
          ${provider.avgPrice}
        </span>
      </div>

      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <img
            src={provider.image || '/placeholder.svg'}
            alt={provider.name}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-1
                       ${provider.available ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-200 text-gray-600'}`}
            aria-label={provider.available ? 'Available' : 'Unavailable'}
          >
            <span className={`h-2 w-2 rounded-full inline-block ${provider.available ? 'bg-emerald-600' : 'bg-gray-500'}`}/>
            {provider.available ? 'Available' : 'Unavailable'}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1 line-clamp-1">
            {provider.name}
          </h3>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} filled={i < fullStars} />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({provider.rating.toFixed(1)}/5 {provider.reviews} Reviews)
            </span>
          </div>

          <div className="text-gray-700 mb-4">
            <span className="text-emerald-600 font-extrabold align-middle">$</span>{' '}
            <span className="font-semibold">Avg. Price:</span>{' '}
            <span className="font-semibold">${provider.avgPrice}</span>{' '}
            <span className="text-gray-500">per cut</span>
          </div>

          <button
            className="w-40 rounded-full border border-gray-300 bg-white py-2
                       text-gray-800 font-medium shadow-sm
                       hover:border-gray-400 hover:bg-gray-50
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          >
            See Price
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
