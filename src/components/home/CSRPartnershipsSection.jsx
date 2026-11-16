
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Handshake,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const supporters = [
  {
    name: "Bajaj Finserv CSR",
    shortName: "Bajaj Finserv",
    logo: "/images/partners/bajaj-finserv.png",
  },
  {
    name: "SOS Children's Villages India",
    shortName: "SOS Children's Villages",
    logo: "/images/partners/sos-childrens-villages.png",
  },
];

const translations = {
  en: {
    eyebrow: "CSR PARTNERSHIPS & COLLABORATIONS",
    heading1: "Partnerships That",
    heading2: "Create Lasting Impact.",
    description:
      "Morya Samajik Pratishthan collaborates with corporate CSR partners, educational institutions, healthcare organizations and government bodies to expand access to quality training, community healthcare and sustainable livelihood opportunities.",
    button: "Partner With Us",
    supporters: "OUR CSR SUPPORTERS",
    partnershipTypes: [
      "Corporate CSR",
      "Educational Institutions",
      "Healthcare Organizations",
      "Government Bodies",
    ],
    bottomText: "Collaborating for meaningful community development.",
  },

  mr: {
    eyebrow: "CSR भागीदारी आणि सहकार्य",
    heading1: "एकत्रित प्रयत्नांतून",
    heading2: "चिरस्थायी सामाजिक परिवर्तन.",
    description:
      "मोरया सामाजिक प्रतिष्ठान कॉर्पोरेट CSR भागीदार, शैक्षणिक संस्था, आरोग्यसेवा संस्था आणि शासकीय यंत्रणांच्या सहकार्याने दर्जेदार प्रशिक्षण, सामुदायिक आरोग्यसेवा आणि शाश्वत उपजीविकेच्या संधी अधिकाधिक लोकांपर्यंत पोहोचवण्यासाठी कार्य करते.",
    button: "आमच्यासोबत भागीदारी करा",
    supporters: "आमचे CSR सहकारी",
    partnershipTypes: [
      "कॉर्पोरेट CSR",
      "शैक्षणिक संस्था",
      "आरोग्यसेवा संस्था",
      "शासकीय यंत्रणा",
    ],
    bottomText: "समाजाच्या प्रगतीसाठी एकत्रित प्रयत्न.",
  },
};

const partnerIcons = [
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
];

export default function CSRPartnershipsSection() {
  const { language } = useLanguage();
  const t = translations[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="csr-partnerships"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-9 bg-[#EF4444]" />

              <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#69736D] sm:text-[13px]">
                {t.eyebrow}
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-[35px] font-black leading-[1.14] tracking-tight text-[#252B2D] sm:text-[44px] lg:text-[49px]">
              {t.heading1}
              <br />
              <span className="text-[#EF4444]">
                {t.heading2}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[630px] text-[16px] leading-[1.8] text-[#66716B] sm:text-[17px]">
              {t.description}
            </p>

            {/* CTA */}
            <Link
              to="/csr"
              className="group mt-7 inline-flex min-h-[49px] items-center gap-3 rounded-full bg-[#252B2D] px-7 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#EF4444]"
            >
              {t.button}

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* RIGHT SUPPORTERS SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            {/* SMALL SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <Handshake
                size={21}
                strokeWidth={1.8}
                className="text-[#EF4444]"
              />

              <span className="text-[12px] font-extrabold uppercase tracking-[0.13em] text-[#59655D]">
                {t.supporters}
              </span>
            </div>

            {/* LOGO DISPLAY */}
            <div className="grid grid-cols-2 overflow-hidden rounded-[20px] border border-[#E5E9E5] bg-[#FAFBFA]">

              {supporters.map((partner, index) => (
                <div
                  key={partner.name}
                  className={`group flex min-h-[200px] flex-col items-center justify-center gap-5 px-4 py-7 text-center transition-colors duration-300 hover:bg-white sm:min-h-[240px] ${
                    index === 0
                      ? "border-r border-[#E5E9E5]"
                      : ""
                  }`}
                >
                  {/* LOGO */}
                  <div className="flex h-[90px] w-full items-center justify-center sm:h-[110px]">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
                      className="max-h-[85px] max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[100px]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="text-[14px] font-extrabold leading-[1.5] text-[#343D38] sm:text-[16px]">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* SMALL SUPPORT MESSAGE */}
            <div className="mt-4 flex items-center justify-center gap-2 text-center">
              <span className="h-[6px] w-[6px] rounded-full bg-[#EF4444]" />

              <p className="text-[13px] font-medium text-[#7A857E]">
                {t.bottomText}
              </p>
            </div>
          </motion.div>
        </div>

        {/* COLLABORATION STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-y-5 border-t border-[#E5E9E5] pt-7 lg:mt-14 lg:grid-cols-4"
        >
          {t.partnershipTypes.map((item, index) => {
            const Icon = partnerIcons[index];

            return (
              <div
                key={index}
                className={`flex items-center gap-3 px-2 sm:px-5 ${
                  index !== 0 ? "lg:border-l lg:border-[#E5E9E5]" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F7F4] text-[#607469]">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <span className="text-[14px] font-bold leading-[1.4] text-[#39443E] sm:text-[15px]">
                  {item}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
