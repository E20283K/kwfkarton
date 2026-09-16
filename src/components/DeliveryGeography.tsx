import { useState } from "react";
import { ArrowRight, Truck, Clock, ShieldCheck, Globe2 } from "lucide-react";

interface DeliveryGeographyProps {
  onOpenQuote: () => void;
}

interface CityPin {
  id: string;
  title: string;
  shortName: string;
  country: "uz" | "tj" | "kg";
  countryName: string;
  flag: string;
  x: number;
  y: number;
  time: string;
  status: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
  isHQ?: boolean;
}

const PINS: CityPin[] = [
  // O'zbekiston
  {
    id: "tashkent",
    title: "Toshkent (KWF HQ)",
    shortName: "Toshkent",
    country: "uz",
    countryName: "O'zbekiston",
    flag: "🇺🇿",
    x: 520,
    y: 205,
    time: "24 soatdan",
    status: "Bosh ishlab chiqarish majmuasi & markaziy xab",
    labelPosition: "top",
    isHQ: true,
  },
  {
    id: "samarkand",
    title: "Samarqand",
    shortName: "Samarqand",
    country: "uz",
    countryName: "O'zbekiston",
    flag: "🇺🇿",
    x: 435,
    y: 285,
    time: "24-48 soat",
    status: "Tarixiy va sanoat markazi xabi",
    labelPosition: "bottom",
  },
  {
    id: "bukhara",
    title: "Buxoro / Navoiy",
    shortName: "Buxoro",
    country: "uz",
    countryName: "O'zbekiston",
    flag: "🇺🇿",
    x: 360,
    y: 255,
    time: "48 soat",
    status: "Erkin iqtisodiy sanoat zonalari",
    labelPosition: "top",
  },
  {
    id: "fergana",
    title: "Farg'ona vodiysi",
    shortName: "Andijon / Namangan",
    country: "uz",
    countryName: "O'zbekiston",
    flag: "🇺🇿",
    x: 630,
    y: 245,
    time: "24-36 soat",
    status: "Kunlik muntazam to'g'ridan-to'g'ri reyslar",
    labelPosition: "right",
  },
  {
    id: "south",
    title: "Qarshi / Termiz",
    shortName: "Qarshi / Termiz",
    country: "uz",
    countryName: "O'zbekiston",
    flag: "🇺🇿",
    x: 425,
    y: 385,
    time: "48-72 soat",
    status: "Janubiy sanoat yo'nalishi ta'minoti",
    labelPosition: "bottom",
  },
  {
    id: "west",
    title: "Urganch / Nukus",
    shortName: "Urganch / Nukus",
    country: "uz",
    countryName: "O'zbekiston",
    flag: "🇺🇿",
    x: 185,
    y: 210,
    time: "48-72 soat",
    status: "G'arbiy hududiy yetkazib berish tarmog'i",
    labelPosition: "bottom",
  },

  // Tojikiston
  {
    id: "dushanbe",
    title: "Dushanbe HQ",
    shortName: "Dushanbe",
    country: "tj",
    countryName: "Tojikiston",
    flag: "🇹🇯",
    x: 515,
    y: 355,
    time: "48-72 soat",
    status: "To'g'ridan-to'g'ri xalqaro eksport yo'lagi",
    labelPosition: "bottom",
  },
  {
    id: "khujand",
    title: "Xo'jand",
    shortName: "Xo'jand",
    country: "tj",
    countryName: "Tojikiston",
    flag: "🇹🇯",
    x: 545,
    y: 260,
    time: "24-48 soat",
    status: "Chegaraoldi tezkor eksport tarmog'i",
    labelPosition: "right",
  },

  // Qirg'iziston
  {
    id: "bishkek",
    title: "Bishkek",
    shortName: "Bishkek",
    country: "kg",
    countryName: "Qirg'iziston",
    flag: "🇰🇬",
    x: 685,
    y: 145,
    time: "48-72 soat",
    status: "Yirik ulgurji eksport va distribyutsiya",
    labelPosition: "top",
  },
  {
    id: "osh",
    title: "O'sh",
    shortName: "O'sh",
    country: "kg",
    countryName: "Qirg'iziston",
    flag: "🇰🇬",
    x: 650,
    y: 270,
    time: "24-48 soat",
    status: "Janubiy viloyatlar eksport xabi",
    labelPosition: "bottom",
  },
];

export default function DeliveryGeography({ onOpenQuote }: DeliveryGeographyProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [hoveredPin, setHoveredPin] = useState<CityPin | null>(null);

  const activePins = PINS.filter((p) =>
    selectedCountry === "all" ? true : p.country === selectedCountry
  );

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <span className="text-xs font-bold text-[#C6893F] uppercase tracking-wider block mb-1">
            KWF logistika tarmog'i
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
            O'zbekiston va Markaziy Osiyo bo'ylab yetkazib berish geografiyasi
          </h2>
        </div>
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
          <Globe2 className="w-4 h-4 text-[#C6893F]" />
          <span>O'zbekiston • Tojikiston • Qirg'iziston • Eksport</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left: Ultimaps-style Vector Map Card */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl bg-white p-5 sm:p-7 shadow-xl border border-slate-200/90 overflow-hidden">
            
            {/* Top Bar: Country Filter Pills & Ultimaps Style Subtitle */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-3 border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setSelectedCountry("all")}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedCountry === "all"
                      ? "bg-[#C6893F] text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                  }`}
                >
                  Barchasi (Markaziy Osiyo)
                </button>
                <button
                  onClick={() => setSelectedCountry("uz")}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    selectedCountry === "uz"
                      ? "bg-[#C6893F] text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                  }`}
                >
                  <span>🇺🇿</span>
                  <span>O'zbekiston</span>
                </button>
                <button
                  onClick={() => setSelectedCountry("tj")}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    selectedCountry === "tj"
                      ? "bg-[#C6893F] text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                  }`}
                >
                  <span>🇹🇯</span>
                  <span>Tojikiston</span>
                </button>
                <button
                  onClick={() => setSelectedCountry("kg")}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    selectedCountry === "kg"
                      ? "bg-[#C6893F] text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                  }`}
                >
                  <span>🇰🇬</span>
                  <span>Qirg'iziston</span>
                </button>
              </div>

              <span className="text-[11px] font-semibold text-[#C6893F] bg-[#C6893F]/10 px-2.5 py-1 rounded-md border border-[#C6893F]/25 hidden sm:inline-block">
                KWF Markaziy Osiyo xaritasi
              </span>
            </div>

            {/* Vector Map Container */}
            <div className="relative w-full aspect-[16/9.5] my-2 bg-[#F8FAFC] rounded-xl border border-slate-200/80 overflow-hidden flex items-center justify-center">
              
              {/* Ultimaps Style Category Legend (Top Right) */}
              <div className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-xs p-2.5 rounded-lg border border-slate-200/90 shadow-sm text-[11px] space-y-1.5 pointer-events-none">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Hududiy maqom
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-xs bg-[#C6893F]"></span>
                  <span className="font-semibold text-slate-800">O'zbekiston (Asosiy xab)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-xs bg-[#D9944A]"></span>
                  <span className="font-medium text-slate-700">Tojikiston (Eksport)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-xs bg-[#E2A85C]"></span>
                  <span className="font-medium text-slate-700">Qirg'iziston (Eksport)</span>
                </div>
              </div>

              <svg
                viewBox="0 0 920 500"
                className="w-full h-full select-none"
                fill="none"
              >
                <defs>
                  {/* Subtle drop shadow for pins */}
                  <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* ============================================================== */}
                {/* SURROUNDING CONTEXT COUNTRIES (Paper style #F1F5F9) */}
                {/* ============================================================== */}
                
                {/* Kazakhstan (North) */}
                <path
                  d="M 50 140
                     L 165 95
                     L 245 115
                     L 325 125
                     L 405 145
                     L 475 145
                     L 515 135
                     L 545 155
                     L 585 135
                     L 645 105
                     L 700 90
                     L 765 85
                     L 850 100
                     L 890 105
                     L 890 20
                     L 50 20
                     Z"
                  fill="#F1F5F9"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                />
                <text x="450" y="70" fill="#94A3B8" fontSize="13" fontWeight="600" letterSpacing="4" fontFamily="sans-serif">QOZOG'ISTON</text>

                {/* Turkmenistan (South-West) */}
                <path
                  d="M 50 245
                     L 90 235
                     L 160 225
                     L 230 235
                     L 300 265
                     L 360 305
                     L 395 345
                     L 420 395
                     L 400 480
                     L 50 480
                     Z"
                  fill="#F1F5F9"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                />
                <text x="210" y="380" fill="#94A3B8" fontSize="12" fontWeight="600" letterSpacing="3" fontFamily="sans-serif">TURKMANISTON</text>

                {/* Afghanistan (South) */}
                <path
                  d="M 420 395
                     L 450 415
                     L 475 375
                     L 500 365
                     L 525 380
                     L 575 375
                     L 635 385
                     L 705 390
                     L 765 410
                     L 755 480
                     L 420 480
                     Z"
                  fill="#F1F5F9"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                />
                <text x="580" y="450" fill="#94A3B8" fontSize="12" fontWeight="600" letterSpacing="3" fontFamily="sans-serif">AFG'ONISTON</text>

                {/* Water bodies: Aral Sea */}
                <path
                  d="M 150 110 C 175 95 205 100 215 125 C 220 145 190 155 170 145 C 155 138 140 125 150 110 Z"
                  fill="#E0F2FE"
                  stroke="#7DD3FC"
                  strokeWidth="1"
                />
                <text x="180" y="130" fill="#0284C7" fontSize="8" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">Orol dengizi</text>

                {/* Water bodies: Issyk-Kul */}
                <path
                  d="M 745 145 C 765 140 785 145 790 155 C 790 165 770 170 750 165 C 735 160 735 150 745 145 Z"
                  fill="#E0F2FE"
                  stroke="#7DD3FC"
                  strokeWidth="1"
                />
                <text x="765" y="158" fill="#0284C7" fontSize="8" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">Issiqko'l</text>

                {/* ============================================================== */}
                {/* 3 HIGHLIGHTED CATEGORY REGIONS (Ultimaps style) */}
                {/* ============================================================== */}

                {/* 1. KYRGYZSTAN (Qirg'iziston) */}
                <path
                  d="M 545 200
                     L 585 170
                     L 640 135
                     L 695 120
                     L 760 115
                     L 845 130
                     L 835 180
                     L 785 210
                     L 730 240
                     L 695 315
                     L 625 310
                     L 585 280
                     L 615 255
                     L 655 255
                     L 675 240
                     L 645 225
                     L 595 220
                     L 555 215
                     Z"
                  fill={selectedCountry === "kg" || selectedCountry === "all" ? "#E2A85C" : "#E2E8F0"}
                  stroke={selectedCountry === "kg" ? "#B47228" : "#C6893F"}
                  strokeWidth={selectedCountry === "kg" ? "2.5" : "1.5"}
                  className="transition-all duration-300"
                />

                {/* 2. TAJIKISTAN (Tojikiston) */}
                <path
                  d="M 535 230
                     L 560 235
                     L 555 265
                     L 575 275
                     L 565 300
                     L 625 310
                     L 695 315
                     L 765 330
                     L 755 390
                     L 705 410
                     L 635 405
                     L 575 395
                     L 525 400
                     L 495 385
                     L 505 350
                     L 475 330
                     L 470 300
                     L 485 260
                     Z"
                  fill={selectedCountry === "tj" || selectedCountry === "all" ? "#D9944A" : "#E2E8F0"}
                  stroke={selectedCountry === "tj" ? "#9A5B1E" : "#B0742E"}
                  strokeWidth={selectedCountry === "tj" ? "2.5" : "1.5"}
                  className="transition-all duration-300"
                />

                {/* 3. UZBEKISTAN (O'zbekiston - Main) */}
                <path
                  d="M 60 180
                     L 165 130
                     L 245 150
                     L 325 160
                     L 405 180
                     L 475 180
                     L 515 170
                     L 545 190
                     L 555 215
                     L 595 220
                     L 645 225
                     L 675 240
                     L 655 255
                     L 615 255
                     L 565 250
                     L 535 230
                     L 485 260
                     L 470 300
                     L 465 340
                     L 475 390
                     L 450 430
                     L 420 410
                     L 395 360
                     L 360 320
                     L 300 280
                     L 230 250
                     L 160 240
                     L 90 250
                     L 50 230
                     Z"
                  fill={selectedCountry === "uz" || selectedCountry === "all" ? "#C6893F" : "#E2E8F0"}
                  stroke="#9A5B1E"
                  strokeWidth={selectedCountry === "uz" ? "2.5" : "1.8"}
                  className="transition-all duration-300"
                />

                {/* Regional Labels inside maps */}
                <text
                  x="260"
                  y="205"
                  fill="#FFFFFF"
                  fontSize="15"
                  fontWeight="800"
                  letterSpacing="3"
                  fontFamily="sans-serif"
                  opacity={selectedCountry === "uz" || selectedCountry === "all" ? "0.95" : "0.4"}
                >
                  O'ZBEKISTON
                </text>

                <text
                  x="710"
                  y="180"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="2"
                  fontFamily="sans-serif"
                  opacity={selectedCountry === "kg" || selectedCountry === "all" ? "0.95" : "0.4"}
                >
                  QIRG'IZISTON
                </text>

                <text
                  x="600"
                  y="360"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="2"
                  fontFamily="sans-serif"
                  opacity={selectedCountry === "tj" || selectedCountry === "all" ? "0.95" : "0.4"}
                >
                  TOJIKISTON
                </text>

                {/* ============================================================== */}
                {/* LOGISTICS ROUTE DASHED ARCS */}
                {/* ============================================================== */}
                {activePins.map((pin) => {
                  if (pin.isHQ) return null;
                  const isHovered = hoveredPin?.id === pin.id;

                  return (
                    <line
                      key={`line-${pin.id}`}
                      x1={520}
                      y1={205}
                      x2={pin.x}
                      y2={pin.y}
                      stroke={isHovered ? "#1E293B" : "#FFFFFF"}
                      strokeWidth={isHovered ? "2.5" : "1.5"}
                      strokeDasharray="4 4"
                      opacity={isHovered ? "0.95" : "0.65"}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* ============================================================== */}
                {/* ULTIMAPS STYLE LOCATION PINS */}
                {/* ============================================================== */}
                {activePins.map((pin) => {
                  const isHovered = hoveredPin?.id === pin.id;

                  return (
                    <g
                      key={pin.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPin(pin)}
                      onMouseLeave={() => setHoveredPin(null)}
                    >
                      {/* Teardrop / Circle Pin */}
                      {pin.isHQ ? (
                        // Tashkent Main Factory Pin
                        <g filter="url(#pinShadow)">
                          <circle cx={pin.x} cy={pin.y} r="14" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="2.5" />
                          <circle cx={pin.x} cy={pin.y} r="6" fill="#FFFFFF" />
                        </g>
                      ) : (
                        // Standard Hub Pin
                        <g filter="url(#pinShadow)">
                          <circle
                            cx={pin.x}
                            cy={pin.y}
                            r={isHovered ? "7" : "5.5"}
                            fill={isHovered ? "#1D4ED8" : "#1E293B"}
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            className="transition-all duration-200"
                          />
                        </g>
                      )}

                      {/* Pin Label Tag (Ultimaps style clean card tag) */}
                      <g transform={`translate(${pin.x}, ${pin.y})`}>
                        {pin.isHQ ? (
                          <g transform="translate(0, -22)">
                            <rect
                              x="-55"
                              y="-10"
                              width="110"
                              height="20"
                              rx="10"
                              fill="#1E293B"
                              stroke="#FFFFFF"
                              strokeWidth="1.5"
                              filter="url(#pinShadow)"
                            />
                            <text
                              x="0"
                              y="3.5"
                              fill="#FFFFFF"
                              fontSize="10"
                              fontWeight="bold"
                              textAnchor="middle"
                              fontFamily="sans-serif"
                            >
                              ★ Toshkent HQ
                            </text>
                          </g>
                        ) : (
                          <text
                            x={pin.labelPosition === "left" ? -10 : pin.labelPosition === "right" ? 10 : 0}
                            y={pin.labelPosition === "top" ? -10 : pin.labelPosition === "bottom" ? 16 : 4}
                            textAnchor={pin.labelPosition === "left" ? "end" : pin.labelPosition === "right" ? "start" : "middle"}
                            fill={isHovered ? "#0F172A" : "#1E293B"}
                            fontSize={isHovered ? "11" : "10"}
                            fontWeight={isHovered ? "bold" : "600"}
                            fontFamily="sans-serif"
                            className="transition-all duration-200"
                          >
                            {pin.title}
                          </text>
                        )}
                      </g>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Hover Tooltip */}
              {hoveredPin && (
                <div className="absolute bottom-3 left-3 bg-slate-900/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-700 shadow-xl text-xs space-y-1 pointer-events-none animate-in fade-in zoom-in-95 duration-200 text-white">
                  <div className="flex items-center gap-1.5 font-bold">
                    <span>{hoveredPin.flag}</span>
                    <span>{hoveredPin.title}</span>
                  </div>
                  <div className="text-[11px] text-slate-300">{hoveredPin.status}</div>
                  <div className="text-[11px] text-[#E2A85C] font-bold flex items-center gap-1 pt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>Yetkazish: {hoveredPin.time}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Regional Delivery Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3 pt-4 border-t border-slate-100">
              {activePins.slice(0, 6).map((pin) => (
                <div
                  key={pin.id}
                  onMouseEnter={() => setHoveredPin(pin)}
                  onMouseLeave={() => setHoveredPin(null)}
                  className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                    pin.isHQ
                      ? "bg-[#1D4ED8]/10 border-[#1D4ED8]/30 shadow-xs"
                      : hoveredPin?.id === pin.id
                      ? "bg-slate-100 border-slate-300"
                      : "bg-slate-50 hover:bg-slate-100/80 border-slate-200/80"
                  }`}
                >
                  <div className="text-[11px] font-bold text-slate-800 truncate flex items-center gap-1">
                    <span>{pin.flag}</span>
                    <span className="truncate">{pin.shortName}</span>
                  </div>
                  <div className="text-[10px] text-[#C6893F] font-semibold flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{pin.time}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right: Logistics Description & Delivery CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900 leading-tight">
              O'zbekiston va Markaziy Osiyo bo'ylab uzluksiz logistika
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Partiya hajmi va korxonangiz yoki omboringiz masofasidan qat'i nazar, barcha logistika hamda Markaziy Osiyo bo'yicha eksport vazifalarini to'liq o'z zimmamizga olamiz.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              "KARTON WORKS" MCHJ Toshkent shahri va O'zbekistonning barcha viloyatlariga muntazam yuk yetkazish, shuningdek Tojikiston (Dushanbe, Xo'jand) va Qirg'iziston (Bishkek, O'sh) davlatlariga to'g'ridan-to'g'ri eksport qilishni ta'minlaydi.
            </p>
          </div>

          {/* Key Advantages List */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center space-x-3 text-xs sm:text-[13px] text-slate-700 font-semibold">
              <div className="w-7 h-7 rounded-md bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <span>Shaxsiy yuk avtomobillari parki (20 tonnagacha)</span>
            </div>

            <div className="flex items-center space-x-3 text-xs sm:text-[13px] text-slate-700 font-semibold">
              <div className="w-7 h-7 rounded-md bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span>Toshkent va viloyatlar bo'yicha 24–48 soat ichida</span>
            </div>

            <div className="flex items-center space-x-3 text-xs sm:text-[13px] text-slate-700 font-semibold">
              <div className="w-7 h-7 rounded-md bg-[#C6893F]/15 text-[#C6893F] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Tojikiston va Qirg'izistonga to'liq eksport hujjatlari va xavfsiz qadoqlash</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="border-2 border-[#C6893F] bg-[#C6893F] hover:bg-[#B37830] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg transition-colors cursor-pointer inline-flex items-center space-x-2 shadow-md active:scale-95"
            >
              <span>Yetkazib berish shartlarini bilish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

