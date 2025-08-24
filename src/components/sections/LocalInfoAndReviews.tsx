import LocalCityInfo from '../ui/LocalCityInfo'
import CustomerReviewsSection from '../ui/CustomerReviewsSection'
import FinalCTASection from './FinalCTA'

const LocalInfoAndReviewsSection = () => {
  return (
    <>
      <section className="bg-[#E9F3FA]">
        <div className="max-w-md md:max-w-2xl mx-auto px-4 pt-10 pb-8">
          <LocalCityInfo />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-md md:max-w-2xl mx-auto px-4 pt-8 pb-10">
          <CustomerReviewsSection />
        </div>
      </section>

      <FinalCTASection />
    </>
  )
}

export default LocalInfoAndReviewsSection
