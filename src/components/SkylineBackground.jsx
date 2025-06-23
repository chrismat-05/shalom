// this is temperoary.. until the skyline is actually setup, and deployed.
import { useEffect, useState } from "react";

export default function SkylineBackground() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`fixed inset-0 -z-10 transition-colors duration-500 ${
        darkMode ? "bg-[#1F2937]" : "bg-[#F3F4F6]"
      }`}
    />
  );
}