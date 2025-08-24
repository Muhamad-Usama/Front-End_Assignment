interface QuoteResultProps {
  price: number;
  location: string;
  frequency: string;
  isCalculating: boolean;
}

const QuoteResult = ({ price, location, frequency, isCalculating }: QuoteResultProps) => {
  const formattedFrequency = frequency.toLowerCase();

  return (
    <div className="rounded-2xl bg-[#d7f3d6] text-center px-6 py-5 ring-1 ring-black/5">
      {isCalculating ? (
        <div className="flex flex-col items-center justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-b-green-700" />
          <p className="mt-2 text-[#475569]">Calculating your quote...</p>
        </div>
      ) : (
        <>
          <div className="text-3xl leading-9 font-extrabold text-[#1f2937] mb-1">
            ${price.toFixed(2)}/cut
          </div>
          <div className="text-sm text-gray-700 mt-1">
            Estimated Price for {location}:
          </div>
          <div className="text-xs text-gray mt-2">
            Based on average lawn size, {formattedFrequency}
          </div>
        </>
      )}
    </div>
  );
};

export default QuoteResult;
