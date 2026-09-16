import { useState, useMemo } from 'react';
import { X, Send, Check, Calculator, ShieldCheck, Cpu } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

interface QuoteModalProps { isOpen: boolean; onClose: () => void; }

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { t } = useLang();
  const m = t.modal;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '', contactName: '', email: '', phone: '',
    batchSize: '50000', layers: '5', paperType: 'white',
    width: '300', length: '400', height: '250', specifications: ''
  });

  // Calculate live estimate values
  const estimates = useMemo(() => {
    const l = parseFloat(formData.length) || 0;
    const w = parseFloat(formData.width) || 0;
    const h = parseFloat(formData.height) || 0;
    const is5Layer = formData.layers === '5';
    
    // Approximate surface area in sq. meters per box
    const surfaceAreaSqM = (2 * (l * w + l * h + w * h)) / 1000000;
    const gsm = is5Layer ? 680 : 420; // total gsm
    const weightGrams = surfaceAreaSqM * gsm;
    const bctKkN = is5Layer ? 4.8 : 3.1; // BCT force rating

    return {
      weightGrams: Math.round(weightGrams),
      bctKkN,
      volumeLiters: ((l * w * h) / 1000000).toFixed(1)
    };
  }, [formData.length, formData.width, formData.height, formData.layers]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputCls = "w-full bg-slate-50 border border-slate-300 focus:border-sky-500 focus:bg-white focus:outline-none p-3.5 rounded-xl font-medium text-sm text-slate-800 transition-all";
  const labelCls = "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001A35]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl border border-slate-200 shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-slate-100 bg-slate-50">
          <div>
            <h3 className="text-base font-extrabold text-[#002549] uppercase tracking-wider flex items-center gap-2">
              <Calculator className="w-5 h-5 text-sky-500" />
              {m.title}
            </h3>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">DS SMITH SPEC CALCULATOR // KWF-RFQ-2026</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-200/60 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-12 px-4">
              <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Check className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#002549] uppercase tracking-wide mb-3">{m.successTitle}</h4>
              <p className="text-base text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">{m.successBody}</p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="bg-[#002549] hover:bg-sky-600 text-white text-xs font-extrabold tracking-wider uppercase px-8 py-4 rounded-full transition-all shadow-md"
              >
                {m.closeBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>{m.companyName}</label>
                  <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} placeholder="e.g. UzPackaging Group" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{m.contactName}</label>
                  <input type="text" name="contactName" required value={formData.contactName} onChange={handleChange} placeholder="e.g. Jasur Alimov" className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>{m.email}</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="name@company.uz" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{m.phone}</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+998 (71) ___ - ____" className={inputCls} />
                </div>
              </div>

              {/* Technical Specifications Section */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-extrabold text-[#002549] uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-sky-500" />
                    Packaging Specifications
                  </h4>
                  <span className="text-[10px] font-extrabold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                    Live CAD Estimator
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                  <div>
                    <label className={labelCls}>{m.batchVolume}</label>
                    <select name="batchSize" value={formData.batchSize} onChange={handleChange} className={inputCls}>
                      <option value="10000">{m.opt10k}</option>
                      <option value="25000">{m.opt25k}</option>
                      <option value="50000">{m.opt50k}</option>
                      <option value="100000">{m.opt100k}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>{m.layerDensity}</label>
                    <select name="layers" value={formData.layers} onChange={handleChange} className={inputCls}>
                      <option value="3">{m.opt3layer}</option>
                      <option value="5">{m.opt5layer}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>{m.paperFinish}</label>
                    <select name="paperType" value={formData.paperType} onChange={handleChange} className={inputCls}>
                      <option value="white">{m.optWhite}</option>
                      <option value="kraft">{m.optKraft}</option>
                    </select>
                  </div>
                </div>

                {/* Box Dimensions (mm) */}
                <div className="grid grid-cols-3 gap-4 mb-5">
                  <div>
                    <label className={labelCls}>{m.length} (mm)</label>
                    <input type="number" name="length" value={formData.length} onChange={handleChange} placeholder="400" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>{m.width} (mm)</label>
                    <input type="number" name="width" value={formData.width} onChange={handleChange} placeholder="300" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>{m.height} (mm)</label>
                    <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="250" className={inputCls} />
                  </div>
                </div>

                {/* Live Estimates Card */}
                <div className="bg-[#002549] text-white p-4 rounded-2xl grid grid-cols-3 gap-4 text-center font-mono text-xs mb-5">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Box Weight</span>
                    <span className="text-base font-bold text-sky-400">{estimates.weightGrams} g</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Estimated BCT</span>
                    <span className="text-base font-bold text-emerald-400">{estimates.bctKkN} kN</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Volume</span>
                    <span className="text-base font-bold text-amber-400">{estimates.volumeLiters} L</span>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelCls}>{m.additionalDetails}</label>
                <textarea name="specifications" rows={3} value={formData.specifications} onChange={handleChange} placeholder={m.additionalPlaceholder} className={`${inputCls} resize-none`} />
              </div>

              {/* Submit & Footer Note */}
              <div className="border-t border-slate-200 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  {m.labNote}
                </span>
                
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-400 text-white text-xs font-extrabold tracking-wider uppercase px-8 py-4 rounded-full transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>{m.submitBtn}</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
