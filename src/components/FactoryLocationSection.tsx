import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";

export default function FactoryLocationSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setIsSent(true);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 scroll-mt-24">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight">
          Zavod manzili va aloqa
        </h2>
      </div>

      {/* Minimalist 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left: Minimalist Action Form */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
          {isSent ? (
            <div className="py-12 text-center my-auto">
              <div className="w-12 h-12 rounded-full bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1">
                Arizangiz qabul qilindi
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Mutaxassisimiz tez orada siz bilan bog'lanadi.
              </p>
              <button
                onClick={() => { setIsSent(false); setName(""); setPhone(""); }}
                className="text-xs font-bold text-[#C6893F] hover:underline cursor-pointer"
              >
                Yangi ariza
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                Ariza qoldirish
              </h3>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismingiz"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] transition-all bg-slate-50/50 focus:bg-white"
              />

              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefon raqamingiz *"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] transition-all bg-slate-50/50 focus:bg-white"
              />

              <button
                type="submit"
                className="w-full bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md hover:shadow-[#C6893F]/30 active:scale-98 cursor-pointer"
              >
                Yuborish
              </button>
            </form>
          )}

          {/* Minimalist Phone & Working Hours */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <a
              href="tel:+998712003250"
              className="font-bold text-neutral-900 hover:text-[#C6893F] flex items-center space-x-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6893F]" />
              <span>+998 71 200-32-50</span>
            </a>
            <span>Dush - Jum 09:00 - 18:00</span>
          </div>
        </div>

        {/* Right: Pure Clean Google Map */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs relative w-full h-[280px] sm:h-[320px] lg:h-auto min-h-[260px]">
          <iframe
            title="Karton Works Factory"
            src="https://maps.google.com/maps?q=41.2268,69.2173&hl=uz&z=14&output=embed"
            className="w-full h-full border-0 min-h-[280px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
