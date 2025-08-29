import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import img1 from '../assets/logo6.webp';
import menuAnimation from '../assets/menuV2.json';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const animationRef = useRef<any>(null);

  const navItems = [
    { nav: 'Home', link: '/' },
    { nav: 'Events', link: '/proker' },
    { nav: 'About Us', link: '/about' },
  ];

  const toggleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);

    if (animationRef.current) {
      animationRef.current.setSpeed(2);
      animationRef.current.setDirection(isMobileMenuOpen ? -1 : 1);
      animationRef.current.play();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        if (currentScrollY > lastScrollY) {
          // scrolling down → show navbar
          setShowNavbar(true);
          setIsDropdownOpen(false); // ⬅️ auto tutup dropdown juga
        } else {
          // scrolling up → hide navbar
          setShowNavbar(false);
        }
      } else {
        // at top of page → hide navbar
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar that shows only on scroll down */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
  className="fixed top-5 left-0 right-0 z-[999] px-4 md:px-12"
>
  <div
    className="max-w-7xl mx-auto md:mx-28 
               backdrop-blur-lg shadow-md rounded-[20px]
               bg-gradient-to-r from-[#0a1a4f]/80 via-[#1a2e7a]/80 to-[#27459b]/80"
  >
    <div className="flex justify-between items-center px-8 md:px-14 py-4">
      <Link to="/">
        <img src={img1} className="w-16 md:w-16" alt="Logo" />
      </Link>

      <ul className="hidden lg:flex space-x-8">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-[16px] leading-[24px] font-[600] text-white transition hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent"
          >
            <Link to={item.link}>{item.nav}</Link>
          </li>

        ))}
      </ul>

      <div className="h-auto flex items-center justify-center lg:hidden ">
        <button onClick={toggleMobile} className="w-12 h-12 md:w-8 md:h-8">
<Lottie
      animationData={menuAnimation}
      loop={false}
      autoplay={false}
      lottieRef={animationRef}
      className="invert" // ini membuat hitam → putih
    />
        </button>
      </div>
    </div>
  </div>
</motion.div>

        )}
      </AnimatePresence>

{/* Mobile Dropdown */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="fixed top-[120px] left-4 right-4 md:left-12 md:right-12 z-[998] 
                 backdrop-blur-lg shadow-lg rounded-2xl 
                 bg-gradient-to-r from-[#0a1a4f]/95 via-[#1a2e7a]/95 to-[#27459b]/95 
                 border border-white/10 p-6"
    >
      <ul className="space-y-6 text-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-lg font-semibold text-white transition 
                       hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 
                       hover:bg-clip-text hover:text-transparent"
          >
            <Link to={item.link} onClick={toggleMobile}>
              {item.nav}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Navbar;
