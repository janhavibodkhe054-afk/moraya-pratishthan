
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
  Cross,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

export default function CollegesHero() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमची महाविद्यालये",
        heading1: "कौशल्याधारित शिक्षण.",
        heading2: "उज्ज्वल करिअरची सुरुवात.",
        description:
          "पॅरामेडिकल आणि व्यावसायिक शिक्षणातून करिअरच्या नव्या संधी.",
        explore: "अभ्यासक्रम पाहा",
        apply: "आता अर्ज करा",
      }
    : {
        eyebrow: "OUR COLLEGES",
        heading1: "Skill-Based Education.",
        heading2: "Career-Ready Professionals.",
        description:
          "Practical paramedical and vocational education for career-focused learning.",
        explore: "Explore Courses",
        apply: "Apply Now",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="colleges-hero"
      className="relative isolate flex min-h-[365px] items-center overflow-hidden bg-[#F7FAF6] py-12 sm:min-h-[380px] lg:min-h-[395px] lg:py-14"
    >
      {/* LIGHT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F8FBF7] via-white to-[#EDF5ED]" />

      {/* SOFT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-24 -top-28 h-[350px] w-[350px] rounded-full bg-[#DDEFE1]/70 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-32 right-0 h-[350px] w-[350px] rounded-full bg-[#FBE6E5]/50 blur-[90px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-12">

        {/* LEFT CONTENT */}
        <div className="max-w-[800px]">

          {/* EYEBROW */}
          <motion.div
            {...reveal(0)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            {...reveal(0.1)}
            className="text-[clamp(2.1rem,3.7vw,3.7rem)] font-black leading-[1.13] tracking-[-0.045em] text-[#17392E]"
          >
            {content.heading1}

            <span className="mt-1 block text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            {...reveal(0.2)}
            className="mt-4 max-w-[610px] text-[15px] leading-[1.8] text-[#66746B] sm:text-[16px]"
          >
            {content.description}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            {...reveal(0.3)}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/programs"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#EF4444] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_10px_25px_rgba(239,68,68,0.17)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DC2626]"
            >
              {content.explore}

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#D5E2D7] bg-white px-7 py-3.5 text-[14px] font-bold text-[#17392E] transition-all duration-300 hover:-translate-y-1 hover:border-[#006B2E] hover:shadow-md"
            >
              {content.apply}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE - ANIMATED MEDICAL VISUAL */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.88, x: 35 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden h-[300px] items-center justify-center lg:flex"
        >
          {/* SOFT CIRCULAR BACKGROUND */}
          <div className="absolute h-[290px] w-[290px] rounded-full bg-gradient-to-br from-[#E4F2E7] via-[#F1F8F1] to-white" />

          {/* OUTER ROTATING RING */}
          <motion.div
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-[#006B2E]/25"
          />

          {/* INNER ROTATING RING */}
          <motion.div
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[220px] w-[220px] rounded-full border border-[#006B2E]/15"
          />

          {/* MAIN MEDICAL PLUS CIRCLE */}
          <motion.div
            animate={
              reduceMotion ? undefined : { y: [0, -8, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-[165px] w-[165px] items-center justify-center rounded-full border border-[#D6E8D9] bg-white shadow-[0_20px_60px_rgba(23,57,46,0.1)]"
          >
            <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#EAF5ED]">
              <Cross
                size={64}
                strokeWidth={2.8}
                className="text-[#006B2E]"
              />
            </div>
          </motion.div>

          {/* FLOATING BOOK ICON */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -10, 0], rotate: [0, -5, 0] }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-5 top-9 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E2EBE3] bg-white text-[#EF4444] shadow-[0_10px_30px_rgba(23,57,46,0.09)]"
          >
            <BookOpen size={25} strokeWidth={1.7} />
          </motion.div>

          {/* FLOATING AWARD ICON */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, 10, 0], rotate: [0, 5, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-9 right-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E2EBE3] bg-white text-[#006B2E] shadow-[0_10px_30px_rgba(23,57,46,0.09)]"
          >
            <Award size={25} strokeWidth={1.7} />
          </motion.div>

          {/* FLOATING SPARKLE */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.35, 1, 0.35],
                    scale: [0.8, 1.1, 0.8],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-8 top-9 text-[#EF4444]"
          >
            <Sparkles size={22} />
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#DCE7DE]">
        <motion.div
          initial={reduceMotion ? false : { width: 0 }}
          animate={{ width: "26%" }}
          transition={{ duration: 1.3, delay: 0.3 }}
          className="h-full bg-[#EF4444]"
        />
      </div>
    </section>
  );
}
