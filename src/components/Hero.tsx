import { ShieldCheck, Truck, Cpu, ArrowRight, Sparkles } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

interface HeroProps { onOpenQuote: () => void; }

export default function Hero({ onOpenQuote }: HeroProps) {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative min-h-[calc(100vh-6rem)] bg-[#002549] text-white flex items-center justify-center pt-8 pb-16 overflow-hidden">
      {/* Background Image with DS Smith Multi-Layer Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_factory.png"
          alt="Modern automated corrugated production line at KWF factory"
          className="w-full h-full object-cover opacity-35 transform scale-105 transition-transform duration-[12000ms] ease-out hover:scale-100"
        />
        {/* DS Smith Deep Navy Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002549] via-[#002549]/90 to-[#002549]/70 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002549] via-transparent to-transparent z-1" />
        <div className="absolute inset-0 dssmith-grid-dark opacity-40 z-2 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-12 pb-8 flex flex-col justify-between min-h-[calc(100vh-7rem)]">
        
        {/* Main Hero Content */}
        <div className="max-w-4xl my-auto pt-6">
          
          {/* DS Smith Style Pill Badge */}
          <div className="inline-flex items-center space-x-2.5 bg-sky-500/10 border border-sky-500/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_10px_#00A3E0]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-300">{h.badge}</span>
            <Sparkles className="w-3.5 h-3.5 text-sky-400 ml-1" />
          </div>

          {/* Big Commandive Headlines */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-8">
            {h.h1a} <br />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              {h.h1b}
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-3xl">
            {h.body}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenQuote}
              className="bg-sky-500 hover:bg-sky-400 text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 flex items-center justify-center space-x-3 group active:scale-95 glow-blue"
            >
              <span>{h.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            
            <a
              href="#overview"
              className="border border-white/20 hover:border-sky-400/60 text-white hover:text-sky-300 text-xs sm:text-sm font-extrabold tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 text-center bg-white/5 hover:bg-white/10 backdrop-blur-md"
            >
              {h.ctaSecondary}
            </a>
          </div>

        </div>

        {/* DS Smith 3-Column Performance Stats Card Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/15 pt-8 mt-8 bg-[#001A35]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
          {[
            { Icon: Cpu, title: h.stat1Title, body: h.stat1Body, tag: "CAPABILITY" },
            { Icon: Truck, title: h.stat2Title, body: h.stat2Body, tag: "PROXIMITY" },
            { Icon: ShieldCheck, title: h.stat3Title, body: h.stat3Body, tag: "QUALITY" },
          ].map(({ Icon, title, body, tag }) => (
            <div key={title} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="p-3.5 bg-sky-500/10 border border-sky-500/20 rounded-xl group-hover:bg-sky-500/20 transition-colors shrink-0">
                <Icon className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400/80 bg-sky-500/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">{title}</h3>
                <p className="text-xs text-slate-300 mt-1 font-normal leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
