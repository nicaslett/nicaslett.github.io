import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Hero />
      <ValueProposition />
      {/* Placeholder for other sections like Experience if needed */}
      <Footer />
    </main>
  );
}
