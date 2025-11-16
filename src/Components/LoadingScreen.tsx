import React, { useEffect, useState } from 'react';
import logo from '../assets/logo/logo.webp';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showWhiteBg, setShowWhiteBg] = useState(true);

  useEffect(() => {
    // Hide logo after 1.8s
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
    }, 1800);

    // Hide white background 2s *after* logo is gone
    const bgTimer = setTimeout(() => {
      setShowWhiteBg(false);
    }, 1400 + 3000); // logo duration + wait time

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(bgTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showWhiteBg && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white flex justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence>
            {showLogo && (
              <motion.img
                src={logo}
                alt="Loading..."
                className="w-auto h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
