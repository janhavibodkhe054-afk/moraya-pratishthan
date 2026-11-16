
import React from "react";
import { motion } from "framer-motion";
import { Languages, Check } from "lucide-react";
import { useLanguage } from "../context/Languagecontext";

export default function StickyLanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: "en", label: "EN", full: "English" },
    { code: "mr", label: "मराठी", full: "Marathi" },
  ];

  return (
    <>
      {/* =====================================
          DESKTOP LANGUAGE SWITCHER
          RIGHT SIDE CENTER
      ===================================== */}
      <motion.div
        initial={{ opacity: 0, x: 70, y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed right-0 top-1/2 z-[100] hidden md:block"
      >
        <div className="flex flex-col items-center gap-1.5 rounded-l-2xl border border-r-0 border-gray-200 bg-white/95 px-1.5 py-2 shadow-[-5px_5px_25px_rgba(0,0,0,0.13)] backdrop-blur-xl">

          {/* LANGUAGE ICON */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#006B2E]/10 text-[#006B2E]">
            <Languages size={19} />
          </div>

          {/* LANGUAGE BUTTONS */}
          {languages.map((item) => {
            const active = language === item.code;

            return (
              <motion.button
                key={item.code}
                type="button"
                onClick={() => changeLanguage(item.code)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${item.full}`}
                aria-pressed={active}
                className={`flex min-h-[42px] w-[62px] flex-col items-center justify-center gap-0.5 rounded-xl px-1 text-[13px] font-bold transition-colors duration-300 ${
                  active
                    ? "bg-[#EF4444] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#006B2E]"
                }`}
              >
                {active && <Check size={12} strokeWidth={3} />}
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* =====================================
          MOBILE LANGUAGE SWITCHER
          BOTTOM CENTER
      ===================================== */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-[max(16px,env(safe-area-inset-bottom))] left-1/2 z-[100] -translate-x-1/2 md:hidden"
      >
        <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/95 p-1.5 shadow-[0_8px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl">

          {/* LANGUAGE ICON */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#006B2E]/10 text-[#006B2E]">
            <Languages size={18} />
          </div>

          {/* LANGUAGE BUTTONS */}
          {languages.map((item) => {
            const active = language === item.code;

            return (
              <motion.button
                key={item.code}
                type="button"
                onClick={() => changeLanguage(item.code)}
                whileTap={{ scale: 0.94 }}
                aria-label={`Switch to ${item.full}`}
                aria-pressed={active}
                className={`flex h-10 min-w-[70px] items-center justify-center gap-1 rounded-full px-3 text-[13px] font-bold transition-all duration-300 ${
                  active
                    ? "bg-[#EF4444] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#006B2E]"
                }`}
              >
                {active && <Check size={13} strokeWidth={3} />}
                {item.label}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
