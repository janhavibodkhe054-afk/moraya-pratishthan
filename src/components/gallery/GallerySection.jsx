
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
  Images,
  Award,
} from "lucide-react";

// ======================================
// PHOTO GALLERY - EXISTING 55 PHOTOS
// ======================================

const galleryImages = Array.from(
  { length: 55 },
  (_, index) => ({
    id: index + 1,
    src: `/${index + 1}.webp`,
    alt: `Morya Samajik Pratishthan Gallery Photo ${index + 1}`,
  })
);

// ======================================
// CERTIFICATES
// ======================================

// Place certificate images inside:
// public/certificates/1.webp
// public/certificates/2.webp
// etc.
//
// Change this count to match the actual
// number of certificate images uploaded.

const CERTIFICATE_COUNT = 71;

const certificateImages = Array.from(
  { length: CERTIFICATE_COUNT },
  (_, index) => ({
    id: index + 1,
    src: `/${index + 1}.png`,
    alt: `Morya Samajik Pratishthan Certificate ${index + 1}`,
  })
);

export default function GallerySection() {
  const reduceMotion = useReducedMotion();

  const [activeTab, setActiveTab] = useState("gallery");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const activeImages =
    activeTab === "gallery"
      ? galleryImages
      : certificateImages;

  const selectedImage =
    selectedIndex === null
      ? null
      : activeImages[selectedIndex] || null;

  // ======================================
  // TAB SWITCH
  // ======================================

  const changeTab = (tab) => {
    setSelectedIndex(null);
    setActiveTab(tab);
  };

  // ======================================
  // LIGHTBOX CONTROLS
  // ======================================

  const openLightbox = (index) => {
    previousFocusRef.current = document.activeElement;
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || activeImages.length === 0) {
        return null;
      }

      return (prev + 1) % activeImages.length;
    });
  }, [activeImages.length]);

  const previousImage = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null || activeImages.length === 0) {
        return null;
      }

      return (
        (prev - 1 + activeImages.length) %
        activeImages.length
      );
    });
  }, [activeImages.length]);

  // ======================================
  // KEYBOARD + SCROLL LOCK
  // ======================================

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow =
      document.body.style.overflow;

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
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedIndex,
    closeLightbox,
    nextImage,
    previousImage,
  ]);

  // Restore focus
  useEffect(() => {
    if (selectedIndex === null) {
      previousFocusRef.current?.focus?.();
    }
  }, [selectedIndex]);

  const tabs = [
    {
      id: "gallery",
      label: "Photo Gallery",
      icon: Images,
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: Award,
    },
  ];

  return (
    <>
      {/* ======================================
          GALLERY SECTION
      ====================================== */}

      <section
        id="gallery-grid"
        className="relative isolate min-h-[350px] overflow-hidden bg-[#101614] py-10 sm:py-12"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#15211B] via-[#101614] to-[#0B110E]" />

        <div className="pointer-events-none absolute -left-32 top-20 h-[350px] w-[350px] rounded-full bg-[#006B2E]/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-20 h-[350px] w-[350px] rounded-full bg-[#EF4444]/[0.04] blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-3 sm:px-5 lg:px-8">

          {/* ======================================
              PREMIUM TABS
          ====================================== */}

          <div className="mb-9 flex justify-center sm:mb-11">
            <div
              role="tablist"
              aria-label="Gallery categories"
              className="inline-flex w-full max-w-[440px] items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.06] p-1.5 sm:w-auto"
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    id={`gallery-tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="gallery-tab-panel"
                    onClick={() => changeTab(tab.id)}
                    className={`relative flex flex-1 items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-[13px] font-bold transition-colors duration-300 sm:flex-none sm:px-8 sm:text-[14px] ${
                      isActive
                        ? "text-white"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="gallery-active-tab"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-xl bg-[#EF4444] shadow-[0_6px_20px_rgba(239,68,68,0.22)]"
                      />
                    )}

                    <Icon
                      size={19}
                      className="relative z-10 shrink-0"
                    />

                    <span className="relative z-10 whitespace-nowrap">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ======================================
              TAB CONTENT
          ====================================== */}

          <div
            id="gallery-tab-panel"
            role="tabpanel"
            aria-labelledby={`gallery-tab-${activeTab}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 16 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.3 }}
              >
                {activeImages.length > 0 ? (
                  <div
                    className={
                      activeTab === "gallery"
                        ? "columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4"
                        : "grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    }
                  >
                    {activeImages.map((image, index) => (
                      <motion.button
                        key={`${activeTab}-${image.id}`}
                        type="button"
                        initial={
                          reduceMotion
                            ? false
                            : { opacity: 0, y: 16 }
                        }
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.1,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: Math.min(
                            index * 0.025,
                            0.15
                          ),
                        }}
                        onClick={() => openLightbox(index)}
                        aria-label={`Open ${image.alt}`}
                        className={`group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-[#1C2721] text-left transition-all duration-300 hover:border-white/30 ${
                          activeTab === "gallery"
                            ? "mb-3 break-inside-avoid sm:mb-4"
                            : "p-2.5"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading={
                            index < 4 ? "eager" : "lazy"
                          }
                          decoding="async"
                          className={
                            activeTab === "gallery"
                              ? "block h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]"
                              : "block h-auto max-h-[430px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                          }
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
                ) : (
                  <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-6 text-center">
                    <Award
                      size={38}
                      className="mb-4 text-[#EF4444]"
                    />

                    <h3 className="text-[20px] font-bold text-white">
                      Certificates
                    </h3>

                    <p className="mt-2 text-[14px] text-white/50">
                      Certificate images will appear here.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ======================================
          FULLSCREEN LIGHTBOX
      ====================================== */}

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
                {/* Close */}
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

                {/* Previous */}
                <button
                  type="button"
                  data-gallery-lightbox-control
                  onClick={(event) => {
                    event.stopPropagation();
                    previousImage();
                  }}
                  aria-label="Previous image"
                  className="fixed left-2 top-1/2 z-[2147483647] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#1C2721] text-white shadow-xl transition-all hover:bg-[#EF4444] sm:left-5"
                >
                  <ChevronLeft size={25} />
                </button>

                {/* Full Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeTab}-${selectedImage.id}`}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.96,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{ duration: 0.25 }}
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                    className="relative z-10 max-h-[82vh] max-w-full select-none object-contain shadow-2xl"
                  />
                </AnimatePresence>

                {/* Next */}
                <button
                  type="button"
                  data-gallery-lightbox-control
                  onClick={(event) => {
                    event.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next image"
                  className="fixed right-2 top-1/2 z-[2147483647] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#1C2721] text-white shadow-xl transition-all hover:bg-[#EF4444] sm:right-5"
                >
                  <ChevronRight size={25} />
                </button>

                {/* Counter */}
                <div className="fixed bottom-5 left-1/2 z-[2147483647] -translate-x-1/2 rounded-full border border-white/20 bg-[#1C2721] px-5 py-2.5 text-[12px] font-semibold text-white/90 shadow-xl">
                  {selectedIndex + 1}
                  <span className="mx-2 text-white/40">
                    /
                  </span>
                  {activeImages.length}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
