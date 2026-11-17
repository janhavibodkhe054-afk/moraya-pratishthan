
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  HeartHandshake,
  MoveUpRight,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "CORPORATE SOCIAL RESPONSIBILITY",
    heading1: "Partnering for",
    heading2: "Purpose.",
    heading3: "Delivering Sustainable Impact.",
    description:
      "Building stronger communities through meaningful CSR partnerships in education, healthcare, skill development and livelihoods.",
    button: "Explore CSR Initiatives",
    imageLabel: "Together, We Create Change",
  },

  mr: {
    eyebrow: "कॉर्पोरेट सामाजिक उत्तरदायित्व",
    heading1: "सामाजिक उद्दिष्टांसाठी",
    heading2: "भागीदारी.",
    heading3: "शाश्वत परिवर्तनासाठी एकत्र.",
    description:
      "शिक्षण, आरोग्यसेवा, कौशल्य विकास आणि रोजगाराच्या संधींसाठी प्रभावी CSR भागीदारी.",
    button: "CSR उपक्रम पाहा",
    imageLabel: "एकत्र येऊन परिवर्तन घडवूया",
  },
};

// ==========================================
// ANIMATION
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// ==========================================
// CSR HERO
// ==========================================

export default function CSRHero() {
  const { language } = useLanguage();

  const t = content[language === "mr" ? "mr" : "en"];

  const scrollToCSR = () => {
    document
      .getElementById("csr-initiatives")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAF8]">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-[380px] w-[380px] rounded-full bg-[#E8F0E9] blur-[80px]" />

      <div className="mx-auto grid w-full max-w-[1600px] items-stretch lg:min-h-[480px] lg:grid-cols-[52%_48%]">

        {/* ==================================
            LEFT CONTENT
        ================================== */}

        <div className="relative z-10 flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-12 xl:px-20">

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.12,
            }}
            className="w-full max-w-[650px]"
          >
            {/* EYEBROW */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[3px] w-9 rounded-full bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#006B2E] sm:text-[12px]">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-[35px] font-black leading-[1.12] tracking-tight text-[#17392E] sm:text-[45px] xl:text-[53px]"
            >
              {t.heading1}{" "}

              <span className="text-[#EF4444]">
                {t.heading2}
              </span>
            </motion.h1>

            {/* SECOND HEADING LINE */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-3 max-w-[590px] text-[20px] font-bold leading-[1.35] text-[#263E34] sm:text-[25px] xl:text-[29px]"
            >
              {t.heading3}
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-5 max-w-[540px] text-[14px] leading-[1.8] text-[#65736A] sm:text-[15px]"
            >
              {t.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-7"
            >
              <button
                type="button"
                onClick={scrollToCSR}
                className="group inline-flex min-h-[46px] items-center justify-center gap-3 rounded-full bg-[#17392E] px-6 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#EF4444] hover:shadow-lg sm:text-[14px]"
              >
                {t.button}

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* ==================================
            RIGHT IMAGE
        ================================== */}

        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-full">

          {/* IMAGE */}
          <motion.img
            src="/34.webp"
            alt="CSR partnerships and community empowerment"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* LIGHT IMAGE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10271F]/50 via-transparent to-transparent" />

          {/* IMAGE CORNER ACCENT */}
          <div className="absolute left-0 top-0 hidden h-full w-[6px] bg-[#EF4444] lg:block" />

          {/* FLOATING IMAGE LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 rounded-xl border border-white/25 bg-[#17392E]/85 px-5 py-4 text-white shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:min-w-[290px]"
          >
            <div className="flex items-center gap-3">
              <HeartHandshake
                size={24}
                className="shrink-0 text-[#FFB1A8]"
              />

              <span className="text-[13px] font-bold sm:text-[14px]">
                {t.imageLabel}
              </span>
            </div>

            <MoveUpRight
              size={17}
              className="shrink-0 text-white/70"
            />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#17392E] via-[#EF4444] to-transparent" />
    </section>
  );
}
