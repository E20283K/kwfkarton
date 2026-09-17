import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

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
  const [activeSection, setActiveSection] = useState('home');

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      if (scrollPos < 500) {
        setActiveSection('home');
      } else {
        const sections = ['catalog', 'overview', 'values', 'pillars', 'specs'];
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
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-1 sm:py-1.5">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* 1. Brand Logo: Karton Works Factory */}
          <a href="#" className="flex items-center shrink-0 group select-none py-0.5" aria-label="Karton Works Factory">
            <img
              src="/kwf_navbar.svg"
              alt="Karton Works Factory"
              className="h-[56px] sm:h-[68px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* 2. Phone & Working Hours Block */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0 select-none">
            <div className="text-[#C6893F]">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8] -rotate-12 drop-shadow-xs" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <a
                  href="tel:+998712003250"
                  className="text-base sm:text-[17px] font-extrabold shine-number leading-tight tracking-tight whitespace-nowrap"
                >
                  +998 71 200-32-50
                </a>
                <span className="text-slate-300 font-normal">/</span>
                <a
                  href="tel:+998901233250"
                  className="text-base sm:text-[17px] font-extrabold shine-number leading-tight tracking-tight whitespace-nowrap"
                >
                  +998 90 123-32-50
                </a>
                <span className="text-slate-300 font-normal">/</span>
                <a
                  href="tel:+998931233250"
                  className="text-base sm:text-[17px] font-extrabold shine-number leading-tight tracking-tight whitespace-nowrap"
                >
                  +998 93 123-32-50
                </a>
              </div>

              <span className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                Sotuv bo'limi • Ish vaqti: Dush-Jum 09:00-18:00
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
          <ul className="flex items-center justify-between text-xs sm:text-sm font-bold tracking-wide uppercase select-none">
            
            {/* BOSH SAHIFA (Active Link) */}
            <li>
              <a
                href="#"
                className={`py-1.5 px-3 transition-colors block ${
                  activeSection === 'home'
                    ? 'text-[#C6893F] font-extrabold'
                    : 'text-slate-800 hover:text-[#C6893F]'
                }`}
              >
                BOSH SAHIFA
              </a>
            </li>

            {/* KATALOG */}
            <li>
              <a
                href="#catalog"
                className={`py-1.5 px-3 transition-colors block ${
                  activeSection === 'catalog'
                    ? 'text-[#C6893F] font-extrabold'
                    : 'text-slate-800 hover:text-[#C6893F]'
                }`}
              >
                KATALOG
              </a>
            </li>

            {/* XIZMATLAR */}
            <li>
              <a
                href="#values"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-1.5 px-3 block"
              >
                XIZMATLAR
              </a>
            </li>

            {/* KAFOLAT */}
            <li>
              <a
                href="#pillars"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-1.5 px-3 block"
              >
                KAFOLAT
              </a>
            </li>

            {/* KOMPANIYA HAQIDA */}
            <li>
              <a
                href="#overview"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-1.5 px-3 block"
              >
                KOMPANIYA HAQIDA
              </a>
            </li>

            {/* YANGILIKLAR */}
            <li>
              <a
                href="#news"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-1.5 px-3 block"
              >
                YANGILIKLAR
              </a>
            </li>

            {/* BOG'LANISH */}
            <li>
              <a
                href="#specs"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-1.5 px-3 block"
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

            <a
              href="#catalog"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:text-[#C6893F] hover:bg-slate-50 transition-colors"
            >
              KATALOG
            </a>

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

