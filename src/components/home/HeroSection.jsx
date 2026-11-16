
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BriefcaseBusiness,
  HeartPulse,
  CalendarDays,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// HERO SLIDER IMAGES
// ==========================================

const slides = [
  {
    image: "/hero.webp",
    position: "center",
  },
  {
    image: "/43.webp",
    position: "center",
  },
  {
    image: "/40.webp",
    position: "center",
  },
];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "MORYA SAMAJIK PRATISHTHAN | EST. 1995",

    heading1: "Empowering People.",
    heading2: "Transforming Communities.",

    identity: "Education • Skills • Empowerment",

    description:
      "Creating opportunities through paramedical education, skill development and community initiatives.",

    explore: "Explore Programs",
    enquiry: "Student Enquiry",

    stats: [
      { value: "6,945+", label: "Students Trained" },
      { value: "3,470+", label: "Students Placed" },
      { value: "83+", label: "Hospital Affiliations" },
      { value: "31+", label: "Years of Service" },
    ],
  },

  mr: {
    eyebrow: "मोरया सामाजिक प्रतिष्ठान | स्थापना १९९५",

    heading1: "व्यक्तींचे सक्षमीकरण.",
    heading2: "समाजाचे परिवर्तन.",

    identity: "शिक्षण • कौशल्य • सक्षमीकरण",

    description:
      "पॅरामेडिकल शिक्षण, कौशल्य विकास आणि सामाजिक उपक्रमांतून उज्ज्वल भविष्यासाठी संधी.",

    explore: "आमचे उपक्रम",
    enquiry: "विद्यार्थी चौकशी",

    stats: [
      { value: "६,९४५+", label: "प्रशिक्षित विद्यार्थी" },
      { value: "३,४७०+", label: "रोजगार मिळालेले विद्यार्थी" },
      { value: "८३+", label: "संलग्न रुग्णालये" },
      { value: "३१+", label: "सेवेची वर्षे" },
    ],
  },
};

// ==========================================
// STATISTICS ICONS
// ==========================================

const statIcons = [
  GraduationCap,
  BriefcaseBusiness,
  HeartPulse,
  CalendarDays,
];

// ==========================================
// WHATSAPP ENQUIRY
// ==========================================

const WHATSAPP_NUMBER = "919422036639";

const getWhatsAppLink = (isMarathi) => {
  const message = isMarathi
    ? "नमस्कार, मला मोरया सामाजिक प्रतिष्ठानच्या अभ्यासक्रम आणि प्रवेश प्रक्रियेबद्दल माहिती हवी आहे."
    : "Hello, I would like to enquire about courses and admissions at Morya Samajik Pratishthan.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
};

// ==========================================
// MAIN HERO SECTION
// ==========================================

export default function HeroSection() {
  const { language } = useLanguage();

  const isMarathi = language === "mr";
  const t = content[isMarathi ? "mr" : "en"];

  const [activeSlide, setActiveSlide] = useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // MANUAL SLIDER
  const changeSlide = (direction) => {
    setActiveSlide(
      (prev) =>
        (prev + direction + slides.length) % slides.length
    );
  };

  return (
    <section className="w-full bg-white">

      {/* ======================================
          HERO IMAGE FRAME
      ====================================== */}

      <div className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#1E2425] sm:min-h-[650px] lg:min-h-[700px] xl:min-h-[700px]">

        {/* ======================================
            BACKGROUND IMAGE SLIDER
        ====================================== */}

        <div className="absolute inset-0 -z-20">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeSlide}
              initial={{
                opacity: 0,
                scale: 1.035,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                opacity: {
                  duration: 1.1,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 6,
                  ease: "linear",
                },
              }}
              className="absolute inset-0"
            >
              <img
                src={slides[activeSlide].image}
                alt="Morya Samajik Pratishthan education and community activities"
                fetchPriority={
                  activeSlide === 0 ? "high" : "auto"
                }
                className="h-full w-full object-cover"
                style={{
                  objectPosition:
                    slides[activeSlide].position,
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ======================================
            BALANCED DARK OVERLAY
            TEXT CLEAR + IMAGE VISIBLE
        ====================================== */}

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#101A16]/75 via-[#101A16]/30 to-transparent" />

        {/* SUBTLE BOTTOM SHADOW */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

        {/* ======================================
            HERO CONTENT
        ====================================== */}

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:px-14">

          {/* LEFT CONTENT */}
          <div className="max-w-[620px]">

            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[3px] w-8 shrink-0 rounded-full bg-[#EF6666]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/95 sm:text-[11px]">
                {t.eyebrow}
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              key={`${language}-heading`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.08,
              }}
              className="text-[40px] font-black leading-[1.16] tracking-tight text-white sm:text-[53px] lg:text-[59px]"
            >
              {t.heading1}

              <br />

              <span className="text-[#FFB1A8]">
                {t.heading2}
              </span>
            </motion.h1>

            {/* IDENTITY */}
            <motion.p
              key={`${language}-identity`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.17,
              }}
              className="mt-5 text-[16px] font-bold leading-relaxed text-white sm:text-[15px]"
            >
              {t.identity}
            </motion.p>

            {/* SHORT DESCRIPTION */}
            <motion.p
              key={`${language}-description`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.24,
              }}
              className="mt-3 max-w-[490px] text-[16px] leading-[1.8] text-white sm:text-[17px]"
            >
              {t.description}
            </motion.p>

            {/* ==================================
                CTA BUTTONS
            ================================== */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.3,
              }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >

              {/* EXPLORE PROGRAMS */}
              <Link
                to="/programs"
                className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#EF6666] px-6 text-[13px] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E84F4F] hover:shadow-xl"
              >
                {t.explore}

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              {/* WHATSAPP STUDENT ENQUIRY */}
              <a
                href={getWhatsAppLink(isMarathi)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/65 bg-white/10 px-6 text-[13px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#252525]"
              >
                {t.enquiry}

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ======================================
            SLIDER DOTS
        ====================================== */}

        <div className="absolute bottom-7 left-5 z-20 flex items-center gap-2 sm:left-8 lg:left-14">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={
                activeSlide === index ? "true" : undefined
              }
              className={`h-[4px] rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-10 bg-[#FF8585]"
                  : "w-5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* ======================================
            SLIDER ARROWS
        ====================================== */}

        <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 sm:right-8 lg:right-14">

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/15 text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-[#222]"
          >
            <ChevronLeft size={20} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={() => changeSlide(1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/15 text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-[#222]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ======================================
          IMPACT STATISTICS
      ====================================== */}

      <div className="border-b border-gray-100 bg-[#F8F9F8]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-6 px-5 py-8 sm:px-8 lg:grid-cols-4 lg:px-14 lg:py-10">

          {t.stats.map((stat, index) => {
            const Icon = statIcons[index];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={`flex items-center gap-3 px-2 sm:px-4 ${
                  index > 0
                    ? "lg:border-l lg:border-gray-200"
                    : ""
                }`}
              >

                {/* ICON */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#50645A] shadow-sm">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* STAT VALUE & LABEL */}
                <div>
                  <p className="text-[25px] font-black leading-tight tracking-tight text-[#202525] sm:text-[31px]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold text-[#707777] sm:text-[12px]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
