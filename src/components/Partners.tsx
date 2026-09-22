interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
}

const PARTNERS: Partner[] = [
  {
    id: "uztex",
    name: "UzTex Group",
    logo: "/companies/uztex-logo.png",
    category: "Tekstil va to'qimachilik klasteri",
  },
  {
    id: "bahmal",
    name: "Bahmal Group",
    logo: "/companies/bahmal.png",
    category: "Yengil sanoat va matolar",
  },
  {
    id: "cotton-fabric",
    name: "Cotton Fabrics",
    logo: "/companies/cotton-fabric.png",
    category: "Paxta va gazlama ishlab chiqarish",
  },
  {
    id: "gurlan",
    name: "Gurlan Global Teks",
    logo: "/companies/gurlan.png",
    category: "To'qimachilik sanoati",
  },
  {
    id: "osiyoshirin",
    name: "Osiyo Shirin",
    logo: "/companies/osiyoshirin.png",
    category: "Qandolat va oziq-ovqat mahsulotlari",
  },
  {
    id: "tatcola",
    name: "Tatcola",
    logo: "/companies/tatcola.png",
    category: "Salqin ichimliklar sanoati",
  },
  {
    id: "hvara",
    name: "Hvara",
    logo: "/companies/logo-hvara.png",
    category: "Sanoat va maishiy mahsulotlar",
  },
  {
    id: "jazz",
    name: "JAZ Battery",
    logo: "/companies/jazz.png",
    category: "Iste'mol tovarlari",
  },
  {
    id: "nmt",
    name: "NMT",
    logo: "/companies/nmt.png",
    category: "Ishlab chiqarish va ta'minot",
  },
  {
    id: "humo",
    name: "Humo Textile",
    logo: "/companies/artboard-1.png",
    category: "Tekstil mahsulotlari",
  },
];

export default function Partners() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight">
          Hamkorlarimiz
        </h2>
      </div>

      {/* Logos 10-item Responsive Grid (4-column layout) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {PARTNERS.map((partner) => (
          <div
            key={partner.id}
            title={`${partner.name} - ${partner.category}`}
            className="group relative bg-white border border-slate-200/90 hover:border-[#C6893F]/50 rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col items-center justify-center h-32 sm:h-38 lg:h-42 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Ambient hover background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6893F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img
                src={partner.logo}
                alt={`${partner.name} logotipi`}
                className="max-h-16 sm:max-h-20 lg:max-h-24 w-auto max-w-[140px] sm:max-w-[170px] lg:max-w-[190px] object-contain transition-all duration-300 group-hover:scale-108 select-none"
                loading="lazy"
              />
            </div>

            {/* Subtle bottom indicator badge */}
            <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-bold text-slate-500 truncate max-w-[90%] pointer-events-none">
              {partner.name}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

