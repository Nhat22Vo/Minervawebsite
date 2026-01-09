import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-16 bg-black overflow-hidden">
      {/* Subtle Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(255, 69, 0, 0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 70% 50%, rgba(255, 87, 34, 0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 30% 50%, rgba(255, 69, 0, 0.15) 0%, transparent 40%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2
          className="text-white uppercase tracking-tight mb-4"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Ready to Create
          <br />
          <span className="text-[#FF4500]">Cultural Fire?</span>
        </h2>

        <p
          className="text-white/60 mb-8 uppercase tracking-[0.2em] max-w-2xl mx-auto"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
        >
          Let's build campaigns that don't just perform.
          <br />
          They dominate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-[#FF4500] text-white px-10 py-5 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all"
          >
            Start a Project
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>

          <motion.a
            href="mailto:hello@minerva.agency"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-all"
          >
            hello@minerva.agency
          </motion.a>
        </div>
      </div>
    </section>
  );
}