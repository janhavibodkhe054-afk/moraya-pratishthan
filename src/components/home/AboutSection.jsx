
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  HeartPulse,
  UsersRound,
  Handshake,
  MoveUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

// Replace with actual organization photographs when available
const images = {
  main:
    "https://images.openai.com/static-rsc-4/Qv7klvp3HU86BZpyIc7dFEmfnc1gOUWwBLPo_m-ARGQv7StfKxmF67MPfUq0okUE0NSxj1eM3Y7B-l-v_Ta8q7kBmPd1LwMt7p9oVK7nfD83LViIZnOgWT7zQcH2rai3DpwL2kXOBmoE6iNkODWsYI2OlBOGrmJmP-LfjBsuWRI?purpose=inline",
  secondary:
    "https://images.openai.com/static-rsc-4/24wLOF9v5jYLZI6Z8KTpHx72ZeDo_H2iZxTttzNbgfv9dqcIVrGU2q9xxrIG4B0RTI5AJ1CVGFHfnsvAUq3zF71xtDpgkUyVboKTRmhTvf5hcLTPKwc-XFnxXvPbzQzCMTO8BORsOdfEx3WaE0W4QoHAwRVpbw_dwmWVsWMkUp4?purpose=inline",
};

const content = {
  en: {
    eyebrow: "ABOUT MORYA SAMAJIK PRATISHTHAN",
    heading1: "A Legacy of Service.",
    heading2: "A Future of Empowerment.",
    intro:
      "Established in 1995, Morya Samajik Pratishthan is a grassroots NGO committed to building a more inclusive, skilled and self-reliant society.",
    description:
      "Through skill-based education, healthcare programs, women empowerment, disaster response and CSR collaborations, we create meaningful opportunities that help individuals build confidence, employability and independence.",
    quote:
      "Creating opportunities today. Building stronger communities tomorrow.",
    focusLabel: "OUR CORE FOCUS",
    focus: [
      "Skill-Based Education",
      "Healthcare & Training",
      "Women Empowerment",
      "CSR & Social Impact",
    ],
    years: "31+",
    yearsLabel: "Years of Community Development",
    since: "SERVING COMMUNITIES SINCE 1995",
    cta: "Discover Our Journey",
    mainAlt: "Practical healthcare skills training",
    secondaryAlt: "Paramedical students and education",
  },
  mr: {
    eyebrow: "मोरया सामाजिक प्रतिष्ठान विषयी",
    heading1: "सेवेचा समृद्ध वारसा.",
    heading2: "सक्षमीकरणाची नवी दिशा.",
    intro:
      "१९९५ मध्ये स्थापन झालेले मोरया सामाजिक प्रतिष्ठान ही सर्वसमावेशक, कौशल्यसंपन्न आणि स्वावलंबी समाज निर्माण करण्यासाठी कार्यरत असलेली स्वयंसेवी संस्था आहे.",
    description:
      "कौशल्याधारित शिक्षण, आरोग्य उपक्रम, महिला सक्षमीकरण, आपत्ती प्रतिसाद आणि CSR सहकार्याच्या माध्यमातून आम्ही आत्मविश्वास, रोजगारक्षमता आणि स्वावलंबन वाढवणाऱ्या संधी निर्माण करतो.",
    quote:
      "आज संधी निर्माण करतो. उद्याचा सक्षम समाज घडवतो.",
    focusLabel: "आमची प्रमुख कार्यक्षेत्रे",
    focus: [
      "कौशल्याधारित शिक्षण",
      "आरोग्य व प्रशिक्षण",
      "महिला सक्षमीकरण",
      "CSR व सामाजिक विकास",
    ],
    years: "३१+",
    yearsLabel: "सामाजिक विकासाची वर्षे",
    since: "१९९५ पासून समाजसेवेत कार्यरत",
    cta: "आमचा प्रवास जाणून घ्या",
    mainAlt: "आरोग्य आणि कौशल्य प्रशिक्षण",
    secondaryAlt: "पॅरामेडिकल शिक्षण घेणारे विद्यार्थी",
  },
};

const focusIcons = [
  GraduationCap,
  HeartPulse,
  UsersRound,
  Handshake,
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const { language } = useLanguage();
  const t = content[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#FCFCFB] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[400px] w-[400px] rounded-full border border-gray-100" />
      <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[280px] w-[280px] rounded-full border border-gray-100" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT - TWO IMAGE COMPOSITION */}
          <div className="relative min-w-0 pb-12 pt-9 sm:pb-14">

            {/* YEAR WATERMARK */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="pointer-events-none absolute left-0 top-0 select-none text-[95px] font-black leading-none tracking-[-0.09em] text-[#EBEEEB] sm:text-[135px] lg:text-[145px]"
            >
              1995
            </motion.div>

            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -45, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="relative z-10 ml-0 w-[84%] overflow-hidden rounded-[24px] bg-gray-200 shadow-[0_22px_55px_rgba(0,0,0,0.13)] sm:ml-5"
            >
              <motion.img
                src={images.main}
                alt={t.mainAlt}
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.65 }}
                className="h-[380px] w-full object-cover sm:h-[470px] lg:h-[530px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* SECOND IMAGE - OVERLAPPING */}
            <motion.div
              initial={{ opacity: 0, x: 45, y: 25, rotate: 4 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="absolute bottom-3 right-0 z-20 w-[49%] overflow-hidden rounded-[20px] border-[6px] border-[#FCFCFB] bg-gray-200 shadow-[0_18px_45px_rgba(0,0,0,0.16)] sm:bottom-0 sm:w-[47%]"
            >
              <motion.img
                src={images.secondary}
                alt={t.secondaryAlt}
                loading="lazy"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.65 }}
                className="h-[205px] w-full object-cover sm:h-[250px] lg:h-[270px]"
              />
            </motion.div>

            {/* EXPERIENCE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute bottom-4 left-0 z-30 max-w-[185px] rounded-[18px] border border-gray-100 bg-white px-5 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:-left-2 sm:max-w-[210px] sm:px-6 sm:py-5"
            >
              <div className="mb-2 h-[3px] w-9 rounded-full bg-[#EF4444]" />

              <p className="text-[42px] font-black leading-none text-[#252B2D] sm:text-[50px]">
                {t.years}
              </p>

              <p className="mt-2 text-[12px] font-semibold leading-[1.45] text-[#56615C] sm:text-[14px]">
                {t.yearsLabel}
              </p>
            </motion.div>
          </div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ staggerChildren: 0.1 }}
            className="min-w-0"
          >
            {/* EYEBROW */}
            <motion.div
              variants={reveal}
              transition={{ duration: 0.5 }}
              className="mb-3 flex items-center gap-3"
            >
              <span className="h-[3px] w-9 shrink-0 rounded-full bg-[#EF4444]" />
              <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5E6965] sm:text-[13px]">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              key={`${language}-about-heading`}
              variants={reveal}
              transition={{ duration: 0.65 }}
              className="text-[35px] font-black leading-[1.14] tracking-tight text-[#252B2D] sm:text-[45px] lg:text-[49px]"
            >
              {t.heading1}
              <br />
              <span className="text-[#EF4444]">
                {t.heading2}
              </span>
            </motion.h2>

            {/* INTRO */}
            <motion.p
              variants={reveal}
              transition={{ duration: 0.55 }}
              className="mt-5 text-[16px] font-semibold leading-[1.7] text-[#3E4845] sm:text-[17px]"
            >
              {t.intro}
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              variants={reveal}
              transition={{ duration: 0.55 }}
              className="mt-3 text-[15px] leading-[1.8] text-[#626D68] sm:text-[16px]"
            >
              {t.description}
            </motion.p>

            {/* SHORT IMPACT STATEMENT */}
            <motion.div
              variants={reveal}
              transition={{ duration: 0.55 }}
              className="mt-5 flex items-start gap-4 rounded-xl border-l-[3px] border-[#EF4444] bg-white px-4 py-3 shadow-sm"
            >
              <p className="text-[14px] font-semibold leading-[1.7] text-[#46524C] sm:text-[15px]">
                {t.quote}
              </p>
            </motion.div>

            {/* FOCUS AREAS */}
            <motion.div
              variants={reveal}
              transition={{ duration: 0.55 }}
              className="mt-6"
            >
              <p className="mb-3 text-[12px] font-extrabold tracking-[0.13em] text-[#64716A]">
                {t.focusLabel}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {t.focus.map((item, index) => {
                  const Icon = focusIcons[index];

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#52695D] transition-colors duration-300 hover:border-[#EF4444]/30 hover:text-[#EF4444]">
                        <Icon size={19} strokeWidth={1.8} />
                      </span>

                      <span className="text-[13px] font-semibold leading-[1.5] text-[#414A46] sm:text-[14px]">
                        {item}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={reveal}
              transition={{ duration: 0.55 }}
              className="mt-7"
            >
              <Link
                to="/about"
                className="group inline-flex min-h-[52px] items-center gap-4 rounded-full bg-[#252B2D] px-7 text-[14px] font-bold text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EF4444] hover:shadow-lg"
              >
                {t.cta}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
