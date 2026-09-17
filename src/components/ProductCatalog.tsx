interface ProductCatalogProps {
  onOpenQuote: () => void;
}

interface ProductItem {
  title: string;
  kraftImg: string;
  whiteImg?: string;
}

const PRODUCTS: ProductItem[] = [
  {
    title: "Transportirovka (tashish) uchun",
    kraftImg: "/boxes/rsc_box_kraft.jpg",
    whiteImg: "/boxes/rsc_box_white.jpg",
  },
  {
    title: "Meva-sabzavot eksporti uchun",
    kraftImg: "/boxes/frut_box_kraft.jpg",
    whiteImg: "/boxes/fruit_box_white.jpg",
  },
  {
    title: "Qandolat va shirinliklar uchun",
    kraftImg: "/boxes/cake_box_kraft.jpg",
    whiteImg: "/boxes/cake_box_white.jpg",
  },
  {
    title: "Ovqat yetkazish uchun",
    kraftImg: "/boxes/pizza_box_kraft.jpg",
    whiteImg: "/boxes/pizza_box_whte.jpg",
  },
  {
    title: "Ichimliklar uchun",
    kraftImg: "/boxes/drink_box_kraft.jpg",
    whiteImg: "/boxes/drink_box_white.jpg",
  },
  {
    title: "Sanoat mahsulotlari uchun",
    kraftImg: "/boxes/industry_box_kraft.jpg",
    whiteImg: "/boxes/industry_box_white.jpg",
  },
  {
    title: "Qalin kartonli qadoqlar",
    kraftImg: "/boxes/thick_box.jpg",
  },
  {
    title: "Karton sumkalar",
    kraftImg: "/boxes/bag_kraft.jpg",
    whiteImg: "/boxes/bag_white.jpg",
  },
];

export default function ProductCatalog({ onOpenQuote }: ProductCatalogProps) {
  return (
    <section id="catalog" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight">
          Mahsulotlar katalogi
        </h2>
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
              {/* Default Kraft Image */}
              <img
                src={prod.kraftImg}
                alt={prod.title}
                className={`w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-105 select-none ${
                  prod.whiteImg ? 'group-hover:opacity-0' : ''
                }`}
                loading="lazy"
              />

              {/* White Version shown on Mouse Hover */}
              {prod.whiteImg && (
                <img
                  src={prod.whiteImg}
                  alt={`${prod.title} - oq`}
                  className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105 select-none"
                  loading="lazy"
                />
              )}
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
