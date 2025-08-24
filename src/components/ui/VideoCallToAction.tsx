import { Play } from 'lucide-react'

interface VideoCallToActionProps {
  onPlayVideo: () => void
  onSeePrice: () => void
  isVideoPlaying: boolean
}

const VideoCallToAction = ({ onPlayVideo, onSeePrice, isVideoPlaying }: VideoCallToActionProps) => {
  return (
    <div className="text-white py-10">
      <h3 className="text-[29px] md:text-3xl font-semibold leading-tight">
        Tired of unreliable lawn services? So are we…
        <span className="block mt-1">See how it works</span>
      </h3>

      <p className="mt-3 text-base leading-relaxed text-white/90">
        Save Time, Save Money, Book a great local landscaping service in
        Indianapolis now with GreenPal.
      </p>

      <div className="mt-4">
        <button
          type="button"
          onClick={onPlayVideo}
          className="text-[#FF9C00] font-semibold text-base"
        >
          Click here to watch how GreenPal works.
        </button>
        <div className="h-5">
          <svg
            viewBox="0 0 64 32"
            className="w-10 h-5 text-[#FF9C00] mt-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M2 2c10 20 30 24 60 24" />
            <path d="M50 26l9 0-5 5" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="mt-4 rounded-3xl overflow-hidden shadow-lg">
        <div
          className="relative h-48 md:h-64 cursor-pointer"
          onClick={onPlayVideo}
          aria-label="Play video"
        >
          <img
            src="/images/video-thumbnail.png"
            alt="GreenPal: how it works"
            className="w-full h-full object-cover"
          />

          {!isVideoPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center">
                <Play className="w-8 h-8 text-[#0A3B56] ml-1" fill="currentColor" />
              </div>
            </div>
          )}

          {isVideoPlaying && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold">
              Video Playing…
            </div>
          )}
        </div>
      </div>

      <div className="mt-7">
        <button
          onClick={onSeePrice}
          className="mt-5 w-full max-w-sm mx-auto flex items-center justify-center py-4 px-6 rounded-full text-white font-bold text-lg
                   bg-gradient-to-r from-[#FF8A00] to-[#FF6A00] shadow
                   hover:from-[#FF7A00] hover:to-[#FF5A00] transition-colors"
        >
          <span className="flex items-center gap-1">
            See Prices
            <span className="text-3xl leading-none relative bottom-[2px]">›</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default VideoCallToAction
