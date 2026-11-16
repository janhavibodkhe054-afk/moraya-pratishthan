
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  UsersRound,
  PackageCheck,
  HeartHandshake,
  ArrowUpRight,
  Waves,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const responseAreas = [
  {
    number: "01",
    Icon: UsersRound,
    en: "Volunteer Mobilization",
    mr: "स्वयंसेवकांचे एकत्रीकरण",
    descEn: "Bringing people together to support communities.",
    descMr: "समाजाच्या मदतीसाठी स्वयंसेवकांना एकत्र आणणे.",
  },
  {
    number: "02",
    Icon: PackageCheck,
    en: "Resource Coordination",
    mr: "संसाधनांचे समन्वय",
    descEn: "Coordinating resources for relief efforts.",
    descMr: "मदतकार्याकरिता आवश्यक संसाधनांचा समन्वय.",
  },
  {
    number: "03",
    Icon: HeartHandshake,
    en: "Relief Assistance",
    mr: "आपत्तीग्रस्तांना मदत",
    descEn: "Supporting affected families during emergencies.",
    descMr: "आपत्कालीन परिस्थितीत प्रभावित कुटुंबांना सहाय्य.",
  },
];

export default function DisasterRelief() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आपत्ती निवारण आणि व्यवस्थापन",
        heading1: "आपत्कालीन परिस्थितीत",
        heading2: "समुदायाच्या सोबत.",
        paragraph1:
          "मोरया सामाजिक प्रतिष्ठान नैसर्गिक आपत्तींच्या काळात, विशेषतः पूरस्थितीत, स्वयंसेवकांचे एकत्रीकरण, संसाधनांचा समन्वय आणि मदतकार्याच्या माध्यमातून असुरक्षित व गरजू समुदायांना सहाय्य करते.",
        paragraph2:
          "आमचे आपत्ती प्रतिसाद उपक्रम समुदायाच्या तातडीच्या गरजा पूर्ण करणे, प्रभावित कुटुंबांना मदत करणे आणि सामूहिक प्रयत्नांतून स्थानिक समुदायाची आपत्तीला सामोरे जाण्याची क्षमता मजबूत करणे यावर केंद्रित आहेत.",
        response: "आमच्या मदतकार्याचे प्रमुख आधार",
        highlight: "संकटाच्या काळात एकत्र",
        note: "समुदाय • सहकार्य • मदत",
      }
    : {
        eyebrow: "DISASTER RELIEF & MANAGEMENT",
        heading1: "Standing With Communities",
        heading2: "During Emergencies.",
        paragraph1:
          "Morya Samajik Pratishthan supports vulnerable communities during natural disasters, particularly flood emergencies, through volunteer mobilization, resource coordination and relief assistance.",
        paragraph2:
          "Our disaster response efforts focus on addressing immediate community needs, supporting affected families and strengthening local resilience through collective action.",
        response: "OUR RESPONSE PRIORITIES",
        highlight: "Together During Difficult Times",
        note: "Community • Coordination • Relief",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
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
      id="disaster-relief"
      className="relative isolate overflow-hidden bg-[#141719] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-[#101315]/85" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#101315]/95 via-[#141719]/85 to-[#101315]/90" />

      {/* SUBTLE ACCENT GLOW */}
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[430px] w-[430px] rounded-full bg-[#EF6544]/[0.08] blur-[110px]" />

      {/* TOP ACCENT */}
      <div className="absolute left-0 top-0 h-[3px] w-24 bg-[#EF6544]" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">

        {/* LEFT - RESPONSE INDICATORS */}
        <motion.div
          {...reveal(0.1)}
          className="order-2 lg:order-1"
        >
          {/* SECTION LABEL */}
          <div className="mb-5 flex items-center justify-between border-b border-white/20 pb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#FFA58D]">
              {content.response}
            </span>

            <Waves
              size={21}
              strokeWidth={1.6}
              className="text-[#FFA58D]"
            />
          </div>

          {/* RESPONSE LIST */}
          <div className="space-y-3">
            {responseAreas.map((area, index) => {
              const Icon = area.Icon;

              return (
                <motion.div
                  key={area.number}
                  {...reveal(index * 0.08)}
                  className="group relative flex items-start gap-4 overflow-hidden rounded-[14px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#EF6544]/60 hover:bg-white/[0.10] sm:p-5"
                >
                  {/* ICON */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EF6544]/15 text-[#FFA58D] transition-colors duration-300 group-hover:bg-[#EF6544] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">
                    <span className="mb-1 block text-[10px] font-bold tracking-[0.12em] text-white/40">
                      {area.number}
                    </span>

                    <h3 className="text-[15px] font-extrabold leading-[1.4] text-white sm:text-[16px]">
                      {isMarathi ? area.mr : area.en}
                    </h3>

                    <p className="mt-1.5 text-[12px] leading-[1.65] text-[#BFC7C5]">
                      {isMarathi ? area.descMr : area.descEn}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="mt-1 shrink-0 text-white/30 transition-colors duration-300 group-hover:text-[#FFA58D]"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT - MAIN CONTENT */}
        <div className="order-1 lg:order-2">
          {/* EYEBROW */}
          <motion.div
            {...reveal()}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF6544]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FFA58D]">
              {content.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            {...reveal(0.1)}
            className="max-w-[650px] text-[clamp(1.9rem,2.8vw,2.85rem)] font-extrabold leading-[1.22] tracking-[-0.035em]"
          >
            {content.heading1}{" "}
            <span className="text-[#FF896E]">
              {content.heading2}
            </span>
          </motion.h2>

          {/* CONTENT */}
          <motion.div
            {...reveal(0.2)}
            className="mt-6 max-w-[640px] space-y-4"
          >
            <p className="text-[14px] leading-[1.9] text-[#D2D6D5] sm:text-[15px]">
              {content.paragraph1}
            </p>

            <p className="text-[14px] leading-[1.9] text-[#C1C8C5] sm:text-[15px]">
              {content.paragraph2}
            </p>
          </motion.div>

          {/* BOTTOM MESSAGE */}
          <motion.div
            {...reveal(0.3)}
            className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EF6544]/15 text-[#FFA58D]">
              <ShieldCheck size={22} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-[13px] font-extrabold text-white">
                {content.highlight}
              </p>

              <p className="mt-1 text-[12px] text-white/50">
                {content.note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
    </section>
  );
}
