/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#2563EB",
        gold: "#FACC15",
        softGray: "#F3F4F6",
        slate: "#1F2937",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
      },
    },
  },
  plugins: [],
};
