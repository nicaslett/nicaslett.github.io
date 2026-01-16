"use client";

export const ContactFooter = () => {
    return (
        <footer className="py-20 border-t border-slate-800 mt-20">
            <div className="px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="font-serif text-3xl text-slate-100 mb-8">Let's Connect</h2>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg font-sans">
                    <a href="mailto:nic@sylentt.com" className="text-slate-400 hover:text-blue-400 transition-colors">nic@sylentt.com</a>
                    <a href="https://linkedin.com/in/nic-aslett" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1bUb2x7nHzDeDBftG6KpO2eD4o_veWQzN/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-slate-100 text-slate-900 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all">
                        View Resume
                    </a>
                </div>
                <p className="mt-12 text-slate-600 text-sm font-sans">© {new Date().getFullYear()} Nic Aslett. All rights reserved.</p>
            </div>
        </footer>
    )
}
