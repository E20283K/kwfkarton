import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { sendLeadToTelegram } from '../services/telegram';

const MANAGERS = [
  {
    role: "Sotuv bo'limi boshlig'i",
    phone: "+998 99 560-16-66",
    email: "sales.head@kwf.uz",
    telegram: "@kwf_sales_head",
    telegramUrl: "https://t.me/kwf_uz",
    isHead: true,
  },
  {
    role: "Sotuv menejeri",
    phone: "+998 99 560-16-67",
    email: "sales1@kwf.uz",
    telegram: "@kwf_sales1",
    telegramUrl: "https://t.me/kwf_uz",
    isHead: false,
  },
  {
    role: "Sotuv menejeri",
    phone: "+998 99 560-16-68",
    email: "sales2@kwf.uz",
    telegram: "@kwf_sales2",
    telegramUrl: "https://t.me/kwf_uz",
    isHead: false,
  },
  {
    role: "Sotuv menejeri",
    phone: "+998 99 560-16-69",
    email: "sales3@kwf.uz",
    telegram: "@kwf_sales3",
    telegramUrl: "https://t.me/kwf_uz",
    isHead: false,
  },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleOpenQuote = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    await sendLeadToTelegram({
      name,
      phone,
      email,
      message,
      source: "Bog'lanish sahifasi",
    });
    setIsSubmitting(false);
    setIsSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased">
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#C6893F] uppercase tracking-wider block mb-2 font-sans">
              ALOQA VA MUROJAAT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-3">
              Biz bilan bog'lanish
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Qadoqlash bo'yicha maslahat olish, tijorat taklifi so'rash yoki buyurtma berish uchun quyidagi to'g'ridan-to'g'ri aloqa kanallaridan foydalaning.
            </p>
          </div>
        </div>
      </section>

      {/* Sales Team Contacts — 1 Head + 3 Sales Managers */}
      <section className="bg-white border-b border-slate-200/80 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MANAGERS.map((mgr, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-4 sm:p-5 border transition-all ${
                  mgr.isHead
                    ? "bg-[#FDFBF7] border-[#C6893F]/40 shadow-xs ring-1 ring-[#C6893F]/10"
                    : "bg-white border-slate-200/80 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      mgr.isHead ? "text-[#C6893F]" : "text-slate-500"
                    }`}
                  >
                    {mgr.role}
                  </span>
                  {mgr.isHead && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6893F]" />
                  )}
                </div>

                <div className="space-y-1.5 pt-1">
                  {/* Phone */}
                  <a
                    href={`tel:${mgr.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-extrabold text-neutral-900 hover:text-[#C6893F] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6893F] shrink-0" />
                    <span className="whitespace-nowrap">{mgr.phone}</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${mgr.email}`}
                    className="text-xs text-slate-500 hover:text-neutral-900 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{mgr.email}</span>
                  </a>

                  {/* Telegram */}
                  <a
                    href={mgr.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-[#229ED9] transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-[#229ED9] shrink-0" />
                    <span className="truncate font-medium">{mgr.telegram}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main 2-Column: Map + Form */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#C6893F] tracking-tight">
            Zavod manzili va ariza qoldirish
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[480px]">
          
          {/* Left: Native Google Maps Embed */}
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

          {/* Right: Clean Contact Form */}
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
                    placeholder="Ismingiz"
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Elektron pochta"
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Telefon raqam *"
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Qadoq parametrlari, hajmi yoki izoh"
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

        {/* Corporate Legal Info Box */}
        <div className="mt-8 bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 text-xs sm:text-sm text-slate-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <span className="font-bold text-neutral-900 block mb-0.5">Yuridik nomi</span>
              <span>"KARTON WORKS" MCHJ</span>
            </div>
            <div>
              <span className="font-bold text-neutral-900 block mb-0.5">STIR (INN)</span>
              <span>300472900</span>
            </div>
            <div>
              <span className="font-bold text-neutral-900 block mb-0.5">IFUT (OKED)</span>
              <span>17210 (Gofrokarton va qog'oz qadoq)</span>
            </div>
            <div>
              <span className="font-bold text-neutral-900 block mb-0.5">SOATO</span>
              <span>1733401 (Urganch shahri)</span>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenQuote={handleOpenQuote} />
    </div>
  );
}
