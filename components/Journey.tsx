"use client";
import { ScrollReveal } from "./ScrollReveal";

const milestones = [
    {
        title: "Engineering & Systems Thinking",
        description: "I started close to the work: building, automating, and maintaining systems where reliability mattered. That time shaped how I think - deeply, pragmatically, and with respect for what breaks when decisions are made in isolation.",
        year: "Foundation"
    },
    {
        title: "Process, Scale, and Collaboration",
        description: "As responsibility grew, my focus expanded from systems to workflows and teams. I became known for untangling messy processes, integrating disconnected tools, and helping technical teams operate with clarity instead of constant urgency.",
        year: "Transition"
    },
    {
        title: "Strategic Leadership",
        description: "Today, I operate at the executive level, aligning technology with business outcomes. My role is less about individual solutions and more about direction: setting priorities, reducing friction, and ensuring execution supports long-term growth.",
        year: "Current"
    }
];

export const Journey = () => {
    return (
        <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto">
            <ScrollReveal>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-100 mb-16 text-center">The Journey</h2>
            </ScrollReveal>
            <div className="relative border-l border-slate-700 ml-4 md:ml-0 space-y-12">
                {milestones.map((item, index) => (
                    <div key={index} className="relative pl-12 md:pl-20">
                         {/* Dot */}
                         <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                         <ScrollReveal delay={index * 0.2}>
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                <span className="text-sm font-bold tracking-widest text-blue-400 uppercase md:w-32 flex-shrink-0">
                                    {item.year}
                                </span>
                                <div>
                                    <h3 className="text-2xl font-serif text-slate-100 mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed font-sans">{item.description}</p>
                                </div>
                            </div>
                         </ScrollReveal>
                    </div>
                ))}
            </div>
        </section>
    )
}
