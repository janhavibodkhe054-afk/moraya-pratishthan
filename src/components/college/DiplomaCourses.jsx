
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Droplets,
  Microscope,
  Activity,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const diplomaCourses = [
  {
    number: "01",
    Icon: Droplets,
    en: "Diploma in Dialysis Technology",
    mr: "डायलिसिस टेक्नॉलॉजी डिप्लोमा",
  },
  {
    number: "02",
    Icon: Microscope,
    en: "Diploma in Medical Lab Technology",
    mr: "मेडिकल लॅब टेक्नॉलॉजी डिप्लोमा",
  },
  {
    number: "03",
    Icon: Activity,
    en: "Diploma in Physiotherapy",
    mr: "फिजिओथेरपी डिप्लोमा",
  },
];

export default function DiplomaCourses() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "उच्च कौशल्य शिक्षण",
        heading1: "विशेष डिप्लोमा",
        heading2: "अभ्यासक्रम.",
        description:
          "आरोग्यसेवेतील निवडक क्षेत्रांसाठी आवश्यक व्यावहारिक ज्ञान आणि व्यावसायिक कौशल्ये विकसित करण्यावर आमच्या डिप्लोमा अभ्यासक्रमांचा भर आहे.",
        label: "डिप्लोमा अभ्यासक्रम",
        note: "03 विशेष डिप्लोमा अभ्यासक्रम",
      }
    : {
        eyebrow: "ADVANCED SKILL EDUCATION",
        heading1: "Specialized",
        heading2: "Diploma Programs.",
        description:
          "Our diploma programs focus on developing practical knowledge and professional competencies relevant to selected healthcare disciplines.",
        label: "DIPLOMA COURSE",
        note: "03 Specialized Diploma Programs",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="diploma-courses"
      className="relative isolate overflow-hidden bg-[#F8FAF7] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#E5F1E7]/60 blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">

        {/* LEFT - EDITORIAL HEADING */}
        <motion.div
          {...reveal(0)}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </div>

          <h2 className="max-w-[520px] text-[clamp(2.2rem,3.3vw,3.65rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#17392E]">
            {content.heading1}

            <span className="mt-1 block text-[#EF4444]">
              {content.heading2}
            </span>
          </h2>

          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.9] text-[#66746B]">
            {content.description}
          </p>

          {/* PROGRAM COUNT */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7F2E9] text-[#006B2E]">
              <GraduationCap size={20} />
            </div>

            <span className="text-[13px] font-bold text-[#17392E]">
              {content.note}
            </span>
          </div>
        </motion.div>

        {/* RIGHT - CLEAN COURSE ROWS */}
        <div className="border-t border-[#DCE6DE]">
          {diplomaCourses.map((course, index) => {
            const Icon = course.Icon;

            return (
              <motion.div
                key={course.number}
                {...reveal(index * 0.12)}
                className="group relative border-b border-[#DCE6DE]"
              >
                <div className="relative flex items-center gap-5 py-8 transition-all duration-500 group-hover:pl-4 sm:gap-7 sm:py-10">

                  {/* HOVER BACKGROUND */}
                  <div className="absolute inset-0 -z-10 bg-[#EAF4EC] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* NUMBER */}
                  <span className="w-[55px] shrink-0 text-[42px] font-black leading-none tracking-[-0.07em] text-[#17392E]/15 transition-colors duration-300 group-hover:text-[#EF4444]/40 sm:w-[70px] sm:text-[52px]">
                    {course.number}
                  </span>

                  {/* COURSE CONTENT */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-2 text-[#006B2E]">
                      <Icon size={16} strokeWidth={1.8} />

                      <span className="text-[10px] font-extrabold uppercase tracking-[0.13em]">
                        {content.label}
                      </span>
                    </div>

                    <h3 className="text-[19px] font-extrabold leading-[1.4] tracking-[-0.025em] text-[#17392E] sm:text-[23px]">
                      {isMarathi ? course.mr : course.en}
                    </h3>
                  </div>

                  {/* DECORATIVE ARROW */}
                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCE7DE] text-[#006B2E] transition-all duration-300 group-hover:border-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white sm:flex">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* ANIMATED BOTTOM ACCENT */}
                <div className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#EF4444] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
