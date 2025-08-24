import { Crown, MapPin, DollarSign, Scissors, Users } from "lucide-react";

interface LeaderboardProvider {
  id: number;
  rank: number;
  name: string;
  businessName: string;
  image: string;
  location: string;
  state: string;
  ranking: string;
  rating: number;
  reliabilityRating: number;
  price: number;
  earned: number;
  lawnsCount: number;
  hiredCount: number;
  services: string[];
  additionalServicesCount: number;
}

interface LeaderboardCardProps {
  provider: LeaderboardProvider;
}

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex items-center justify-center gap-[2px] text-2xl leading-none">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < Math.round(rating) ? "text-[#f6b01e]" : "text-gray-300"}>
        ★
      </span>
    ))}
  </div>
);

const currency0 = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const LeaderboardCard = ({ provider }: LeaderboardCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
      <div className="flex items-start">
        <div className="text-3xl font-bold text-[#2b2b2b]">#{provider.rank}</div>

        <div className="relative mx-auto">
          {provider.rank === 1 && (
            <Crown className="w-8 h-8 text-[#f6b01e] fill-current absolute -top-4 left-1/2 -translate-x-1/2" />
          )}
          <div className="w-24 h-24 rounded-full ring-2 ring-[#f6b01e] ring-offset-2 ring-offset-white overflow-hidden mt-4">
            <img
              src={provider.image || "/placeholder.svg"}
              alt={provider.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-2 text-center">
        <div className="text-[15px] font-semibold text-[#ff7a00]">
          {provider.ranking}
        </div>
        <h3 className="mt-1 text-2xl font-[600] text-gray">
          {provider.businessName}
        </h3>
      </div>

      <div className="mt-1 text-center">
        <StarRow rating={provider.rating} />
        <div className="mt-1 text-[15px] font-semibold text-[#28a745]">
          {provider.reliabilityRating}%
          <span className="font-normal text-black"> Reliability Rating</span>
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <div className="inline-flex items-baseline gap-1 rounded-md bg-[#f3ebe4] px-3 py-1.5">
          <span className="text-3xl font-extrabold text-[#ff7a00]">
            ${provider.price}
          </span>
          <span className="text-[18px] text-black">/ Mowing</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-[15px] leading-5">
        <div className="flex items-start gap-2">
          <DollarSign className="w-4 h-4 text-gray mt-[2px]" />
          <div>
            <div className="font-semibold text-green-700">{currency0(provider.earned)}</div>
            <div className="text-green-700">earned</div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-gray mt-[2px]" />
          <div>
            <div className="font-semibold text-green-700">
              {provider.location}, {provider.state}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Scissors className="w-4 h-4 text-gray mt-[2px]" />
          <div>
            <div className="font-semibold text-green-700">{provider.lawnsCount} lawns</div>
            <div className="text-green-700">mowed in</div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Users className="w-4 h-4 text-gray mt-[2px]" />
          <div>
            <div className="font-semibold text-green-700">Hired {provider.hiredCount}</div>
            <div className="text-green-700">Times</div>
          </div>
        </div>
      </div>

      <div className="my-3 h-px bg-[#e5e7eb]" />

      <div>
        <h4 className="font-semibold text-gray-700 text-lg">Yard Maintenance Services offered</h4>

        <div className="mt-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#28a745] grid place-items-center">
            <span className="text-white text-[18px] leading-none">✓</span>
          </div>
          <span className="text-[#374151]">{provider.services?.[0] ?? "Service"}</span>
        </div>

        <button
          onClick={(e) => e.stopPropagation()}
          className="mt-2 text-[15px] text-[#ff7a00] font-semibold underline underline-offset-2 hover:opacity-90"
        >
          View +{provider.additionalServicesCount} Services
        </button>
      </div>

      <button
        onClick={(e) => e.stopPropagation()}
        className="mt-4 w-full rounded-full bg-gradient-to-r from-[#ff8008] to-[#ffa500] text-white font-bold text-xl py-3 shadow-md hover:opacity-95 transition"
      >
        <span className="inline-flex items-center gap-1">
          See Prices <span className="text-3xl leading-none relative bottom-[1px]">›</span>
        </span>
      </button>
    </div>
  );
};

export default LeaderboardCard;
