interface ProcessStepProps {
  stepNumber: number
  title: string
  src: string
  isLast: boolean
}

const CircleImage = ({ src, alt }: { src: string; alt?: string }) => (
  <div className="relative w-48 h-48 mx-auto">
    <div className="w-full h-full rounded-full bg-white ring-4 ring-[#cfe9da] overflow-hidden">
      <img
        src={src}
        alt={alt ?? ""}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const Line = () => (
  <svg className="block mx-auto w-20 h-20" viewBox="0 0 100 120" aria-hidden>
    <path
      d="M50 0 C 34 30, 34 60, 50 90"
      className="        
        fill-none
        stroke-gray-400
        [stroke-width:3]
        [stroke-dasharray:2_8]
        [stroke-linecap:round]
        opacity-100"
    />
  </svg>
);

const ProcessStep = ({ stepNumber, title, src, isLast }: ProcessStepProps) => {
  return (
    <div className="relative md:mb-10">
      <div className="flex items-center justify-center md:justify-start mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-400 text-[#373737] rounded-full flex items-center justify-center font-bold text-lg">
            {stepNumber}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-700">
            {title}
          </h3>
        </div>
      </div>

      <CircleImage src={src} alt={title} />

      {!isLast && (
        <div className="mt-4 md:hidden">
          <Line />
        </div>
      )}
    </div>
  )
}

export default ProcessStep
