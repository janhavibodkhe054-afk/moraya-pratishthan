
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Heart,
  Landmark,
  QrCode,
  Copy,
  Check,
  ShieldCheck,
  HandHeart,
  ImageOff,
} from "lucide-react";

import { useLanguage } from "../context/Languagecontext";

// ==========================================
// OFFICIAL DONATION DETAILS
// ==========================================

const DONATION = {
  accountName: "Morya Samajik Pratishthan",
  bankName: "",
  accountNumber: "",
  ifsc: "",
  branch: "",
  upiId: "",

  // Images must be inside public folder
  heroImage: "/18.webp",
  qrImage: "/images/donation-qr.png",
};

const bankFields = [
  {
    key: "accountName",
    label: "Account Holder Name",
    mr: "खातेदाराचे नाव",
  },
  {
    key: "bankName",
    label: "Bank Name",
    mr: "बँकेचे नाव",
  },
  {
    key: "accountNumber",
    label: "Account Number",
    mr: "खाते क्रमांक",
  },
  {
    key: "ifsc",
    label: "IFSC Code",
    mr: "IFSC कोड",
  },
  {
    key: "branch",
    label: "Branch",
    mr: "शाखा",
  },
];

export default function Donate() {
  const { language } = useLanguage();
  const isMr = language === "mr";
  const reduceMotion = useReducedMotion();

  const [copiedField, setCopiedField] = useState(null);
  const [heroError, setHeroError] = useState(false);
  const [qrError, setQrError] = useState(false);

  const t = (en, mr) => (isMr ? mr : en);

  const copyText = async (value, key) => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(key);

      window.setTimeout(() => {
        setCopiedField((current) =>
          current === key ? null : current
        );
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAF8]">

      {/* ======================================
          COMPACT IMAGE HERO
      ====================================== */}

      <section className="relative isolate flex min-h-[235px] items-center justify-center overflow-hidden bg-[#17392E] px-5 py-10 sm:min-h-[265px] lg:min-h-[290px]">

        {/* Hero Image */}
        {!heroError ? (
          <motion.img
            src={DONATION.heroImage}
            alt="Morya Samajik Pratishthan community initiatives"
            onError={(event) => {
              console.error(
                "Hero image failed:",
                event.currentTarget.src
              );
              setHeroError(true);
            }}
            initial={
              reduceMotion
                ? false
                : { scale: 1.05 }
            }
            animate={{ scale: 1 }}
            transition={{
              duration: 1.3,
              ease: "easeOut",
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#17392E] to-[#285743]">
            <ImageOff
              size={55}
              className="text-white/15"
            />
          </div>
        )}

        {/* Light overlays - image stays visible */}
        <div className="pointer-events-none absolute inset-0 bg-[#102F24]/65" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#102D23]/45 via-transparent to-[#102D23]/20" />

        {/* Hero Content */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 18 }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-[900px] text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#17392E]/35 px-4 py-2 text-[12px] font-bold text-white backdrop-blur-sm">
            <Heart
              size={15}
              fill="currentColor"
              className="text-[#FFAAAA]"
            />

            {t(
              "Support Our Mission",
              "आमच्या कार्याला साथ द्या"
            )}
          </div>

          <h1 className="text-[34px] font-black leading-[1.15] tracking-tight text-white drop-shadow-md sm:text-[45px] lg:text-[53px]">
            {t(
              "Your Support.",
              "तुमची साथ."
            )}
            {" "}
            <span className="text-[#FFB1B1]">
              {t(
                "Their Better Tomorrow.",
                "त्यांचा उज्ज्वल उद्या."
              )}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[690px] text-[14px] leading-7 text-white sm:text-[16px]">
            {t(
              "Make a meaningful contribution to education, healthcare and community development.",
              "शिक्षण, आरोग्य आणि समाजविकासाच्या कार्याला तुमच्या देणगीतून हातभार लावा."
            )}
          </p>
        </motion.div>
      </section>

      {/* ======================================
          DONATION METHODS
      ====================================== */}

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1160px]">

          {/* Section Heading */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-9 text-center"
          >
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.17em] text-[#EF4444]">
              {t(
                "Ways to Give",
                "देणगी देण्याचे पर्याय"
              )}
            </p>

            <h2 className="text-[30px] font-black text-[#17392E] sm:text-[39px]">
              {t(
                "Make Your",
                "तुमचे"
              )}
              {" "}
              <span className="text-[#EF4444]">
                {t(
                  "Contribution",
                  "योगदान द्या"
                )}
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-[660px] text-[15px] leading-7 text-[#6F8073]">
              {t(
                "Choose bank transfer or scan the QR code to support our initiatives.",
                "Bank Transfer किंवा QR Code वापरून आमच्या उपक्रमांना सहकार्य करा."
              )}
            </p>
          </motion.div>

          {/* Two Column Cards */}
          <div className="grid items-stretch gap-6 lg:grid-cols-2">

            {/* ==================================
                BANK DETAILS
            ================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: -20 }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#E0E9E2] bg-white shadow-[0_12px_45px_rgba(23,57,46,0.05)]"
            >
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-[#E8EEE9] px-6 py-5 sm:px-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#17392E]">
                  <Landmark size={25} />
                </div>

                <div>
                  <h3 className="text-[21px] font-black text-[#17392E]">
                    {t(
                      "Bank Transfer",
                      "बँक ट्रान्सफर"
                    )}
                  </h3>

                  <p className="mt-1 text-[13px] text-[#819087]">
                    {t(
                      "Official bank account details",
                      "अधिकृत बँक खात्याची माहिती"
                    )}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 px-6 py-3 sm:px-8">
                {bankFields.map((field, index) => {
                  const value = DONATION[field.key];

                  return (
                    <div
                      key={field.key}
                      className={`flex items-center justify-between gap-4 py-4 ${
                        index !== bankFields.length - 1
                          ? "border-b border-[#EEF2EE]"
                          : ""
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-[12px] font-semibold text-[#819087]">
                          {isMr
                            ? field.mr
                            : field.label}
                        </p>

                        <p className="mt-1 break-all text-[16px] font-extrabold text-[#17392E] sm:text-[17px]">
                          {value ||
                            t(
                              "To be updated",
                              "लवकरच उपलब्ध होईल"
                            )}
                        </p>
                      </div>

                      {value && (
                        <button
                          type="button"
                          onClick={() =>
                            copyText(
                              value,
                              field.key
                            )
                          }
                          aria-label={`Copy ${field.label}`}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E3EAE4] text-[#59705E] transition-colors hover:border-[#17392E] hover:bg-[#17392E] hover:text-white"
                        >
                          {copiedField === field.key ? (
                            <Check size={17} />
                          ) : (
                            <Copy size={17} />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2 border-t border-[#E8EEE9] bg-[#F7FAF7] px-6 py-4 sm:px-8">
                <ShieldCheck
                  size={18}
                  className="shrink-0 text-[#5A8968]"
                />

                <p className="text-[12px] leading-6 text-[#728276]">
                  {t(
                    "Please verify account details before transferring funds.",
                    "पैसे पाठवण्यापूर्वी खात्याची माहिती तपासा."
                  )}
                </p>
              </div>
            </motion.div>

            {/* ==================================
                QR CODE + UPI
            ================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: 20 }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#E0E9E2] bg-white shadow-[0_12px_45px_rgba(23,57,46,0.05)]"
            >
              {/* Header */}
              <div className="flex items-center gap-4 border-b border-[#E8EEE9] px-6 py-5 sm:px-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0F0] text-[#EF4444]">
                  <QrCode size={25} />
                </div>

                <div>
                  <h3 className="text-[21px] font-black text-[#17392E]">
                    {t(
                      "Donate via UPI",
                      "UPI द्वारे देणगी"
                    )}
                  </h3>

                  <p className="mt-1 text-[13px] text-[#819087]">
                    {t(
                      "Scan QR or use UPI ID",
                      "QR स्कॅन करा किंवा UPI ID वापरा"
                    )}
                  </p>
                </div>
              </div>

              {/* QR Area */}
              <div className="flex flex-1 flex-col items-center justify-center px-6 py-7 text-center sm:px-8">

                <div className="flex h-[230px] w-[230px] items-center justify-center rounded-[20px] border border-[#E1EAE3] bg-white p-4 shadow-[0_8px_30px_rgba(23,57,46,0.07)]">
                  {!qrError ? (
                    <img
                      src={DONATION.qrImage}
                      alt="Morya Samajik Pratishthan official donation QR code"
                      onError={(event) => {
                        console.error(
                          "QR image failed:",
                          event.currentTarget.src
                        );
                        setQrError(true);
                      }}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-[#92A698]">
                      <QrCode
                        size={65}
                        strokeWidth={1.2}
                      />

                      <p className="text-[13px] font-semibold">
                        {t(
                          "Add Official QR Code",
                          "अधिकृत QR Code जोडा"
                        )}
                      </p>
                    </div>
                  )}
                </div>

                <p className="mt-4 text-[14px] font-semibold text-[#607365]">
                  {t(
                    "Scan using any UPI app",
                    "कोणत्याही UPI App मधून स्कॅन करा"
                  )}
                </p>

                {/* UPI ID */}
                <div className="mt-6 w-full rounded-2xl border border-[#E1EAE3] bg-[#F7FAF7] px-5 py-5">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#7C8D80]">
                    Official UPI ID
                  </p>

                  <p className="mt-2 break-all text-[19px] font-black text-[#17392E]">
                    {DONATION.upiId ||
                      t(
                        "UPI ID will appear here",
                        "येथे UPI ID दिसेल"
                      )}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      copyText(
                        DONATION.upiId,
                        "upi"
                      )
                    }
                    disabled={!DONATION.upiId}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#17392E] px-5 py-3 text-[13px] font-extrabold text-white transition-colors hover:bg-[#265D42] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copiedField === "upi" ? (
                      <Check size={17} />
                    ) : (
                      <Copy size={17} />
                    )}

                    {copiedField === "upi"
                      ? t(
                          "Copied!",
                          "कॉपी झाले!"
                        )
                      : t(
                          "Copy UPI ID",
                          "UPI ID कॉपी करा"
                        )}
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-center gap-2 border-t border-[#E8EEE9] bg-[#F7FAF7] px-6 py-4">
                <ShieldCheck
                  size={18}
                  className="shrink-0 text-[#5A8968]"
                />

                <p className="text-[12px] text-[#728276]">
                  {t(
                    "Verify the recipient before payment.",
                    "पेमेंटपूर्वी प्राप्तकर्त्याचे नाव तपासा."
                  )}
                </p>
              </div>
            </motion.div>
          </div>

          {/* ==================================
              THANK YOU MESSAGE
          ================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="mb-3 flex justify-center text-[#EF4444]">
              <HandHeart size={27} />
            </div>

            <h3 className="text-[24px] font-black text-[#17392E] sm:text-[29px]">
              {t(
                "Thank You for Your Support.",
                "तुमच्या सहकार्याबद्दल मनःपूर्वक धन्यवाद."
              )}
            </h3>

            <p className="mt-3 text-[15px] text-[#718075]">
              {t(
                "Together, we can create a meaningful difference.",
                "एकत्र येऊन आपण सकारात्मक बदल घडवू शकतो."
              )}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
