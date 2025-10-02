import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import Logo from "../assets/logo6.webp";

import Acara from "../assets/acara.png";
import Bph from "../assets/bph.png";
import Dekor from "../assets/dekor.png";
import Dokum from "../assets/dokum.png";
import Keamanan from "../assets/keamanan.png";
import Perlengkapan from "../assets/perlengkapan.png";
import Pr from "../assets/pr.png";
import Visual from "../assets/visual.png";
import Sponsor from "../assets/sponsor.png";
import Website from "../assets/website.png";
import Regis from "../assets/regis.png";
import Makeup from "../assets/makeup.png";
import Fm from "../assets/fm.png";
import Pic from "../assets/pic.png";

import unknown from "../assets/unknown.jpg";

import GegeModal from "../assets/Mikael.jpg";
import LintangModal from "../assets/Lintang.jpg";
import VasselModal from "../assets/Vassel.jpg";
import SternModal from "../assets/Stern.jpg";
import ThereModal from "../assets/There.jpg";
import RiekheModal from "../assets/Riekhe.jpg";
import JosiahModal from "../assets/josiah.jpg";
import CheliModal from "../assets/Cheli.jpg";
import ChrisModal from "../assets/Chris.jpg";
import DerrenModal from "../assets/Derren.jpg";
import StevModal from "../assets/Stev.jpg";
// import MarlonModal from "../assets/Marlon.jpg";
import ShakiraModal from "../assets/Shakira.jpg";
import NicoleModal from "../assets/Nicole.jpg";
import OwenModal from "../assets/Owen.jpg";
import ChloeModal from "../assets/Chloe.jpg";
import FeliciaModal from "../assets/Felicia.jpg";
import JessicaModal from "../assets/Jessica.jpg";
import GlenardModal from "../assets/Glenard.jpg";
import AndrewModal from "../assets/Andrew.jpg";
import RafaModal from "../assets/Rafa.jpg";

const Division: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<number | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = isMobile ? 180 : 250;

  const menuItems = useMemo(
    () => [
      {
        icon: Bph,
        label: "BPH",
        desc: "Divisi Badan Pengurus Harian (Adhyaksana) Merupakan pusat koordinasi seluruh kegiatan organisasi...",
        cards: [VasselModal, FeliciaModal, JessicaModal, OwenModal, ChloeModal, NicoleModal],
      },
      {
        icon: Website,
        label: "Website",
        desc: "Divisi Website (Jala) Bertanggung jawab atas perancangan, pengembangan, dan pemeliharaan website...",
        cards: [LintangModal, GegeModal],
      },
      {
        icon: Acara,
        label: "Acara",
        desc: "Divisi Acara (Mahosatva) Bertugas untuk merancang, merencanakan, dan melaksanakan seluruh rangkaian kegiatan...",
        cards: [SternModal, RafaModal],
      },
      {
        icon: Dokum,
        label: "Dokumentasi",
        desc: "Divisi Dokumentasi (Samskruti) Mengabadikan setiap momen kegiatan melalui foto dan video...",
        cards: [StevModal, unknown],
      },
      {
        icon: Visual,
        label: "Visual",
        desc: "Divisi Visual (Rupaka) Bertanggung jawab atas seluruh aspek visual, termasuk desain grafis...",
        cards: [ThereModal, ChrisModal],
      },
      {
        icon: Keamanan,
        label: "Keamanan",
        desc: "Divisi Keamanan (Rakshana) Menjaga keamanan dan ketertiban dalam seluruh kegiatan organisasi...",
        cards: [DerrenModal, AndrewModal],
      },
      {
        icon: Perlengkapan,
        label: "Perlengkapan",
        desc: "Divisi Perlengkapan (Upakarana) Bertugas mengatur dan menyediakan seluruh kebutuhan logistik...",
        cards: [JosiahModal, GlenardModal],
      },
      {
        icon: Pr,
        label: "Humas",
        desc: "Divisi Hubungan Masyarakat (Sambandha) Menjalin relasi dan membangun komunikasi strategis...",
        cards: [RiekheModal, CheliModal],
      },
      {
        icon: Sponsor,
        label: "Sponsor",
        desc: "Divisi Dana dan Sponsor (Dhanika) Bertanggung jawab mencari, mengelola, dan mempertanggungjawabkan dana...",
        cards: [ShakiraModal],
      },
      {
        icon: Dekor,
        label: "Dekorasi",
        desc: "Divisi Dekorasi (Alankara) Bertanggung jawab memperindah dan menata seluruh elemen visual acara...",
        cards: [unknown, unknown],
      },
      {
        icon: Regis,
        label: "Registrasi",
        desc: "Divisi Registrasi (Pravesha) Mengatur proses pendaftaran peserta, tamu, dan pihak eksternal...",
        cards: [unknown, unknown],
      },
      {
        icon: Makeup,
        label: "Makeup",
        desc: "Divisi Makeup (Sundara) Berperan mendukung penampilan anggota maupun talent dalam kegiatan organisasi...",
        cards: [unknown],
      },
      {
        icon: Fm,
        label: "Fresh Money",
        desc: "Divisi Fresh Money (Arthapati) Fokus pada pencarian pendanaan tambahan melalui berbagai inisiatif kreatif...",
        cards: [unknown, unknown],
      },
      {
        icon: Pic,
        label: "PIC",
        desc: "Divisi Person In Charge (Nayaka) Mengemban tanggung jawab khusus sebagai koordinator lapangan...",
        cards: [unknown],
      },
    ],
    []
  );

  const containerVariants = {
    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 0, y: 0, scale: 0.6 },
    visible: (i: number) => {
      const angle = (360 / menuItems.length) * i - 90;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);
      return { opacity: 1, x, y, scale: 1 };
    },
    exit: { opacity: 0, x: 0, y: 0, scale: 0.6 },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const handleOpenDivision = (index: number) => {
    setSelectedDivision(index);
    setCardIndex(0);
  };

  const handleNext = () => {
    if (selectedDivision === null) return;
    setCardIndex((prev) => (prev + 1) % menuItems[selectedDivision].cards.length);
  };

  const handlePrev = () => {
    if (selectedDivision === null) return;
    setCardIndex(
      (prev) =>
        (prev - 1 + menuItems[selectedDivision].cards.length) %
        menuItems[selectedDivision].cards.length
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-auto bg-gradient-to-br py-10 md:py-0 from-[#3d2ca6]/90 via-[#2b227a]/70 to-[#0a1a4f]/100 overflow-y-auto relative p-4">
      <AnimatePresence>
        {selectedDivision !== null && (
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-md z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      
      {/* Container for both layouts */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-6xl">
        {/* Center Toggle Button */}
        <motion.button
          onClick={() => {
            if (selectedDivision !== null) {
              setSelectedDivision(null);
            } else {
              setOpen((p) => !p);
            }
          }}
          animate={{ rotate: open ? 360 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 p-2 sm:p-3 rounded-full bg-gradient-to-br from-[#0a1a4f]/100 to-[#3d2ca6]/90 flex items-center justify-center shadow-lg hover:scale-105 transition z-20"
        >
          <img
            src={Logo}
            alt="Menu"
            className="w-full h-full object-cover rounded-full select-none"
            draggable={false}
          />
        </motion.button>

        {/* Conditional Rendering Logic */}
        <AnimatePresence>
          {open && (
            <>
              {/* Circular Layout for Desktop */}
              {!isMobile && (
                <motion.div
                  key="orbit"
                  className="absolute inset-0 flex items-center justify-center"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {menuItems.map((item, i) => {
                    const angle = (360 / menuItems.length) * i - 90;
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);

                    return (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={itemVariants}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                      >
                        <button
                          className="w-18 h-18 md:w-24 md:h-24 rounded-full flex items-center justify-center hover:scale-110 transition"
                          onClick={() => handleOpenDivision(i)}
                        >
                          <img
                            src={item.icon}
                            alt={item.label}
                            className="w-full h-full object-cover rounded-full select-none"
                            draggable={false}
                          />
                        </button>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {/* Grid Layout for Mobile */}
              {isMobile && (
                <motion.div
                  key="grid"
                  className="grid grid-cols-2 gap-4 mt-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={gridItemVariants}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <button
                        className="w-24 h-24 rounded-full flex items-center justify-center hover:scale-110 transition"
                        onClick={() => handleOpenDivision(i)}
                      >
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-full h-full object-cover rounded-full select-none"
                          draggable={false}
                        />
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Modal Cards */}
      <AnimatePresence>
        {selectedDivision !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedDivision(null)}
            />
            <motion.div
              key="card-overlay"
              className="relative z-10 bg-gradient-to-br from-[#3d2ca6]/90 via-[#2b227a]/70 to-[#0a1a4f]/100 rounded-3xl shadow-xl overflow-hidden w-full max-w-sm"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={menuItems[selectedDivision].cards[cardIndex]}
                alt={menuItems[selectedDivision].label}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-700"
              />
              <div className="p-4 sm:p-6 text-gray-200 text-xs sm:text-sm font-bold leading-relaxed">
                {menuItems[selectedDivision].desc}
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center px-4 sm:px-6 pb-4 sm:pb-6 gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-white/80 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setSelectedDivision(null)}
                  className="bg-red-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  <FaTimes size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/80 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center pb-4">
                {menuItems[selectedDivision].cards.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full ${
                      idx === cardIndex ? "bg-white" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Division;