import { useState } from "react";
import { Star, MapPin } from "lucide-react";

interface CustomerReviewsProps {
  onOpenQuote: () => void;
}

const REVIEWS = [
  {
    name: "Alisher U.",
    avatar: "🏢",
    bgColor: "bg-amber-100 text-amber-700",
    rating: 5,
    date: "10-iyun, 2025",
    text: "Agrosanoat va mevalarni eksport qilish uchun gofrolotoklar buyurtma qilamiz. Toshkentdagi ombordan tezda yuklab berishadi, mustahkamligi a'lo darajada.",
  },
  {
    name: "Anna F.",
    avatar: "A",
    bgColor: "bg-sky-100 text-sky-700 font-bold",
    rating: 5,
    date: "5-aprel, 2025",
    text: "Brendlash uchun o'zi yig'iluvchi qutilar partiyasini buyurtma qildik. O'z vaqtida yetkazib berishdi, OqLayner oq kartoni sifati juda yuqori.",
  },
  {
    name: "Sardor K.",
    avatar: "👨‍🔧",
    bgColor: "bg-slate-200 text-slate-800",
    rating: 5,
    date: "14-mart, 2025",
    text: "Sergelidagi omborda FEFCO standart o'lchamlari doimiy mavjud. Har doim to'g'ri maslahat berishadi va tezkorlik bilan ESF rasmiylashtirishadi.",
  },
  {
    name: "Aleksandr Dronenko",
    avatar: "🦕",
    bgColor: "bg-[#C6893F]/15 text-[#C6893F]",
    rating: 5,
    date: "4-dekabr, 2024",
    text: "MDH davlatlariga eksport qilinadigan mahsulotlarimiz uchun 5 qatlamli gofrokarton xarid qilamiz. Geometriyasi aniq, yelimi mustahkam, tashishda nuqson umuman yo'q.",
  },
  {
    name: "Jasur M.",
    avatar: "🏭",
    bgColor: "bg-rose-100 text-rose-700",
    rating: 5,
    date: "18-noyabr, 2024",
    text: "Ajoyib zavod! Shtansformali murakkab qutini tezda hisoblab berishdi va 4 kunda partiyani Samarqandga yetkazib berish bilan tayyorlashdi.",
  },
  {
    name: "Dilshod R.",
    avatar: "💼",
    bgColor: "bg-purple-100 text-purple-700",
    rating: 5,
    date: "13-noyabr, 2024",
    text: "Gofrotara yetkazib berish bo'yicha ikkinchi yildirki uzoq muddatli shartnoma asosida ishlayapmiz. Toshkent va viloyatlar bo'yicha aniq logistika, kechikishlar yo'q.",
  },
];

export default function CustomerReviews({ onOpenQuote }: CustomerReviewsProps) {
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#FAF6F0] border-y border-[#C6893F]/20 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header with Title & Rating Badge & Leave Review Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
              Mijozlarimiz <br className="sm:hidden" />
              <span className="text-neutral-800 font-bold">fikrlari</span>
            </h2>

            {/* Maps Rating Badge */}
            <div className="flex items-center space-x-2 mt-2 select-none">
              <div className="flex items-center space-x-1 font-bold text-xs text-neutral-800">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[11px]">
                  Y
                </span>
                <span className="flex items-center text-red-600 font-bold">
                  <MapPin className="w-3.5 h-3.5 fill-current" />
                  <span>Xaritalar</span>
                </span>
              </div>
              <span className="text-xs font-bold text-neutral-900">5 dan 4,7</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-slate-500 font-normal">
                17 ta baholash asosida
              </span>
            </div>
          </div>

          {/* Leave Review Button */}
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white hover:bg-[#C6893F]/10 border-2 border-[#C6893F] text-neutral-900 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg transition-all shadow-xs cursor-pointer active:scale-95"
            >
              Fikr qoldirish
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* User Info Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={"w-10 h-10 rounded-full flex items-center justify-center text-base shadow-xs " + rev.bgColor}
                    >
                      {rev.avatar}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-neutral-900">
                        {rev.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-normal">
                        {rev.date}
                      </p>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {rev.text}
                </p>
              </div>

              <div className="mt-3 pt-2">
                <span className="text-[11px] text-slate-400 font-medium hover:text-[#C6893F] cursor-pointer">
                  To'liq o'qish
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews bottom footer info */}
        <div className="mt-8 pt-4 border-t border-[#C6893F]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>Qadoqlash mahsulotlarimiz sifati va yetkazib berish xizmatimizni baholang</span>
          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="text-[#C6893F] hover:text-[#B37830] font-bold hover:underline cursor-pointer"
            >
              Birinchi partiyaga ariza qoldirish →
            </button>
          )}
        </div>

      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Fikr qoldirish</h3>
            <p className="text-xs text-slate-500 mb-4">
              Karton Works Factory (KWF) zavodi bilan hamkorlik tajribangiz haqida yozing
            </p>
            {reviewSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                  ✓
                </div>
                <p className="text-sm font-bold text-slate-800">Fikringiz uchun tashakkur!</p>
                <p className="text-xs text-slate-500 mt-1">U moderator tekshiruvidan so'ng e'lon qilinadi.</p>
                <button
                  onClick={() => { setIsModalOpen(false); setReviewSubmitted(false); }}
                  className="mt-4 bg-[#C6893F] text-white text-xs font-bold px-6 py-2 rounded-lg"
                >
                  Yopish
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setReviewSubmitted(true); }}
                className="space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Ismingiz"
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-[#C6893F] focus:outline-none"
                />
                <div className="flex items-center space-x-1 text-amber-400 py-1">
                  <span className="text-xs text-slate-600 mr-2">Baholash:</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current cursor-pointer hover:scale-110 transition-transform" />
                  ))}
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Gofrokarton sifati va yetkazib berish haqida fikringiz..."
                  className="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-[#C6893F] focus:outline-none"
                />
                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="submit"
                    className="bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs px-6 py-2 rounded-lg cursor-pointer"
                  >
                    Yuborish
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
