
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function InstitutionalQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F3] px-4 py-12 sm:py-16 lg:py-20">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#17392E]/[0.05] blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#EF6666]/[0.06] blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-[#17392E]/10 bg-white px-6 py-10 text-center shadow-[0_15px_50px_rgba(23,57,46,0.06)] sm:px-12 sm:py-14 lg:px-20"
        >

          {/* Decorative Quote Marks */}
          <div className="pointer-events-none absolute -right-2 -top-12 font-serif text-[180px] leading-none text-[#17392E]/[0.035]">
            ”
          </div>

          <div className="relative z-10">

            {/* Icon */}
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#17392E] text-white">
              <Heart size={21} />
            </div>

            {/* Heading */}
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#EF6666] sm:text-xs">
              Morya Samajik Pratishthan
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#17392E] sm:text-3xl lg:text-4xl">
              Compassion in Action
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#737D76] sm:text-base">
              Guided by compassion and a spirit of service, we believe in creating meaningful opportunities and making a positive difference in society.
            </p>

            {/* Divider */}
            <div className="mx-auto my-7 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#EF6666]/50" />
              <span className="h-2 w-2 rotate-45 bg-[#EF6666]" />
              <span className="h-px w-12 bg-[#EF6666]/50" />
            </div>

            {/* Sanskrit Tagline */}
            <h3 className="font-serif text-xl font-bold leading-[1.9] text-[#A83D42] sm:text-2xl lg:text-[29px]">
              न त्वहं कामये राज्यं न स्वर्गं नापुनर्भवम्।
              <br />
              कामये दुःखतप्तानां प्राणिनामार्तिनाशनम्॥
            </h3>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
