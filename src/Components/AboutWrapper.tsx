// src/Components/AboutWrapper.tsx
import React from "react";

const AboutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">

      {/* === GLOBAL CINEMATIC BACKGROUND === */}
      <div className="fixed inset-0 -z-50 pointer-events-none select-none">
        
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br 
          from-[#050B22] via-[#0C1A40] to-[#15397A]" />

        {/* Center glow */}
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.9))]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay
          bg-[url('https://grainy-gradients.vercel.app/noise.png')] bg-repeat" />

        {/* Bottom vignette */}
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.55),transparent_80%)]" />
      </div>

      {children}
    </div>
  );
};

export default AboutWrapper;
