import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CharisWebp from "../assets/calonDuta/charis.webp";
import MelvinaWebp from "../assets/calonDuta/melvina.webp";
import RizkyWebp from "../assets/calonDuta/rizky.webp";
import RafliWebp from "../assets/calonDuta/rafli.webp";
import NathaniaWebp from "../assets/calonDuta/nathania.webp";
import NingsihWebp from "../assets/calonDuta/ningsih.webp";
import RaditWebp from "../assets/calonDuta/radit.webp";
import RiveraWebp from "../assets/calonDuta/rivera.webp";
import StevenWebp from "../assets/calonDuta/steven.webp";

interface Person {
  id: number;
  name: string;
  img: string;
}

const people: Person[] = [
  { id: 1, name: "Charis Fernando Mendrofa", img: CharisWebp },
  { id: 2, name: "Melvina Patricia Handoyo", img: MelvinaWebp },
  { id: 3, name: "Mohamad Rizky Patriotik", img: RizkyWebp },
  { id: 4, name: "Mohammad Rafli Mahendra", img: RafliWebp },
  { id: 5, name: "Nathania Felicia Jesslyn", img: NathaniaWebp },
  { id: 6, name: "Ningsih Sri Hastuti Halawa", img: NingsihWebp },
  { id: 7, name: "Radit Maulana Hakim", img: RaditWebp },
  { id: 8, name: "Rivera Manuela Tamba", img: RiveraWebp },
  { id: 9, name: "Steven Ong Gunawan", img: StevenWebp },
];

const CalonDuta: React.FC = () => {
  const [active, setActive] = useState<Person | null>(null);

  return (
    <section id="calon-duta" className="min-h-screen relative py-24 px-6 md:px-12 lg:px-20">

      <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-14 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
        CALON DUTA 2025
      </h2>

      {/* Photo Grid */}
      <div className="
        max-w-6xl mx-auto
        grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5
        gap-10
        place-items-center
      ">
        {people.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.25 }}
            className="relative cursor-pointer group"
            onClick={() => setActive(p)}
          >
            {/* Glow border */}
            <motion.div
              className="absolute inset-0 rounded-full group-hover:shadow-[0_0_25px_rgba(50,90,255,0.45)] transition"
            />

            {/* Circle Photo */}
            <img
              src={p.img}
              alt={p.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border border-white/10 shadow-md
              group-hover:brightness-[1.15] transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>


      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-[#0B1635]/90 border border-white/10 rounded-3xl shadow-[0_25px_80px_rgba(5,10,30,0.7)]
              p-6 sm:p-8 max-w-sm w-full flex flex-col items-center text-center"
              initial={{ scale: 0.8, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img loading="lazy"
                src={active.img}
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border border-white/20 shadow-lg mb-4"
              />
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent drop-shadow">
                {active.name}
              </div>

              <button
                onClick={() => setActive(null)}
                className="mt-6 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white
                hover:bg-white/20 transition font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CalonDuta;
