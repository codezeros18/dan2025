import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import img from "../assets/logo/logo6.webp";
import img1 from "../assets/dgts/dgtss1.webp";
import img2 from "../assets/award/award3.webp";
import img3 from "../assets/donor/donor1.webp";
import img4 from "../assets/dgts/dgts4.webp";
import img5 from "../assets/award/award5.webp";

const images = [img1, img2, img3, img4, img5];

type HeaderLayoutProps = {
  variant: "countdown" | "faq";
};

const faqData = [
  {
    title: "Apa itu Duta Anti Narkoba?",
    content:
      "Duta Anti Narkoba adalah program untuk menyebarkan kesadaran akan bahaya narkoba melalui berbagai kegiatan edukatif, sosial, dan kreatif.",
  },
  {
    title: "Bagaimana cara ikut program?",
    content:
      "Kamu bisa ikut dengan mendaftar di event-event resmi yang kami adakan atau memantau instagram kami.",
  },
  {
    title: "Apakah program ini gratis?",
    content:
      "Ya, program ini gratis untuk semua peserta. Namun, kamu bisa ikut berdonasi untuk mendukung kegiatan sosial kami.",
  },
];

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ variant }) => {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // background slideshow
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    if (variant !== "countdown") return;

    const targetDate = new Date(2025, 10, 27, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [variant]);

  const toggleAccordion = (i: number) =>
    setActiveIndex(activeIndex === i ? null : i);

  return (
    <section className="relative w-full min-h-screen flex font-josefin items-center justify-center px-6 py-12 overflow-hidden">

      {/* === BG Slideshow === */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* HERO THEME GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-[#040719]/85 
          via-[#0a1a4f]/60 
          to-[#0a0f2d]/90" />

        {/* HERO THEME GLOW TOP */}
        <div className="absolute inset-0 bg-gradient-to-t 
          from-transparent 
          via-[#1b3a8a]/20 
          to-[#4da0ff]/40 mix-blend-screen opacity-60" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.9)_90%)]" />
      </div>

      {/* === SOFT LIGHT PARTICLES === */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25]">
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white/50 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* === Content Wrapper === */}
      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">

        {/* COUNTDOWN / FAQ BOX */}
        {variant === "countdown" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-white p-8 md:p-10 rounded-2xl min-h-[250px]
              bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,90,255,0.25)]
              order-2 md:order-1"
          >
            <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-center">
              Awarding Night 2025
            </h2>

            <div className="grid grid-cols-2 gap-4 md:flex md:gap-4">
              {Object.entries(timeLeft).map(([label, value], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/10 px-4 py-3 rounded-xl text-center min-w-[70px]
                    shadow-[0_0_20px_rgba(0,80,255,0.25)]"
                >
                  <p className="text-2xl font-bold">{value}</p>
                  <span className="text-sm capitalize">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-white p-8 md:p-10 rounded-2xl min-h-[250px] 
              bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,90,255,0.25)]
              order-2 md:order-1"
          >
            <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-center">FAQ</h2>

            <div className="flex flex-col divide-y divide-white/20">
              {faqData.map((item, i) => (
                <div key={i}>
                  <div
                    className="cursor-pointer flex items-center py-3"
                    onClick={() => toggleAccordion(i)}
                  >
                    <div className="w-10 h-10 flex items-center justify-center mr-3 bg-white/10 rounded-full">
                      {activeIndex === i ? (
                        <FaMinus className="text-white" />
                      ) : (
                        <FaPlus className="text-white" />
                      )}
                    </div>
                    <div
                      className={`flex-1 font-medium text-base ${
                        activeIndex === i ? "text-cyan-300" : "text-white/90"
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>

                  {activeIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-4 text-sm text-white/90 leading-relaxed">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Logo + Title */}
        <motion.div
          className="text-white drop-shadow-xl flex flex-col items-center justify-center text-center order-1 md:order-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={img}
            className="w-[200px] mb-4 drop-shadow-[0_0_25px_rgba(60,140,255,0.5)]"
            alt=""
          />

          <h1 className="text-[40px] md:text-[62px] leading-tight font-extrabold mb-4
            bg-gradient-to-r from-[#7dd3fc] via-[#4cc2ff] to-[#b3cfff]
            bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,120,255,0.6)]">
            Duta Anti Narkoba
          </h1>

          <h4 className="text-[18px] md:text-[22px] leading-snug font-bold opacity-90 font-poppins drop-shadow-lg">
            Smart, Healthy, and Fun
          </h4>
        </motion.div>

      </div>
    </section>
  );
};

export default HeaderLayout;
