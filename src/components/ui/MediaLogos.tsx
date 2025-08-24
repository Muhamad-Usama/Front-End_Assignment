const MediaLogos = () => {
  const mediaLogos = [
    { name: 'Wall Street Journal', logo: 'WSJ' },
    { name: 'Forbes', logo: 'Forbes' },
    { name: 'Harvard Business Review', logo: 'HBR' },
    { name: 'TIA', logo: 'TIA' },
    { name: 'Bloomberg', logo: 'Bloomberg' },
    { name: 'USA Today', logo: 'USA Today' },
  ];
  const loop = [...mediaLogos, ...mediaLogos];

  return (
    <div className="py-4 md:py-10 text-white bg-gradient-to-b from-[#0b9b47] via-[#0fb552] to-[#12ce5c]">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-5 opacity-90">
          As seen in...
        </h3>

        <div className="relative overflow-hidden mask-fade">
          <div className="flex whitespace-nowrap animate-marquee gap-10 md:gap-16">
            {loop.map((m, i) => (
              <div key={i} className="inline-flex items-center justify-center text-white/90 font-bold text-2xl">
                {m.logo}
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-white/40 my-4 relative left-1/2 -translate-x-1/2" />

        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl font-bold">4.8/5</span>
            <div className="leading-tight">
              <div className="text-base">4,564</div>
              <div className="text-base">reviews</div>
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20 w-6 h-6 rounded-sm flex items-center justify-center"
              >
                <span className="text-yellow-400 text-2xl">★</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MediaLogos;
