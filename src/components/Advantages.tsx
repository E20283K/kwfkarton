import { useTranslation } from 'react-i18next';

interface AdvantagesProps {
  onOpenQuote: () => void;
}

const advantagesKeys = [
  {
    id: "engineering",
    icon: "/values/engineering.svg",
  },
  {
    id: "economy",
    icon: "/values/economy.svg",
  },
  {
    id: "speed",
    icon: "/values/speed.svg",
  },
  {
    id: "white",
    icon: "/values/white.svg",
  },
  {
    id: "srp",
    icon: "/values/srp.svg",
  },
];

export default function Advantages({ onOpenQuote }: AdvantagesProps) {
  const { t } = useTranslation();

  return (
    <section id="advantages" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14 scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight mb-6 sm:mb-10">
        {t('advantages.sectionTitle')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {advantagesKeys.map(({ id, icon }) => (
          <div
            key={id}
            className="group relative bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#C6893F]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[260px] sm:min-h-[290px]"
          >
            {/* Ambient Watermark Icon (faint huge graphic in the bottom-right corner) */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 ease-out z-0">
              <img
                src={icon}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">
              {/* Top Row: Clean Big Icon (No border, no box) + Keyword Tag */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 select-none group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={icon}
                    alt={`${t(`advantages.items.${id}.keyword`)} - ${t(`advantages.items.${id}.title`)}`}
                    className="w-full h-full object-contain drop-shadow-xs"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs sm:text-sm font-black tracking-wider text-[#C6893F] uppercase font-mono">
                  {t(`advantages.items.${id}.keyword`)}
                </span>
              </div>

              {/* Big Bold Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-neutral-900 leading-snug tracking-tight mb-2.5 group-hover:text-[#C6893F] transition-colors">
                {t(`advantages.items.${id}.title`)}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {t(`advantages.items.${id}.desc`)}
              </p>
            </div>
          </div>
        ))}

        {/* CTA Card */}
        <div className="relative bg-[#C6893F] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md shadow-[#C6893F]/25 overflow-hidden min-h-[260px] sm:min-h-[290px]">
          {/* Subtle background industrial pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-white/75 block mb-3 font-mono">
              {t('advantages.cta.tag')}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight mb-3 tracking-tight">
              {t('advantages.cta.title')}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
              {t('advantages.cta.desc')}
            </p>
          </div>

          <div className="relative z-10 pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto text-xs sm:text-sm font-bold text-[#C6893F] bg-white rounded-xl px-6 py-3.5 hover:bg-white/95 transition-all duration-200 cursor-pointer shadow-sm active:scale-95 uppercase tracking-wider text-center"
            >
              {t('advantages.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
