import React from "react";

const CinematicBG: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none select-none">
      {/* Base premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050B22] via-[#0C1A40] to-[#15397A]" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.88))]" />

      {/* Noise layer (light) */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.png')] bg-repeat" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.55),transparent_75%)]" />
    </div>
  );
};

export default CinematicBG;
