interface HeroBannerProps {
  onOpenQuote: () => void;
}

export default function HeroBanner({ onOpenQuote }: HeroBannerProps) {
  return (
    <section className="relative w-full overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center bg-neutral-950">
      {/* Factory Background Photo spanning 100% full width */}
      <img
        src="/hero.png"
        alt="Karton Works Factory qadoqlash materiallari ishlab chiqarish zavodi (O'zbekiston)"
        className="absolute inset-0 w-full h-full object-cover object-center lg:object-right select-none"
      />

      {/* Contrast Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20 sm:to-transparent z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-1" />

      {/* Hero Content Container aligned with site grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 flex items-center">
        <div className="max-w-2xl flex flex-col items-start justify-center">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08] mb-3 select-none">
            QADOQLASH MATERIALLARI <br />
            <span className="font-extrabold normal-case text-2xl sm:text-4xl lg:text-5xl text-white">
              ishlab chiqarish
            </span>
          </h1>

          <div className="bg-black/50 backdrop-blur-xs border border-white/20 px-3.5 py-2 rounded-lg mb-7 mt-2 shadow-xs">
            <p className="text-white/95 text-xs sm:text-sm font-medium leading-relaxed">
              Individual o'lchamlar bo'yicha har qanday murakkablikdagi qadoqlarni tayyorlash
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-lg shadow-black/40 hover:shadow-[#C6893F]/30 transition-all duration-200 cursor-pointer active:scale-95"
          >
            Ariza qoldirish
          </button>

        </div>
      </div>
    </section>
  );
}
