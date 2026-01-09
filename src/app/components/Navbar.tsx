import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "figma:asset/9e20bf103b1cfb81b950718006199d3e50ca6522.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Services", "Work", "Why Minerva", "Clients", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img src={logoImg} alt="Minerva" className="h-10 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <MagneticButton key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/80 hover:text-[#FF4500] transition-colors uppercase text-sm tracking-wider"
                >
                  {item}
                </a>
              </MagneticButton>
            ))}
            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF4500] text-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-[#FF5722] transition-colors"
              >
                Let's Talk
              </motion.button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block text-white/80 hover:text-[#FF4500] py-3 uppercase text-sm tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="bg-[#FF4500] text-white px-6 py-3 uppercase text-sm tracking-wider w-full mt-4"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={resetPosition}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}