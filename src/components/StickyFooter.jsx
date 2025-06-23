import { useTheme } from "../context/ThemeContext";
import { ExternalLink, Moon, Sun } from "lucide-react";

export default function StickyFooter() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-slate text-white py-4 px-6 text-sm flex justify-between items-center">
      <div>&copy; {new Date().getFullYear()} IPC Shalom, Kingdom of Bahrain</div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-white hover:text-gold transition"
          title="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="flex items-center gap-1">
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
    </footer>
  );
}
