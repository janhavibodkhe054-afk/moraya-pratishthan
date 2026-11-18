
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const HERO_IMAGE = "/52.webp";

export default function CoursesHero() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमचे अभ्यासक्रम",
        heading1: "योग्य कौशल्यांची सुरुवात,",
        heading2: "उज्ज्वल भविष्याची वाटचाल.",
        description:
          "आरोग्यसेवा क्षेत्रातील करिअरसाठी आवश्यक ज्ञान, व्यावहारिक प्रशिक्षण आणि कौशल्य विकासाची संधी देणारे आमचे पॅरामेडिकल अभ्यासक्रम जाणून घ्या.",
        button: "सर्व अभ्यासक्रम पाहा",
      }
    : {
        eyebrow: "OUR COURSES",
        heading1: "Learn the Skills.",
        heading2: "Build Your Future.",
        description:
          "Explore our paramedical programs focused on practical training, essential healthcare skills and career-focused learning.",
        button: "Explore All Courses",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  const scrollToCourses = () => {
    document.getElementById("all-courses")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="courses-hero"
      className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#17392E] py-12 text-white sm:min-h-[320px] lg:min-h-[340px]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </div>

      {/* DARK GREEN OVERLAY */}
      <div className="absolute inset-0 bg-[#102D24]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10291F]/95 via-[#17392E]/85 to-[#10291F]/90" />

      {/* DECORATIVE GLOW */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#EF4444]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-[260px] w-[260px] rounded-full bg-[#4F9C70]/10 blur-[80px]" />

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#EF4444] via-[#006B2E] to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-5 text-center sm:px-8">

        {/* EYEBROW */}
        <motion.div
          {...reveal(0)}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="h-[2px] w-7 bg-[#EF4444]" />

          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#D5F2DF]">
            {content.eyebrow}
          </span>

          <span className="h-[2px] w-7 bg-[#EF4444]" />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          {...reveal(0.1)}
          className="mx-auto max-w-[900px] text-[clamp(2rem,3.3vw,3.25rem)] font-extrabold leading-[1.2] tracking-[-0.035em]"
        >
          {content.heading1}{" "}
          <span className="text-[#FF8179]">
            {content.heading2}
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-4 max-w-[750px] text-[14px] leading-[1.8] text-[#E1EAE4] sm:text-[15px]"
        >
          {content.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          {...reveal(0.3)}
          className="mt-6 flex justify-center"
        >
          <button
            type="button"
            onClick={scrollToCourses}
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-6 py-3 text-[13px] font-bold text-[#17392E] shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F0F6F1]"
          >
            {content.button}

            <ArrowDownRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
