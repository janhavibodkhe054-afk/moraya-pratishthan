
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

// Replace these illustrative photos with actual college images.
const colleges = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85",
    link: "/colleges/laxman-jagtap",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f9?auto=format&fit=crop&w=1400&q=85",
    link: "/colleges/kailasabhau-chandgude",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85",
    link: "/colleges/shri-morya",
  },
];

const content = {
  en: {
    eyebrow: "OUR EDUCATIONAL INSTITUTIONS",
    heading1: "Building Careers Through",
    heading2: "Practical Education.",
    description:
      "Through three associated educational institutions, Morya Samajik Pratishthan provides career-oriented paramedical and vocational education focused on practical knowledge, professional skills and employment readiness.",
    explore: "Explore Institution",
    viewAll: "View All Institutions",
    established: "3 ASSOCIATED INSTITUTIONS",
    colleges: [
      {
        name: "Loknete Aamdaar Laxman Jagtap Paramedical College",
        detail: "New Sangvi, Pune",
        type: "Paramedical Education",
      },
      {
        name: "Kailasabhau Chandgude Paramedical College",
        detail: "Paramedical & Vocational Education",
        type: "Career-Focused Training",
      },
      {
        name: "Shri Morya Institute of Paramedical Health Science",
        detail: "Chinchwad, Pune",
        type: "Healthcare Education",
      },
    ],
  },

  mr: {
    eyebrow: "आमच्या शैक्षणिक संस्था",
    heading1: "व्यावहारिक शिक्षणातून",
    heading2: "करिअर घडवण्याची संधी.",
    description:
      "मोरया सामाजिक प्रतिष्ठान आपल्या तीन संलग्न शैक्षणिक संस्थांच्या माध्यमातून रोजगाराभिमुख पॅरामेडिकल आणि व्यावसायिक शिक्षण देते. व्यावहारिक ज्ञान, व्यावसायिक कौशल्ये आणि रोजगारासाठी आवश्यक तयारी यावर विशेष भर दिला जातो.",
    explore: "संस्थेविषयी जाणून घ्या",
    viewAll: "सर्व संस्था पाहा",
    established: "३ संलग्न शैक्षणिक संस्था",
    colleges: [
      {
        name: "लोकनेते आमदार लक्ष्मण जगताप पॅरामेडिकल कॉलेज",
        detail: "नवी सांगवी, पुणे",
        type: "पॅरामेडिकल शिक्षण",
      },
      {
        name: "कैलासभाऊ चांदगुडे पॅरामेडिकल कॉलेज",
        detail: "पॅरामेडिकल व व्यावसायिक शिक्षण",
        type: "रोजगाराभिमुख प्रशिक्षण",
      },
      {
        name: "श्री मोरया इन्स्टिट्यूट ऑफ पॅरामेडिकल हेल्थ सायन्स",
        detail: "चिंचवड, पुणे",
        type: "आरोग्य क्षेत्रातील शिक्षण",
      },
    ],
  },
};

export default function EducationalInstitutions() {
  const { language } = useLanguage();
  const t = content[language === "mr" ? "mr" : "en"];

  const [active, setActive] = useState(0);

  return (
    <section
      id="educational-institutions"
      className="relative overflow-hidden bg-[#FAFAF9] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        
{/* SECTION HEADER - COMPACT & CENTER */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mx-auto mb-9 max-w-[1250px] text-center"
>
  {/* EYEBROW */}
  <div className="mb-3 flex items-center justify-center gap-3">
    <span className="h-[2px] w-7 bg-[#EF4444]" />

    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#68736D]">
      {t.eyebrow}
    </span>

    <span className="h-[2px] w-7 bg-[#EF4444]" />
  </div>

  {/* ONE LINE HEADING */}
  <h2 className="text-[28px] font-black leading-[1.2] tracking-tight text-[#252B2D] sm:text-[36px] lg:whitespace-nowrap lg:text-[43px] xl:text-[46px]">
    {t.heading1}{" "}
    <span className="text-[#EF4444]">
      {t.heading2}
    </span>
  </h2>

  {/* SHORT DESCRIPTION */}
  <p className="mx-auto mt-3 max-w-[750px] text-[14px] leading-[1.7] text-[#65706B] sm:text-[15px]">
    {language === "mr"
      ? "तीन शैक्षणिक संस्थांमधून रोजगाराभिमुख पॅरामेडिकल व व्यावसायिक शिक्षण."
      : "Career-focused paramedical and vocational education through three associated institutions."}
  </p>
</motion.div>


        {/* MAIN INTERACTIVE LAYOUT */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          {/* LEFT - COLLEGE LIST */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <div className="border-t border-[#DDE3DD]">
              {t.colleges.map((college, index) => {
                const selected = active === index;

                return (
                  <button
                    key={index}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-pressed={selected}
                    className={`group relative flex w-full items-start gap-5 border-b border-[#DDE3DD] py-7 text-left transition-all duration-300 sm:gap-7 sm:py-8 ${
                      selected ? "pl-3 sm:pl-5" : "pl-0"
                    }`}
                  >
                    {/* ACTIVE RED LINE */}
                    <span
                      className={`absolute bottom-0 left-0 top-0 w-[3px] bg-[#EF4444] transition-transform duration-300 ${
                        selected ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    {/* NUMBER */}
                    <span
                      className={`pt-1 text-[17px] font-black transition-colors duration-300 ${
                        selected ? "text-[#EF4444]" : "text-[#A2AAA4]"
                      }`}
                    >
                      {colleges[index].id}
                    </span>

                    {/* COLLEGE DETAILS */}
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[20px] font-extrabold leading-[1.35] transition-colors duration-300 sm:text-[23px] ${
                          selected
                            ? "text-[#252B2D]"
                            : "text-[#606A65] group-hover:text-[#252B2D]"
                        }`}
                      >
                        {college.name}
                      </span>

                      <span className="mt-2 flex items-center gap-2 text-[14px] font-medium text-[#79847D] sm:text-[15px]">
                        {college.detail}
                      </span>
                    </span>

                    {/* ARROW */}
                    <span
                      className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        selected
                          ? "border-[#EF4444] bg-[#EF4444] text-white"
                          : "border-[#DFE4DF] text-[#87918A]"
                      }`}
                    >
                      <ArrowUpRight size={19} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ALL INSTITUTIONS CTA */}
            <Link
              to="/colleges"
              className="group mt-8 inline-flex w-fit items-center gap-3 text-[15px] font-extrabold text-[#252B2D] transition-colors hover:text-[#EF4444]"
            >
              {t.viewAll}
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* RIGHT - DYNAMIC IMAGE SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative min-h-[400px] overflow-hidden rounded-[22px] bg-[#E7EBE7] sm:min-h-[500px] lg:min-h-[560px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={colleges[active].image}
                alt={t.colleges[active].name}
                initial={{ opacity: 0, scale: 1.07 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* IMAGE GRADIENT */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111B17]/85 via-[#111B17]/10 to-transparent" />

            {/* TOP LABEL */}
            <div className="absolute left-6 top-6 z-10 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-white backdrop-blur-sm">
              {t.established}
            </div>

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${language}-${active}-details`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-3 flex items-center gap-2 text-white/80">
                    <GraduationCap size={19} />
                    <span className="text-[12px] font-bold uppercase tracking-[0.1em]">
                      {t.colleges[active].type}
                    </span>
                  </div>

                  <h3 className="max-w-[500px] text-[24px] font-extrabold leading-[1.3] text-white sm:text-[30px]">
                    {t.colleges[active].name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-white/85">
                    <MapPin size={17} />
                    <span className="text-[14px] font-medium">
                      {t.colleges[active].detail}
                    </span>
                  </div>

                  
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
