import { useState } from "react"
import {AnimatePresence } from "framer-motion"
// @ts-ignore
import "swiper/css/pagination"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
// @ts-ignore
import "swiper/css"
import bg from "../assets/back2.webp"
import logo from '../assets/logo6.webp'

import img1 from "../assets/donor2.webp"
import img2 from "../assets/donor1.webp"

const galleryImages = [img1, img2, img1, img2, img1, img2, img1, img2]

const bigEvents = [
  {
    id: "dgts",
    title: "Duta Anti Narkoba Go To School",
    desc: "Program edukatif yang berfokus pada penyuluhan di sekolah-sekolah. Melalui sesi interaktif, kegiatan ini mengajak pelajar untuk lebih memahami bahaya narkoba serta pentingnya menjaga kesehatan fisik dan mental dalam kehidupan sehari-hari.",
    images: [img1, img2],
  },
  {
    id: "anw",
    title: "Anti Narkoba Week",
    desc: "Serangkaian kegiatan inspiratif yang meliputi kunjungan ke panti asuhan, penggalangan donasi, dan donor darah. Semua ini dilakukan untuk menumbuhkan kepedulian sosial serta meningkatkan kesadaran akan pentingnya menjaga kesehatan, khususnya di kalangan generasi muda.",
    images: [img1, img2],
  },
  {
    id: "awarding",
  title: "Awarding Night",
    desc: "Rangkaian seleksi dan karantina yang berujung pada malam puncak pemilihan duta penerus. Momen ini menjadi ajang apresiasi bagi mereka yang siap membawa semangat perubahan dalam gerakan anti narkoba di lingkungan sekitar.",
    images: [img1, img2],
  },
]


const Event: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState(bigEvents[0]) // default DGTS
  return (
    <section className="relative ">
            <img
  src={logo}
  alt="Logo bg"
  className="absolute top-10 left-5 w-20 opacity-20 rotate-12"
/>
<img
  src={logo}
  alt="Logo bg"
  className="absolute top-80 right-10 w-20 opacity-20 rotate-22"
/>

<img
  src={logo}
  alt="Logo bg"
  className="absolute top-[30%] left-10 w-30 opacity-20 rotate-42"
/>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6">
        {/* Left side - Event Tabs */}
        <div className="flex flex-col items-center justify-center gap-4 md:col-span-1 h-full">
          {bigEvents.map((event) => (
            <motion.button
              key={event.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveEvent(event)}
              className={`w-full text-left px-4 py-3 rounded-xl shadow-md font-semibold transition-all cursor-pointer ${
                activeEvent.id === event.id
                  ? "bg-gradient-to-r from-[#0a1a4f] via-[#1a2e7a] to-[#27459b] text-white scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {event.title}
            </motion.button>
          ))}
        </div>

        {/* Right side - Event Content */}
        <div className="md:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0a1a4f]/80 via-[#1a2e7a]/80 to-[#27459b]/80
                         bg-clip-text text-transparent">
                {activeEvent.title}
              </h2>
              {/* Description */}
              <p className="text-gray-600">{activeEvent.desc}</p>

              {/* Swiper */}
              <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                {activeEvent.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${activeEvent.title} ${i}`}
                      className="w-full h-[300px] md:h-[450px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
{/* Events Highlight Section */}
<section className="relative mt-4  md:mt-8 py-16">
  {/* Full background */}
  <img
    src={bg} // ganti path ke file kamu
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-b 
    from-[#0a0a2e]/95 
    via-[#1b174d]/85 
    to-[#2d2470]/90"
  ></div>

  {/* Content (relative supaya di atas bg) */}
  <div className="relative z-10">
    {/* Description */}
    <div className="max-w-4xl mx-auto py-12 px-6 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-4"
      >
        A Journey of Togetherness
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-200 leading-relaxed"
      >
        From social movements to awarding nights, our events are filled with
        energy, passion, and unforgettable memories. Here’s a glimpse of the
        moments that brought us all together.
      </motion.p>
    </div>

    {/* Gallery Grid */}
    <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {galleryImages.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden shadow-md"
        >
          <img
            src={img}
            alt={`Gallery ${i}`}
            className="w-full h-36 md:h-56 lg:h-64 object-cover"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Highlight Carousel */}
      {/* <div className="py-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Event Highlights
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
          className="max-w-5xl mx-auto"
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`Highlight ${i}`}
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </section>
  )
}

export default Event
