
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Wallet,
  Laptop,
  UsersRound,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const focusAreas = [
  {
    number: "01",
    Icon: GraduationCap,
    en: "Vocational Training",
    mr: "व्यावसायिक प्रशिक्षण",
  },
  {
    number: "02",
    Icon: BriefcaseBusiness,
    en: "Livelihood Guidance",
    mr: "उपजीविका मार्गदर्शन",
  },
  {
    number: "03",
    Icon: Laptop,
    en: "Digital Literacy",
    mr: "डिजिटल साक्षरता",
  },
  {
    number: "04",
    Icon: Wallet,
    en: "Financial Literacy",
    mr: "आर्थिक साक्षरता",
  },
  {
    number: "05",
    Icon: UsersRound,
    en: "Mentorship & Awareness",
    mr: "मार्गदर्शन आणि जनजागृती",
  },
];

export default function WomenEmpowerment() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "महिला सक्षमीकरण आणि समुदाय विकास",
        heading1: "स्वावलंबन आणि सन्मानासाठी",
        heading2: "नवीन संधी.",
        paragraph1:
          "महिलांच्या सक्षमीकरणासाठी आणि कुटुंबांच्या प्रगतीसाठी शिक्षण, कौशल्ये आणि आर्थिक संधी उपलब्ध होणे अत्यंत महत्त्वाचे आहे, असा आमचा विश्वास आहे.",
        paragraph2:
          "आमच्या समुदाय विकास उपक्रमांमध्ये व्यावसायिक प्रशिक्षण, उपजीविका मार्गदर्शन, डिजिटल आणि आर्थिक साक्षरता, मार्गदर्शन व जनजागृती उपक्रमांचा समावेश आहे. या माध्यमातून आत्मविश्वास, रोजगारक्षमता आणि स्वावलंबनाला प्रोत्साहन दिले जाते.",
        focus: "सक्षमीकरणाचे प्रमुख क्षेत्र",
        message: "कौशल्य, आत्मविश्वास आणि स्वावलंबन",
        bottom: "महिलांच्या प्रगतीतून सक्षम समुदाय",
      }
    : {
        eyebrow: "WOMEN EMPOWERMENT & COMMUNITY DEVELOPMENT",
        heading1: "Creating Opportunities for",
        heading2: "Independence and Dignity.",
        paragraph1:
          "We believe that access to education, skills and economic opportunities plays a vital role in empowering women and strengthening families.",
        paragraph2:
          "Our community development initiatives include vocational training, livelihood guidance, digital and financial literacy, mentorship and awareness activities designed to encourage confidence, employability and self-reliance.",
        focus: "OUR EMPOWERMENT FOCUS",
        message: "Skills, Confidence & Self-Reliance",
        bottom: "Empowered Women. Stronger Communities.",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
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
      id="women-empowerment"
      className="relative isolate overflow-hidden bg-[#FAF8FB] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[440px] w-[440px] rounded-full bg-[#F0E7F3]/65 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-[#FCE8E9]/40 blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12">

        {/* LEFT CONTENT */}
        <div>
          <motion.div
            {...reveal()}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            {...reveal(0.1)}
            className="max-w-[660px] text-[clamp(1.9rem,2.8vw,2.85rem)] font-extrabold leading-[1.22] tracking-[-0.035em] text-[#17392E]"
          >
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.div
            {...reveal(0.2)}
            className="mt-6 max-w-[630px] space-y-4"
          >
            <p className="text-[14px] leading-[1.9] text-[#66746B] sm:text-[15px]">
              {content.paragraph1}
            </p>

            <p className="text-[14px] leading-[1.9] text-[#66746B] sm:text-[15px]">
              {content.paragraph2}
            </p>
          </motion.div>

          {/* MESSAGE STRIP */}
          <motion.div
            {...reveal(0.3)}
            className="mt-8 flex items-center gap-4 border-l-[3px] border-[#EF4444] bg-white/80 px-5 py-4 shadow-[0_8px_25px_rgba(23,57,46,0.04)]"
          >
            <HeartHandshake
              size={25}
              strokeWidth={1.6}
              className="shrink-0 text-[#006B2E]"
            />

            <p className="text-[13px] font-extrabold leading-[1.5] text-[#17392E] sm:text-[14px]">
              {content.message}
            </p>
          </motion.div>
        </div>

        {/* RIGHT - EDITORIAL FOCUS AREAS */}
        <motion.div
          {...reveal(0.15)}
          className="relative"
        >
          {/* TOP LABEL */}
          <div className="mb-5 flex items-center justify-between border-b border-[#E3DDE6] pb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#006B2E]">
              {content.focus}
            </span>

            <Sparkles
              size={20}
              strokeWidth={1.6}
              className="text-[#EF4444]"
            />
          </div>

          {/* FOCUS LIST */}
          <div className="space-y-1">
            {focusAreas.map((area, index) => {
              const Icon = area.Icon;

              return (
                <motion.div
                  key={area.number}
                  {...reveal(index * 0.06)}
                  className="group flex items-center gap-4 border-b border-[#E7E1E9] py-4 transition-all duration-300 hover:pl-2"
                >
                  {/* NUMBER */}
                  <span className="w-7 shrink-0 text-[11px] font-extrabold tracking-[0.08em] text-[#EF4444]">
                    {area.number}
                  </span>

                  {/* ICON */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#006B2E] shadow-[0_4px_15px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:bg-[#006B2E] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  {/* TITLE */}
                  <h3 className="min-w-0 flex-1 text-[14px] font-extrabold leading-[1.45] text-[#17392E] sm:text-[16px]">
                    {isMarathi ? area.mr : area.en}
                  </h3>

                  <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#D8B8C6] transition-colors duration-300 group-hover:bg-[#EF4444]" />
                </motion.div>
              );
            })}
          </div>

          {/* BOTTOM TEXT */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-8 bg-[#EF4444]" />

            <span className="text-[12px] font-bold text-[#68796C]">
              {content.bottom}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
