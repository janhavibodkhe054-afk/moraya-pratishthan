import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  HeartPulse,
  UsersRound,
  Handshake,
  Leaf,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const content = {
  en: {
    eyebrow: "OUR KEY FOCUS AREAS",
    heading1: "Our Work.",
    heading2: "Our Commitment.",
    subtitle: "Integrated Initiatives for Sustainable Community Development.",
    button: "Explore Our Programs",
    areas: [
      {
        title: "Skill Development & Education",
        description:
          "Career-oriented paramedical, technical and vocational training to improve employability.",
      },
      {
        title: "Healthcare & Public Health",
        description:
          "Health awareness programs, medical camps, blood donation and community healthcare initiatives.",
      },
      {
        title: "Women & Youth Empowerment",
        description:
          "Practical training, mentorship and livelihood opportunities for economic independence.",
      },
      {
        title: "CSR & Community Development",
        description:
          "Collaborative, outcome-focused programs addressing community needs.",
      },
      {
        title: "Environmental Sustainability",
        description:
          "Nirmalya collection, responsible waste management and environmental awareness.",
      },
      {
        title: "Disaster Relief & Community Resilience",
        description:
          "Volunteer-led emergency assistance and relief support during natural disasters.",
      },
    ],
  },
  mr: {
    eyebrow: "आमची प्रमुख कार्यक्षेत्रे",
    heading1: "आमचे कार्य.",
    heading2: "आमची बांधिलकी.",
    subtitle: "शाश्वत सामाजिक विकासासाठी एकात्मिक उपक्रम.",
    button: "आमचे उपक्रम पाहा",
    areas: [
      {
        title: "कौशल्य विकास आणि शिक्षण",
        description:
          "रोजगारक्षमता वाढवण्यासाठी पॅरामेडिकल, तांत्रिक आणि व्यावसायिक प्रशिक्षण.",
      },
      {
        title: "आरोग्यसेवा आणि सार्वजनिक आरोग्य",
        description:
          "आरोग्य जनजागृती, वैद्यकीय शिबिरे, रक्तदान आणि सामुदायिक आरोग्य उपक्रम.",
      },
      {
        title: "महिला आणि युवा सक्षमीकरण",
        description:
          "आर्थिक स्वावलंबनासाठी व्यावहारिक प्रशिक्षण, मार्गदर्शन आणि उपजीविकेच्या संधी.",
      },
      {
        title: "CSR आणि सामाजिक विकास",
        description:
          "समाजाच्या गरजा लक्षात घेऊन सहकार्याने राबवले जाणारे परिणामकारक उपक्रम.",
      },
      {
        title: "पर्यावरणीय शाश्वतता",
        description:
          "निर्माल्य संकलन, जबाबदार कचरा व्यवस्थापन आणि पर्यावरण जनजागृती.",
      },
      {
        title: "आपत्ती मदत आणि सामाजिक पुनर्बांधणी",
        description:
          "नैसर्गिक आपत्तीच्या काळात स्वयंसेवकांच्या माध्यमातून आपत्कालीन मदत आणि सहाय्य.",
      },
    ],
  },
};

const icons = [
  GraduationCap,
  HeartPulse,
  UsersRound,
  Handshake,
  Leaf,
  ShieldCheck,
];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FocusAreasSection() {
  const { language } = useLanguage();
  const t = content[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="focus-areas"
      className="relative overflow-hidden bg-[#FAFBF9] py-16 sm:py-20 lg:py-10"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* SECTION HEADING */}

        {/* SECTION HEADING - CENTER ALIGNED */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-11 max-w-[850px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#EF6666]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#52705E]">
              {t.eyebrow}
            </span>

            <span className="h-[2px] w-9 bg-[#EF6666]" />
          </div>

          <h2 className="text-[35px] font-black leading-[1.15] tracking-tight text-[#17392E] sm:text-[46px] lg:text-[52px]">
            {t.heading1} <span className="text-[#EF6666]">{t.heading2}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-[1.8] text-[#68766D] sm:text-[17px]">
            {t.subtitle}
          </p>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          {/* LEFT - SIX FOCUS AREAS */}
          <div className="grid gap-4 sm:grid-cols-2">
            {t.areas.map((area, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-[16px] border border-[#E3EBE4] bg-white p-5 transition-all duration-300 hover:border-[#C5DDCB] hover:shadow-[0_14px_35px_rgba(23,57,46,0.08)] sm:p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#176A3A] transition-colors duration-300 group-hover:bg-[#17392E] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="text-[12px] font-extrabold text-[#BCCBC0]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-extrabold leading-[1.35] text-[#17392E] sm:text-[18px]">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.8] text-[#718076] sm:text-[14px]">
                    {area.description}
                  </p>

                  <div className="mt-5 h-[2px] w-8 bg-[#EF6666] transition-all duration-300 group-hover:w-16" />
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT - SINGLE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[340px] overflow-hidden rounded-[20px] bg-[#17392E] lg:min-h-full"
          >
            <img
              src="/48.webp"
              alt="Community development initiatives"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B281C]/90 via-[#0B281C]/25 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
              <span className="mb-4 block h-[3px] w-12 bg-[#EF6666]" />

              <h3 className="max-w-[320px] text-[26px] font-black leading-[1.25] text-white sm:text-[30px]">
                {language === "mr"
                  ? "समाजासाठी कार्य. परिवर्तनासाठी प्रयत्न."
                  : "Working for People. Creating Change."}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.8] text-white/80">
                Morya Samajik Pratishthan
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-11 flex justify-center"
        >
          <Link
            to="/programs"
            className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#17392E] px-8 py-3 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#EF6666] sm:text-[15px]"
          >
            {t.button}

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
