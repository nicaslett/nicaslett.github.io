"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950 text-white flex flex-col justify-center items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Mesh Gradient */}
        <div className="absolute inset-0 bg-slate-950" />

        <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/30 rounded-full blur-[100px]"
        />
        <motion.div
            animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="z-10 container px-6 text-center flex flex-col items-center max-w-5xl mx-auto">
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-[1.1]"
        >
          Nic Aslett
        </motion.h1>
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-4xl lg:text-5xl font-light text-blue-200 mb-12 tracking-wide"
        >
          Technical Leader
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
        >
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-900/20 min-h-[50px] text-lg hover:scale-105 active:scale-95 cursor-pointer">
                Get in Touch
            </button>
            <button className="w-full sm:w-auto text-center border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all min-h-[50px] text-lg hover:bg-slate-800/50 cursor-pointer">
                View Resume
            </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-slate-500">Scroll</span>
            <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </motion.div>
    </section>
  );
};
