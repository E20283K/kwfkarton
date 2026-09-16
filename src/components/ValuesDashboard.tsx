import { useState } from 'react';
import { Zap, Sparkles, Hammer, TrendingDown, Eye, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const TAB_ICONS: Record<string, React.ReactNode> = {
  speed:       <Zap className="w-5 h-5" />,
  white:       <Sparkles className="w-5 h-5" />,
  engineering: <Hammer className="w-5 h-5" />,
  economy:     <TrendingDown className="w-5 h-5" />,
  srp:         <Eye className="w-5 h-5" />,
};

const TAB_IMAGES: Record<string, string> = {
  speed:       '/hero_factory.png',
  white:       '/premium_packaging.png',
  engineering: '/testing_laboratory.png',
  economy:     '/hero_factory.png',
  srp:         '/premium_packaging.png',
};

export default function ValuesDashboard() {
  const { t } = useLang();
  const v = t.values;
  const [activeTab, setActiveTab] = useState('speed');

  const tabIds = ['speed', 'white', 'engineering', 'economy', 'srp'] as const;
  const currentTab = v.tabs[activeTab as keyof typeof v.tabs];

  return (
    <section id="values" className="py-28 lg:py-36 bg-[#002549] text-white relative overflow-hidden">
      <div className="absolute inset-0 dssmith-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/30 px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-300">{v.badge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white">
              {v.h2a} <span className="text-sky-400">{v.h2b}</span>
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm font-mono max-w-md border-l-2 border-sky-500/50 pl-4 py-1 leading-relaxed">
            {v.note}
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Vertical Tab Navigation */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {tabIds.map((id) => {
              const isActive = id === activeTab;
              const tab = v.tabs[id];
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-sky-500 border-sky-400 text-white translate-x-2 shadow-xl shadow-sky-500/20'
                      : 'bg-[#001A35] border-white/10 text-slate-300 hover:bg-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-sky-400'
                    }`}>
                      {TAB_ICONS[id]}
                    </div>
                    <span className="text-sm font-extrabold tracking-wider uppercase">{tab.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'rotate-90 text-white' : 'text-slate-500'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Content Display Panel */}
          <div className="lg:col-span-8 bg-[#001A35] border border-white/10 rounded-3xl p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl">
            
            {/* Left side details */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest bg-sky-500/20 border border-sky-500/30 text-sky-300 px-3 py-1 rounded-full">
                  STRATEGIC FOCUS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white mt-4 mb-4 tracking-tight">
                  {currentTab.title}
                </h3>
                
                <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  <div>
                    <span className="block font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-1">
                      {v.focusLabel}
                    </span>
                    <p className="font-semibold text-white">{currentTab.focus}</p>
                  </div>

                  <div>
                    <span className="block font-bold text-slate-400 uppercase text-[10px] tracking-wider mb-1">
                      {v.segmentLabel}
                    </span>
                    <p className="text-slate-300">{currentTab.segment}</p>
                  </div>

                  <div className="pt-2">
                    <span className="block font-extrabold text-sky-400 uppercase text-[10px] tracking-wider mb-1">
                      {v.edgeLabel}
                    </span>
                    <p className="bg-white/5 border-l-4 border-sky-400 p-3.5 rounded-r-xl font-medium text-white text-xs leading-relaxed">
                      {currentTab.edge}
                    </p>
                  </div>
                </div>
              </div>

              {/* Specs Output Matrix */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  {v.techRef}
                </h4>
                <div className="space-y-2 font-mono text-[11px]">
                  {currentTab.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">{spec.label}</span>
                      <span className="text-sky-300 font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side high-res media box */}
            <div className="relative rounded-2xl border border-white/10 overflow-hidden h-64 md:h-full min-h-[320px] group">
              <img
                src={TAB_IMAGES[activeTab]}
                alt={currentTab.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A35] via-transparent to-transparent z-1" />
              <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center text-[10px] font-mono text-white/90 bg-[#002549]/90 border border-white/20 p-3 rounded-xl backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  CAD_MODEL // STAGE_3
                </span>
                <span className="text-sky-400 uppercase font-extrabold">{v.labVerified}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
