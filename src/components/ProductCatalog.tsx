import { useTranslation } from 'react-i18next';

interface ProductCatalogProps {
  onOpenQuote: () => void;
}

interface ProductItem {
  id: string; // Add ID for translation lookup
  kraftImg: string;
  whiteImg?: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "transport",
    kraftImg: "/boxes/rsc_box_kraft.png",
    whiteImg: "/boxes/rsc_box_white.png",
  },
  {
    id: "fruits",
    kraftImg: "/boxes/frut_box_kraft.png",
    whiteImg: "/boxes/fruit_box_white.png",
  },
  {
    id: "confectionery",
    kraftImg: "/boxes/cake_box_kraft.png",
    whiteImg: "/boxes/cake_box_white.png",
  },
  {
    id: "food",
    kraftImg: "/boxes/pizza_box_kraft.png",
    whiteImg: "/boxes/pizza_box_whte.png",
  },
  {
    id: "drinks",
    kraftImg: "/boxes/drink_box_kraft.png",
    whiteImg: "/boxes/drink_box_white.png",
  },
  {
    id: "industrial",
    kraftImg: "/boxes/industry_box_kraft.png",
    whiteImg: "/boxes/industry_box_white.png",
  },
  {
    id: "thick",
    kraftImg: "/boxes/thick_box.png",
  },
  {
    id: "bags",
    kraftImg: "/boxes/bag_kraft.png",
    whiteImg: "/boxes/bag_white.png",
  },
];

export default function ProductCatalog({ onOpenQuote }: ProductCatalogProps) {
  const { t } = useTranslation();

  return (
    <section id="catalog" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight">
          {t('productCatalog.sectionTitle')}
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
                alt={t(`productCatalog.products.${prod.id}`)}
                className={`w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-105 select-none ${
                  prod.whiteImg ? 'group-hover:opacity-0' : ''
                }`}
                loading="lazy"
              />

              {/* White Version shown on Mouse Hover */}
              {prod.whiteImg && (
                <img
                  src={prod.whiteImg}
                  alt={`${t(`productCatalog.products.${prod.id}`)} ${t('productCatalog.whiteSuffix')}`}
                  className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105 select-none"
                  loading="lazy"
                />
              )}
            </div>

            {/* Title Underneath Card */}
            <h3 className="mt-3 sm:mt-3.5 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#C6893F] transition-colors leading-snug">
              {t(`productCatalog.products.${prod.id}`)}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
