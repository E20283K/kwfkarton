interface ProductCatalogProps {
  onOpenQuote: () => void;
}

interface ProductItem {
  title: string;
  img: string;
}

const PRODUCTS: ProductItem[] = [
  {
    title: "Transportirovka (tashish) uchun",
    img: "/catalog/1_transportirovka.png",
  },
  {
    title: "Meva-sabzavot eksporti uchun",
    img: "/catalog/2_meva_sabzavot.png",
  },
  {
    title: "Qandolat va shirinliklar uchun",
    img: "/catalog/3_qandolat.png",
  },
  {
    title: "Ovqat yetkazish uchun",
    img: "/catalog/4_ovqat_yetkazish.png",
  },
  {
    title: "Ichimliklar uchun",
    img: "/catalog/5_ichimliklar.png",
  },
  {
    title: "Sanoat mahsulotlari uchun",
    img: "/catalog/6_sanoat.png",
  },
  {
    title: "Qalin kartonli qadoqlar",
    img: "/catalog/7_qalin_karton.png",
  },
  {
    title: "Karton sumkalar",
    img: "/catalog/8_karton_sumkalar.png",
  },
];

export default function ProductCatalog({ onOpenQuote }: ProductCatalogProps) {
  return (
    <section id="catalog" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
          Mahsulotlar katalogi
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-xl">
          Biznesingiz uchun har xil turdagi sifatli gofrokarton va qadoqlash mahsulotlari
        </p>
      </div>

      {/* 8-Card Grid matching design reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {PRODUCTS.map((prod, idx) => (
          <div
            key={idx}
            onClick={onOpenQuote}
            className="group cursor-pointer flex flex-col transition-all duration-300 active:scale-[0.99]"
          >
            {/* Image Card Container */}
            <div className="relative w-full aspect-4/3 bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#C6893F]/50 transition-all duration-300 overflow-hidden flex items-center justify-center p-3 sm:p-4">
              <img
                src={prod.img}
                alt={prod.title}
                className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 select-none"
                loading="lazy"
              />
            </div>

            {/* Title Underneath Card */}
            <h3 className="mt-3 sm:mt-3.5 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#C6893F] transition-colors leading-snug">
              {prod.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
