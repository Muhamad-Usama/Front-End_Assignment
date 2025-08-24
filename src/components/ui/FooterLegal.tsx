const FooterLegal = () => {
  return (
    <div className="px-4 pt-2 pb-2">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <div className="flex justify-center gap-6 mb-1">
          <button
            onClick={() => console.log('Privacy Policy')}
            className="text-white/85 hover:text-white text-[12px] md:text-[14px]"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => console.log('Terms & Conditions')}
            className="text-white/85 hover:text-white text-[12px] md:text-[14px]"
          >
            Terms & Conditions
          </button>
        </div>

        <div className="text-center text-white text-[12px] md:text-[14px]">
          Copyright © 2025 GreenPal Co. All rights reserved.
        </div>
      </div>
    </div>
  )
}
export default FooterLegal
