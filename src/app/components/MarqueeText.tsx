import { motion } from "motion/react";

interface MarqueeTextProps {
  text: string;
  speed?: number;
  reverse?: boolean;
}

export function MarqueeText({ text, speed = 10, reverse = false }: MarqueeTextProps) {
  // Split text by • if it exists, otherwise use the single text
  const items = text.includes("•") ? text.split("•").map(t => t.trim()) : [text];
  
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-black py-4 border-y border-white/10">
      <motion.div
        className="flex gap-6"
        animate={{
          x: reverse ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(30)].map((_, i) => (
          <div key={i} className="flex items-center gap-6">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="text-white uppercase tracking-[0.2em]"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1.25rem)", fontWeight: 700 }}
              >
                {item}
              </span>
            ))}
            <span className="text-[#FF4500] text-lg">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}