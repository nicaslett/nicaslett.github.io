"use client";
import { ScrollReveal } from "./ScrollReveal";

const milestones = [
    {
        title: "Deep Technical Roots",
        description: "Built the bedrock of my career on hands-on engineering. Mastered Python, Bash, and Jenkins to automate complex workflows and ensure system reliability.",
        year: "The Foundation"
    },
    {
        title: "Process Mastery",
        description: "Streamlined operations using the Atlassian Stack and Jira. Integrated disparate systems to create seamless, efficient development lifecycles.",
        year: "Integration"
    },
    {
        title: "Strategic Leadership",
        description: "Transitioned to VP-level strategy, earning SAFe/Scrum certifications. Focused on turning around departments and aligning technical execution with business objectives.",
        year: "Leadership"
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
