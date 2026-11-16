
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Navigation,
} from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

// Replace these values with verified official details.
const settings = {
  logo: "/logo.jpeg",

  phone: "",
  email: "",
  address: "Pune, Maharashtra, India",

  mapQuery: "Pune, Maharashtra, India",

  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: "",
};

const translations = {
  en: {
    brand: "Morya Samajik Pratishthan",
    established: "EST. 1995",
    tagline: "Empowering People. Transforming Communities.",
    description:
      "Creating opportunities through education, healthcare, skill development and community empowerment since 1995.",
    pages: "Explore",
    contact: "Contact Us",
    social: "Stay Connected",
    directions: "Get Directions",
    top: "Back to Top",
    rights: "All rights reserved.",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/team" },
      { label: "UN Exposure", to: "/un-exposure" },
      { label: "Our Colleges", to: "/colleges" },
      { label: "Programs & Courses", to: "/programs" },
      { label: "CSR Partnerships", to: "/csr" },
      { label: "Success Stories", to: "/success-stories" },
      { label: "Gallery", to: "/gallery" },
      { label: "Contact Us", to: "/contact" },
      { label: "Student Enquiry", to: "/enquiry" },
    ],
  },
  mr: {
    brand: "मोरया सामाजिक प्रतिष्ठान",
    established: "स्थापना १९९५",
    tagline: "लोकांचे सक्षमीकरण. समाजाचे परिवर्तन.",
    description:
      "१९९५ पासून शिक्षण, आरोग्यसेवा, कौशल्य विकास आणि सामाजिक सक्षमीकरणाच्या माध्यमातून संधी निर्माण करण्यासाठी कार्यरत.",
    pages: "सर्व पेजेस",
    contact: "संपर्क साधा",
    social: "आमच्याशी जोडले जा",
    directions: "मार्गदर्शन मिळवा",
    top: "वर जा",
    rights: "सर्व हक्क राखीव.",
    links: [
      { label: "मुख्यपृष्ठ", to: "/" },
      { label: "आमच्याविषयी", to: "/about" },
      { label: "आमची टीम", to: "/team" },
      { label: "आंतरराष्ट्रीय सहभाग", to: "/un-exposure" },
      { label: "आमची महाविद्यालये", to: "/colleges" },
      { label: "अभ्यासक्रम", to: "/programs" },
      { label: "CSR भागीदारी", to: "/csr" },
      { label: "यशोगाथा", to: "/success-stories" },
      { label: "गॅलरी", to: "/gallery" },
      { label: "संपर्क", to: "/contact" },
      { label: "विद्यार्थी चौकशी", to: "/enquiry" },
    ],
  },
};

// Inline SVGs avoid missing lucide-react social exports.
function SocialIcon({ type }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "facebook")
    return (
      <svg {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
      </svg>
    );

  if (type === "instagram")
    return (
      <svg {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );

  if (type === "linkedin")
    return (
      <svg {...props}>
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M7 10v7M7 7v.01M11 17v-7M11 13a3 3 0 0 1 6 0v4" />
      </svg>
    );

  if (type === "youtube")
    return (
      <svg {...props}>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3V9z" />
      </svg>
    );

  return null;
}

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language === "mr" ? "mr" : "en"];

  const socials = [
    { type: "facebook", url: settings.facebook },
    { type: "instagram", url: settings.instagram },
    { type: "linkedin", url: settings.linkedin },
    { type: "youtube", url: settings.youtube },
  ].filter((social) => social.url.trim());

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    settings.mapQuery
  )}&output=embed`;

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(settings.mapQuery);

  return (
    <footer className="relative isolate overflow-hidden bg-[#19231F] text-white">

      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-32 -top-32 h-[320px] w-[320px] rounded-full bg-[#EF4444]/[0.08] blur-[100px]" />
        <div className="absolute -bottom-32 right-0 h-[320px] w-[320px] rounded-full bg-[#006B2E]/[0.09] blur-[100px]" />
      </div>

      {/* TOP ACCENT */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#EF4444] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* MAIN GRID */}
        <div className="grid gap-9 py-10 md:grid-cols-2 lg:grid-cols-[1fr_1.35fr_1.05fr] lg:gap-12 lg:py-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex w-fit items-center gap-3">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                <img
                  src={settings.logo}
                  alt="Morya Samajik Pratishthan Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-[19px] font-black leading-[1.25] sm:text-[21px]">
                  Morya Samajik
                  <span className="block text-[#FF8585]">
                    Pratishthan
                  </span>
                </h2>

                <span className="mt-1 block text-[10px] font-bold tracking-[0.14em] text-white/45">
                  {t.established}
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-[330px] text-[14px] leading-[1.8] text-white/60">
              {t.description}
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/60">
                {t.social}
              </p>

              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.type}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.type}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#EF4444] hover:bg-[#EF4444] hover:text-white"
                  >
                    <SocialIcon type={social.type} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ALL PAGES IN TWO COLUMNS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="mb-5 flex items-center gap-3 text-[15px] font-extrabold">
              <span className="h-[3px] w-7 bg-[#EF4444]" />
              {t.pages}
            </h3>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-7">
              {t.links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-start gap-1.5 text-[13px] font-medium leading-[1.5] text-white/60 transition-colors hover:text-white sm:text-[14px]"
                  >
                    <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#EF4444] opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-0.5">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT + MAP */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <h3 className="mb-5 flex items-center gap-3 text-[15px] font-extrabold">
              <span className="h-[3px] w-7 bg-[#EF4444]" />
              {t.contact}
            </h3>

            <div className="space-y-3.5">

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#FF8585]" />
                <span className="text-[13px] leading-[1.6] text-white/65 sm:text-[14px]">
                  {settings.address}
                </span>
              </div>

              {settings.phone && (
                <a
                  href={`tel:${settings.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-3 text-[14px] text-white/65 transition-colors hover:text-white"
                >
                  <Phone size={18} className="shrink-0 text-[#FF8585]" />
                  {settings.phone}
                </a>
              )}

              {settings.email && (
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-3 break-all text-[14px] text-white/65 transition-colors hover:text-white"
                >
                  <Mail size={18} className="shrink-0 text-[#FF8585]" />
                  {settings.email}
                </a>
              )}
            </div>

            {/* MINI MAP */}
            <div className="mt-5 overflow-hidden rounded-xl border border-white/15 bg-white/[0.05] p-[4px]">
              <iframe
                title="Morya Samajik Pratishthan Map"
                src={mapUrl}
                loading="lazy"
                height="115"
                className="block w-full rounded-lg border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-[#FF9292] transition-colors hover:text-white"
            >
              <Navigation size={14} />
              {t.directions}
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/45">
            © {new Date().getFullYear()} Morya Samajik Pratishthan. {t.rights}
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="group inline-flex w-fit items-center gap-2 text-[12px] font-bold text-white/60 transition-colors hover:text-white"
          >
            {t.top}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-[#EF4444] group-hover:bg-[#EF4444]">
              <ArrowUp size={15} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
