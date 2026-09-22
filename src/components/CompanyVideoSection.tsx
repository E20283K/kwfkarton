import { useState } from "react";
import { Play } from "lucide-react";

interface CompanyVideoSectionProps {
  videoId?: string;
  title?: string;
}

export default function CompanyVideoSection({
  videoId = "dB00WnCtxcQ",
  title = "Ishlab chiqarish jarayoni",
}: CompanyVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // High quality YouTube thumbnail
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12">
      {/* Minimalist Section Header — exactly matching site pattern */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6893F] tracking-tight">
          {title}
        </h2>
      </div>

      {/* Video Container (16:9 Aspect Ratio) */}
      <div className="relative w-full aspect-16/9 bg-neutral-950 rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-slate-200/90 group">
        {isPlaying ? (
          <iframe
            className="w-full h-full border-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Karton Works Factory - Ishlab chiqarish jarayoni"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center select-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsPlaying(true);
              }
            }}
            aria-label="Videoni tomosha qilish"
          >
            {/* Poster Thumbnail Image */}
            <img
              src={thumbnailUrl}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = fallbackThumbnailUrl;
              }}
              alt="Karton Works Factory ishlab chiqarish"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-95"
              loading="lazy"
            />

            {/* Dark Gradient Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            {/* Minimalist Play Button */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C6893F] hover:bg-[#B37830] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
