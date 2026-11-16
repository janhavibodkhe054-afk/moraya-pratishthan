
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Globe2,
  MapPin,
  ArrowRight,
  MoveUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const translations = {
  en: {
    eyebrow: "GLOBAL ENGAGEMENT",
    heading1: "Local Action.",
    heading2: "Global Perspectives.",
    description:
      "Morya Samajik Pratishthan has participated in international conferences and knowledge-sharing platforms across Asia, Europe and the United States, including United Nations-related events and discussions on sustainable development, youth engagement and social progress.",
    featured: "FEATURED ENGAGEMENTS",
    explore: "Explore Our International Engagement",
    globalLabel: "CONNECTING IDEAS ACROSS BORDERS",
    engagements: [
      {
        event: "UN 2023 Water Conference",
        city: "New York",
        country: "United States",
        code: "NYC",
      },
      {
        event: "UN SDG 7 Conference",
        city: "Bangkok",
        country: "Thailand",
        code: "BKK",
      },
      {
        event: "UN Women CSW68",
        city: "New York City",
        country: "United States",
        code: "NYC",
      },
    ],
  },
  mr: {
    eyebrow: "जागतिक सहभाग",
    heading1: "स्थानिक कृती.",
    heading2: "जागतिक दृष्टिकोन.",
    description:
      "मोरया सामाजिक प्रतिष्ठानने आशिया, युरोप आणि अमेरिकेतील आंतरराष्ट्रीय परिषदा व ज्ञान-विनिमय मंचांमध्ये सहभाग घेतला आहे. यामध्ये संयुक्त राष्ट्रांशी संबंधित कार्यक्रम तसेच शाश्वत विकास, युवा सहभाग आणि सामाजिक प्रगतीविषयी चर्चांचा समावेश आहे.",
    featured: "प्रमुख आंतरराष्ट्रीय सहभाग",
    explore: "आमचा आंतरराष्ट्रीय सहभाग पाहा",
    globalLabel: "सीमांपलीकडे विचारांची देवाणघेवाण",
    engagements: [
      {
        event: "UN 2023 Water Conference",
        city: "न्यूयॉर्क",
        country: "अमेरिका",
        code: "NYC",
      },
      {
        event: "UN SDG 7 Conference",
        city: "बँकॉक",
        country: "थायलंड",
        code: "BKK",
      },
      {
        event: "UN Women CSW68",
        city: "न्यूयॉर्क सिटी",
        country: "अमेरिका",
        code: "NYC",
      },
    ],
  },
};

export default function InternationalExposureSection() {
  const { language } = useLanguage();
  const t = translations[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="international-exposure"
      className="relative isolate overflow-hidden bg-[#192321] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-48 h-[450px] w-[450px] rounded-full bg-[#EF4444]/[0.07] blur-[100px]" />
        <div className="absolute -bottom-52 right-[-100px] h-[500px] w-[500px] rounded-full bg-[#477C65]/[0.12] blur-[110px]" />

        {/* SUBTLE GRID */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* DECORATIVE GLOBE */}
        <div className="absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.035] lg:block">
          <Globe2 size={570} strokeWidth={0.5} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* MAIN GRID */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* EYEBROW */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-9 bg-[#EF4444]" />

              <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-white/65 sm:text-[13px]">
                {t.eyebrow}
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-[38px] font-black leading-[1.12] tracking-tight sm:text-[48px] lg:text-[55px]">
              <span className="text-white">{t.heading1}</span>
              <br />
              <span className="text-[#FF7777]">{t.heading2}</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[630px] text-[16px] leading-[1.85] text-white/70 sm:text-[17px]">
              {t.description}
            </p>

            {/* CTA */}
            <Link
              to="/un-exposure"
              className="group mt-8 inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#EF4444] px-7 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#DC2626]"
            >
              {t.explore}

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* BOTTOM LABEL */}
            <div className="mt-9 flex items-center gap-3">
              <Globe2 size={19} className="text-white/40" />

              <span className="text-[11px] font-bold tracking-[0.14em] text-white/40">
                {t.globalLabel}
              </span>
            </div>
          </motion.div>

          {/* RIGHT - ENGAGEMENT TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            {/* TOP BAR */}
            <div className="mb-6 flex items-center justify-between border-b border-white/15 pb-5">
              <span className="text-[12px] font-extrabold tracking-[0.14em] text-white/70">
                {t.featured}
              </span>

              <Globe2 size={21} className="text-[#FF7777]" />
            </div>

            {/* TIMELINE */}
            <div className="relative pl-8 sm:pl-10">

              {/* VERTICAL LINE */}
              <div className="absolute bottom-8 left-[8px] top-7 w-px bg-gradient-to-b from-[#EF4444] via-white/25 to-transparent sm:left-[10px]" />

              {t.engagements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group relative border-b border-white/10 py-6 first:pt-2 last:border-b-0"
                >
                  {/* TIMELINE DOT */}
                  <span className="absolute -left-[31px] top-[33px] flex h-[17px] w-[17px] items-center justify-center rounded-full border border-[#EF4444] bg-[#192321] sm:-left-[39px]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#EF4444]" />
                  </span>

                  {/* CONTENT */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="mb-2 inline-block text-[11px] font-extrabold tracking-[0.15em] text-[#FF8B8B]">
                        {item.code} / 0{index + 1}
                      </span>

                      <h3 className="max-w-[430px] text-[20px] font-extrabold leading-[1.35] text-white transition-colors group-hover:text-[#FF8B8B] sm:text-[23px]">
                        {item.event}
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-[14px] text-white/55">
                        <MapPin size={15} />
                        <span>
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>

                    <MoveUpRight
                      size={19}
                      className="mt-3 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF8B8B]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM GLOBAL STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6 lg:mt-14"
        >
          <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold tracking-[0.12em] text-white/45 sm:gap-5">
            <span>ASIA</span>
            <span className="h-1 w-1 rounded-full bg-[#EF4444]" />
            <span>EUROPE</span>
            <span className="h-1 w-1 rounded-full bg-[#EF4444]" />
            <span>UNITED STATES</span>
          </div>

          <div className="flex items-center gap-2 text-[12px] font-semibold text-white/45">
            <span>LOCAL IMPACT</span>
            <ArrowRight size={15} className="text-[#EF4444]" />
            <span>GLOBAL LEARNING</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
