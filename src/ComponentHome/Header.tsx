import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Vid from '../assets/vid1.mp4';
import img from '../assets/logo6.webp';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NavigationOptions } from 'swiper/types';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Header: React.FC = () => {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);
  const slides = [
    {
  title: "DGTS 2025 ", 
  desc: "Spreading awareness about drugs and anti-drugs to high school students.",
  button: "Explore Now",
  link: "/proker"
},
{
  title: "ANW 2025",
  desc: "Contribute through donation, blood drives, and orphanage visits to make a real impact.",
  button: "Donate Today",
  link: "/proker"
},
{
  title: "AWARDING NIGHT 2025",
  desc: "Celebrate the finalists and close the event with an unforgettable awarding party night.",
  button: "Join Us",
  link: "/proker"
}

  ];
  return (
    <section className="relative w-full min-h-screen flex font-josefin items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={Vid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a4f]/100 via-[#2b227a]/70 to-[#3d2ca6]/90"></div>

      {/* Content */}
      <div className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10">
        {/* Right Video Column */}
        <div className="relative max-w-full lg:max-w-[350px] xl:max-w-[450px] mx-auto order-2 lg:order-1">
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000 }}
  loop
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  } as NavigationOptions}
  onBeforeInit={(swiper) => {
    if (swiper.params.navigation && typeof swiper.params.navigation === "object") {
      (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
      (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
    }
  }}
  className="rounded-2xl shadow-lg relative overflow-visible" // ⬅️ ini penting
>
  {slides.map((item, index) => (
    <SwiperSlide key={index}>
      <div
        className="flex flex-col items-center justify-center text-white p-8 md:p-10 rounded-2xl min-h-[350px] md:min-h-[250px] 
                   bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-indigo-500/50 
                   backdrop-blur-md shadow-lg"
      >
        <h2 className="text-xl md:text-2xl font-extrabold mb-3 text-center leading-snug drop-shadow-md">
          {item.title}
        </h2>
        <p className="mb-6 text-center text-base md:text-lg mx-2 sm:mx-0 opacity-90">
          {item.desc}
        </p>
        <Link
          to={item.link}
          className="px-6 py-2 rounded-full font-semibold text-white shadow-md 
                     bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-indigo-500/80
                     hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          {item.button}
        </Link>
      </div>
    </SwiperSlide>
  ))}

  {/* Tombol Navigasi */}
  <button
    ref={prevRef}
    className="absolute top-1/2 -left-0 z-20 -translate-y-1/2 
               bg-white text-blue-700 rounded-full p-2 shadow-md 
               hover:scale-110 transition cursor-pointer"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
  <button
    ref={nextRef}
    className="absolute top-1/2 -right-0 z-20 -translate-y-1/2 
               bg-white text-blue-700 rounded-full p-2 shadow-md 
               hover:scale-110 transition cursor-pointer"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
</Swiper>

    </div>
        {/* Left Text Column */}
        <motion.div
          className="text-white drop-shadow-lg flex flex-col items-center justify-center text-center order-1 lg:order-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
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

export default Header;
