import { useState } from "react";
import { Camera, X, ChevronRight } from "lucide-react";

interface ProductionGalleryProps {
  onOpenQuote: () => void;
}

export default function ProductionGallery({ onOpenQuote }: ProductionGalleryProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight mb-6 sm:mb-8">
        Kompaniyamiz ishlab chiqarishi
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* Left Column: Big Warehouse Palette Image */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/90 group aspect-4/3 bg-slate-100">
            <img
              src="/assets/upaksnab/prod_main.png"
              alt="Karton Works Factory tayyor mahsulotlar ombori majmuasi (O'zbekiston)"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white text-xs sm:text-sm font-bold bg-black/50 backdrop-blur-xs px-3 py-1.5 rounded-md">
                Ombor logistika terminali
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Thumbnails Strip & Action Button */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          
          {/* Thumbnails Row matching screenshot */}
          <div>
            <div className="relative rounded-xl overflow-hidden border border-slate-200/90 shadow-xs group cursor-pointer" onClick={() => setIsViewerOpen(true)}>
              <img
                src="/assets/upaksnab/prod_strip.png"
                alt="Gofrirovka, kesish, buklash va yetkazib berish avtomatlashtirilgan liniyalari"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-102"
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 mt-2 px-1 font-medium">
              <span>Gofroagregat</span>
              <span>Qirqish</span>
              <span>Buklash</span>
              <span>Yetkazib berish</span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              Zavod 3 va 5 qatlamli gofrokarton ishlab chiqarish uchun mintaqada noyob bo'lgan uzluksiz siklli avtomatlashtirilgan uskunalar bilan jihozlangan.
            </p>
            <p className="hidden sm:block">
              O'zimizning akkreditatsiyadan o'tgan sinov laboratoriyamiz har bir xomashyo ruloni va yuklanadigan har bir qutilar partiyasining mustahkamligini tekshiradi.
            </p>
          </div>

          {/* Button: Barcha rasmlarni ko'rish */}
          <div>
            <button
              onClick={() => setIsViewerOpen(true)}
              className="border-2 border-[#C6893F] text-neutral-900 hover:bg-[#C6893F]/10 font-bold text-xs sm:text-sm px-6 py-3 rounded-lg inline-flex items-center space-x-2.5 transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Camera className="w-4 h-4 text-[#C6893F]" />
              <span>Barcha rasmlarni ko'rish</span>
            </button>
          </div>

        </div>

      </div>

      {/* Lightbox Photo Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-6">
            <button
              onClick={() => setIsViewerOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Karton Works Factory (KWF) ishlab chiqarish fotogalereyasi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto p-1">
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <img src="/assets/upaksnab/prod_main.png" alt="Ombor" className="w-full h-56 object-cover" />
                <p className="p-2 text-xs font-semibold text-slate-600">Tayyor mahsulotlar ombori</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <img src="/hero_factory.png" alt="Liniya" className="w-full h-56 object-cover" />
                <p className="p-2 text-xs font-semibold text-slate-600">Avtomatlashtirilgan gofroliniya</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <img src="/testing_laboratory.png" alt="Laboratoriya" className="w-full h-56 object-cover" />
                <p className="p-2 text-xs font-semibold text-slate-600">ECT/BCT sinov laboratoriyasi</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <img src="/premium_packaging.png" alt="Qadoq" className="w-full h-56 object-cover" />
                <p className="p-2 text-xs font-semibold text-slate-600">Qutilarni yuqori aniqlikda qirqish</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => { setIsViewerOpen(false); onOpenQuote(); }}
                className="bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs px-6 py-2.5 rounded-lg transition-colors inline-flex items-center space-x-1"
              >
                <span>Ishlab chiqarish bo'yicha konsultatsiya olish</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
