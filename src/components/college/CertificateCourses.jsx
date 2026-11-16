
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Scissors,
  Droplets,
  Smile,
  Accessibility,
  UserRoundCheck,
  HeartHandshake,
  Activity,
  BookOpen,
  HardHat,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const courses = [
  {
    number: "01",
    Icon: Scissors,
    en: "Certificate in Operation Theatre Technician",
    mr: "ऑपरेशन थिएटर टेक्निशियन प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Introduction to operation theatre procedures, equipment and patient care support.",
    descMr:
      "ऑपरेशन थिएटर प्रक्रिया, उपकरणे आणि रुग्णसेवा सहाय्याची ओळख.",
  },
  {
    number: "02",
    Icon: Droplets,
    en: "Certificate in Dialysis Technician",
    mr: "डायलिसिस टेक्निशियन प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Fundamentals of dialysis procedures, equipment handling and patient support.",
    descMr:
      "डायलिसिस प्रक्रिया, उपकरण हाताळणी आणि रुग्णसेवेची मूलभूत माहिती.",
  },
  {
    number: "03",
    Icon: Smile,
    en: "Certificate in Dental Assistant Technician",
    mr: "डेंटल असिस्टंट टेक्निशियन प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Basic dental clinic assistance, instrument handling and hygiene practices.",
    descMr:
      "दंतचिकित्सा सहाय्य, उपकरण हाताळणी आणि स्वच्छतेच्या पद्धती.",
  },
  {
    number: "04",
    Icon: Accessibility,
    en: "Certificate in Prosthetic & Orthotic Technician",
    mr: "प्रोस्थेटिक आणि ऑर्थोटिक टेक्निशियन प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Introduction to prosthetic and orthotic devices and technical support.",
    descMr:
      "प्रोस्थेटिक व ऑर्थोटिक उपकरणे आणि तांत्रिक सहाय्याची ओळख.",
  },
  {
    number: "05",
    Icon: UserRoundCheck,
    en: "Certificate in GNM Assistant Technician",
    mr: "GNM असिस्टंट टेक्निशियन प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Foundational nursing assistance and patient care support skills.",
    descMr:
      "मूलभूत नर्सिंग सहाय्य आणि रुग्णसेवा कौशल्यांची ओळख.",
  },
  {
    number: "06",
    Icon: HeartHandshake,
    en: "Certificate in Nursing Care",
    mr: "नर्सिंग केअर प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Essential patient care, hygiene and everyday nursing support.",
    descMr:
      "रुग्णांची मूलभूत काळजी, स्वच्छता आणि नर्सिंग सहाय्य.",
  },
  {
    number: "07",
    Icon: Activity,
    en: "Certificate in ICU Technician",
    mr: "ICU टेक्निशियन प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Introduction to ICU equipment, monitoring and critical care assistance.",
    descMr:
      "ICU उपकरणे, रुग्ण निरीक्षण आणि अतिदक्षता सहाय्याची ओळख.",
  },
  {
    number: "08",
    Icon: BookOpen,
    en: "Certificate in Pre-School Teachers Training",
    mr: "प्री-स्कूल टीचर्स ट्रेनिंग प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Early childhood learning, classroom activities and teaching fundamentals.",
    descMr:
      "बालशिक्षण, वर्गातील उपक्रम आणि अध्यापनाच्या मूलभूत पद्धती.",
  },
  {
    number: "09",
    Icon: HardHat,
    en: "Certificate in Construction Supervisor",
    mr: "कन्स्ट्रक्शन सुपरवायझर प्रमाणपत्र अभ्यासक्रम",
    descEn:
      "Basics of site supervision, construction processes and workplace safety.",
    descMr:
      "बांधकाम स्थळ पर्यवेक्षण, प्रक्रिया आणि कामाच्या ठिकाणची सुरक्षितता.",
  },
];

export default function CertificateCourses() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "प्रमाणपत्र अभ्यासक्रम",
        heading1: "व्यावहारिक कौशल्यांसाठी",
        heading2: "प्रमाणपत्र अभ्यासक्रम.",
        description:
          "प्रात्यक्षिक शिक्षण आणि कौशल्याधारित प्रशिक्षणातून व्यावसायिक विकासासाठी विविध प्रमाणपत्र अभ्यासक्रम.",
        footer: "करिअर-केंद्रित कौशल्य शिक्षण",
      }
    : {
        eyebrow: "CERTIFICATE COURSES",
        heading1: "Certificate Programs for",
        heading2: "Practical Skill Development.",
        description:
          "Explore skill-focused certificate programs designed to introduce practical knowledge across healthcare and vocational disciplines.",
        footer: "Career-focused skill education",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="certificate-courses"
      className="relative isolate overflow-hidden bg-[#102B22] py-14 text-white sm:py-16 lg:py-20"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#173D30] via-[#102B22] to-[#091D17]" />

      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#2B7750]/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <div className="mb-9 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <motion.div
              {...reveal()}
              className="mb-3 flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#B4DFC2]">
                {content.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              {...reveal(0.1)}
              className="text-[clamp(1.9rem,3vw,3rem)] font-black leading-[1.18] tracking-[-0.035em]"
            >
              {content.heading1}{" "}
              <span className="text-[#FF6B68]">
                {content.heading2}
              </span>
            </motion.h2>
          </div>

          <motion.p
            {...reveal(0.15)}
            className="max-w-[480px] text-[14px] leading-[1.8] text-[#B9CCC1]"
          >
            {content.description}
          </motion.p>
        </div>

        {/* COMPACT COURSE GRID */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.Icon;

            return (
              <motion.article
                key={course.number}
                {...reveal((index % 3) * 0.06)}
                className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#E4ECE5] bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D6C0] hover:shadow-[0_16px_35px_rgba(0,0,0,0.14)] sm:p-6"
              >
                {/* TOP ROW */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5ED] text-[#006B2E] transition-colors duration-300 group-hover:bg-[#006B2E] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="text-[25px] font-black tracking-[-0.05em] text-[#17392E]/15">
                    {course.number}
                  </span>
                </div>

                {/* COURSE NAME */}
                <h3 className="text-[16px] font-extrabold leading-[1.45] tracking-[-0.015em] text-[#17392E] sm:text-[17px]">
                  {isMarathi ? course.mr : course.en}
                </h3>

                {/* SHORT DESCRIPTION */}
                <p className="mt-2.5 flex-1 text-[12.5px] leading-[1.7] text-[#728077]">
                  {isMarathi ? course.descMr : course.descEn}
                </p>

                {/* BOTTOM ACCENT */}
                <div className="mt-4 h-px w-full bg-[#E7EEE8]" />

                <div className="mt-3 h-[3px] w-7 rounded-full bg-[#006B2E] transition-all duration-300 group-hover:w-14 group-hover:bg-[#EF4444]" />
              </motion.article>
            );
          })}
        </div>

        {/* FOOTER */}
        <motion.div
          {...reveal(0.15)}
          className="mt-7 flex items-center gap-3"
        >
          <GraduationCap size={18} className="text-[#A6E0B8]" />

          <p className="text-[12px] font-medium text-[#B9CCC1]">
            {content.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
