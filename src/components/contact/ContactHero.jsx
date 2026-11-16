
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/Languagecontext";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2000&q=85";

export default function ContactHero() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमच्याशी संपर्क साधा",
        heading1: "चला, एकत्र येऊया",
        heading2: "आणि सकारात्मक बदल घडवूया.",
        description:
          "विद्यार्थी प्रवेशासंबंधी चौकशी, CSR भागीदारी प्रस्ताव, संस्थात्मक सहकार्य किंवा कोणत्याही सामान्य प्रश्नासाठी आमच्या टीमशी संपर्क साधा. आपल्याशी संवाद साधण्यासाठी आम्ही उत्सुक आहोत.",
      }
    : {
        eyebrow: "CONTACT US",
        heading1: "Let's Connect and",
        heading2: "Create Positive Change.",
        description:
          "Whether you have a student admission enquiry, CSR partnership proposal, institutional collaboration request or general question, our team looks forward to hearing from you.",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="contact-hero"
      className="relative isolate flex min-h-[320px] items-center overflow-hidden bg-[#17392E] py-16 text-white sm:min-h-[360px] lg:min-h-[390px]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Community volunteers working together"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </div>

      {/* DARK GREEN OVERLAY */}
      <div className="absolute inset-0 bg-[#102D24]/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#10291F]/95 via-[#17392E]/80 to-[#10291F]/75" />

      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute -right-28 -top-28 h-[350px] w-[350px] rounded-full bg-[#EF4444]/10 blur-[100px]" />

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#EF4444] via-[#006B2E] to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-5 text-center sm:px-8">

        {/* EYEBROW */}
        <motion.div
          {...reveal(0)}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="h-[2px] w-7 bg-[#EF4444]" />

          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#D5F2DF]">
            {content.eyebrow}
          </span>

          <span className="h-[2px] w-7 bg-[#EF4444]" />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          {...reveal(0.1)}
          className="mx-auto max-w-[850px] text-[clamp(2rem,3.3vw,3.25rem)] font-extrabold leading-[1.2] tracking-[-0.035em]"
        >
          {content.heading1}{" "}
          <span className="text-[#FF8179]">
            {content.heading2}
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-5 max-w-[760px] text-[14px] leading-[1.85] text-[#E1EAE4] sm:text-[15px]"
        >
          {content.description}
        </motion.p>
      </div>
    </section>
  );
}
