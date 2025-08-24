import { Check } from "lucide-react";

interface ServiceItem {
  name: string;
  oneTime: boolean;
  recurring: boolean;
}

const CheckDot = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#5CC560]">
    <Check className="w-3 h-3 text-white stroke-[3]" />
  </span>
);

const ServiceComparisonTable = () => {
  const services: ServiceItem[] = [
    { name: "Mowing", oneTime: true, recurring: true },
    { name: "String trimming", oneTime: true, recurring: true },
    { name: "Clearing grass clipping from hard surfaces", oneTime: true, recurring: true },
    { name: "Picture receipt", oneTime: true, recurring: true },
    { name: "Outstanding customer service", oneTime: true, recurring: true },
    { name: "Maintaining edge along driveway & sidewalks", oneTime: false, recurring: true },
    { name: "Keep the same lawn service each time", oneTime: false, recurring: true },
    { name: "Easy skip & pause feature", oneTime: false, recurring: true },
    { name: "Locked in pricing all season", oneTime: false, recurring: true },
  ];

  return (
    <div className="bg-white w-full md:border md:border-gray-200 md:rounded-lg md:overflow-hidden">
      <div className="grid grid-cols-3 items-right px-4 py-3">
        <div className="text-[15px] font-bold text-zinc-900">Include</div>

        <div className="text-center text-[15px] font-bold text-zinc-900">
          <span className="block leading-4">One-Time</span>
          <span className="block leading-4">Cuts</span>
        </div>

        <div className="text-center text-[15px] font-bold text-zinc-900">
          <span className="block leading-4">Recurring</span>
          <span className="block leading-4">Service</span>
        </div>
      </div>

      <div className="h-px bg-gray-200 mx-4 md:mx-0" />

      <ul>
        {services.map((s, i) => (
          <li key={i}>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center">
              <div className="px-4 py-4">
                <p className="text-[14px] leading-[20px] text-zinc-700">{s.name}</p>
              </div>

              <div className="px-4 py-4 flex items-center justify-start">
                {s.oneTime ? <CheckDot /> : <span className="w-6 h-6" />}
              </div>

              <div className="px-4 py-4 flex items-center justify-start">
                {s.recurring ? <CheckDot /> : <span className="w-6 h-6" />}
              </div>
            </div>

            <div className="h-px bg-gray-200 mx-4 md:mx-0" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceComparisonTable;
