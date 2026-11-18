import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Heart,
  Check,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { useLanguage } from "../context/Languagecontext";

// ==========================================
// BRAND INFORMATION
// ==========================================

const CONTACT = {
  phone: "+91 94220 36639",
  email: "moryasamajikpratishthan@gmail.com",
  logo: "/logo.jpeg",
};

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
  { name: "Courses", mr: "अभ्यासक्रम", path: "/courses" },
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
  const socials = SOCIALS.filter(
    (item) => item.url?.trim()
  );

  if (!socials.length) return null;

  return (
    <div className="flex items-center gap-2">
      {socials.map(({ name, url, Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`flex items-center justify-center rounded-full border border-white/20 bg-white/90 text-[#17392E] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8B6A3] hover:bg-[#FFF1EA] hover:text-[#C9533B] ${
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
// DONATE BUTTON
// ==========================================

function DonateButton({
  label,
  mobile = false,
  active = false,
  onClick,
}) {
  return (
    <Link
      to="/donate"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative isolate flex shrink-0 items-center justify-center overflow-hidden border border-[#FFB19D]/50 bg-gradient-to-br from-[#EF6250] via-[#E94F43] to-[#C83731] text-white shadow-[0_8px_22px_rgba(216,64,52,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(216,64,52,0.28)] ${
        mobile
          ? "w-full gap-3 rounded-2xl px-5 py-4 text-[16px] font-semibold"
          : "h-[48px] gap-2.5 rounded-full px-5 text-[14px] font-semibold 2xl:px-6 2xl:text-[15px]"
      }`}
    >
      {/* Glass highlight */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent" />

      {/* Animated light sweep */}
      <span className="pointer-events-none absolute -left-[65%] top-[-80%] h-[260%] w-[45%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[450%]" />

      <Heart
        size={mobile ? 19 : 17}
        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
      />

      <span className="relative z-10 whitespace-nowrap">
        {label}
      </span>

      <ArrowUpRight
        size={mobile ? 19 : 17}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

// ==========================================
// MAIN NAVBAR
// ==========================================

export default function Navbar() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";

  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileRef = useRef(null);
  const menuButtonRef = useRef(null);

  const label = (en, mr) =>
    isMarathi ? mr : en;

  const itemLabel = (item) =>
    isMarathi ? item.mr : item.name;

  const isLinkActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const closeMenu = () => {
    setMobileOpen(false);
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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ==========================================
  // CLOSE MENU ON ROUTE CHANGE
  // ==========================================

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // ==========================================
  // MOBILE KEYBOARD & SCROLL LOCK
  // ==========================================

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }

      if (event.key === "Tab") {
        const focusable =
          mobileRef.current?.querySelectorAll(
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
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        onKeyDown
      );

      menuButtonRef.current?.focus();
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ======================================
          STICKY HEADER
      ====================================== */}

      <header className="sticky top-0 z-50 w-full">

        {/* TOP CONTACT BAR */}
        <div className="relative overflow-hidden bg-[#17392E] text-white">

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#102C22] via-[#17392E] to-[#285341]" />

          <div className="relative mx-auto flex min-h-[42px] max-w-[1920px] items-center justify-between gap-4 px-5 sm:px-8 xl:px-10 2xl:px-14">

            {/* LEFT */}
            <div className="flex items-center gap-6">

              <a
                href={`mailto:${CONTACT.email}`}
                className="hidden items-center gap-2 text-[12px] font-normal text-white/85 transition-colors hover:text-white md:flex"
              >
                <Mail size={14} />
                {CONTACT.email}
              </a>

              <span className="flex items-center gap-2 text-[12px] font-normal text-white/85">
                <MapPin size={14} />
                {label(
                  "Chinchwad, Pune",
                  "चिंचवड, पुणे"
                )}
              </span>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              <a
                href={`tel:${CONTACT.phone.replace(
                  /[^+\d]/g,
                  ""
                )}`}
                className="flex items-center gap-2 text-[12px] font-medium text-white/90 transition-colors hover:text-white"
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
              ? "0 12px 35px rgba(15,45,33,0.11)"
              : "0 2px 12px rgba(15,45,33,0.045)",
          }}
          transition={{ duration: 0.25 }}
          className="relative border-b border-[#E5EBE6] bg-white/95 backdrop-blur-xl"
        >
          <div className="mx-auto flex h-[88px] max-w-[1920px] items-center justify-between gap-3 px-4 sm:px-7 xl:gap-4 xl:px-7 2xl:h-[94px] 2xl:gap-6 2xl:px-12">

            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex min-w-0 shrink-0 items-center gap-2.5"
            >
              <img
                src={CONTACT.logo}
                alt="Morya Samajik Pratishthan"
                className="h-[65px] w-[65px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.035] sm:h-[74px] sm:w-[74px] 2xl:h-[80px] 2xl:w-[80px]"
              />

              <div className="min-w-0 leading-tight">
                <p className="whitespace-nowrap text-[17px] font-bold tracking-tight text-[#202725] sm:text-[19px] 2xl:text-[21px]">
                  {label("MORYA", "मोरया")}{" "}
                  <span className="text-[#EF4444]">
                    {label("SAMAJIK", "सामाजिक")}
                  </span>
                </p>

                <p className="text-[14px] font-bold tracking-[0.075em] text-[#006B2E] sm:text-[15px] 2xl:text-[17px]">
                  {label(
                    "PRATISHTHAN",
                    "प्रतिष्ठान"
                  )}
                </p>
              </div>
            </Link>

            {/* ==================================
                DESKTOP NAVIGATION
            ================================== */}

            <nav
              aria-label="Main navigation"
              className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 min-[1450px]:flex 2xl:gap-1"
            >
              {navItems.map((item) => {
                const active =
                  isLinkActive(item.path);

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    aria-current={
                      active ? "page" : undefined
                    }
                    className={`group relative isolate shrink-0 overflow-hidden whitespace-nowrap rounded-xl px-2.5 py-3 text-[14px] font-semibold tracking-[-0.015em] transition-all duration-300 2xl:px-3 2xl:text-[16px] ${
                      active
                        ? "text-[#17392E]"
                        : "text-[#36443C] hover:-translate-y-[2px] hover:text-[#17392E]"
                    }`}
                  >
                    {/* Active glass pill */}
                    {active && (
                      <motion.span
                        layoutId="active-nav-glass"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 rounded-xl border border-[#BFD8C5] bg-gradient-to-b from-[#F4FBF5] to-[#E7F2EA] shadow-[0_3px_12px_rgba(23,57,46,0.08)]"
                      />
                    )}

                    {/* Hover background */}
                    {!active && (
                      <span className="absolute inset-0 rounded-xl border border-transparent bg-[#EAF3EC]/0 transition-all duration-300 group-hover:border-[#D2E5D6] group-hover:bg-[#EAF3EC]/85 group-hover:shadow-[0_4px_14px_rgba(23,57,46,0.06)]" />
                    )}

                    {/* Label */}
                    <span className="relative z-10">
                      {itemLabel(item)}
                    </span>

                    {/* Active indicator */}
                    {active && (
                      <span className="absolute bottom-[5px] left-1/2 z-10 h-[3px] w-5 -translate-x-1/2 rounded-full bg-[#EF6250]" />
                    )}

                    {/* Hover underline */}
                    {!active && (
                      <span className="absolute bottom-[5px] left-1/2 z-10 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#D66A53] transition-all duration-300 group-hover:w-5" />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* ==================================
                RIGHT ACTIONS
            ================================== */}

            <div className="flex shrink-0 items-center gap-3">

              <div className="hidden sm:block">
                <DonateButton
                  label={label(
                    "Donate Now",
                    "देणगी द्या"
                  )}
                  active={isLinkActive("/donate")}
                />
              </div>

              {/* MOBILE MENU */}
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
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DCE9DF] bg-[#F0F7F2] text-[#17392E] transition-all duration-300 hover:border-[#C2DDC9] hover:bg-[#E0EFE4] min-[1450px]:hidden"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ======================================
          MOBILE / TABLET DRAWER
      ====================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-[#07180F]/65 backdrop-blur-[5px] min-[1450px]:hidden"
            />

            {/* DRAWER */}
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
              initial={
                reduceMotion
                  ? false
                  : { x: "100%" }
              }
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 290,
                damping: 31,
              }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(90vw,410px)] flex-col border-l border-[#DCE8DE] bg-[#FBFDFC] shadow-2xl min-[1450px]:hidden"
            >
              {/* DRAWER HEADER */}
              <div className="flex shrink-0 items-center justify-between border-b border-[#E7EEE8] bg-white px-6 py-5">

                <div className="flex items-center gap-3">
                  <img
                    src={CONTACT.logo}
                    alt="Morya Samajik Pratishthan"
                    className="h-14 w-14 object-contain"
                  />

                  <div className="leading-tight">
                    <p className="text-[16px] font-semibold text-[#202725]">
                      {label(
                        "MORYA SAMAJIK",
                        "मोरया सामाजिक"
                      )}
                    </p>

                    <p className="text-[13px] font-medium tracking-[0.07em] text-[#006B2E]">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E0EAE2] bg-[#F1F6F2] text-[#17392E] transition-colors hover:bg-[#E3EEE6]"
                >
                  <X size={22} />
                </button>
              </div>

              {/* ==================================
                  MOBILE NAVIGATION
              ================================== */}

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">

                <p className="mb-4 px-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#85958A]">
                  {label(
                    "Explore Our Website",
                    "वेबसाइटवरील पेजेस"
                  )}
                </p>

                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const active =
                      isLinkActive(item.path);

                    return (
                      <motion.div
                        key={item.path}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: 14,
                              }
                        }
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: reduceMotion
                            ? 0
                            : 0.03 + index * 0.025,
                        }}
                      >
                        <NavLink
                          to={item.path}
                          onClick={closeMenu}
                          aria-current={
                            active
                              ? "page"
                              : undefined
                          }
                          className={`group relative flex items-center justify-between overflow-hidden rounded-xl border px-4 py-3.5 text-[16px] font-semibold transition-all duration-300 ${
                            active
                              ? "border-[#BED8C5] bg-gradient-to-r from-[#EAF5ED] to-white text-[#17392E] shadow-[0_5px_15px_rgba(23,57,46,0.07)]"
                              : "border-transparent text-[#37483E] hover:border-[#D6E7D9] hover:bg-[#F0F7F2]"
                          }`}
                        >
                          {/* Active left accent */}
                          {active && (
                            <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-[#EF6250]" />
                          )}

                          <span>
                            {itemLabel(item)}
                          </span>

                          <ArrowUpRight
                            size={18}
                            className={`transition-all duration-300 ${
                              active
                                ? "text-[#D76550]"
                                : "text-[#9BAAA0] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D76550]"
                            }`}
                          />
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* DONATE */}
                <div className="mt-6">
                  <DonateButton
                    label={label(
                      "Donate Now",
                      "देणगी द्या"
                    )}
                    mobile
                    active={isLinkActive("/donate")}
                    onClick={closeMenu}
                  />
                </div>

                {/* CONTACT */}
                <a
                  href={`tel:${CONTACT.phone.replace(
                    /[^+\d]/g,
                    ""
                  )}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[#DDEAE0] bg-white px-5 py-3.5 text-[15px] font-medium text-[#17392E] transition-colors hover:bg-[#F1F7F2]"
                >
                  <Phone size={17} />
                  {CONTACT.phone}
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-5 flex items-center justify-center gap-2 break-all text-center text-[13px] text-[#738478] transition-colors hover:text-[#17392E]"
                >
                  <Mail
                    size={16}
                    className="shrink-0"
                  />

                  {CONTACT.email}
                </a>

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
