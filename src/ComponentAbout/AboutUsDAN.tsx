
import img1 from '../assets/donor5.webp'
import img2 from '../assets/dgtss5.webp'
import img3 from '../assets/donor7.webp'
import img4 from '../assets/award6.webp'
import img5 from '../assets/dgtss3.webp'

import logo from '../assets/logo6.webp'

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from "swiper/modules"
// @ts-ignore
import "swiper/css"
// @ts-ignore
import "swiper/css/effect-coverflow"
const images = [img1, img2, img3, img4, img5]

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const AboutUsDAN: React.FC = () => {
  const [active, setActive] = useState<string>("Visi") // ✅ default langsung Visi
  const content: Record<string, string | string[]> = {
    Visi: "Menjadikan generasi yang dapat membentuk lingkungan internal maupun eksternal Universitas Multimedia Nusantara yang bebas dari penyalahgunaan narkoba, kompeten, dan mampu bersaing dengan cara yang kreatif dan inovatif.",
    Misi: [
    "Mengadakan sosialisasi langsung pada pelajar dan masyarakat tentang bahaya narkoba.",
    "Menjadi duta yang kompeten sehingga dapat memberikan contoh yang baik di kalangan mahasiswa dan masyarakat.",
    "Memaksimalkan penggunaan media sosial sebagai sarana yang memberikan dampak bagi masyarakat.",
    "Menyelenggarakan kegiatan yang dapat membangun hubungan antar organisasi internal dan eksternal kampus."
  ],
    Tagline: "Stay Sharp, Stay Strong, Stay Clean!"
  }

  return (
    <>
      <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-white">
        {/* Background decorative logos */}
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-10 left-5 w-20 opacity-20 rotate-12"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-1/2 right-20 w-24 opacity-15 -rotate-45"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute bottom-20 left-1/4 w-16 opacity-10 rotate-90"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute bottom-10 right-10 w-28 opacity-10 -rotate-30"
/>

{/* tambahan baru */}
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-16 right-8 w-20 opacity-15 rotate-6"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-1/3 left-10 w-24 opacity-10 -rotate-12"
/>


        <div className="max-w-6xl mx-auto w-full my-12 md:my-20">
          {/* Title 1 */}
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center
                         bg-gradient-to-r from-[#0a1a4f]/80 via-[#1a2e7a]/80 to-[#27459b]/80
                         bg-clip-text text-transparent">
            WHAT IS DAN 2025?
          </h2>

          {/* Grid section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20">
            {/* Left image */}
            <div className="col-span-1 md:col-span-6 flex justify-center">
  <Swiper
    modules={[EffectCoverflow, Autoplay]}
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    autoplay={{ delay: 3000 }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    }}
    className="w-full max-w-lg h-auto md:h-96"
  >
    {images.map((src, i) => (
      <SwiperSlide
        key={i}
        className="w-64 h-80 flex justify-center items-center"
      >
        <img
          src={src}
          alt={`slide-${i}`}
          className="rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

            {/* Right text */}
            <div className="col-span-1 md:col-span-6 flex flex-col items-center md:items-start">
              <p className="leading-relaxed mb-8
                            bg-gradient-to-r from-[#0a1a4f]/60 via-[#1a2e7a]/60 to-[#27459b]/60
                            bg-clip-text text-transparent">
                Duta Anti Narkoba (DAN) UMN merupakan LSO (Lembaga Semi Otonom) yang menyuarakan gerakan anti narkoba baik secara
                internal maupun eksternal, sesuai dengan esensi kampus yang menolak segala bentuk penyalahgunaan narkoba. Tagline
                “Stay Sharp, Stay Strong, Stay Clean!” ingin membawakan pesan bahayanya penyalahgunaan narkoba kepada semua kalangan.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto w-full my-16 md:my-24">
      {/* Grid button */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        {Object.keys(content).map((key) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive(active === key ? key : key)} // tidak toggle, biar selalu ada isi
            className={`py-6 px-8 rounded-2xl shadow-lg font-bold text-lg md:text-xl transition-all cursor-pointer
              ${active === key 
                ? "bg-gradient-to-r from-[#0a1a4f] via-[#1a2e7a] to-[#27459b] text-white scale-105" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {key}
          </motion.button>
        ))}
      </div>

      {/* Content box with animation */}
      <div className="mt-12 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div
              layout
              className="p-8 md:p-12 rounded-3xl shadow-2xl bg-white border border-gray-200
                          max-w-3xl w-full min-h-[220px] flex items-center justify-center whitespace-pre-line"
            >
              {Array.isArray(content[active]) ? (
  <ul className="list-decimal list-inside space-y-3 text-gray-800 text-lg md:text-xl font-medium">
    {(content[active] as string[]).map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
              ) : (
                <p className="text-gray-800 leading-relaxed text-lg md:text-xl font-medium whitespace-pre-line">
                  {content[active] as string}
                </p>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
      </section>
    </>
  )
}

export default AboutUsDAN
