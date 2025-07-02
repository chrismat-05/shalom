import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  { label: "Yes, I’d like to learn more", key: "learn" },
  { label: "Reach out / Prayer request", key: "reach" }
];

export default function OnboardingModal() {
/*  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white p-6 rounded-xl max-w-sm w-full"
        >
          {!selected ? (
            <>
              <h2 className="text-lg font-bold mb-4">Welcome to IPC Shalom</h2>
              {options.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSelected(opt.key)}
                  className="block w-full text-left px-4 py-2 mb-2 rounded bg-softGray hover:bg-royal/20"
                >
                  {opt.label}
                </button>
              ))}
            </>
          ) : (
            <div>
              <p className="mb-4">You selected: <strong>{selected}</strong></p>
              <button
                onClick={() => setOpen(false)}
                className="bg-royal text-white px-4 py-2 rounded hover:bg-royal/90"
              >
                Continue
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
*/}