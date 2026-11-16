
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Wrench,
  HeartPulse,
  BriefcaseBusiness,
  Compass,
  Lightbulb,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const activities = [
  {
    number: "01",
    Icon: Wrench,
    en: "Vocational Training",
    mr: "व्यावसायिक प्रशिक्षण",
  },
  {
    number: "02",
    Icon: HeartPulse,
    en: "Paramedical Education",
    mr: "पॅरामेडिकल शिक्षण",
  },
  {
    number: "03",
    Icon: BriefcaseBusiness,
    en: "Employability Training",
    mr: "रोजगाराभिमुख प्रशिक्षण",
  },
  {
    number: "04",
    Icon: Compass,
    en: "Career Guidance",
    mr: "करिअर मार्गदर्शन",
  },
  {
    number: "05",
    Icon: Lightbulb,
    en: "Entrepreneurship Awareness",
    mr: "उद्योजकता जागृती",
  },
];

export default function SkillDevelopment() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "कौशल्य विकास आणि उपजीविका",
        heading1: "रोजगारक्षम कौशल्यांतून",
        heading2: "व्यक्तींचे सक्षमीकरण.",
        paragraph1:
          "मोरया सामाजिक प्रतिष्ठान बेरोजगार युवक, महिला आणि वंचित घटकांना व्यावहारिक ज्ञान मिळवण्यासाठी आणि रोजगाराच्या संधी सुधारण्यासाठी कौशल्य विकास व व्यावसायिक शिक्षण उपलब्ध करून देते.",
        paragraph2:
          "आमच्या प्रशिक्षण उपक्रमांमध्ये तांत्रिक कौशल्य, व्यावसायिक विकास, करिअरची तयारी आणि रोजगार किंवा स्वयंरोजगाराच्या संधी निर्माण करण्यावर भर दिला जातो.",
        activities: "प्रमुख उपक्रम",
        note: "कौशल्यापासून करिअरच्या संधींपर्यंत",
      }
    : {
        eyebrow: "SKILL DEVELOPMENT & LIVELIHOODS",
        heading1: "Empowering Individuals",
        heading2: "Through Employable Skills.",
        paragraph1:
          "Morya Samajik Pratishthan provides skill development and vocational education to help unemployed youth, women and underserved individuals gain practical knowledge and improve their employment prospects.",
        paragraph2:
          "Our training initiatives focus on technical competency, professional development, career readiness and pathways toward employment or self-employment.",
        activities: "KEY ACTIVITIES",
        note: "From skills to career opportunities",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="skill-development"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E9F3EA]/55 blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20 lg:px-12">

        {/* LEFT CONTENT */}
        <div>
          <motion.div
            {...reveal()}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            {...reveal(0.1)}
            className="max-w-[650px] text-[clamp(1.9rem,2.8vw,2.85rem)] font-extrabold leading-[1.22] tracking-[-0.035em] text-[#17392E]"
          >
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h2>

          {/* CONTENT */}
          <motion.div
            {...reveal(0.2)}
            className="mt-6 max-w-[610px] space-y-4"
          >
            <p className="text-[14px] leading-[1.9] text-[#66746B] sm:text-[15px]">
              {content.paragraph1}
            </p>

            <p className="text-[14px] leading-[1.9] text-[#66746B] sm:text-[15px]">
              {content.paragraph2}
            </p>
          </motion.div>

          {/* BOTTOM HIGHLIGHT */}
          <motion.div
            {...reveal(0.3)}
            className="mt-8 flex items-center gap-4 border-t border-[#E4EBE5] pt-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF5ED] text-[#006B2E]">
              <GraduationCap size={23} strokeWidth={1.7} />
            </div>

            <span className="text-[13px] font-bold text-[#17392E]">
              {content.note}
            </span>

            <ArrowUpRight
              size={18}
              className="ml-auto text-[#EF4444]"
            />
          </motion.div>
        </div>

        {/* RIGHT - VERTICAL ACTIVITY TIMELINE */}
        <motion.div
          {...reveal(0.15)}
          className="relative"
        >
          {/* HEADING */}
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
              {content.activities}
            </span>

            <span className="text-[12px] font-bold text-[#8A9A8F]">
              01 — 05
            </span>
          </div>

          {/* TIMELINE */}
          <div className="relative ml-5 border-l border-[#D7E6DA]">
            {activities.map((activity, index) => {
              const Icon = activity.Icon;

              return (
                <motion.div
                  key={activity.number}
                  {...reveal(index * 0.08)}
                  className="group relative pb-7 pl-9 last:pb-0 sm:pb-8 sm:pl-11"
                >
                  {/* TIMELINE DOT */}
                  <div className="absolute -left-[20px] top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#D7E6DA] bg-white text-[#006B2E] shadow-[0_4px_12px_rgba(23,57,46,0.05)] transition-all duration-300 group-hover:border-[#006B2E] group-hover:bg-[#006B2E] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  {/* ACTIVITY TEXT */}
                  <div className="flex items-center gap-4 border-b border-[#E7EDE8] pb-6 transition-all duration-300 group-hover:translate-x-1 last:border-b-0">
                    <div className="min-w-0 flex-1">
                      <span className="mb-1 block text-[10px] font-extrabold tracking-[0.13em] text-[#EF4444]">
                        {activity.number}
                      </span>

                      <h3 className="text-[16px] font-extrabold leading-[1.4] text-[#17392E] sm:text-[18px]">
                        {isMarathi ? activity.mr : activity.en}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#9AAEA0] transition-colors duration-300 group-hover:text-[#EF4444]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
