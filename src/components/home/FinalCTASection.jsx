
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const translations = {
  en: {
    eyebrow: "BE PART OF THE CHANGE",
    heading1: "Together, We Can Create",
    heading2: "Meaningful Change.",
    description:
      "Whether you are a student seeking opportunities, an organization looking for a CSR partner, or an individual passionate about social impact, be part of our journey.",
    student: "Student Enquiry",
    partner: "Partner With Us",
  },
  mr: {
    eyebrow: "परिवर्तनाचा भाग व्हा",
    heading1: "एकत्र येऊया,",
    heading2: "अर्थपूर्ण परिवर्तन घडवूया.",
    description:
      "तुम्ही संधी शोधणारे विद्यार्थी असाल, CSR भागीदार शोधणारी संस्था असाल किंवा सामाजिक परिवर्तनासाठी योगदान देऊ इच्छिणारी व्यक्ती असाल, आमच्या प्रवासात सहभागी व्हा.",
    student: "विद्यार्थी चौकशी",
    partner: "आमच्यासोबत भागीदारी करा",
  },
};

export default function FinalCTASection() {
  const { language } = useLanguage();
  const t = translations[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#F8F9F7] py-10 sm:py-12 lg:py-14"
    >
      {/* SUBTLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-32 h-[320px] w-[320px] rounded-full bg-[#EF4444]/[0.045] blur-[65px]" />
        <div className="absolute -bottom-32 left-0 h-[250px] w-[250px] rounded-full bg-[#006B2E]/[0.035] blur-[65px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* EYEBROW */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#69736D] sm:text-[12px]">
                {t.eyebrow}
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-[31px] font-black leading-[1.15] tracking-tight text-[#252B2D] sm:text-[39px] lg:text-[43px]">
              {t.heading1}
              <br />
              <span className="text-[#EF4444]">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[760px] text-[15px] leading-[1.75] text-[#65716A] sm:text-[16px]">
              {t.description}
            </p>
          </motion.div>

          {/* RIGHT CTA AREA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end"
          >
            {/* STUDENT BUTTON */}
            <Link
              to="/enquiry"
              className="group inline-flex min-h-[51px] w-full items-center justify-between gap-5 rounded-xl bg-[#EF4444] px-6 text-[15px] font-extrabold text-white transition-all duration-300 hover:bg-[#DC2626] sm:w-auto lg:w-[270px]"
            >
              <span className="flex items-center gap-3">
                <GraduationCap size={20} strokeWidth={1.8} />
                {t.student}
              </span>

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* PARTNER BUTTON */}
            <Link
              to="/csr"
              className="group inline-flex min-h-[51px] w-full items-center justify-between gap-5 rounded-xl border border-[#DCE3DD] bg-white px-6 text-[15px] font-extrabold text-[#252B2D] transition-all duration-300 hover:border-[#EF4444] hover:text-[#EF4444] sm:w-auto lg:w-[270px]"
            >
              <span className="flex items-center gap-3">
                <Handshake size={20} strokeWidth={1.8} />
                {t.partner}
              </span>

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
