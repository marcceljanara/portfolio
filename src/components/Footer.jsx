import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

// Footer Component
const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/marcceljanara" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/i-nengah-marccel-janara-brata-cipta/" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/inengah_marccel/#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:inengahmarcceljbc@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-slate-400 text-sm font-mono">
            Built with React & Tailwind CSS
          </p>
          <p className="text-slate-500 text-xs">
            © 2025 Marccel Janara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
