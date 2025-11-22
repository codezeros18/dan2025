import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import Logo from "../assets/logo/logo6.webp";
import Acara from "../assets/logo/Acara.webp";
import Bph from "../assets/logo/BPH.webp";
import Dekor from "../assets/logo/dekor.webp";
import Dokum from "../assets/logo/Dokum.webp";
import Keamanan from "../assets/logo/Keamanan.webp";  
import Perlengkapan from "../assets/logo/Perlengkapan.webp";
import Pr from "../assets/logo/PR.webp";
import Visual from "../assets/logo/Visual.webp";
import Sponsor from "../assets/logo/Sponsor.webp";
import Website from "../assets/logo/Website.webp";
import Regis from "../assets/logo/regis.webp";
import Makeup from "../assets/logo/makeup.webp";
import Fm from "../assets/logo/fm.webp";
import Pic from "../assets/logo/pic.webp";

// import unknown from "../assets/divisi/unknown.webp";

import LintangModal from "../assets/divisi/Lintang.webp";
import VasselModal from "../assets/divisi/Vassel.webp";
import SternModal from "../assets/divisi/Stern.webp";
import ThereModal from "../assets/divisi/There.webp";
import RiekheModal from "../assets/divisi/Riekhe.webp";
import CheliModal from "../assets/divisi/Cheli.webp";
import ChrisModal from "../assets/divisi/Chris.webp";
import DerrenModal from "../assets/divisi/Derren.webp";
import StevModal from "../assets/divisi/Stev.webp";
import ShakiraModal from "../assets/divisi/Shakira.webp";
import NicoleModal from "../assets/divisi/Nicole.webp";
import OwenModal from "../assets/divisi/Owen.webp";
import ChloeModal from "../assets/divisi/Chloe.webp";
import FeliciaModal from "../assets/divisi/Felicia.webp";
import JessicaModal from "../assets/divisi/Jessica.webp";
import GlenardModal from "../assets/divisi/Glenard.webp";
import AndrewModal from "../assets/divisi/Andrew.webp";
import RafaModal from "../assets/divisi/Rafa.webp";
import ErineModal from "../assets/divisi/Erine.webp";
import IreneModal from "../assets/divisi/Irene.webp";
import SelinaModal from "../assets/divisi/Selina.webp";
import MarlonModal from "../assets/divisi/Marlon2.webp";
import AlexModal from "../assets/divisi/Alex.webp";
import ChrisFMModal from "../assets/divisi/ChrisFM.webp";
import ErineDekorModal from "../assets/divisi/ErineDekor.webp";
import ChristieModal from "../assets/divisi/Christie.webp";
import GegeModal from "../assets/divisi/Gege.webp";
import JosiahModal from "../assets/divisi/josiah.webp";
import KeishaModal from "../assets/divisi/Keisha.webp";

interface DivisionItem {
  icon: string;
  label: string;
  desc: string;
  cards: string[];
}

const Division: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<number | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const [outerAngle, setOuterAngle] = useState(0);
  const [innerAngle, setInnerAngle] = useState(0);
  const [velocityOuter, setVelocityOuter] = useState(0);
  const [velocityInner, setVelocityInner] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  const friction = 0.95;
  const baseSpeedOuter = 0.23;
  const baseSpeedInner = -0.33;

  const outerRadius = isMobile ? 250 : 350;
  const innerRadius = isMobile ? 150 : 220;

  const menuItems = useMemo(
    () => [
      {
        icon: Bph,
        label: "BPH",
        desc: "Divisi Badan Pengurus Harian (Adhara Naksatra) Merupakan pusat koordinasi seluruh kegiatan organisasi. Adhara Naksatra memastikan setiap divisi berjalan selaras, melakukan pengambilan keputusan strategis, dan menjaga arah visi serta misi organisasi.",
        cards: [VasselModal, FeliciaModal, JessicaModal, OwenModal, ChloeModal, NicoleModal],
      },
      {
        icon: Website,
        label: "Website",
        desc: "Divisi Website (Jala Naksatra) Bertanggung jawab atas perancangan, pengembangan, dan pemeliharaan website resmi Duta Anti Narkoba UMN 2025. Jala Naksatra memastikan semua informasi terpublikasi dengan baik, interaktif, dan mudah diakses oleh publik.",
        cards: [LintangModal, GegeModal],
      },
      {
        icon: Acara,
        label: "Acara",
        desc: "Divisi Acara (Kala Naksatra) Bertugas untuk merancang, merencanakan, dan melaksanakan seluruh rangkaian kegiatan dan kampanye anti narkoba. Kala Naksatra menciptakan acara yang edukatif, inspiratif, dan berdampak luas.",
        cards: [SternModal, RafaModal],
      },
      {
        icon: Dokum,
        label: "Dokumentasi",
        desc: "Divisi Dokumentasi (Aloka Naksatra) Mengabadikan setiap momen kegiatan melalui foto dan video. Aloka Naksatra juga bertugas menyusun arsip dokumentasi dan mempublikasikan konten yang menggambarkan semangat gerakan Duta Anti Narkoba 2025.",
        cards: [StevModal, MarlonModal],
      },
      {
        icon: Visual,
        label: "Visual",
        desc: "Divisi Visual (Chitra Naksatra) Bertanggung jawab atas seluruh aspek visual, termasuk desain grafis, branding, dan estetika publikasi. Chitra Naksatra memastikan identitas visual organisasi kuat dan menarik.",
        cards: [ThereModal, ChrisModal],
      },
      {
        icon: Keamanan,
        label: "Keamanan",
        desc: "Divisi Keamanan (Suraksa Naksatra) Menjaga keamanan dan ketertiban dalam seluruh kegiatan organisasi, baik online maupun offline. Suraksa Naksatra memastikan setiap program berjalan aman dan nyaman untuk semua pihak.",
        cards: [DerrenModal, AndrewModal],
      },
      {
        icon: Perlengkapan,
        label: "Perlengkapan",
        desc: "Divisi Perlengkapan (Upakara Naksatra) Bertugas mengatur dan menyediakan seluruh kebutuhan logo/istik serta perlengkapan kegiatan. Upakara Naksatra memastikan semua persiapan teknis berjalan lancar.",
        cards: [GlenardModal, JosiahModal],
      },
      {
        icon: Pr,
        label: "Humas",
        desc: "Divisi Hubungan Masyarakat (Vakya Naksatra) Menjalin relasi dan membangun komunikasi strategis dengan pihak eksternal, termasuk media, komunitas, dan institusi lain. Vakya Naksatra menjadi wajah organisasi dalam membina citra positif di masyarakat.",
        cards: [RiekheModal, CheliModal],
      },
      {
        icon: Sponsor,
        label: "Sponsor",
        desc: "Divisi Dana dan Sponsor (Artha Naksatra) Bertanggung jawab mencari, mengelola, dan mempertanggungjawabkan dana serta sponsorship. Artha Naksatra memastikan keberlangsungan kegiatan melalui pendanaan yang transparan dan profesional.",
        cards: [ShakiraModal],
      },
      {
        icon: Dekor,
        label: "Dekorasi",
        desc: "Divisi Dekorasi (Alankara Naksatra) Bertanggung jawab memperindah dan menata seluruh elemen visual acara. Alankara Naksatra memastikan suasana acara terasa hidup, sesuai tema, serta memberikan pengalaman estetik yang berkesan bagi peserta dan tamu undangan.",
        cards: [AlexModal, ErineDekorModal],
      },
      {
        icon: Regis,
        label: "Registrasi",
        desc: "Divisi Registrasi (Pravesa Naksatra) Mengatur proses pendaftaran peserta, tamu, dan pihak eksternal. Pravesa Naksatra memastikan setiap proses administrasi berjalan lancar, tertib, dan profesional, mulai dari penerimaan hingga pendataan peserta.",
        cards: [IreneModal, KeishaModal],
      },
      {
        icon: Makeup,
        label: "Makeup",
        desc: "Divisi Makeup (Rupa Naksatra) Berperan mendukung penampilan anggota maupun talent dalam kegiatan organisasi. Rupa Naksatra memastikan setiap penampilan sesuai konsep acara, menambah kepercayaan diri, serta menjaga citra profesional organisasi.",
        cards: [ChristieModal],
      },
      {
        icon: Fm,
        label: "Fresh Money",
        desc: "Divisi Fresh Money (Dhana Naksatra) Fokus pada pencarian pendanaan tambahan melalui berbagai inisiatif kreatif. Dhana Naksatra membantu memperkuat keuangan organisasi dengan strategi fundraising yang inovatif, transparan, dan berkelanjutan.",
        cards: [SelinaModal, ChrisFMModal],
      },
      {
        icon: Pic,
        label: "PIC",
        desc: "Divisi Person In Charge (Nayana Naksatra) Mengemban tanggung jawab khusus sebagai koordinator lapangan maupun penanggung jawab teknis dalam kegiatan. Nayana Naksatra memastikan setiap detail acara terlaksana dengan baik, menjadi penghubung antar divisi, dan menjamin kelancaran eksekusi.",
        cards: [ErineModal],
      },
    ],
    []
  );

  const midIndex = Math.ceil(menuItems.length / 2);
  const outerItems = menuItems.slice(0, midIndex + 2);
  const innerItems = menuItems.slice(midIndex + 2);

  useEffect(() => {
    let frame: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 16.67;
      lastTime = time;

      if (!isDragging) {
        setVelocityOuter((v) => (Math.abs(v) < 0.01 ? 0 : v * friction));
        setVelocityInner((v) => (Math.abs(v) < 0.01 ? 0 : v * friction));
      }

      setOuterAngle((a) => (a + (baseSpeedOuter + velocityOuter) * delta) % 360);
      setInnerAngle((a) => (a + (baseSpeedInner + velocityInner) * delta) % 360);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [velocityOuter, velocityInner, isDragging]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePointerDown = (x: number) => {
    if ((window as any).touches?.length > 1) return;
    setIsDragging(true);
    dragStartX.current = x;
    lastX.current = x;
    lastTime.current = performance.now();
  };

  const handlePointerMove = (x: number) => {
    if (!isDragging) return;

    const now = performance.now();
    const deltaX = x - lastX.current;
    const deltaT = now - lastTime.current;

    if (deltaT === 0) return;

    const v = deltaX / deltaT;

    const dragFactorOuter = 0.15;
    const dragFactorInner = 0.1;

    setOuterAngle((a) => (a + deltaX * dragFactorOuter) % 360);
    setInnerAngle((a) => (a - deltaX * dragFactorInner) % 360);

    setVelocityOuter(v * 8);
    setVelocityInner(-v * 6);

    lastX.current = x;
    lastTime.current = now;
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleOpenDivision = (index: number) => {
    setSelectedDivision(index);
    setCardIndex(0);
  };

  const handleNext = () => {
    if (selectedDivision === null) return;
    const len = menuItems[selectedDivision].cards.length;
    setCardIndex((prev) => (prev + 1) % len);
  };

  const handlePrev = () => {
    if (selectedDivision === null) return;
    const len = menuItems[selectedDivision].cards.length;
    setCardIndex((prev) => (prev - 1 + len) % len);
  };

  const renderRing = (
    items: typeof menuItems,
    angle: number,
    radius: number,
    size: number,
    keyPrefix: string
  ) =>
    items.map((item, i) => {
      const angleOffset = (360 / items.length) * i;
      const totalAngle = (angle + angleOffset) * (Math.PI / 180);
      const x = radius * Math.cos(totalAngle);
      const y = radius * Math.sin(totalAngle);
      return (
        <motion.div
          key={`${keyPrefix}-${i}`}
          className="absolute pointer-events-auto"
          style={{
            transform: `translate(${x}px, ${y}px) scale(${isDragging ? 1.1 : 1})`,
            transition: "transform 0.15s ease",
            zIndex: keyPrefix === "outer" ? 30 : 20,
          }}
        >
          <button
            onClick={() => handleOpenDivision(menuItems.indexOf(item))}
            onDragStart={(e) => e.preventDefault()}
            className={`rounded-full hover:scale-110 cursor-pointer transition ${
              keyPrefix === "outer"
                ? "w-[90px] h-[90px] md:w-[110px] md:h-[110px]"
                : "w-[70px] h-[70px] md:w-[85px] md:h-[85px]"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-full h-full object-cover cursor-pointer rounded-full select-none"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
            />
          </button>
        </motion.div>
      );
    });

  return (
    <div
      className="flex items-center justify-center min-h-screen md:min-h-[120vh] w-auto overflow-hidden relative select-none"
      onPointerDown={(e) => {
        const target = e.target as HTMLElement;

        if (target.tagName === "BUTTON" || target.closest("button")) return;

        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        handlePointerDown(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 1) handlePointerMove(e.clientX);
      }}
      onPointerUp={(e) => {
        e.preventDefault();
        e.currentTarget.releasePointerCapture(e.pointerId);
        handlePointerUp();
      }}
      onPointerCancel={handlePointerUp}
    >
      {/* Center logo */}
      <div className="w-28 h-28 md:w-32 md:h-32 p-2 sm:p-3 rounded-full bg-gradient-to-br from-[#0a1a4f]/100 to-[#3d2ca6]/90 flex items-center justify-center shadow-lg z-25">
        <img
          src={Logo}
          alt="Center Logo"
          className="w-full h-full object-cover rounded-full select-none"
          draggable={false}
        />
      </div>

      {/* Outer Ring */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        {renderRing(outerItems, outerAngle, outerRadius, 90, "outer")}
      </div>

      {/* Inner Ring */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        {renderRing(innerItems, innerAngle, innerRadius, 70, "inner")}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDivision !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedDivision(null)}
            />
            <motion.div
              className="relative z-10 bg-gradient-to-br from-[#3d2ca6]/90 via-[#2b227a]/70 to-[#0a1a4f]/100 rounded-3xl shadow-xl overflow-hidden w-full max-w-sm"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={menuItems[selectedDivision].cards[cardIndex]}
                alt={menuItems[selectedDivision].label}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 sm:p-6 text-gray-200 text-xs sm:text-sm font-bold leading-relaxed">
                {menuItems[selectedDivision].desc}
              </div>

              <div className="flex justify-between items-center px-4 pb-4 gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-white/80 p-2 rounded-full hover:bg-opacity-100 hover:scale-110 transition"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setSelectedDivision(null)}
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 hover:scale-110 transition"
                >
                  <FaTimes size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/80 p-2 rounded-full hover:bg-opacity-100 hover:scale-110 transition"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Division;
