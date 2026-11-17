
import React from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  MessagesSquare,
  BookOpenCheck,
  ClipboardCheck,
  Award,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "OUR IMPLEMENTATION METHODOLOGY",
    heading1: "A Structured Journey",
    heading2: "From Training to Opportunity.",
    description:
      "Six connected stages that guide beneficiaries from community outreach to skills, certification and employment support.",
    footer: "From Potential to Possibility",

    steps: [
      {
        number: "01",
        title: "Mobilization",
        description:
          "Identify and reach eligible unemployed youth and community beneficiaries.",
        Icon: UsersRound,
      },
      {
        number: "02",
        title: "Counselling",
        description:
          "Understand educational backgrounds, interests and training needs through counselling and orientation.",
        Icon: MessagesSquare,
      },
      {
        number: "03",
        title: "Skilling",
        description:
          "Deliver structured learning with a practical-oriented approach, using the stated 70% practical and 30% theory model where applicable.",
        Icon: BookOpenCheck,
      },
      {
        number: "04",
        title: "Assessment",
        description:
          "Evaluate learning through appropriate theoretical and practical assessments.",
        Icon: ClipboardCheck,
      },
      {
        number: "05",
        title: "Certification",
        description:
          "Provide applicable certification to candidates who successfully complete program requirements.",
        Icon: Award,
      },
      {
        number: "06",
        title: "Placement Support",
        description:
          "Assist eligible candidates with employment opportunities, interviews and career guidance.",
        Icon: BriefcaseBusiness,
      },
    ],
  },

  mr: {
    eyebrow: "आमची अंमलबजावणी पद्धत",
    heading1: "प्रशिक्षणापासून संधीपर्यंतचा",
    heading2: "नियोजनबद्ध प्रवास.",
    description:
      "समाजातील लाभार्थ्यांपर्यंत पोहोचण्यापासून प्रशिक्षण, प्रमाणपत्र आणि रोजगार सहाय्यापर्यंत सहा टप्प्यांची प्रक्रिया.",
    footer: "क्षमतेपासून संधीपर्यंत",

    steps: [
      {
        number: "01",
        title: "लाभार्थी संपर्क",
        description:
          "पात्र बेरोजगार युवक आणि समाजातील लाभार्थ्यांपर्यंत पोहोचून त्यांची ओळख करणे.",
        Icon: UsersRound,
      },
      {
        number: "02",
        title: "समुपदेशन",
        description:
          "समुपदेशन आणि मार्गदर्शनाद्वारे शैक्षणिक पार्श्वभूमी, आवडी आणि प्रशिक्षणाच्या गरजा समजून घेणे.",
        Icon: MessagesSquare,
      },
      {
        number: "03",
        title: "कौशल्य प्रशिक्षण",
        description:
          "लागू असेल तेथे ७०% प्रात्यक्षिक आणि ३०% सैद्धांतिक पद्धतीनुसार नियोजनबद्ध प्रशिक्षण देणे.",
        Icon: BookOpenCheck,
      },
      {
        number: "04",
        title: "मूल्यमापन",
        description:
          "योग्य सैद्धांतिक आणि प्रात्यक्षिक परीक्षांद्वारे शिकण्याचे मूल्यमापन करणे.",
        Icon: ClipboardCheck,
      },
      {
        number: "05",
        title: "प्रमाणपत्र",
        description:
          "कार्यक्रमाच्या सर्व अटी यशस्वीपणे पूर्ण करणाऱ्या उमेदवारांना लागू प्रमाणपत्र प्रदान करणे.",
        Icon: Award,
      },
      {
        number: "06",
        title: "रोजगार सहाय्य",
        description:
          "पात्र उमेदवारांना रोजगाराच्या संधी, मुलाखती आणि करिअर मार्गदर्शनासाठी सहाय्य करणे.",
        Icon: BriefcaseBusiness,
      },
    ],
  },
};

// ==========================================
// ANIMATIONS
// ==========================================

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ==========================================
// CSR METHODOLOGY
// ==========================================

export default function CSRMethodology() {
  const { language } = useLanguage();
  const t = content[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="csr-methodology"
      className="relative isolate overflow-hidden bg-[#14372B] py-14 sm:py-16 lg:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(12, 39, 29, 0.90), rgba(12, 39, 29, 0.93)), url('/hero.webp')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[#1F5B43]/40 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#276448]/25 blur-[110px]" />

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-14">

        {/* SECTION HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-10 max-w-[820px] text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#EF6666]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FFB1A8] sm:text-[12px]">
              {t.eyebrow}
            </span>

            <span className="h-[2px] w-8 bg-[#EF6666]" />
          </div>

          <h2 className="text-[33px] font-black leading-[1.16] tracking-tight text-white sm:text-[43px] lg:text-[49px]">
            {t.heading1}
            <br />
            <span className="text-[#FFB1A8]">
              {t.heading2}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[660px] text-[14px] leading-[1.8] text-white/70 sm:text-[16px]">
            {t.description}
          </p>
        </motion.div>

        {/* ZIG-ZAG PROCESS JOURNEY */}

        <div className="relative">

          {/* CENTER VERTICAL LINE - DESKTOP */}
          <div className="pointer-events-none absolute bottom-10 left-1/2 top-8 hidden w-[2px] -translate-x-1/2 bg-white/20 lg:block" />

          {/* MOBILE VERTICAL LINE */}
          <div className="pointer-events-none absolute bottom-8 left-[24px] top-8 w-[2px] bg-white/20 lg:hidden" />

          {/* REDUCED CARD SPACING */}
          <div className="space-y-4 lg:space-y-3">
            {t.steps.map((step, index) => {
              const Icon = step.Icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${language}-${step.number}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                  }}
                  className="relative grid items-center gap-4 pl-[65px] lg:grid-cols-[1fr_76px_1fr] lg:gap-0 lg:pl-0"
                >
                  {/* MOBILE NUMBER NODE */}
                  <div className="absolute left-0 top-6 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full border-[5px] border-[#14372B] bg-[#EF6666] text-[13px] font-black text-white lg:hidden">
                    {step.number}
                  </div>

                  {/* LEFT SIDE */}
                  <div className={isLeft ? "lg:pr-6" : "hidden lg:block"}>
                    {isLeft && (
                      <div className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-7">

                        <span className="pointer-events-none absolute -right-2 -top-5 text-[100px] font-black leading-none text-[#F0F4F0]">
                          {step.number}
                        </span>

                        <div className="relative flex items-start gap-4">
                          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#176A3A] transition-colors duration-300 group-hover:bg-[#14372B] group-hover:text-white">
                            <Icon size={24} strokeWidth={1.8} />
                          </div>

                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EF6666]">
                              STEP {step.number}
                            </span>

                            <h3 className="mt-1 text-[20px] font-black text-[#17392E]">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <p className="relative mt-5 text-[14px] leading-[1.85] text-[#64736A]">
                          {step.description}
                        </p>

                        <div className="relative mt-5 h-[3px] w-12 rounded-full bg-[#EF6666]" />
                      </div>
                    )}
                  </div>

                  {/* CENTER NODE - DESKTOP */}
                  <div className="relative z-10 hidden items-center justify-center lg:flex">
                    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border-[7px] border-[#14372B] bg-[#EF6666] text-[15px] font-black text-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)]">
                      {step.number}
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className={!isLeft ? "lg:pl-6" : "hidden lg:block"}>
                    {!isLeft && (
                      <div className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-7">

                        <span className="pointer-events-none absolute -right-2 -top-5 text-[100px] font-black leading-none text-[#F0F4F0]">
                          {step.number}
                        </span>

                        <div className="relative flex items-start gap-4">
                          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#176A3A] transition-colors duration-300 group-hover:bg-[#14372B] group-hover:text-white">
                            <Icon size={24} strokeWidth={1.8} />
                          </div>

                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#EF6666]">
                              STEP {step.number}
                            </span>

                            <h3 className="mt-1 text-[20px] font-black text-[#17392E]">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <p className="relative mt-5 text-[14px] leading-[1.85] text-[#64736A]">
                          {step.description}
                        </p>

                        <div className="relative mt-5 h-[3px] w-12 rounded-full bg-[#EF6666]" />
                      </div>
                    )}
                  </div>

                  {/* MOBILE CARD */}
                  <div className="group relative overflow-hidden rounded-[20px] bg-white p-5 shadow-lg sm:p-7 lg:hidden">
                    <span className="pointer-events-none absolute -right-2 -top-5 text-[90px] font-black leading-none text-[#F0F4F0]">
                      {step.number}
                    </span>

                    <div className="relative flex items-start gap-4">
                      <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#176A3A]">
                        <Icon size={23} />
                      </div>

                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EF6666]">
                          STEP {step.number}
                        </span>

                        <h3 className="mt-1 text-[18px] font-black text-[#17392E]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="relative mt-4 text-[13px] leading-[1.8] text-[#64736A] sm:text-[14px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FINAL JOURNEY BADGE */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#FFB1A8]">
            <Check size={23} />
          </div>

          <p className="text-center text-[15px] font-extrabold tracking-wide text-white sm:text-[18px]">
            {t.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
