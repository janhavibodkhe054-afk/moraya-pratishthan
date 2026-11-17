
import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Stethoscope } from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const collegeLogos = [
  {
    id: 1,
    name: "College 1",
    image: "/c1.webp",
  },
  {
    id: 2,
    name: "College 2",
    image: "/c2.avif",
  },
  {
    id: 3,
    name: "College 3",
    image: "/c3.webp",
  },
  {
    id: 4,
    name: "College 4",
    image: "/c4.webp",
  },
  {
    id: 5,
    name: "College 5",
    image: "/cc4.webp",
  },
  {
    id: 6,
    name: "College 6",
    image: "/c5.webp",
  },
];

export default function ClinicalExposureSection() {
  const { language } = useLanguage();

  const isMarathi = language === "mr";

  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] py-16 sm:py-20 lg:py-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-[#17392E]/[0.05] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#EF6666]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#EF6666]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF6666] sm:text-xs">
              {isMarathi
                ? "क्लिनिकल अनुभव"
                : "Clinical Exposure"}
            </span>
            <span className="h-[2px] w-8 bg-[#EF6666]" />
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#17392E] sm:text-4xl lg:text-[46px]">
            {isMarathi ? (
              <>
                प्रत्यक्ष अनुभवातून
                <span className="text-[#EF6666]"> कौशल्य विकास</span>
              </>
            ) : (
              <>
                Learning Beyond
                <span className="text-[#EF6666]"> Classrooms.</span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-5 max-w-[850px] text-sm leading-7 text-[#68736D] sm:text-base">
            {isMarathi
              ? "आमच्या संलग्न रुग्णालयांमधील प्रशिक्षण आणि प्रत्यक्ष कामाच्या अनुभवातून विद्यार्थ्यांना आरोग्यसेवेतील प्रत्यक्ष कार्यपद्धती समजण्यास मदत होते. अनुभवी वैद्यकीय व्यावसायिकांसोबत काम करताना ते रुग्णसेवा, हॉस्पिटलमधील प्रक्रिया आणि व्यावसायिक नैतिकतेची समज विकसित करतात. शैक्षणिक प्रशिक्षणासोबत मिळणारा हा अनुभव विद्यार्थ्यांना आत्मविश्वासाने करिअर सुरू करण्यास तयार करतो."
              : "Our students gain hands-on clinical exposure through placements at the partner hospitals listed below. These institutions are formally associated with us and support our training, internship, and on-the-job learning initiatives. Through these collaborations, students observe real-world healthcare practices, interact with experienced medical professionals, and strengthen their clinical skills. This exposure helps them understand hospital workflows, patient care protocols, and professional ethics. Together with our academic training, these hospital associations ensure that students are job-ready and confident when they step into their healthcare careers."}
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {[
            {
              icon: <Stethoscope size={23} />,
              title: isMarathi ? "प्रत्यक्ष प्रशिक्षण" : "Clinical Training",
              desc: isMarathi
                ? "प्रत्यक्ष आरोग्यसेवेचा अनुभव"
                : "Real-world healthcare exposure",
            },
            {
              icon: <Building2 size={23} />,
              title: isMarathi ? "रुग्णालय अनुभव" : "Hospital Experience",
              desc: isMarathi
                ? "हॉस्पिटलच्या कार्यपद्धतीची ओळख"
                : "Understanding hospital workflows",
            },
            {
              icon: <GraduationCap size={23} />,
              title: isMarathi ? "करिअर तयारी" : "Career Readiness",
              desc: isMarathi
                ? "कौशल्य आणि आत्मविश्वास विकास"
                : "Skills, confidence and professionalism",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-[#17392E]/10 bg-white p-6 text-center shadow-[0_8px_30px_rgba(23,57,46,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(23,57,46,0.09)]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#17392E] text-white">
                {item.icon}
              </div>

              <h3 className="text-base font-bold text-[#17392E]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-[#7A8580]">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* College Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-7 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#EF6666]">
              {isMarathi ? "आमच्या शैक्षणिक संस्था" : "Our Associated Colleges"}
            </span>

            <h3 className="mt-2 text-xl font-extrabold text-[#17392E] sm:text-2xl">
              {isMarathi
                ? "आमच्या संस्थात्मक भागीदारी"
                : "Our Institutional Network"}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

            {collegeLogos.map((college, index) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group flex h-[145px] items-center justify-center rounded-2xl border border-[#17392E]/10 bg-white p-5 shadow-[0_5px_25px_rgba(23,57,46,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EF6666]/40 hover:shadow-[0_12px_30px_rgba(23,57,46,0.09)] sm:h-[155px]"
              >
                <img
                  src={college.image}
                  alt={college.name}
                  loading="lazy"
                  className="max-h-[100px] max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
