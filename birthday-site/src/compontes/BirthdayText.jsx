import { motion } from "framer-motion";

export default function BirthdayText() {
  const text = "Happy Birthday My Love 🎉💖".split("");

  return (
    <div className="flex justify-center overflow-hidden">
      {text.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: index * 0.05,
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg inline-block mx-[2px]"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
