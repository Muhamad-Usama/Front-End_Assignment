import { Facebook, Instagram } from 'lucide-react'

const FooterNavigation = () => {
  const sections = {
    greenpal: [
      'Lawn Care Blog',
      'Snow Removal Services',
      'Frequently Asked Questions',
      'Affordable Lawn Care',
      'Lawn Care Near Me',
      'Lawn Mowing Tips',
    ],
    services: [
      'Landscaping',
      'Yard Clean Up Tips',
      'Order Lawn Care',
      'GreenPal Reviews',
      'Contact Us',
      'About Us',
    ],
    providers: ['Apply to be a GreenPal', 'Business Guides', 'Vendor Free Lawn'],
  }

  const Link = ({ label }: { label: string }) => (
    <button
      onClick={() => console.log('Footer link:', label)}
      className="text-left text-white/85 hover:text-white transition-colors text-[11px] md:text-[12px]"
    >
      {label}
    </button>
  )

  return (
    <div className="px-4 pt-2">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <div className="mb-3">
          <h3 className="text-[16px] font-semibold mb-3">GreenPal</h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4">
            {sections.greenpal.map((l) => (
              <Link key={l} label={l} />
            ))}
          </div>
        </div>

        <div className="mb-7">
          <div className="grid grid-cols-2 gap-y-3 gap-x-4">
            {sections.services.map((l) => (
              <Link key={l} label={l} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 mb-4">
          <div>
            <h3 className="text-[16px] font-semibold">Providers</h3>
            <div className="space-y-3">
              {sections.providers.map((l) => (
                <Link key={l} label={l} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold mb-3">Connect with us</h3>
            <div className="flex gap-1 flex-wrap">
              <button
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/30 bg-transparent hover:bg-white/10 flex items-center justify-center transition"
              >
                <Facebook className="w-5 h-5 text-white" />
              </button>
              <button
                aria-label="X"
                className="w-9 h-9  rounded-full border border-white/30 bg-transparent hover:bg-white/10 flex items-center justify-center transition"
              >
                <span className="font-semibold text-white">X</span>
              </button>
              <button
                aria-label="Pinterest"
                className="w-9 h-9  rounded-full border border-white/30 bg-transparent hover:bg-white/10 flex items-center justify-center transition"
              >
                <span className="font-semibold text-white">P</span>
              </button>
              <button
                aria-label="Instagram"
                className="w-9 h-9  rounded-full border border-white/30 bg-transparent hover:bg-white/10 flex items-center justify-center transition"
              >
                <Instagram className="w-5 h-5text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterNavigation
