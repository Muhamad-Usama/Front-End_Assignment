interface PaginationDotsProps {
  total: number
  current: number
  onChange: (index: number) => void
}

const PaginationDots = ({ total, current, onChange }: PaginationDotsProps) => {
  return (
    <div className="flex justify-center space-x-2 mt-6 md:mt-8">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onChange(i)}
          className={[
            "h-2 w-2 rounded-full transition-all duration-200",
            i === current ? "bg-blue-400" : "bg-blue-200"
          ].join(" ")}
        />
      ))}
    </div>
  )
}

export default PaginationDots
