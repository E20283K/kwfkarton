import { useEffect, useState, useRef } from "react";
import { ExternalLink, Calendar, Heart, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

// =======================================================================
// BEHOLD.SO INTEGRATION CONFIGURATION
// =======================================================================
export const BEHOLD_FEED_ID = "y4zoa4Ix4HLp316bICUQ";

interface InstagramPost {
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
  timestamp?: string;
  likes?: number;
  comments?: number;
}

const DEFAULT_POSTS: InstagramPost[] = [
  {
    id: "1",
    caption: "Qadoq tanlashda qaysi omil siz uchun eng muhimi? KartonWorks har bir biznesning o'ziga xos talablarini o'rganadi. BCT va ECT ko'rsatkichlari orqali maksimal mustahkamlikni hisoblaymiz.",
    mediaUrl: "/hero_factory.png",
    permalink: "https://instagram.com/kwf_uz",
    timestamp: "11 Sentabr, 2026",
    likes: 12,
    comments: 2,
  },
  {
    id: "2",
    caption: "Vitrinada mahsulot o'zini o'zi sotishi uchun nima kerak? To'g'ri ishlab chiqilgan gofrokarton qadoq savdo hajmiga bevosita ta'sir ko'rsatadi.",
    mediaUrl: "/assets/upaksnab/cat_4_lotki.png",
    permalink: "https://instagram.com/kwf_uz",
    timestamp: "6 Sentabr, 2026",
    likes: 18,
    comments: 4,
  },
  {
    id: "3",
    caption: "Mustaqillikning 35 yilligi muborak bo'lsin! 35 yil — mustaqil rivojlanish, mehnat va yaratuvchanlik yili. Karton Works Factory jamoasi barcha hamkorlarini tabriklaydi.",
    mediaUrl: "/testing_laboratory.png",
    permalink: "https://instagram.com/kwf_uz",
    timestamp: "1 Sentabr, 2026",
    likes: 25,
    comments: 3,
  },
  {
    id: "4",
    caption: "Raqibingiz qadoqchi tanlashda 'omadga' tayanmoqda. Siz esa — BCT va ECT raqamlariga. KWF da har bir quti laboratoriya sinovidan o'tadi.",
    mediaUrl: "/premium_packaging.png",
    permalink: "https://instagram.com/kwf_uz",
    timestamp: "28 Avgust, 2026",
    likes: 15,
    comments: 1,
  },
  {
    id: "5",
    caption: "Uzoq tranzit yo'llarida mahsulotingizning 100% butun yetib borishini kafolatlaymiz. Har bir palet standartlar asosida zich o'raladi.",
    mediaUrl: "/hero_factory.png",
    permalink: "https://instagram.com/kwf_uz",
    timestamp: "26 Avgust, 2026",
    likes: 20,
    comments: 2,
  },
  {
    id: "6",
    caption: "O'zbekistonning barcha hududlariga sifatli gofrotara mahsulotlarini tezkor va o'z vaqtida yetkazib berish xizmati yo'lga qo'yilgan.",
    mediaUrl: "/assets/upaksnab/cat_4_lotki.png",
    permalink: "https://instagram.com/kwf_uz",
    timestamp: "20 Avgust, 2026",
    likes: 19,
    comments: 3,
  },
];

export default function NewsSection() {
  const [posts, setPosts] = useState<InstagramPost[]>(DEFAULT_POSTS);
  const [profileUrl, setProfileUrl] = useState<string>("https://instagram.com/kwf_uz");
  const [username, setUsername] = useState<string>("kwf_uz");

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!BEHOLD_FEED_ID) return;

    fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;

        // Support both Behold object schema ({ username, posts: [...] }) and raw array schema
        const rawPosts = Array.isArray(data) ? data : data.posts;
        if (data.username) {
          setUsername(data.username);
          setProfileUrl(`https://instagram.com/${data.username}`);
        }

        if (Array.isArray(rawPosts) && rawPosts.length > 0) {
          const mapped: InstagramPost[] = rawPosts.map((p: any) => ({
            id: p.id || Math.random().toString(),
            caption: p.prunedCaption || p.caption || "Karton Works Factory yangiliklari",
            // Use Behold CDN high-res image (1080x1440 original ratio), fallback to medium or direct url
            mediaUrl:
              p.sizes?.large?.mediaUrl ||
              p.sizes?.full?.mediaUrl ||
              p.sizes?.medium?.mediaUrl ||
              p.mediaUrl ||
              p.thumbnailUrl ||
              "/hero_factory.png",
            permalink: p.permalink || `https://instagram.com/${data.username || "kwf_uz"}`,
            timestamp: p.timestamp
              ? new Date(p.timestamp).toLocaleDateString("uz-UZ", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : undefined,
            likes: typeof p.likeCount === "number" ? p.likeCount : undefined,
            comments: typeof p.commentsCount === "number" ? p.commentsCount : undefined,
          }));
          setPosts(mapped);
        }
      })
      .catch((err) => {
        console.warn("Could not load Instagram feed from Behold:", err);
      });
  }, []);

  return (
    <section id="news" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-14 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
            Yangiliklar
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-xl">
            Karton Works Factory hayotidagi so'nggi yangiliklar, ishlab chiqarish jarayonlari va yangi mahsulotlarimiz
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          {/* Slider Navigation Arrow Buttons */}
          <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-lg transition-all ${
                canScrollLeft
                  ? "bg-white text-slate-800 shadow-xs hover:bg-slate-50 cursor-pointer active:scale-95"
                  : "text-slate-300 cursor-not-allowed"
              }`}
              aria-label="Oldingi yangiliklar"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-lg transition-all ${
                canScrollRight
                  ? "bg-white text-slate-800 shadow-xs hover:bg-slate-50 cursor-pointer active:scale-95"
                  : "text-slate-300 cursor-not-allowed"
              }`}
              aria-label="Keyingi yangiliklar"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Instagram Profile Action Button */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@{username}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Carousel (3-4 posts visible on screen, larger size) */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => (
          <article
            key={post.id}
            className="snap-start shrink-0 w-[270px] sm:w-[300px] lg:w-[325px] bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Post Image Container (1080x1440 = 3:4 portrait ratio) */}
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 select-none">
              <img
                src={post.mediaUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Instagram Floating Icon Badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center shadow-md">
                <InstagramIcon className="w-4 h-4" />
              </div>

              {/* Hover Overlay with engagement metrics */}
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white space-x-4"
                aria-label="Instagram'da ochish"
              >
                {post.likes !== undefined && (
                  <div className="flex items-center space-x-1.5 font-bold text-sm">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                )}
                {post.comments !== undefined && (
                  <div className="flex items-center space-x-1.5 font-bold text-sm">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                )}
              </a>
            </div>

            {/* Post Caption & Details */}
            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
              <div>
                {post.timestamp && (
                  <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-slate-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.timestamp}</span>
                  </div>
                )}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed line-clamp-3 font-medium">
                  {post.caption}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#C6893F] group-hover:text-[#B37830] inline-flex items-center space-x-1 hover:underline"
                >
                  <span>Batafsil o'qish</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Instagram
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
