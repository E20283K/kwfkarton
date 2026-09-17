interface AdvantagesProps {
  onOpenQuote: () => void;
}

const advantages = [
  {
    keyword: "ENGINEERING",
    title: "Muhandislik yondashuvi",
    desc: "Har bir quti mahsulot, logistika va laboratoriya ma'lumotlari asosida loyihalanadi.",
  },
  {
    keyword: "ECONOMY",
    title: "Iqtisodiy yechim",
    desc: "Material, logistika va shikastlanish xarajatlarini minimallashtiramiz.",
  },
  {
    keyword: "SPEED",
    title: "Tez ishlab chiqarish",
    desc: "50 000 tagacha qutini 2–3 ish kunida. Takroriy buyurtmalar — 24 soat ichida.",
  },
  {
    keyword: "WHITE",
    title: "Premium oq qadoqlash",
    desc: "Oq liner bilan yorqin CMYK bosma. Brend qiymatini oshiradi.",
  },
  {
    keyword: "SRP",
    title: "Shelf Ready Packaging",
    desc: "Ombordan to'g'ridan-to'g'ri peshtaxtaga — tez merchandising.",
  },
];

export default function Advantages({ onOpenQuote }: AdvantagesProps) {
  return (
    <section id="advantages" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight mb-6 sm:mb-8">
        Bizning afzalliklarimiz
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {advantages.map(({ keyword, title, desc }) => (
          <div
            key={keyword}
            className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-3"
          >
            <div>
              <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-[#C6893F] block mb-2">
                {keyword}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-neutral-800 leading-snug mb-1.5">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        ))}

        {/* CTA card */}
        <div className="bg-[#C6893F] rounded-xl p-5 sm:p-6 flex flex-col justify-between gap-4">
          <p className="text-sm sm:text-base font-semibold text-white/95 leading-snug">
            Mahsulotingiz uchun optimal qadoq yechimini tayyorlaymiz.
          </p>
          <button
            onClick={onOpenQuote}
            className="self-start text-xs sm:text-sm font-bold text-[#C6893F] bg-white rounded-lg px-4 py-2 sm:px-5 sm:py-2.5 hover:bg-white/90 transition-colors duration-200 cursor-pointer shadow-xs"
          >
            So'rov yuborish
          </button>
        </div>
      </div>
    </section>
  );
}
