
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  BriefcaseBusiness,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "ABOUT OUR CSR INITIATIVES",

    heading1: "Turning Corporate",
    heading2: "Responsibility Into",
    heading3: "Community Progress.",

    paragraphs: [
      "Our CSR initiatives are designed around identified community needs and focus on practical, outcome-oriented interventions.",

      "We work with corporate supporters to implement structured programs that promote skill development, improve employment readiness, encourage economic independence and strengthen community well-being.",

      "Through training, mentorship, local outreach and institutional partnerships, we aim to create measurable and sustainable social outcomes.",
    ],

    focusTitle: "Our Core Focus",

    focuses: [
      {
        title: "Skill Development",
        description: "Practical training",
        Icon: GraduationCap,
      },
      {
        title: "Employment Readiness",
        description: "Career opportunities",
        Icon: BriefcaseBusiness,
      },
      {
        title: "Community Well-being",
        description: "Sustainable progress",
        Icon: HeartHandshake,
      },
    ],
  },

  mr: {
    eyebrow: "आमच्या CSR उपक्रमांविषयी",

    heading1: "कॉर्पोरेट सामाजिक",
    heading2: "जबाबदारीतून",
    heading3: "समाजाची प्रगती.",

    paragraphs: [
      "आमचे CSR उपक्रम समाजाच्या ओळखलेल्या गरजांवर आधारित असून प्रत्यक्ष परिणाम साधणाऱ्या उपक्रमांवर केंद्रित आहेत.",

      "कॉर्पोरेट सहकार्याच्या माध्यमातून आम्ही कौशल्य विकास, रोजगारासाठी तयारी, आर्थिक स्वावलंबन आणि सामाजिक कल्याणासाठी नियोजनबद्ध कार्यक्रम राबवतो.",

      "प्रशिक्षण, मार्गदर्शन, स्थानिक पातळीवरील उपक्रम आणि संस्थात्मक भागीदारीतून मोजता येण्याजोगे व शाश्वत सामाजिक परिणाम घडवण्याचा आमचा प्रयत्न आहे.",
    ],

    focusTitle: "आमचे प्रमुख कार्यक्षेत्र",

    focuses: [
      {
        title: "कौशल्य विकास",
        description: "व्यावहारिक प्रशिक्षण",
        Icon: GraduationCap,
      },
      {
        title: "रोजगाराभिमुख तयारी",
        description: "करिअरच्या संधी",
        Icon: BriefcaseBusiness,
      },
      {
        title: "सामाजिक कल्याण",
        description: "शाश्वत प्रगती",
        Icon: HeartHandshake,
      },
    ],
  },
};

// ==========================================
// ANIMATIONS
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// ==========================================
// ABOUT CSR INITIATIVES
// ==========================================

export default function AboutCSRInitiatives() {
  const { language } = useLanguage();

  const t = content[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="csr-initiatives"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* SUBTLE BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[#F0F6F1] blur-[90px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid items-start gap-12 lg:grid-cols-[48%_52%] lg:gap-8">

          {/* ==================================
              LEFT SIDE - HEADING & FOCUS
          ================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
            className="lg:pr-12"
          >

            {/* EYEBROW */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-[3px] w-10 rounded-full bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#006B2E] sm:text-[12px]">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="max-w-[650px] text-[34px] font-black leading-[1.16] tracking-tight text-[#17392E] sm:text-[43px] lg:text-[48px]"
            >
              {t.heading1}
              <br />

              {t.heading2}
              <br />

              <span className="text-[#EF4444]">
                {t.heading3}
              </span>
            </motion.h2>

            {/* DECORATIVE LINE */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mt-7 flex items-center gap-2"
            >
              <span className="h-[4px] w-16 rounded-full bg-[#EF4444]" />
              <span className="h-[4px] w-5 rounded-full bg-[#DDE8DF]" />
              <span className="h-[4px] w-5 rounded-full bg-[#DDE8DF]" />
            </motion.div>

            {/* FOCUS AREAS */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <p className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#748078]">
                {t.focusTitle}
              </p>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {t.focuses.map((item, index) => {
                  const Icon = item.Icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="group rounded-2xl border border-[#E6EEE8] bg-[#F8FAF8] p-4 transition-all duration-300 hover:border-[#C7DCCB] hover:bg-white hover:shadow-lg"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F2EA] text-[#006B2E] transition-colors duration-300 group-hover:bg-[#17392E] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-[13px] font-extrabold leading-snug text-[#17392E]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-relaxed text-[#748078]">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* ==================================
              RIGHT SIDE - CONTENT
          ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* TOP ACCENT */}
            <div className="absolute -top-3 left-8 h-3 w-20 rounded-t-xl bg-[#EF4444]" />

            {/* CONTENT PANEL */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#E5EEE7] bg-[#F8FAF8] p-7 shadow-[0_15px_50px_rgba(23,57,46,0.05)] sm:p-10 lg:p-12">

              {/* BACKGROUND DECOR */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-[#EAF2EC]/70" />

              {/* SMALL ICON */}
              <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17392E] text-white">
                <HeartHandshake size={27} strokeWidth={1.7} />
              </div>

              {/* PARAGRAPHS */}
              <div className="relative space-y-7">
                {t.paragraphs.map((paragraph, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#006B2E]"
                    />

                    <p className="text-[14px] leading-[1.9] text-[#53635A] sm:text-[16px]">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>

              {/* BOTTOM ACCENT */}
              <div className="relative mt-9 flex items-center gap-3 border-t border-[#DFE9E1] pt-6">
                <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
                <span className="h-[2px] w-16 bg-[#EF4444]/50" />

                <ArrowUpRight
                  size={19}
                  className="ml-auto text-[#17392E]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
