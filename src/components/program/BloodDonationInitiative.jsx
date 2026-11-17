
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Droplets,
  HeartHandshake,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/Languagecontext";

const IMAGE_URL =
  "/40.webp";

export default function BloodDonationInitiative() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "रक्तदान उपक्रम",
        heading1: "जीव वाचवण्यासाठी",
        heading2: "दर महिन्याची वचनबद्धता.",
        paragraph1:
          "मोरया सामाजिक प्रतिष्ठान ऐतिहासिक मोरया गोसावी मंदिर येथे दर महिन्याला रक्तदान शिबिरांचे आयोजन करते. या उपक्रमातून ऐच्छिक रक्तदान आणि समाजाचा सक्रिय सहभाग प्रोत्साहित केला जातो.",
        paragraph2:
          "योग्य रक्तसंकलन संस्थांशी समन्वय आणि समर्पित स्वयंसेवकांच्या सहकार्याने गरजू रुग्णांसाठी रक्ताची उपलब्धता वाढवण्यास हा उपक्रम मदत करतो.",
        cta: "आमचे आरोग्य उपक्रम जाणून घ्या",
        imageLabel: "रक्तदानातून जीवनाला आधार",
        monthly: "मासिक रक्तदान उपक्रम",
        location: "मोरया गोसावी मंदिर",
        participation: "स्वयंसेवी सहभाग",
      }
    : {
        eyebrow: "BLOOD DONATION INITIATIVE",
        heading1: "A Monthly Commitment",
        heading2: "to Saving Lives.",
        paragraph1:
          "Morya Samajik Pratishthan organizes monthly blood donation camps at the historic Morya Gosavi Mandir, encouraging voluntary blood donation and community participation.",
        paragraph2:
          "Through coordination with appropriate blood collection organizations and dedicated volunteers, the initiative supports the availability of donated blood for patients in need.",
        cta: "Know More About Our Health Initiatives",
        imageLabel: "Every Donation Makes a Difference",
        monthly: "Monthly Blood Donation Camps",
        location: "Morya Gosavi Mandir",
        participation: "Voluntary Participation",
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
      id="blood-donation"
      className="relative isolate overflow-hidden bg-[#F8FAF8] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#FCE8E7]/50 blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12">

        {/* LEFT - IMAGE */}
        <motion.div
          {...reveal(0)}
          className="relative"
        >
          <div className="group relative h-[310px] overflow-hidden rounded-[20px] bg-[#DCE5DE] sm:h-[390px] lg:h-[440px]">
            <img
              src={IMAGE_URL}
              alt="Illustrative photograph of a community blood donation camp"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* IMAGE GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101715]/85 via-transparent to-transparent" />

            {/* IMAGE BOTTOM LABEL */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EF4444] text-white">
                <Droplets size={22} />
              </div>

              <span className="text-[15px] font-extrabold leading-[1.4] text-white sm:text-[17px]">
                {content.imageLabel}
              </span>
            </div>
          </div>

          {/* MONTHLY BADGE */}
          <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-xl border border-[#F0D6D4] bg-white px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.09)] sm:right-6">
            <CalendarDays
              size={21}
              className="text-[#EF4444]"
            />

            <span className="text-[12px] font-extrabold text-[#17392E]">
              {content.monthly}
            </span>
          </div>
        </motion.div>

        {/* RIGHT - CONTENT */}
        <div className="pt-4 lg:pt-0">
          {/* EYEBROW */}
          <motion.div
            {...reveal(0.05)}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            {...reveal(0.1)}
            className="max-w-[650px] text-[clamp(1.9rem,2.8vw,2.85rem)] font-extrabold leading-[1.22] tracking-[-0.035em] text-[#17392E]"
          >
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h2>

          {/* CONTENT */}
          <motion.div
            {...reveal(0.2)}
            className="mt-6 max-w-[640px] space-y-4"
          >
            <p className="text-[14px] leading-[1.9] text-[#66746B] sm:text-[15px]">
              {content.paragraph1}
            </p>

            <p className="text-[14px] leading-[1.9] text-[#66746B] sm:text-[15px]">
              {content.paragraph2}
            </p>
          </motion.div>

          {/* KEY DETAILS */}
          <motion.div
            {...reveal(0.25)}
            className="mt-7 grid gap-4 border-y border-[#E0E8E1] py-5 sm:grid-cols-2"
          >
            <div className="flex items-center gap-3">
              <MapPin
                size={21}
                className="shrink-0 text-[#EF4444]"
              />

              <span className="text-[13px] font-bold text-[#17392E]">
                {content.location}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <HeartHandshake
                size={21}
                className="shrink-0 text-[#006B2E]"
              />

              <span className="text-[13px] font-bold text-[#17392E]">
                {content.participation}
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div {...reveal(0.3)} className="mt-7">
            <Link
              to="#healthcare-public-health"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("healthcare-public-health")
                  ?.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                  });
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-[#EF4444] px-6 py-3.5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#D93636] hover:shadow-[0_10px_25px_rgba(239,68,68,0.2)]"
            >
              {content.cta}

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
