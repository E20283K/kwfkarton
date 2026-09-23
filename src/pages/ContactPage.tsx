import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, Phone, Send, Loader2 } from 'lucide-react';
import { sendLeadToTelegram } from '../services/telegram';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const MANAGERS = [
    {
      role: t('managers.0.role'),
      phone: "+998 99 560-61-66",
      telegram: "@manager_kwf",
      telegramUrl: "https://t.me/manager_kwf",
      isHead: true,
    },
    {
      role: t('managers.1.role'),
      phone: "+998 99 560-00-96",
      telegram: "@KWF_sales_manager",
      telegramUrl: "https://t.me/KWF_sales_manager",
      isHead: false,
    },
    {
      role: t('managers.2.role'),
      phone: "+998 99 560-66-11",
      telegram: "@Manager_SnP_KWF",
      telegramUrl: "https://t.me/Manager_SnP_KWF",
      isHead: false,
    },
    {
      role: t('managers.3.role'),
      phone: "+998 99 560-03-06",
      telegram: "@sharifa_kwf1",
      telegramUrl: "https://t.me/sharifa_kwf1",
      isHead: false,
    },
  ];

  const handleOpenQuote = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SOCIAL_LINKS = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/kwf_uz',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/kwf.uz',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H7v3h2v9h4v-9h3.61l.39-3H13V6c0-.88.45-1 1-1h2V1h-3c-2.9 0-5 1.88-5 5v2z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@KWF_Packaging',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/kwf_uz',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.98 4.793-1.386 6.812-.172.853-.51 1.14-.836 1.168-.71.063-1.25-.427-1.938-.838-1.077-.645-1.686-1.045-2.733-1.674-1.21-.726-.426-1.127.264-1.785.18-.172 3.324-2.812 3.385-3.048.007-.033.014-.157-.063-.223-.078-.066-.192-.043-.275-.026-.118.025-2.003 1.178-5.655 3.486-.535.337-1.02.503-1.455.49-.48-.014-1.402-.256-2.087-.463-.84-.253-1.507-.387-1.45-.817.03-.224.364-.454 1.002-.693 3.93-1.597 6.55-2.65 7.86-3.16 3.743-1.45 4.52-1.702 5.027-1.71.112-.002.362.023.524.145.137.103.175.247.19.352.015.106.033.325.018.491z" />
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    await sendLeadToTelegram({
      name,
      phone,
      email,
      message,
      source: t('form.source'),
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              {t('hero.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* 4-Column Quick Contacts Bar (Address, Phone, Email, Social Media) + Legal Info */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-10 items-start">
            {/* 1. Address */}
            <div className="space-y-1.5">
              <span className="text-xs sm:text-sm font-medium text-slate-500 block">
                {t('info.addressLabel', 'Manzil')}
              </span>
              <p className="text-sm sm:text-base lg:text-[17px] font-bold text-neutral-900 leading-snug">
                {t('info.addressValue')}
              </p>
            </div>

            {/* 2. Phone */}
            <div className="space-y-1.5">
              <span className="text-xs sm:text-sm font-medium text-slate-500 block">
                {t('info.phoneLabel', 'Telefon')}
              </span>
              <a
                href="tel:+998995606166"
                className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 hover:text-[#C6893F] transition-colors inline-block tracking-tight"
              >
                {t('info.phoneValue', '(+998) 99 560-61-66')}
              </a>
            </div>

            {/* 3. Email */}
            <div className="space-y-1.5">
              <span className="text-xs sm:text-sm font-medium text-slate-500 block">
                {t('info.emailLabel', 'Pochta')}
              </span>
              <a
                href="mailto:kwf.sales1@matpap.uz"
                className="text-sm sm:text-base lg:text-lg font-bold text-neutral-900 hover:text-[#C6893F] transition-colors inline-block break-all"
              >
                {t('info.emailValue', 'kwf.sales1@matpap.uz')}
              </a>
            </div>

            {/* 4. Social Networks */}
            <div className="space-y-1.5">
              <span className="text-xs sm:text-sm font-medium text-slate-500 block">
                {t('info.socialLabel', 'Ijtimoiy tarmoqlar')}
              </span>
              <div className="flex items-center space-x-4 pt-1 text-neutral-900">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="text-neutral-900 hover:text-[#C6893F] hover:scale-115 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Corporate Legal Info Box */}
          <div className="bg-[#F8F9FA] border border-slate-200/90 rounded-2xl p-5 sm:p-6 text-xs sm:text-sm text-slate-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <span className="font-bold text-neutral-900 block mb-0.5">{t('legal.nameLabel')}</span>
                <span className="text-slate-600">{t('legal.nameValue')}</span>
              </div>
              <div>
                <span className="font-bold text-neutral-900 block mb-0.5">{t('legal.innLabel')}</span>
                <span className="text-slate-600">300472900</span>
              </div>
              <div>
                <span className="font-bold text-neutral-900 block mb-0.5">{t('legal.okedLabel')}</span>
                <span className="text-slate-600">{t('legal.okedValue')}</span>
              </div>
              <div>
                <span className="font-bold text-neutral-900 block mb-0.5">{t('legal.soatoLabel')}</span>
                <span className="text-slate-600">{t('legal.soatoValue')}</span>
              </div>
            </div>
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
                className={`group rounded-xl p-4 sm:p-5 border transition-all duration-300 hover:bg-[#C6893F] hover:border-[#C6893F] hover:shadow-lg cursor-pointer ${
                  mgr.isHead
                    ? "bg-[#FDFBF7] border-[#C6893F]/40 shadow-xs ring-1 ring-[#C6893F]/10 hover:ring-0"
                    : "bg-white border-slate-200/80 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                      mgr.isHead
                        ? "text-[#C6893F] group-hover:text-white"
                        : "text-slate-500 group-hover:text-white/90"
                    }`}
                  >
                    {mgr.role}
                  </span>
                  {mgr.isHead && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6893F] group-hover:bg-white transition-colors duration-200" />
                  )}
                </div>

                <div className="space-y-2 pt-1">
                  {/* Phone */}
                  <a
                    href={`tel:${mgr.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-extrabold text-neutral-900 group-hover:text-white transition-colors duration-200 flex items-center gap-2 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6893F] group-hover:text-white transition-colors duration-200 shrink-0" />
                    <span className="whitespace-nowrap">{mgr.phone}</span>
                  </a>

                  {/* Telegram */}
                  <a
                    href={mgr.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 group-hover:text-white/90 transition-colors duration-200 flex items-center gap-2 hover:underline"
                  >
                    <Send className="w-3.5 h-3.5 text-[#229ED9] group-hover:text-white transition-colors duration-200 shrink-0" />
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
            {t('main.title')}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[480px]">
          
          {/* Left: Native Google Maps Embed */}
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[360px] lg:min-h-[480px]">
            <iframe
              title={t('map.title')}
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
                  {t('form.successTitle')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-5">
                  {t('form.successDesc')}
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
                  {t('form.sendNew')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#C6893F] tracking-tight mb-2">
                  {t('form.title')}
                </h3>

                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('form.namePlaceholder')}
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('form.emailPlaceholder')}
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('form.phonePlaceholder')}
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C6893F] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('form.messagePlaceholder')}
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
                        <span>{t('form.submitting')}</span>
                      </>
                    ) : (
                      <span>{t('form.submitBtn')}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </main>

      <Footer onOpenQuote={handleOpenQuote} />
    </div>
  );
}
