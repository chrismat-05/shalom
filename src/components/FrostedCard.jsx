import { motion } from "framer-motion";

export default function FrostedCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
