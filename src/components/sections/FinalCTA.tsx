import { useState } from 'react'
import RankingExplanation from '../ui/RankingExplanation'
import VideoCallToAction from '../ui/VideoCallToAction'
import ComprehensiveFooter from '../footer/ComprehensiveFooter'

const FinalCTASection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    console.log('Playing GreenPal demo video')
  }

  const handleSeePrice = () => {
    console.log('Final See Prices clicked')
  }

  return (
    <>
      <section className="bg-[#f7f9fc]">
        <div className="max-w-md mx-auto md:max-w-2xl px-4 pb-8">
          <RankingExplanation />
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#0A3B56] to-[#0E5A77]">
        <div className="max-w-md mx-auto md:max-w-2xl px-4">
          <VideoCallToAction
            onPlayVideo={handlePlayVideo}
            onSeePrice={handleSeePrice}
            isVideoPlaying={isVideoPlaying}
          />
        </div>
      </section>

      <ComprehensiveFooter />
    </>
  )
}

export default FinalCTASection
