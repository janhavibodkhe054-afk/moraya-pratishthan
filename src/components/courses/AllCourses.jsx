
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  GraduationCap,
  HeartPulse,
  Search,
  Send,
  X,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const WHATSAPP_NUMBER = "919422036639";

const COURSES = [
  {
    code: "BMLT",
    title: "Bachelor of Medical Laboratory Technology",
    description: "Comprehensive training in clinical pathology, biochemistry, microbiology, and hematology with hands-on lab practice.",
    duration: "3 Years + 6 Months Internship",
    eligibility: "12th Science (Min 45%)",
    category: "Laboratory",
  },
  {
    code: "DMLT",
    title: "Diploma in Medical Laboratory Technology",
    description: "Diploma covering clinical pathology, biochemistry, microbiology, and hematology.",
    duration: "2 Years",
    eligibility: "10th & 12th Pass",
    category: "Laboratory",
  },
  {
    code: "PG_DMLT",
    title: "P.G. Advance Medical Laboratory Technology",
    description: "Advanced postgraduate program for specialised diagnostic and research expertise.",
    duration: "1 Year + 6 Months Internship",
    eligibility: "B.Sc. (Micro / Chem) Pass",
    category: "Laboratory",
  },
  {
    code: "MLT",
    title: "Medical Laboratory Technician",
    description: "Certificate in pathology lab techniques, blood banking and clinical sample analysis.",
    duration: "1 Year + 3 Months Internship",
    eligibility: "10th & 12th Pass",
    category: "Laboratory",
  },
  {
    code: "DRADIO",
    title: "Diploma in Radiology",
    description: "Master radiographic & ultrasonography imaging, patient positioning, and radiation safety protocols.",
    duration: "2 Years + 3 Months Internship",
    eligibility: "12th Pass",
    category: "Radiology",
  },
  {
    code: "MRI",
    title: "M.R.I Technician",
    description: "Specialised training in MRI machine operation, patient imaging and diagnostic centre workflows.",
    duration: "1 Year + 3 Months Internship",
    eligibility: "10th & 12th Pass",
    category: "Radiology",
  },
  {
    code: "CT",
    title: "C.T Scan Technician",
    description: "Specialised training in CT scan machine operation, patient imaging and diagnostic procedures.",
    duration: "1 Year",
    eligibility: "10th & 12th Pass",
    category: "Radiology",
  },
  {
    code: "OT_CERT",
    title: "Operation Theatre Certificate",
    description: "Certificate in operation theatre techniques, surgical assistance, and sterilization.",
    duration: "1 Year",
    eligibility: "10th & 12th Pass",
    category: "Operation Theatre",
  },
  {
    code: "OT_DIPLOMA",
    title: "Diploma in Operation Theatre Technology",
    description: "Comprehensive training in OT protocols, surgical assistance, sterilisation and patient care.",
    duration: "2 Years + 3 Months Internship",
    eligibility: "12th Pass",
    category: "Operation Theatre",
  },
  {
    code: "DIALYSIS",
    title: "Advance Diploma in Dialysis Technology",
    description: "Advanced training in dialysis machine operation, patient care and renal therapy procedures.",
    duration: "1 Year + 3 Months Internship",
    eligibility: "12th Pass",
    category: "Specialised Healthcare",
  },
  {
    code: "CATH_LAB",
    title: "Diploma in Cath Lab Technician",
    description: "Specialised training in cardiac catheterization lab procedures and patient care.",
    duration: "1 Year + 3 Months Internship",
    eligibility: "12th Pass",
    category: "Specialised Healthcare",
  },
  {
    code: "SI_TECH",
    title: "Sanitary / Health Inspector Technician",
    description: "Comprehensive training in public health inspection and community health programmes.",
    duration: "1 Year + 3 Months Internship",
    eligibility: "12th Pass",
    category: "Specialised Healthcare",
  },
  {
    code: "RADIO_CERT",
    title: "Certificate in Radiology Technician",
    description: "Certificate in radiology techniques, X-ray imaging and diagnostic radiology procedures.",
    duration: "1 Year",
    eligibility: "10th & 12th Pass",
    category: "Radiology",
  },
  {
    code: "XRAY",
    title: "X-Ray & Imaging Technician",
    description: "Specialised training in X-ray imaging techniques and diagnostic centre workflows.",
    duration: "1 Year + 3 Months Internship",
    eligibility: "10th & 12th Pass",
    category: "Radiology",
  },
];

const CATEGORIES = [
  { id: "All", en: "All Courses", mr: "सर्व अभ्यासक्रम" },
  { id: "Laboratory", en: "Laboratory", mr: "प्रयोगशाळा" },
  { id: "Radiology", en: "Radiology", mr: "रेडिओलॉजी" },
  { id: "Operation Theatre", en: "Operation Theatre", mr: "ऑपरेशन थिएटर" },
  { id: "Specialised Healthcare", en: "Specialised Healthcare", mr: "विशेष आरोग्यसेवा" },
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  city: "",
  qualification: "",
  message: "",
};

function CourseCard({ course, number, onApply, content, reduceMotion }) {
  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? {} : { opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#E1E8E2] bg-white shadow-[0_6px_24px_rgba(23,57,46,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#B9D2C0] hover:shadow-[0_18px_40px_rgba(23,57,46,0.09)]"
    >
      <div className="h-[3px] w-full bg-[#E6EEE8] transition-colors duration-300 group-hover:bg-[#EF4444]" />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-6 flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2EC] text-[#17392E] transition-colors group-hover:bg-[#17392E] group-hover:text-white">
            <HeartPulse size={23} strokeWidth={1.7} />
          </span>

          <span className="text-[12px] font-bold tracking-[0.1em] text-[#A8B7AC]">
            {String(number).padStart(2, "0")}
          </span>
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-[#F0F5F1] px-2.5 py-1 text-[11px] font-bold text-[#326345]">
            {course.code.replaceAll("_", " ")}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#D65C51]">
            {course.category}
          </span>
        </div>

        <h3 className="text-[20px] font-bold leading-[1.4] tracking-[-0.025em] text-[#17392E]">
          {course.title}
        </h3>

        <p className="mt-3 flex-1 text-[13px] leading-[1.85] text-[#748278]">
          {course.description}
        </p>

        <div className="mt-6 space-y-4 border-t border-[#EDF1ED] pt-5">
          <div className="flex items-start gap-3">
            <Clock3 size={18} className="mt-0.5 shrink-0 text-[#EF4444]" />
            <div>
              <p className="text-[11px] font-medium text-[#98A79B]">
                {content.duration}
              </p>
              <p className="mt-1 text-[13px] font-semibold leading-5 text-[#344C3B]">
                {course.duration}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <GraduationCap size={19} className="mt-0.5 shrink-0 text-[#EF4444]" />
            <div>
              <p className="text-[11px] font-medium text-[#98A79B]">
                {content.eligibility}
              </p>
              <p className="mt-1 text-[13px] font-semibold leading-5 text-[#344C3B]">
                {course.eligibility}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onApply(course)}
          className="mt-6 flex w-full items-center justify-between rounded-xl bg-[#17392E] px-5 py-3.5 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#285A40]"
        >
          {content.apply}
          <ArrowUpRight size={19} />
        </button>
      </div>
    </motion.article>
  );
}

export default function AllCourses() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const content = isMarathi
    ? {
        eyebrow: "अभ्यासक्रम",
        heading1: "तुमच्या भविष्यासाठी",
        heading2: "योग्य अभ्यासक्रम",
        description:
          "तुमची आवड, शैक्षणिक पात्रता आणि करिअरची उद्दिष्टे लक्षात घेऊन आमच्या पॅरामेडिकल अभ्यासक्रमांमधून योग्य पर्याय निवडा.",
        available: "अभ्यासक्रम उपलब्ध",
        search: "अभ्यासक्रमाचे नाव किंवा कोड शोधा...",
        duration: "अभ्यासक्रमाचा कालावधी",
        eligibility: "शैक्षणिक पात्रता",
        apply: "प्रवेशासाठी चौकशी करा",
        noResults: "अभ्यासक्रम सापडले नाहीत",
        noResultsText: "कृपया दुसरा शब्द किंवा विभाग निवडा.",
        clear: "सर्व अभ्यासक्रम दाखवा",
        modalEyebrow: "प्रवेश चौकशी फॉर्म",
        modalDescription:
          "खालील माहिती भरा. WhatsApp मध्ये तयार संदेश उघडेल, तो पाठवून चौकशी पूर्ण करा.",
        fullName: "विद्यार्थ्याचे पूर्ण नाव",
        phone: "मोबाईल क्रमांक",
        city: "शहर",
        qualification: "शैक्षणिक पात्रता",
        message: "अतिरिक्त संदेश (ऐच्छिक)",
        namePlaceholder: "तुमचे पूर्ण नाव",
        phonePlaceholder: "१० अंकी मोबाईल क्रमांक",
        cityPlaceholder: "तुमचे शहर",
        qualificationPlaceholder: "उदा. १२ वी विज्ञान",
        messagePlaceholder: "प्रवेशाबाबत काही प्रश्न आहेत का?",
        submit: "WhatsApp वर चौकशी करा",
        note: "WhatsApp उघडल्यानंतर Send बटण दाबणे आवश्यक आहे.",
        close: "फॉर्म बंद करा",
      }
    : {
        eyebrow: "OUR PROGRAMS",
        heading1: "Find the Right Course",
        heading2: "for Your Future",
        description:
          "Discover our paramedical programs and choose the right learning path based on your interests, qualifications and career goals.",
        available: "Courses Available",
        search: "Search by course name or code...",
        duration: "Course Duration",
        eligibility: "Eligibility",
        apply: "Enquire for Admission",
        noResults: "No courses found",
        noResultsText: "Try a different keyword or category.",
        clear: "Show All Courses",
        modalEyebrow: "ADMISSION ENQUIRY",
        modalDescription:
          "Enter your details below. A pre-filled WhatsApp message will open for you to review and send.",
        fullName: "Student Full Name",
        phone: "Mobile Number",
        city: "City",
        qualification: "Educational Qualification",
        message: "Additional Message (Optional)",
        namePlaceholder: "Enter your full name",
        phonePlaceholder: "10-digit mobile number",
        cityPlaceholder: "Enter your city",
        qualificationPlaceholder: "e.g. 12th Science",
        messagePlaceholder: "Any questions about admission?",
        submit: "Continue to WhatsApp",
        note: "Please tap Send in WhatsApp to complete your enquiry.",
        close: "Close form",
      };

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return COURSES.filter((course) => {
      const categoryMatch =
        category === "All" || course.category === category;

      const searchMatch =
        !query ||
        `${course.code} ${course.title} ${course.description}`
          .toLowerCase()
          .includes(query);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  useEffect(() => {
    if (!selectedCourse) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedCourse(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCourse]);

  const openApplication = (course) => {
    setForm(EMPTY_FORM);
    setSelectedCourse(course);
  };

  const updateForm = (key, value) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedCourse) return;

    const phone = form.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert(
        isMarathi
          ? "कृपया योग्य १० अंकी मोबाईल क्रमांक टाका."
          : "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    const whatsappMessage = [
      "*Morya Samajik Pratishthan*",
      "*Course Admission Enquiry*",
      "",
      `*Course:* ${selectedCourse.title}`,
      `*Course Code:* ${selectedCourse.code}`,
      `*Duration:* ${selectedCourse.duration}`,
      "",
      `*Student Name:* ${form.name.trim()}`,
      `*Mobile Number:* ${phone}`,
      `*City:* ${form.city.trim()}`,
      `*Qualification:* ${form.qualification.trim()}`,
      form.message.trim()
        ? `*Additional Message:* ${form.message.trim()}`
        : "",
      "",
      "Please share the admission details.",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-[#DCE6DE] bg-[#FAFCFA] px-4 py-3 text-[14px] text-[#17392E] outline-none transition-all placeholder:text-[#9CAA9E] focus:border-[#7FAE8A] focus:bg-white focus:ring-4 focus:ring-[#EAF3EB]";

  return (
    <section
      id="all-courses"
      className="scroll-mt-24 bg-[#F8FAF8] px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* SECTION HEADING */}
        <div className="mb-9 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#EF4444]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#447355]">
                {content.eyebrow}
              </span>
            </div>

            <h2 className="text-[clamp(1.9rem,3vw,2.75rem)] font-extrabold leading-tight tracking-[-0.035em] text-[#17392E]">
              {content.heading1}{" "}
              <span className="text-[#EF4444]">
                {content.heading2}
              </span>
            </h2>

            <p className="mt-4 max-w-[720px] text-[14px] leading-[1.9] text-[#748278] sm:text-[15px]">
              {content.description}
            </p>
          </div>

          <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#DDE8DF] bg-white px-5 py-3 text-[13px] font-semibold text-[#376048] lg:self-auto">
            <BookOpen size={17} className="text-[#EF4444]" />
            {filteredCourses.length} {content.available}
          </div>
        </div>

        {/* CATEGORY FILTERS + SEARCH */}
        <div className="mb-9 rounded-[20px] border border-[#E2EAE4] bg-white p-4 shadow-[0_4px_20px_rgba(23,57,46,0.025)] sm:p-5">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((item) => {
              const active = category === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2.5 text-[12px] font-semibold transition-all duration-200 sm:text-[13px] ${
                    active
                      ? "border-[#17392E] bg-[#17392E] text-white"
                      : "border-[#E1EAE3] bg-[#F9FBF9] text-[#59705F] hover:border-[#A9C9B2] hover:bg-[#F0F6F1]"
                  }`}
                >
                  {isMarathi ? item.mr : item.en}
                </button>
              );
            })}
          </div>

          <div className="relative mt-5">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8FA394]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={content.search}
              aria-label={content.search}
              className="w-full rounded-xl border border-[#E1EAE3] bg-[#F9FBF9] py-3.5 pl-11 pr-4 text-[14px] text-[#17392E] outline-none transition-all focus:border-[#83AD8E] focus:ring-4 focus:ring-[#EDF5EE]"
            />
          </div>
        </div>

        {/* COURSE CARDS */}
        {filteredCourses.length > 0 ? (
          <motion.div
            layout={!reduceMotion}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.code}
                  course={course}
                  number={COURSES.findIndex((c) => c.code === course.code) + 1}
                  onApply={openApplication}
                  content={content}
                  reduceMotion={reduceMotion}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="rounded-[22px] border border-[#E1EAE3] bg-white px-6 py-16 text-center">
            <Search size={32} className="mx-auto text-[#9CAE9F]" />

            <h3 className="mt-4 text-[20px] font-bold text-[#17392E]">
              {content.noResults}
            </h3>

            <p className="mt-2 text-[14px] text-[#748278]">
              {content.noResultsText}
            </p>

            <button
              type="button"
              onClick={() => {
                setCategory("All");
                setSearch("");
              }}
              className="mt-5 rounded-full bg-[#17392E] px-5 py-3 text-[13px] font-semibold text-white hover:bg-[#285A40]"
            >
              {content.clear}
            </button>
          </div>
        )}
      </div>

      {/* ADMISSION ENQUIRY MODAL */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-[#071A11]/75 backdrop-blur-[5px]"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="course-modal-title"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 24, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-[560px] flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl"
            >
              {/* MODAL HEADER */}
              <div className="relative shrink-0 overflow-hidden bg-[#17392E] px-6 py-6 text-white sm:px-8">
                <div className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full border border-white/10" />

                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  aria-label={content.close}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
                >
                  <X size={19} />
                </button>

                <div className="mb-3 flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-[#EF4444]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#D6E9DA]">
                    {content.modalEyebrow}
                  </span>
                </div>

                <h3
                  id="course-modal-title"
                  className="max-w-[430px] pr-8 text-[22px] font-bold leading-[1.4]"
                >
                  {selectedCourse.title}
                </h3>

                <span className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                  {selectedCourse.code}
                </span>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="min-h-0 overflow-y-auto px-6 py-6 sm:px-8"
              >
                <p className="mb-5 text-[13px] leading-[1.8] text-[#748278]">
                  {content.modalDescription}
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="course-name" className="mb-2 block text-[13px] font-semibold text-[#344D3B]">
                      {content.fullName} *
                    </label>
                    <input
                      id="course-name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      placeholder={content.namePlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="course-phone" className="mb-2 block text-[13px] font-semibold text-[#344D3B]">
                      {content.phone} *
                    </label>
                    <input
                      id="course-phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      required
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) =>
                        updateForm("phone", e.target.value.replace(/\D/g, ""))
                      }
                      placeholder={content.phonePlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="course-city" className="mb-2 block text-[13px] font-semibold text-[#344D3B]">
                        {content.city} *
                      </label>
                      <input
                        id="course-city"
                        required
                        maxLength={80}
                        value={form.city}
                        onChange={(e) => updateForm("city", e.target.value)}
                        placeholder={content.cityPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="course-qualification" className="mb-2 block text-[13px] font-semibold text-[#344D3B]">
                        {content.qualification} *
                      </label>
                      <input
                        id="course-qualification"
                        required
                        maxLength={100}
                        value={form.qualification}
                        onChange={(e) =>
                          updateForm("qualification", e.target.value)
                        }
                        placeholder={content.qualificationPlaceholder}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course-message" className="mb-2 block text-[13px] font-semibold text-[#344D3B]">
                      {content.message}
                    </label>
                    <textarea
                      id="course-message"
                      rows={3}
                      maxLength={500}
                      value={form.message}
                      onChange={(e) => updateForm("message", e.target.value)}
                      placeholder={content.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#17392E] px-5 py-4 text-[14px] font-bold text-white transition-colors hover:bg-[#285A40]"
                >
                  <Send size={18} />
                  {content.submit}
                  <ArrowRight size={17} />
                </button>

                <p className="mt-3 flex items-center justify-center gap-2 text-center text-[11px] leading-5 text-[#8B9B8E]">
                  <Check size={14} className="shrink-0 text-[#447D55]" />
                  {content.note}
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
