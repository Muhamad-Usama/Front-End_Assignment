interface FilterOption {
  label: string
  count: number
}

interface ReviewFiltersProps {
  filters: FilterOption[]
  selectedFilters: string[]
  onFilterChange: (filters: string[]) => void
}

const ReviewFilters = ({ filters, selectedFilters, onFilterChange }: ReviewFiltersProps) => {
  const toggle = (label: string) => {
    const next = selectedFilters.includes(label)
      ? selectedFilters.filter(f => f !== label)
      : [...selectedFilters, label]
    onFilterChange(next)
  }

  return (
    <div className="mb-6">
      <p className="text-gray-700 text-left mb-3 text-[14px]">
        Read reviews that mention:
      </p>

      <div className="flex flex-wrap gap-3">
        {filters.map((f) => {
          const active = selectedFilters.includes(f.label)
          return (
            <button
              key={f.label}
              onClick={() => toggle(f.label)}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium transition',
                active
                  ? 'bg-blue-500 text-white border border-blue-500'
                  : 'bg-white text-[#00a3e7] border border-gray-300 hover:bg-blue-50'
              ].join(' ')}
            >
              {f.label} <span className="font-extrabold"> · </span> {f.count}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewFilters
