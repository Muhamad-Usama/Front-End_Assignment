interface ZipCodeGridProps {
  zipCodes: string[]
  showAll: boolean
}

const ZipCodeGrid = ({ zipCodes, showAll }: ZipCodeGridProps) => {
  const visibleZips = showAll ? zipCodes : zipCodes.slice(0, 6)

  return (
    <div className="grid grid-cols-6 gap-y-2 text-center text-gray-900 font-medium">
      {visibleZips.map((z, i) => (
        <span key={i} className="text-sm">
          {z}
        </span>
      ))}
    </div>
  )
}

export default ZipCodeGrid
