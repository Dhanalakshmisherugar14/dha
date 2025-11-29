import { motion } from "framer-motion";

export default function Confetti() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
  const pieces = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 1,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            opacity: [1, 1, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "easeOut",
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: colors[i % colors.length] }}
        />
      ))}
    </div>
  );
}
