import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

// ASSETS
import Logo from "../assets/logo/logo6.webp";
import menuAnimation from "../assets/menuV2.json";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const animationRef = useRef<any>(null);
  const location = useLocation();

  const navItems = [
    { nav: "Home", link: "/" },
    { nav: "Events", link: "/proker" },
    { nav: "About Us", link: "/about" },
  ];

  const toggleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);

    if (animationRef.current) {
      animationRef.current.setSpeed(1.8);
      animationRef.current.setDirection(isMobileMenuOpen ? -1 : 1);
      animationRef.current.play();
    }
  };

  useEffect(() => {
    if (!showNavbar && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);

      if (animationRef.current) {
        animationRef.current.setDirection(-1);
        animationRef.current.goToAndStop(0, true);
      }
    }
  }, [showNavbar, isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > 20) {
        if (current > lastScrollY) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            initial={{ opacity: 0, y: -26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -26 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-5 left-0 right-0 z-[999] px-4 md:px-12"
          >
            <div
              className="
              w-full max-w-7xl mx-auto px-0 xl:px-10
              backdrop-blur-xl 
              shadow-[0_8px_40px_rgba(5,10,30,0.35)]
              rounded-2xl border border-white/10
              relative overflow-hidden
              "
            >
              {/* Cinematic Highlight Overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl 
              bg-gradient-to-br from-white/5 to-transparent mix-blend-overlay"></div>

              <div className="
                absolute inset-0 opacity-[0.15] pointer-events-none
                bg-gradient-to-r from-[#08152C] via-[#0A1F44] to-[#113C81]
              " />

              {/* MAIN CONTENT */}
              <div className="relative flex justify-between items-center px-8 md:px-14 py-5">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-2">
                  <img src={Logo} className="w-14 md:w-16 drop-shadow-lg" />
                </Link>

                {/* DESKTOP NAV */}
                <ul className="hidden lg:flex space-x-10">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.link;
                    return (
                      <li
                        key={index}
                        className={`relative text-[16px] font-semibold transition duration-200
                        ${
                          isActive
                            ? "text-white after:w-full"
                            : "text-white/80 hover:text-white after:w-0"
                        }
                        after:absolute after:-bottom-1 after:left-0 
                        after:h-[2px] after:bg-gradient-to-r 
                        after:from-cyan-300 after:to-blue-400
                        after:rounded-full after:transition-all after:duration-300
                        hover:after:w-full`}
                      >
                        <Link to={item.link}>{item.nav}</Link>
                      </li>
                    );
                  })}
                </ul>

                {/* MOBILE BUTTON */}
                <div className="lg:hidden flex items-center justify-center">
                  <button onClick={toggleMobile} className="w-11 h-11">
                    <Lottie
                      animationData={menuAnimation}
                      loop={false}
                      autoplay={false}
                      lottieRef={animationRef}
                      className="invert"
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="
            fixed top-[120px] left-4 right-4 md:left-12 md:right-12 
            z-[998] backdrop-blur-2xl shadow-2xl rounded-2xl 
            bg-gradient-to-b from-[#0B1836]/95 via-[#112A5E]/95 to-[#163D88]/95
            border border-white/10 p-6
            "
          >
            <ul className="space-y-6 text-center">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.link;
                return (
                  <li
                    key={index}
                    className={`text-lg font-semibold transition duration-300 
                    ${
                      isActive
                        ? "text-white bg-clip-text"
                        : "text-white/80 hover:text-white"
                    }
                    `}
                  >
                    <Link to={item.link} onClick={toggleMobile}>
                      {item.nav}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
