import FooterBrand from '../ui/FooterBrand'
import FooterNavigation from '../ui/FooterNavigation'
import FooterSocialAndApps from '../ui/FooterSocialAndApps'
import FooterServiceAreas from '../ui/FooterServiceAreas'
import FooterLegal from '../ui/FooterLegal'
import SeePricesButton from '../ui/SeePricesButton'

const ComprehensiveFooter = () => {
  const handleSeePrice = () => {
    console.log("See Prices clicked")
  }

  return (
    <>
      <footer className="bg-[#0a3755] text-white overflow-hidden">
        <FooterBrand />
        <FooterNavigation />
        <FooterSocialAndApps />
        <FooterServiceAreas />
      </footer>
      <section className="bg-[#09324d] text-white">
        <FooterLegal />
      </section>
      <section className='bg-white pt-3'>
        <SeePricesButton onClick={handleSeePrice} />
      </section>
    </>
  )
}
export default ComprehensiveFooter
