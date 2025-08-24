import { Search } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  placeholder: string
}

const SearchInput = ({ value, onChange, onSearch, placeholder }: SearchInputProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="w-full pl-11 pr-6 py-4 rounded-xl border border-[#babbbc] bg-[#E6F4F9] text-base text-gray-700 placeholder-gray-600 focus:border-green-500 focus:outline-none"
        />
      </div>
    </form>
  )
}

export default SearchInput
