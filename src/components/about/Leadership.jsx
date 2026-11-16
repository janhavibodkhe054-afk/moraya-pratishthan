
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { UserRound } from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

// =====================================
// LEADERSHIP MEMBERS
// =====================================

const leadership = [
  {
    id: 1,
    name: "Dr. Ganesh M. Ambike",
    role: "President",
    roleMr: "अध्यक्ष",
    photo: "/ganesh.webp",
  },
  {
    id: 2,
    name: "Mr. Nitin L. Pingale",
    role: "Vice President",
    roleMr: "उपाध्यक्ष",
    photo: "/nitin.webp",
  },
  {
    id: 3,
    name: "Dr. Santosh D. Dhumane",
    role: "Secretary",
    roleMr: "सचिव",
    photo: "/santosh.webp",
  },
  {
    id: 4,
    name: "Dr. Rakhi A. Zope",
    role: "Treasurer",
    roleMr: "खजिनदार",
    photo: "/rakhi.webp",
  },
];

// =====================================
// BOARD OF TRUSTEES
// =====================================

const trustees = [
  {
    id: 5,
    name: "Dr. Santosh K. Pawar",
    role: "Trustee",
    roleMr: "विश्वस्त",
    photo: "/santoshp.webp",
  },
  {
    id: 6,
    name: "Dr. Saroj G. Ambike",
    role: "Trustee",
    roleMr: "विश्वस्त",
    photo: "/saroj.webp",
  },
  {
    id: 7,
    name: "Dr. Malati V. Purnaye",
    role: "Trustee",
    roleMr: "विश्वस्त",
    photo: "/malati.webp",
  },
  {
    id: 8,
    name: "Dr. Sanjay B. Wadkar",
    role: "Trustee",
    roleMr: "विश्वस्त",
    photo: "/sanjay.webp",
  },
  {
    id: 9,
    name: "Mr. Vishal V. Dongare",
    role: "Trustee",
    roleMr: "विश्वस्त",
    photo: "/vishal.webp",
  },
  {
    id: 10,
    name: "Dr. Suhas A. Lunkad",
    role: "Trustee",
    roleMr: "विश्वस्त",
    photo: "/suhas.webp",
  },
  {
    id: 11,
    name: "Mr. Jalindar B. Kardile",
    role: "Trustee",
    roleMr: "विश्वस्त",
    photo: "/jalinder.webp",
  },
];

// =====================================
// PROFILE CARD
// =====================================

function ProfileCard({ member, index, isMarathi, reduceMotion }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={
        reduceMotion ? false : { opacity: 0, y: 18 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.06, 0.3),
      }}
      className="group overflow-hidden rounded-[16px] border border-[#E3EAE3] bg-white shadow-[0_5px_22px_rgba(23,57,46,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(23,57,46,0.10)]"
    >
      {/* MEMBER PHOTO */}
      <div className="relative aspect-[4/4.2] overflow-hidden bg-[#E7EEE8]">
        {!imageError ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#E5EFE6] to-[#D5E4D8]">
            <UserRound
              size={52}
              strokeWidth={1.2}
              className="text-[#7C9C86]"
            />
          </div>
        )}

        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#EF4444]" />
      </div>

      {/* NAME AND ROLE */}
      <div className="px-3 py-4 text-center sm:px-4 sm:py-5">
        <h3 className="text-[13px] font-extrabold leading-[1.45] text-[#17392E] sm:text-[15px]">
          {member.name}
        </h3>

        <p className="mt-1.5 text-[11px] font-bold text-[#006B2E] sm:text-[12px]">
          {isMarathi ? member.roleMr : member.role}
        </p>
      </div>
    </motion.article>
  );
}

// =====================================
// MAIN TEAM SECTION
// =====================================

export default function Leadership() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-team"
      className="relative overflow-hidden bg-[#F8FAF7] py-14 sm:py-16 lg:py-20"
    >
      {/* SUBTLE BACKGROUND */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#E4F0E6]/60 blur-[90px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">

        {/* ==========================
            LEADERSHIP
        ========================== */}

        <div id="leadership" className="mb-14 sm:mb-16">
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-7 bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
                {isMarathi ? "आमचे नेतृत्व" : "OUR LEADERSHIP"}
              </span>

              <span className="h-[2px] w-7 bg-[#EF4444]" />
            </div>

            <h2 className="text-[clamp(1.9rem,2.8vw,2.7rem)] font-extrabold tracking-[-0.035em] text-[#17392E]">
              {isMarathi
                ? "नेतृत्व मंडळ"
                : "Meet Our Leadership"}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {leadership.map((member, index) => (
              <ProfileCard
                key={member.id}
                member={member}
                index={index}
                isMarathi={isMarathi}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* SECTION DIVIDER */}
        <div className="mb-12 flex items-center gap-4 sm:mb-14">
          <div className="h-px flex-1 bg-[#DEE8DF]" />
          <div className="h-2 w-2 rotate-45 bg-[#EF4444]" />
          <div className="h-px flex-1 bg-[#DEE8DF]" />
        </div>

        {/* ==========================
            BOARD OF TRUSTEES
        ========================== */}

        <div id="board-of-trustees">
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-7 bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
                {isMarathi ? "विश्वस्त मंडळ" : "OUR TRUSTEES"}
              </span>

              <span className="h-[2px] w-7 bg-[#EF4444]" />
            </div>

            <h2 className="text-[clamp(1.9rem,2.8vw,2.7rem)] font-extrabold tracking-[-0.035em] text-[#17392E]">
              {isMarathi
                ? "विश्वस्त मंडळ"
                : "Board of Trustees"}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {trustees.map((member, index) => (
              <ProfileCard
                key={member.id}
                member={member}
                index={index}
                isMarathi={isMarathi}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
