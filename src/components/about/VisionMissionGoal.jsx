
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  Eye,
  Compass,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

export default function VisionMissionGoal() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  // SCROLL ANIMATION
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 25,
  });

  const content = isMarathi
    ? {
        eyebrow: "आमची दिशा आणि उद्दिष्टे",
        heading1: "उद्देश स्पष्ट.",
        heading2: "वाटचाल प्रगतीची.",
        subtitle:
          "समाजाच्या सर्वांगीण प्रगतीसाठी आमची दृष्टी, कार्यपद्धती आणि उद्दिष्टे.",
        yearLabel: "समाजसेवेचा प्रवास १९९५ पासून",
        statement:
          "संधी निर्माण करणे, स्वावलंबन वाढवणे आणि सक्षम समाज घडवणे.",
        items: [
          {
            number: "01",
            label: "VISION",
            title: "आमची दृष्टी",
            description:
              "प्रत्येक व्यक्तीला दर्जेदार आरोग्यसेवा, शिक्षण आणि शाश्वत उपजीविकेच्या संधी उपलब्ध असलेला सर्वसमावेशक व समानताधिष्ठित समाज निर्माण करणे. कुशल मनुष्यबळ आणि सक्षम व्यवस्थांच्या माध्यमातून सन्मान, स्वावलंबन आणि संकटांचा सामना करण्याची क्षमता असलेले समुदाय घडवणे.",
          },
          {
            number: "02",
            label: "MISSION",
            title: "आमचे मिशन",
            description:
              "सुलभ पॅरामेडिकल व व्यावसायिक शिक्षण, युवकांची रोजगारक्षमता, महिला सक्षमीकरण, आरोग्य जागरूकता, शाश्वत विकास आणि आपत्ती प्रतिकारक्षमता यांद्वारे व्यक्ती व समुदायांना सक्षम करणारे नियोजनबद्ध आणि परिणामकारक उपक्रम राबवणे.",
          },
          {
            number: "03",
            label: "GOAL",
            title: "आमचे उद्दिष्ट",
            description:
              "वंचित युवकांना सुलभ, करिअर-केंद्रित पॅरामेडिकल, तांत्रिक व अतांत्रिक कौशल्य विकास शिक्षण देऊन आरोग्य क्षेत्रात शाश्वत करिअरच्या संधी निर्माण करणे. प्रशिक्षित व्यावसायिक आणि जनजागृती उपक्रमांद्वारे समुदायाचे आरोग्य सुधारणे.",
          },
        ],
      }
    : {
        eyebrow: "WHAT DRIVES US",
        heading1: "A Purpose That",
        heading2: "Moves Us Forward.",
        subtitle:
          "Our vision, mission and goal define the impact we strive to create.",
        yearLabel: "A Journey of Service Since 1995",
        statement:
          "Creating opportunities. Inspiring self-reliance. Building stronger communities.",
        items: [
          {
            number: "01",
            label: "VISION",
            title: "Our Vision",
            description:
              "To build an inclusive and equitable society where every individual has access to quality healthcare, education and sustainable livelihood opportunities, supported by a skilled workforce and systems that promote dignity, self-reliance and resilient communities.",
          },
          {
            number: "02",
            label: "MISSION",
            title: "Our Mission",
            description:
              "To implement structured, impact-driven programs that empower individuals and strengthen communities through accessible paramedical and vocational education, youth employability, women empowerment, healthcare awareness, sustainable development and disaster resilience.",
          },
          {
            number: "03",
            label: "GOAL",
            title: "Our Goal",
            description:
              "To empower underprivileged youth through accessible, career-oriented paramedical, technical and non-technical skill development education, enabling sustainable healthcare careers and improving community health through skilled professionals and awareness initiatives.",
          },
        ],
      };

  const icons = [Eye, Compass, Target];

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      ref={sectionRef}
      id="vision-mission-goal"
      className="relative isolate overflow-hidden bg-[#F5F7F3] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-8 select-none text-[110px] font-black tracking-[-0.08em] text-[#17392E]/[0.025] sm:text-[180px] lg:text-[250px]"
      >
        PURPOSE
      </div>

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-[#DDECE1]/40 blur-[90px]" />

      <div className="relative mx-auto grid max-w-[1380px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">

        {/* =====================================
            LEFT SIDE - PREMIUM STICKY CONTENT
        ===================================== */}
        <div className="relative">
          <div className="lg:sticky lg:top-32">

            {/* EYEBROW */}
            <motion.div
              {...reveal(0)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[#EF4444]" />

              <span className="text-[12px] font-extrabold uppercase tracking-[0.15em] text-[#006B2E]">
                {content.eyebrow}
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              {...reveal(0.1)}
              className="max-w-[510px] text-[clamp(2rem,3vw,3.1rem)] font-black leading-[1.16] tracking-[-0.04em] text-[#17392E]"
            >
              {content.heading1}

              <span className="mt-1 block text-[#EF4444]">
                {content.heading2}
              </span>
            </motion.h2>

            {/* SUBTITLE */}
            <motion.p
              {...reveal(0.2)}
              className="mt-5 max-w-[430px] text-[15px] leading-[1.85] text-[#66746B]"
            >
              {content.subtitle}
            </motion.p>

            {/* =====================================
                LARGE 1995 TYPOGRAPHY
            ===================================== */}
            <motion.div
              {...reveal(0.25)}
              className="relative mt-9 max-w-[470px] overflow-hidden border-t border-[#D8E3D9] pt-7"
            >
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -7, 0],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block select-none text-[clamp(6rem,11vw,9rem)] font-black leading-[1.1] tracking-[-0.095em] text-[#17392E]/[0.12]"
              >
                1995
              </motion.span>

              {/* YEAR LABEL */}
              <div className="mt-1 flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#EF4444]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-[#17392E] sm:text-[12px]">
                  {content.yearLabel}
                </span>
              </div>
            </motion.div>

            {/* =====================================
                PURPOSE STATEMENT
            ===================================== */}
            <motion.div
              {...reveal(0.35)}
              className="mt-8 max-w-[430px] border-l-[3px] border-[#EF4444] pl-5"
            >
              <p className="text-[17px] font-semibold leading-[1.7] text-[#17392E]">
                {content.statement}
              </p>
            </motion.div>

            {/* DECORATIVE ANIMATED LINE */}
            <div className="mt-9 hidden items-center gap-3 lg:flex">
              <span className="h-2 w-2 rounded-full bg-[#EF4444]" />

              <motion.span
                initial={
                  reduceMotion ? false : { width: 0 }
                }
                whileInView={{ width: 110 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
                className="h-[1px] bg-[#C9D7CE]"
              />

              <ArrowUpRight
                size={18}
                className="text-[#006B2E]"
              />
            </div>
          </div>
        </div>

        {/* =====================================
            RIGHT SIDE - SCROLL TIMELINE
        ===================================== */}
        <div className="relative">

          {/* BACKGROUND TIMELINE TRACK */}
          <div className="absolute bottom-12 left-[22px] top-10 w-[2px] bg-[#D9E4DB] sm:left-[29px]" />

          {/* ANIMATED PROGRESS LINE */}
          <motion.div
            style={{
              scaleY: reduceMotion ? 1 : smoothProgress,
              transformOrigin: "top",
            }}
            className="absolute bottom-12 left-[22px] top-10 w-[2px] bg-[#EF4444] sm:left-[29px]"
          />

          <div className="space-y-12 sm:space-y-16">

            {content.items.map((item, index) => {
              const Icon = icons[index];

              return (
                <motion.article
                  key={`${language}-${item.number}`}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 35 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative pl-[70px] sm:pl-[92px]"
                >
                  {/* TIMELINE ICON */}
                  <div className="absolute left-0 top-0 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#D5E3D8] bg-white text-[#17392E] shadow-sm transition-all duration-300 group-hover:border-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white sm:h-[60px] sm:w-[60px]">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* LABEL + NUMBER */}
                  <div className="mb-3 flex items-center justify-between gap-4">

                    <span className="text-[11px] font-extrabold tracking-[0.22em] text-[#EF4444]">
                      {item.label}
                    </span>

                    <span className="text-[42px] font-black leading-none tracking-[-0.06em] text-[#17392E]/10 sm:text-[56px]">
                      {item.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[25px] font-extrabold tracking-[-0.035em] text-[#17392E] sm:text-[29px]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 max-w-[600px] text-[15px] leading-[1.95] text-[#5E6D63] sm:text-[16px]">
                    {item.description}
                  </p>

                  {/* DIVIDER */}
                  {index !== content.items.length - 1 && (
                    <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-[#D4E0D6] to-transparent sm:mt-12" />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
