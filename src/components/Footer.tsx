import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  onOpenQuote?: () => void;
}

const SOCIAL = [
  {
    label: "Telegram",
    href: "https://t.me/kwf_uz",
    path: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.98 4.793-1.386 6.812-.172.853-.51 1.14-.836 1.168-.71.063-1.25-.427-1.938-.838-1.077-.645-1.686-1.045-2.733-1.674-1.21-.726-.426-1.127.264-1.785.18-.172 3.324-2.812 3.385-3.048.007-.033.014-.157-.063-.223-.078-.066-.192-.043-.275-.026-.118.025-2.003 1.178-5.655 3.486-.535.337-1.02.503-1.455.49-.48-.014-1.402-.256-2.087-.463-.84-.253-1.507-.387-1.45-.817.03-.224.364-.454 1.002-.693 3.93-1.597 6.55-2.65 7.86-3.16 3.743-1.45 4.52-1.702 5.027-1.71.112-.002.362.023.524.145.137.103.175.247.19.352.015.106.033.325.018.491z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kwf_uz",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/kwf.uz",
    path: "M9 8H7v3h2v9h4v-9h3.61l.39-3H13V6c0-.88.45-1 1-1h2V1h-3c-2.9 0-5 1.88-5 5v2z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@KWF_Packaging",
    path: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function Footer(_props?: FooterProps) {
  return (
    <footer id="footer" className="bg-[#3D4046] text-white font-sans">

      {/* Upper Footer Container: 5 Columns matching screenshot */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 pb-14">

        {/* Social Network Icons Bar at the top of the footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-10 border-b border-white/10 gap-4">
          <div className="flex items-center space-x-3">
            <img
              src="/kwf_footer.svg"
              alt="Karton Works Factory"
              className="h-[60px] sm:h-[66px] w-auto object-contain"
            />
            <span className="text-xs text-slate-400 font-medium hidden sm:inline border-l border-white/15 pl-3 py-1">
              Gofroqadoq ishlab chiqarish zavodi
            </span>
          </div>

          {/* Social Network Icons */}
          <div className="flex items-center space-x-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#C6893F]/20 border border-white/10 hover:border-[#C6893F] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-xs sm:text-[13px]">

          {/* Column 1: BO'LIMLAR */}
          <div className="space-y-3">
            <h3 className="font-extrabold uppercase text-white tracking-wider text-xs sm:text-sm">
              BO'LIMLAR
            </h3>
            <ul className="space-y-2 text-slate-300 font-normal">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Kompaniya haqida
                </Link>
              </li>
              <li>
                <Link to="/#gallery" className="hover:text-white transition-colors">
                  Ishlab chiqarish
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Bog'lanish va aloqa
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: BOG'LANISH */}
          <div className="space-y-3">
            <h3 className="font-extrabold uppercase text-white tracking-wider text-xs sm:text-sm">
              BOG'LANISH
            </h3>
            <div className="space-y-3 text-slate-300 font-normal">

              {/* Address */}
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C6893F] shrink-0 mt-0.5" />
                <div className="leading-snug">
                  Xorazm viloyati, Urganch sh.,<br />
                  Ashxobod MFY, Sanoatchilar ko'chasi,<br />
                  19/2-uy, A-korpus
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#C6893F] shrink-0" />
                <a
                  href="tel:+998995606166"
                  className="font-bold text-white hover:text-[#C6893F] transition-colors"
                >
                  +998 (99) 560-61-66
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C6893F] shrink-0" />
                <a
                  href="mailto:kwf.sales1@matpap.uz"
                  className="hover:text-white transition-colors"
                >
                  kwf.sales1@matpap.uz
                </a>
              </div>

            </div>
          </div>

          {/* Column 4: REKVIZITLAR */}
          <div className="space-y-3">
            <h3 className="font-extrabold uppercase text-white tracking-wider text-xs sm:text-sm">
              REKVIZITLAR
            </h3>
            <div className="space-y-1.5 text-slate-300 font-normal leading-relaxed">
              <div className="font-semibold text-white">
                "KARTON WORKS" MCHJ
              </div>
              <div>STIR (INN): <span className="text-white font-medium">300472900</span></div>
              <div>IFUT (OKED): <span className="text-white font-medium">17210</span></div>
              <div>SOATO: <span className="text-white font-medium">1733401</span></div>
            </div>
          </div>

        </div>

      </div>

      {/* Lower Copyright Bar */}
      <div className="border-t border-white/10 py-3.5 sm:py-4 bg-[#2B2E33]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p className="font-medium text-slate-300">
            © 2025-2026 - "KARTON WORKS" MCHJ
          </p>
          <p className="text-[11px] text-slate-400">
            Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>

    </footer>
  );
}
