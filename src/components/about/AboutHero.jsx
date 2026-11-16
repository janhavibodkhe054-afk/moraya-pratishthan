
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const HERO_IMAGE = "/24.webp";

export default function AboutHero() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "मोरया सामाजिक प्रतिष्ठान",
        heading1: "तीन दशकांची समाजसेवा.",
        heading2: "प्रगतीची अखंड वाटचाल.",
        description:
          "१९९५ पासून शिक्षण, आरोग्यसेवा आणि सामाजिक विकासाच्या माध्यमातून समाज सक्षमीकरणासाठी कार्यरत.",
        home: "मुख्यपृष्ठ",
        about: "संस्थेची ओळख",
        button: "आमचे उपक्रम पाहा",
      }
    : {
        eyebrow: "ABOUT MORYA SAMAJIK PRATISHTHAN",
        heading1: "Three Decades of Service.",
        heading2: "A Journey of Impact.",
        description:
          "Empowering communities through education, healthcare and social development since 1995.",
        home: "Home",
        about: "About Organization",
        button: "Explore Our Programs",
      };

  return (
    <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#10291E] sm:min-h-[410px] lg:min-h-[430px]">

      {/* =====================================
          FULL BACKGROUND IMAGE
          CINEMATIC SLOW ZOOM
      ===================================== */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={
          reduceMotion ? false : { scale: 1.12, opacity: 0 }
        }
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  x: [0, -12, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* =====================================
          DARK OVERLAY FOR TEXT READABILITY
      ===================================== */}
      <div className="pointer-events-none absolute inset-0 bg-[#081C13]/55" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071B11]/45 via-[#0B2719]/40 to-[#0B2719]/15" />

      {/* SUBTLE MOVING LIGHT */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["-30%", "45%", "-30%"],
                opacity: [0.1, 0.23, 0.1],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-0 h-full w-[360px] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"
      />

      {/* RED ACCENT LINE */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="pointer-events-none absolute bottom-0 left-0 top-0 w-[4px] origin-top bg-[#EF4444]"
      />

      {/* =====================================
          HERO CONTENT
      ===================================== */}
      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">

        {/* BREADCRUMB */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-[13px] font-semibold text-white/70"
        >
          <Link
            to="/"
            className="transition-colors hover:text-white"
          >
            {content.home}
          </Link>

          <ChevronRight size={15} />

          <span className="text-white" aria-current="page">
            {content.about}
          </span>
        </motion.nav>

        <div className="max-w-[830px]">

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/85 sm:text-[12px]">
              {content.eyebrow}
            </span>
          </motion.div>

          {/* COMPACT HEADING */}
          <h1 className="text-[clamp(2rem,3.5vw,3.6rem)] font-black leading-[1.15] tracking-[-0.035em]">

            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-white"
            >
              {content.heading1}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-1 block text-[#FF6B6B]"
            >
              {content.heading2}
            </motion.span>
          </h1>

          {/* SHORT DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 max-w-[650px] text-[15px] leading-[1.8] text-white/85 sm:text-[17px]"
          >
            {content.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-7"
          >
            <Link
              to="/programs"
              className="group inline-flex items-center gap-3 rounded-full bg-[#EF4444] px-6 py-3 text-[14px] font-bold text-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DC2626]"
            >
              {content.button}

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM DECORATIVE LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-[#EF4444] via-[#EF4444]/40 to-transparent"
      />
    </section>
  );
}
