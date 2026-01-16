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
        <div className="text-lg md:text-xl text-slate-400 max-w-3xl font-light mb-12 space-y-6">
          <p>
            I’ve spent my career working where complexity lives - inside systems, teams, and organizations that have outgrown their original design. My foundation is technical, but my impact has always come from understanding how technology, people, and process intersect.
          </p>
          <p>
            Over time, that perspective pulled me into leadership. Not to move further away from the work, but to influence it at scale. Today, I focus on creating clarity where things feel tangled - aligning execution with strategy, stabilizing environments, and building systems that people actually trust and want to use.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-slate-100 text-slate-950 font-medium rounded-full hover:bg-slate-200 transition-colors text-center"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1bUb2x7nHzDeDBftG6KpO2eD4o_veWQzN/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-slate-700 text-slate-300 font-medium rounded-full hover:border-slate-500 hover:text-slate-100 transition-colors text-center"
          >
            View Resume
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};
