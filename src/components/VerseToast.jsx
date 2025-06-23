import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import verses from "../data/verses";
import { Share2 } from "lucide-react";

export default function VerseToast() {
  const [visible, setVisible] = useState(true);
  const [verse, setVerse] = useState(null);

  useEffect(() => {
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    setVerse(randomVerse);
  }, []);

  const handleShare = () => {
    alert("Image Share.");
  };

  return (
    <AnimatePresence>
      {visible && verse && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 max-w-sm p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-lg z-50 hidden sm:flex flex-col gap-2"
        >
          <div className="text-sm text-textSecondary">Verse of the Week</div>
          <div className="text-textPrimary font-semibold">{verse.text}</div>
          <div className="text-xs text-textSecondary text-right italic">— {verse.reference}</div>
          <button
            onClick={handleShare}
            className="mt-2 text-royal flex items-center gap-1 hover:underline"
          >
            <Share2 size={16} /> Share
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
