"use client";
import { Mail, Linkedin } from "lucide-react";

export const ContactFooter = () => {
    return (
        <footer id="contact" className="py-20 border-t border-slate-800 mt-20">
            <div className="px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="font-serif text-3xl text-slate-100 mb-8">Let's Connect</h2>
                <div className="flex flex-row gap-8 justify-center items-center">
                    <a
                        href="mailto:nic@sylentt.com"
                        className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-slate-100 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/nic-aslett"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-slate-100 hover:bg-[#0077b5] transition-all duration-300 transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>
                <p className="mt-12 text-slate-600 text-sm font-sans">© {new Date().getFullYear()} Nic Aslett. All rights reserved.</p>
            </div>
        </footer>
    )
}
