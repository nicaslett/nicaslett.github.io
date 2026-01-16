"use client";
import { ScrollReveal } from "./ScrollReveal";

const capabilities = [
  {
    title: "Simplifying Complexity",
    description: "I specialize in making large, interconnected systems understandable - whether that’s technology, process, or organizational structure. Clarity is the fastest path to momentum."
  },
  {
    title: "Technical Judgment",
    description: "My background allows me to ask better questions, challenge assumptions, and make informed decisions without over-engineering. I value practicality over perfection."
  },
  {
    title: "Operational Stability",
    description: "Strong systems don’t draw attention to themselves. I focus on reliability, predictability, and removing chronic sources of disruption so teams can focus on meaningful work."
  },
  {
    title: "People-Centered Leadership",
    description: "I lead with empathy and accountability. Teams perform best when expectations are clear, trust is mutual, and leadership stays present."
  },
  {
    title: "Strategic Alignment",
    description: "I bridge the gap between vision and execution - translating business goals into actionable direction and ensuring technology investments actually deliver value."
  }
];

export const Philosophy = () => {
  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto bg-slate-900/50 rounded-3xl my-10">
      <ScrollReveal>
         <h2 className="font-serif text-3xl md:text-4xl text-slate-100 mb-12 text-center">Core Capabilities</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {capabilities.map((capability, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="p-8 border border-slate-700/50 rounded-2xl bg-slate-900 hover:border-blue-500/30 transition-colors duration-300 h-full">
                <h3 className="text-2xl font-serif text-slate-100 mb-4">{capability.title}</h3>
                <p className="text-slate-400 text-lg mb-6 font-sans">
                    {capability.description}
                </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
