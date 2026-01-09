import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import logoImg from "figma:asset/40857a1ddb2a0d07b23562e54d44c72fdb881114.png";

export function Footer() {
  const easterEggText = "* END OF PAGE. NOT END OF IDEAS *";
  const repeatedText = Array(20).fill(easterEggText).join(" ");

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@minerva.agency", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Easter Egg - Wavy Marquee Text */}
      <div className="relative py-16 overflow-hidden border-t-2 border-black/10">
        <style>
          {`
            @keyframes wave-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            
            .wave-text {
              display: inline-block;
              animation: wave-scroll 60s linear infinite;
            }
            
            .wave-text span {
              display: inline-block;
              animation: wave 4s ease-in-out infinite;
            }
            
            @keyframes wave {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}
        </style>
        
        <div className="flex whitespace-nowrap">
          <div className="wave-text">
            {repeatedText.split('').map((char, i) => (
              <span
                key={i}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  letterSpacing: "0.2em",
                  color: "orangered",
                  textTransform: "uppercase",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="wave-text">
            {repeatedText.split('').map((char, i) => (
              <span
                key={i + repeatedText.length}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  letterSpacing: "0.2em",
                  color: "black",
                  textTransform: "uppercase",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <style>
          {`
            @keyframes footer-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .footer-marquee {
              display: inline-block;
              animation: footer-scroll 40s linear infinite;
            }
          `}
        </style>
        <div className="flex whitespace-nowrap py-12">
          <div className="footer-marquee">
            <span className="text-black uppercase tracking-[0.3em] text-6xl font-black">
             
            </span>
          </div>
          <div className="footer-marquee">
            <span className="text-black uppercase tracking-[0.3em] text-6xl font-black">
              
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12 relative z-10 bg-[rgb(255,255,255)]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 border-b border-black/10 pb-8">
          {/* Left: Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            <motion.img 
              src={logoImg} 
              alt="Minerva" 
              className="h-24 w-auto"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          {/* Right: Links & Social */}
          <div>
            {/* Quick Links */}
            <div className="mb-10">
              <h4 className="text-[#FF4500] uppercase tracking-[0.3em] text-xs mb-6" style={{ fontWeight: 700 }}>
                Navigate
              </h4>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                {["Services", "Work", "Why Minerva", "Clients", "Contact"].map((item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-black hover:text-[#FF4500] transition-colors text-sm uppercase tracking-wider block"
                      whileHover={{ x: 8 }}
                      style={{ fontWeight: 600 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-[#FF4500] uppercase tracking-[0.3em] text-xs mb-6" style={{ fontWeight: 700 }}>
                Connect
              </h4>
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="space-y-3">
                  <a
                    href="mailto:hello@minerva.agency"
                    className="block text-black/70 hover:text-[#FF4500] transition-colors text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    hello@minerva.agency
                  </a>
                  <p className="text-black/50 text-sm uppercase tracking-wider" style={{ fontWeight: 600 }}>
                    Based in New York
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.15, backgroundColor: "#FF4500", borderColor: "#FF4500" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 border-2 border-black/20 flex items-center justify-center transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-black group-hover:text-white transition-colors" strokeWidth={2} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-black/40 text-xs uppercase tracking-[0.2em]" style={{ fontWeight: 600 }}>
            © 2024 Minerva. Crafted with precision.
          </p>
          <div className="flex gap-8 items-center">
            <motion.a 
              href="#" 
              className="text-black/40 hover:text-[#FF4500] text-xs uppercase tracking-[0.2em] transition-colors"
              whileHover={{ y: -2 }}
              style={{ fontWeight: 600 }}
            >
              Privacy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-black/40 hover:text-[#FF4500] text-xs uppercase tracking-[0.2em] transition-colors"
              whileHover={{ y: -2 }}
              style={{ fontWeight: 600 }}
            >
              Terms
            </motion.a>
            <motion.a 
              href="#" 
              className="text-black/40 hover:text-[#FF4500] text-xs uppercase tracking-[0.2em] transition-colors"
              whileHover={{ y: -2 }}
              style={{ fontWeight: 600 }}
            >
              Credits
            </motion.a>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, backgroundColor: "#FF4500", borderColor: "#FF4500" }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 border border-black/20 flex items-center justify-center transition-colors ml-2 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-black group-hover:text-white transition-colors" strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Animated Bottom Bar */}
      {/* Removed */}
    </footer>
  );
}