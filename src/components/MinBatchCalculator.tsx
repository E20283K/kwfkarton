import { useState } from "react";

interface MinBatchCalculatorProps {
  onOpenQuote: () => void;
}

export default function MinBatchCalculator({ onOpenQuote }: MinBatchCalculatorProps) {
  const [length, setLength] = useState<string>("380");
  const [width, setWidth] = useState<string>("285");
  const [height, setHeight] = useState<string>("228");

  // Calculate dynamic minimum batch based on box dimensions
  const l = Number(length) || 300;
  const w = Number(width) || 200;
  const h = Number(height) || 150;
  const surfaceAreaM2 = (2 * (l + w) * (h + w)) / 1000000;
  
  // Larger boxes require smaller min runs; smaller boxes require 100-300 pcs
  const minBatch = surfaceAreaM2 > 1.2 ? 50 : surfaceAreaM2 > 0.5 ? 100 : surfaceAreaM2 > 0.25 ? 200 : 300;

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 my-8 sm:my-14">
      <div className="relative rounded-2xl lg:rounded-3xl border-2 border-[#C6893F] bg-[#2E3035] text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
        
        {/* Subtle background ambient glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C6893F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Calculator Controls */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-3">
              To'rt klapanli qutining <br />
              minimal partiyasini hisoblash
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
              Buyurtma berish uchun mavjud bo'lgan minimal partiya miqdorini aniqlash uchun kerakli qadoqning ichki o'lchamlarini kiriting.
            </p>

            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3">
              Aniq hisoblash uchun parametrlar:
            </h3>

            {/* Inputs Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
              <div>
                <label className="block text-[11px] sm:text-xs text-slate-300 font-medium mb-1">
                  Uzunligi (mm):
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="Uzunligi (mm)"
                  className="w-full bg-white text-slate-900 px-3 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#C6893F]"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs text-slate-300 font-medium mb-1">
                  Kengligi (mm):
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Kengligi (mm)"
                  className="w-full bg-white text-slate-900 px-3 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#C6893F]"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs text-slate-300 font-medium mb-1">
                  Balandligi (mm):
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Balandligi (mm)"
                  className="w-full bg-white text-slate-900 px-3 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#C6893F]"
                />
              </div>
            </div>

            {/* Minimum Result */}
            <div className="pt-1">
              <span className="text-xs text-slate-400 font-medium">
                Miqdor (partiya), dona:
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-0.5 mb-6">
                Kamida {minBatch} dona
              </div>
            </div>

            <div>
              <button
                onClick={onOpenQuote}
                className="bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-lg hover:shadow-[#C6893F]/30 transition-all cursor-pointer active:scale-95"
              >
                Partiya hisobiga ariza qoldirish
              </button>
            </div>

          </div>

          {/* Right Column: 3D Box Render Image */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group max-w-sm w-full">
              <img
                src="/assets/upaksnab/calc_box_3d.png"
                alt="KWF brendlangan to'rt klapanli quti"
                className="w-full h-auto object-contain rounded-xl drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
