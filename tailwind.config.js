export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollMargin: {
        '20': '5rem',
      },
      colors: {
        royal: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF'
        },
        gold: {
          DEFAULT: '#FACC15',
          dark: '#D97706'
        },
        softGray: {
          DEFAULT: '#F8F5F0',
          dark: '#1F2937'
        },
        slate: {
          DEFAULT: '#1F2937',
          dark: '#111827'
        },
        textPrimary: {
          DEFAULT: '#111827',
          dark: '#F3F4F6'
        },
        textSecondary: {
          DEFAULT: '#6B7280',
          dark: '#9CA3AF'
        }
      },
    },
  },
  plugins: [],
};