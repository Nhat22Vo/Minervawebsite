import { motion } from "motion/react";
import { useState } from "react";
import { Target, Zap, Sparkles, TrendingUp } from "lucide-react";

export function WhyMinerva() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      icon: Target,
      title: "Strategic Thinking",
      description: "We don't guess. We study culture, decode trends, and engineer campaigns that land.",
    },
    {
      icon: Zap,
      title: "Execution at Speed",
      description: "Fast, flawless, fearless. We move at the pace of culture without cutting corners.",
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      description: "Bold aesthetics. Sharp concepts. Every frame, every word, every moment matters.",
    },
    {
      icon: TrendingUp,
      title: "Cultural Relevance",
      description: "We don't follow trends. We create them. Your brand becomes the conversation.",
    },
  ];

  return (
    <section id="why-minerva" className="relative py-32 bg-black overflow-hidden">
      {/* Subtle Background Element */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/5"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-[#FF4500] uppercase tracking-[0.3em] text-sm mb-4 block">
            Why Work With Us
          </span>
          <h2
            className="text-white uppercase tracking-tight"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            We don't do corporate-lame.
            <br />
            <span className="text-[#FF4500]">We do cultural fire.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="border-t border-white/10 py-12 cursor-pointer transition-all hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
                <div className="flex items-center gap-6 flex-1">
                  <reason.icon 
                    className="w-8 h-8 text-[#FF4500] flex-shrink-0" 
                    strokeWidth={1.5} 
                  />
                  <motion.h3
                    animate={{ x: hoveredIndex === index ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white uppercase tracking-tight text-2xl md:text-4xl"
                    style={{ fontWeight: 700 }}
                  >
                    {reason.title}
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="text-white/60 max-w-md text-base md:text-lg uppercase tracking-wider"
                >
                  {reason.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>

        {/* Bold Statement */}
        <div className="mt-20 text-center">
          <p
            className="text-white uppercase tracking-[0.2em] max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 700 }}
          >
            Brands trust us because we don't play safe.
            <br />
            <span className="text-[#FF4500]">We play to win.</span>
          </p>
        </div>
      </div>
    </section>
  );
}