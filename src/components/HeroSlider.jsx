import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    title: "Welcome to IPC Shalom",
    subtitle: "A Church open for anyone. Come, Let Us Worship Together."
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
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <img
        src={slides[current].image}
        alt="Hero"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center text-white text-center p-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">{slides[current].title}</h1>
        <p className="text-lg sm:text-xl mb-4">{slides[current].subtitle}</p>
        <a href="#contact" className="px-4 py-2 bg-gold text-black rounded-full hover:opacity-90">
          Get in Touch
        </a>
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}