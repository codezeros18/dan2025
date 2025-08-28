import bg from '../assets/back2.webp'
import React, { useRef } from "react";
import vid from '../assets/bgvid.mp4'

const VideoPage : React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitEnterFullscreen) {
        // Safari iOS
        (videoRef.current as any).webkitEnterFullscreen();
      }
    }
  };
  return (
   <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
  {/* Background image */}
  <img
    src={bg} // ganti path sesuai file kamu
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay gradient supaya teks lebih terbaca */}
<div className="absolute inset-0 bg-gradient-to-b 
  from-[#0a0a2e]/95 
  via-[#1b174d]/85 
  to-[#2d2470]/80">
</div>



  {/* Konten utama */}
  <div className="relative z-10 text-center px-6 md:px-12 lg:px-20">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
      Stay Sharp <br />Stay Strong and Stay Clean
    </h2>

<div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg relative">
  <video
    ref={videoRef}
    src={vid}
    controls
    className="w-full h-[60vh] md:h-full object-cover cursor-pointer"
    onClick={handleFullscreen}
  />
  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
    Klik video untuk fullscreen
  </div>
</div>


  </div>
</section>

  )
}

export default VideoPage