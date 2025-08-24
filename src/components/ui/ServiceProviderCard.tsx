import { useState, useMemo } from "react";

interface ServiceProvider {
  id: number;
  name: string;
  businessName: string;
  location: string;
  image: string;
  hiredCount: number;
  rating: number;
  reviewCount: number;
  testimonial: string;
  isTopRated: boolean;
}

interface ServiceProviderCardProps {
  provider: ServiceProvider;
}

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-4 w-4 lg:h-[14px] lg:w-[14px] ${filled ? "text-[#f6b01e]" : "text-gray-300"}`}
    fill="currentColor"
    aria-hidden
  >
    <path d="M10 15.27l-5.18 3.05 1.64-5.64L1 7.97l5.91-.51L10 2l3.09 5.46 5.91.51-5.46 4.71 1.64 5.64z" />
  </svg>
);

const ServiceProviderCard = ({ provider }: ServiceProviderCardProps) => {
  const [showFull, setShowFull] = useState(false);

  const LIMIT_MOBILE = 160;
  const LIMIT_DESKTOP = 220;

  const text = useMemo(() => {
    const full = provider.testimonial ?? "";
    if (showFull) return full;
    const limit = typeof window !== "undefined" && window.innerWidth >= 1024 ? LIMIT_DESKTOP : LIMIT_MOBILE;
    return full.length > limit ? full.slice(0, limit).trim() + "…" : full;
  }, [provider.testimonial, showFull]);

  const stars = Math.round(provider.rating);

  return (
    <div className="border-t border-gray-200 first:border-t-0 lg:border-t-0 pt-4 lg:pt-6 lg:pb-8">

      <div className="flex items-start gap-3 lg:gap-4">
        <img
          src={provider.image || "/placeholder.svg"}
          alt={provider.name}
          className="h-20 w-20 rounded-full object-cover shrink-0"
        />

        <div className="min-w-0 flex-1">
          <p className="text-[16px] leading-5 lg:leading-6 text-[#3f3f46]">
            {provider.businessName}
          </p>
          <p className="text-[14px] leading-5 text-gray-500/600">
            Services in {provider.location}
          </p>

          <p className="mt-1 text-[14px] leading-5 font-semibold text-[#2c2c2c]">
            Hired {provider.hiredCount} times on GreenPal
          </p>

          <div className="mt-1 lg:mt-1.5">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                // @ts-ignore - React 19 key prop compatibility
                <Star key={i} filled={i < stars} />
              ))}
            </div>
            <p className="mt-1 text-[12px] lg:text-[13px] leading-4 text-black/80">
              (overall rating {provider.rating.toFixed(1)}/5, {provider.reviewCount} Reviews)
            </p>
          </div>

          <button
            onClick={() => console.log(`See price for ${provider.businessName}`)}
            className="mt-3 inline-flex items-center justify-center
                       px-12 py-2 rounded-full
                       border border-[#f97316] text-[#f97316]
                       font-bold text-[14px]
                       hover:bg-orange-50 transition-colors"
          >
            <span className="flex items-center gap-1">
              See Price
              <span className="text-2xl leading-none relative bottom-[1px]">›</span>
            </span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        <blockquote className="text-[15px] leading-6 lg:leading-7 text-black">
          <span className="mr-1 text-2xl text-gray-400 align-middle">“</span>
          {text}
        </blockquote>

        {provider.testimonial.length > 100 && (
          <button
            onClick={() => {
              // @ts-ignore - React 19 function parameter type compatibility
              setShowFull((s) => !s)
            }}
            className="mt-2 text-[#1d9bd1] font-semibold text-[14px] underline underline-offset-2"
          >
            {showFull ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceProviderCard;
