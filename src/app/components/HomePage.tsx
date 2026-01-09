import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { MarqueeText } from "./MarqueeText";
import { WhyMinerva } from "./WhyMinerva";
import { Services } from "./Services";
import { Work } from "./Work";
import { ClientStories } from "./ClientStories";
import { Stats } from "./Stats";
import { CTA } from "./CTA";
import { Footer } from "./Footer";
import { CustomCursor } from "./CustomCursor";

export function HomePage() {
  return (
    <div className="relative bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Custom Cursor - only visible on desktop */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Marquee Text - About Us */}
      <MarqueeText text="BRANDING • COLLAB" />

      {/* Services - What We Do */}
      <Services />

      {/* Marquee Text - Services */}
      <MarqueeText text="CREATIVE • CULTURE • ENERGY" reverse />

      {/* Why Work With Us */}
      <WhyMinerva />

      {/* Stats */}
      <Stats />

      {/* Marquee Text - The Work */}
      <MarqueeText text="THE WORK • CASE STUDIES" />

      {/* Work & Projects */}
      <Work />

      {/* Marquee Text - Brands */}
      <MarqueeText text="NIKE • ADIDAS • SUPREME • OFF-WHITE • SPOTIFY" />

      {/* Client Stories */}
      <ClientStories />

      {/* Marquee Text - Let's Go */}
      <MarqueeText text="LET'S CREATE • LET'S BUILD" reverse />

      {/* CTA */}
      <CTA />

      {/* Marquee Text - Energy */}
      <MarqueeText text="BOLD • FEARLESS • CULTURE-DRIVEN • AUTHENTIC" reverse />

      {/* Footer */}
      <Footer />
    </div>
  );
}
