import { PriceRibbon } from './PriceRibbon';

type Provider = {
  id: number; name: string; image: string;
  rating: number; reviews: number; avgPrice: number; available: boolean;
};

export default function ServiceCardMobile({ provider }: { provider: Provider }) {
  const stars = Math.round(provider.rating);

  return (
    <div className="relative bg-white rounded-3xl shadow-[0_10px_20px_rgba(0,0,0,0.12)] px-4 py-4">
      <PriceRibbon amount={provider.avgPrice} />

      <div className="flex gap-3">
        <img
          src={provider.image}
          alt={provider.name}
          className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow"
        />

        <div className="flex-1">
          <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium  text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10" fill="#22c55e" />
              <path
                fill="#fff"
                d="M8.5 13.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z"
              />
            </svg>
            Available
          </div>

          <h3 className="mt-1 font-bold text-gray-700">{provider.name}</h3>

          <div className="mt-0.5 flex items-center gap-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className={`h-5 w-5 ${i < stars ? '' : 'opacity-30'}`} fill="currentColor">
                  <path d="M10 15.27l-5.18 3.05 1.64-5.64L1 7.97l5.91-.51L10 2l3.09 5.46 5.91.51-5.46 4.71 1.64 5.64z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">
              ({provider.rating.toFixed(1)}/5 {provider.reviews} Reviews)
            </span>
          </div>

          <div className="mt-1 text-gray-700">
            <span className="text-emerald-400 font-extrabold">$</span>{' '}
            <span className="font-semibold text-sm">Avg. Price:</span>{' '}
            <span className="font-semibold text-sm">${provider.avgPrice}</span>{' '}
            <span className="text-gray-700 text-sm">per cut</span>
          </div>

          <button
            onClick={(e) => { e.stopPropagation();}}
            className="mt-3 w-24 font-semibold rounded-full border border-gray-800 bg-white py-2 text-gray-800 text-sm hover:bg-gray-50"
          >
            See Price
          </button>
        </div>
      </div>
    </div>
  );
}
