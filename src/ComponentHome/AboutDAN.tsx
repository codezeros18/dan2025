import React from "react";
import { Link } from "react-router-dom";
import CinematicWrapper from "../Components/CinematicWrapper";

import img1 from "../assets/donor/donor5.webp";
import img2 from "../assets/dgts/dgtss5.webp";
import img3 from "../assets/donor/donor7.webp";
import img4 from "../assets/award/award6.webp";
import img5 from "../assets/dgts/dgtss3.webp";

import card1 from "../assets/dgts/dgtss1.webp";
import card2 from "../assets/donor/donor1.webp";
import card3 from "../assets/award/award2.webp";
import logo from "../assets/logo/logo6.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";
// @ts-ignore
import "swiper/css/pagination";

const images = [img1, img2, img3, img4, img5];

const cards = [
  {
    title: "DGTS 2025",
    desc:
      "Program edukatif yang berfokus pada penyuluhan di sekolah-sekolah. Melalui sesi interaktif, kegiatan ini mengajak pelajar untuk memahami risiko dan pencegahan penyalahgunaan narkoba.",
    img: card1,
    link: "/proker",
  },
  {
    title: "ANW 2025",
    desc:
      "Serangkaian kegiatan inspiratif yang meliputi kunjungan ke panti asuhan, penggalangan donasi, dan donor darah untuk memberikan dampak nyata di komunitas.",
    img: card2,
    link: "/proker",
  },
  {
    title: "AWARDING NIGHT 2024",
    desc:
      "Rangkaian seleksi dan malam puncak yang menjadi ajang apresiasi bagi para duta yang telah berdedikasi pada kampanye anti-narkoba.",
    img: card3,
    link: "/proker",
  },
];

const AboutDANFinal: React.FC = () => {
  return (
    <CinematicWrapper className="py-24 px-6 md:px-12 lg:px-20 text-white overflow-hidden">

      {/* Watermark */}
      <img
        src={logo}
        alt="logo watermark"
        className="pointer-events-none select-none absolute -top-24 -right-24 w-[560px] opacity-[0.03]"
      />

      <div className="relative max-w-7xl mx-auto z-10">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8
          bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
          WHAT IS DAN 2025?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">

          {/* Swiper */}
          <div className="col-span-1 lg:col-span-7">
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(10,20,40,0.6)]">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                speed={700}
                autoplay={{ delay: 3200 }}
                pagination={{ clickable: true }}
                slidesPerView={1}
                centeredSlides
                style={{ height: "480px" }}
              >
                {images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full h-full relative">
                      <img
                        src={src}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                      />

                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#07183a]/70" />

                      <div className="absolute left-6 bottom-6 text-white max-w-[60%]">
                        <div className="bg-gradient-to-r from-[#0F3A66]/60 via-[#174F91]/50 to-[#1C61B4]/40 px-4 py-2 rounded-md backdrop-blur-md inline-block">
                          <div className="text-sm md:text-base font-semibold">
                            {i === 2 ? "Featured Campaign" : `Gallery ${i + 1}`}
                          </div>
                          <div className="text-xs opacity-80">See our activities & impact</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Text */}
          <div className="col-span-1 lg:col-span-5">
            <p className="text-white/90 leading-relaxed mb-6 text-[16px] md:text-[18px]">
              <strong className="block text-white text-lg md:text-xl font-semibold mb-2">
                Duta Anti Narkoba (DAN) UMN
              </strong>
              Merupakan LSO yang berkomitmen menyuarakan gerakan anti narkoba melalui edukasi dan kegiatan sosial.
            </p>

            <ul className="grid grid-cols-1 gap-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                <span className="text-sm text-white/90">Program edukasi sekolah & kampus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                <span className="text-sm text-white/90">Kegiatan sosial & donor darah</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                <span className="text-sm text-white/90">Kampanye kreatif & kompetisi</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0F3A66] via-[#174F91] to-[#1C61B4] text-white font-semibold hover:scale-105 transition">
                Know Us Better
              </Link>

              <Link to="/proker" className="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white hover:scale-105 transition">
                Our Programs
              </Link>
            </div>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10
          bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
          OUR EVENTS
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <Link
              to={c.link}
              key={idx}
              className="relative group block rounded-3xl overflow-hidden bg-[#06102a] hover:scale-[1.035] transition-transform duration-300 shadow-[0_30px_80px_rgba(8,18,36,0.6)]"
            >
              <img
                src={c.img}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end gap-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-1">{c.title}</h4>
                  <p className="text-sm md:text-base text-white/90">{c.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </CinematicWrapper>
  );
};

export default AboutDANFinal;
