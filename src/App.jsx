import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/Index";
import SkylineBackground from "./components/SkylineBackground";
import StickyFooter from "./components/StickyFooter";
import VerseToast from "./components/VerseToast";

export default function App() {
  return (
    <Router>
      <SkylineBackground />
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <VerseToast />
        <StickyFooter />
      </div>
    </Router>
  );
}
