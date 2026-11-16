
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const offices = [
  {
    id: "registered",
    Icon: Building2,
    enTitle: "Registered Office",
    mrTitle: "नोंदणीकृत कार्यालय",
    enLocation: "Chinchwad Gaon, Pune",
    mrLocation: "चिंचवड गाव, पुणे",
    address:
      "Heritage Plaza, Wing No. 2, 2nd Floor, Pimpri Chinchwad Link Road, Opposite Morya Hospital, Chinchwad Gaon, Pune, Maharashtra, India",
  },
  {
    id: "branch",
    Icon: GraduationCap,
    enTitle: "Branch Office",
    mrTitle: "शाखा कार्यालय",
    enLocation: "New Sangvi, Pune",
    mrLocation: "नवी सांगवी, पुणे",
    address:
      "Loknete Aamdar Lakshman Jagtap Paramedical College, 3rd Floor, The New Millennium English Medium School & Junior College, Samarth Nagar, Opposite SBI Bank, New Sangvi, Pune, Maharashtra, India",
  },
];

export default function OfficeLocations() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमची कार्यालये",
        heading1: "आमच्या कार्यालयांना",
        heading2: "भेट द्या.",
        description:
          "आमच्या नोंदणीकृत कार्यालयाचे आणि शाखा कार्यालयाचे स्थान नकाशावर पाहा.",
        directions: "Google Maps वर दिशा पाहा",
      }
    : {
        eyebrow: "FIND OUR OFFICES",
        heading1: "Visit Our",
        heading2: "Locations.",
        description:
          "Find our registered and branch offices on the map and get directions to visit us.",
        directions: "Get Directions",
      };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: 0.6,
      delay,
    },
  });

  return (
    <section
      id="office-locations"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* HEADING */}
        <motion.div {...reveal()} className="mb-8">
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

          <p className="mt-3 text-[14px] leading-[1.8] text-[#66746B]">
            {content.description}
          </p>
        </motion.div>

        {/* MAPS GRID */}
        <div className="grid gap-6 lg:grid-cols-2">
          {offices.map((office, index) => {
            const Icon = office.Icon;

            const mapUrl =
              "https://www.google.com/maps?q=" +
              encodeURIComponent(office.address) +
              "&output=embed";

            const directionsUrl =
              "https://www.google.com/maps/dir/?api=1&destination=" +
              encodeURIComponent(office.address);

            return (
              <motion.article
                key={office.id}
                {...reveal(index * 0.1)}
                className="overflow-hidden rounded-[17px] border border-[#E1EAE3] bg-[#FAFCFA]"
              >
                {/* OFFICE TITLE */}
                <div className="flex items-center gap-3 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F3EB] text-[#006B2E]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-extrabold text-[#17392E]">
                      {isMarathi ? office.mrTitle : office.enTitle}
                    </h3>

                    <p className="mt-1 flex items-center gap-1.5 text-[12px] text-[#66746B]">
                      <MapPin size={13} />
                      {isMarathi
                        ? office.mrLocation
                        : office.enLocation}
                    </p>
                  </div>
                </div>

                {/* GOOGLE MAP */}
                <div className="relative h-[260px] bg-[#E8EEE8] sm:h-[300px]">
                  <iframe
                    title={
                      isMarathi ? office.mrTitle : office.enTitle
                    }
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                {/* DIRECTIONS */}
                <div className="flex justify-end border-t border-[#E1EAE3] bg-white px-5 py-4">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] font-extrabold text-[#006B2E] transition-colors hover:text-[#EF4444]"
                  >
                    {content.directions}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
