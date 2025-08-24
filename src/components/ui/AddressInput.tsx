interface AddressInputProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

const AddressInput = ({ value, onChange, placeholder }: AddressInputProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-4 rounded-full text-gray-700 placeholder-gray-500 text-lg border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg text-center placeholder:text-center"
      />
    </div>
  )
}

export default AddressInput
