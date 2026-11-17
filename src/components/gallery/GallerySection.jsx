
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

import { createPortal } from "react-dom";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

// All 55 WebP images
const galleryImages = Array.from({ length: 55 }, (_, index) => ({
  id: index + 1,
  src: `/${index + 1}.webp`,
  alt: `Morya Samajik Pratishthan Gallery Photo ${index + 1}`,
}));

export default function GallerySection() {
  const reduceMotion = useReducedMotion();

  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const selectedImage =
    selectedIndex === null
      ? null
      : galleryImages[selectedIndex];

  // Open Lightbox
  const openLightbox = (index) => {
    previousFocusRef.current = document.activeElement;
    setSelectedIndex(index);
  };

  // Close Lightbox
  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Next Image
  const nextImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev + 1) % galleryImages.length
    );
  }, []);

  // Previous Image
  const previousImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) %
          galleryImages.length
    );
  }, []);

  // Keyboard Controls + Scroll Lock
  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousImage();
      }

      if (event.key === "Tab") {
        const controls = [
          closeButtonRef.current,
          ...document.querySelectorAll(
            "[data-gallery-lightbox-control]"
          ),
        ].filter(Boolean);

        if (!controls.length) return;

        const first = controls[0];
        const last = controls[controls.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedIndex,
    closeLightbox,
    nextImage,
    previousImage,
  ]);

  // Restore Focus After Closing
  useEffect(() => {
    if (selectedIndex === null) {
      previousFocusRef.current?.focus?.();
    }
  }, [selectedIndex]);

  return (
    <>
      {/* ================= GALLERY SECTION ================= */}

      <section
        id="gallery-grid"
        className="relative isolate min-h-[350px] bg-[#101614] py-8 sm:py-10 lg:py-12"
      >
        {/* Dark Background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#15211B] via-[#101614] to-[#0B110E]" />

        {/* Subtle Glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-[350px] w-[350px] rounded-full bg-[#006B2E]/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-20 h-[350px] w-[350px] rounded-full bg-[#EF4444]/[0.04] blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-3 sm:px-5 lg:px-8">

          {/* Masonry Gallery */}
          <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">

            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 16 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.025, 0.15),
                }}
                onClick={() => openLightbox(index)}
                aria-label={`Open gallery photo ${image.id}`}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-[#1C2721] text-left transition-all duration-300 hover:border-white/25 sm:mb-4"
              >
                {/* Original Image Aspect Ratio */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]"
                />

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md">
                    <ZoomIn size={21} />
                  </span>
                </div>
              </motion.button>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FULLSCREEN LIGHTBOX ================= */}

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                key="gallery-lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                role="dialog"
                aria-modal="true"
                aria-label="Gallery image viewer"
                onClick={closeLightbox}
                className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-[#030605]/95 px-3 py-16 backdrop-blur-xl sm:px-14"
              >

                {/* Close Button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    closeLightbox();
                  }}
                  aria-label="Close gallery"
                  className="fixed right-4 top-4 z-[2147483647] flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#EF4444] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#D93636]"
                >
                  <X size={26} />
                </button>

                {/* Previous Button */}
                <button
                  type="button"
                  data-gallery-lightbox-control
                  onClick={(event) => {
                    event.stopPropagation();
                    previousImage();
                  }}
                  aria-label="Previous photo"
                  className="fixed left-2 top-1/2 z-[2147483647] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#1C2721] text-white shadow-xl transition-all hover:bg-[#EF4444] sm:left-5"
                >
                  <ChevronLeft size={25} />
                </button>

                {/* Full Image - No Cropping */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage.id}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, scale: 0.96 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    onClick={(event) => event.stopPropagation()}
                    className="relative z-10 max-h-[82vh] max-w-full select-none object-contain shadow-2xl"
                  />
                </AnimatePresence>

                {/* Next Button */}
                <button
                  type="button"
                  data-gallery-lightbox-control
                  onClick={(event) => {
                    event.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next photo"
                  className="fixed right-2 top-1/2 z-[2147483647] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#1C2721] text-white shadow-xl transition-all hover:bg-[#EF4444] sm:right-5"
                >
                  <ChevronRight size={25} />
                </button>

                {/* Image Counter */}
                <div className="fixed bottom-5 left-1/2 z-[2147483647] -translate-x-1/2 rounded-full border border-white/20 bg-[#1C2721] px-5 py-2.5 text-[12px] font-semibold text-white/90 shadow-xl">
                  {selectedIndex + 1}
                  <span className="mx-2 text-white/40">/</span>
                  {galleryImages.length}
                </div>

              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
