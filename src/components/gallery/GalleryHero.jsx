
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  HeartHandshake,
  Images,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const photos = {
  main: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
  top: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=85",
  bottom: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=85",
};

export default function GalleryHero() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "आमची फोटो गॅलरी",
        heading1: "प्रत्येक क्षणात",
        heading2: "परिवर्तनाची गोष्ट.",
        description:
          "कौशल्य विकास, आरोग्य उपक्रम आणि समाजसेवेतील प्रेरणादायी क्षणांची एक सुंदर झलक. आमच्या कार्याचा प्रवास छायाचित्रांमधून अनुभवा.",
        button: "गॅलरी एक्सप्लोर करा",
        label: "MOMENTS THAT MATTER",
        floating: "Together for Change",
      }
    : {
        eyebrow: "OUR PHOTO GALLERY",
        heading1: "Every Moment",
        heading2: "Tells a Story.",
        description:
          "A visual journey through meaningful moments of learning, care and community action. Explore the people, experiences and initiatives that shape our mission.",
        button: "Explore Our Gallery",
        label: "MOMENTS THAT MATTER",
        floating: "Together for Change",
      };

  const reveal = (delay = 0, x = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20, x },
    animate: { opacity: 1, y: 0, x: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  const scrollToGallery = () => {
    document.getElementById("gallery-grid")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="gallery-hero"
      className="relative isolate overflow-hidden bg-[#FAFAF6]"
    >
      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -right-32 -top-36 h-[450px] w-[450px] rounded-full bg-[#E6F0E5]/65 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-36 -left-28 h-[320px] w-[320px] rounded-full bg-[#FBE9E6]/50 blur-[85px]" />

      <div className="relative mx-auto grid min-h-[490px] max-w-[1320px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-12 lg:py-16">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-[560px]">
          <motion.div
            {...reveal(0)}
            className="mb-5 flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E7F1E8] text-[#006B2E]">
              <Images size={18} />
            </span>

            <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#006B2E]">
              {content.eyebrow}
            </span>

            <span className="h-[2px] w-7 bg-[#EF4444]" />
          </motion.div>

          <motion.h1
            {...reveal(0.1)}
            className="text-[clamp(2.2rem,3.8vw,3.7rem)] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#17392E]"
          >
            {content.heading1}
            <br />
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.2)}
            className="mt-5 max-w-[490px] text-[14px] leading-[1.9] text-[#66746B] sm:text-[15px]"
          >
            {content.description}
          </motion.p>

          <motion.div
            {...reveal(0.3)}
            className="mt-7 flex flex-wrap items-center gap-5"
          >
            <button
              type="button"
              onClick={scrollToGallery}
              className="group inline-flex items-center gap-3 rounded-full bg-[#17392E] px-6 py-3.5 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#006B2E] hover:shadow-[0_10px_25px_rgba(23,57,46,0.15)]"
            >
              {content.button}

              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </button>

            <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#8B9B90]">
              <Camera size={15} className="text-[#EF4444]" />
              {content.label}
            </span>
          </motion.div>
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <motion.div
          {...reveal(0.15, 30)}
          className="relative mx-auto w-full max-w-[570px]"
        >
          <div className="relative h-[350px] w-full sm:h-[420px]">

            {/* BACK DECORATIVE ARCH */}
            <div
              className="absolute inset-y-3 left-[13%] right-[13%] bg-[#E1EEE2]"
              style={{
                borderRadius: "46% 46% 18% 18% / 35% 35% 12% 12%",
                transform: "rotate(-5deg)",
              }}
            />

            {/* MAIN IMAGE - UNIQUE ARCH SHAPE */}
            <div
              className="absolute inset-y-4 left-[15%] right-[15%] overflow-hidden border-[5px] border-white shadow-[0_25px_55px_rgba(23,57,46,0.15)]"
              style={{
                borderRadius: "48% 48% 16% 16% / 36% 36% 12% 12%",
              }}
            >
              <img
                src={photos.main}
                alt="Illustrative community volunteering"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10291F]/35 via-transparent to-transparent" />
            </div>

            {/* TOP RIGHT PHOTO */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="absolute right-0 top-[5%] h-[112px] w-[112px] rotate-[8deg] overflow-hidden rounded-[24px] border-[5px] border-white bg-white shadow-[0_15px_35px_rgba(23,57,46,0.17)] sm:h-[145px] sm:w-[145px]"
            >
              <img
                src={photos.top}
                alt="Illustrative teamwork"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* BOTTOM LEFT PHOTO */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="absolute bottom-[5%] left-0 h-[105px] w-[130px] -rotate-[7deg] overflow-hidden rounded-[22px] border-[5px] border-white bg-white shadow-[0_15px_35px_rgba(23,57,46,0.17)] sm:h-[135px] sm:w-[165px]"
            >
              <img
                src={photos.bottom}
                alt="Illustrative community gathering"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* FLOATING LABEL */}
            <div className="absolute bottom-[3%] right-[1%] flex items-center gap-2 rounded-full border border-[#DCE9DF] bg-white px-4 py-2.5 shadow-[0_8px_25px_rgba(23,57,46,0.1)]">
              <HeartHandshake size={17} className="text-[#EF4444]" />

              <span className="text-[11px] font-extrabold text-[#17392E]">
                {content.floating}
              </span>
            </div>

            {/* DECORATIVE SPARKLE */}
            <Sparkles
              size={25}
              className="absolute left-[5%] top-[10%] text-[#EF4444]/70"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM LINE */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#EF4444] via-[#006B2E] to-transparent" />
    </section>
  );
}
