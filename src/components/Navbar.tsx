import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

const CATALOG_ITEMS = [
  { name: '5 qatlamli gofrokarton (P-31, P-32, P-33)', desc: "Og'ir yuklar va eksport uchun", href: '#specs' },
  { name: '3 qatlamli gofrokarton (T-21 - T-24)', desc: "Standart transport qadog'i", href: '#specs' },
  { name: '4 klapanli standart qutilar (wRSC)', desc: "Optimallashtirilgan o'lchamlar", href: '#overview' },
  { name: "O'zi yig'iluvchi qutilar va lotoklar (GFF/GFM)", desc: "E-commerce va marketpleyslar uchun", href: '#values' },
  { name: 'Katta hajmli tara va Oktabinlar', desc: 'Kuchaytirilgan sanoat qadog\'i', href: '#overview' },
  { name: 'Karton oraliqlar va panjaralar', desc: 'Mahsulotni himoya qilish va fiksatsiya', href: '#specs' },
  { name: 'Bosmali qadoqlar (OqLayner)', desc: 'Brendlash uchun oq toplayner', href: '#values' },
];

const SALES_CONTACTS = [
  {
    role: "Sotuv bo'limi (Ofis)",
    phone: '+998 71 200-32-50',
    tel: '+998712003250',
  },
  {
    role: 'Sotuv menejeri',
    phone: '+998 90 123-32-50',
    tel: '+998901233250',
  },
  {
    role: 'Sotuv menejeri',
    phone: '+998 93 123-32-50',
    tel: '+998931233250',
  },
];

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const catalogRef = useRef<HTMLLIElement>(null);

  // Close popovers on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        setIsCatalogOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      if (scrollPos < 500) {
        setActiveSection('home');
      } else {
        const sections = ['overview', 'values', 'pillars', 'specs'];
        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(sec);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-xs font-sans">
      {/* ================= TIER 1: TOP ACTION & UTILITY BAR ================= */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-3">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* 1. Brand Logo: Karton Works Factory (1.5x scale) */}
          <a href="#" className="flex items-center shrink-0 group select-none" aria-label="Karton Works Factory">
            <img
              src="/kwf_navbar.svg"
              alt="Karton Works Factory"
              className="h-[60px] sm:h-[72px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* 2. Phone & Working Hours Block (Original Style) */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0 select-none">
            <div className="text-[#C6893F]">
              <Phone className="w-7 h-7 stroke-[1.8] -rotate-12 drop-shadow-xs" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <a
                  href="tel:+998712003250"
                  className="text-lg font-extrabold shine-number leading-tight tracking-tight whitespace-nowrap"
                >
                  +998 71 200-32-50
                </a>
                <span className="text-slate-300 font-normal">/</span>
                <a
                  href="tel:+998901233250"
                  className="text-lg font-extrabold shine-number leading-tight tracking-tight whitespace-nowrap"
                >
                  +998 90 123-32-50
                </a>
                <span className="text-slate-300 font-normal">/</span>
                <a
                  href="tel:+998931233250"
                  className="text-lg font-extrabold shine-number leading-tight tracking-tight whitespace-nowrap"
                >
                  +998 93 123-32-50
                </a>
              </div>

              <span className="text-[11px] text-slate-500 font-normal leading-tight">
                Sotuv bo'limi • O'zbekiston bo'yicha konsultatsiya
              </span>
              <span className="text-[11px] text-slate-500 font-normal leading-tight">
                Ish vaqti: Dush-Jum 09:00-18:00
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-1.5 text-neutral-700 hover:text-[#C6893F] transition-colors cursor-pointer"
            aria-label="Menyuni ochish"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* ================= TIER 2: MAIN NAVIGATION ROW ================= */}
      <nav className="border-t border-slate-200/80 bg-white hidden lg:block">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <ul className="flex items-center justify-between text-sm font-bold tracking-wide uppercase py-1 select-none">
            
            {/* BOSH SAHIFA (Active Link) */}
            <li>
              <a
                href="#"
                className={`py-3 px-3.5 transition-colors block ${
                  activeSection === 'home'
                    ? 'text-[#C6893F] font-extrabold'
                    : 'text-slate-800 hover:text-[#C6893F]'
                }`}
              >
                BOSH SAHIFA
              </a>
            </li>

            {/* KATALOG ▾ (With Dropdown Menu) */}
            <li ref={catalogRef} className="relative">
              <button
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                onMouseEnter={() => setIsCatalogOpen(true)}
                className="flex items-center space-x-1.5 text-slate-800 hover:text-[#C6893F] font-bold transition-colors py-3 px-3.5 cursor-pointer group"
              >
                <span>KATALOG</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCatalogOpen ? 'rotate-180 text-[#C6893F]' : 'text-slate-400 group-hover:text-[#C6893F]'}`} />
              </button>

              {/* Catalog Dropdown Panel */}
              {isCatalogOpen && (
                <div
                  onMouseLeave={() => setIsCatalogOpen(false)}
                  className="absolute left-0 top-full mt-1 w-80 bg-white rounded-xl shadow-2xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-slate-900"
                >
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Zavod mahsulotlari
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100/80">
                    {CATALOG_ITEMS.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setIsCatalogOpen(false)}
                        className="block px-4 py-2.5 hover:bg-[#C6893F]/10 transition-colors group"
                      >
                        <div className="text-xs font-bold text-slate-800 group-hover:text-[#C6893F] transition-colors uppercase">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-400 lowercase first-letter:uppercase font-normal">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="p-2 border-t border-slate-100 bg-slate-50/50">
                    <button
                      onClick={() => { setIsCatalogOpen(false); onOpenQuote(); }}
                      className="w-full bg-[#C6893F] hover:bg-[#B37830] text-white text-[11px] font-bold py-2 rounded-lg transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Individual narx so'rash
                    </button>
                  </div>
                </div>
              )}
            </li>

            {/* XIZMATLAR */}
            <li>
              <a
                href="#values"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-3 px-3.5 block"
              >
                XIZMATLAR
              </a>
            </li>

            {/* KAFOLAT */}
            <li>
              <a
                href="#pillars"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-3 px-3.5 block"
              >
                KAFOLAT
              </a>
            </li>

            {/* KOMPANIYA HAQIDA */}
            <li>
              <a
                href="#overview"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-3 px-3.5 block"
              >
                KOMPANIYA HAQIDA
              </a>
            </li>

            {/* YANGILIKLAR */}
            <li>
              <a
                href="#news"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-3 px-3.5 block"
              >
                YANGILIKLAR
              </a>
            </li>

            {/* BOG'LANISH */}
            <li>
              <a
                href="#specs"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-3 px-3.5 block"
              >
                BOG'LANISH
              </a>
            </li>

          </ul>
        </div>
      </nav>

      {/* ================= MOBILE & TABLET DRAWER ================= */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-3 duration-200">
          {/* Navigation Links List */}
          <div className="flex flex-col space-y-1 font-bold text-sm uppercase">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[#C6893F] bg-[#C6893F]/10 font-extrabold"
            >
              BOSH SAHIFA
            </a>

            {/* Mobile Catalog Expandable */}
            <div>
              <button
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 transition-colors text-left cursor-pointer"
              >
                <span>KATALOG</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isCatalogOpen ? 'rotate-180 text-[#C6893F]' : 'text-slate-400'}`} />
              </button>
              {isCatalogOpen && (
                <div className="pl-4 pr-2 py-1.5 space-y-1 bg-slate-50/80 rounded-lg my-1 text-slate-900 border border-slate-100">
                  {CATALOG_ITEMS.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1.5 px-2 text-xs font-semibold text-slate-700 hover:text-[#C6893F]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#values"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:text-[#C6893F] hover:bg-slate-50 transition-colors"
            >
              XIZMATLAR
            </a>

            <a
              href="#pillars"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:text-[#C6893F] hover:bg-slate-50 transition-colors"
            >
              KAFOLAT
            </a>

            <a
              href="#overview"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:text-[#C6893F] hover:bg-slate-50 transition-colors"
            >
              KOMPANIYA HAQIDA
            </a>

            <a
              href="#news"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:text-[#C6893F] hover:bg-slate-50 transition-colors"
            >
              YANGILIKLAR
            </a>

            <a
              href="#specs"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:text-[#C6893F] hover:bg-slate-50 transition-colors"
            >
              BOG'LANISH
            </a>
          </div>

          {/* Mobile Sales Managers Contacts */}
          <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2.5">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              Sotuv bo'limi kontaktlari:
            </div>
            {SALES_CONTACTS.map((c, idx) => (
              <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                <div>
                  <div className="text-[10px] text-[#C6893F] font-bold uppercase tracking-wider">{c.role}</div>
                  <a href={`tel:${c.tel}`} className="text-sm font-extrabold shine-number">
                    {c.phone}
                  </a>
                </div>
                <a
                  href={`tel:${c.tel}`}
                  className="w-8 h-8 rounded-full bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center hover:bg-[#C6893F]/25 transition-colors"
                  aria-label={c.phone}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Quote Button */}
          <button
            onClick={() => { setIsMenuOpen(false); onOpenQuote(); }}
            className="w-full mt-4 bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Ariza qoldirish</span>
          </button>

        </div>
      )}
    </header>
  );
}

