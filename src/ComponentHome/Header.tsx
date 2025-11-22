import React, { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
// import { Link } from "react-router-dom";
// Replace these imports with your actual asset paths if needed:
import Vid from "../assets/vid1.mp4";
import Logo from "../assets/logo/logo6.webp";
import TicketModal from "../Components/TicketModal";


/**
 * HeroSplitCinematic
 * - Cinematic blue glow
 * - Stronger floating (visible)
 * - Bigger/softer particles
 * - Entrance: fade + slide + stagger
 * - Scroll indicator
 */

const containerVars: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12, ease: "easeOut", duration: 0.7 },
  },
};

const itemVars: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

////////////////////////////////////////////////////////////////////////////////
// Lightweight particle canvas (bigger & softer than previous)
////////////////////////////////////////////////////////////////////////////////
const ParticlesCanvas: React.FC<{ count?: number }> = ({ count = 36 }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const particles: any[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1 + Math.random() * 3.5, // larger radius
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.1 - Math.random() * 0.6,
        alpha: 0.06 + Math.random() * 0.22,
      });
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -20) {
          p.y = h + 20;
          p.x = Math.random() * w;
        }
        if (p.x < -40 || p.x > w + 40) p.x = Math.random() * w;

        ctx.beginPath();
        // softer bluish tint to match cinematic glow
        ctx.fillStyle = `rgba(170,200,255,${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(50,110,220,0.08)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animRef.current = requestAnimationFrame(tick);
    };

    tick();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none -z-20" aria-hidden />;
};

////////////////////////////////////////////////////////////////////////////////
// Scroll indicator
////////////////////////////////////////////////////////////////////////////////
const ScrollIndicator: React.FC = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
    <div className="hidden lg:flex flex-col items-center gap-2">
      <div className="w-9 h-16 rounded-3xl border border-white/30 flex items-start justify-center p-1 backdrop-blur">
        <div className="w-2 h-2 rounded-full bg-white/90 animate-scrollDot" />
      </div>
      <div className="text-xs text-white/70 tracking-wider">Scroll</div>
    </div>
  </div>
);

////////////////////////////////////////////////////////////////////////////////
// Main hero
////////////////////////////////////////////////////////////////////////////////
const HeroSplitCinematic: React.FC = () => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  

  // subtle mouse parallax on frame
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    let raf = 0;
    let lastX = 0;
    let lastY = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      // dampened
      lastX = dx * 10;
      lastY = dy * 10;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${lastX}px, ${lastY - 12}px, 0) rotate(${lastX * 0.02}deg)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-12 py-12 overflow-hidden font-josefin bg-transparent">
      {/* Particles (cinematic) */}
      <ParticlesCanvas count={36} />

      {/* Background video (mood) — strong blur + darken */}
      <video
        className="absolute inset-0 w-full h-full object-cover blur-[20px] brightness-[0.48] opacity-38 scale-[1.12] -z-30"
        src={Vid}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      {/* gradient overlay & vignette */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(1,8,26,0.94) 0%, rgba(8,20,44,0.84) 48%, rgba(18,46,85,0.86) 100%)" }}
      />
      <div className="absolute inset-0 -z-19 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.66)_100%)] pointer-events-none" />

      {/* content */}
      <motion.div
        className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 z-10"
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* LEFT TEXT */}
        <motion.div className="text-white flex flex-col gap-5 lg:gap-6 order-2 lg:order-1 text-center lg:text-left px-2"
                    variants={itemVars}>
          <img src={Logo} alt="Logo" className="w-[150px] md:w-[200px] mx-auto lg:mx-0" />

          <motion.h1 className="text-[40px] md:text-[64px] font-extrabold leading-tight tracking-tight drop-shadow-lg" variants={itemVars}>
            Duta Anti Narkoba
          </motion.h1>

          <motion.p className="text-[16px] md:text-[20px] max-w-xl opacity-95" variants={itemVars}>
            Smart, Healthy, and Fun — empowering youths to live a drug-free life.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4" variants={itemVars}>
            {/* <Link
              to="/about#calon-duta"
              className="px-6 py-3 rounded-full font-semibold bg-white/95 text-[#0F3A66]
              hover:scale-105 transition-transform duration-200"
            >
              Calon Duta 2025
            </Link> */}


            <button
              onClick={() => setShowTicketModal(true)}
              className="px-6 py-3 rounded-full font-semibold text-white shadow-2xl
              bg-gradient-to-r from-[#1C61B4] via-[#2174CC] to-[#2990FF]
              hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              Get Ticket
            </button>

          </motion.div>
        </motion.div>

        {/* RIGHT — Cinematic Floating Video Frame */}
        <motion.div className="relative w-full hidden lg:flex justify-center order-1 lg:order-2 px-2" variants={itemVars}>
          <div
            ref={frameRef}
            className="relative w-[86%] sm:w-[70%] lg:w-[90%] xl:w-[68%] rounded-3xl overflow-hidden
                       border border-white/14 shadow-[0_40px_120px_rgba(12,27,58,0.55)]"
            style={{ transform: "translate3d(0,-8px,0)" }}
          >
            {/* animated glow overlay (Cinematic Blue Glow) */}
            <div
              className="absolute -inset-1 rounded-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,58,120,0.06), rgba(45,95,170,0.035))",
                boxShadow:
                  "0 40px 120px rgba(28,68,140,0.18), inset 0 0 60px rgba(41,144,255,0.06)",
                zIndex: 2,
                mixBlendMode: "screen",
                animation: "cinematicGlow 4.8s ease-in-out infinite",
              }}
            />

            {/* Foreground (sharp) video */}
            <video
              src={Vid}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-110 contrast-[1.05] relative z-1"
            />

            {/* cinematic top fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-transparent to-black/12 pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <ScrollIndicator />
      <TicketModal
        isOpen={showTicketModal}
        onClose={() => setShowTicketModal(false)}
      />

    </section>
  );
};

export default HeroSplitCinematic;

