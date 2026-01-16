import { NewHero } from "@/components/NewHero";
import { Biography } from "@/components/Biography";
import { Journey } from "@/components/Journey";
import { Philosophy } from "@/components/Philosophy";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <NewHero />
      <Biography />
      <Journey />
      <Philosophy />
      <ContactFooter />
    </main>
  );
}
