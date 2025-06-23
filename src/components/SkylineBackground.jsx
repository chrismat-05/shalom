// this is temperoary.. until the skyline is actually setup, and deployed.
import { useTheme } from "../context/ThemeContext";

export default function SkylineBackground() {
  const { theme } = useTheme();

  return (
    <div
      className={`fixed inset-0 -z-10 transition-colors duration-500 ${
        theme === "dark" ? "bg-slate" : "bg-softGray"
      }`}
    />
  );
}