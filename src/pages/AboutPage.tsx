import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const STATS = [
  { value: "5 Qatlam", label: "Maxsus gofroliniya", desc: "Mintaqadagi yagona 5 qavatli ishlab chiqarish" },
  { value: "50 000", label: "Quti / 48 soatda", desc: "Yirik partiyalarni qisqa muddatda bajarish" },
  { value: "100%", label: "Lab nazorati", desc: "BCT va ECT standartlari bo'yicha sinov" },
  { value: "0%", label: "Tranzit defekti", desc: "Logistika va mustahkamlik kafolati" },
];

const ADVANTAGES = [
  {
    title: "Mintaqaviy logistika afzalligi",
    desc: "Yirik transport va savdo yo'llariga yaqin joylashuv mahsulotni minimal vaqt va optimal logistika narxida yetkazib berish imkonini beradi.",
  },
  {
    title: "To'liq avtomatlashtirilgan agregatlar",
    desc: "Zamonaviy gofroagregat va lazerli formatlash tizimlari orqali xatolik ehtimoli minimallashtirilgan va o'lchamlar aniqligi kafolatlangan.",
  },
  {
    title: "100% Ekologik va qayta ishlanuvchi",
    desc: "Tabiiy xomashyo va ekologik xavfsiz kraxmallı yelimlar qo'llaniladi. Barcha mahsulotlar to'liq utilizatsiya qilinishi mumkin.",
  },
  {
    title: "Individual muhandislik yondashuvi",
    desc: "Mahsulot og'irligi, transport turi va saqlash sharoitlariga mos holda qog'oz zichligi (GSM) hamda to'lqin turi tanlanadi.",
  },
];

const SPECS_TABLE = [
  { property: "Gofrokarton turi", spec: "3 qatlamli (T-toifa) va 5 qatlamli (P-toifa)" },
  { property: "To'lqin profillari", spec: "A-Flute (baland), B-Flute (o'rta), C-Flute" },
  { property: "Liner turlari", spec: "Tabiiy Kraftliner va Premium oq OqLayner" },
  { property: "Siqilishga chidamlilik (BCT)", spec: "4.8 kN dan 6.2 kN gacha (laboratoriya sertifikatlangan)" },
  { property: "Flekso-bosma imkoniyati", spec: "1 dan 4 ranggacha yuqori aniqlikdagi bosma" },
  { property: "Minimal partiya", spec: "1 000 donadan boshlab ulgurji partiyalar" },
];

const QUALITY_CONTROL = [
  {
    name: "Runhu RH-P5600",
    type: "Bursting Strength Tester",
    image: "/quality/Runhu RH-P5600.png",
  },
  {
    name: "Runhu RH-3000",
    type: "Crush tester",
    image: "/quality/Runhu RH-3000.png",
  },
  {
    name: "Runhu RH-KY10",
    type: "Box Compression Tester",
    image: "/quality/Runhu RH-KY10.png",
  }
];

export default function AboutPage() {
  const navigate = useNavigate();

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
            <span className="text-xs font-bold text-[#C6893F] uppercase tracking-wider block mb-2">
              Karton Works Factory
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              Kompaniya haqida
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Karton Works Factory (KWF) — Xorazm viloyatida joylashgan zamonaviy gofroqadoq ishlab chiqarish korxonasi.
              Biz yirik ishlab chiqaruvchilar, eksportchilar va distribyutorlar uchun yuqori sifatli 3 va 5 qatlamli
              gofrokarton qutilarni loyihalashtiramiz va ishlab chiqaramiz.
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
                Ishlab chiqarish quvvati va missiyamiz
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Biz nafaqat quti ishlab chiqaramiz, balki mijozlarimizning ta'minot zanjiri xavfsizligini ta'minlaymiz.
                Har bir mahsulot tashish jarayonida shikastlanmasligi, yuk ortish standartlariga to'liq javob berishi
                uchun muhandislik hisob-kitoblari asosida tayyorlanadi.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Zavodimizda oziq-ovqat, to'qimachilik, qishloq xo'jaligi mahsulotlari (meva-sabzavot eksporti), kimyo
                va og'ir sanoat korxonalari uchun qadoqlar ishlab chiqarilmoqda.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleOpenQuote}
                  className="inline-flex items-center gap-2 bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <span>Bog'lanish va buyurtma</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {/* Primary Real Photo: Asosiy sex va agregat */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-4/3 bg-slate-100 shadow-xs group">
                <img
                  src="/gallery/photo_2026-09-16_15-28-44.jpg"
                  alt="Ishlab chiqarish sexining umumiy ko'rinishi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 3 Real Gallery Sub-photos Strip */}
              <div className="grid grid-cols-3 gap-2">
                <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-4/3 bg-slate-100 group" title="Avtomatlashtirilgan gofroagregat">
                  <img
                    src="/gallery/photo_2026-09-16_15-28-37.jpg"
                    alt="Avtomatlashtirilgan gofroagregat"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-4/3 bg-slate-100 group" title="Formatlash va kesish uchastkasi">
                  <img
                    src="/gallery/photo_2026-09-16_15-28-40.jpg"
                    alt="Formatlash va kesish uchastkasi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-4/3 bg-slate-100 group" title="Tayyor gofroqutilarni palletlash">
                  <img
                    src="/gallery/photo_2026-09-16_15-28-48.jpg"
                    alt="Tayyor gofroqutilarni palletlash"
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
            Nega aynan Karton Works Factory?
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
            Ishlab chiqarish va texnik parametrlari
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            B2B mijozlar uchun tasdiqlangan sanoat standartlari
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
            Sifat nazorati va laboratoriya
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            Barcha qadoqlarimiz eng zamonaviy maxsus sifat nazorati qurilmalarida sinovdan o'tkaziladi. Bu mahsulotlaringiz xavfsiz va mustahkam yetib borishini ta'minlaydi.
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
        <Partners />
      </main>

      <Footer onOpenQuote={handleOpenQuote} />
    </div>
  );
}
