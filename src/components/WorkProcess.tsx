interface WorkProcessProps {
  onOpenQuote?: () => void;
}

export default function WorkProcess({ onOpenQuote }: WorkProcessProps) {
  const steps = [
    {
      num: "1",
      title: "Sayt yoki telefon orqali ariza qoldirish",
      p1: "Buyurtma berish sayt orqali ariza yuborish yoki telefon orqali boshlanadi.",
      p2: "Siz qayta aloqa shaklida so'rov qoldirishingiz yoki mutaxassisimiz bilan bevosita bog'lanib dastlabki maslahat olishingiz mumkin.",
      listHeader: "Ushbu bosqichda quyidagilar aniqlanadi:",
      bullets: [
        "mahsulot turi va sohasi;",
        "ishlab chiqarish hajmi (tiraj);",
        "qadoqqa qo'yiladigan maxsus talablar;",
        "tayyorlash va yetkazib berish muddatlari.",
      ],
    },
    {
      num: "2",
      title: "Narxni hisoblash va tijorat taklifi",
      p1: "Ariza qabul qilingach, texnik ko'rsatkichlar hisoblanadi va tijorat taklifi shakllantiriladi.",
      p2: "Hisob-kitob konstruksiya, dizayn, tiraj, materiallar va logistika inobatga olingan holda amalga oshiriladi.",
      listHeader: "Mijoz quyidagilarni oladi:",
      bullets: [
        "batafsil narxlar smetasi;",
        "texnik tavsifnoma va chizma;",
        "ishlab chiqarishning aniq muddatlari;",
        "yetkazib berish va to'lov shartlari.",
      ],
    },
    {
      num: "3",
      title: "Ishlab chiqarish va sifat nazorati",
      p1: "Tasdiqlangan partiyani avtomatlashtirilgan liniyalarda ishlab chiqarishga yo'naltirish.",
      p2: "Xomashyo sifati, geometrik aniqlik va GOST/FEFCO standartlariga qat'iy rioya etilishini nazorat qilish.",
      listHeader: "Majburiy laboratoriya sinovlari:",
      bullets: [
        "qirralarning siqilishga chidamliligi (ECT);",
        "yorilishga va bosimga qarshilik (Burst);",
        "yelimlash va bukilish chiziqlari mustahkamligi;",
        "flekso-bosma sifatining vizual nazorati.",
      ],
    },
    {
      num: "4",
      title: "Yetkazib berish va yuklash",
      p1: "Tayyor mahsulotlarni streych-plyonka bilan zich o'rab, tagliklarga (palet) joylash.",
      p2: "Ombordan qat'iy kelishilgan vaqtda, kechikishlarsiz yuklab jo'natish.",
      listHeader: "Qulay qabul qilib olish variantlari:",
      bullets: [
        "Toshkent shahri va O'zbekistonning barcha viloyatlariga o'z avtotransportimizda yetkazib berish;",
        "ishonchli logistika hamkorlari orqali yuborish;",
        "zavod omboridan o'zi olib ketish (samovivoz);",
        "barcha yopuvchi hujjatlar to'plami (elektron hisob-faktura (ESF), nakladnoy, sertifikatlar).",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight mb-6 sm:mb-8">
        Ishlash tartibi
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

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3 leading-snug">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-2 font-normal">
                  {s.p1}
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3 font-normal">
                  {s.p2}
                </p>

                <div className="pt-1">
                  <p className="text-xs font-bold text-neutral-800 mb-1.5">
                    {s.listHeader}
                  </p>
                  <ul className="text-xs sm:text-[13px] text-slate-500 space-y-1 pl-1">
                    {s.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-1.5">
                        <span className="text-[#C6893F] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3 leading-snug">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-2 font-normal">
                  {s.p1}
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3 font-normal">
                  {s.p2}
                </p>

                <div className="pt-1">
                  <p className="text-xs font-bold text-neutral-800 mb-1.5">
                    {s.listHeader}
                  </p>
                  <ul className="text-xs sm:text-[13px] text-slate-500 space-y-1 pl-1">
                    {s.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-1.5">
                        <span className="text-[#C6893F] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA bar inside Scheme */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
            Individual o'lchamlar bo'yicha maslahatlashishga yoki partiyani hisoblashga tayyormisiz?
          </p>
          <button
            onClick={onOpenQuote}
            className="bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer shrink-0 active:scale-95"
          >
            Hisob-kitobga ariza qoldirish
          </button>
        </div>

      </div>
    </section>
  );
}
