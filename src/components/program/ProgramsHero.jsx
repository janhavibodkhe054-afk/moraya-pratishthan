
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Leaf,
  ShieldCheck,
  ArrowDown,
  HeartHandshake,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const activities = [
  {
    Icon: GraduationCap,
    en: "Skill Development",
    mr: "कौशल्य विकास",
  },
  {
    Icon: HeartPulse,
    en: "Healthcare",
    mr: "आरोग्यसेवा",
  },
  {
    Icon: Leaf,
    en: "Environment",
    mr: "पर्यावरण",
  },
  {
    Icon: ShieldCheck,
    en: "Disaster Response",
    mr: "आपत्ती व्यवस्थापन",
  },
];

export default function ProgramsHero() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमचे कार्यक्रम आणि उपक्रम",
        heading1: "अर्थपूर्ण कृती.",
        heading2: "समाजात सकारात्मक परिवर्तन.",
        description:
          "कौशल्य विकास, आरोग्य जागृती, पर्यावरण संवर्धन आणि आपत्ती व्यवस्थापनाच्या माध्यमातून समाजाच्या गरजा पूर्ण करण्यासाठी आणि दीर्घकालीन प्रगतीच्या संधी निर्माण करण्यासाठी आमचे उपक्रम कार्यरत आहेत.",
        explore: "आमचे उपक्रम पाहा",
        visualLabel: "समाजासाठी आमचे कार्य",
      }
    : {
        eyebrow: "OUR PROGRAMS & ACTIVITIES",
        heading1: "Meaningful Action.",
        heading2: "Measurable Community Impact.",
        description:
          "From skill development and healthcare awareness to environmental sustainability and disaster response, our initiatives address essential community needs and create opportunities for long-term progress.",
        explore: "Explore Our Programs",
        visualLabel: "OUR FOCUS AREAS",
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

  return (
    <section
      id="programs-hero"
      className="relative isolate flex min-h-[370px] items-center overflow-hidden bg-[#F8FAF7] py-12 sm:min-h-[390px] lg:min-h-[410px]"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#F8FAF7] to-[#EDF5EE]" />

      <div className="pointer-events-none absolute -left-32 -top-32 h-[340px] w-[340px] rounded-full bg-[#DDEEE0]/60 blur-[95px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[350px] w-[350px] rounded-full bg-[#FBE8E6]/45 blur-[100px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-9 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:px-12">

        {/* LEFT CONTENT */}
        <div className="max-w-[730px]">
          <motion.div
            {...reveal(0)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </motion.div>

          {/* NORMAL-SIZE HEADING */}
          <motion.h1
            {...reveal(0.1)}
            className="text-[clamp(1.9rem,2.8vw,2.85rem)] font-extrabold leading-[1.25] tracking-[-0.035em] text-[#17392E]"
          >
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            {...reveal(0.2)}
            className="mt-5 max-w-[650px] text-[14px] leading-[1.85] text-[#66746B] sm:text-[15px]"
          >
            {content.description}
          </motion.p>

          {/* SCROLL LINK */}
          <motion.a
            {...reveal(0.3)}
            href="#programs-list"
            className="group mt-6 inline-flex items-center gap-3 text-[13px] font-bold text-[#006B2E] transition-colors hover:text-[#EF4444]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#CFE2D3] bg-white transition-colors group-hover:border-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white">
              <ArrowDown size={17} />
            </span>

            {content.explore}
          </motion.a>
        </div>

        {/* RIGHT SIDE - MINIMAL SOCIAL IMPACT VISUAL */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 25 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="relative hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-[22px] border border-[#DDE9DF] bg-white/85 p-6 shadow-[0_18px_55px_rgba(23,57,46,0.07)]">

            {/* VISUAL HEADER */}
            <div className="mb-5 flex items-center justify-between border-b border-[#E6EEE7] pb-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#006B2E]">
                {content.visualLabel}
              </span>

              <HeartHandshake
                size={22}
                strokeWidth={1.6}
                className="text-[#EF4444]"
              />
            </div>

            {/* 4 FOCUS AREAS */}
            <div className="grid grid-cols-2 gap-3">
              {activities.map((activity, index) => {
                const Icon = activity.Icon;

                return (
                  <motion.div
                    key={index}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 15 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.3 + index * 0.09,
                    }}
                    className="group flex min-h-[100px] flex-col justify-between rounded-xl bg-[#F4F8F4] p-4 transition-colors duration-300 hover:bg-[#E9F3EB]"
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.6}
                      className={
                        index % 2 === 0
                          ? "text-[#006B2E]"
                          : "text-[#EF4444]"
                      }
                    />

                    <span className="mt-3 text-[12px] font-bold leading-[1.4] text-[#17392E]">
                      {isMarathi ? activity.mr : activity.en}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-[#DCE7DE]" />
    </section>
  );
}
