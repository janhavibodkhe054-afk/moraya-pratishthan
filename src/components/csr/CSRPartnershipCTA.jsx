
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  UserRound,
  Mail,
  Phone,
  MessageSquareText,
  HeartHandshake,
  CheckCircle2,
  Send,
} from "lucide-react";

import { useLanguage } from "../../context/Languagecontext";

// ==========================================
// CONFIGURATION
// ==========================================

const WHATSAPP_NUMBER = "919422036639";

const initialForm = {
  company: "",
  person: "",
  email: "",
  phone: "",
  focus: "",
  message: "",
};

// ==========================================
// BILINGUAL CONTENT
// ==========================================

const content = {
  en: {
    eyebrow: "PARTNER WITH US",

    heading1: "Looking for an",
    heading2: "Implementation Partner",
    heading3: "for Your CSR Initiatives?",

    description:
      "Connect with Morya Samajik Pratishthan to explore collaborative programs in skill development, healthcare awareness, women empowerment and community development.",

    points: [
      "Community-focused initiatives",
      "Structured implementation approach",
      "Collaborative CSR programs",
    ],

    formEyebrow: "CSR PARTNERSHIP ENQUIRY",
    formHeading: "Let's Create Impact Together.",
    formDescription:
      "Share your CSR requirements and our team will connect with you.",

    company: "Company Name",
    person: "Contact Person",
    email: "Email Address",
    phone: "Phone Number",
    focus: "CSR Focus Area",
    message: "Message",

    companyPlaceholder: "Enter company name",
    personPlaceholder: "Enter contact person name",
    emailPlaceholder: "Enter business email",
    phonePlaceholder: "Enter phone number",
    focusPlaceholder: "Select CSR focus area",
    messagePlaceholder:
      "Tell us about your CSR objectives or partnership requirements...",

    options: [
      "Education & Skill Development",
      "Youth Employability",
      "Women Empowerment",
      "Community Healthcare",
      "Digital & Financial Literacy",
      "Sustainable Livelihoods",
      "Multiple Focus Areas",
      "Other",
    ],

    submit: "Discuss a CSR Partnership",
    privacy: "Your details will be used only for partnership communication.",
    required: "Please complete all required fields.",
    invalidEmail: "Please enter a valid email address.",
    invalidPhone: "Please enter a valid 10-digit phone number.",
  },

  mr: {
    eyebrow: "आमच्यासोबत भागीदारी करा",

    heading1: "तुमच्या CSR उपक्रमांसाठी",
    heading2: "विश्वासार्ह अंमलबजावणी",
    heading3: "सहयोगी शोधत आहात?",

    description:
      "कौशल्य विकास, आरोग्य जनजागृती, महिला सक्षमीकरण आणि समुदाय विकासासाठी मोरया सामाजिक प्रतिष्ठानसोबत भागीदारीच्या संधी जाणून घ्या.",

    points: [
      "समाजाच्या गरजांवर आधारित उपक्रम",
      "नियोजनबद्ध अंमलबजावणी प्रक्रिया",
      "सहकार्यावर आधारित CSR कार्यक्रम",
    ],

    formEyebrow: "CSR भागीदारी चौकशी",
    formHeading: "एकत्रित प्रयत्नांतून परिवर्तन.",
    formDescription:
      "तुमच्या CSR गरजा कळवा. आमची टीम तुमच्याशी संपर्क साधेल.",

    company: "कंपनीचे नाव",
    person: "संपर्क व्यक्ती",
    email: "ईमेल पत्ता",
    phone: "मोबाईल नंबर",
    focus: "CSR कार्यक्षेत्र",
    message: "संदेश",

    companyPlaceholder: "कंपनीचे नाव लिहा",
    personPlaceholder: "संपर्क व्यक्तीचे नाव लिहा",
    emailPlaceholder: "व्यावसायिक ईमेल लिहा",
    phonePlaceholder: "मोबाईल नंबर लिहा",
    focusPlaceholder: "CSR कार्यक्षेत्र निवडा",
    messagePlaceholder:
      "तुमच्या CSR उद्दिष्टांविषयी किंवा भागीदारीच्या गरजांविषयी माहिती द्या...",

    options: [
      "शिक्षण व कौशल्य विकास",
      "युवकांची रोजगारक्षमता",
      "महिला सक्षमीकरण",
      "सामुदायिक आरोग्यसेवा",
      "डिजिटल व आर्थिक साक्षरता",
      "शाश्वत उपजीविका",
      "अनेक कार्यक्षेत्रे",
      "इतर",
    ],

    submit: "CSR भागीदारीबाबत चर्चा करा",
    privacy:
      "तुमची माहिती केवळ भागीदारीसंबंधी संपर्कासाठी वापरली जाईल.",
    required: "कृपया सर्व आवश्यक माहिती भरा.",
    invalidEmail: "कृपया योग्य ईमेल पत्ता लिहा.",
    invalidPhone: "कृपया योग्य १० अंकी मोबाईल नंबर लिहा.",
  },
};

// ==========================================
// ANIMATION
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ==========================================
// FORM INPUT COMPONENT
// ==========================================

function FormField({
  label,
  icon: Icon,
  children,
}) {
  return (
    <div className="w-full">
      <label className="mb-2 flex items-center gap-2 text-[12px] font-bold text-[#17392E] sm:text-[13px]">
        <Icon size={15} className="text-[#176A3A]" />
        {label}
        <span className="text-[#EF6666]">*</span>
      </label>

      {children}
    </div>
  );
}

// ==========================================
// CSR PARTNERSHIP CTA
// ==========================================

export default function CSRPartnershipCTA() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const t = content[isMarathi ? "mr" : "en"];

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = [
      form.company,
      form.person,
      form.email,
      form.phone,
      form.focus,
      form.message,
    ];

    if (requiredFields.some((value) => !value.trim())) {
      setError(t.required);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      setError(t.invalidEmail);
      return;
    }

    const cleanPhone = form.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError(t.invalidPhone);
      return;
    }

    const whatsappMessage = [
      "*CSR PARTNERSHIP ENQUIRY*",
      "",
      `*Company Name:* ${form.company.trim()}`,
      `*Contact Person:* ${form.person.trim()}`,
      `*Email:* ${form.email.trim()}`,
      `*Phone:* ${cleanPhone}`,
      `*CSR Focus Area:* ${form.focus}`,
      "",
      "*Message:*",
      form.message.trim(),
      "",
      "Enquiry from Morya Samajik Pratishthan Website",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    // Opens WhatsApp with the prefilled enquiry.
    // The visitor must press Send to complete the enquiry.
    window.location.href = whatsappUrl;
  };

  const inputClass =
    "h-[48px] w-full rounded-xl border border-[#E0E9E2] bg-[#FAFCFA] px-4 text-[13px] text-[#17392E] outline-none transition-all duration-300 placeholder:text-[#9AA89E] focus:border-[#176A3A] focus:bg-white focus:ring-[3px] focus:ring-[#176A3A]/10 sm:text-[14px]";

  return (
    <section
      id="csr-partnership"
      className="relative overflow-hidden bg-[#F4F8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

        <div className="grid overflow-hidden rounded-[26px] bg-white shadow-[0_25px_80px_rgba(23,57,46,0.09)] lg:grid-cols-[43%_57%] lg:rounded-[32px]">

          {/* ==================================
              LEFT PARTNERSHIP PANEL
          ================================== */}

          <div className="relative isolate flex flex-col justify-between overflow-hidden bg-[#14372B] px-7 py-11 text-white sm:px-10 sm:py-14 lg:px-12 lg:py-16">

            {/* DECORATIVE ELEMENTS */}
            <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[400px] w-[400px] rounded-full border-[70px] border-white/[0.04]" />

            <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#28684B]/40 blur-[90px]" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.12 }}
            >
              {/* EYEBROW */}
              <motion.div
                variants={fadeUp}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-[3px] w-9 rounded-full bg-[#EF6666]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FFB1A8] sm:text-[12px]">
                  {t.eyebrow}
                </span>
              </motion.div>

              {/* HEADING */}
              <motion.h2
                variants={fadeUp}
                className="max-w-[550px] text-[32px] font-black leading-[1.18] tracking-tight sm:text-[40px] lg:text-[43px]"
              >
                {t.heading1}
                <br />

                <span className="text-[#FFB1A8]">
                  {t.heading2}
                </span>

                <br />
                {t.heading3}
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-[470px] text-[14px] leading-[1.95] text-white/75 sm:text-[15px]"
              >
                {t.description}
              </motion.p>

              {/* KEY POINTS */}
              <motion.div
                variants={fadeUp}
                className="mt-9 space-y-4"
              >
                {t.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#FFB1A8]"
                    />

                    <span className="text-[13px] font-medium text-white/85 sm:text-[14px]">
                      {point}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* BOTTOM MESSAGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-14 flex items-center gap-4 border-t border-white/20 pt-7"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                <HeartHandshake
                  size={25}
                  className="text-[#FFB1A8]"
                />
              </div>

              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#FFB1A8]">
                  MORYA SAMAJIK PRATISHTHAN
                </p>

                <p className="mt-1 text-[12px] text-white/70">
                  Education • Skills • Empowerment
                </p>
              </div>
            </motion.div>
          </div>

          {/* ==================================
              RIGHT ENQUIRY FORM
          ================================== */}

          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">

            {/* FORM HEADING */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-[#EF6666]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#176A3A]">
                  {t.formEyebrow}
                </span>
              </div>

              <h3 className="text-[25px] font-black leading-tight text-[#17392E] sm:text-[30px]">
                {t.formHeading}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.8] text-[#718077] sm:text-[14px]">
                {t.formDescription}
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* COMPANY + CONTACT PERSON */}
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label={t.company} icon={Building2}>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={t.companyPlaceholder}
                    autoComplete="organization"
                    required
                    className={inputClass}
                  />
                </FormField>

                <FormField label={t.person} icon={UserRound}>
                  <input
                    type="text"
                    name="person"
                    value={form.person}
                    onChange={handleChange}
                    placeholder={t.personPlaceholder}
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </FormField>
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label={t.email} icon={Mail}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </FormField>

                <FormField label={t.phone} icon={Phone}>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t.phonePlaceholder}
                    autoComplete="tel-national"
                    inputMode="numeric"
                    maxLength={10}
                    required
                    className={inputClass}
                  />
                </FormField>
              </div>

              {/* CSR FOCUS AREA */}
              <FormField label={t.focus} icon={HeartHandshake}>
                <select
                  name="focus"
                  value={form.focus}
                  onChange={handleChange}
                  required
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">
                    {t.focusPlaceholder}
                  </option>

                  {t.options.map((option, index) => (
                    <option
                      key={index}
                      value={content.en.options[index]}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* MESSAGE */}
              <FormField label={t.message} icon={MessageSquareText}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={4}
                  required
                  className="w-full resize-y rounded-xl border border-[#E0E9E2] bg-[#FAFCFA] px-4 py-3 text-[13px] leading-[1.7] text-[#17392E] outline-none transition-all duration-300 placeholder:text-[#9AA89E] focus:border-[#176A3A] focus:bg-white focus:ring-[3px] focus:ring-[#176A3A]/10 sm:text-[14px]"
                />
              </FormField>

              {/* ERROR */}
              {error && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 px-4 py-3 text-[12px] font-semibold text-red-600"
                >
                  {error}
                </p>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#EF6666] px-6 text-[14px] font-extrabold text-white transition-all duration-300 hover:bg-[#DC5252] hover:shadow-[0_10px_25px_rgba(239,102,102,0.25)] sm:text-[15px]"
              >
                {t.submit}

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {/* PRIVACY NOTE */}
              <p className="text-center text-[11px] leading-[1.7] text-[#87958B]">
                {t.privacy}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
