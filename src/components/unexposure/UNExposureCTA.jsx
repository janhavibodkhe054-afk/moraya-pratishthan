
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/Languagecontext";

const content = {
  en: {
    title: "Global Exposure. Local Impact.",
    description:
      "Discover our initiatives in education, skill development and community empowerment.",
    button: "Explore Our Community Programs",
  },
  mr: {
    title: "जागतिक अनुभव. स्थानिक परिवर्तन.",
    description:
      "शिक्षण, कौशल्य विकास आणि सामाजिक सक्षमीकरणासाठी आमचे उपक्रम जाणून घ्या.",
    button: "आमचे सामाजिक उपक्रम जाणून घ्या",
  },
};

export default function UNExposureCTA() {
  const { language } = useLanguage();
  const t = content[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="un-exposure-cta"
      className="bg-[#F5F8F5] py-10 sm:py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 lg:flex-row lg:text-left"
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E3EEE6] text-[#176A3A]">
            <Globe2 size={24} />
          </div>

          <div>
            <h2 className="text-[23px] font-extrabold text-[#17392E] sm:text-[27px]">
              {t.title}
            </h2>

            <p className="mt-1 text-[13px] leading-relaxed text-[#68766D] sm:text-[14px]">
              {t.description}
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <Link
          to="/programs"
          className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-[#17392E] px-6 py-3.5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#EF6666] sm:w-auto"
        >
          {t.button}

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
