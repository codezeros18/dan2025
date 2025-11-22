import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import TicketModal from "../Components/TicketModal";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

import logo from "../assets/logo/logo6.webp";

// gallery & event images
import dgts1 from "../assets/dgts/dgtss1.webp";
import dgts2 from "../assets/dgts/dgtss2.webp";
import dgts3 from "../assets/dgts/dgtss3.webp";
import dgts4 from "../assets/dgts/dgtss4.webp";
import dgts5 from "../assets/dgts/dgtss5.webp";

import award2 from "../assets/award/award2.webp";
import award3 from "../assets/award/award3.webp";
import award4 from "../assets/award/award4.webp";
import award5 from "../assets/award/award5.webp";
import award6 from "../assets/award/award6.webp";

import donor1 from "../assets/donor/donor1.webp";
import donor2 from "../assets/donor/donor2.webp";
import donor3 from "../assets/donor/donor3.webp";
import donor4 from "../assets/donor/donor4.webp";
import donor5 from "../assets/donor/donor5.webp";

const galleryImages = [
  dgts1,
  award2,
  donor1,
  dgts5,
  award6,
  award3,
  donor2,
  dgts1,
];

const bigEvents = [
  {
    id: "dgts",
    tag: "DGTS",
    title: "Duta Anti Narkoba Go To School",
    desc:
      "Program edukatif berfokus pada penyuluhan di sekolah. Interaktif dan engaging — mengajak pelajar memahami bahaya narkoba melalui campaign kreatif.",
    images: [dgts1, dgts2, dgts3, dgts4, dgts5],
  },
  {
    id: "anw",
    tag: "ANW",
    title: "Anti Narkoba Week",
    desc:
      "Serangkaian kegiatan sosial seperti donor darah, penggalangan donasi, kunjungan panti, dan workshop yang melibatkan komunitas.",
    images: [donor1, donor2, donor3, donor4, donor5],
  },
  {
    id: "awarding",
    tag: "AWARDING",
    title: "Awarding Night",
    desc:
      "Malam puncak apresiasi bagi para duta. Ceremonial, performances, awarding, dan momentum tak terlupakan.",
    images: [award2, award3, award4, award5, award6],
  },
];

const filters = ["ALL", "DGTS", "ANW", "AWARDING"] as const;
type Filter = typeof filters[number];

const chipVariants = {
  idle: { scale: 1, opacity: 0.9 },
  hover: { scale: 1.03 },
  active: { scale: 1.05 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }),
};

const EventPremium: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string>(bigEvents[0].id);
  const [filter, setFilter] = useState<Filter>("ALL");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);

  const filteredEvents = useMemo(() => {
    if (filter === "ALL") return bigEvents;
    return bigEvents.filter((e) => e.tag === filter);
  }, [filter]);

  const activeEvent = useMemo(
    () => bigEvents.find((e) => e.id === activeEventId)!,
    [activeEventId]
  );

  return (
    <section
      className="
      relative overflow-x-hidden py-16 md:py-24 px-6 md:px-12 lg:px-20
      text-white
    "
    >
      {/* ===================== THEME A BACKGROUND ===================== */}
      <div className="absolute inset-0 -z-50 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050B22] via-[#0C1A40] to-[#15397A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.88))]" />
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.png')] bg-repeat" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.55),transparent_75%)]" />
      </div>

      {/* ===================== WATERMARKS ===================== */}
      <img src={logo} className="absolute top-10 left-6 w-24 opacity-[0.04]" />
      <img src={logo} className="absolute top-1/2 right-10 w-32 opacity-[0.04]" />
      <img src={logo} className="absolute bottom-16 left-16 w-40 opacity-[0.04]" />

      {/* ===================== HERO SLIDER ===================== */}
      <div className="max-w-7xl mx-auto mb-14">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          className="rounded-2xl overflow-hidden shadow-[0_30px_120px_rgba(5,10,30,0.55)]"
        >
          {bigEvents.map((ev) => (
            <SwiperSlide key={ev.id}>
              <div className="relative h-[340px] md:h-[420px] lg:h-[520px]">
                <img src={ev.images[0]} className="absolute inset-0 w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#07183a]/70" />

                <div className="absolute left-6 md:left-12 bottom-10 max-w-xl">
                  <h3 className="text-2xl md:text-4xl font-extrabold mb-2">{ev.title}</h3>
                  <p className="text-white/90 text-sm md:text-base mb-4">{ev.desc}</p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setActiveEventId(ev.id);
                        setFilter(ev.tag as Filter);
                      }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#0F3A66] via-[#174F91] to-[#1C61B4] text-white font-semibold shadow"
                    >
                      See Event
                    </button>

                    <button
                      onClick={() => setSelectedImg(ev.images[0])}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/10"
                    >
                      Preview Photo
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===================== LAYOUT WRAPPER ===================== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* ===================== LEFT COLUMN ===================== */}
        <div className="lg:col-span-3 space-y-6">
          {/* FILTER BOX */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow">
            <h4 className="font-semibold mb-3">Filter Events</h4>

            <div className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => {
                    setFilter(f);
                    const first =
                      f === "ALL" ? bigEvents[0] : bigEvents.find((ev) => ev.tag === f);
                    if (first) setActiveEventId(first.id);
                  }}
                  initial="idle"
                  whileHover="hover"
                  animate={filter === f ? "active" : "idle"}
                  variants={chipVariants}
                  className={`px-3 py-2 rounded-full text-sm font-semibold ${
                    filter === f
                      ? "bg-gradient-to-r from-[#0F3A66] via-[#174F91] to-[#1C61B4] text-white"
                      : "bg-white/5 text-white/80 border border-white/10"
                  }`}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>

          {/* EVENT LIST */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <h5 className="font-semibold mb-3">Events</h5>

            <div className="space-y-3">
              {filteredEvents.map((ev, i) => (
                <motion.div
                  key={ev.id}
                  onClick={() => setActiveEventId(ev.id)}
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  custom={i}
                  className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer ${
                    activeEventId === ev.id
                      ? "bg-gradient-to-r from-[#0a1a4f] via-[#1a2e7a] to-[#27459b]"
                      : "hover:bg-white/5"
                  }`}
                >
                  <img
                    src={ev.images[0]}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div>
                    <div className="text-sm font-semibold">{ev.title}</div>
                    <div className="text-xs text-white/70">
                      {ev.desc.slice(0, 70)}...
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowTicketModal(true)}
            className="px-6 py-3 w-full rounded-full font-semibold text-white shadow-2xl
              bg-gradient-to-r from-[#1C61B4] via-[#2174CC] to-[#2990FF]
              hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            Get Ticket
          </button>


        </div>

        {/* ===================== RIGHT COLUMN ===================== */}
        <div className="lg:col-span-9 space-y-10">
          {/* ACTIVE EVENT CARD */}
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-lg backdrop-blur-lg"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={activeEvent.images[0]}
                className="w-full md:w-64 h-44 md:h-52 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  {activeEvent.title}
                </h3>
                <p className="text-white/80 mt-3">{activeEvent.desc}</p>

                {/* Thumbnails */}
                <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar">
                  {activeEvent.images.map((im, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImg(im)}
                      className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 hover:scale-105 transition"
                    >
                      <img src={im} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* GALLERY GRID */}
          <div>
            <h4 className="text-xl font-bold mb-4">Gallery</h4>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((g, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="rounded-xl overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => setSelectedImg(g)}
                >
                  <img src={g} className="w-full h-36 md:h-48 object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== MODAL ===================== */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-[95%] max-h-[90vh]">
              <motion.img
                src={selectedImg}
                className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-3 right-3 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                <IoCloseOutline />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
            <TicketModal
        isOpen={showTicketModal}
        onClose={() => setShowTicketModal(false)}
      />

    </section>
  );
};

export default EventPremium;
