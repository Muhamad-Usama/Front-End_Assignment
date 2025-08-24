interface CityGridProps { cities: string[] }

const CityGrid = ({ cities }: CityGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-y-6 font-bold text-gray-800">
      {cities.map((c) => (
        <div key={c} className="text-left text-sm">
          {c}
        </div>
      ))}
    </div>
  )
}

export default CityGrid
