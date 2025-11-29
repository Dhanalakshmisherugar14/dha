import { motion } from "framer-motion";

export default function LoveMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
      className="p-8 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
    >
      <p className="text-2xl font-serif text-gray-900 leading-relaxed italic">
        "I love you endlessly. <br />
        You make my world beautiful. ❤️✨"
      </p>
    </motion.div>
  );
}
