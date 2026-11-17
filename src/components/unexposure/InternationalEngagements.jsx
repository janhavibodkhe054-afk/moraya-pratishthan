
import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  MapPin,
  ArrowUpRight,
  Earth,
  CalendarRange,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// INTERNATIONAL ENGAGEMENT DATA
// ==========================================

const engagements = [
  {
    number: "01",
    title: "Regional Conference of Youth Asia and the Pacific",
    location: "Philippines",
    flag: "🇵🇭",
  },
  {
    number: "02",
    title: "Youth for Environment in School Organization",
    location: "Baybay City, Philippines",
    flag: "🇵🇭",
  },
  {
    number: "03",
    title: "Fourth Meeting of the ICAPP Youth Wing",
    location: "Moscow, Russia",
    flag: "🇷🇺",
  },
  {
    number: "04",
    title: "UN SDG 7 Conference, UNCC",
    location: "Bangkok, Thailand",
    flag: "🇹🇭",
  },
  {
    number: "05",
    title: "Visit to the Parliament of Malaysia",
    location: "Malaysia",
    flag: "🇲🇾",
  },
  {
    number: "06",
    title: "UN 2023 Water Conference",
    location: "New York, USA",
    flag: "🇺🇸",
  },
  {
    number: "07",
    title: "UN Women CSW68",
    location: "New York City, USA",
    flag: "🇺🇸",
  },
];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "OUR INTERNATIONAL ENGAGEMENTS",
    heading1: "Participation",
    heading2: "Beyond Borders.",
    description:
      "Our international engagements reflect participation in conversations and events spanning youth development, sustainability, environment and social progress.",
    eventsLabel: "INTERNATIONAL EVENTS",
    locationLabel: "LOCATION",
    presence: "International Engagement",
    footer: "Local Commitment. Global Conversations.",
  },

  mr: {
    eyebrow: "आमचा आंतरराष्ट्रीय सहभाग",
    heading1: "सीमांपलीकडील",
    heading2: "सहभाग.",
    description:
      "युवक विकास, शाश्वतता, पर्यावरण आणि सामाजिक प्रगतीशी संबंधित आंतरराष्ट्रीय परिषदांमध्ये व उपक्रमांमध्ये सहभाग.",
    eventsLabel: "आंतरराष्ट्रीय कार्यक्रम",
    locationLabel: "ठिकाण",
    presence: "आंतरराष्ट्रीय सहभाग",
    footer: "स्थानिक बांधिलकी. जागतिक संवाद.",
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
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ==========================================
// INTERNATIONAL ENGAGEMENTS SECTION
// ==========================================

export default function InternationalEngagements() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const t = content[isMarathi ? "mr" : "en"];

  return (
    <section
      id="international-engagements"
      className="relative overflow-hidden bg-[#F8FAF8] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#EAF3EC] blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        <div className="grid items-start gap-12 lg:grid-cols-[35%_65%] lg:gap-10">

          {/* ==================================
              LEFT CONTENT
          ================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
            className="lg:sticky lg:top-28 lg:pr-6"
          >
            {/* EYEBROW */}
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[3px] w-9 bg-[#EF6666]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#176A3A] sm:text-[12px]">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              className="text-[35px] font-black leading-[1.15] tracking-tight text-[#17392E] sm:text-[44px] lg:text-[47px]"
            >
              {t.heading1}
              <br />
              <span className="text-[#EF6666]">
                {t.heading2}
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[420px] text-[14px] leading-[1.9] text-[#68766D] sm:text-[16px]"
            >
              {t.description}
            </motion.p>

            {/* GLOBAL PRESENCE */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex items-center gap-4 rounded-2xl border border-[#E2EBE4] bg-white p-5 shadow-[0_10px_30px_rgba(23,57,46,0.04)]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#176A3A]">
                <Globe2 size={27} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[28px] font-black leading-none text-[#17392E]">
                  07
                </p>

                <p className="mt-1 text-[12px] font-semibold text-[#718077]">
                  {t.presence}
                </p>
              </div>
            </motion.div>

            {/* BOTTOM LINE */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-3"
            >
              <Earth size={19} className="text-[#EF6666]" />

              <span className="text-[12px] font-bold text-[#17392E]">
                {t.footer}
              </span>
            </motion.div>
          </motion.div>

          {/* ==================================
              RIGHT EVENT DIRECTORY
          ================================== */}

          <div className="min-w-0 overflow-hidden rounded-[24px] border border-[#E1EAE3] bg-white shadow-[0_15px_50px_rgba(23,57,46,0.05)]">

            {/* DIRECTORY HEADER */}
            <div className="hidden grid-cols-[60px_minmax(0,1fr)_180px] gap-5 border-b border-[#E7EEE8] bg-[#F0F6F1] px-7 py-5 sm:grid">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#176A3A]">
                NO.
              </span>

              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#176A3A]">
                {t.eventsLabel}
              </span>

              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#176A3A]">
                {t.locationLabel}
              </span>
            </div>

            {/* EVENT ROWS */}
            {engagements.map((event, index) => (
              <motion.article
                key={event.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.07, 0.3),
                }}
                className="group relative border-b border-[#E9EFEB] px-5 py-5 transition-colors duration-300 last:border-b-0 hover:bg-[#F7FAF7] sm:px-7 sm:py-6"
              >
                {/* LEFT HOVER ACCENT */}
                <div className="absolute bottom-0 left-0 top-0 w-[3px] scale-y-0 bg-[#EF6666] transition-transform duration-300 group-hover:scale-y-100" />

                <div className="grid items-center gap-3 sm:grid-cols-[60px_minmax(0,1fr)_180px] sm:gap-5">

                  {/* NUMBER */}
                  <span className="text-[13px] font-black text-[#EF6666]">
                    {event.number}
                  </span>

                  {/* EVENT NAME */}
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-extrabold leading-[1.5] text-[#17392E] sm:text-[16px]">
                      {event.title}
                    </h3>
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[22px]"
                      aria-hidden="true"
                    >
                      {event.flag}
                    </span>

                    <span className="text-[12px] font-medium leading-snug text-[#68766D] sm:text-[13px]">
                      {event.location}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
