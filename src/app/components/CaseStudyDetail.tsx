import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getCaseStudyBySlug, getRelatedCaseStudies } from "../data/caseStudiesData";
import { useEffect } from "react";

export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;
  const relatedCaseStudies = slug ? getRelatedCaseStudies(slug, 3) : [];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase mb-4">Case Study Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#FF4500] uppercase tracking-wider text-sm hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          to="/#work"
          className="flex items-center gap-2 text-black uppercase tracking-wider text-sm hover:text-[#FF4500] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Work</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-[#FF4500] uppercase tracking-[0.3em] text-sm block mb-4">
                {caseStudy.brand}
              </span>
              <h1
                className="text-white uppercase tracking-tight mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 6rem)",
                  fontWeight: 900,
                  lineHeight: 0.9,
                }}
              >
                {caseStudy.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {caseStudy.services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white uppercase text-xs tracking-wider border border-white/20"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-[#FF4500] mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
                >
                  {stat.value}
                </div>
                <div className="text-white/60 uppercase tracking-wider text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="uppercase tracking-[0.2em] text-sm text-[#FF4500] mb-6">
              The Challenge
            </h2>
            <p
              className="text-black leading-relaxed"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 500 }}
            >
              {caseStudy.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="uppercase tracking-[0.2em] text-sm text-[#FF4500] mb-6">
              Our Solution
            </h2>
            <p
              className="leading-relaxed"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 500 }}
            >
              {caseStudy.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      {caseStudy.images && caseStudy.images.length > 0 && (
        <section className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {caseStudy.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="aspect-[4/3] overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="uppercase tracking-[0.2em] text-sm text-[#FF4500] mb-8">
              The Results
            </h2>
            <ul className="space-y-4">
              {caseStudy.results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 text-lg"
                >
                  <span className="text-[#FF4500] mt-1" style={{ fontWeight: 900 }}>
                    ●
                  </span>
                  <span>{result}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="text-[#FF4500] mb-8" style={{ fontSize: "4rem", lineHeight: 1 }}>
                "
              </div>
              <p
                className="mb-8 leading-relaxed"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 500 }}
              >
                {caseStudy.testimonial.quote}
              </p>
              <div>
                <p className="uppercase tracking-wider" style={{ fontWeight: 700 }}>
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider mt-1">
                  {caseStudy.testimonial.position}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="uppercase tracking-[0.2em] text-xl mb-12">More Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCaseStudies.map((related, index) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/case-study/${related.slug}`} className="group block">
                    <div className="aspect-[4/3] overflow-hidden bg-black mb-4">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[#FF4500] uppercase text-xs tracking-wider block mb-2">
                      {related.brand}
                    </span>
                    <h3 className="uppercase tracking-wider mb-2 group-hover:text-[#FF4500] transition-colors" style={{ fontWeight: 700 }}>
                      {related.title}
                    </h3>
                    <p className="text-sm text-black/60 uppercase tracking-wider">
                      {related.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="uppercase tracking-tight mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              Ready to Create
              <br />
              Your Own Success Story?
            </h2>
            <Link
              to="/#contact"
              className="inline-block px-12 py-5 bg-[#FF4500] text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontWeight: 700 }}
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
