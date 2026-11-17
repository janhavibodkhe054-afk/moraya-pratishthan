
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Handshake,
  HeartHandshake,
  MoveUpRight,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const supporters = [
  {
    id: "bajaj",
    name: "Bajaj Finserv CSR",
    logo: "/bajaj.webp",
    description: {
      en: "Identified as a CSR supporter of skill development and vocational training initiatives implemented through Morya Samajik Pratishthan.",
      mr: "मोरया सामाजिक प्रतिष्ठानमार्फत राबविण्यात येणाऱ्या कौशल्य विकास आणि व्यावसायिक प्रशिक्षण उपक्रमांना CSR अंतर्गत सहकार्य करणारी संस्था.",
    },
  },
  {
    id: "sos",
    name: "SOS Children's Villages India",
    logo: "/sos.webp",
    description: {
      en: "Identified as a supporter of career-oriented training and community development initiatives.",
      mr: "करिअर-केंद्रित प्रशिक्षण आणि समुदाय विकास उपक्रमांना सहकार्य करणारी संस्था.",
    },
  },
];

const content = {
  en: {
    eyebrow: "OUR CSR SUPPORTERS",
    heading1: "Collaboration That",
    heading2: "Makes a Difference.",
    description:
      "Meaningful partnerships that connect corporate responsibility with real opportunities for communities.",
    smallTitle: "STRONGER TOGETHER",
    smallDescription:
      "Creating meaningful social progress through shared purpose and collaborative action.",
    supporterLabel: "CSR SUPPORTER",
    footer: "Partnerships Built on Purpose. Focused on Impact.",
  },
  mr: {
    eyebrow: "आमचे CSR सहयोगी",
    heading1: "एकत्रित प्रयत्नांतून",
    heading2: "अर्थपूर्ण परिवर्तन.",
    description:
      "कॉर्पोरेट सामाजिक जबाबदारी आणि समाजातील संधी यांना जोडणाऱ्या अर्थपूर्ण भागीदाऱ्या.",
    smallTitle: "एकत्रित प्रयत्न, अधिक प्रभाव",
    smallDescription:
      "सामायिक उद्दिष्टे आणि सहकार्याच्या माध्यमातून सामाजिक प्रगती.",
    supporterLabel: "CSR सहयोगी",
    footer: "उद्दिष्टपूर्ण भागीदारी. परिणामकारक परिवर्तन.",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function CSRSupporters() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const t = content[isMarathi ? "mr" : "en"];

  return (
    <section
      id="csr-supporters"
      className="relative overflow-hidden bg-[#F8FAF8] py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#EAF2EC] blur-[90px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#FCEDEC]/40 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-[40%_60%] lg:gap-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.12 }}
            className="lg:pr-8"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[3px] w-9 bg-[#EF6666]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#176A3A] sm:text-[12px]">
                {t.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-[35px] font-black leading-[1.14] tracking-tight text-[#17392E] sm:text-[44px] lg:text-[47px]"
            >
              {t.heading1}
              <br />
              <span className="text-[#EF6666]">
                {t.heading2}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[450px] text-[14px] leading-[1.9] text-[#68766D] sm:text-[16px]"
            >
              {t.description}
            </motion.p>

            {/* PARTNERSHIP MESSAGE */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex items-start gap-4 border-l-[3px] border-[#EF6666] pl-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F1E9] text-[#176A3A]">
                <HeartHandshake size={23} />
              </div>

              <div>
                <h3 className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#17392E]">
                  {t.smallTitle}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.8] text-[#718077]">
                  {t.smallDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SUPPORTERS */}
          <div className="grid gap-5 sm:grid-cols-2">
            {supporters.map((supporter, index) => (
              <motion.article
                key={supporter.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
                className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[22px] border border-[#E2EAE4] bg-white shadow-[0_10px_35px_rgba(23,57,46,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(23,57,46,0.12)]"
              >
                {/* LOGO SHOWCASE */}
                <div className="relative flex h-[175px] items-center justify-center overflow-hidden border-b border-[#EDF1EE] bg-white px-7">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[22px] border-[#F5F8F5]" />

                  <img
                    src={supporter.logo}
                    alt={`${supporter.name} logo`}
                    loading="lazy"
                    className="relative z-10 max-h-[85px] w-full max-w-[230px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-[7px] w-[7px] rounded-full bg-[#EF6666]" />

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#176A3A]">
                      {t.supporterLabel}
                    </span>
                  </div>

                  <h3 className="text-[19px] font-black leading-[1.35] text-[#17392E]">
                    {supporter.name}
                  </h3>

                  <p className="mt-3 flex-1 text-[13px] leading-[1.85] text-[#68766D]">
                    {supporter.description[isMarathi ? "mr" : "en"]}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E9EFEB] pt-4">
                    <span className="h-[3px] w-10 bg-[#EF6666] transition-all duration-300 group-hover:w-16" />

                    <MoveUpRight
                      size={18}
                      className="text-[#17392E] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-3 border-t border-[#E1EAE3] pt-7 text-center"
        >
          <Handshake size={21} className="shrink-0 text-[#176A3A]" />

          <p className="text-[13px] font-bold text-[#17392E] sm:text-[15px]">
            {t.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
