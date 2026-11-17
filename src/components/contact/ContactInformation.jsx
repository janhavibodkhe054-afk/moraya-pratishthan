
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Navigation,
  Building2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const offices = [
  {
    id: "registered",
    Icon: Building2,
    enTitle: "Registered Office",
    mrTitle: "नोंदणीकृत कार्यालय",
    enAddress:
      "Heritage Plaza, Wing No. 2, 2nd Floor, Pimpri Chinchwad Link Road, Opposite Morya Hospital, Chinchwad Gaon, Pune, Maharashtra, India.",
    mrAddress:
      "हेरिटेज प्लाझा, विंग नं. २, दुसरा मजला, पिंपरी चिंचवड लिंक रोड, मोरया हॉस्पिटलसमोर, चिंचवड गाव, पुणे, महाराष्ट्र, भारत.",
    phone: "+91 94220 36639",
    tel: "+919422036639",
    mapQuery:
      "Heritage Plaza Wing No 2 Opposite Morya Hospital Chinchwad Gaon Pune Maharashtra India",
  },
  {
    id: "branch",
    Icon: GraduationCap,
    enTitle: "Branch Office",
    mrTitle: "शाखा कार्यालय",
    enAddress:
      "Loknete Aamdar Lakshman Jagtap Paramedical College, 3rd Floor, The New Millennium English Medium School & Junior College, Samarth Nagar, Opposite SBI Bank, New Sangvi, Pune, Maharashtra, India.",
    mrAddress:
      "लोकनेते आमदार लक्ष्मण जगताप पॅरामेडिकल कॉलेज, तिसरा मजला, द न्यू मिलेनियम इंग्लिश मीडियम स्कूल अँड ज्युनिअर कॉलेज, समर्थ नगर, एसबीआय बँकेसमोर, नवी सांगवी, पुणे, महाराष्ट्र, भारत.",
    phone: "+91 77449 48000",
    tel: "+917744948000",
    mapQuery:
      "Loknete Aamdar Lakshman Jagtap Paramedical College New Sangvi Pune Maharashtra India",
  },
];

const email = "moryasamajikpratishthan@gmail.com";

export default function ContactInformation() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "संपर्क माहिती",
        heading1: "आमच्याशी संपर्क",
        heading2: "साधण्यासाठी.",
        description:
          "प्रवेश, संस्थात्मक सहकार्य किंवा इतर चौकशीसाठी आमच्या कार्यालयाशी संपर्क साधा.",
        directions: "Google Maps वर दिशा पाहा",
        connect: "आमच्याशी थेट संपर्क साधा",
        phone: "संपर्क क्रमांक",
        email: "ईमेल पत्ता",
        emailUs: "ईमेल पाठवा",
        quick: "संपर्कासाठी आम्ही उपलब्ध आहोत",
        quickDesc:
          "तुमच्या चौकशीसाठी योग्य कार्यालयाशी फोन किंवा ईमेलद्वारे संपर्क साधा.",
      }
    : {
        eyebrow: "CONTACT INFORMATION",
        heading1: "We're Here",
        heading2: "to Connect.",
        description:
          "Reach out to our offices for admission enquiries, institutional collaborations or general information.",
        directions: "Get Directions",
        connect: "GET IN TOUCH",
        phone: "Phone Numbers",
        email: "Email Address",
        emailUs: "Send an Email",
        quick: "Let's Start a Conversation",
        quickDesc:
          "Connect with the relevant office by phone or email for your enquiry.",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="contact-information"
      className="relative overflow-hidden bg-[#FBFCFA] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADING */}
        <motion.div {...reveal()} className="mb-9 max-w-[680px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#EF4444]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </div>

          <h2 className="text-[clamp(1.85rem,2.7vw,2.65rem)] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#17392E]">
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </h2>

          <p className="mt-3 text-[14px] leading-[1.8] text-[#66746B] sm:text-[15px]">
            {content.description}
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          {/* OFFICE ADDRESSES */}
          <div className="grid gap-5">
            {offices.map((office, index) => {
              const Icon = office.Icon;

              return (
                <motion.article
                  key={office.id}
                  {...reveal(index * 0.1)}
                  className="group relative overflow-hidden rounded-[16px] border border-[#E4EBE5] bg-white p-5 transition-all duration-300 hover:border-[#BFD8C4] hover:shadow-[0_12px_35px_rgba(23,57,46,0.06)] sm:p-6"
                >
                  <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#006B2E] transition-colors duration-300 group-hover:bg-[#EF4444]" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#006B2E]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[17px] font-extrabold text-[#17392E]">
                        {isMarathi ? office.mrTitle : office.enTitle}
                      </h3>

                      <p className="mt-2 max-w-[670px] text-[13px] leading-[1.85] text-[#66746B] sm:text-[14px]">
                        {isMarathi ? office.mrAddress : office.enAddress}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#EDF0EC] pt-4">
                        <a
                          href={`tel:${office.tel}`}
                          className="inline-flex items-center gap-2 text-[13px] font-bold text-[#17392E] transition-colors hover:text-[#EF4444]"
                        >
                          <Phone size={16} className="text-[#006B2E]" />
                          {office.phone}
                        </a>

                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            office.mapQuery
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[12px] font-extrabold text-[#006B2E] transition-colors hover:text-[#EF4444]"
                        >
                          <Navigation size={15} />
                          {content.directions}
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* RIGHT CONTACT PANEL */}
          <motion.aside
            {...reveal(0.15)}
            className="overflow-hidden rounded-[16px] border border-[#DCE9DF] bg-[#F0F7F1] p-6 sm:p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#EF4444]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#006B2E]">
                {content.connect}
              </span>
            </div>

            <h3 className="text-[20px] font-extrabold leading-[1.3] text-[#17392E]">
              {content.quick}
            </h3>

            <p className="mt-2 text-[13px] leading-[1.8] text-[#66746B]">
              {content.quickDesc}
            </p>

            <div className="mt-6 space-y-5 border-t border-[#D7E5DA] pt-5">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[#006B2E]">
                  <Phone size={17} />
                  <span className="text-[12px] font-bold">
                    {content.phone}
                  </span>
                </div>

                {offices.map((office) => (
                  <a
                    key={office.id}
                    href={`tel:${office.tel}`}
                    className="block py-1 text-[14px] font-extrabold text-[#17392E] transition-colors hover:text-[#EF4444]"
                  >
                    {office.phone}
                  </a>
                ))}
              </div>

              <div className="border-t border-[#D7E5DA] pt-5">
                <div className="mb-2 flex items-center gap-2 text-[#006B2E]">
                  <Mail size={17} />
                  <span className="text-[12px] font-bold">
                    {content.email}
                  </span>
                </div>

                
              </div>
            </div>

            
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
