import { motion } from "framer-motion";

const stars = Array.from({ length: 250 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
}));

export default function StarBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d1b2a] via-[#0a0f1c] to-[#050510] overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            backgroundColor: "white",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, Math.random() * 3 - 1.5], // 👈 حركة طفيفة لأعلى/أسفل
            x: [0, Math.random() * 3 - 1.5], // 👈 حركة طفيفة يمين/شمال
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 👇 تأثير nebula بسيط */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-radial from-pink-900/10 via-transparent to-transparent"></div>
    </div>
  );
}
