import { ScrollReveal } from "./ScrollReveal";
import { Server, Shield, Lightbulb } from "lucide-react";

export const ValueProposition = () => {
  const values = [
    {
      icon: <Server className="w-10 h-10 text-blue-400" />,
      title: "IT Architecture",
      description: "Designing scalable, resilient systems that drive business growth. From cloud migrations to microservices."
    },
    {
      icon: <Shield className="w-10 h-10 text-indigo-400" />,
      title: "Stability at Scale",
      description: "Ensuring your infrastructure performs under pressure. Reliable, secure, and maintainable solutions."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-sky-400" />,
      title: "Technical Vision",
      description: "Leading teams with a clear roadmap. Bridging the gap between business strategy and engineering reality."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <ScrollReveal width="100%">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Building the Future</h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                    I help organizations navigate complex technical landscapes with proven expertise and strategic leadership.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 0.1} width="100%">
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors h-full">
                <div className="mb-6 bg-slate-900/80 p-4 w-fit rounded-xl border border-slate-700">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-100">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
