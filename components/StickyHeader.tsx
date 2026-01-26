"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const StickyHeader = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-20 backdrop-blur-md bg-slate-950/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">
          Nic Aslett
        </h1>
        <a
          href="https://www.sylentt.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
          aria-label="Sylentt Partners"
        >
          <Image
            src="/sylentt-logo.png"
            alt="Sylentt Partners"
            width={49}
            height={24}
            className="w-auto h-6"
          />
        </a>
      </div>
    </motion.header>
  );
};
