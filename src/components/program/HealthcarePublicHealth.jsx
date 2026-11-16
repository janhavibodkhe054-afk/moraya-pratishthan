
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Stethoscope,
  Droplets,
  ShieldPlus,
  Ribbon,
  HeartPulse,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const activities = [
  {
    number: "01",
    Icon: Stethoscope,
    en: "Health Camps",
    mr: "आरोग्य शिबिरे",
  },
  {
    number: "02",
    Icon: Droplets,
    en: "Blood Donation Initiatives",
    mr: "रक्तदान उपक्रम",
  },
  {
    number: "03",
    Icon: ShieldPlus,
    en: "Pulse Polio Campaigns",
    mr: "पल्स पोलिओ मोहिमा",
  },
  {
    number: "04",
    Icon: Ribbon,
    en: "Tuberculosis Awareness",
    mr: "क्षयरोग जनजागृती",
  },
];

export default function HealthcarePublicHealth() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आरोग्यसेवा आणि सार्वजनिक आरोग्य",
        heading1: "आरोग्यविषयक जागृती",
        heading2: "प्रत्येक समुदायापर्यंत.",
        paragraph1:
          "मोरया सामाजिक प्रतिष्ठान आरोग्य जनजागृती, आरोग्यसेवा उपक्रम आणि स्वयंसेवकांच्या सहभागातून समाजाच्या आरोग्यासाठी कार्य करते. यामध्ये आरोग्य शिबिरे, रक्तदान उपक्रम, पल्स पोलिओ मोहिमा आणि क्षयरोग जनजागृतीचा समावेश आहे.",
        paragraph2:
          "प्रतिबंधात्मक आरोग्यविषयक माहिती आणि समुदायाचा सहभाग वाढवून आरोग्याबाबत जागरूकता निर्माण करणे आणि योग्य वेळी आवश्यक आरोग्यसेवा मिळवण्यासाठी प्रोत्साहन देणे हे आमचे उद्दिष्ट आहे.",
        activities: "आमचे आरोग्य उपक्रम",
        footer: "जागृती • सहभाग • आरोग्य",
      }
    : {
        eyebrow: "HEALTHCARE & PUBLIC HEALTH",
        heading1: "Making Health Awareness",
        heading2: "Accessible to Communities.",
        paragraph1:
          "We support community health through awareness initiatives, healthcare outreach and volunteer-driven activities. Our programs include health camps, blood donation initiatives, Pulse Polio campaigns and tuberculosis awareness.",
        paragraph2:
          "By promoting preventive health knowledge and community participation, we aim to strengthen public awareness and encourage timely access to appropriate healthcare services.",
        activities: "OUR HEALTH INITIATIVES",
        footer: "Awareness • Participation • Wellbeing",
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
      id="healthcare-public-health"
      className="relative isolate overflow-hidden bg-[#151719] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* BLACK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-[#101214]/85" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0D0F]/95 via-[#111315]/85 to-[#17191B]/90" />

      {/* RED GLOW */}
      <div className="pointer-events-none absolute -bottom-40 -left-28 h-[400px] w-[400px] rounded-full bg-[#EF4444]/[0.07] blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">

        {/* RIGHT CONTENT - FIRST ON MOBILE */}
        <div className="order-1 lg:order-2">
          <motion.div
            {...reveal()}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FF8C87]">
              {content.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            {...reveal(0.1)}
            className="max-w-[650px] text-[clamp(1.9rem,2.8vw,2.85rem)] font-extrabold leading-[1.22] tracking-[-0.035em] text-white"
          >
            {content.heading1}{" "}
            <span className="text-[#FF6B68]">
              {content.heading2}
            </span>
          </motion.h2>

          <motion.div
            {...reveal(0.2)}
            className="mt-6 max-w-[630px] space-y-4"
          >
            <p className="text-[14px] leading-[1.9] text-[#D2D5D5] sm:text-[15px]">
              {content.paragraph1}
            </p>

            <p className="text-[14px] leading-[1.9] text-[#C1C7C6] sm:text-[15px]">
              {content.paragraph2}
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.3)}
            className="mt-7 flex items-center gap-3 border-t border-white/15 pt-5"
          >
            <HeartPulse
              size={21}
              strokeWidth={1.7}
              className="text-[#FF7772]"
            />

            <span className="text-[13px] font-semibold text-[#D8DEDB]">
              {content.footer}
            </span>
          </motion.div>
        </div>

        {/* LEFT - HEALTHCARE ACTIVITY CARDS */}
        <motion.div
          {...reveal(0.15)}
          className="order-2 lg:order-1"
        >
          <div className="mb-5 flex items-center justify-between border-b border-white/20 pb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FF8C87]">
              {content.activities}
            </span>

            <span className="text-[12px] font-bold text-white/50">
              01 — 04
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {activities.map((activity, index) => {
              const Icon = activity.Icon;

              return (
                <motion.div
                  key={activity.number}
                  {...reveal(index * 0.08)}
                  className="group relative flex min-h-[165px] flex-col justify-between overflow-hidden rounded-[16px] border border-white/15 bg-white/[0.07] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#EF4444]/60 hover:bg-white/[0.11] sm:min-h-[180px] sm:p-5"
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EF4444]/15 text-[#FF7772] transition-colors duration-300 group-hover:bg-[#EF4444] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="text-[11px] font-bold text-white/35">
                      {activity.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-[14px] font-bold leading-[1.45] text-white sm:text-[16px]">
                    {isMarathi ? activity.mr : activity.en}
                  </h3>

                  {/* BOTTOM ACCENT */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#EF4444] transition-all duration-300 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
    </section>
  );
}
