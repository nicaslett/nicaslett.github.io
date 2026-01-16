"use client";
import { ScrollReveal } from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const NewHero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto pt-20 relative">
      <ScrollReveal>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight font-bold tracking-tight mb-8 text-slate-100">
          Architecting Stability <br className="hidden md:block" /> at Scale.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-64 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all text-lg"
          >
            Get in Touch
          </button>
          <a
            href="https://drive.google.com/file/d/1bUb2x7nHzDeDBftG6KpO2eD4o_veWQzN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-full font-medium transition-all text-lg text-center flex justify-center items-center"
          >
            View Resume
          </a>
        </div>
      </ScrollReveal>

      <motion.div
        style={{ opacity }}
        className="fixed bottom-8 left-0 right-0 z-50 flex flex-col items-center justify-center md:hidden pointer-events-none text-slate-400"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll to learn more</span>
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};
