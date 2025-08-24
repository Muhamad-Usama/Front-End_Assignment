import BenefitItem from '../ui/BenefitItem'
import LeaderboardSection from './Leaderboard'

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: 'quotes',
      title: 'Get free quotes',
    },
    {
      id: 2,
      icon: 'reviews',
      title: 'Read their reviews and choose with confidence',
    },
    {
      id: 3,
      icon: 'booking',
      title: 'Hire with ease & relax',
    },
  ]

  return (
    <section className="relative pt-14 md:pt-20 mt-12 bg-gradient-to-b from-[#6CC04A] to-[#1E9D5D]"
    >
      <div className="max-w-md mx-auto md:max-w-2xl px-5 mb-12">
        <h2 className="text-white text-4xl leading-tight md:text-5xl md:leading-[1.15] font-bold text-center tracking-tight mb-10 md:mb-12 max-w-[22ch] mx-auto">
          Local lawn mowing services in Indianapolis Indiana compete for your lawn
        </h2>

        <div className="space-y-14 md:space-y-16">
          {benefits.map((b) => (
            <BenefitItem
              // @ts-ignore - React 19 key prop compatibility
              key={b.id}
              icon={b.icon}
              title={b.title}
            />
          ))}
        </div>
      </div>

      <LeaderboardSection />
    </section>
  )
}

export default BenefitsSection
