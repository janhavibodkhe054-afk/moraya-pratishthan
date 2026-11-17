
import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  UsersRound,
  HeartPulse,
  LaptopMinimal,
  Sprout,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// CSR FOCUS AREA CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "OUR CSR PRIORITIES",
    heading1: "CSR Focus",
    heading2: "Areas",
    description:
      "Our initiatives focus on practical solutions that empower individuals, strengthen communities and create long-term opportunities.",

    areas: [
      {
        number: "01",
        title: "Education & Skill Development",
        description:
          "Vocational and technical training for underserved youth",
        Icon: GraduationCap,
      },
      {
        number: "02",
        title: "Youth Employability",
        description:
          "Career readiness, practical training and placement support",
        Icon: BriefcaseBusiness,
      },
      {
        number: "03",
        title: "Women Empowerment",
        description:
          "Livelihood skills, financial awareness and self-reliance",
        Icon: UsersRound,
      },
      {
        number: "04",
        title: "Community Healthcare",
        description:
          "Health awareness, camps and preventive health initiatives",
        Icon: HeartPulse,
      },
      {
        number: "05",
        title: "Digital & Financial Literacy",
        description:
          "Practical knowledge for participation in a changing economy",
        Icon: LaptopMinimal,
      },
      {
        number: "06",
        title: "Sustainable Livelihoods",
        description:
          "Employment and self-employment pathways",
        Icon: Sprout,
      },
    ],
  },

  mr: {
    eyebrow: "आमची CSR प्राधान्य क्षेत्रे",
    heading1: "CSR ची प्रमुख",
    heading2: "कार्यक्षेत्रे",
    description:
      "व्यक्तींचे सक्षमीकरण, समाजाचा विकास आणि दीर्घकालीन संधी निर्माण करण्यासाठी आमचे उपक्रम कार्यरत आहेत.",

    areas: [
      {
        number: "01",
        title: "शिक्षण व कौशल्य विकास",
        description:
          "वंचित तरुणांसाठी व्यावसायिक आणि तांत्रिक प्रशिक्षण",
        Icon: GraduationCap,
      },
      {
        number: "02",
        title: "युवकांची रोजगारक्षमता",
        description:
          "करिअर मार्गदर्शन, व्यावहारिक प्रशिक्षण आणि रोजगारासाठी सहाय्य",
        Icon: BriefcaseBusiness,
      },
      {
        number: "03",
        title: "महिला सक्षमीकरण",
        description:
          "उपजीविकेसाठी कौशल्ये, आर्थिक जागरूकता आणि स्वावलंबन",
        Icon: UsersRound,
      },
      {
        number: "04",
        title: "सामुदायिक आरोग्यसेवा",
        description:
          "आरोग्य जनजागृती, आरोग्य शिबिरे आणि प्रतिबंधात्मक आरोग्य उपक्रम",
        Icon: HeartPulse,
      },
      {
        number: "05",
        title: "डिजिटल व आर्थिक साक्षरता",
        description:
          "बदलत्या अर्थव्यवस्थेत सहभागी होण्यासाठी आवश्यक व्यावहारिक ज्ञान",
        Icon: LaptopMinimal,
      },
      {
        number: "06",
        title: "शाश्वत उपजीविका",
        description:
          "रोजगार आणि स्वयंरोजगाराच्या संधी",
        Icon: Sprout,
      },
    ],
  },
};

// ==========================================
// ANIMATIONS
// ==========================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
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
// CSR FOCUS AREAS SECTION
// ==========================================

export default function CSRFocusAreas() {
  const { language } = useLanguage();

  const t = content[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="csr-focus-areas"
      className="relative overflow-hidden bg-[#F7FAF7] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-[#E7F0E9] blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#FCEDEC]/50 blur-[110px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        {/* ==================================
            SECTION HEADER
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-12 max-w-[750px] text-center sm:mb-14"
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#006B2E] sm:text-[12px]">
              {t.eyebrow}
            </span>

            <span className="h-[2px] w-8 bg-[#EF4444]" />
          </div>

          {/* HEADING */}
          <h2 className="text-[34px] font-black leading-tight tracking-tight text-[#17392E] sm:text-[44px] lg:text-[50px]">
            {t.heading1}{" "}
            <span className="text-[#EF4444]">
              {t.heading2}
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-[1.85] text-[#68766D] sm:text-[16px]">
            {t.description}
          </p>
        </motion.div>

        {/* ==================================
            FOCUS AREA CARDS
        ================================== */}

        <motion.div
          key={language}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {t.areas.map((area) => {
            const Icon = area.Icon;

            return (
              <motion.article
                key={area.number}
                variants={cardVariants}
                whileHover={{ y: -7 }}
                className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-[22px] border border-[#E5ECE6] bg-white p-7 shadow-[0_8px_30px_rgba(23,57,46,0.035)] transition-all duration-300 hover:border-[#C7DDCD] hover:shadow-[0_20px_50px_rgba(23,57,46,0.10)] sm:p-8"
              >
                {/* TOP ACCENT */}
                <div className="absolute left-0 top-0 h-[4px] w-0 bg-[#EF4444] transition-all duration-500 group-hover:w-full" />

                {/* NUMBER */}
                <span className="absolute right-7 top-6 text-[42px] font-black leading-none text-[#EDF2EE] transition-colors duration-300 group-hover:text-[#FCE7E5]">
                  {area.number}
                </span>

                {/* ICON */}
                <div className="relative mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-[#EAF3EC] text-[#176A3A] transition-all duration-300 group-hover:rotate-[-5deg] group-hover:bg-[#17392E] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* TITLE */}
                <h3 className="relative max-w-[290px] text-[19px] font-extrabold leading-[1.4] text-[#17392E]">
                  {area.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative mt-3 max-w-[320px] text-[14px] leading-[1.75] text-[#6B786F]">
                  {area.description}
                </p>

                {/* BOTTOM DECORATION */}
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="h-[3px] w-9 rounded-full bg-[#EF4444]/70 transition-all duration-300 group-hover:w-16" />

                  <ArrowUpRight
                    size={19}
                    className="text-[#A5B4A9] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EF4444]"
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
