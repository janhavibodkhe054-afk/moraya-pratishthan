
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

export default function AboutCTA() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "चला, एकत्र परिवर्तन घडवूया",
        heading1: "सकारात्मक बदलाची",
        heading2: "सुरुवात एकत्र करूया.",
        description:
          "सामाजिक उपक्रम, सहकार्य किंवा अधिक माहितीसाठी आमच्याशी संपर्क साधा.",
        button: "आमच्याशी संपर्क साधा",
      }
    : {
        eyebrow: "LET'S MAKE A DIFFERENCE",
        heading1: "Together, We Can Create",
        heading2: "Meaningful Change.",
        description:
          "Connect with us to explore collaboration opportunities and create a lasting social impact.",
        button: "Get in Touch",
      };

  return (
    <section
      id="about-cta"
      className="relative isolate overflow-hidden bg-[#F5F8F4] py-12 sm:py-14 lg:py-16"
    >
      {/* SOFT BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#DCECE0]/60 blur-[65px]" />

      <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#FCE7E7]/60 blur-[65px]" />

      {/* DECORATIVE CIRCLES */}
      <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full border border-[#17392E]/10 lg:block" />

      <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-44 w-44 -translate-y-1/2 rounded-full border border-[#17392E]/10 lg:block" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-[850px] text-center">

          {/* EYEBROW */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-7 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#006B2E]">
              {content.eyebrow}
            </span>

            <span className="h-[2px] w-7 bg-[#EF4444]" />
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={
              reduceMotion ? false : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.9rem,3vw,3rem)] font-black leading-[1.2] tracking-[-0.035em] text-[#17392E]"
          >
            {content.heading1}{" "}

            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={
              reduceMotion ? false : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-[610px] text-[14px] leading-[1.8] text-[#66746B] sm:text-[15px]"
          >
            {content.description}
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 15 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#EF4444] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_25px_rgba(239,68,68,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DC2626]"
            >
              {content.button}

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
