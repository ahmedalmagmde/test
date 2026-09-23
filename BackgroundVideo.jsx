import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function BackgroundVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const hlsUrl = 'https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8'

    // Check if browser natively supports HLS (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl
    } else if (Hls.isSupported()) {
      // Use hls.js for other browsers
      const hls = new Hls()
      hls.loadSource(hlsUrl)
      hls.attachMedia(video)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-100"
      />
    </div>
  )
}
