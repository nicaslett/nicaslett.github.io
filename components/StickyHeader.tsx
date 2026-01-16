"use client";

import { motion } from "framer-motion";

export const StickyHeader = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-20 backdrop-blur-md bg-slate-950/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="font-serif text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
          Nic Aslett
        </h1>
      </div>
    </motion.header>
  );
};
