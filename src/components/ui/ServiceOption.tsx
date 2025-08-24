interface ServiceOptionProps {
  type: 'one-time' | 'recurring'
  title: string
  description: string
  icon: string
  iconBg: string
  isSelected: boolean
  onSelect: () => void
}

const ServiceOption = ({
  type,
  title,
  description,
  icon,
  iconBg,
  onSelect,
}: ServiceOptionProps) => {
  return (
    <button
      onClick={onSelect}
      className={`w-full flex items-center p-4 rounded-lg transition-all duration-200 text-left
                  ${type === 'one-time' ? 'bg-orange-50' : 'bg-green-50'}`}
    >
      <div
        className={`w-16 h-16 ${iconBg} text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}
      >
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm leading-snug">{description}</p>
      </div>
    </button>
  )
}

type ServiceType = 'one-time' | 'recurring';

interface ServiceOptionsListProps {
  selectedOption: ServiceType;
  setSelectedOption: React.Dispatch<React.SetStateAction<ServiceType>>;
}

export default function ServiceOptionsList({
  selectedOption,
  setSelectedOption,
}: ServiceOptionsListProps) {
  return (
    <div className="w-full relative">
      <div className="relative">
        <ServiceOption
          type="one-time"
          title="One-Time Cuts"
          description="Great for anyone looking to take a break from mowing their lawn."
          icon="1x"
          iconBg="bg-orange-400"
          isSelected={selectedOption === 'one-time'}
          onSelect={() => setSelectedOption('one-time')}
        />

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-10">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0">
              <div className="h-1/2 bg-orange-50 rounded-t-full" />
              <div className="h-1/2 bg-green-50 rounded-b-full" />
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm grid place-items-center">
                <span className="text-[11px] font-extrabold text-gray-700">or</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceOption
        type="recurring"
        title="Recurring Service"
        description="Perfect for those in need of weekly, bi-weekly or monthly cuts."
        icon="↻"
        iconBg="bg-green-500"
        isSelected={selectedOption === 'recurring'}
        onSelect={() => setSelectedOption('recurring')}
      />
    </div>
  )
}
