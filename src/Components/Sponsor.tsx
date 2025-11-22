import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo/logo6.webp";

import SP1 from "../assets/sponsor/hotma.webp";
import SP2 from "../assets/sponsor/andhara.webp";
import SP3 from "../assets/sponsor/soedirman.webp";
import SP4 from "../assets/sponsor/west.webp";

const MediaPartner: React.FC = () => {
  const logos = [SP1, SP2, SP3, SP4];

  return (
    <section className="relative py-28 px-8 flex flex-col items-center justify-center text-center">

      {/* watermark */}
      <img
        src={logo}
        className="absolute -top-20 right-0 w-[450px] opacity-[0.04] pointer-events-none select-none"
      />

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-14
        bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 
        bg-clip-text text-transparent drop-shadow-lg">
        Sponsor
      </h2>

      {/* Center Container THAT AUTO FITS CONTENT */}
      <motion.div
  className="
    relative z-10 
    grid 
    grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
    gap-10 
    justify-items-center items-center
    px-10 py-10
    rounded-3xl border border-white/10
    bg-white/2 backdrop-blur-md
    shadow-[0_0_50px_rgba(0,0,0,0.45)]
  "
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }}
>

        {logos.map((src, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 },
            }}
            className="
              w-24 h-24 md:w-28 md:h-28 
              rounded-2xl 
              flex items-center justify-center
              hover:scale-110 transition-all duration-300
            "
          >
            <img
              src={src}
              alt={`Sponsor-${i}`}
              className="w-full h-full object-contain p-3
              drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MediaPartner;
