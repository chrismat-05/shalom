import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import verses from "../data/verses";
import { Share2, MessageSquareQuote } from "lucide-react";

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
    <>
      <AnimatePresence>
        {visible && verse && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 max-w-sm p-4 bg-white/30 backdrop-blur-lg border border-white/40 rounded-xl shadow-xl z-50 hidden sm:flex flex-col gap-2 text-sm text-white"
          >
            <div className="text-textSecondary dark:text-softGray/80">Here's a Bible Verse for you:</div>
            <div className="text-textPrimary font-semibold">{verse.text}</div>
            <div className="text-xs text-textSecondary dark:text-softGray/70 text-right italic">— {verse.reference}</div>
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={handleShare}
                className="text-gold dark:text-gold-dark flex items-center gap-1 hover:underline"
              >
                <Share2 size={16} /> Share
              </button>
              <button
                onClick={() => setVisible(false)}
                className="text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!visible && (
        <motion.button
          onClick={() => setVisible(true)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
          className="fixed bottom-6 right-6 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-md z-40 text-white hidden sm:flex"
        >
          <MessageSquareQuote size={20} />
        </motion.button>
      )}
    </>
  );
}