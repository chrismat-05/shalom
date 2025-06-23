import { NavLink } from "react-router-dom";
import logo from "../assets/IPC Shalom.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white/60 backdrop-blur-md fixed w-full top-0 z-30">
      <div className="flex items-center gap-2">
        <img src={logo} alt="IPC Shalom" className="w-10 h-10 rounded-full" />
        <div>
          <h1 className="font-bold text-royal">IPC Shalom</h1>
          <p className="text-xs text-textSecondary">Kingdom of Bahrain</p>
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/about" className="hover:underline">About</NavLink>
        <a
          href="#contact"
          className="bg-gold text-black px-4 py-2 rounded hover:opacity-90"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}