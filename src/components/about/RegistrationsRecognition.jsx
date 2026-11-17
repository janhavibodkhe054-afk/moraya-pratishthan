
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileCheck2,
  Landmark,
  Scale,
  BadgeCheck,
  FileText,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const icons = [
  FileCheck2,
  Landmark,
  Scale,
  Scale,
  BadgeCheck,
  ShieldCheck,
];

export default function RegistrationsRecognition() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "नोंदणी आणि मान्यता",
        heading1: "विश्वासाचा पाया.",
        heading2: "जबाबदार कार्याची ओळख.",
        description:
          "मोरया सामाजिक प्रतिष्ठान ही संस्था जबाबदार प्रशासन आणि सामाजिक विकासाला पाठबळ देणाऱ्या स्थापित कायदेशीर व संस्थात्मक चौकटीत कार्यरत आहे.",
        registrationLabel: "कायदेशीर नोंदणी आणि मान्यता",
        documentLabel: "संस्थात्मक माहिती",
        cta: "मान्यता आणि कागदपत्रे पाहा",
        items: [
          {
            title: "सोसायटी नोंदणी",
            detail: "Maharashtra / 9961-95 / Pune",
          },
          {
            title: "सार्वजनिक न्यास नोंदणी",
            detail: "F11530 / Pune",
          },
          {
            title: "सोसायटी नोंदणी अधिनियम",
            detail: "Societies Registration Act, 1860 अंतर्गत नोंदणी",
          },
          {
            title: "महाराष्ट्र सार्वजनिक न्यास अधिनियम",
            detail: "Maharashtra Public Trust Act, 1950 अंतर्गत नोंदणी",
          },
          {
            title: "आयकर नोंदणी",
            detail:
              "लागू तरतुदींनुसार कलम 12AA/12A आणि 80G अंतर्गत नोंदणी",
          },
          {
            title: "CSR-1 नोंदणी",
            detail:
              "पात्र CSR अंमलबजावणी उपक्रमांसाठी CSR-1 नोंदणी",
          },
        ],
      }
    : {
        eyebrow: "REGISTRATIONS & RECOGNITION",
        heading1: "Built on Trust,",
        heading2: "Governance & Accountability.",
        description:
          "Morya Samajik Pratishthan operates within an established legal and institutional framework supporting responsible governance and social development.",
        registrationLabel: "Legal Registrations & Recognition",
        documentLabel: "Institutional Credentials",
        cta: "View Accreditations & Documents",
        items: [
          {
            title: "Society Registration",
            detail: "Maharashtra / 9961-95 / Pune",
          },
          {
            title: "Public Trust Registration",
            detail: "F11530 / Pune",
          },
          {
            title: "Societies Registration Act",
            detail: "Registration under the Societies Registration Act, 1860",
          },
          {
            title: "Maharashtra Public Trust Act",
            detail:
              "Registration under the Maharashtra Public Trust Act, 1950",
          },
          {
            title: "Income Tax Registrations",
            detail:
              "Under applicable provisions of Sections 12AA/12A and 80G",
          },
          {
            title: "CSR-1 Registration",
            detail:
              "For eligible CSR implementation activities",
          },
        ],
      };

  return (
    <section
      id="registrations-recognition"
      className="relative isolate overflow-hidden bg-[#14382B] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#2C6B49]/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-44 -right-40 h-[450px] w-[450px] rounded-full bg-[#0A2418]/50 blur-[100px]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 select-none text-[120px] font-black tracking-[-0.08em] text-white/[0.025] sm:text-[200px]"
      >
        TRUST
      </div>

      <div className="relative mx-auto grid max-w-[1380px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">

        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-32">

          {/* EYEBROW */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#C6E9D0]">
              {content.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[530px] text-[clamp(2rem,3vw,3.2rem)] font-black leading-[1.16] tracking-[-0.035em] text-white"
          >
            {content.heading1}

            <span className="mt-1 block text-[#FF7777]">
              {content.heading2}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-[470px] text-[15px] leading-[1.9] text-white/75 sm:text-[16px]"
          >
            {content.description}
          </motion.p>

          {/* SMALL TRUST ELEMENT */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#FF8585]">
              <ShieldCheck size={24} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-[14px] font-bold text-white">
                {content.documentLabel}
              </p>

              <p className="mt-1 text-[12px] text-white/55">
                {content.registrationLabel}
              </p>
            </div>
          </motion.div>

          
        </div>

        {/* RIGHT SIDE - REGISTRATION LIST */}
        <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-7 lg:p-8">

          {/* DOCUMENT HEADER */}
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div className="flex items-center gap-3">
              <FileCheck2
                size={23}
                className="text-[#FF8585]"
              />

              <h3 className="text-[16px] font-extrabold text-white sm:text-[18px]">
                {content.registrationLabel}
              </h3>
            </div>

            <span className="text-[12px] font-bold tracking-[0.12em] text-white/35">
              01—06
            </span>
          </div>

          {/* REGISTRATIONS */}
          <div className="divide-y divide-white/10">
            {content.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={`${language}-${index}`}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: 25 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  className="group flex items-start gap-4 py-5 first:pt-2 last:pb-1"
                >
                  {/* ICON */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[#FF8585] transition-all duration-300 group-hover:border-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] font-bold text-white sm:text-[16px]">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-[13px] leading-[1.75] text-white/65 sm:text-[14px]">
                      {item.detail}
                    </p>
                  </div>

                  {/* CHECK MARK */}
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-[#86C99B]"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
