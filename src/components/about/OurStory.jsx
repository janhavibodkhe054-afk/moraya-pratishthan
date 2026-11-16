
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/Languagecontext";

const STORY_IMAGE = "/55.webp";

export default function OurStory() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमची कहाणी",
        heading1: "समाजाशी जोडलेली मुळे.",
        heading2: "ध्येयाने प्रेरित वाटचाल.",
        paragraphs: [
          "मोरया सामाजिक प्रतिष्ठान ही पुणे येथे कार्यरत असलेली तळागाळातील स्वयंसेवी संस्था आहे. सर्वसमावेशक आणि शाश्वत सामाजिक विकासाच्या उद्देशाने १९९५ मध्ये संस्थेची स्थापना झाली.",

          "गेल्या अनेक वर्षांत संस्थेने कौशल्य विकास, आरोग्यसेवा, महिला सक्षमीकरण, आपत्ती व्यवस्थापन आणि शाश्वत उपजीविका या क्षेत्रांत आपल्या उपक्रमांचा विस्तार केला आहे. समाजाच्या वास्तविक गरजा लक्षात घेऊन शिक्षण, रोजगारक्षमता, उत्पन्ननिर्मिती आणि सामाजिक कल्याण यामध्ये सकारात्मक बदल घडवणे हा या उपक्रमांचा उद्देश आहे.",

          "शैक्षणिक संस्था, आरोग्यसेवा संस्था, शासकीय यंत्रणा आणि कॉर्पोरेट CSR भागीदार यांच्या सहकार्याने मोरया सामाजिक प्रतिष्ठान वंचित समुदायांना नवीन संधी उपलब्ध करून देत आहे. सन्मान, स्वावलंबन आणि दीर्घकालीन प्रगतीला चालना देणे हेच संस्थेच्या कार्याचे प्रमुख ध्येय आहे.",
        ],
      }
    : {
        eyebrow: "OUR STORY",
        heading1: "Rooted in Community.",
        heading2: "Driven by Purpose.",
        paragraphs: [
          "Morya Samajik Pratishthan is a Pune-based grassroots non-governmental organization established in 1995 with a commitment to inclusive and sustainable community development.",

          "Over the years, the organization has expanded its initiatives across skill development, healthcare, women empowerment, disaster management and sustainable livelihoods. Its programs are designed to address real community needs while creating measurable improvements in education, employability, income generation and social well-being.",

          "Through partnerships with educational institutions, healthcare organizations, government agencies and corporate CSR supporters, Morya Samajik Pratishthan continues to connect underserved communities with opportunities that promote dignity, independence and long-term progress.",
        ],
      };

  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -45 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* OFFSET BORDER */}
            <div className="absolute -bottom-4 -left-4 right-4 top-4 rounded-[28px] border-2 border-[#006B2E]/15" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#E7EFE9] shadow-[0_24px_55px_rgba(23,57,46,0.12)]">
              <motion.img
                src={STORY_IMAGE}
                alt="Morya Samajik Pratishthan community development activities"
                loading="lazy"
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.055, 1] }
                }
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[490px]"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            {/* EYEBROW */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#EF4444]" />

              <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
                {content.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-[750px] text-[clamp(1.9rem,3vw,3rem)] font-black leading-[1.2] tracking-[-0.035em] text-[#17392E]"
            >
              {content.heading1}{" "}
              <span className="text-[#EF4444]">
                {content.heading2}
              </span>
            </motion.h2>

            {/* PARAGRAPHS */}
            <div className="mt-7 space-y-5">
              {content.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={`${language}-${index}`}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  className="text-[15px] leading-[1.85] text-[#526158] sm:text-[16px] lg:text-[16.5px]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
