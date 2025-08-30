import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import Acara from "../assets/Acara2.webp";
import Bph from "../assets/Bph2.webp";
import Dokum from "../assets/Dokum2.webp";
import Keamanan from "../assets/Keamanan2.webp";
import Perlengkapan from "../assets/Perlengkapan2.webp";
import PR from "../assets/PR2.webp";
import Sponsor from "../assets/Sponsor2.webp";
import Visual from "../assets/Visual2.webp";
import Website from "../assets/Website2.webp";
import Logo from "../assets/logo6.webp";

import KennyModal from '../assets/Kenny.jpg';
import LintangModal from '../assets/Lintang.jpg';
import VasselModal from '../assets/Vassel.jpg';
import SternModal from '../assets/Stern.jpg';
import ThereModal from '../assets/There.jpg';
import RiekheModal from '../assets/Riekhe.jpg';
import JustineModal from '../assets/Justine.jpg';
import CheliModal from '../assets/Cheli.jpg';
import ChrisModal from '../assets/Chris.jpg';
import DerrenModal from '../assets/Derren.jpg';
import StevModal from '../assets/Stev.jpg';
import MarlonModal from '../assets/Marlon.jpg';
import ShakiraModal from '../assets/Shakira.jpg';
import NicoleModal from '../assets/Nicole.jpg';
import OwenModal from '../assets/Owen.jpg';
import ChloeModal from '../assets/Chloe.jpg';
import FeliciaModal from '../assets/Felicia.jpg';
import JessicaModal from '../assets/Jessica.jpg';
import JoshModal from '../assets/Josh.jpg';
import AndrewModal from '../assets/Andrew.jpg';
import RafaModal from '../assets/Rafa.jpg';

const Division: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<number | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const radius = 230;

  
  const menuItems = useMemo(
    () => [
      {
        icon: Bph,
        label: "BPH",
        desc: "Divisi Badan Pengurus Harian (Adhyaksana) Merupakan pusat koordinasi seluruh kegiatan organisasi. Adhyaksana memastikan setiap divisi berjalan selaras, melakukan pengambilan keputusan strategis, dan menjaga arah visi serta misi organisasi.",
        cards: [VasselModal, FeliciaModal, JessicaModal, OwenModal, ChloeModal, NicoleModal]
      },
      {
        icon: Website,
        label: "Website",
        desc: "Divisi Website (Vistara) Bertanggung jawab atas perancangan, pengembangan, dan pemeliharaan website resmi Duta Anti Narkoba UMN 2025. Vistara memastikan semua informasi terpublikasi dengan baik, interaktif, dan mudah diakses oleh publik.",
        cards: [KennyModal, LintangModal]
      },
      {
        icon: Acara,
        label: "Acara",
        desc: "Divisi Acara (Mahosatva) Bertugas untuk merancang, merencanakan, dan melaksanakan seluruh rangkaian kegiatan dan kampanye anti narkoba. Mahosatva menciptakan acara yang edukatif, inspiratif, dan berdampak luas.",
        cards: [SternModal, RafaModal]
      },
      {
        icon: Dokum,
        label : "Dokumentasi",
        desc: "Divisi Dokumentasi (Samskruti) Mengabadikan setiap momen kegiatan melalui foto dan video. Samskruti juga bertugas menyusun arsip dokumentasi dan mempublikasikan konten yang menggambarkan semangat gerakan Duta Anti Narkoba 2025.",
        cards: [StevModal, MarlonModal]
      },
      {
        icon: Visual,
        label: "Visual",
        desc: "Divisi Visual (Rupaka) Bertanggung jawab atas seluruh aspek visual, termasuk desain grafis, branding, dan estetika publikasi. Rupaka memastikan identitas visual organisasi kuat dan menarik.",
        cards: [ThereModal, ChrisModal]
      },
      {
        icon: Keamanan,
        label: "Keamanan",
        desc: "Divisi Keamanan (Rakshana) Menjaga keamanan dan ketertiban dalam seluruh kegiatan organisasi, baik online maupun offline. Rakshana memastikan setiap program berjalan aman dan nyaman untuk semua pihak.",
        cards: [DerrenModal, AndrewModal]
      },
      {
        icon: Perlengkapan,
        label: "Perlengkapan",
        desc: "Divisi Perlengkapan (Upakarana) Bertugas mengatur dan menyediakan seluruh kebutuhan logistik serta perlengkapan kegiatan. Upakarana memastikan semua persiapan teknis berjalan lancar.",
        cards: [JustineModal, JoshModal]
      },
      {
        icon: PR,
        label: "Humas",
        desc: "Divisi Hubungan Masyarakat (Sambandha) Menjalin relasi dan membangun komunikasi strategis dengan pihak eksternal, termasuk media, komunitas, dan institusi lain. Sambandha menjadi wajah organisasi dalam membina citra positif di masyarakat.",
        cards: [RiekheModal, CheliModal]
      },
      {
        icon: Sponsor,
        label: "Sponsor",
        desc: "Divisi Dana dan Sponsor (Dhanika) Bertanggung jawab mencari, mengelola, dan mempertanggungjawabkan dana serta sponsorship. Dhanika memastikan keberlangsungan kegiatan melalui pendanaan yang transparan dan profesional.",
        cards: [ShakiraModal],
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
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-[#3d2ca6]/90 via-[#2b227a]/70 to-[#0a1a4f]/100 overflow-hidden relative">
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

      <div className="relative w-[600px] h-[600px] flex items-center justify-center z-20">
        <AnimatePresence>
          {open && (
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
                      className="w-48 h-48 rounded-full flex items-center justify-center hover:scale-110 transition"
                      onClick={() => handleOpenDivision(i)}
                    >
                      <img
                        src={item.icon}
                        alt={item.desc}
                        className="w-full h-full object-cover rounded-full select-none"
                        draggable={false}
                      />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        
        <motion.button
          onClick={() => {
            if (selectedDivision !== null) {
              setSelectedDivision(null);
            } else {
              setOpen((p) => !p);
            }
          }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-32 h-32 p-3.5 rounded-full bg-gradient-to-br from-[#0a1a4f]/100 to-[#3d2ca6]/90 flex items-center justify-center shadow-lg hover:scale-105 transition z-20"
        >
          <img
            src={Logo}
            alt="Menu"
            className="w-full h-full object-cover rounded-full select-none"
            draggable={false}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {selectedDivision !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <motion.div
              key="card-overlay"
              className="relative z-10 bg-gradient-to-br from-[#3d2ca6]/90 via-[#2b227a]/70 to-[#0a1a4f]/100 bg-right backdrop-blur-2xl bg-opacity-90 rounded-[50px] shadow-xl overflow-hidden max-w-lg w-full mt-20 lg:mt-10"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={menuItems[selectedDivision].cards[cardIndex]}
                alt={menuItems[selectedDivision].label}
                className="w-full h-64 object-cover transition-all duration-700"
              />
              <div className="p-6 text-gray-200 text-[12px] md:text-sm font-bold leading-relaxed">
                {menuItems[selectedDivision].desc}
              </div>

              <div className="flex justify-between items-center px-6 pb-6 gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-white bg-opacity-80 cursor-pointer p-3 rounded-full shadow-lg hover:bg-opacity-100 
                      transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setSelectedDivision(null)}
                  className="bg-red-600 text-white p-3 cursor-pointer rounded-full shadow-lg hover:bg-red-700 
                      transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  <FaTimes size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white bg-opacity-80 cursor-pointer p-3 rounded-full shadow-lg hover:bg-opacity-100 
                      transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>

              <div className="flex justify-center pb-4">
                {menuItems[selectedDivision].cards.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 mx-1 rounded-full ${
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
