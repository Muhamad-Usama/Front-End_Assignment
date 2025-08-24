import { CheckCircle2, MapPin } from "lucide-react"
import { Vendor } from "../search/SearchResultsView"

export default function VendorCard({ vendor }: { vendor: Vendor }) {
  const Stars = () => (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-[18px] ${
            i < Math.round(vendor.rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  )

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center gap-3">
        <img
          src={vendor.avatarUrl || "/avatars/placeholder.png"}
          className="w-10 h-10 rounded-full object-cover"
          alt={vendor.name}
        />
        <div className="flex-1">
          {vendor.verified && (
            <div className="flex items-center text-green-600 text-sm mb-0.5">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              <span>Verified by GreenPal</span>
            </div>
          )}
          <div className="font-extrabold text-[18px] leading-tight">
            {vendor.name}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Stars />
            <span className="text-gray-500">
              ({vendor.rating.toFixed(1)}/5·{vendor.reviews.toLocaleString()} Reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center text-gray-600">
        <MapPin className="w-4 h-4 mr-1.5" />
        <span className="text-sm">{vendor.cityStateZip}</span>
      </div>

      <div className="mt-2 inline-flex items-center px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs">
        {vendor.serving}
      </div>

      <p className="mt-3 text-gray-700 text-[15px] leading-relaxed">
        {vendor.blurb}
      </p>

      <div className="text-gray-400 text-sm mt-2">{vendor.date}</div>

      <div className="mt-4">
        <button className="w-full rounded-full bg-[#6BBE45] hover:bg-[#5BA73B] text-white font-semibold py-3">
          Get Instant Price ›
        </button>
      </div>
    </div>
  )
}
