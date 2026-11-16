
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  Flag,
  GraduationCap,
  Building2,
  Handshake,
  Globe2,
  HeartHandshake,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const icons = [
  Flag,
  GraduationCap,
  Building2,
  Handshake,
  Globe2,
  HeartHandshake,
];

export default function OurJourney() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 75%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const content = isMarathi
    ? {
        eyebrow: "१९९५ पासूनचा आमचा प्रवास",
        heading1: "समर्पणाचा वारसा.",
        heading2: "प्रगतीची वाटचाल.",
        description:
          "संस्थेच्या स्थापनेपासून आजपर्यंत समाजविकासाच्या दिशेने गाठलेले महत्त्वाचे टप्पे.",
        milestones: [
          {
            title: "१९९५",
            description:
              "मोरया सामाजिक प्रतिष्ठानची स्थापना.",
          },
          {
            title: "कौशल्य विकासाचा विस्तार",
            description:
              "व्यावसायिक आणि पॅरामेडिकल शिक्षण उपक्रमांचा विकास.",
          },
          {
            title: "शैक्षणिक संस्थांचा विकास",
            description:
              "तीन संलग्न महाविद्यालयांच्या माध्यमातून शैक्षणिक उपक्रम.",
          },
          {
            title: "CSR सहकार्य",
            description:
              "CSR भागीदारीच्या माध्यमातून कौशल्य विकास आणि सामाजिक उपक्रमांना पाठबळ.",
          },
          {
            title: "आंतरराष्ट्रीय सहभाग",
            description:
              "जागतिक परिषदांमध्ये आणि संयुक्त राष्ट्रांशी संबंधित मंचांवर सहभाग.",
          },
          {
            title: "आज",
            description:
              "शाश्वत उपजीविका, आरोग्यसेवा, शिक्षण आणि समुदायांची संकटांना सामोरे जाण्याची क्षमता वाढवण्यावर सातत्यपूर्ण भर.",
          },
        ],
      }
    : {
        eyebrow: "OUR JOURNEY SINCE 1995",
        heading1: "A Legacy of Commitment",
        heading2: "and Progress.",
        description:
          "Key milestones that reflect our continuing commitment to community development.",
        milestones: [
          {
            title: "1995",
            description:
              "Establishment of Morya Samajik Pratishthan.",
          },
          {
            title: "Skill Development Expansion",
            description:
              "Development of vocational and paramedical education initiatives.",
          },
          {
            title: "Institutional Growth",
            description:
              "Educational activities through three associated colleges.",
          },
          {
            title: "CSR Collaboration",
            description:
              "Skill development and community programs supported through CSR partnerships.",
          },
          {
            title: "International Engagement",
            description:
              "Participation in global conferences and UN-related forums.",
          },
          {
            title: "Today",
            description:
              "Continued focus on sustainable livelihoods, healthcare, education and community resilience.",
          },
        ],
      };

  return (
    <section
      ref={sectionRef}
      id="our-journey"
      className="relative overflow-hidden bg-[#F7F9F6] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute -left-32 top-24 h-[360px] w-[360px] rounded-full bg-[#DCEDE1]/50 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-[360px] w-[360px] rounded-full bg-[#FBE7E4]/50 blur-[100px]" />

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-[760px] text-center sm:mb-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-7 bg-[#EF4444]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
              {content.eyebrow}
            </span>
            <span className="h-[2px] w-7 bg-[#EF4444]" />
          </motion.div>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,3.2vw,3.3rem)] font-black leading-[1.18] tracking-[-0.035em] text-[#17392E]"
          >
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-[620px] text-[15px] leading-[1.8] text-[#66746B] sm:text-[16px]"
          >
            {content.description}
          </motion.p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTRAL LINE - DESKTOP / LEFT LINE - MOBILE */}
          <div className="absolute bottom-8 left-[23px] top-8 w-[2px] bg-[#D9E5DC] md:left-1/2 md:-translate-x-1/2" />

          {/* ANIMATED PROGRESS LINE */}
          <motion.div
            style={{
              scaleY: reduceMotion ? 1 : progress,
              transformOrigin: "top",
            }}
            className="absolute bottom-8 left-[23px] top-8 w-[2px] bg-[#EF4444] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10 md:space-y-14">
            {content.milestones.map((milestone, index) => {
              const Icon = icons[index];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${language}-${index}`}
                  className="relative grid grid-cols-[48px_1fr] items-center gap-5 md:grid-cols-[1fr_70px_1fr] md:gap-5"
                >
                  {/* DESKTOP LEFT */}
                  <div className="hidden md:block">
                    {isLeft && (
                      <motion.div
                        initial={
                          reduceMotion
                            ? false
                            : { opacity: 0, x: -45 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group ml-auto max-w-[440px] text-right"
                      >
                        <span className="text-[12px] font-extrabold tracking-[0.18em] text-[#EF4444]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-2 text-[23px] font-extrabold leading-[1.3] tracking-[-0.025em] text-[#17392E]">
                          {milestone.title}
                        </h3>

                        <p className="mt-3 text-[15px] leading-[1.85] text-[#66746B]">
                          {milestone.description}
                        </p>

                        <div className="mt-5 ml-auto h-[2px] w-12 bg-[#EF4444] transition-all duration-300 group-hover:w-24" />
                      </motion.div>
                    )}
                  </div>

                  {/* CENTER NODE */}
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, scale: 0.65 }
                    }
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15,
                    }}
                    className="relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full border-[5px] border-[#F7F9F6] bg-[#17392E] text-white shadow-[0_5px_20px_rgba(23,57,46,0.18)] transition-colors duration-300 hover:bg-[#EF4444] md:mx-auto md:h-[58px] md:w-[58px]"
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </motion.div>

                  {/* RIGHT / MOBILE CONTENT */}
                  <div>
                    {(!isLeft || true) && (
                      <motion.div
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: isLeft ? -20 : 35,
                              }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`group max-w-[440px] ${
                          isLeft ? "md:hidden" : ""
                        }`}
                      >
                        <span className="text-[12px] font-extrabold tracking-[0.18em] text-[#EF4444]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-2 text-[21px] font-extrabold leading-[1.3] tracking-[-0.025em] text-[#17392E] sm:text-[23px]">
                          {milestone.title}
                        </h3>

                        <p className="mt-3 text-[15px] leading-[1.85] text-[#66746B]">
                          {milestone.description}
                        </p>

                        <div className="mt-5 h-[2px] w-12 bg-[#EF4444] transition-all duration-300 group-hover:w-24" />
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM END MARKER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-12 flex h-4 w-4 items-center justify-center rounded-full border-[4px] border-[#F7F9F6] bg-[#EF4444]"
        />
      </div>
    </section>
  );
}
