import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
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
          <Link to="/" className="flex items-center shrink-0 group select-none py-0.5" aria-label="Karton Works Factory">
            <img
              src="/kwf_navbar.svg"
              alt="Karton Works Factory"
              className="h-[56px] sm:h-[68px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* 2. Contacts Block */}
          <div className="hidden sm:flex items-center space-x-5 shrink-0 select-none">
            {/* Minimal Language Switcher */}
            <div className="flex items-center space-x-3 text-[11px] font-black tracking-widest text-slate-400 mt-0.5">
              <button className="text-[#C6893F] cursor-default flex items-center gap-1.5">
                <img src="https://flagcdn.com/w20/uz.png" alt="UZ" className="w-4 h-auto rounded-[2px]" />
                UZ
              </button>
              <span>/</span>
              <button className="hover:text-slate-800 transition-colors cursor-pointer flex items-center gap-1.5">
                <img src="https://flagcdn.com/w20/ru.png" alt="RU" className="w-4 h-auto rounded-[2px]" />
                RU
              </button>
              <span>/</span>
              <button className="hover:text-slate-800 transition-colors cursor-pointer flex items-center gap-1.5">
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 h-auto rounded-[2px]" />
                EN
              </button>
            </div>

            {/* Socials & Address */}
            <div className="flex items-center space-x-3 text-slate-600">
              <a href="https://maps.app.goo.gl/qLtyXVBd8t14qiSz8" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" title="Manzil: Urganch sh., Ashxobod MFY">
                <img src="/google-maps.png" alt="Xarita" className="w-6 h-6 object-contain" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" title="Telegram">
                <img src="/telegram.png" alt="Telegram" className="w-6 h-6 object-contain" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" title="Instagram">
                <img src="/instagram.png" alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
            </div>

            <div className="w-[1px] h-6 bg-slate-200"></div>

            <div className="flex items-center space-x-2">
              <div className="text-[#C6893F]">
                <Phone className="w-5 h-5 stroke-[1.8] -rotate-12 drop-shadow-xs" />
              </div>
              <div className="flex flex-col">
                <a
                  href="tel:+998995601666"
                  className="text-base sm:text-[17px] font-extrabold shine-number leading-tight tracking-tight whitespace-nowrap"
                >
                  +998 99 560-16-66
                </a>
                <span className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                  Dush-Shan 09:00-18:00
                </span>
              </div>
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
            
            <li>
              <Link
                to="/"
                className={`py-1.5 px-3 transition-colors block ${
                  location.pathname === '/'
                    ? 'text-[#C6893F] font-extrabold'
                    : 'text-slate-800 hover:text-[#C6893F]'
                }`}
              >
                BOSH SAHIFA
              </Link>
            </li>

            <li>
              <Link
                to="/#catalog"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-1.5 px-3 block"
              >
                KATALOG
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className={`py-1.5 px-3 transition-colors block ${
                  location.pathname === '/services'
                    ? 'text-[#C6893F] font-extrabold'
                    : 'text-slate-800 hover:text-[#C6893F]'
                }`}
              >
                XIZMATLAR
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`py-1.5 px-3 transition-colors block ${
                  location.pathname === '/about'
                    ? 'text-[#C6893F] font-extrabold'
                    : 'text-slate-800 hover:text-[#C6893F]'
                }`}
              >
                KOMPANIYA HAQIDA
              </Link>
            </li>

            <li>
              <Link
                to="/#news"
                className="text-slate-800 hover:text-[#C6893F] transition-colors py-1.5 px-3 block"
              >
                YANGILIKLAR
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`py-1.5 px-3 transition-colors block ${
                  location.pathname === '/contact'
                    ? 'text-[#C6893F] font-extrabold'
                    : 'text-slate-800 hover:text-[#C6893F]'
                }`}
              >
                BOG'LANISH
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="h-[2px] w-full bg-transparent z-50">
        <div 
          className="h-full bg-[#C6893F] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ================= MOBILE & TABLET DRAWER ================= */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1 font-bold text-sm uppercase">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`py-2.5 px-3 rounded-lg font-extrabold ${location.pathname === '/' ? 'text-[#C6893F] bg-[#C6893F]/10' : 'text-slate-800 hover:text-[#C6893F] hover:bg-slate-50'} transition-colors`}
            >
              BOSH SAHIFA
            </Link>
            <Link
              to="/#catalog"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:text-[#C6893F] hover:bg-slate-50 transition-colors"
            >
              KATALOG
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`py-2.5 px-3 rounded-lg font-extrabold ${location.pathname === '/services' ? 'text-[#C6893F] bg-[#C6893F]/10' : 'text-slate-800 hover:text-[#C6893F] hover:bg-slate-50'} transition-colors`}
            >
              XIZMATLAR
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`py-2.5 px-3 rounded-lg font-extrabold ${location.pathname === '/about' ? 'text-[#C6893F] bg-[#C6893F]/10' : 'text-slate-800 hover:text-[#C6893F] hover:bg-slate-50'} transition-colors`}
            >
              KOMPANIYA HAQIDA
            </Link>
            <Link
              to="/#news"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-slate-800 hover:text-[#C6893F] hover:bg-slate-50 transition-colors"
            >
              YANGILIKLAR
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`py-2.5 px-3 rounded-lg font-extrabold ${location.pathname === '/contact' ? 'text-[#C6893F] bg-[#C6893F]/10' : 'text-slate-800 hover:text-[#C6893F] hover:bg-slate-50'} transition-colors`}
            >
              BOG'LANISH
            </Link>
          </div>

          {/* Mobile Language Switcher */}
          <div className="mt-4 pt-4 border-t border-slate-200/80">
            <div className="flex items-center space-x-6 text-[11px] font-black tracking-widest text-slate-400">
              <button className="text-[#C6893F] cursor-default border-b-2 border-[#C6893F] pb-1 flex items-center gap-1.5">
                <img src="https://flagcdn.com/w20/uz.png" alt="UZ" className="w-4 h-auto rounded-[2px]" />
                UZB
              </button>
              <button className="hover:text-slate-800 transition-colors pb-1 cursor-pointer flex items-center gap-1.5">
                <img src="https://flagcdn.com/w20/ru.png" alt="RU" className="w-4 h-auto rounded-[2px]" />
                RUS
              </button>
              <button className="hover:text-slate-800 transition-colors pb-1 cursor-pointer flex items-center gap-1.5">
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 h-auto rounded-[2px]" />
                ENG
              </button>
            </div>
          </div>

          {/* Mobile Contacts */}
          <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-3">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              Biz bilan bog'lanish:
            </div>
            
            <div className="flex items-center justify-between py-1 border-b border-slate-100">
              <div>
                <div className="text-[10px] text-[#C6893F] font-bold uppercase tracking-wider">Telefon</div>
                <a href="tel:+998995601666" className="text-sm font-extrabold shine-number">
                  +998 99 560-16-66
                </a>
              </div>
              <a href="tel:+998995601666" className="w-8 h-8 rounded-full bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center hover:bg-[#C6893F]/25 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-slate-100">
              <div>
                <div className="text-[10px] text-[#C6893F] font-bold uppercase tracking-wider">Telegram</div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-700">
                  Bizning kanal
                </a>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="/telegram.png" alt="Telegram" className="w-7 h-7 object-contain" />
              </a>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-slate-100">
              <div>
                <div className="text-[10px] text-[#C6893F] font-bold uppercase tracking-wider">Instagram</div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-700">
                  Bizning sahifa
                </a>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="/instagram.png" alt="Instagram" className="w-7 h-7 object-contain" />
              </a>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="pr-4">
                <div className="text-[10px] text-[#C6893F] font-bold uppercase tracking-wider">Manzil</div>
                <a href="https://maps.app.goo.gl/qLtyXVBd8t14qiSz8" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-600 leading-tight block mt-0.5">
                  Xorazm vil., Urganch sh., Ashxobod MFY, Sanoatchilar ko'chasi
                </a>
              </div>
              <a href="https://maps.app.goo.gl/qLtyXVBd8t14qiSz8" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shrink-0">
                <img src="/google-maps.png" alt="Xarita" className="w-7 h-7 object-contain" />
              </a>
            </div>
          </div>

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
