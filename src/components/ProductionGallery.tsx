import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Eye } from "lucide-react";

interface ProductionGalleryProps {
  onOpenQuote: () => void;
}

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  desc: string;
  category: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    src: "/gallery/photo_2026-09-16_15-28-37.jpg",
    title: "Avtomatlashtirilgan gofroagregat liniyasi",
    desc: "3 va 5 qatlamli gofrokarton ishlab chiqarishning uzluksiz texnologik jarayoni",
    category: "Gofroagregat",
  },
  {
    id: 2,
    src: "/gallery/photo_2026-09-16_15-28-40.jpg",
    title: "Gofrolistlarni formatlash va kesish uchastkasi",
    desc: "Yuqori aniqlikdagi pichoqlar bilan talab qilingan o'lchamlarga moslash",
    category: "Formatlash",
  },
  {
    id: 3,
    src: "/gallery/photo_2026-09-16_15-28-42.jpg",
    title: "Qutilarni buklash va yelimlash agregatlari",
    desc: "Avtomatlashtirilgan tezkor buklash va yelimlash mashinalari",
    category: "Buklash va yelimlash",
  },
  {
    id: 4,
    src: "/gallery/photo_2026-09-16_15-28-44.jpg",
    title: "Ishlab chiqarish sexining umumiy ko'rinishi",
    desc: "Karton Works Factory zamonaviy ishlab chiqarish va texnologik quvvatlari",
    category: "Asosiy sex",
  },
  {
    id: 5,
    src: "/gallery/photo_2026-09-16_15-28-46.jpg",
    title: "Xomashyo va mahsulotlar logistika maydoni",
    desc: "Sifat nazoratidan o'tgan partiyalarni omborga tizimli joylash",
    category: "Logistika",
  },
  {
    id: 6,
    src: "/gallery/photo_2026-09-16_15-28-48.jpg",
    title: "Tayyor gofroqutilarni palletlash va saralash",
    desc: "Mijozlarga xavfsiz yetkazib berish uchun standart palletlarga joylash",
    category: "Palletlash",
  },
];

export default function ProductionGallery({ onOpenQuote }: ProductionGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerIdx, setViewerIdx] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const openViewer = (idx: number) => {
    setViewerIdx(idx);
    setZoomLevel(1);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    setZoomLevel(1);
  };

  const nextSlide = useCallback(() => {
    setViewerIdx((prev) => (prev + 1) % GALLERY_PHOTOS.length);
    setZoomLevel(1);
  }, []);

  const prevSlide = useCallback(() => {
    setViewerIdx((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    setZoomLevel(1);
  }, []);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard navigation for viewer
  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeViewer();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      }
    };

    // Lock body scroll when lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isViewerOpen, nextSlide, prevSlide]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const currentPhoto = GALLERY_PHOTOS[selectedIdx];
  const activeViewerPhoto = GALLERY_PHOTOS[viewerIdx];

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight">
          Kompaniyamiz ishlab chiqarishi
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        
        {/* Left Column (7 cols): Main Interactive Photo with Thumbnail Navigator */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div
            onClick={() => openViewer(selectedIdx)}
            className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/90 group aspect-[4/3] bg-slate-100 cursor-pointer"
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 select-none"
              loading="lazy"
            />
          </div>

          {/* Interactive Thumbnails Selector Strip */}
          <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => setSelectedIdx(idx)}
                className={`relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                  selectedIdx === idx
                    ? "border-[#C6893F] ring-2 ring-[#C6893F]/40 scale-102 shadow-md"
                    : "border-transparent opacity-70 hover:opacity-100 hover:border-slate-300"
                }`}
                title={photo.title}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column (5 cols): 4-photo preview grid & Factory details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Secondary 4-Photo Preview Grid */}
          <div>
            <div className="flex items-center justify-between mb-2 px-0.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Sex maydonlaridan kadrlar
              </span>
              <span className="text-xs font-semibold text-slate-400">
                6 ta fotosurat
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {GALLERY_PHOTOS.slice(1, 5).map((photo, idx) => {
                const realIndex = idx + 1;
                return (
                  <div
                    key={photo.id}
                    onClick={() => openViewer(realIndex)}
                    className="group relative rounded-xl overflow-hidden border border-slate-200/90 shadow-xs aspect-[4/3] cursor-pointer bg-slate-100"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Eye className="w-5 h-5 drop-shadow-md" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technology Description Text */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center space-x-2 text-neutral-900 font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-[#C6893F]" />
              <h4>Uzluksiz siklli zamonaviy quvvatlar</h4>
            </div>
            <p>
              Zavod 3 va 5 qatlamli gofrokarton ishlab chiqarish uchun yuqori aniqlikdagi avtomatlashtirilgan agregatlar, lazerli qirqish va ko'p rangli flekso-bosma uskunalari bilan jihozlangan.
            </p>
            <p className="text-slate-500 text-xs">
              Har bir xomashyo partiyasi va tayyor qutilar qat'iy standartlar bo'yicha laboratoriya sinovidan (ECT, BCT, namlik darajasi) o'tadi.
            </p>
          </div>


        </div>

      </div>

      {/* ======================================================================= */}
      {/* REAL IMAGE VIEWER GALLERY ENGINE (PRO LIGHTBOX) */}
      {/* ======================================================================= */}
      {isViewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-in fade-in duration-200"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Control Bar */}
          <div className="w-full px-4 sm:px-6 py-3 flex items-center justify-between bg-black/40 border-b border-white/10 z-20">
            {/* Title & Counter */}
            <div className="flex items-center space-x-3 text-white truncate max-w-[65%]">
              <span className="bg-[#C6893F] text-white text-xs font-black px-2.5 py-1 rounded-md tracking-wider">
                {viewerIdx + 1} / {GALLERY_PHOTOS.length}
              </span>
              <div className="truncate">
                <h4 className="text-xs sm:text-sm font-bold truncate">
                  {activeViewerPhoto.title}
                </h4>
              </div>
            </div>

            {/* Toolbar Buttons */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-white">
              {/* Zoom In */}
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Kattalashtirish (+)"
                aria-label="Kattalashtirish"
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Zoom Out */}
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Kichraytirish (-)"
                aria-label="Kichraytirish"
              >
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Reset Zoom */}
              {zoomLevel > 1 && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  title="O'lchamni tiklash"
                  aria-label="O'lchamni tiklash"
                >
                  <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}

              {/* View Full Resolution in New Tab */}
              <a
                href={activeViewerPhoto.src}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Asl nusxani ochish"
                aria-label="Asl nusxani ochish"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeViewer}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-1 cursor-pointer"
                title="Yopish (Esc)"
                aria-label="Yopish"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Main Stage Image with Navigation Chevrons */}
          <div
            className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden cursor-default"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeViewer();
            }}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
              title="Oldingi rasm (Chap strelka)"
              aria-label="Oldingi rasm"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>

            {/* Active Image Container */}
            <div
              className="relative max-w-5xl max-h-[72vh] sm:max-h-[76vh] flex items-center justify-center transition-transform duration-200 ease-out"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                key={activeViewerPhoto.id}
                src={activeViewerPhoto.src}
                alt={activeViewerPhoto.title}
                className="max-w-full max-h-[72vh] sm:max-h-[76vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
              title="Keyingi rasm (O'ng strelka)"
              aria-label="Keyingi rasm"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip & Consultation Bar */}
          <div className="w-full px-4 py-3 bg-black/60 border-t border-white/10 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Thumbnails Navigation Strip */}
            <div className="flex items-center space-x-2 overflow-x-auto py-1 max-w-full [scrollbar-width:none]">
              {GALLERY_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => {
                    setViewerIdx(idx);
                    setZoomLevel(1);
                  }}
                  className={`relative w-14 sm:w-16 h-10 sm:h-11 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    viewerIdx === idx
                      ? "border-[#C6893F] ring-2 ring-[#C6893F]/50 scale-105"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`Rasm ${idx + 1}: ${photo.title}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Consultation CTA button inside viewer */}
            <button
              onClick={() => {
                closeViewer();
                onOpenQuote();
              }}
              className="shrink-0 bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Ishlab chiqarish bo'yicha konsultatsiya olish
            </button>
          </div>

        </div>
      )}
    </section>
  );
}
