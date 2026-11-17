
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Flower2,
  Recycle,
  Sprout,
  Leaf,
  ArrowRight,
  Droplets,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const IMAGE_URL =
  "/54.webp";

const steps = [
  {
    number: "01",
    Icon: Flower2,
    en: "Nirmalya Collection",
    mr: "निर्माल्य संकलन",
  },
  {
    number: "02",
    Icon: Recycle,
    en: "Responsible Disposal",
    mr: "जबाबदार विल्हेवाट",
  },
  {
    number: "03",
    Icon: Sprout,
    en: "Composting",
    mr: "कंपोस्टिंग",
  },
  {
    number: "04",
    Icon: Leaf,
    en: "Environmental Awareness",
    mr: "पर्यावरण जनजागृती",
  },
];

export default function NirmalyaDanInitiative() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "निर्माल्य दान उपक्रम",
        heading1: "परंपरेचे जतन.",
        heading2: "निसर्गाचे संरक्षण.",
        paragraph1:
          "आमचा निर्माल्य दान उपक्रम फुलांचे निर्माल्य आणि पूजेसाठी वापरलेल्या सेंद्रिय साहित्याचे संकलन व योग्य व्यवस्थापन करण्यास प्रोत्साहन देऊन पर्यावरणपूरक गणेशोत्सव साजरा करण्याचा संदेश देतो.",
        paragraph2:
          "या उपक्रमामुळे नैसर्गिक जलस्रोतांमध्ये जाणारा कचरा कमी करण्यास मदत होते. तसेच योग्य विल्हेवाट, कंपोस्टिंग आणि पर्यावरण जनजागृतीला चालना मिळते.",
        paragraph3:
          "सांस्कृतिक परंपरा आणि शाश्वत पद्धती यांची सांगड घालून सामुदायिक उत्सव अधिक पर्यावरणपूरक बनवण्यासाठी आम्ही कार्य करतो.",
        process: "पर्यावरणपूरक उपक्रमाची दिशा",
        imageTitle: "निर्माल्य दान",
        imageSub: "परंपरा आणि पर्यावरणाचा समतोल",
        waterNote: "स्वच्छ जलस्रोतांसाठी एक सकारात्मक पाऊल",
      }
    : {
        eyebrow: "NIRMALYA DAN INITIATIVE",
        heading1: "Preserving Tradition.",
        heading2: "Protecting Nature.",
        paragraph1:
          "Our Nirmalya Dan initiative promotes environmentally responsible Ganpati celebrations by encouraging the collection and proper management of floral offerings and organic worship materials.",
        paragraph2:
          "The program helps reduce waste entering natural water bodies while encouraging responsible disposal, composting and environmental awareness.",
        paragraph3:
          "By connecting cultural traditions with sustainable practices, we work to make community celebrations more environmentally conscious.",
        process: "OUR SUSTAINABLE APPROACH",
        imageTitle: "NIRMALYA DAN",
        imageSub: "Tradition Meets Sustainability",
        waterNote: "A positive step towards cleaner water bodies",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
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
      id="nirmalya-dan"
      className="relative isolate overflow-hidden bg-[#FAFBF7] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#E8F2E6]/65 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-[#F5EEDB]/55 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">

          {/* LEFT TEXT */}
          <div>
            <motion.div
              {...reveal()}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
                {content.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              {...reveal(0.1)}
              className="max-w-[650px] text-[clamp(1.9rem,2.8vw,2.85rem)] font-extrabold leading-[1.22] tracking-[-0.035em] text-[#17392E]"
            >
              {content.heading1}{" "}
              <span className="text-[#EF4444]">
                {content.heading2}
              </span>
            </motion.h2>

            <motion.div
              {...reveal(0.2)}
              className="mt-6 max-w-[650px] space-y-4"
            >
              <p className="text-[14px] leading-[1.85] text-[#66746B] sm:text-[15px]">
                {content.paragraph1}
              </p>

              <p className="text-[14px] leading-[1.85] text-[#66746B] sm:text-[15px]">
                {content.paragraph2}
              </p>

              <p className="text-[14px] leading-[1.85] text-[#66746B] sm:text-[15px]">
                {content.paragraph3}
              </p>
            </motion.div>

            {/* ENVIRONMENT MESSAGE */}
            <motion.div
              {...reveal(0.3)}
              className="mt-7 flex items-center gap-3 border-t border-[#DDE8DC] pt-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7F2E9] text-[#006B2E]">
                <Droplets size={20} strokeWidth={1.7} />
              </div>

              <span className="text-[13px] font-bold text-[#17392E]">
                {content.waterNote}
              </span>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div {...reveal(0.15)} className="relative">
            <div className="group relative h-[300px] overflow-hidden rounded-[20px] bg-[#DDE8D8] sm:h-[380px] lg:h-[430px]">
              <img
                src={IMAGE_URL}
                alt="Illustrative photograph of volunteers managing floral offerings during Ganesh Visarjan"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101C15]/85 via-transparent to-transparent" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#EF4444] text-white">
                  <Flower2 size={22} strokeWidth={1.7} />
                </div>

                <h3 className="text-[19px] font-black tracking-[0.02em] text-white">
                  {content.imageTitle}
                </h3>

                <p className="mt-1 text-[13px] text-white/80">
                  {content.imageSub}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM PROCESS FLOW */}
        <motion.div
          {...reveal(0.2)}
          className="mt-12 border-t border-[#DDE8DC] pt-7 lg:mt-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#006B2E]">
              {content.process}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.Icon;

              return (
                <div
                  key={step.number}
                  className="group relative flex items-start gap-3"
                >
                  {/* ICON */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3E9] text-[#006B2E] transition-colors duration-300 group-hover:bg-[#006B2E] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0">
                    <span className="mb-1 block text-[10px] font-bold tracking-[0.1em] text-[#EF4444]">
                      {step.number}
                    </span>

                    <h3 className="text-[13px] font-extrabold leading-[1.45] text-[#17392E] sm:text-[14px]">
                      {isMarathi ? step.mr : step.en}
                    </h3>
                  </div>

                  {/* CONNECTOR */}
                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="absolute -right-2 top-3 hidden text-[#A8BDA9] lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
