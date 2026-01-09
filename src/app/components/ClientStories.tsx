import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ClientStories() {
  const clients = [
    {
      logo: "https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MXx8fHwxNzY2NzQ0MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      brandName: "Nike",
      role: "Global Marketing Director",
      quote: "Minerva doesn't just execute. They think. They challenge. They deliver cultural moments that actually matter.",
      result: "15M+ impressions, sold-out drop",
    },
    {
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwxfHx8fDE3NjY3NDQyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      brandName: "Spotify",
      role: "Head of Brand Partnerships",
      quote: "Working with Minerva felt like working with artists, not vendors. They understand culture at a molecular level.",
      result: "Record-breaking campaign engagement",
    },
    {
      logo: "https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MXx8fHwxNzY2NzQ0MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      brandName: "Supreme",
      role: "Creative Lead",
      quote: "Finally, an agency that gets it. No corporate BS. Just bold ideas and flawless execution.",
      result: "3 consecutive sold-out collaborations",
    },
    {
      logo: "https://images.unsplash.com/photo-1605898643907-844c2bfc764e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbG9nb3xlbnwxfHx8fDE3NjY3NDQyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      brandName: "Apple",
      role: "Director of Creative Strategy",
      quote: "Minerva brought our vision to life with precision and creativity. They exceeded every expectation.",
      result: "300% increase in brand awareness",
    },
    {
      logo: "https://images.unsplash.com/photo-1573879500655-98f2012dd1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmR8ZW58MXx8fHwxNzY2NzQ0MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      brandName: "Balenciaga",
      role: "Marketing VP",
      quote: "They don't just follow trends—they create movements. Our collaboration was transformative.",
      result: "Viral campaign with 50M+ reach",
    },
    {
      logo: "https://images.unsplash.com/photo-1590337363833-86fe08393e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZHxlbnwxfHx8fDE3NjY2ODU4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      brandName: "Tesla",
      role: "Brand Manager",
      quote: "Minerva redefined what a creative agency can be. Innovative, fast, and culturally ahead.",
      result: "Award-winning product launch",
    },
    {
      logo: "https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MXx8fHwxNzY2NzQ0MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      brandName: "Adidas",
      role: "Chief Creative Officer",
      quote: "They brought energy, insight, and a level of execution we haven't seen anywhere else.",
      result: "Best-performing campaign of the year",
    },
    {
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3xlbnwxfHx8fDE3NjY3NDQyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      brandName: "Prada",
      role: "Global Head of Digital",
      quote: "Working with Minerva was like unlocking a new level of creative potential for our brand.",
      result: "Digital-first strategy that doubled engagement",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "20%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <section id="clients" className="relative py-20 sm:py-32 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-20 text-center">
          <span className="text-[#FF4500] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 block">
            Client Stories
          </span>
          <h2
            className="text-white uppercase tracking-tight px-4"
            style={{
              fontSize: "clamp(1.75rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Proof, Not
            <br />
            <span className="text-[#FF4500]">Promises</span>
          </h2>
        </div>

        <div className="relative px-0 sm:px-12 lg:px-16">
          <Slider {...settings} className="client-slider">
            {clients.map((client, index) => (
              <div key={index} className="px-3 sm:px-4">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 lg:p-10 hover:border-[#FF4500]/50 transition-all mx-auto"
                  style={{ maxWidth: "600px" }}
                >
                  {/* Quote Icon */}
                  <div className="mb-5 sm:mb-6">
                    <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF4500]" strokeWidth={1.5} />
                  </div>

                  {/* Quote */}
                  <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed italic text-base sm:text-lg">
                    "{client.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="mb-5 sm:mb-6">
                    <div className="mb-4 h-12 sm:h-14 flex items-center">
                      <img
                        src={client.logo}
                        alt={client.brandName}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <p className="text-white/60 text-sm sm:text-base uppercase tracking-wider">
                      {client.role}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="pt-4 sm:pt-5 border-t border-white/10">
                    <span className="text-[#FF4500] uppercase text-xs sm:text-sm tracking-[0.2em] block mb-2">
                      Result
                    </span>
                    <p className="text-white/80 text-sm sm:text-base font-medium">
                      {client.result}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 sm:mt-20 text-center">
          <p
            className="text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] max-w-3xl mx-auto px-6"
            style={{ fontSize: "clamp(0.875rem, 2vw, 1.5rem)", fontWeight: 700, lineHeight: 1.4 }}
          >
            Trusted by brands that don't play safe.
            <br />
            <span className="text-[#FF4500]">Join them.</span>
          </p>
        </div>
      </div>

      <style>{`
        .client-slider .slick-slide > div {
          display: flex;
          justify-content: center;
        }

        .client-slider .slick-dots {
          bottom: -50px;
        }
        
        .client-slider .slick-dots li {
          margin: 0 5px;
        }

        .client-slider .slick-dots li button:before {
          color: #FF4500;
          opacity: 0.3;
          font-size: 10px;
        }
        
        .client-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #FF4500;
          font-size: 12px;
        }

        /* Custom Arrow Styles */
        .client-slider .slick-prev,
        .client-slider .slick-next {
          z-index: 10;
          width: 50px;
          height: 50px;
          background: rgba(255, 69, 0, 0.1);
          border: 2px solid rgba(255, 69, 0, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .client-slider .slick-prev:hover,
        .client-slider .slick-next:hover {
          background: rgba(255, 69, 0, 0.2);
          border-color: #FF4500;
          transform: scale(1.1);
        }

        .client-slider .slick-prev {
          left: 0;
        }

        .client-slider .slick-next {
          right: 0;
        }

        .client-slider .slick-prev:before,
        .client-slider .slick-next:before {
          color: #FF4500;
          font-size: 24px;
          opacity: 1;
          line-height: 1;
        }

        /* Desktop - arrows outside */
        @media (min-width: 1024px) {
          .client-slider .slick-prev {
            left: -60px;
          }
          
          .client-slider .slick-next {
            right: -60px;
          }

          .client-slider .slick-prev,
          .client-slider .slick-next {
            width: 55px;
            height: 55px;
          }

          .client-slider .slick-prev:before,
          .client-slider .slick-next:before {
            font-size: 26px;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1023px) {
          .client-slider .slick-prev {
            left: -45px;
          }
          
          .client-slider .slick-next {
            right: -45px;
          }
        }

        /* Mobile - arrows inside */
        @media (max-width: 640px) {
          .client-slider .slick-dots {
            bottom: -45px;
          }

          .client-slider .slick-dots li {
            margin: 0 4px;
          }

          .client-slider .slick-dots li button:before {
            font-size: 8px;
          }

          .client-slider .slick-dots li.slick-active button:before {
            font-size: 10px;
          }

          .client-slider .slick-prev,
          .client-slider .slick-next {
            width: 45px;
            height: 45px;
          }

          .client-slider .slick-prev {
            left: 10px;
          }
          
          .client-slider .slick-next {
            right: 10px;
          }

          .client-slider .slick-prev:before,
          .client-slider .slick-next:before {
            font-size: 20px;
          }
        }

        /* Very small phones */
        @media (max-width: 380px) {
          .client-slider .slick-prev,
          .client-slider .slick-next {
            width: 40px;
            height: 40px;
          }

          .client-slider .slick-prev {
            left: 5px;
          }
          
          .client-slider .slick-next {
            right: 5px;
          }

          .client-slider .slick-prev:before,
          .client-slider .slick-next:before {
            font-size: 18px;
          }
        }

        /* Smooth slide transitions */
        .client-slider .slick-slide {
          opacity: 0.4;
          transform: scale(0.9);
          transition: all 0.5s ease;
        }

        .client-slider .slick-slide.slick-active {
          opacity: 1;
          transform: scale(1);
        }

        .client-slider .slick-slide.slick-center {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}