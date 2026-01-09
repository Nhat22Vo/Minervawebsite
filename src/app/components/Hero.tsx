import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          {/* Replace these with your actual video URLs */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-graffiti-artist-painting-a-wall-41465-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-skater-doing-tricks-in-a-skate-park-97-large.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="mb-8 uppercase tracking-tight text-white leading-[0.9]"
          >
            <span 
              className="block"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              THE WORLD HAVEN'T SEEN
            </span>
            <span 
              className="block text-[#FF4500] my-2"
              style={{
                fontSize: "clamp(3rem, 12vw, 9rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
              }}
            >
              YOUR BEST WORK YET
            </span>
            <span 
              className="block"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 800,
              }}
            >
              HAVE YOU ?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 mx-auto mb-12 tracking-wide px-4"
            style={{ 
              fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
              maxWidth: "900px",
              fontFamily: "'Courier New', 'Roboto Mono', 'Space Mono', monospace",
              lineHeight: "1.9",
              textWrap: "balance",
              wordSpacing: "0.1em",
            }}
          >
           Potential is nothing without execution. You have the vision; <br />we have the blueprint to build it. Stop letting 'good enough' be the enemy of your legacy. We exist to bridge the gap between where you are and the icon you are meant to be. Let's unlock the version of your brand that the world is waiting for.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center -mt-4"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#FF4500] text-white px-8 py-4 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all flex items-center gap-3"
            >
              View Our Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}