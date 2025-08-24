import { X, Search } from "lucide-react"

interface Props {
  value: string
  onChange: (v: string) => void
  onCancel: () => void
  placeholder?: string
}

export default function SearchResultsTopBar({
  value,
  onChange,
  onCancel,
  placeholder = "Search by Name or .",
}: Props) {
  return (
    <div className="sticky top-0 z-20 bg-[#E9F6FB] pt-6 pb-2 px-4">
      <h3 className="text-gray-700 font-medium mb-3">{placeholder}</h3>

      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-10 py-3 rounded-2xl border border-gray-200 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Green Lawn Care"
          />
          {value && (
            <button
              aria-label="Clear"
              onClick={() => onChange("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </div>

        <button
          onClick={onCancel}
          className="text-gray-500 text-[15px] font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
