"use client";
import { ScrollReveal } from "./ScrollReveal";

export const Philosophy = () => {
  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto bg-slate-900/50 rounded-3xl my-10">
      <ScrollReveal>
         <h2 className="font-serif text-3xl md:text-4xl text-slate-100 mb-12 text-center">Philosophy & Capabilities</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollReveal delay={0.2}>
            <div className="p-8 border border-slate-700/50 rounded-2xl bg-slate-900 hover:border-blue-500/30 transition-colors duration-300 h-full">
                <h3 className="text-2xl font-serif text-slate-100 mb-4">Empowerment through Process</h3>
                <p className="text-slate-400 text-lg mb-6 font-sans">
                    Agile isn't just a buzzword; it's a mechanism for clarity. I leverage SAFe and Scrum methodologies to untangle chaotic workflows, empowering teams to focus on what they do best: building.
                </p>
                <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-sans">SAFe</span>
                     <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-sans">Scrum</span>
                     <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-sans">Agile Leadership</span>
                </div>
            </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
            <div className="p-8 border border-slate-700/50 rounded-2xl bg-slate-900 hover:border-blue-500/30 transition-colors duration-300 h-full">
                <h3 className="text-2xl font-serif text-slate-100 mb-4">Technical Rigor</h3>
                <p className="text-slate-400 text-lg mb-6 font-sans">
                    A leader should understand the tools. My background in Python, Ansible, and System Integration allows me to have deep, meaningful conversations with engineers and make informed architectural decisions.
                </p>
                <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-sans">Python</span>
                     <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-sans">Ansible</span>
                     <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-sans">System Integration</span>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
