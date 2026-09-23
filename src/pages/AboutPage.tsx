import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation('about');
  const navigate = useNavigate();

  const handleOpenQuote = () => {
    navigate('/contact');
  };

  const STATS = [
    { value: t('stats.0.value'), label: t('stats.0.label'), desc: t('stats.0.desc') },
    { value: t('stats.1.value'), label: t('stats.1.label'), desc: t('stats.1.desc') },
    { value: t('stats.2.value'), label: t('stats.2.label'), desc: t('stats.2.desc') },
    { value: t('stats.3.value'), label: t('stats.3.label'), desc: t('stats.3.desc') },
  ];

  const ADVANTAGES = [
    { title: t('advantages.0.title'), desc: t('advantages.0.desc') },
    { title: t('advantages.1.title'), desc: t('advantages.1.desc') },
    { title: t('advantages.2.title'), desc: t('advantages.2.desc') },
    { title: t('advantages.3.title'), desc: t('advantages.3.desc') },
  ];

  const SPECS_TABLE = [
    { property: t('specsTable.0.property'), spec: t('specsTable.0.spec') },
    { property: t('specsTable.1.property'), spec: t('specsTable.1.spec') },
    { property: t('specsTable.2.property'), spec: t('specsTable.2.spec') },
    { property: t('specsTable.3.property'), spec: t('specsTable.3.spec') },
    { property: t('specsTable.4.property'), spec: t('specsTable.4.spec') },
    { property: t('specsTable.5.property'), spec: t('specsTable.5.spec') },
  ];

  const QUALITY_CONTROL = [
    { name: "Runhu RH-P5600", type: t('qualityControl.0.type'), image: "/quality/Runhu RH-P5600.png" },
    { name: "Runhu RH-3000", type: t('qualityControl.1.type'), image: "/quality/Runhu RH-3000.png" },
    { name: "Runhu RH-KY10", type: t('qualityControl.2.type'), image: "/quality/Runhu RH-KY10.png" }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans antialiased">
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Minimalist Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="border-b border-slate-200 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((s, i) => (
              <div key={i} className="border-l-2 border-[#C6893F] pl-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight mb-1">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  {s.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-normal">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Overview & Structure */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14 space-y-12">
        {/* Section 1: Factory Mission */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight">
                {t('mission.title')}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t('mission.p1')}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t('mission.p2')}
              </p>
              <div className="pt-2">
                <button
                  onClick={handleOpenQuote}
                  className="inline-flex items-center gap-2 bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <span>{t('mission.cta')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {/* Primary Real Photo: Asosiy sex va agregat */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-4/3 bg-slate-100 shadow-xs group">
                <img
                  src="/gallery/photo_2026-09-16_15-28-44.jpg"
                  alt={t('images.mainAlt')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 3 Real Gallery Sub-photos Strip */}
              <div className="grid grid-cols-3 gap-2">
                <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-4/3 bg-slate-100 group" title={t('images.sub1Title')}>
                  <img
                    src="/gallery/photo_2026-09-16_15-28-37.jpg"
                    alt={t('images.sub1Alt')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-4/3 bg-slate-100 group" title={t('images.sub2Title')}>
                  <img
                    src="/gallery/photo_2026-09-16_15-28-40.jpg"
                    alt={t('images.sub2Alt')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-4/3 bg-slate-100 group" title={t('images.sub3Title')}>
                  <img
                    src="/gallery/photo_2026-09-16_15-28-48.jpg"
                    alt={t('images.sub3Alt')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Core Advantages Grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#C6893F] tracking-tight mb-6">
            {t('advantagesSection.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#C6893F]/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C6893F]/10 text-[#C6893F] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1.5 leading-snug">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Technical Specifications Table */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-2">
            {t('specsSection.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            {t('specsSection.subtitle')}
          </p>

          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {SPECS_TABLE.map((row, i) => (
              <div key={i} className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                <span className="font-semibold text-neutral-800">
                  {row.property}
                </span>
                <span className="text-slate-600 sm:text-right font-medium">
                  {row.spec}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Quality Control */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#C6893F] tracking-tight mb-3">
            {t('qualitySection.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            {t('qualitySection.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {QUALITY_CONTROL.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#C6893F]/40 transition-all flex flex-col items-center text-center"
              >
                <div className="w-full h-48 sm:h-56 mb-5 flex items-center justify-center bg-[#F8F9FA] rounded-lg border border-slate-100 overflow-hidden p-4 group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                  {item.name}
                </h3>
                <p className="text-xs text-[#C6893F] font-bold tracking-wide uppercase">
                  {item.type}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Partners */}
        <Partners onOpenQuote={handleOpenQuote} />
      </main>

      <Footer onOpenQuote={handleOpenQuote} />
    </div>
  );
}
