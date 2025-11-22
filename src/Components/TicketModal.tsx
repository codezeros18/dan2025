import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

const TicketModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              bg-[#0B1635]/95 
              rounded-3xl border border-white/10 
              shadow-[0_25px_80px_rgba(5,10,30,0.7)] 
              p-8 max-w-sm w-full text-center
            "
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white/70 hover:text-white transition"
              onClick={onClose}
            >
              <IoCloseOutline size={28} />
            </button>

            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Get Your Ticket!
            </h3>

            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Secure your spot now!  
              We can’t wait to see you ✨
            </p>

            {/* Link ke Google Form */}
            <a
              href="https://forms.gle/aMc6XzDUB75YvY9P7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-full 
                font-bold text-white 
                bg-gradient-to-r from-[#1C61B4] via-[#2174CC] to-[#2990FF]
                shadow-xl hover:scale-105 transition-transform duration-200
                inline-block
              "
            >
              Buy Now
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TicketModal;
