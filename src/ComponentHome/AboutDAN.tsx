import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/donor5.webp'
import img2 from '../assets/dgtss5.webp'
import img3 from '../assets/donor7.webp'
import img4 from '../assets/award6.webp'
import img5 from '../assets/dgtss3.webp'

import card1 from '../assets/dgtss1.webp'
import card2 from '../assets/donor1.webp'
import card3 from '../assets/award2.webp'
import logo from '../assets/logo6.webp'

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from "swiper/modules"
// @ts-ignore
import "swiper/css"
// @ts-ignore
import "swiper/css/effect-coverflow"
const images = [img1, img2, img3, img4, img5]

const AboutDAN: React.FC = () => {
  const cards = [
    {
      title: "DGTS 2025",
      desc: "Program edukatif yang berfokus pada penyuluhan di sekolah-sekolah. Melalui sesi interaktif, kegiatan ini mengajak pelajar..",
      img: card1,
      gradient: "from-[#0a1a4f] via-[#1a2e7a] to-[#27459b]",
      link: "/proker"
    },
    {
      title: "ANW 2025",
      desc: "Serangkaian kegiatan inspiratif yang meliputi kunjungan ke panti asuhan, penggalangan donasi, dan donor darah..",
      img: card2,
      gradient: "from-[#0a1a4f] via-[#1a2e7a] to-[#27459b]",
      link: "/proker"
    },
    {
      title: "AWARDING NIGHT 2024",
      desc: "Rangkaian seleksi dan karantina yang berujung pada malam puncak pemilihan duta penerus. Momen ini menjadi ajang apresiasi bagi..",
      img: card3,
      gradient: "from-[#0a1a4f] via-[#1a2e7a] to-[#27459b]",
      link: "/proker"
    },
  ]

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
        className="w-64 h-full flex justify-center items-center"
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
              <Link to="/about"
                className="inline-block px-8 py-3 rounded-full 
                           bg-gradient-to-r from-[#0a1a4f]/90 via-[#1a2e7a]/90 to-[#27459b]/90
                           text-white font-semibold shadow-md 
                           hover:shadow-xl hover:scale-105 hover:opacity-100
                           transition-all duration-300"
              >
                Know Us Better
              </Link>
            </div>
          </div>

          {/* Title 2 */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-12 text-center
                       bg-gradient-to-r from-[#0a1a4f]/80 via-[#1a2e7a]/80 to-[#27459b]/80
                       bg-clip-text text-transparent pt-12 md:pt-20" 
          >
            OUR EVENTS
          </h2>

          {/* Grid section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch pb-12">
            {cards.map((card, i) => (
              <Link to={card.link}
                key={i}
                className="group aspect-square relative rounded-2xl shadow-lg overflow-hidden 
                           hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90 
                              group-hover:opacity-50 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-6 h-full">
                  <h3 className="text-lg font-semibold mb-2 transition-all duration-300 group-hover:text-2xl">
                    {card.title}
                  </h3>
                  <p className="text-sm opacity-80">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutDAN
