import { motion } from "motion/react";
import { useState } from "react";
import { VideoPopup } from "./VideoPopup";
import { Link } from "react-router-dom";
import { caseStudiesData, getCaseStudiesByCategory } from "../data/caseStudiesData";

export function Work() {
  const [videoPopup, setVideoPopup] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: "",
    title: "",
  });

  const socialMediaProjects = getCaseStudiesByCategory("social-media");
  const eventsActivations = getCaseStudiesByCategory("events");
  const merchCampaigns = getCaseStudiesByCategory("merch");
  const brandIdentity = getCaseStudiesByCategory("brand-identity");

  const collaborators = [
    "Solana",
    "Superteamvn",
    "SqrDAO",
    "ByBit",
    "Aptos",
    "Decentralab",
    "KyberSwap",
    "Ourbit",
  ];

  const openVideo = (url: string, title: string) => {
    setVideoPopup({ isOpen: true, url, title });
  };

  return (
    <section id="work" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-[#FF4500] uppercase tracking-[0.3em] text-sm mb-4 block">
            The Work
          </span>
          <h2
            className="uppercase tracking-tight"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Case Studies That
            <br />
            <span className="text-[#FF4500]">Actually Moved Culture</span>
          </h2>
        </div>

        {/* Social Media Projects */}
        <div className="mb-24">
          <h3 className="uppercase tracking-[0.2em] text-xl mb-8">
            Social Media Campaigns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialMediaProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Events & Activations */}
        <div className="mb-24">
          <h3 className="uppercase tracking-[0.2em] text-xl mb-8">
            Events & Activations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventsActivations.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Merchandise Campaigns */}
        <div className="mb-24">
          <h3 className="uppercase tracking-[0.2em] text-xl mb-8">
            Merchandise Campaigns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {merchCampaigns.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Brand Identity */}
        <div className="mb-24">
          <h3 className="uppercase tracking-[0.2em] text-xl mb-8">
            Brand Identity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandIdentity.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Brand Collaborators */}
        <div>
          <h3 className="uppercase tracking-[0.2em] text-xl mb-6 text-center">
            Brands We've Worked With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center py-4">
            {collaborators.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.15, color: "#FF4500" }}
                className="flex items-center justify-center"
              >
                <span
                  className="uppercase tracking-wider text-black/70 hover:text-[#FF4500] transition-colors cursor-default text-center"
                  style={{ fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.1em" }}
                >
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-black/10 text-center">
            <p className="uppercase tracking-[0.2em] text-sm text-black/50">
              + 50 More Global Brands
            </p>
          </div>
        </div>
      </div>

      <VideoPopup
        isOpen={videoPopup.isOpen}
        onClose={() => setVideoPopup({ ...videoPopup, isOpen: false })}
        videoUrl={videoPopup.url}
        title={videoPopup.title}
      />
    </section>
  );
}

function ProjectCard({ project, index }: any) {
  return (
    <Link to={`/case-study/${project.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden bg-black cursor-pointer"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[#FF4500] uppercase text-xs tracking-[0.2em] mb-2">
            {project.brand}
          </span>
          <h4 className="text-white uppercase tracking-wider mb-2" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            {project.title}
          </h4>
          <p className="text-white/70 text-sm uppercase tracking-wider">
            {project.description}
          </p>
        </div>

        {/* View Case Study Indicator */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#FF4500] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white text-xs">→</span>
        </motion.div>
      </motion.div>
    </Link>
  );
}