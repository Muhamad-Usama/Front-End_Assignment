import { MapPin, DollarSign, Clock, Calendar } from 'lucide-react'
import { PriceRibbon } from './PriceRibbon'

interface LawnProject {
  id: number
  title: string
  location: string
  nearbyLandmark: string
  price: number
  lastMowed: string
  frequency: string
  customerNote: string
  image: string
  overlayPrice: number
}

interface LawnProjectCardProps {
  project: LawnProject
}

const LawnProjectCard = ({ project }: LawnProjectCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <div className="relative h-44 md:h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-3 left-3  text-white px-3 py-1 rounded text-xs font-bold tracking-wide">
          GREENPAL
        </div>

        <PriceRibbon amount={project.overlayPrice} />
      </div>

      <div className="p-5">
        <h3 className="text-[16px] md:text-lg font-semibold text-gray-900 mb-1">
          {project.title}
        </h3>

        <div className="flex items-start text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2 mt-[2px]" />
          <span className="text-sm leading-snug">{project.nearbyLandmark}</span>
        </div>

        <div className="space-y-2.5 mb-4">
          <div className="flex items-center text-sm">
            <DollarSign className="w-4 h-4 text-green-600 mr-2" />
            <span className='text-gray-700'><span className="font-semibold">Price:</span> ${project.price} per cut</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 text-green-600 mr-2" />
            <span className='text-gray-700'><span className="font-semibold">Last Mowed:</span> {project.lastMowed}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 text-green-600 mr-2" />
            <span className='text-gray-700'><span className="font-semibold">Service Frequency:</span> {project.frequency}</span>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            {project.customerNote}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LawnProjectCard
