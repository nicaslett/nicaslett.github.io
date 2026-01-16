"use client";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export const Biography = () => {
  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         {/* Text */}
         <div className="space-y-8 order-2 lg:order-1">
            <ScrollReveal>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-100 mb-6">The Core</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
                    My foundation is built on 15 years of deep engineering. I didn’t just manage tools; I built them. From crafting complex automation scripts in Python and PowerShell to architecting resilient systems, I understand exactly what happens under the hood. This technical rigor ensures that every strategy I propose is grounded in reality and executable at scale.
                </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
                    Over the last 5 years, I’ve transitioned that technical depth into high-level leadership. I specialize in driving transformational change—taking underperforming departments and turning them around by optimizing processes and fostering genuine collaboration. I bridge the divide between technical teams and executive goals, ensuring that stability and innovation go hand in hand.
                </p>
            </ScrollReveal>
         </div>

         {/* Image */}
         <ScrollReveal delay={0.4} className="order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl bg-slate-800">
                 <Image
                    src="/profile.jpg"
                    alt="Nic Aslett"
                    fill
                    className="object-cover"
                 />
            </div>
         </ScrollReveal>
      </div>
    </section>
  )
}
