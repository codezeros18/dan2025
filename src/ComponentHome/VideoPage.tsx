import React, { useRef } from "react";
import logo from "../assets/logo/logo6.webp";
import vid from "../assets/vid1.mp4";

const VideoPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 overflow-hidden">

      {/* watermark */}
      <img
        src={logo}
        className="absolute w-[550px] opacity-[0.03] -top-32 -right-32 pointer-events-none select-none"
      />

      <div className="relative z-20 text-center max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-200 bg-clip-text text-transparent">
          Stay Sharp, Stay Strong, Stay Clean.
        </h2>

        <div
          className="relative rounded-3xl overflow-hidden mx-auto shadow-[0_40px_120px_rgba(15,30,70,0.7)]
          border border-white/10"
          style={{ maxWidth: "900px" }}
        >
          <video
            ref={videoRef}
            src={vid}
            preload="metadata"
            playsInline
            controls
            onClick={handleFullscreen}
            className="w-full h-[60vh] md:h-[75vh] object-cover rounded-3xl"
          />

          <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white">
            Tap video to fullscreen
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
