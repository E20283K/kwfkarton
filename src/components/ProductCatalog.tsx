interface ProductCatalogProps {
  onOpenQuote: () => void;
}

const PRODUCTS = [
  {
    title: "SANOAT SOHALARI UCHUN QADOQLAR",
    count: "121 TA MAHSULOT",
    img: "/assets/upaksnab/cat_1_otrasi.png",
  },
  {
    title: "KARTON QUTILAR",
    count: "68 TA MAHSULOT",
    img: "/assets/upaksnab/cat_2_korobki.png",
  },
  {
    title: "GOFROQADOQLAR",
    count: "5 TA MAHSULOT",
    img: "/assets/upaksnab/cat_3_gofroupakovka.png",
  },
  {
    title: "GOFROLOTOKLAR",
    count: "58 TA MAHSULOT",
    img: "/assets/upaksnab/cat_4_lotki.png",
  },
  {
    title: "VAROQLI GOFROKARTON",
    count: "34 TA MAHSULOT",
    img: "/assets/upaksnab/cat_5_listovoy.png",
  },
  {
    title: "YORDAMCHI MATERIAL VA ORALIQLAR",
    count: "42 TA MAHSULOT",
    img: "/assets/upaksnab/cat_6_vspomogatelnye.png",
  },
  {
    title: "YIRIK O'LCHAMLI QADOQLAR",
    count: "19 TA MAHSULOT",
    img: "/assets/upaksnab/cat_7_krupnogabarit.png",
  },
  {
    title: "FEFCO KATALOGI",
    count: "STANDARTLAR",
    img: "/assets/upaksnab/cat_8_fefco.png",
  },
];

export default function ProductCatalog({ onOpenQuote }: ProductCatalogProps) {
  return (
    <section id="catalog" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight mb-6 sm:mb-8">
        Mahsulotlar katalogi
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PRODUCTS.map((prod, idx) => (
          <div
            key={idx}
            onClick={onOpenQuote}
            className="group relative rounded-xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer bg-slate-100 aspect-4/3 flex flex-col justify-end"
          >
            {/* Card Background Photo */}
            <img
              src={prod.img}
              alt={prod.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
            />

            {/* Subtle Gradient Backdrop for Label Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Floating White Banner Box matching screenshot */}
            <div className="relative z-10 m-2 sm:m-3 bg-white/92 backdrop-blur-xs py-2 px-2.5 sm:px-3 rounded-lg border border-white/80 shadow-xs text-center transition-all group-hover:bg-white group-hover:shadow-md">
              <h3 className="text-xs sm:text-[13px] font-black text-neutral-900 tracking-tight uppercase leading-tight line-clamp-1">
                {prod.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                {prod.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
