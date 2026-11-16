
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  ArrowUpRight,
  BookOpenCheck,
  Stethoscope,
  HeartPulse,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const colleges = [
  {
    id: "01",
    Icon: Stethoscope,
    en: {
      name: "Loknete Aamdaar Laxman Jagtap Paramedical College",
      description:
        "Located in New Sangvi, Pune, the college is associated with Morya Samajik Pratishthan's mission of expanding access to practical, career-oriented paramedical education.",
      location: "New Sangvi, Pune",
    },
    mr: {
      name: "लोकनेते आमदार लक्ष्मण जगताप पॅरामेडिकल कॉलेज",
      description:
        "नवी सांगवी, पुणे येथे स्थित हे महाविद्यालय प्रात्यक्षिकाधारित आणि करिअर-केंद्रित पॅरामेडिकल शिक्षणाच्या संधी उपलब्ध करून देण्याच्या संस्थेच्या उद्दिष्टाशी संलग्न आहे.",
      location: "नवी सांगवी, पुणे",
    },
  },
  {
    id: "02",
    Icon: BookOpenCheck,
    en: {
      name: "Kailasabhau Chandgude Paramedical College",
      description:
        "An associated educational institution supporting skill-based learning and career development in paramedical and healthcare-related disciplines.",
      location: "",
    },
    mr: {
      name: "कैलासभाऊ चांदगुडे पॅरामेडिकल कॉलेज",
      description:
        "पॅरामेडिकल आणि आरोग्यसेवा क्षेत्रातील कौशल्याधारित शिक्षण व करिअर विकासाला प्रोत्साहन देणारी संलग्न शैक्षणिक संस्था.",
      location: "",
    },
  },
  {
    id: "03",
    Icon: HeartPulse,
    en: {
      name: "Shri Morya Institute of Paramedical Health Science",
      description:
        "Located in Chinchwad, Pune, the institute focuses on practical healthcare education, professional development and employment readiness.",
      location: "Chinchwad, Pune",
    },
    mr: {
      name: "श्री मोरया इन्स्टिट्यूट ऑफ पॅरामेडिकल हेल्थ सायन्स",
      description:
        "चिंचवड, पुणे येथे स्थित ही संस्था प्रात्यक्षिकाधारित आरोग्य शिक्षण, व्यावसायिक विकास आणि रोजगारासाठी आवश्यक कौशल्यांवर भर देते.",
      location: "चिंचवड, पुणे",
    },
  },
];

export default function OurColleges() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमच्या शैक्षणिक संस्था",
        heading1: "आमची तीन",
        heading2: "महाविद्यालये.",
        subtitle:
          "कौशल्याधारित शिक्षण आणि व्यावसायिक प्रगतीसाठी कार्यरत संलग्न शैक्षणिक संस्था.",
        locationLabel: "ठिकाण",
        footer: "कौशल्याधारित शिक्षणातून करिअरच्या नव्या संधी.",
      }
    : {
        eyebrow: "OUR EDUCATIONAL INSTITUTIONS",
        heading1: "Our Three",
        heading2: "Colleges.",
        subtitle:
          "Associated educational institutions supporting practical learning and career development.",
        locationLabel: "Location",
        footer: "Supporting career-focused learning through skill-based education.",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="our-colleges"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* SOFT BACKGROUND ACCENT */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[350px] w-[350px] rounded-full bg-[#EAF4EC]/50 blur-[90px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <div className="mb-11 grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-end">

          <div>
            <motion.div
              {...reveal(0)}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
                {content.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              {...reveal(0.1)}
              className="text-[clamp(2rem,3vw,3.1rem)] font-black leading-[1.15] tracking-[-0.035em] text-[#17392E]"
            >
              {content.heading1}{" "}
              <span className="text-[#EF4444]">
                {content.heading2}
              </span>
            </motion.h2>
          </div>

          <motion.p
            {...reveal(0.2)}
            className="max-w-[440px] text-[15px] leading-[1.8] text-[#66746B] md:pb-1"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* EDITORIAL COLLEGE DIRECTORY */}
        <div className="overflow-hidden rounded-[24px] border border-[#E0E9E2] bg-[#FAFCFA]">

          {colleges.map((college, index) => {
            const item = isMarathi ? college.mr : college.en;
            const Icon = college.Icon;

            return (
              <motion.article
                key={`${language}-${college.id}`}
                {...reveal(index * 0.1)}
                className={`group relative overflow-hidden bg-transparent transition-colors duration-500 hover:bg-[#F0F7F1] ${
                  index !== colleges.length - 1
                    ? "border-b border-[#E0E9E2]"
                    : ""
                }`}
              >
                {/* HOVER LEFT ACCENT */}
                <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#EF4444] transition-transform duration-500 group-hover:scale-y-100" />

                <div className="grid gap-5 px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-[100px_1fr_210px] lg:items-center lg:gap-9 lg:px-10">

                  {/* NUMBER + ICON */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                    <span className="text-[45px] font-black leading-none tracking-[-0.07em] text-[#17392E]/15 transition-colors duration-500 group-hover:text-[#EF4444]/25 sm:text-[55px]">
                      {college.id}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DCE9DF] bg-white text-[#006B2E] transition-all duration-300 group-hover:border-[#006B2E] group-hover:bg-[#006B2E] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="max-w-[720px]">
                    <h3 className="text-[20px] font-extrabold leading-[1.35] tracking-[-0.025em] text-[#17392E] transition-colors duration-300 group-hover:text-[#006B2E] sm:text-[23px]">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-[14px] leading-[1.85] text-[#66746B] sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex items-center justify-between gap-4 border-t border-[#E1EAE3] pt-4 lg:justify-end lg:border-t-0 lg:pt-0">

                    {item.location ? (
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={17}
                          className="shrink-0 text-[#EF4444]"
                        />

                        <span className="text-[13px] font-semibold text-[#17392E]">
                          {item.location}
                        </span>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DCE8DE] bg-white text-[#17392E] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <motion.div
          {...reveal(0.2)}
          className="mt-7 flex items-center gap-3"
        >
          <GraduationCap
            size={19}
            className="text-[#006B2E]"
          />

          <p className="text-[13px] font-medium text-[#66746B]">
            {content.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
