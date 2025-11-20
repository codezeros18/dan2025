import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* MODAL CARD */}
          <motion.div
            initial={{ scale: 0.8, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-[#0F3A66] via-[#174F91] to-[#1C61B4] rounded-2xl shadow-2xl p-10 text-white max-w-md w-full text-center"
          >
            <h2 className="text-3xl font-extrabold mb-3">Stay Tuned!</h2>
            <p className="text-white/90 text-lg">
              Ticket information will be available soon.
            </p>

            <button
              className="absolute top-3 right-3 text-white/80 hover:text-white transition"
              onClick={onClose}
            >
              <IoClose size={26} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TicketModal;
