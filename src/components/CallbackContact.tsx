import { useState } from "react";
import { CheckCircle2, HelpCircle } from "lucide-react";

export default function CallbackContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setIsSent(true);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 my-8 sm:my-14 scroll-mt-24">
      <div className="relative rounded-2xl lg:rounded-3xl border-2 border-[#C6893F] bg-[#3B3E44] text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
        
        {/* Subtle decorative glow */}
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#C6893F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-center relative z-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 max-w-lg w-full shadow-2xl border border-slate-200 text-slate-900">
              
              <h2 className="text-xl sm:text-2xl font-black text-[#C6893F] text-center tracking-tight mb-6">
                Izlagan narsangizni topa olmadingizmi?
              </h2>

              {isSent ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    Arizangiz qabul qilindi!
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto mb-4">
                    Rahmat! Mutaxassisimiz ko'rsatilgan telefon raqami orqali 10 daqiqa ichida siz bilan bog'lanadi.
                  </p>
                  <button
                    onClick={() => { setIsSent(false); setName(""); setPhone(""); }}
                    className="text-xs font-bold text-[#C6893F] hover:underline cursor-pointer"
                  >
                    Yana bitta ariza yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ismingiz"
                      className="w-full border border-slate-300 rounded-md px-3.5 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Telefon raqamingiz * (+998 ...)"
                      className="w-full border border-slate-300 rounded-md px-3.5 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="flex items-start space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-[#C6893F] focus:ring-[#C6893F] cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-[10px] text-slate-500 leading-tight cursor-pointer">
                      «Yuborish» tugmasini bosish orqali, O'zbekiston Respublikasining 2019-yil 2-iyuldagi O'RQ-547-sonli «Shaxsga doir ma'lumotlar to'g'risida»gi Qonuniga muvofiq, shaxsiy ma'lumotlarimni qayta ishlashga rozilik beraman *
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!consent}
                      className="w-full bg-[#C6893F] hover:bg-[#B37830] disabled:opacity-50 text-white font-bold text-sm sm:text-base py-3.5 rounded-md shadow-md hover:shadow-[#C6893F]/30 transition-all cursor-pointer active:scale-95 text-center"
                    >
                      Yuborish
                    </button>
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[10px] text-slate-400 inline-flex items-center space-x-1 cursor-pointer hover:text-slate-600">
                      <span>Qoidabuzarlik haqida xabar berish</span>
                      <HelpCircle className="w-3 h-3 text-slate-400" />
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
    </section>
  );
}
