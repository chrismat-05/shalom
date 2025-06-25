import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/IPC Shalom.png";

const MobileNavItem = ({ to, name, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md text-base font-medium relative ${
          isActive
            ? "text-indigo-600 bg-indigo-50"
            : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
        }`
      }
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {({ isActive }) => (
        <>
          {name}
          {(isActive || isHovered) && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-indigo-600 w-full"
              layoutId="mobile-underline"
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ 
                scaleX: 1,
                transition: { 
                  type: "spring", 
                  bounce: 0.2, 
                  duration: 0.4 
                }
              }}
            />
          )}
        </>
      )}
    </NavLink>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (hero) {
      heroRef.current = hero;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      
      const inHeroSection = currentScrollY < heroHeight;
      setIsInHero(inHeroSection);

      const scrollingUp = currentScrollY < lastScrollY;
      setIsScrollingUp(scrollingUp);
      
      setShouldHide(!inHeroSection && !scrollingUp && !currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/ministries", name: "Ministries" },
    { path: "/gallery", name: "Gallery" },
  ];

  const NavItem = ({ to, name }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative px-2 py-1 text-sm font-medium transition-colors hover:text-red-600 ${
            isActive ? "text-red-600" : "text-gray-700"
          }`
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {({ isActive }) => (
          <>
            {name}
            {(isActive || isHovered) && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-red-600 w-full"
                layoutId="underline"
                initial={{ scaleX: 0, originX: 1 }}
                animate={{ 
                  scaleX: 1,
                  transition: { 
                    type: "spring", 
                    bounce: 0.2, 
                    duration: 0.4 
                  }
                }}
              />
            )}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isInHero ? 0 : (shouldHide ? 0 : (isScrollingUp ? 1 : 0.8)),
        y: isInHero ? -20 : 0
      }}
      transition={{ 
        duration: isScrollingUp ? 0.2 : 0.4,
        ease: isScrollingUp ? "easeOut" : "easeIn"
      }}
      className={`fixed w-full top-0 z-50 bg-white/90 shadow-sm py-2 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="IPC Shalom"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="font-bold text-gray-800">IPC Shalom</h1>
              <p className="text-xs text-gray-500">Kingdom of Bahrain</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavItem key={link.path} to={link.path} name={link.name} />
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-red-600 to-green-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-all text-sm font-medium"
            >
              Get in Touch
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden fixed w-full bg-white shadow-lg z-50"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <MobileNavItem
                  key={link.path}
                  to={link.path}
                  name={link.name}
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <a
                href="#contact"
                className="block w-full text-center bg-gradient-to-r from-red-600 to-green-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-all text-base font-medium mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}