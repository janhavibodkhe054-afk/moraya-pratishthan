
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  HandHeart,
  UsersRound,
  HeartHandshake,
  Leaf,
  ClipboardCheck,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const icons = [
  ShieldCheck,
  HandHeart,
  UsersRound,
  HeartHandshake,
  Leaf,
  ClipboardCheck,
];

export default function CoreValues() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमची मूलभूत मूल्ये",
        heading1: "आमच्या कार्याला",
        heading2: "दिशा देणारी तत्त्वे.",
        description:
          "विश्वास, समान संधी आणि सामाजिक जबाबदारी या मूल्यांवर आमचे कार्य आधारित आहे.",
        values: [
          {
            title: "प्रामाणिकपणा",
            description:
              "नैतिक प्रशासन, पारदर्शकता आणि उपलब्ध संसाधनांचा जबाबदारीने वापर करणे.",
          },
          {
            title: "सक्षमीकरण",
            description:
              "व्यक्तींना आर्थिक स्वातंत्र्य आणि स्वावलंबन प्राप्त करण्यासाठी सक्षम बनवणे.",
          },
          {
            title: "सर्वसमावेशकता",
            description:
              "शिक्षण आणि विविध संधी प्रत्येकासाठी समानतेने उपलब्ध करून देणे.",
          },
          {
            title: "सेवाभाव",
            description:
              "प्रत्येक उपक्रमाच्या केंद्रस्थानी समाजाच्या वास्तविक गरजा ठेवणे.",
          },
          {
            title: "शाश्वतता",
            description:
              "दीर्घकालीन सामाजिक आणि पर्यावरणीय परिणाम साधणारे उपक्रम विकसित करणे.",
          },
          {
            title: "उत्तरदायित्व",
            description:
              "परिणामांचे मोजमाप करणे आणि संबंधित भागधारकांप्रती जबाबदारी जपणे.",
          },
        ],
      }
    : {
        eyebrow: "OUR CORE VALUES",
        heading1: "The Principles That",
        heading2: "Guide Our Work.",
        description:
          "The values that shape our decisions, strengthen our commitment and guide every initiative.",
        values: [
          {
            title: "Integrity",
            description:
              "Upholding ethical governance, transparency and responsible use of resources.",
          },
          {
            title: "Empowerment",
            description:
              "Helping individuals achieve economic independence and self-reliance.",
          },
          {
            title: "Inclusivity",
            description:
              "Ensuring equitable access to education and opportunities.",
          },
          {
            title: "Service Orientation",
            description:
              "Putting community needs at the centre of every initiative.",
          },
          {
            title: "Sustainability",
            description:
              "Creating programs that deliver long-term social and environmental impact.",
          },
          {
            title: "Accountability",
            description:
              "Measuring outcomes and maintaining responsibility toward stakeholders.",
          },
        ],
      };

  return (
    <section
      id="core-values"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <div className="mb-12 max-w-[780px]">
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, y: 15 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#EF4444]" />

            <span className="text-[12px] font-extrabold uppercase tracking-[0.17em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={
              reduceMotion ? false : { opacity: 0, y: 22 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,3.1vw,3.2rem)] font-black leading-[1.18] tracking-[-0.035em] text-[#17392E]"
          >
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h2>

          <motion.p
            initial={
              reduceMotion ? false : { opacity: 0, y: 15 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-[660px] text-[15px] leading-[1.8] text-[#66746B] sm:text-[16px]"
          >
            {content.description}
          </motion.p>
        </div>

        {/* EDITORIAL VALUES GRID */}
        <div className="grid grid-cols-1 border-t border-[#E3EAE4] md:grid-cols-2 lg:grid-cols-3">
          {content.values.map((value, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={`${language}-${index}`}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 3) * 0.1,
                }}
                className="group relative min-h-[260px] overflow-hidden border-b border-[#E3EAE4] px-5 py-9 transition-colors duration-500 hover:bg-[#F5F9F5] sm:px-7 lg:px-8"
              >
                {/* COLUMN DIVIDERS */}
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-px bg-[#E3EAE4] md:block lg:group-[&:nth-child(3n)]:hidden" />

                {/* LARGE BACKGROUND NUMBER */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-4 select-none text-[80px] font-black leading-none tracking-[-0.08em] text-[#17392E]/[0.045] transition-all duration-500 group-hover:-translate-y-2 group-hover:text-[#EF4444]/[0.09]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* ICON */}
                <div className="relative mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4ED] text-[#006B2E] transition-all duration-300 group-hover:rotate-[-7deg] group-hover:bg-[#EF4444] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* VALUE TITLE */}
                <h3 className="relative mb-3 text-[21px] font-extrabold tracking-[-0.025em] text-[#17392E]">
                  {value.title}
                </h3>

                {/* VALUE DESCRIPTION */}
                <p className="relative max-w-[350px] text-[15px] leading-[1.8] text-[#66746B]">
                  {value.description}
                </p>

                {/* ANIMATED BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#EF4444] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
