
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const images = {
  main: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=85",
  secondary:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=85",
};

export default function SuccessStoriesHero() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "यशोगाथा",
        heading1: "प्रत्येक यशोगाथेची सुरुवात",
        heading2: "एका संधीपासून होते.",
        description:
          "योग्य प्रशिक्षण, मार्गदर्शन आणि संधी यांच्या माध्यमातून व्यक्तींच्या आयुष्यात घडणारे सकारात्मक बदल आणि त्यांच्या प्रेरणादायी यशोगाथा अनुभवा.",
        button: "यशोगाथा पाहा",
        floating: "Empowering Futures",
        imageLabel: "REAL PEOPLE. REAL PROGRESS.",
      }
    : {
        eyebrow: "SUCCESS STORIES",
        heading1: "Every Success Story",
        heading2: "Begins With an Opportunity.",
        description:
          "Behind every achievement is a journey of learning, determination and opportunity. Discover inspiring stories of individuals moving towards a brighter future.",
        button: "Explore Success Stories",
        floating: "Empowering Futures",
        imageLabel: "REAL PEOPLE. REAL PROGRESS.",
      };

  const reveal = (delay = 0, x = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18, x },
    animate: { opacity: 1, y: 0, x: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  const scrollToStories = () => {
    document.getElementById("success-stories-list")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="success-stories-hero"
      className="relative isolate overflow-hidden bg-[#F9FAF6]"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-32 -top-36 h-[400px] w-[400px] rounded-full bg-[#E8F2E8]/70 blur-[90px]" />

      <div className="pointer-events-none absolute -right-28 bottom-0 h-[360px] w-[360px] rounded-full bg-[#FBE9E6]/60 blur-[90px]" />

      <div className="relative mx-auto grid min-h-[440px] max-w-[1320px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:py-14">
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-[620px]">
          <motion.div
            {...reveal()}
            className="mb-5 flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E7F1E8] text-[#006B2E]">
              <Sparkles size={18} />
            </span>

            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
              {content.eyebrow}
            </span>

            <span className="h-[2px] w-7 bg-[#EF4444]" />
          </motion.div>

          {/* HEADING */}
          <motion.h1
            {...reveal(0.1)}
            className="text-[clamp(2rem,3.3vw,3.25rem)] font-extrabold leading-[1.16] tracking-[-0.04em] text-[#17392E]"
          >
            {content.heading1}
            <br />
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            {...reveal(0.2)}
            className="mt-5 max-w-[540px] text-[14px] leading-[1.85] text-[#66746B] sm:text-[15px]"
          >
            {content.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            {...reveal(0.3)}
            className="mt-7 flex flex-wrap items-center gap-5"
          >
            <button
              type="button"
              onClick={scrollToStories}
              className="group inline-flex items-center gap-3 rounded-full bg-[#17392E] px-6 py-3.5 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#006B2E]"
            >
              {content.button}

              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </button>

            <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#8B9B90]">
              <HeartHandshake
                size={16}
                className="text-[#EF4444]"
              />
              {content.imageLabel}
            </span>
          </motion.div>
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <motion.div
          {...reveal(0.15, 25)}
          className="relative mx-auto w-full max-w-[530px]"
        >
          <div className="relative h-[330px] sm:h-[390px]">
            {/* DECORATIVE BACK SHAPE */}
            <div
              className="absolute inset-y-4 left-[12%] right-[8%] bg-[#E0EDE2]"
              style={{
                borderRadius:
                  "28% 10% 28% 10% / 22% 12% 22% 12%",
                transform: "rotate(5deg)",
              }}
            />

            {/* MAIN IMAGE */}
            <div
              className="absolute inset-y-4 left-[12%] right-[8%] overflow-hidden border-[5px] border-white shadow-[0_22px_55px_rgba(23,57,46,0.14)]"
              style={{
                borderRadius:
                  "28% 10% 28% 10% / 22% 12% 22% 12%",
              }}
            >
              <img
                src={images.main}
                alt="Illustrative image of people celebrating together"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17392E]/25 to-transparent" />
            </div>

            {/* SECONDARY IMAGE */}
            <div className="absolute -bottom-2 left-0 h-[125px] w-[155px] -rotate-[6deg] overflow-hidden rounded-[22px] border-[5px] border-white bg-white shadow-[0_15px_35px_rgba(23,57,46,0.17)] sm:h-[155px] sm:w-[185px]">
              <img
                src={images.secondary}
                alt="Illustrative training and learning activity"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute right-0 top-[10%] flex items-center gap-2 rounded-full border border-[#DCE9DF] bg-white px-4 py-2.5 shadow-[0_8px_25px_rgba(23,57,46,0.1)]">
              <GraduationCap
                size={18}
                className="text-[#EF4444]"
              />

              <span className="text-[11px] font-extrabold text-[#17392E]">
                {content.floating}
              </span>

              <ArrowUpRight
                size={15}
                className="text-[#006B2E]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#EF4444] via-[#006B2E] to-transparent" />
    </section>
  );
}
