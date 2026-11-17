
import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  MapPin,
  Waves,
  UsersRound,
  Zap,
  Leaf,
  Landmark,
  Handshake,
  Users,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// INTERNATIONAL EXPERIENCES DATA
// ==========================================

const experiences = [
  {
    number: "01",
    title: "Regional Conference of Youth Asia and the Pacific",
    location: "Philippines",
    image: "/u1.webp",
    icon: UsersRound,
    category: {
      en: "YOUTH DEVELOPMENT & REGIONAL COOPERATION",
      mr: "युवक विकास आणि प्रादेशिक सहकार्य",
    },
    description: {
      en: "Participation in a regional platform bringing together youth perspectives from Asia and the Pacific. The conference provided an opportunity to engage with discussions on youth development, regional cooperation and the role of young people in addressing shared challenges.",
      mr: "आशिया आणि पॅसिफिक क्षेत्रातील युवकांचे विचार एकत्र आणणाऱ्या प्रादेशिक व्यासपीठावरील सहभाग. युवक विकास, प्रादेशिक सहकार्य आणि सामायिक आव्हानांवर उपाय शोधण्यात युवकांची भूमिका याविषयीच्या चर्चांमध्ये सहभागी होण्याची संधी.",
    },
  },
  {
    number: "02",
    title: "Youth for Environment in School Organization",
    location: "Baybay City, Philippines",
    image: "/u2.webp",
    icon: Leaf,
    category: {
      en: "ENVIRONMENT & YOUTH PARTICIPATION",
      mr: "पर्यावरण आणि युवकांचा सहभाग",
    },
    description: {
      en: "Engagement with a youth-focused environmental initiative highlighting the importance of environmental awareness and student participation. The experience offered an opportunity to understand how young people and educational communities can contribute to environmental responsibility.",
      mr: "पर्यावरणविषयक जागरूकता आणि विद्यार्थ्यांच्या सहभागाचे महत्त्व अधोरेखित करणाऱ्या युवक-केंद्रित पर्यावरण उपक्रमाशी संबंधित सहभाग. पर्यावरणाप्रती जबाबदारी निर्माण करण्यासाठी युवक आणि शैक्षणिक समुदाय कसे योगदान देऊ शकतात, हे समजून घेण्याची संधी.",
    },
  },
  {
    number: "03",
    title: "Fourth Meeting of the ICAPP Youth Wing",
    location: "Moscow, Russia",
    image: "/u3.webp",
    icon: Handshake,
    category: {
      en: "YOUTH LEADERSHIP & INTERNATIONAL DIALOGUE",
      mr: "युवक नेतृत्व आणि आंतरराष्ट्रीय संवाद",
    },
    description: {
      en: "Participation in the fourth meeting of the ICAPP Youth Wing, offering exposure to international youth dialogue and exchanges of perspectives. The meeting provided an opportunity to engage with discussions around youth leadership, cooperation and shared development priorities.",
      mr: "ICAPP Youth Wing च्या चौथ्या बैठकीतील सहभागातून आंतरराष्ट्रीय युवक संवाद आणि विविध दृष्टिकोनांची देवाणघेवाण अनुभवण्याची संधी मिळाली. युवक नेतृत्व, सहकार्य आणि सामायिक विकासाच्या प्राधान्यक्रमांशी संबंधित चर्चांमध्ये सहभागी होता आले.",
    },
  },
  {
    number: "04",
    title: "UN SDG 7 Conference, UNCC",
    location: "Bangkok, Thailand",
    image: "/u4.webp",
    icon: Zap,
    category: {
      en: "SUSTAINABLE ENERGY",
      mr: "शाश्वत ऊर्जा",
    },
    description: {
      en: "Engagement with discussions related to Sustainable Development Goal 7, focusing on access to affordable, reliable, sustainable and modern energy. The conference offered an opportunity to understand the importance of sustainable energy in inclusive development.",
      mr: "शाश्वत विकास उद्दिष्ट ७ अंतर्गत परवडणारी, विश्वासार्ह, शाश्वत आणि आधुनिक ऊर्जा उपलब्धतेशी संबंधित चर्चांमध्ये सहभाग. सर्वसमावेशक विकासामध्ये शाश्वत ऊर्जेचे महत्त्व समजून घेण्याची संधी.",
    },
  },
  {
    number: "05",
    title: "Visit to the Parliament of Malaysia",
    location: "Malaysia",
    image: "/u5.webp",
    icon: Landmark,
    category: {
      en: "GOVERNANCE & DEMOCRATIC INSTITUTIONS",
      mr: "प्रशासन आणि लोकशाही संस्था",
    },
    description: {
      en: "An institutional visit to the Parliament of Malaysia, offering an opportunity to gain exposure to a national legislative institution and understand its role in democratic governance and public representation.",
      mr: "मलेशियाच्या संसदेला दिलेल्या संस्थात्मक भेटीद्वारे राष्ट्रीय विधिमंडळाची ओळख करून घेण्याची संधी मिळाली. लोकशाही प्रशासन आणि जनतेचे प्रतिनिधित्व यामध्ये संसदेची भूमिका समजून घेता आली.",
    },
  },
  {
    number: "06",
    title: "UN 2023 Water Conference",
    location: "New York, USA",
    image: "/u6.webp",
    icon: Waves,
    category: {
      en: "WATER & SUSTAINABILITY",
      mr: "जलसुरक्षा आणि शाश्वतता",
    },
    description: {
      en: "Participation in a global conference focused on water-related development challenges, sustainability and collective action toward water security.",
      mr: "पाण्याशी संबंधित विकासात्मक आव्हाने, शाश्वतता आणि जलसुरक्षेसाठी सामूहिक कृती यांवर केंद्रित जागतिक परिषदेत सहभाग.",
    },
  },
  {
    number: "07",
    title: "UN Women CSW68",
    location: "New York City, USA",
    image: "/u7.webp",
    icon: Users,
    category: {
      en: "GENDER EQUALITY & EMPOWERMENT",
      mr: "लैंगिक समानता आणि सक्षमीकरण",
    },
    description: {
      en: "Exposure to international discussions concerning gender equality, women's empowerment and inclusive development.",
      mr: "लैंगिक समानता, महिला सक्षमीकरण आणि सर्वसमावेशक विकासासंबंधी आंतरराष्ट्रीय चर्चांचा अनुभव.",
    },
  },
];

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "OUR INTERNATIONAL ENGAGEMENTS",
    heading1: "Learning, Sharing and",
    heading2: "Building Global Perspectives.",
    subtitle:
      "A journey of international participation across youth development, environment, sustainability, governance and social progress.",
    experience: "INTERNATIONAL EXPERIENCE",
    location: "EVENT LOCATION",
    footer: "Local Commitment. Global Conversations.",
  },

  mr: {
    eyebrow: "आमचा आंतरराष्ट्रीय सहभाग",
    heading1: "शिकणे, अनुभवांची देवाणघेवाण",
    heading2: "आणि जागतिक दृष्टिकोन.",
    subtitle:
      "युवक विकास, पर्यावरण, शाश्वतता, प्रशासन आणि सामाजिक प्रगतीशी संबंधित विविध आंतरराष्ट्रीय उपक्रमांमधील सहभागाचा प्रवास.",
    experience: "आंतरराष्ट्रीय अनुभव",
    location: "कार्यक्रमाचे ठिकाण",
    footer: "स्थानिक बांधिलकी. जागतिक संवाद.",
  },
};

// ==========================================
// EXPERIENCE STORY COMPONENT
// ==========================================

function ExperienceStory({ item, index, t, isMarathi }) {
  const Icon = item.icon;
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative"
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}
        <div className="relative">
          <div className="relative h-[270px] overflow-hidden rounded-[6px] bg-[#EAF3EC] sm:h-[360px] lg:h-[440px]">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white sm:bottom-7 sm:left-7">
              <MapPin size={18} className="text-[#FFB1A8]" />

              <span className="text-[13px] font-semibold">
                {item.location}
              </span>
            </div>
          </div>

          {/* FLOATING NUMBER */}
          <div
            className={`absolute -bottom-5 ${
              reverse ? "left-5" : "right-5"
            } flex h-[78px] w-[78px] items-center justify-center bg-[#EF6666] text-[30px] font-black text-white shadow-[0_12px_30px_rgba(239,102,102,0.22)] sm:h-[95px] sm:w-[95px] sm:text-[36px]`}
          >
            {item.number}
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative px-1 pt-5 sm:px-3 lg:px-0 lg:pt-0">
          {/* CATEGORY */}
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF3EC] text-[#176A3A]">
              <Icon size={22} />
            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#176A3A] sm:text-[11px] sm:tracking-[0.15em]">
              {item.category[isMarathi ? "mr" : "en"]}
            </span>
          </div>

          {/* EXPERIENCE NUMBER */}
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#EF6666]">
            {t.experience} / {item.number}
          </p>

          {/* TITLE */}
          <h3 className="max-w-[530px] text-[28px] font-black leading-[1.2] tracking-tight text-[#17392E] sm:text-[36px] lg:text-[40px]">
            {item.title}
          </h3>

          <div className="my-7 h-[3px] w-16 bg-[#EF6666]" />

          {/* DESCRIPTION */}
          <p className="max-w-[530px] text-[14px] leading-[1.95] text-[#65756B] sm:text-[16px]">
            {item.description[isMarathi ? "mr" : "en"]}
          </p>

          {/* LOCATION */}
          <div className="mt-9 flex items-center gap-3 border-t border-[#E1EAE3] pt-6">
            <Globe2 size={20} className="shrink-0 text-[#176A3A]" />

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#8A9A8F]">
                {t.location}
              </p>

              <p className="mt-1 text-[14px] font-bold text-[#17392E]">
                {item.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ==========================================
// INTERNATIONAL ENGAGEMENTS SECTION
// ==========================================

export default function InternationalEngagements() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const t = content[isMarathi ? "mr" : "en"];

  return (
    <section
      id="international-engagements"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#EAF3EC] blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#FCEDEC] blur-[110px]" />

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-14">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-[900px] sm:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-9 bg-[#EF6666]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#176A3A]">
              {t.eyebrow}
            </span>
          </div>

          <h2 className="text-[34px] font-black leading-[1.14] tracking-tight text-[#17392E] sm:text-[46px] lg:text-[53px]">
            {t.heading1}
            <br />
            <span className="text-[#EF6666]">
              {t.heading2}
            </span>
          </h2>

          <p className="mt-5 max-w-[700px] text-[14px] leading-[1.9] text-[#68766D] sm:text-[16px]">
            {t.subtitle}
          </p>
        </motion.div>

        {/* ALL 7 INTERNATIONAL EXPERIENCES */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-28">
          {experiences.map((item, index) => (
            <ExperienceStory
              key={item.number}
              item={item}
              index={index}
              t={t}
              isMarathi={isMarathi}
            />
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col items-center justify-center gap-3 border-t border-[#E3EBE5] pt-8 text-center"
        >
          <Globe2 size={22} className="text-[#EF6666]" />

          <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#17392E]">
            {t.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
