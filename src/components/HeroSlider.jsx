import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    title: "Welcome to IPC Shalom",
    subtitle: "Come, Let Us Worship Together."
  },
  {
    image: hero2,
    title: "Grow in Christ",
    subtitle: "Experience Spirit-filled Worship and Teaching."
  },
  {
    image: hero3,
    title: "Join Our Family",
    subtitle: "Be a part of our various fellowships."
  }
];

export default function HeroSlider() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [showContent, setShowContent] = useState(false);

  const next = () => setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
  const prev = () => setCurrent(([prev]) => [(prev - 1 + slides.length) % slides.length, -1]);

  useEffect(() => {
    setShowContent(false);
    const contentTimeout = setTimeout(() => setShowContent(true), 1000);
    const interval = setInterval(() => {
      setShowContent(false);
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);
    return () => {
      clearTimeout(contentTimeout);
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={slides[current].image}
            alt="Hero"
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex flex-col justify-center items-center text-center p-4">
        <AnimatePresence>
          {showContent && (
            <motion.div
              key={slides[current].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
                {slides[current].title}
              </h1>
              <p className="text-xl sm:text-3xl mb-8 text-indigo-100">{slides[current].subtitle}</p>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:opacity-90 transition shadow-lg"
              >
                Get in Touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition shadow-lg"
      >
        <ChevronLeft size={24} className="text-indigo-600" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition shadow-lg"
      >
        <ChevronRight size={24} className="text-indigo-600" />
      </button>
    </div>
  );
}