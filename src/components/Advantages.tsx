import { Wrench, TrendingDown, Zap, Sparkles, ShoppingCart } from "lucide-react";

interface AdvantagesProps {
  onOpenQuote: () => void;
}

const advantages = [
  {
    icon: Wrench,
    title: "Muhandislik yondashuvi",
    desc: "Har bir quti mahsulot, logistika va laboratoriya ma'lumotlari asosida loyihalanadi.",
  },
  {
    icon: TrendingDown,
    title: "Iqtisodiy yechim",
    desc: "Material, logistika va shikastlanish xarajatlarini minimallashtiramiz.",
  },
  {
    icon: Zap,
    title: "Tez ishlab chiqarish",
    desc: "50 000 tagacha qutini 2–3 ish kunida. Takroriy buyurtmalar — 24 soat ichida.",
  },
  {
    icon: Sparkles,
    title: "Premium oq qadoqlash",
    desc: "Oq liner bilan yorqin CMYK bosma. Brend qiymatini oshiradi.",
  },
  {
    icon: ShoppingCart,
    title: "Shelf Ready Packaging",
    desc: "Ombordan to'g'ridan-to'g'ri peshtaxtaga — tez merchandising.",
  },
];

export default function Advantages({ onOpenQuote }: AdvantagesProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight mb-6 sm:mb-8">
        Bizning afzalliklarimiz
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {advantages.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col gap-3"
          >
            <div className="w-11 h-11 rounded-lg bg-[#C6893F]/10 border border-[#C6893F]/25 flex items-center justify-center shrink-0 text-[#C6893F]">
              <Icon className="w-5 h-5 stroke-[1.75]" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 leading-snug">{title}</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
          </div>
        ))}

        {/* CTA card */}
        <div className="bg-[#C6893F]/8 border border-[#C6893F]/30 rounded-xl p-6 flex flex-col justify-center gap-3">
          <p className="text-sm font-semibold text-neutral-800 leading-snug">
            Mahsulotingiz uchun optimal qadoq yechimini tayyorlaymiz.
          </p>
          <button
            onClick={onOpenQuote}
            className="self-start text-sm font-semibold text-[#C6893F] border border-[#C6893F]/50 rounded-lg px-4 py-2 hover:bg-[#C6893F] hover:text-white transition-colors duration-200"
          >
            So'rov yuborish
          </button>
        </div>
      </div>
    </section>
  );
}
