
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Quote,
  UserRound,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

// ============================================
// STUDENT SUCCESS STORIES
// Replace photo paths with actual student photos
// ============================================

const students = [
  {
    id: 1,
    name: "Pranav Waghmare",
    course: "Dialysis Technician",
    workplace: "Jupiter Hospital",
    photo: "/22.webp",
    testimonial:
      "Pranav credits the institute's subject training, personality development and interview preparation for supporting his career journey.",
    testimonialMr:
      "विषयाचे सखोल प्रशिक्षण, व्यक्तिमत्त्व विकास आणि मुलाखतीची तयारी यामुळे करिअरच्या प्रवासात महत्त्वाची मदत झाल्याचे प्रणव सांगतो.",
  },
  {
    id: 2,
    name: "Nikita Pawar",
    course: "Dialysis Technician",
    workplace: "Jupiter Hospital, Baner",
    photo: "/3.webp",
    testimonial:
      "Nikita describes her training as life-changing and shares how employment has helped her contribute to her family's financial well-being.",
    testimonialMr:
      "संस्थेतील प्रशिक्षणामुळे आयुष्याला नवी दिशा मिळाली आणि नोकरीच्या माध्यमातून कुटुंबाच्या आर्थिक प्रगतीत योगदान देता आले, असे निकिता सांगते.",
  },
  {
    id: 3,
    name: "Shreyash Kharge",
    course: "Dialysis Technician",
    workplace: "Aditya Birla Hospital",
    photo: "/25.webp",
    testimonial:
      "Shreyash appreciates the support provided by his teachers and the opportunity to pursue a career in paramedical services.",
    testimonialMr:
      "शिक्षकांचे मार्गदर्शन आणि सहकार्य यामुळे पॅरामेडिकल क्षेत्रात करिअर घडवण्याची संधी मिळाल्याबद्दल श्रेयस कृतज्ञता व्यक्त करतो.",
  },
  {
    id: 4,
    name: "Anil Shirsat",
    course: "Operation Theatre Technician",
    workplace: "Jupiter Hospital",
    photo: "/anil.webp",
    testimonial:
      "After moving from Latur to Pune, Anil completed his training, gained practical experience and progressed to a hospital technician role.",
    testimonialMr:
      "लातूरहून पुण्यात आल्यानंतर अनिलने प्रशिक्षण पूर्ण केले, प्रत्यक्ष कामाचा अनुभव घेतला आणि हॉस्पिटल टेक्निशियन म्हणून करिअरमध्ये प्रगती केली.",
  },
  {
    id: 5,
    name: "Rituja Bawar",
    course: "Healthcare Technician",
    workplace: "D. Y. Hospital",
    photo: "/5.webp",
    testimonial:
      "Rituja highlights the importance of quality teaching, practical training and hospital visits in her professional development.",
    testimonialMr:
      "दर्जेदार अध्यापन, प्रात्यक्षिक प्रशिक्षण आणि हॉस्पिटल भेटी यांचा व्यावसायिक प्रगतीत महत्त्वाचा वाटा असल्याचे ऋतुजा सांगते.",
  },
  {
    id: 6,
    name: "Pratiksha Khanekar",
    course: "Paramedical Training Graduate",
    workplace: "Employed",
    photo: "/26.webp",
    testimonial:
      "Pratiksha shares how practical education helped her obtain employment and support her family's financial progress.",
    testimonialMr:
      "प्रात्यक्षिक शिक्षणामुळे रोजगार मिळवण्यास मदत झाली आणि कुटुंबाच्या आर्थिक प्रगतीत योगदान देता आले, असे प्रतीक्षा सांगते.",
  },
  {
    id: 7,
    name: "Doyel Choudhary",
    course: "Operation Theatre Technician",
    workplace: "Senior Cardiac OT Technician",
    photo: "/6.webp",
    testimonial:
      "Doyel describes how academic support, internship guidance and clinical experience contributed to her professional journey.",
    testimonialMr:
      "शैक्षणिक सहकार्य, इंटर्नशिप मार्गदर्शन आणि क्लिनिकल अनुभव यामुळे व्यावसायिक प्रवासात महत्त्वाची मदत झाल्याचे डोयल सांगते.",
  },
  {
    id: 8,
    name: "Nilesh Pund",
    course: "Operation Theatre Technician",
    workplace: "Aditya Birla Hospital",
    photo: "/16.webp",
    testimonial:
      "Nilesh completed practical training and progressed into an operation theatre technician role.",
    testimonialMr:
      "प्रात्यक्षिक प्रशिक्षण पूर्ण केल्यानंतर निलेशने ऑपरेशन थिएटर टेक्निशियन म्हणून आपल्या करिअरची वाटचाल सुरू केली.",
  },
];

// ============================================
// STUDENT IMAGE
// ============================================

function StudentPhoto({ student, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[470px]">
      {/* Background shape */}
      <div
        className={`absolute inset-0 translate-x-3 translate-y-3 rounded-[24px] ${
          index % 2 === 0 ? "bg-[#DCEBDF]" : "bg-[#F7E5E1]"
        }`}
      />

      {/* Image */}
      <div className="relative aspect-[5/4.4] overflow-hidden rounded-[24px] border-[5px] border-white bg-[#E8EEE9] shadow-[0_18px_45px_rgba(23,57,46,0.12)] sm:aspect-[5/4.2]">
        {!imageError ? (
          <img
            src={student.photo}
            alt={`${student.name} - Success Story`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#E8F0E9] to-[#D7E6DB]">
            <UserRound
              size={64}
              strokeWidth={1.1}
              className="text-[#739982]"
            />
            <span className="text-[12px] font-semibold text-[#567462]">
              Student Photo
            </span>
          </div>
        )}
      </div>

      {/* Decorative number */}
      <div className="absolute -bottom-4 -right-3 flex h-[62px] w-[62px] items-center justify-center rounded-[17px] border-[4px] border-white bg-[#17392E] text-[22px] font-extrabold text-white shadow-lg sm:h-[72px] sm:w-[72px]">
        {String(student.id).padStart(2, "0")}
      </div>
    </div>
  );
}

// ============================================
// STUDENT CONTENT
// ============================================

function StudentContent({ student, isMarathi }) {
  return (
    <div className="max-w-[580px]">
      {/* Small eyebrow */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-[2px] w-7 bg-[#EF4444]" />

        <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
          {isMarathi ? "विद्यार्थी यशोगाथा" : "STUDENT SUCCESS STORY"}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-[clamp(1.65rem,2.6vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#17392E]">
        {student.name}
      </h3>

      {/* Course and Workplace */}
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F2E9] text-[#006B2E]">
            <GraduationCap size={18} />
          </span>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A998E]">
              {isMarathi ? "अभ्यासक्रम" : "COURSE"}
            </p>
            <p className="mt-0.5 text-[14px] font-bold text-[#243F31]">
              {student.course}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FCEBE8] text-[#EF4444]">
            <BriefcaseBusiness size={17} />
          </span>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A998E]">
              {isMarathi ? "सध्याचे कार्यस्थळ / पद" : "CURRENT WORKPLACE / ROLE"}
            </p>
            <p className="mt-0.5 text-[14px] font-bold text-[#243F31]">
              {student.workplace}
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="relative mt-6 rounded-[18px] border border-[#E4ECE5] bg-white px-5 py-5 shadow-[0_5px_25px_rgba(23,57,46,0.035)] sm:px-6">
        <Quote
          size={25}
          strokeWidth={1.5}
          className="mb-2 text-[#EF4444]"
        />

        <p className="text-[14px] leading-[1.85] text-[#5F6D63]">
          {isMarathi
            ? student.testimonialMr
            : student.testimonial}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-[2px] w-6 bg-[#EF4444]" />
          <span className="text-[12px] font-extrabold text-[#17392E]">
            {student.name}
          </span>
          <ArrowUpRight
            size={15}
            className="text-[#006B2E]"
          />
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN FEATURED STORIES SECTION
// ============================================

export default function FeaturedStudentStories() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="success-stories-list"
      className="relative overflow-hidden bg-[#F9FAF7] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADING */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#006B2E]">
              {isMarathi ? "प्रेरणादायी प्रवास" : "REAL STORIES. REAL IMPACT."}
            </span>

            <span className="h-[2px] w-7 bg-[#EF4444]" />
          </div>

          <h2 className="text-[clamp(1.9rem,3vw,2.8rem)] font-extrabold tracking-[-0.035em] text-[#17392E]">
            {isMarathi
              ? "विद्यार्थ्यांच्या यशोगाथा"
              : "Featured Student Success Stories"}
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[14px] leading-[1.8] text-[#6F7E73]">
            {isMarathi
              ? "शिक्षण, प्रशिक्षण आणि संधी यांच्या माध्यमातून स्वतःचे भविष्य घडवणाऱ्या विद्यार्थ्यांचे प्रेरणादायी प्रवास."
              : "Discover the inspiring journeys of students who transformed learning opportunities into meaningful careers."}
          </p>
        </div>

        {/* ALTERNATING STUDENT STORIES */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {students.map((student, index) => {
            const photoLeft = index % 2 === 0;

            return (
              <motion.article
                key={student.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div
                  className={`grid items-center gap-9 lg:grid-cols-2 lg:gap-16 ${
                    photoLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* PHOTO */}
                  <StudentPhoto
                    student={student}
                    index={index}
                  />

                  {/* CONTENT */}
                  <StudentContent
                    student={student}
                    isMarathi={isMarathi}
                  />
                </div>

                {/* DIVIDER */}
                {index !== students.length - 1 && (
                  <div className="mt-12 flex items-center gap-4 sm:mt-16 lg:mt-20">
                    <div className="h-px flex-1 bg-[#E0E9E1]" />
                    <span className="h-[7px] w-[7px] rotate-45 bg-[#EF4444]" />
                    <div className="h-px flex-1 bg-[#E0E9E1]" />
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
