import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import VerseToast from "./components/VerseToast";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative z-10 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/ministry" element={<Ministries />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/photos" element={<Gallery />} />
        </Routes>
        <VerseToast />
        <StickyFooter />
      </div>
    </Router>
  );
}
