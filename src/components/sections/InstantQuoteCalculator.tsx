import { useState } from "react";
import { ChevronDown } from "lucide-react";
import QuoteMap from "../ui/QuoteMap";
import QuoteResult from "../ui/QuoteResult";
import BenefitsSection from "./Benefits";

interface QuoteFormData {
  zipCode: string;
  grassHeight: string;
  mowingFrequency: string;
}

const InstantQuoteCalculator = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    zipCode: "29044",
    grassHeight: 'Less than 10" tall',
    mowingFrequency: "Every Week",
  });

  const [quotePrice, setQuotePrice] = useState<number | null>(48);
  const [isCalculating, setIsCalculating] = useState(false);

  const grassHeightOptions = [
    'Less than 10" tall',
    '10" - 18" tall',
    '18" - 24" tall',
    'More than 24" tall',
  ];

  const frequencyOptions = [
    "Every Week",
    "Every Two Weeks",
    "Every Three Weeks",
    "Monthly",
    "One Time Only",
  ];

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    // @ts-ignore - React 19 function parameter type compatibility
    setFormData((prev) => ({ ...prev, [field]: value }));

    setIsCalculating(true);
    setTimeout(() => {
      const current = { ...formData, [field]: value };

      let basePrice = 48;

      if (current.grassHeight === '10" - 18" tall') basePrice += 10;
      else if (current.grassHeight === '18" - 24" tall') basePrice += 20;
      else if (current.grassHeight === 'More than 24" tall') basePrice += 30;

      if (current.mowingFrequency !== "Every Week") {
        if (current.mowingFrequency === "One Time Only") basePrice += 15;
        else if (current.mowingFrequency === "Monthly") basePrice += 10;
        else basePrice += 5;
      }

      setQuotePrice(basePrice);
      setIsCalculating(false);
    }, 500);
  };

  const handleSeePrice = () => {
    console.log("See Prices clicked with quote:", quotePrice);
  };

  return (
    <section className="bg-[#f3f4f6] pt-12 md:pt-16">
      <div className="max-w-md md:max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-bold tracking-tight text-4xl leading-[40px] md:text-[40px] md:leading-[48px] text-gray-700 mb-3">
            Get an Instant
            <br /> Lawn Mowing Quote – <span className="whitespace-nowrap">Columbia, SC</span>
          </h2>
          <p className="text-[17px] leading-7 text-gray-700">
            Let AI estimate your lawn care price based on local data
          </p>
        </div>

        <div className="mb-6">
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-sm">
            <QuoteMap zipCode={formData.zipCode} />
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label
              htmlFor="grassHeight"
              className="block text-[17px] font-semibold text-[#2d2d2d] mb-2"
            >
              How tall is your grass?
            </label>
            <div className="relative">
              <select
                id="grassHeight"
                value={formData.grassHeight}
                onChange={(e) => handleInputChange("grassHeight", e.target.value)}
                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-[15px] text-[#111827] shadow-sm"
              >
                {grassHeightOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="mowingFrequency"
              className="block text-[17px] font-semibold text-[#2d2d2d] mb-2"
            >
              How often are you wanting mowing
            </label>
            <div className="relative">
              <select
                id="mowingFrequency"
                value={formData.mowingFrequency}
                onChange={(e) =>
                  handleInputChange("mowingFrequency", e.target.value)
                }
                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-[15px] text-[#111827] shadow-sm"
              >
                {frequencyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {quotePrice !== null && (
          <QuoteResult
            price={quotePrice}
            location="Columbia, SC"
            frequency={formData.mowingFrequency}
            isCalculating={isCalculating}
          />
        )}

        <div className="mt-6">
          <button
            onClick={handleSeePrice}
            className="w-full bg-gradient-to-r from-[#ff8008] to-[#ffa500] hover:opacity-90 text-white font-extrabold py-4 px-6 rounded-full text-lg transition-all duration-200 flex items-center justify-center shadow-lg"
          >
            <span className="flex items-center gap-1">
              See Prices
              <span className="text-3xl leading-none relative bottom-[2px]">›</span>
            </span>
          </button>
        </div>
      </div>

      <BenefitsSection />
    </section>
  );
};

export default InstantQuoteCalculator;
