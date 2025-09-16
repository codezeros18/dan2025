import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import img from "../assets/logo6.webp";
import img1 from "../assets/dgtss1.webp";
import img2 from "../assets/award3.webp";
import img3 from "../assets/donor1.webp";
import img4 from "../assets/dgts4.webp";
import img5 from "../assets/award5.webp";

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

  // bg slideshow
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
  if (variant !== "countdown") return;

  // target date langsung fixed
  const targetDate = new Date(2025, 10, 27, 0, 0, 0);
// bulan 10 = November (karena 0 = Januari)

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      clearInterval(timer);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
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
      {/* BG Slideshow */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a4f]/100 via-[#2b227a]/70 to-[#3d2ca6]/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        {variant === "countdown" ? (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center text-white p-8 md:p-10 rounded-2xl min-h-[250px] 
               bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-indigo-500/50 
               backdrop-blur-md shadow-lg order-2 md:order-1"
  >
    <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-center">
      Awarding Night 2025
    </h2>

    {/* Responsive Grid */}
    <div className="grid grid-cols-2 gap-4 md:flex md:gap-4">
      {Object.entries(timeLeft).map(([label, value], i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-white/20 px-4 py-3 rounded-xl text-center min-w-[70px]"
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
    transition={{ duration: 0.5 }}
    className="flex flex-col text-white p-8 md:p-10 rounded-2xl min-h-[250px] 
               bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-indigo-500/50 
               backdrop-blur-md shadow-lg order-2 md:order-1 w-full max-w-xl mx-auto"
  >
    <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-center">
      FAQ
    </h2>
    <div className="flex flex-col divide-y divide-white/20">
      {faqData.map((item, i) => (
        <div key={i}>
          <div
            className="cursor-pointer flex items-center py-3"
            onClick={() => toggleAccordion(i)}
          >
            <div className="w-10 h-10 flex items-center justify-center mr-3 bg-white/20 rounded-full">
              {activeIndex === i ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </div>
            <div
              className={`flex-1 font-medium text-base transition-colors duration-200 ${
                activeIndex === i ? "text-yellow-300" : "text-white/90"
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
  className="text-white drop-shadow-lg flex flex-col items-center justify-center text-center order-1 md:order-2"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <img src={img} className="w-[200px] mb-4" alt="" />
  <h1 className="text-[40px] md:text-[62px] leading-tight font-extrabold mb-4">
    Duta Anti Narkoba
  </h1>
  <h4 className="text-[18px] md:text-[22px] leading-snug font-bold opacity-90 font-poppins">
    Smart, Healthy, and Fun
  </h4>
</motion.div>

      </div>
    </section>
  );
};

export default HeaderLayout;
