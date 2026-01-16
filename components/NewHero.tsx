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
    </section>
  );
};
