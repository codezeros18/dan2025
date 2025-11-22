import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo/logo6.webp";

import MP1 from "../assets/mediapartner/MP1.webp";
import MP2 from "../assets/mediapartner/MP2.webp";
import MP3 from "../assets/mediapartner/MP3.webp";
import MP4 from "../assets/mediapartner/MP4.webp";
import MP5 from "../assets/mediapartner/MP5.webp";
import MP6 from "../assets/mediapartner/MP6.webp";
import MP7 from "../assets/mediapartner/MP7.webp";
import MP8 from "../assets/mediapartner/MP8.webp";
import MP9 from "../assets/mediapartner/MP9.webp";
import MP10 from "../assets/mediapartner/MP10.webp";
import MP11 from "../assets/mediapartner/MP11.webp";
import MP12 from "../assets/mediapartner/MP12.webp";
import MP13 from "../assets/mediapartner/MP13.webp";
import MP14 from "../assets/mediapartner/MP14.webp";
import MP15 from "../assets/mediapartner/MP15.webp";
import MP16 from "../assets/mediapartner/MP16.webp";
import MP17 from "../assets/mediapartner/MP17.webp";
import MP18 from "../assets/mediapartner/MP18.webp";
import MP19 from "../assets/mediapartner/MP19.webp";
import MP20 from "../assets/mediapartner/MP20.webp";
import MP21 from "../assets/mediapartner/MP21.webp";
import MP22 from "../assets/mediapartner/MP22.webp";
import MP23 from "../assets/mediapartner/MP23.webp";
import MP24 from "../assets/mediapartner/MP24.webp";

const MediaPartner: React.FC = () => {
  const logos = [
    MP1, MP2, MP3, MP4, MP5, MP6, MP7, MP8, MP9, MP10,
    MP11, MP12, MP13, MP14, MP15, MP16, MP17, MP18,
    MP19, MP20, MP21, MP22, MP23, MP24
  ];

  return (
    <section className="relative py-28 px-8 overflow-hidden">

      {/* watermark */}
      <img
        src={logo}
        className="absolute -top-32 -right-20 w-[550px] opacity-[0.05] select-none pointer-events-none"
      />

      <h2 className="relative z-10 text-center text-4xl md:text-5xl font-extrabold mb-16 
        bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
        Media Partner
      </h2>

      <motion.div
        className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 
        gap-6 md:gap-10 max-w-7xl mx-auto justify-items-center border border-white/12 rounded-2xl bg-white/2 backdrop-blur-md
    shadow-[0_0_50px_rgba(0,0,0,0.45)] p-6 md:p-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.04 } }
        }}
      >
        {logos.map((src, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="
            w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
            rounded-2xl
            flex items-center justify-center
            hover:bg-white/3 hover:scale-[1.5]
            transition-all duration-300"
          >
            <img
              src={src}
              className="w-full h-full p-4 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.7)]"
              alt={`MediaPartner-${i}`}
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default MediaPartner;
