import { useTranslation } from "react-i18next";

interface WorkProcessProps {
  onOpenQuote?: () => void;
}

export default function WorkProcess({ onOpenQuote }: WorkProcessProps) {
  const { t } = useTranslation();

  const steps = [
    {
      num: "1",
      title: t("workProcess.step1.title"),
      p1: t("workProcess.step1.desc"),
    },
    {
      num: "2",
      title: t("workProcess.step2.title"),
      p1: t("workProcess.step2.desc"),
    },
    {
      num: "3",
      title: t("workProcess.step3.title"),
      p1: t("workProcess.step3.desc"),
    },
    {
      num: "4",
      title: t("workProcess.step4.title"),
      p1: t("workProcess.step4.desc"),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight mb-6 sm:mb-8">
        {t("workProcess.title")}
      </h2>

      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Column 1: Steps 1 & 3 */}
          <div className="space-y-10 lg:space-y-12 md:pr-6 lg:pr-8">
            {[steps[0], steps[2]].map((s, idx) => (
              <div key={idx} className="relative">
                {/* Big prominent step number */}
                <div className="text-5xl sm:text-6xl font-black text-[#C6893F] mb-3 select-none leading-none">
                  {s.num}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {s.p1}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2: Steps 2 & 4 */}
          <div className="space-y-10 lg:space-y-12 pt-8 md:pt-0 md:pl-6 lg:pl-8">
            {[steps[1], steps[3]].map((s, idx) => (
              <div key={idx} className="relative">
                {/* Big prominent step number */}
                <div className="text-5xl sm:text-6xl font-black text-[#C6893F] mb-3 select-none leading-none">
                  {s.num}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {s.p1}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA bar inside Scheme */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
            {t("workProcess.ctaText")}
          </p>
          <button
            onClick={onOpenQuote}
            className="bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer shrink-0 active:scale-95"
          >
            {t("workProcess.ctaButton")}
          </button>
        </div>

      </div>
    </section>
  );
}
