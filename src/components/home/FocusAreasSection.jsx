
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const images = [
  "https://images.unsplash.com/photo-1581093458791-9d42e3c1e6aa?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=85",
];

const content = {
  en: {
    eyebrow: "OUR KEY FOCUS AREAS",
    heading1: "Our Work.",
    heading2: "Our Commitment.",
    subtitle:
      "Integrated Initiatives for Sustainable Community Development.",
    button: "Explore Our Programs",
    areas: [
      {
        title: "Skill Development & Education",
        description:
          "Career-oriented paramedical, technical and vocational training to improve employability.",
      },
      {
        title: "Healthcare & Public Health",
        description:
          "Health awareness programs, medical camps, blood donation and community healthcare initiatives.",
      },
      {
        title: "Women & Youth Empowerment",
        description:
          "Practical training, mentorship and livelihood opportunities for economic independence.",
      },
      {
        title: "CSR & Community Development",
        description:
          "Collaborative, outcome-focused programs addressing community needs.",
      },
      {
        title: "Environmental Sustainability",
        description:
          "Nirmalya collection, responsible waste management and environmental awareness.",
      },
      {
        title: "Disaster Relief & Community Resilience",
        description:
          "Volunteer-led emergency assistance and relief support during natural disasters.",
      },
    ],
  },

  mr: {
    eyebrow: "आमची प्रमुख कार्यक्षेत्रे",
    heading1: "आमचे कार्य.",
    heading2: "आमची बांधिलकी.",
    subtitle: "शाश्वत सामाजिक विकासासाठी एकात्मिक उपक्रम.",
    button: "आमचे उपक्रम पाहा",
    areas: [
      {
        title: "कौशल्य विकास आणि शिक्षण",
        description:
          "रोजगारक्षमता वाढवण्यासाठी पॅरामेडिकल, तांत्रिक आणि व्यावसायिक प्रशिक्षण.",
      },
      {
        title: "आरोग्यसेवा आणि सार्वजनिक आरोग्य",
        description:
          "आरोग्य जनजागृती, वैद्यकीय शिबिरे, रक्तदान आणि सामुदायिक आरोग्य उपक्रम.",
      },
      {
        title: "महिला आणि युवा सक्षमीकरण",
        description:
          "आर्थिक स्वावलंबनासाठी व्यावहारिक प्रशिक्षण, मार्गदर्शन आणि उपजीविकेच्या संधी.",
      },
      {
        title: "CSR आणि सामाजिक विकास",
        description:
          "समाजाच्या गरजा लक्षात घेऊन सहकार्याने राबवले जाणारे परिणामकारक उपक्रम.",
      },
      {
        title: "पर्यावरणीय शाश्वतता",
        description:
          "निर्माल्य संकलन, जबाबदार कचरा व्यवस्थापन आणि पर्यावरण जनजागृती.",
      },
      {
        title: "आपत्ती मदत आणि सामाजिक पुनर्बांधणी",
        description:
          "नैसर्गिक आपत्तीच्या काळात स्वयंसेवकांच्या माध्यमातून आपत्कालीन मदत आणि सहाय्य.",
      },
    ],
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function FocusAreasSection() {
  const { language } = useLanguage();
  const t = content[language === "mr" ? "mr" : "en"];

  return (
    <section
      id="focus-areas"
      className="bg-[#FAFAF9] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#EF4444]" />

            <span className="text-[12px] font-bold uppercase tracking-[0.17em] text-[#68716D] sm:text-[13px]">
              {t.eyebrow}
            </span>

            <span className="h-[2px] w-8 bg-[#EF4444]" />
          </div>

          <h2 className="text-[36px] font-black leading-[1.15] tracking-tight text-[#252B2D] sm:text-[46px] lg:text-[52px]">
            {t.heading1}{" "}
            <span className="text-[#EF4444]">
              {t.heading2}
            </span>
          </h2>

          <p className="mt-4 text-[16px] leading-[1.75] text-[#68716D] sm:text-[18px]">
            {t.subtitle}
          </p>
        </motion.div>

        {/* SIMPLE IMAGE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-11 grid gap-6 sm:grid-cols-2 lg:mt-13 lg:grid-cols-3"
        >
          {t.areas.map((area, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -7 }}
              className="group overflow-hidden rounded-[12px] border border-[#EAECEA] bg-white shadow-[0_5px_22px_rgba(0,0,0,0.035)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
            >
              {/* IMAGE */}
              <div className="relative h-[230px] overflow-hidden bg-[#E9ECE9] sm:h-[240px] lg:h-[235px]">
                <img
                  src={images[index]}
                  alt={area.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#EF4444] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* CONTENT */}
              <div className="flex min-h-[190px] flex-col items-center px-6 pb-7 pt-6 text-center sm:px-7">
                <h3 className="text-[21px] font-extrabold leading-[1.35] text-[#252B2D] sm:text-[22px]">
                  {area.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.75] text-[#69736E] sm:text-[16px]">
                  {area.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-11 flex justify-center"
        >
          <Link
            to="/programs"
            className="group inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#252B2D] px-8 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#EF4444]"
          >
            {t.button}

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
