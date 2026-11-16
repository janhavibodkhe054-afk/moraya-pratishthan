
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { useLanguage } from "../context/Languagecontext";

// ==========================================
// BRAND & CONTACT DETAILS
// ==========================================

const CONTACT = {
  phone: "+91 94220 36639",
  whatsapp: "919422036639",
  email: "moryasamajikpratishthan@gmail.com",
  location: "Chinchwad, Pune",
  logo: "/logo.jpeg",
};

// ==========================================
// WHATSAPP ENQUIRY
// ==========================================

const getWhatsAppLink = (isMarathi) => {
  const message = isMarathi
    ? "नमस्कार, मला मोरया सामाजिक प्रतिष्ठानच्या अभ्यासक्रम आणि प्रवेश प्रक्रियेबद्दल माहिती हवी आहे."
    : "Hello, I would like to enquire about the courses and admission process at Morya Samajik Pratishthan.";

  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};

// ==========================================
// SOCIAL MEDIA LINKS
// Add official profile URLs
// ==========================================

const SOCIALS = [
  {
    name: "Facebook",
    url: "",
    Icon: FaFacebookF,
  },
  {
    name: "Instagram",
    url: "",
    Icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "",
    Icon: FaLinkedinIn,
  },
];

// ==========================================
// NAVIGATION
// ==========================================

const navItems = [
  { name: "Home", mr: "मुख्यपृष्ठ", path: "/" },
  { name: "About", mr: "आमच्याविषयी", path: "/about" },
  { name: "Colleges", mr: "महाविद्यालये", path: "/colleges" },
  { name: "Programs", mr: "उपक्रम", path: "/programs" },
  { name: "CSR", mr: "सीएसआर", path: "/csr" },
  {
    name: "UN Exposure",
    mr: "आंतरराष्ट्रीय सहभाग",
    path: "/un-exposure",
  },
  {
    name: "Stories",
    mr: "यशोगाथा",
    path: "/success-stories",
  },
  { name: "Gallery", mr: "गॅलरी", path: "/gallery" },
  { name: "Contact", mr: "संपर्क", path: "/contact" },
];

// ==========================================
// SOCIAL ICONS
// ==========================================

function SocialIcons({ small = false }) {
  const activeSocials = SOCIALS.filter(
    (item) => item.url && item.url.trim()
  );

  if (!activeSocials.length) return null;

  return (
    <div className="flex items-center gap-2">
      {activeSocials.map(({ name, url, Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className={`flex items-center justify-center rounded-full bg-white text-[#17392E] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#EF4444] hover:text-white ${
            small ? "h-8 w-8" : "h-10 w-10"
          }`}
        >
          <Icon size={small ? 14 : 17} />
        </a>
      ))}
    </div>
  );
}

// ==========================================
// MAIN NAVBAR
// ==========================================

export default function Navbar() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";

  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileRef = useRef(null);
  const menuButtonRef = useRef(null);

  const label = (en, mr) => (isMarathi ? mr : en);

  const itemLabel = (item) =>
    isMarathi ? item.mr : item.name;

  const closeMenu = () => setMobileOpen(false);

  const whatsappLink = getWhatsAppLink(isMarathi);

  const isLinkActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  // ==========================================
  // SCROLL EFFECT
  // ==========================================

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  // ==========================================
  // CLOSE MOBILE MENU ON PAGE CHANGE
  // ==========================================

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // ==========================================
  // MOBILE SCROLL LOCK & KEYBOARD
  // ==========================================

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }

      if (event.key === "Tab") {
        const focusable = mobileRef.current?.querySelectorAll(
          'a[href], button:not([disabled])'
        );

        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    mobileRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ======================================
          HEADER
      ====================================== */}

      <header className="sticky top-0 z-50 w-full">

        {/* TOP BAR */}
        <div className="bg-[#17392E] text-white">
          <div className="mx-auto flex min-h-[42px] max-w-[1920px] items-center justify-between gap-4 px-5 sm:px-8 xl:px-10 2xl:px-14">

            {/* LEFT CONTACT */}
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${CONTACT.email}`}
                className="hidden items-center gap-2 text-[12px] font-medium text-white/85 transition-colors hover:text-white md:flex"
              >
                <Mail size={15} />
                {CONTACT.email}
              </a>

              <span className="flex items-center gap-2 text-[12px] font-medium text-white/85">
                <MapPin size={15} />
                {label(
                  "Chinchwad, Pune",
                  "चिंचवड, पुणे"
                )}
              </span>
            </div>

            {/* RIGHT CONTACT */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${CONTACT.phone.replace(
                  /[^+\d]/g,
                  ""
                )}`}
                className="flex items-center gap-2 text-[12px] font-semibold text-white/90 transition-colors hover:text-white"
              >
                <Phone size={14} />
                {CONTACT.phone}
              </a>

              <SocialIcons small />
            </div>
          </div>
        </div>

        {/* ======================================
            MAIN NAVBAR
        ====================================== */}

        <motion.div
          animate={{
            boxShadow: scrolled
              ? "0 8px 30px rgba(0,0,0,0.10)"
              : "0 2px 8px rgba(0,0,0,0.04)",
          }}
          transition={{ duration: 0.25 }}
          className="relative bg-white"
        >
          <div className="mx-auto flex h-[88px] max-w-[1920px] items-center justify-between gap-5 px-5 sm:px-8 xl:gap-7 xl:px-10 2xl:h-[94px] 2xl:gap-10 2xl:px-14">

            {/* ==================================
                LOGO
            ================================== */}

            <Link
              to="/"
              onClick={closeMenu}
              className="flex min-w-0 shrink-0 items-center gap-3"
            >
              <img
                src={CONTACT.logo}
                alt="Morya Samajik Pratishthan"
                className="h-[68px] w-[68px] shrink-0 object-contain sm:h-[76px] sm:w-[76px] 2xl:h-[82px] 2xl:w-[82px]"
              />

              <div className="min-w-0 leading-tight">
                <p className="whitespace-nowrap text-[17px] font-black tracking-tight text-[#202725] sm:text-[19px] 2xl:text-[21px]">
                  {label("MORYA", "मोरया")}{" "}
                  <span className="text-[#EF4444]">
                    {label("SAMAJIK", "सामाजिक")}
                  </span>
                </p>

                <p className="text-[14px] font-extrabold tracking-[0.08em] text-[#006B2E] sm:text-[15px] 2xl:text-[17px]">
                  {label(
                    "PRATISHTHAN",
                    "प्रतिष्ठान"
                  )}
                </p>
              </div>
            </Link>

            {/* ==================================
                DESKTOP NAVIGATION
                MORE SPACING BETWEEN PAGES
            ================================== */}

            <nav
              aria-label="Main navigation"
              className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:flex 2xl:gap-6 min-[1800px]:gap-8"
            >
              {navItems.map((item) => {
                const active = isLinkActive(item.path);

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={`group relative shrink-0 whitespace-nowrap px-1.5 py-8 text-[13px] font-bold tracking-[-0.02em] transition-colors duration-300 2xl:px-2 2xl:text-[15px] ${
                      active
                        ? "text-[#EF4444]"
                        : "text-[#29322D] hover:text-[#EF4444]"
                    }`}
                  >
                    {itemLabel(item)}

                    {/* ACTIVE UNDERLINE */}
                    <span
                      className={`absolute bottom-[20px] left-1 right-1 h-[2.5px] origin-left rounded-full bg-[#EF4444] transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </NavLink>
                );
              })}
            </nav>

            {/* ==================================
                RIGHT ACTIONS
            ================================== */}

            <div className="flex shrink-0 items-center gap-3">

              {/* WHATSAPP ENQUIRY */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#EF4444] px-5 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DC2626] hover:shadow-[0_8px_20px_rgba(239,68,68,0.22)] sm:flex 2xl:h-[48px] 2xl:px-6 2xl:text-[14px]"
              >
                {label(
                  "Enquire Now",
                  "चौकशी करा"
                )}

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                ref={menuButtonRef}
                type="button"
                aria-label={label(
                  "Open menu",
                  "मेनू उघडा"
                )}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EF4444] text-white transition-colors hover:bg-[#DC2626] xl:hidden"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ======================================
          MOBILE / TABLET NAVIGATION
      ====================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-[#07160F]/65 backdrop-blur-[3px] xl:hidden"
            />

            {/* MOBILE DRAWER */}
            <motion.aside
              id="mobile-navigation"
              ref={mobileRef}
              role="dialog"
              aria-modal="true"
              aria-label={label(
                "Mobile navigation",
                "मोबाईल नेव्हिगेशन"
              )}
              tabIndex={-1}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(90vw,410px)] flex-col bg-white shadow-2xl xl:hidden"
            >
              {/* DRAWER HEADER */}
              <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-5">

                <div className="flex items-center gap-3">
                  <img
                    src={CONTACT.logo}
                    alt="Morya Samajik Pratishthan"
                    className="h-14 w-14 object-contain"
                  />

                  <div className="leading-tight">
                    <p className="text-[16px] font-black text-[#202725]">
                      {label(
                        "MORYA SAMAJIK",
                        "मोरया सामाजिक"
                      )}
                    </p>

                    <p className="text-[14px] font-extrabold tracking-wider text-[#006B2E]">
                      {label(
                        "PRATISHTHAN",
                        "प्रतिष्ठान"
                      )}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label={label(
                    "Close menu",
                    "मेनू बंद करा"
                  )}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F5F4] text-[#202725] transition-colors hover:bg-red-50 hover:text-[#EF4444]"
                >
                  <X size={22} />
                </button>
              </div>

              {/* ==================================
                  MOBILE NAVIGATION LINKS
              ================================== */}

              <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">

                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">
                  {label(
                    "Explore Our Website",
                    "वेबसाइटवरील पेजेस"
                  )}
                </p>

                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const active = isLinkActive(item.path);

                    return (
                      <motion.div
                        key={item.path}
                        initial={{
                          opacity: 0,
                          x: 16,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.04 + index * 0.035,
                        }}
                      >
                        <NavLink
                          to={item.path}
                          onClick={closeMenu}
                          className={`group flex items-center justify-between rounded-xl px-4 py-4 text-[16px] font-bold transition-all duration-200 ${
                            active
                              ? "bg-[#FFF1F1] text-[#EF4444]"
                              : "text-[#29322D] hover:bg-[#F6F7F6] hover:text-[#EF4444]"
                          }`}
                        >
                          <span>{itemLabel(item)}</span>

                          <ArrowUpRight
                            size={18}
                            className={`transition-all ${
                              active
                                ? "opacity-100"
                                : "opacity-35 group-hover:opacity-100"
                            }`}
                          />
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* WHATSAPP ENQUIRY */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#EF4444] px-5 py-4 text-[15px] font-extrabold text-white transition-colors hover:bg-[#DC2626]"
                >
                  {label(
                    "Apply / Enquire Now",
                    "प्रवेशासाठी चौकशी करा"
                  )}

                  <ArrowRight size={19} />
                </a>

                {/* PHONE */}
                <a
                  href={`tel:${CONTACT.phone.replace(
                    /[^+\d]/g,
                    ""
                  )}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#EFF7F1] px-5 py-3.5 text-[15px] font-bold text-[#006B2E]"
                >
                  <Phone size={18} />
                  {CONTACT.phone}
                </a>

                {/* EMAIL */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-5 flex items-center justify-center gap-2 break-all text-center text-[13px] text-gray-500"
                >
                  <Mail size={16} className="shrink-0" />
                  {CONTACT.email}
                </a>

                {/* SOCIAL ICONS */}
                <div className="mt-6 flex justify-center pb-6">
                  <SocialIcons />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
