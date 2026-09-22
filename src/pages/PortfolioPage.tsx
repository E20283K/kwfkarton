import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = Array.from({ length: 54 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(2, '0');
  const ext = num <= 5 ? 'png' : 'jpg';
  return {
    id: num,
    src: `/portfolio/kwf-portfolio-${pad}.${ext}`,
    alt: `KWF gofrotara va qadoqlash namunasi #${pad}`,
  };
});

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenQuote = () => {
    navigate('/contact');
  };

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : PORTFOLIO_ITEMS.length - 1));
  }, [activeLightboxIndex]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! < PORTFOLIO_ITEMS.length - 1 ? prev! + 1 : 0));
  }, [activeLightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handlePrev, handleNext]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightboxIndex]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased selection:bg-[#C6893F] selection:text-white">
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#C6893F] uppercase tracking-wider block mb-2">
              Biz bajargan ishlar
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              Portfolio
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Karton Works Factory tomonidan ishlab chiqarilgan 3 va 5 qatlamli gofrokarton qutilar,
              eksport tara namunalari, qandolat va individual brendlangan mahsulotlar galereyasi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pinterest Masonry Gallery */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
            Jami: <span className="text-slate-900 font-extrabold">{PORTFOLIO_ITEMS.length} ta namuna</span>
          </div>
          <button
            onClick={handleOpenQuote}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-[#C6893F] hover:text-[#B37830] transition-colors cursor-pointer group"
          >
            <span>Shaxsiy dizayn buyurtma qilish</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Pinterest Style Masonry Columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-103"
              />

              {/* Hover Dark/Golden Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-slate-800 flex items-center justify-center shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#C6893F] text-white text-[11px] font-extrabold tracking-wide uppercase shadow-xs">
                    KWF Namuna #{String(item.id).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Box */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16">
        <div className="bg-[#C6893F] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Sizga ham maxsus o'lchamdagi qadoq kerakmi?
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl font-medium">
              Muhandislarimiz sizning mahsulotingizga mos shakl, to'lqin turi va flekso-bosma dizaynini 
              bepul hisoblab berishadi.
            </p>
          </div>
          <button
            onClick={handleOpenQuote}
            className="shrink-0 bg-white hover:bg-slate-100 text-[#C6893F] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95"
          >
            Ariza qoldirish
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Top Control Bar */}
          <div 
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-sm font-extrabold tracking-wide bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              {activeLightboxIndex + 1} / {PORTFOLIO_ITEMS.length}
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 rounded-full bg-black/40 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Yopish"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#C6893F] text-white transition-colors cursor-pointer border border-white/10 z-10"
            aria-label="Oldingi namuna"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#C6893F] text-white transition-colors cursor-pointer border border-white/10 z-10"
            aria-label="Keyingi namuna"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image Content */}
          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PORTFOLIO_ITEMS[activeLightboxIndex].src}
              alt={PORTFOLIO_ITEMS[activeLightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <span className="text-white text-sm font-semibold">
                KWF Namuna #{String(PORTFOLIO_ITEMS[activeLightboxIndex].id).padStart(2, '0')}
              </span>
              <button
                onClick={() => {
                  setActiveLightboxIndex(null);
                  handleOpenQuote();
                }}
                className="bg-[#C6893F] hover:bg-[#B37830] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Ushbu turdagi qadoqqa buyurtma berish
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer onOpenQuote={handleOpenQuote} />
    </div>
  );
}
