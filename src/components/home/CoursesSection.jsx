
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Stethoscope,
  Activity,
  Microscope,
  Accessibility,
  Smile,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const courseIcons = [
  Stethoscope,
  Activity,
  Microscope,
  Accessibility,
  Smile,
  HeartHandshake,
];

const translations = {
  en: {
    eyebrow: "COURSES & CAREER OPPORTUNITIES",
    heading1: "Learn Practical Skills.",
    heading2: "Prepare for Real Careers.",
    description:
      "Our skill development programs combine classroom learning, practical training, assessments and career guidance to help students prepare for professional opportunities in healthcare and other sectors.",
    featured: "FEATURED PROGRAMS",
    count: "06 COURSES",
    viewAll: "View All Courses",
    enquire: "Enquire Now",
    bottomLine: "Learn. Practice. Build Your Future.",
    courses: [
      "Operation Theatre Technician",
      "Dialysis Technician",
      "Medical Lab Technology",
      "Physiotherapy",
      "Dental Assistant Technician",
      "GNM Assistant Technician",
    ],
  },
  mr: {
    eyebrow: "अभ्यासक्रम आणि करिअर संधी",
    heading1: "व्यावहारिक कौशल्ये शिका.",
    heading2: "उज्ज्वल करिअरसाठी सज्ज व्हा.",
    description:
      "आमचे कौशल्य विकास अभ्यासक्रम वर्गातील शिक्षण, प्रत्यक्ष प्रशिक्षण, मूल्यमापन आणि करिअर मार्गदर्शन यांची सांगड घालतात. यामुळे विद्यार्थ्यांना आरोग्यसेवा आणि इतर क्षेत्रांतील व्यावसायिक संधींसाठी तयारी करता येते.",
    featured: "प्रमुख अभ्यासक्रम",
    count: "०६ अभ्यासक्रम",
    viewAll: "सर्व अभ्यासक्रम पाहा",
    enquire: "चौकशी करा",
    bottomLine: "शिका. सराव करा. भविष्य घडवा.",
    courses: [
      "ऑपरेशन थिएटर टेक्निशियन",
      "डायलिसिस टेक्निशियन",
      "मेडिकल लॅब टेक्नॉलॉजी",
      "फिजिओथेरपी",
      "डेंटल असिस्टंट टेक्निशियन",
      "GNM असिस्टंट टेक्निशियन",
    ],
  },
};

export default function CoursesSection() {
  const { language } = useLanguage();
  const t = translations[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#FAFAF9] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* TOP EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-[3px] w-8 bg-[#EF4444]" />
          <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#68716C]">
            {t.eyebrow}
          </span>
        </motion.div>

        {/* MAIN SPLIT LAYOUT */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[34px] font-black leading-[1.14] tracking-tight text-[#252B2D] sm:text-[42px] lg:text-[46px]">
              {t.heading1}
              <br />
              <span className="text-[#EF4444]">{t.heading2}</span>
            </h2>

            <p className="mt-5 max-w-[510px] text-[16px] leading-[1.8] text-[#66716B]">
              {t.description}
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/programs"
                className="group inline-flex min-h-[47px] items-center gap-2 rounded-full bg-[#252B2D] px-6 text-[14px] font-bold text-white transition-all hover:bg-[#EF4444]"
              >
                {t.viewAll}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex min-h-[47px] items-center gap-2 rounded-full border border-[#D7DDD8] bg-white px-6 text-[14px] font-bold text-[#252B2D] transition-all hover:border-[#EF4444] hover:text-[#EF4444]"
              >
                {t.enquire}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COURSE MATRIX */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[18px] border border-[#E4E8E4] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.035)]"
          >
            {/* MATRIX HEADER */}
            <div className="flex items-center justify-between border-b border-[#E8EBE8] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <GraduationCap size={20} className="text-[#EF4444]" />
                <span className="text-[12px] font-extrabold tracking-[0.1em] text-[#303A33]">
                  {t.featured}
                </span>
              </div>

              <span className="text-[11px] font-extrabold text-[#EF4444]">
                {t.count}
              </span>
            </div>

            {/* 2 COLUMN GRID */}
            <div className="grid sm:grid-cols-2">
              {t.courses.map((course, index) => {
                const Icon = courseIcons[index];

                return (
                  <Link
                    to="/programs"
                    key={index}
                    className={`group relative flex min-h-[108px] items-center gap-3 border-b border-[#EDF0ED] px-4 py-4 transition-colors duration-300 hover:bg-[#FFF6F6] sm:px-5 ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-[#EDF0ED]"
                        : ""
                    }`}
                  >
                    {/* NUMBER */}
                    <span className="absolute right-3 top-3 text-[10px] font-bold text-[#B6BFB8]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* ICON */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4F6F3] text-[#66796B] transition-all group-hover:bg-[#EF4444] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.7} />
                    </span>

                    {/* TITLE */}
                    <span className="min-w-0 flex-1 pr-2 text-[15px] font-bold leading-[1.4] text-[#303A34] sm:text-[16px]">
                      {course}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="mt-auto shrink-0 text-[#A6B0A8] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EF4444]"
                    />
                  </Link>
                );
              })}
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between gap-3 bg-[#F6F8F5] px-5 py-3 sm:px-6">
              <span className="text-[12px] font-semibold text-[#69766C]">
                {t.bottomLine}
              </span>

              <ArrowRight size={17} className="text-[#EF4444]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
