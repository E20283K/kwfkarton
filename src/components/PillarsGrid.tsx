import { Recycle, Award, CheckSquare, MapPin } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const PILLAR_ICONS = [
  <Recycle className="w-7 h-7 text-sky-500" />,
  <Award className="w-7 h-7 text-sky-500" />,
  <CheckSquare className="w-7 h-7 text-sky-500" />,
  <MapPin className="w-7 h-7 text-sky-500" />,
];

export default function PillarsGrid() {
  const { t } = useLang();
  const p = t.pillars;

  return (
    <section id="pillars" className="py-28 lg:py-36 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600">{p.badge}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#002549] uppercase tracking-tight">
            {p.h2a} <span className="text-sky-500">{p.h2b}</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            {p.body}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {p.items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 flex flex-col justify-between hover:border-sky-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <div>
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-sky-50 rounded-2xl border border-sky-100 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {PILLAR_ICONS[index]}
                    </div>
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-slate-300 group-hover:text-sky-500 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#002549] uppercase tracking-wide mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Tag footer */}
              <div className="text-[11px] font-mono font-bold text-slate-400 mt-8 pt-4 border-t border-slate-100 flex justify-between items-center group-hover:text-sky-600 transition-colors">
                <span>[PILLAR_0{index + 1}]</span>
                <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-sky-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
