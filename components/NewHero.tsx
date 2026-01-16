"use client";
import { ScrollReveal } from "./ScrollReveal";

export const NewHero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto pt-20">
      <ScrollReveal>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight font-bold tracking-tight mb-8 text-slate-100">
          Architecting Stability <br className="hidden md:block" /> at Scale.
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all text-lg"
          >
            Get in Touch
          </button>
          <a
            href="https://drive.google.com/file/d/1bUb2x7nHzDeDBftG6KpO2eD4o_veWQzN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-full font-medium transition-all text-lg text-center"
          >
            View Resume
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};
