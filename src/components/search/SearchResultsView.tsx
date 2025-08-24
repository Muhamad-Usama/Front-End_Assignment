import { useEffect, useMemo, useState } from "react"
import SearchResultsTopBar from "./SearchResultsTopBar"
import VendorCard from "../ui/VendorCard"
import VendorSkeletonCard from "../ui/VendorSkeletonCard"
import NoResults from "../ui/NoResults"

export type Vendor = {
  id: number
  name: string
  rating: number
  reviews: number
  verified: boolean
  cityStateZip: string
  zip: string
  serving: string
  blurb: string
  date: string
  avatarUrl?: string
}

type Status = "loading" | "success" | "empty"

interface Props {
  initialQuery: string
  onCancel: () => void
}

const MOCK_VENDORS: Vendor[] = [
  {
    id: 1,
    name: "Green Lawn Care",
    rating: 4.8,
    reviews: 5109,
    verified: true,
    cityStateZip: "Nashville, TN 37220",
    zip: "37220",
    serving: "Serving 22 homes near you",
    blurb: "I love Mercury Greens they always do such a detailed job.",
    date: "Aug 8, 2025",
    avatarUrl: "/images/vendor1.png",
  },
  {
    id: 2,
    name: "Mercury Greens",
    rating: 4.9,
    reviews: 2841,
    verified: true,
    cityStateZip: "Nashville, TN 37211",
    zip: "37211",
    serving: "Serving 18 homes near you",
    blurb: "Fast, reliable, and detailed every time.",
    date: "Aug 8, 2025",
    avatarUrl: "/images/vendor2.png",
  },
  {
    id: 3,
    name: "Yard Pros",
    rating: 4.7,
    reviews: 1933,
    verified: true,
    cityStateZip: "Franklin, TN 37064",
    zip: "37064",
    serving: "Serving 12 homes near you",
    blurb: "Edges sharp, lawn clean – guaranteed.",
    date: "Aug 8, 2025",
    avatarUrl: "/images/vendor3.png",
  },
]

export default function SearchResultsView({ initialQuery, onCancel }: Props) {
  const [query, setQuery] = useState(initialQuery)
  const [status, setStatus] = useState<Status>("loading")
  const [vendors, setVendors] = useState<Vendor[]>([])

  const norm = (s: string) => s.toLowerCase().trim()

  const matches = (v: Vendor, q: string) => {
    const nq = norm(q)
    if (!nq) return false
    const isZipLike = /^\d{2,}$/.test(nq)
    if (isZipLike) {
      return v.zip.includes(nq) || v.cityStateZip.toLowerCase().includes(nq)
    }
    return (
      v.name.toLowerCase().includes(nq) ||
      v.cityStateZip.toLowerCase().includes(nq)
    )
  }

  const filtered = useMemo(() => {
    const q = query.trim()
    if (!q) return []
    return MOCK_VENDORS.filter((v) => matches(v, q))
  }, [query])

  useEffect(() => {
    setStatus("loading")
    setVendors([])

    const t = setTimeout(() => {
      if (filtered.length === 0) {
        setStatus("empty")
      } else {
        setVendors(filtered)
        setStatus("success")
      }
    }, 900)

    return () => clearTimeout(t)
  }, [filtered])

  return (
    <div className="bg-[#E9F6FB] min-h-screen">
      <SearchResultsTopBar
        value={query}
        onChange={setQuery}
        onCancel={onCancel}
        placeholder="Search by Name or Zip Code."
      />

      <div className="text-center text-gray-500 text-sm mt-3">
        {status === "loading"
          ? `Searching for vendors near ${query}...`
          : status === "success"
          ? `${vendors.length} lawn pros found near you`
          : ""}
      </div>

      <div className="max-w-md mx-auto md:max-w-2xl px-4 pt-4 pb-10">
        {status === "loading" && (
          <div className="space-y-4">
            <VendorSkeletonCard />
            <VendorSkeletonCard />
          </div>
        )}

        {status === "empty" && (
          <div className="pt-16">
            <NoResults />
          </div>
        )}

        {status === "success" && (
          <div className="space-y-5">
            {vendors.map((v) => (
              // @ts-ignore - React 19 key prop compatibility
              <VendorCard key={v.id} vendor={v} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
