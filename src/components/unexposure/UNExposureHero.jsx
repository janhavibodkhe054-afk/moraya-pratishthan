
import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  ArrowUpRight,
  MapPin,
  Earth,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "INTERNATIONAL ENGAGEMENT",
    heading1: "Connecting Grassroots",
    heading2: "Experience With",
    heading3: "Global Conversations.",
    description:
      "Bringing community-level experience into international conversations on education, skills and social development.",
    badge: "LOCAL EXPERIENCE. GLOBAL PERSPECTIVE.",
    imageLabel: "International Engagement",
  },

  mr: {
    eyebrow: "आंतरराष्ट्रीय सहभाग",
    heading1: "स्थानिक पातळीवरील",
    heading2: "अनुभवांना",
    heading3: "जागतिक व्यासपीठ.",
    description:
      "शिक्षण, कौशल्य विकास आणि सामाजिक प्रगतीविषयीच्या आंतरराष्ट्रीय चर्चांमध्ये स्थानिक अनुभवांची मांडणी.",
    badge: "स्थानिक अनुभव. जागतिक दृष्टिकोन.",
    imageLabel: "आंतरराष्ट्रीय सहभाग",
  },
};

export default function UNExposureHero() {
  const { language } = useLanguage();
  const t = content[language === "mr" ? "mr" : "en"];

  return (
    <section className="relative isolate overflow-hidden bg-[#12372B] text-white">

      {/* BACKGROUND WORLD MAP */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "url('/9.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-[#287451]/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-[#EF6666]/10 blur-[100px]" />

      <div className="relative mx-auto grid min-h-[480px] max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[54%_46%] lg:gap-6 lg:px-14 lg:py-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-10 max-w-[690px]"
        >
          {/* EYEBROW */}
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Globe2 size={18} className="text-[#FFB1A8]" />
            </span>

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FFB1A8] sm:text-[12px]">
              {t.eyebrow}
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-[35px] font-black leading-[1.14] tracking-tight sm:text-[46px] lg:text-[52px]">
            {t.heading1}
            <br />
            {t.heading2}
            <br />

            <span className="text-[#FFB1A8]">
              {t.heading3}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[570px] text-[14px] leading-[1.9] text-white/75 sm:text-[16px]">
            {t.description}
          </p>

          {/* BOTTOM BADGE */}
          <div className="mt-8 inline-flex items-center gap-3 border-l-[3px] border-[#EF6666] pl-4">
            <Earth size={20} className="text-[#FFB1A8]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/85 sm:text-[12px]">
              {t.badge}
            </span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[550px]"
        >
          {/* IMAGE BORDER */}
          <div className="absolute -right-3 -top-3 h-full w-full rounded-[26px] border border-white/15 sm:-right-4 sm:-top-4" />

          {/* MAIN IMAGE */}
          <div className="relative h-[280px] overflow-hidden rounded-[24px] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.25)] sm:h-[340px] lg:h-[365px]">
            <img
              src="/9.webp"
              alt="International conference participation"
              className="h-full w-full object-cover"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10271F]/65 via-transparent to-transparent" />

            {/* IMAGE LABEL */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/20 bg-[#12372B]/80 px-4 py-3 backdrop-blur-md">
              <MapPin size={18} className="text-[#FFB1A8]" />

              <span className="text-[12px] font-bold text-white sm:text-[13px]">
                {t.imageLabel}
              </span>
            </div>
          </div>

          {/* FLOATING GLOBE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -right-2 flex h-[65px] w-[65px] items-center justify-center rounded-2xl border border-white/20 bg-[#EF6666] text-white shadow-xl sm:-right-5 sm:h-[75px] sm:w-[75px]"
          >
            <Globe2 size={32} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#EF6666] via-[#EF6666]/40 to-transparent" />
    </section>
  );
}
