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
    name: "Jazz",
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
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
          Hamkorlarimiz
        </h2>
      </div>

      {/* Logos 10-item Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {PARTNERS.map((partner) => (
          <div
            key={partner.id}
            title={`${partner.name} - ${partner.category}`}
            className="group relative bg-white border border-slate-200/90 hover:border-[#C6893F]/50 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center h-28 sm:h-32 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Ambient hover background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6893F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img
                src={partner.logo}
                alt={`${partner.name} logotipi`}
                className="max-h-14 sm:max-h-16 w-auto max-w-[130px] sm:max-w-[155px] object-contain transition-all duration-300 group-hover:scale-108 select-none"
                loading="lazy"
              />
            </div>

            {/* Subtle bottom indicator badge */}
            <div className="absolute bottom-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-bold text-slate-500 truncate max-w-[90%] pointer-events-none">
              {partner.name}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

