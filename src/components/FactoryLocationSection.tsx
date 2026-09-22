import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { sendLeadToTelegram } from "../services/telegram";

export default function FactoryLocationSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    await sendLeadToTelegram({
      name,
      phone,
      email,
      message,
      source: "Bosh sahifa (Xarita yonidagi forma)",
    });
    setIsSubmitting(false);
    setIsSent(true);
  };

  return (
    <section id="contact" className="w-full bg-[#edf0f4] border-t border-slate-300/80 pt-10 sm:pt-14 pb-12 sm:pb-16 scroll-mt-20 !mt-8 sm:!mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight">
            Zavod manzili va aloqa
          </h2>
        </div>

        {/* Unified 2-Column Card matching reference */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[460px]">
        
        {/* Left Column: 100% Real Native Google Maps Place Embed Widget */}
        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[360px] lg:min-h-[480px]">
          <iframe
            title="Karton Works Factory - Urganch"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.2400274302618!2d60.62964897686588!3d41.53037797128148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9003b97a65b%3A0x1bd5f3cac93bf538!2sKarton%20Works%20Factory!5e0!3m2!1suz!2suz!4v1710672000000!5m2!1suz!2suz"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right Column: Contact Form */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white">
          {isSent ? (
            <div className="py-12 text-center my-auto">
              <div className="w-14 h-14 rounded-full bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1.5">
                Arizangiz qabul qilindi
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                Mutaxassisimiz tez orada siz bilan bog'lanadi.
              </p>
              <button
                onClick={() => {
                  setIsSent(false);
                  setName("");
                  setEmail("");
                  setPhone("");
                  setMessage("");
                }}
                className="text-xs sm:text-sm font-bold text-[#C6893F] hover:underline cursor-pointer"
              >
                Yangi ariza yuborish
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#C6893F] tracking-tight mb-2">
                Ariza qoldirish
              </h3>

              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ism"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Elektron.pochta"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefon *"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Xabar yoki izoh"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#C6893F] hover:bg-[#B37830] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-[#C6893F]/30 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <span>Xabar yuborish</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  </section>
);
}
