
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/Languagecontext";

export default function CommunityActionCTA() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "समाजपरिवर्तनात सहभागी व्हा",
        heading1: "परिवर्तन घडवणाऱ्या",
        heading2: "समुदायाचा भाग बना.",
        description:
          "अर्थपूर्ण सामाजिक परिवर्तनाची सुरुवात सहभागातून होते. शिक्षण, आरोग्य जनजागृती, पर्यावरण संवर्धन आणि शाश्वत समुदाय विकासासाठी आमच्यासोबत सहभागी व्हा.",
        contact: "आमच्या टीमशी संपर्क साधा",
        csr: "CSR सहकार्याच्या संधी पाहा",
      }
    : {
        eyebrow: "BE PART OF THE CHANGE",
        heading1: "Be Part of a Community",
        heading2: "That Creates Change.",
        description:
          "Meaningful social impact begins with participation. Join us in supporting education, healthcare awareness, environmental responsibility and sustainable community development.",
        contact: "Contact Our Team",
        csr: "Explore CSR Opportunities",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="community-action"
      className="relative isolate overflow-hidden border-t border-[#E2EBE3] bg-[#F8FBF8] py-11 sm:py-12 lg:py-14"
    >
      {/* SOFT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-[#F8FBF8] to-[#EEF6EF]" />

      <div className="pointer-events-none absolute -right-24 -top-28 h-[280px] w-[280px] rounded-full bg-[#DDEEE0]/55 blur-[85px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-[260px] w-[260px] rounded-full bg-[#FCE8E7]/40 blur-[85px]" />

      <div className="relative z-10 mx-auto max-w-[1000px] px-5 text-center sm:px-8">

        {/* EYEBROW */}
        <motion.div
          {...reveal()}
          className="mb-3 flex items-center justify-center gap-3"
        >
          <span className="h-[2px] w-7 bg-[#EF4444]" />

          <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E] sm:text-[11px]">
            {content.eyebrow}
          </span>

          <span className="h-[2px] w-7 bg-[#EF4444]" />
        </motion.div>

        {/* HEADING */}
        <motion.h2
          {...reveal(0.08)}
          className="text-[clamp(1.65rem,2.5vw,2.45rem)] font-extrabold leading-[1.25] tracking-[-0.035em] text-[#17392E]"
        >
          {content.heading1}{" "}
          <span className="text-[#EF4444]">
            {content.heading2}
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          {...reveal(0.15)}
          className="mx-auto mt-3 max-w-[720px] text-[13px] leading-[1.8] text-[#66746B] sm:text-[14px]"
        >
          {content.description}
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          {...reveal(0.22)}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/contact"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#EF4444] px-6 py-3 text-[12px] font-extrabold text-white transition-all duration-300 hover:bg-[#D93636] hover:shadow-[0_8px_22px_rgba(239,68,68,0.18)] sm:w-auto sm:text-[13px]"
          >
            {content.contact}

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            to="/csr"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#C9DCCF] bg-white px-6 py-3 text-[12px] font-extrabold text-[#17392E] transition-all duration-300 hover:border-[#006B2E] hover:bg-[#EDF6EF] sm:w-auto sm:text-[13px]"
          >
            {content.csr}

            <ArrowUpRight
              size={17}
              className="text-[#006B2E] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
