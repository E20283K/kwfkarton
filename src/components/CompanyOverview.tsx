import { useState } from 'react';
import { Layers, CheckCircle2, Activity } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function CompanyOverview() {
  const { t } = useLang();
  const o = t.overview;
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);

  const layersList = [
    { id: 1, name: o.layer1Name, gsm: '140 - 180 GSM', desc: o.layer1Desc, wave: false, color: 'border-sky-500 bg-sky-50/50' },
    { id: 2, name: o.layer2Name, gsm: '125 - 140 GSM', desc: o.layer2Desc, wave: true, color: 'border-amber-500 bg-amber-50/50' },
    { id: 3, name: o.layer3Name, gsm: '130 GSM', desc: o.layer3Desc, wave: false, color: 'border-slate-400 bg-slate-50' },
    { id: 4, name: o.layer4Name, gsm: '120 - 130 GSM', desc: o.layer4Desc, wave: true, color: 'border-amber-500 bg-amber-50/50' },
    { id: 5, name: o.layer5Name, gsm: '150 GSM', desc: o.layer5Desc, wave: false, color: 'border-[#002549] bg-slate-100' },
  ];

  return (
    <section id="overview" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            {o.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Text & Metrics */}
          <div className="lg:col-span-7 space-y-8">
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#002549] tracking-tight leading-[1.1]">
              {o.h2a} <br />
              <span className="text-sky-500">{o.h2b}</span>
            </h2>

            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="font-semibold text-xl text-[#002549] leading-snug">
                {o.p1}
              </p>
              <p className="text-slate-600">
                {o.p2}
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "100% Recyclable Eco Materials",
                "Certified Packaging Lab",
                "Marketplace Logistics Hub",
                "High-Speed Corrugation Line"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Metrics Counters */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#002549] tracking-tight">5-Layer</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{o.stat1Label}</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <p className="text-3xl sm:text-4xl font-extrabold text-sky-500 tracking-tight">50K / 48h</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{o.stat2Label}</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight">0%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{o.stat3Label}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 5-Layer Corrugated Architecture */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#002549] to-[#001A35] text-white rounded-3xl p-8 shadow-2xl relative border border-slate-800">
            
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 text-white">
                <Layers className="w-5 h-5 text-sky-400" />
                {o.structureTitle}
              </h3>
              <span className="text-[10px] font-mono text-sky-300 font-bold bg-sky-500/20 px-2.5 py-1 rounded-full border border-sky-500/30">
                REF_DWG: KWF-L5C-09
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-6">
              Click or hover on any layer to inspect structural density & material properties:
            </p>

            <div className="space-y-3 font-sans text-xs">
              {layersList.map((layer) => {
                const isSelected = selectedLayer === layer.id;
                return (
                  <div
                    key={layer.id}
                    onMouseEnter={() => setSelectedLayer(layer.id)}
                    onMouseLeave={() => setSelectedLayer(null)}
                    className={`border rounded-xl p-4 transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-sky-500/20 border-sky-400 translate-x-1 shadow-lg'
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {layer.wave && (
                      <div className="absolute right-3 bottom-2 opacity-30 pointer-events-none">
                        <svg width="65" height="18" viewBox="0 0 65 18" className="stroke-sky-400 stroke-[2.5] fill-none">
                          <path d="M0 9 Q 8.125 0, 16.25 9 T 32.5 9 T 48.75 9 T 65 9" />
                        </svg>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-white font-bold mb-1">
                      <span className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${layer.wave ? 'bg-amber-400' : 'bg-sky-400'}`} />
                        <span>{layer.name}</span>
                      </span>
                      <span className="text-sky-300 font-mono font-bold bg-white/10 px-2 py-0.5 rounded text-[11px]">
                        {layer.gsm}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug mt-1">{layer.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* BCT Lab Certificate Banner */}
            <div className="mt-6 flex items-center justify-between text-xs font-bold text-white bg-sky-500/10 border border-sky-500/30 p-4 rounded-xl backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                {o.bctLabel}
              </span>
              <span className="text-sky-300 font-mono text-sm tracking-wide">{o.bctValue}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
