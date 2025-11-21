import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CharisWebp from '../assets/calonDuta/Charis Fernando Mendrofa.webp';
import MelvinaWebp from '../assets/calonDuta/Melvina Patricia Handoyo.webp';
import RizkyWebp from '../assets/calonDuta/Mohamad Rizky Patriotik.webp';
import RafliWebp from '../assets/calonDuta/Mohammad Rafli Mahendra.webp';
import NathaniaWebp from '../assets/calonDuta/Nathania Felicia Jesslyn.webp';
import NingsihWebp from '../assets/calonDuta/Ningsih Sri Hastuti Halawa.webp';
import RaditWebp from '../assets/calonDuta/Radit Maulana Hakim.webp';
import RiveraWebp from '../assets/calonDuta/Rivera Manuela Tamba.webp';
import StevenWebp from '../assets/calonDuta/Steven Ong Gunawan.webp';

interface Person {
    id: number;
    name: string;
    img: string;
    dob: string;
    jurusan: string;
    kata: string;
}

type TypedState = {
  name: string;
  dob: string;
  jurusan: string;
  kata: string;
};

const people: Person[] = [
  {
    id: 1,
    name: "Charis Fernando Mendrofa",
    img: CharisWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  },
  {
    id: 2,
    name: "Melvina Patricia Handoyo",
    img: MelvinaWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  },
  {
    id: 3,
    name: "Mohamad Rizky Patriotik",
    img: RizkyWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  },
  {
    id: 4,
    name: "Mohammad Rafli Mahendra",
    img: RafliWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  },
  {
    id: 5,
    name: "Nathania Felicia Jesslyn",
    img: NathaniaWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  },
  {
    id: 6,
    name: "Ningsih Sri Hastuti Halawa",
    img: NingsihWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  },
  {
    id: 7,
    name: "Radit Maulana Hakim",
    img: RaditWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  },
  {
    id: 8,
    name: "Rivera Manuela Tamba",
    img: RiveraWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  },
  {
    id: 9,
    name: "Steven Ong Gunawan",
    img: StevenWebp,
    dob: "25 Mei 2005",
    jurusan: "Informatika",
    kata: "Software engineer with 5 years of experience in full‑stack development."
  }
];

export default function CalonDuta() {
  const [selected, setSelected] = useState<Person | null>(null);
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState({ name: "", dob: "", jurusan: "", kata: "" });
  const cancelRef = useRef({ token: 0 });

  const resetTyping = () => {
    cancelRef.current.token++;
    setTyped({ name: "", dob: "", jurusan: "", kata: "" });
    setStep(0);
  }

  useEffect(() => {
    let current = ++cancelRef.current.token;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const type = async (key: keyof TypedState, text: string, delay = 22) => {
        if(!text) return;
        setTyped((t) => ({ ...t, [key]: ""}));
        for (let i = 0; i < text.length; i++){
            if(cancelRef.current.token !== current) return;
            setTyped((t) => ({ ...t, [key]: t[key] + text[i] }));
            await sleep(delay);
        }
    }

    const runSequence = async () => {
        if (!selected) return resetTyping();
        await sleep(300);
        await type("name", selected.name);
        setStep(1);
        await sleep(120);
        await type("dob", selected.dob);
        setStep(2);
        await sleep(100);
        await type("jurusan", selected.jurusan);
        setStep(3);
        await sleep(100);
        await type("kata", selected.kata);
        setStep(4);
    };

    runSequence();

    return () => {
        cancelRef.current.token++;
    };
  }, [selected]);

  return (
    <div className="flex flex-col p-5 items-center justify-center w-auto overflow-hidden relative select-none">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12
            bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent"
        >
            Calon Duta
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {people.map((p) => (
                <motion.div
                    key={p.id}
                    layoutId={`card-${p.id}`}
                    onClick={() => setSelected(p)}
                    className="cursor-pointer rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                >
                    <motion.img
                        src={p.img}
                        layoutId={`img-${p.id}`}
                        alt={p.name}
                        className="w-full h-60 object-cover"
                    />
                </motion.div>
            ))}
        </div>

        <AnimatePresence>
            {selected && (
                <motion.div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelected(null)}
                >
                    <motion.div
                        layoutId={`card-${selected.id}`}
                        className="bg-black/50 rounded-2xl shadow-xl overflow-hidden w-full max-w-3xl flex flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.div className="w-64 flex-shrink-0">
                            <motion.img
                                layoutId={`img-${selected.id}`}
                                src={selected.img}
                                alt={selected.name}
                                className="w-64 h-64 object-cover m-5"
                            />
                        </motion.div>

                        <div className="p-6 md:w-1/2">
                            <div className="text-3xl bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent font-semibold mb-2">{typed.name}</div>
                            <div className="text-white text-lg md:text-xl font-semibold">{step >= 1 ? typed.dob : ""}</div>
                            <div className="text-white text-lg md:text-xl font-semibold">{step >= 2 ? typed.jurusan : ""}</div>
                            <div className="text-white text-lg md:text-xl font-semibold">{step >= 3 ? typed.kata : ""}</div>
                            <div className="mt-6">
                            <button
                                onClick={() => setSelected(null)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                                >
                                Close
                            </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}
