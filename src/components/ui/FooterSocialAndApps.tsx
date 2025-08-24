import React from "react"

const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FFFFFF" d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
  </svg>
)

const PlaystoreIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 40 40" width="18" height="18" {...props}>
    <path fill="none" d="M0 0h40v40H0z" />
    <g fill="currentColor">
      <path d="M19.7 19.2L4.3 35.3c0 .0 0 .0 0 0 .5 1.7 2.1 3 4 3 .8 0 1.5-.2 2.1-.6l17.4-9.9-8.1-8.6z" />
      <path d="M35.3 16.4l-7.5-4.3-8.4 7.4 8.5 8.3 7.5-4.2c1.3-.7 2.2-2.1 2.2-3.6 0-1.5-.9-2.9-2.3-3.6z" />
      <path d="M4.3 4.7c-.1.3-.1.7-.1 1.1v28.5c0 .4 0 .7.1 1.1l16-15.7L4.3 4.7z" />
      <path d="M19.8 20l8-7.9L10.5 2.3C9.9 1.9 9.1 1.7 8.3 1.7c-1.9 0-3.6 1.3-4 3l15.5 15.3z" />
    </g>
  </svg>
)

const FooterSocialAndApps: React.FC = () => {
  return (
    <div className="px-4 pt-1">
      <div className="max-w-md mx-auto md:max-w-2xl">
        <div className="mb-2">
          <h3 className="text-[16px] font-semibold mb-3 text-center">
            Get the remote control for your lawn
          </h3>

          <div className="flex flex-row gap-3 justify-center">
            <button
              aria-label="Download on Play Store"
              className="flex items-center gap-2 rounded-full border border-white/70 px-6 text-white text-[12px] leading-none hover:bg-white/10 transition"
            >
              <PlaystoreIcon className="text-white" />
              <span className="text-[13px]">Play Store</span>
            </button>

            <button
              aria-label="Download on App Store"
              className="flex items-center gap-2 rounded-full border border-white/70 px-6 text-white text-[12px] leading-none hover:bg-white/10 transition"
            >
              <AppleIcon className="text-white" />
              <span className="text-[13px]">App Store</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/tagfooter.png"
            alt="Total Satisfaction backed by the GreenPal Guarantee"
            className="w-[300px] md:w-[360px] h-[100px] mt-2"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterSocialAndApps
