import React, { useState, useRef } from "react";
import _Header from "../sections/_Header";
import _Footer from "../sections/_Footer";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

// ─── Data ───────────────────────────────────────────────────────────────────
const galleryImages = [
  { id: 1,  url: "/galleryImages/img1.jpeg",  alt: "Editorial look 1"  },
  { id: 2,  url: "/galleryImages/img2.jpeg",  alt: "Editorial look 2"  },
  { id: 3,  url: "/galleryImages/img3.jpeg",  alt: "Editorial look 3"  },
  { id: 4,  url: "/galleryImages/img4.jpeg",  alt: "Editorial look 4"  },
  { id: 5,  url: "/galleryImages/img5.jpeg",  alt: "Editorial look 5"  },
  { id: 6,  url: "/galleryImages/img6.jpeg",  alt: "Editorial look 6"  },
  { id: 7,  url: "/galleryImages/img7.jpeg",  alt: "Editorial look 7"  },
  { id: 8,  url: "/galleryImages/img8.jpeg",  alt: "Editorial look 8"  },
  { id: 9,  url: "/galleryImages/img9.jpeg",  alt: "Editorial look 9"  },
  { id: 10, url: "/galleryImages/img10.jpeg", alt: "Editorial look 10" },
  { id: 11, url: "/galleryImages/img11.jpeg", alt: "Editorial look 11" },
  { id: 12, url: "/galleryImages/img12.jpeg", alt: "Editorial look 12" },
];

const col1 = galleryImages.filter((_, i) => i % 3 === 0);
const col2 = galleryImages.filter((_, i) => i % 3 === 1);
const col3 = galleryImages.filter((_, i) => i % 3 === 2);

// ─── GalleryItem ────────────────────────────────────────────────────────────
// NOTE: No layoutId here — avoids shared-layout animation corrupting
// visibility when the lightbox closes.
function GalleryItem({ image, index, hoveredId, setHoveredId, setSelectedId }) {
  const isHovered = hoveredId === image.id;

  return (
    <motion.div
      className="mb-3 overflow-hidden cursor-pointer relative"
      // Simple staggered fade-in on mount — not tied to viewport observer
      // so closing the modal can never reset visibility.
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onHoverStart={() => setHoveredId(image.id)}
      onHoverEnd={() => setHoveredId(null)}
      onClick={() => setSelectedId(image.id)}
    >
      <motion.img
        src={image.url}
        alt={image.alt}
        className="w-full object-cover block"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        draggable={false}
      />
      {/* Subtle dark overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        animate={{ opacity: isHovered ? 0.08 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

// ─── ParallaxColumn ─────────────────────────────────────────────────────────
function ParallaxColumn({ images, yOffset, topMargin, colIndexOffset, hoveredId, setHoveredId, setSelectedId }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, yOffset]);

  return (
    <motion.div ref={ref} style={{ y }} className={`flex flex-col ${topMargin}`}>
      {images.map((image, i) => (
        <GalleryItem
          key={image.id}
          image={image}
          index={colIndexOffset + i}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          setSelectedId={setSelectedId}
        />
      ))}
    </motion.div>
  );
}

// ─── EditorialGallery ────────────────────────────────────────────────────────
function EditorialGallery({ hoveredId, setHoveredId, setSelectedId }) {
  return (
    <>
      {/* Desktop: 3-column asymmetric grid with parallax */}
      <div className="hidden md:grid md:grid-cols-3 gap-3">
        <ParallaxColumn
          images={col1}
          yOffset={-30}
          topMargin="mt-0"
          colIndexOffset={0}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          setSelectedId={setSelectedId}
        />
        {/* Middle column pushed down for asymmetric editorial feel */}
        <ParallaxColumn
          images={col2}
          yOffset={-60}
          topMargin="mt-16"
          colIndexOffset={col1.length}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          setSelectedId={setSelectedId}
        />
        <ParallaxColumn
          images={col3}
          yOffset={-20}
          topMargin="mt-8"
          colIndexOffset={col1.length + col2.length}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          setSelectedId={setSelectedId}
        />
      </div>

      {/* Mobile: single column, no parallax */}
      <div className="md:hidden flex flex-col gap-3">
        {galleryImages.map((image, i) => (
          <GalleryItem
            key={image.id}
            image={image}
            index={i}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
    </>
  );
}

// ─── Gallery Page ────────────────────────────────────────────────────────────
function Gallery() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const selectedImage = galleryImages.find((img) => img.id === selectedId);

  const closeModal = () => setSelectedId(null);

  return (
    <section className="bg-white min-h-screen flex flex-col">
      <_Header />

      <main className="flex-grow pt-28 pb-24 px-6 sm:px-10 lg:px-16">
        {/* Hero Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.35em] uppercase text-Secondary-theme font-manrope mb-4"
          >
            Our Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl md:text-7xl font-medium font-playfairDisplay leading-[1.05] mb-5"
          >
            Captured
            <br />
            <span className="italic text-Secondary-theme">Moments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-black/50 text-sm md:text-base max-w-lg mx-auto font-manrope leading-relaxed"
          >
            A glimpse into the artistry and elegance we bring to every look.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 mx-auto w-16 h-px bg-Secondary-theme origin-left"
          />
        </div>

        {/* Masonry Gallery */}
        <div className="max-w-7xl mx-auto">
          <EditorialGallery
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            setSelectedId={setSelectedId}
          />
        </div>
      </main>

      {/* ── Lightbox Modal ── */}
      {/* Deliberately NOT using layoutId — avoids corrupting grid item visibility */}
      <AnimatePresence>
        {selectedId && selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full max-h-[88vh] object-contain"
              />

              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute -top-11 right-0 text-white/70 hover:text-white text-sm font-manrope tracking-widest uppercase transition-colors"
              >
                Close &times;
              </button>

              {/* Prev */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = galleryImages.findIndex((g) => g.id === selectedId);
                  setSelectedId(galleryImages[(idx - 1 + galleryImages.length) % galleryImages.length].id);
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white/60 hover:text-white text-4xl transition-colors hidden md:block"
              >
                &lsaquo;
              </button>

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = galleryImages.findIndex((g) => g.id === selectedId);
                  setSelectedId(galleryImages[(idx + 1) % galleryImages.length].id);
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white/60 hover:text-white text-4xl transition-colors hidden md:block"
              >
                &rsaquo;
              </button>

              {/* Caption */}
              <p className="text-white/40 text-xs text-center font-manrope tracking-widest mt-3 uppercase">
                {selectedImage.alt} &middot; {galleryImages.findIndex((g) => g.id === selectedId) + 1} / {galleryImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <_Footer />
    </section>
  );
}

export default Gallery;
