import { ClockCheck, Truck, PackageCheck } from "lucide-react";

interface AdvantagesProps {
  onOpenQuote: () => void;
}

export default function Advantages({ onOpenQuote }: AdvantagesProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight mb-6 sm:mb-8">
        Bizning afzalliklarimiz
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        
        {/* Advantage 1: Fast lead time */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#C6893F]/10 border border-[#C6893F]/25 flex items-center justify-center shrink-0 text-[#C6893F]">
              <ClockCheck className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug pt-0.5">
              Tezkor ishlab chiqarish muddati
            </h3>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              3 kundan boshlab.
            </p>
          </div>
        </div>

        {/* Advantage 2: Small batch runs */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#C6893F]/10 border border-[#C6893F]/25 flex items-center justify-center shrink-0 text-[#C6893F]">
              <Truck className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug pt-0.5">
              Kichik partiyalarda ishlab chiqarish
            </h3>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold mb-1">
              500* donadan boshlab.
            </p>
            <p className="text-[11px] text-slate-400">
              * Quti o'lchamiga qarab.{" "}
              <button
                onClick={onOpenQuote}
                className="text-[#C6893F] hover:underline cursor-pointer font-medium"
              >
                Batafsil
              </button>
            </p>
          </div>
        </div>

        {/* Advantage 3: Wide assortment */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#C6893F]/10 border border-[#C6893F]/25 flex items-center justify-center shrink-0 text-[#C6893F]">
              <PackageCheck className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug pt-0.5">
              Gofroqadoqlarning keng assortimenti
            </h3>
          </div>
          <div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Formatlar, karton turlari va tayyorlash variantlari. Har qanday mahsulot uchun optimal qadoq yechimi.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
