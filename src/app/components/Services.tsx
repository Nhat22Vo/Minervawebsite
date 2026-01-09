import { motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    title: "Social Media Campaigns",
    description: "Stop the scroll? Boring. We start the movements that break the algorithm.",
  },
  {
    title: "Event & Activations",
    description: "Real-world impact. We build stages where your brand becomes the main character.",
  },
  {
    title: "Merch Campaigns",
    description: "Wearable billboards. Transforming your customers into your most loyal media channel.",
  },
  {
    title: "Video Production",
    description: "Cinema-grade storytelling that hits the nerve and refuses to be skipped.",
  },
  {
    title: "Creative Direction",
    description: "Chaos, curated. We provide the visual discipline that separates brands from businesses.",
  },
  {
    title: "Brand Strategy",
    description: "Your unfair advantage. The ruthless logic behind why you win and they lose.",
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-[#FF4500] uppercase tracking-[0.3em] text-sm mb-4 block">
            What We Do
          </span>
          <h2
            className="text-black uppercase tracking-tight"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Services That
            <br />
            <span className="text-[#FF4500]">Actually Matter</span>
          </h2>
        </div>
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="border-t border-black/10 py-12 cursor-pointer transition-all hover:bg-black/5 hover:border-[#FF4500]"
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
                <motion.h3
                  animate={{ x: hoveredIndex === index ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black uppercase tracking-tight flex-1 text-2xl md:text-4xl"
                  style={{ fontWeight: 700 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="text-black/60 max-w-md text-base md:text-lg uppercase tracking-wider"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-black/10"></div>
        </div>
      </div>
    </section>
  );
}