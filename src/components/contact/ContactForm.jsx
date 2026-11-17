
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Send,
  ShieldCheck,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../../context/Languagecontext";

// WhatsApp number with country code, without + or spaces
const WHATSAPP_NUMBER = "919422036639";

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
        submit: "WhatsApp वर संदेश पाठवा",
        privacy:
          "तुमची माहिती केवळ चौकशीला उत्तर देण्यासाठी वापरली जाईल.",
        whatsappInfo:
          "संदेश पाठवण्यासाठी WhatsApp उघडेल.",
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
        submit: "Send Message on WhatsApp",
        privacy:
          "Your information will only be used to respond to your enquiry.",
        whatsappInfo:
          "WhatsApp will open to send your message.",
      };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // DIRECT WHATSAPP SUBMISSION - NO BACKEND
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.privacyConsent) return;

    const enquiryLabels = {
      admission: isMarathi ? "प्रवेश" : "Admission",
      csr: "CSR",
      partnership: isMarathi ? "भागीदारी" : "Partnership",
      general: isMarathi ? "सामान्य चौकशी" : "General",
    };

    const whatsappMessage = [
      "*NEW WEBSITE ENQUIRY*",
      "*Morya Samajik Pratishthan*",
      "",
      "----------------------------",
      "",
      `*Full Name:* ${form.fullName.trim()}`,
      "",
      `*Email:* ${form.email.trim()}`,
      "",
      `*Phone:* ${form.phone.trim()}`,
      "",
      `*Enquiry Type:* ${
        enquiryLabels[form.enquiryType] || form.enquiryType
      }`,
      "",
      "*Message:*",
      form.message.trim(),
      "",
      "----------------------------",
      "",
      "_Enquiry submitted through the official website._",
    ].join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in the same tab.
    // This works on desktop and mobile browsers.
    window.location.href = whatsappURL;
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

          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#EF4444]" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#006B2E]">
              {content.eyebrow}
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[clamp(1.85rem,2.7vw,2.65rem)] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#17392E]">
            {content.heading1}{" "}
            <span className="text-[#EF4444]">
              {content.heading2}
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-[380px] text-[14px] leading-[1.85] text-[#66746B]">
            {content.description}
          </p>

          {/* PRIVACY NOTE */}
          <div className="mt-7 flex max-w-[360px] items-start gap-3 border-t border-[#DEE8E0] pt-5">
            <ShieldCheck
              size={21}
              className="shrink-0 text-[#006B2E]"
            />

            <p className="text-[12px] leading-[1.7] text-[#718076]">
              {content.privacy}
            </p>
          </div>

          {/* WHATSAPP INFORMATION */}
          <div className="mt-5 flex max-w-[360px] items-center gap-3 rounded-xl border border-[#D5E9D9] bg-[#EFF8F0] px-4 py-3">
            <MessageCircle
              size={19}
              className="shrink-0 text-[#006B2E]"
            />

            <p className="text-[12px] font-medium leading-[1.6] text-[#386247]">
              {content.whatsappInfo}
            </p>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.div
          {...reveal}
          className="rounded-[18px] border border-[#E0EAE2] bg-white p-5 shadow-[0_15px_45px_rgba(23,57,46,0.045)] sm:p-7"
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME & EMAIL */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="contact-full-name"
                  className={labelClass}
                >
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

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className={labelClass}
                >
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

            {/* PHONE & ENQUIRY */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* PHONE */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className={labelClass}
                >
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

              {/* ENQUIRY TYPE */}
              <div>
                <label
                  htmlFor="contact-enquiry"
                  className={labelClass}
                >
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
                  <option value="">
                    {content.select}
                  </option>

                  <option value="admission">
                    {content.admission}
                  </option>

                  <option value="csr">
                    {content.csr}
                  </option>

                  <option value="partnership">
                    {content.partnership}
                  </option>

                  <option value="general">
                    {content.general}
                  </option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="contact-message"
                className={labelClass}
              >
                {content.message} *
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                maxLength={2000}
                required
                className={`${inputClass} resize-y`}
                placeholder={content.message}
              />
            </div>

            {/* PRIVACY CONSENT */}
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

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#006B2E] px-7 py-3.5 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005323] hover:shadow-[0_8px_20px_rgba(0,107,46,0.2)] sm:w-auto"
            >
              <Send size={17} />

              {content.submit}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
