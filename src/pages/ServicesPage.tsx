import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Advantages from '../components/Advantages';
import WorkProcess from '../components/WorkProcess';
import { useNavigate } from 'react-router-dom';
import { Package, Zap, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ServicesPage() {
  const navigate = useNavigate();
  const { t } = useTranslation('servicesPage');

  const SERVICES = [
    {
      icon: <Package className="w-5 h-5 text-[#C6893F]" />,
      title: t('services.0.title', "Gofroquti ishlab chiqarish"),
      desc: t('services.0.desc', "3 va 5 qatlamli gofrokartondan standart hamda nostandart o'lchamdagi qutilar. Tashish, saqlash va mahsulot xavfsizligini ta'minlovchi konstruksiyalar."),
      badge: t('services.0.badge', "Asosiy yo'nalish"),
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C6893F]" />,
      title: t('services.1.title', "Premium oq qadoqlash (OqLayner)"),
      desc: t('services.1.desc', "Tashqi qatlami oq liner bilan qoplangan premium qutilar. Yuqori aniqlikdagi flekso-bosma bilan brending va vizual nufuzni oshiradi."),
      badge: t('services.1.badge', "Brending"),
    },
    {
      icon: <Layers className="w-5 h-5 text-[#C6893F]" />,
      title: t('services.2.title', "Shelf Ready Packaging (SRP)"),
      desc: t('services.2.desc', "Ombordan to'g'ridan-to'g'ri savdo rastalariga joylashtiriladigan perforatsiyali qutilar. Merchandising vaqtini 50% gacha tejaydi."),
      badge: t('services.2.badge', "Retail yechim"),
    },
    {
      icon: <Zap className="w-5 h-5 text-[#C6893F]" />,
      title: t('services.3.title', "Ekspress partiyalar (48 soat)"),
      desc: t('services.3.desc', "Shoshilinch buyurtmalar uchun 50 000 donagacha qutini 2-3 ish kunida tayyorlash va jo'natish xizmati. Takroriy buyurtmalar — 24 soatda."),
      badge: t('services.3.badge', "Tezkor yetkazish"),
    },
  ];
  
  const INDUSTRIES = [
    t('industries.0', "Meva va sabzavotlar (eksport)"),
    t('industries.1', "To'qimachilik va tikuvchilik"),
    t('industries.2', "Qandolat va oziq-ovqat"),
    t('industries.3', "Poyabzal va charm mahsulotlari"),
    t('industries.4', "Salqin ichimliklar va sharbatlar"),
    t('industries.5', "Qurilish va sanoat mollari"),
    t('industries.6', "Farmatsevtika va gigiyena"),
    t('industries.7', "Yetkazib berish (e-commerce)"),
  ];

  const handleOpenQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased">
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Minimalist Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              {t('hero.title', "Gofroqadoq xizmatlari")}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {t('hero.desc', "Loyihalashdan tortib tayyor mahsulotni omboringizgacha yetkazib berishgacha bo'lgan to'liq sikl. Har bir biznes tarmog'i uchun xarajatni kamaytiruvchi va himoyani oshiruvchi yechimlar.")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#C6893F] tracking-tight">
            {t('services_section.title', "Asosiy xizmat yo'nalishlarimiz")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 shadow-xs hover:border-[#C6893F]/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C6893F]/10 flex items-center justify-center">
                    {srv.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={handleOpenQuote}
                  className="text-xs font-bold text-[#C6893F] hover:text-[#B37830] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{t('services_section.action', "Ariza yuborish")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="border-t border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-2">
              {t('industries_section.title', "Biz xizmat ko'rsatadigan sohalar")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {t('industries_section.desc', "Har bir yo'nalish uchun mahsulot xususiyatiga mos qadoqlash parametrlari")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="bg-[#F8F9FA] border border-slate-200/80 rounded-lg p-3 sm:p-3.5 text-xs sm:text-sm font-semibold text-neutral-800 text-center flex items-center justify-center min-h-[48px]"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Component (Clean existing style) */}
      <Advantages onOpenQuote={handleOpenQuote} />

      {/* Work Process Component (Clean existing style) */}
      <WorkProcess onOpenQuote={handleOpenQuote} />

      <Footer onOpenQuote={handleOpenQuote} />
    </div>
  );
}
