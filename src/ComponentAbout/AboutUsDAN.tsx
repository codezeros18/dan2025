// src/ComponentAbout/AboutUsDAN.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-coverflow";

import img1 from "../assets/donor/donor5.webp";
import img2 from "../assets/dgts/dgtss5.webp";
import img3 from "../assets/donor/donor7.webp";
import img4 from "../assets/award/award6.webp";
import img5 from "../assets/dgts/dgtss3.webp";
import logo from "../assets/logo/logo6.webp";

const images = [img1, img2, img3, img4, img5];

const AboutUsDAN: React.FC = () => {
  const [active, setActive] = useState("Visi");

  const content: Record<string, string | string[]> = {
    Visi:
      "Menjadikan generasi yang dapat membentuk lingkungan internal maupun eksternal Universitas Multimedia Nusantara yang bebas dari penyalahgunaan narkoba, kompeten, dan mampu bersaing dengan cara yang kreatif dan inovatif.",
    Misi: [
      "Mengadakan sosialisasi langsung pada pelajar dan masyarakat tentang bahaya narkoba.",
      "Menjadi duta yang kompeten sehingga dapat memberikan contoh yang baik di kalangan mahasiswa dan masyarakat.",
      "Memaksimalkan penggunaan media sosial sebagai sarana yang memberikan dampak bagi masyarakat.",
      "Menyelenggarakan kegiatan yang dapat membangun hubungan antar organisasi internal dan eksternal kampus.",
    ],
    Tagline: "Stay Sharp, Stay Strong, Stay Clean!",
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20">

      {/* Watermarks */}
      <img src={logo} className="absolute top-10 left-8 w-40 opacity-[0.03] rotate-12 pointer-events-none" />
      <img src={logo} className="absolute top-1/2 right-8 w-52 opacity-[0.03] -rotate-6 pointer-events-none" />
      <img src={logo} className="absolute bottom-10 left-1/4 w-48 opacity-[0.03] rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center
                       bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
          WHAT IS DAN 2025?
        </h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mt-4">
          Mengenal lebih dekat misi dan perjalanan gerakan Duta Anti Narkoba UMN.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mt-16">

          {/* Swiper */}
          <div className="md:col-span-6 flex justify-center">
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect="coverflow"
              centeredSlides
              grabCursor
              autoplay={{ delay: 3000 }}
              slidesPerView="auto"
              loop
              speed={700}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 140,
                modifier: 2.5,
                slideShadows: false,
              }}
              className="w-full max-w-lg h-[420px]"
            >
              {images.map((src, i) => (
                <SwiperSlide
                  key={i}
                  className="w-[260px] sm:w-[300px] md:w-[340px] h-full px-2"
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(5,10,30,0.6)]">
                    <img src={src} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Text */}
          <div className="md:col-span-6 text-white/90 text-lg md:text-xl leading-relaxed">
            Duta Anti Narkoba (DAN) UMN merupakan LSO (Lembaga Semi Otonom) yang menyuarakan gerakan anti narkoba baik secara
                internal maupun eksternal, sesuai dengan esensi kampus yang menolak segala bentuk penyalahgunaan narkoba. Tagline
                “Stay Sharp, Stay Strong, Stay Clean!” ingin membawakan pesan bahayanya penyalahgunaan narkoba kepada semua kalangan.{" "}
            <span className="text-cyan-300 font-semibold">
              “Stay Sharp, Stay Strong, Stay Clean!”
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {Object.keys(content).map((key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(key)}
              className={`py-5 px-6 rounded-2xl font-semibold text-lg transition-all
                ${
                  active === key
                    ? "bg-gradient-to-r from-[#0F3A66] via-[#174F91] to-[#1C61B4] text-white shadow-[0_12px_40px_rgba(10,35,90,0.45)] scale-105"
                    : "bg-white/10 text-white/80 border border-white/10 backdrop-blur-sm hover:bg-white/20"
                }`}
            >
              {key}
            </motion.button>
          ))}
        </div>

        {/* Tab content */}
        <div className="max-w-4xl mx-auto mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.38 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 
                         rounded-3xl p-10 shadow-[0_20px_80px_rgba(5,10,30,0.6)]
                         text-white/90 min-h-[220px]"
            >
              {Array.isArray(content[active]) ? (
                <ul className="list-disc list-inside space-y-3 text-lg">
                  {content[active].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg leading-relaxed">
                  {content[active] as string}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDAN;
