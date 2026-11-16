
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
  privacyConsent: false,
};

export default function ContactForm() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const content = isMarathi
    ? {
        eyebrow: "संपर्क फॉर्म",
        heading1: "आम्हाला",
        heading2: "संदेश पाठवा.",
        description:
          "तुमची चौकशी खालील फॉर्ममध्ये भरा. आमची टीम तुमच्याशी संपर्क साधेल.",
        name: "पूर्ण नाव",
        email: "ईमेल पत्ता",
        phone: "मोबाईल क्रमांक",
        enquiry: "चौकशीचा प्रकार",
        select: "चौकशीचा प्रकार निवडा",
        admission: "प्रवेश",
        csr: "CSR",
        partnership: "भागीदारी",
        general: "सामान्य चौकशी",
        message: "तुमचा संदेश",
        consent:
          "माझ्या चौकशीला उत्तर देण्यासाठी मोरया सामाजिक प्रतिष्ठानने माझी दिलेली माहिती वापरण्यास मी संमती देतो/देते.",
        submit: "संदेश पाठवा",
        sending: "संदेश पाठवत आहे...",
        success:
          "मोरया सामाजिक प्रतिष्ठानशी संपर्क साधल्याबद्दल धन्यवाद. तुमचा संदेश प्राप्त झाला आहे. आमची टीम शक्य तितक्या लवकर उत्तर देईल.",
        error:
          "संदेश पाठवता आला नाही. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.",
        privacy: "तुमची माहिती चौकशीला उत्तर देण्यासाठी वापरली जाईल.",
      }
    : {
        eyebrow: "GET IN TOUCH",
        heading1: "Send Us",
        heading2: "a Message.",
        description:
          "Have a question or collaboration proposal? Fill out the form and our team will get back to you.",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        enquiry: "Enquiry Type",
        select: "Select Enquiry Type",
        admission: "Admission",
        csr: "CSR",
        partnership: "Partnership",
        general: "General",
        message: "Message",
        consent:
          "I consent to Morya Samajik Pratishthan using the information provided to respond to my enquiry.",
        submit: "Send Message",
        sending: "Sending Message...",
        success:
          "Thank you for contacting Morya Samajik Pratishthan. Your message has been received, and our team will respond as soon as possible.",
        error:
          "Your message could not be sent. Please try again later.",
        privacy:
          "Your information will be used to respond to your enquiry.",
      };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          enquiryType: form.enquiryType,
          message: form.message.trim(),
          privacyConsent: form.privacyConsent,
        }),
      });

      // Success only when the server explicitly confirms acceptance.
      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();

      if (result.success !== true) {
        throw new Error("Enquiry was not accepted");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(content.error);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#DDE7DF] bg-white px-4 py-3 text-[13px] text-[#17392E] outline-none transition-all placeholder:text-[#9AA79D] focus:border-[#006B2E] focus:ring-2 focus:ring-[#006B2E]/10 sm:text-[14px]";

  const labelClass =
    "mb-2 block text-[12px] font-bold text-[#17392E] sm:text-[13px]";

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="contact-form"
      className="bg-[#F8FBF8] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1200px] gap-9 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-12">
        {/* LEFT CONTENT */}
        <motion.div {...reveal} className="lg:pt-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </div>

          <h2 className="text-[clamp(1.85rem,2.7vw,2.65rem)] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#17392E]">
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </h2>

          <p className="mt-4 max-w-[380px] text-[14px] leading-[1.85] text-[#66746B]">
            {content.description}
          </p>

          <div className="mt-7 flex max-w-[360px] items-start gap-3 border-t border-[#DEE8E0] pt-5">
            <ShieldCheck
              size={21}
              className="shrink-0 text-[#006B2E]"
            />

            <p className="text-[12px] leading-[1.7] text-[#718076]">
              {content.privacy}
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          {...reveal}
          className="rounded-[18px] border border-[#E0EAE2] bg-white p-5 shadow-[0_15px_45px_rgba(23,57,46,0.045)] sm:p-7"
        >
          {status === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="mb-6 flex items-start gap-3 rounded-xl border border-[#BBDDC5] bg-[#F0FAF2] p-4"
            >
              <CheckCircle2
                size={21}
                className="shrink-0 text-[#006B2E]"
              />

              <p className="text-[13px] leading-[1.7] text-[#17392E]">
                {content.success}
              </p>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-xl border border-[#F2C7C7] bg-[#FFF5F5] p-4"
            >
              <AlertCircle
                size={21}
                className="shrink-0 text-[#DC4444]"
              />

              <p className="text-[13px] leading-[1.7] text-[#A83232]">
                {errorMessage}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-full-name" className={labelClass}>
                  {content.name} *
                </label>

                <input
                  id="contact-full-name"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={120}
                  required
                  className={inputClass}
                  placeholder={content.name}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  {content.email} *
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={254}
                  required
                  className={inputClass}
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className={labelClass}>
                  {content.phone} *
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[+]?[0-9 ()-]{10,20}"
                  maxLength={20}
                  required
                  className={inputClass}
                  placeholder="+91"
                />
              </div>

              <div>
                <label htmlFor="contact-enquiry" className={labelClass}>
                  {content.enquiry} *
                </label>

                <select
                  id="contact-enquiry"
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">{content.select}</option>
                  <option value="admission">{content.admission}</option>
                  <option value="csr">{content.csr}</option>
                  <option value="partnership">{content.partnership}</option>
                  <option value="general">{content.general}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                {content.message} *
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                maxLength={3000}
                required
                className={`${inputClass} resize-y`}
                placeholder={content.message}
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={form.privacyConsent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#006B2E]"
              />

              <span className="text-[12px] leading-[1.7] text-[#66746B]">
                {content.consent} *
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#006B2E] px-7 py-3.5 text-[13px] font-extrabold text-white transition-all hover:bg-[#005323] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={17} />
              )}

              {status === "submitting"
                ? content.sending
                : content.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
