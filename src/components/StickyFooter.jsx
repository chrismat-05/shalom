import { useTheme } from "../context/ThemeContext";
import { ExternalLink, Facebook, Instagram, Youtube, Moon, Sun } from "lucide-react";

export default function StickyFooter() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-slate text-white py-4 px-6 text-sm flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
      <div className="flex items-center">Zinj, Bahrain</div>

      <div className="text-center">
        <div className="flex justify-center gap-3 mb-1">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} className="hover:text-gold" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} className="hover:text-gold" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube size={18} className="hover:text-gold" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-1">
          Built by
          <a
            href="https://thecma.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline flex items-center gap-1"
          >
            CMA <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div>
        <button
          onClick={toggleTheme}
          className="text-white hover:text-gold transition"
          title="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </footer>
  );
}