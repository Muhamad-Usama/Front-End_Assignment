import { useState } from "react"
import MediaLogos from "../ui/MediaLogos"
import SearchInput from "../ui/SearchInput"
import Breadcrumb from "../ui/Breadcrumb"
import FAQSection from "./FAQ"
import SearchResultsView from "../search/SearchResultsView"

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true)
    }
  }

  if (showResults) {
    return (
      <SearchResultsView
        initialQuery={searchQuery}
        onCancel={() => setShowResults(false)}
      />
    )
  }

  return (
    <div className="bg-white">
      <MediaLogos />

      <div className="bg-[#E9F6FB] px-4 py-8 md:py-12">
        <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          <Breadcrumb />

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
              Find Trusted Lawn Care Pros Instantly
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Search by Name or Zip Code. Easy booking in seconds
            </p>
          </div>

          <div className="mb-0">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              placeholder="Search by Name or Zip Code"
            />
          </div>
        </div>
      </div>

      <FAQSection />
    </div>
  )
}
