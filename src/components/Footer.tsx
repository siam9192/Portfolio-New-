import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1224] text-gray-400 border-t border-indigo-900 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 lg:px-8 gap-4">
        {/* Logo / Name */}
        <div className="text-white font-bold text-lg">
          Arafat Hasan Siam
        </div>

        {/* Contact / Social Links */}
        <div className="flex flex-row space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Arafat Hasan Siam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
