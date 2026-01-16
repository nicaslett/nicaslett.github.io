import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Nic Aslett. All rights reserved.
        </div>

        <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@nicaslett.info" className="hover:text-blue-400 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
            </a>
        </div>
      </div>
    </footer>
  );
};
