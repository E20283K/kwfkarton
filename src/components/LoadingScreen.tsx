import { useState, useEffect } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [variant, setVariant] = useState<'default' | 'blue'>('default');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cross-fade animation for the logo
    const interval = setInterval(() => {
      setVariant((v) => (v === 'default' ? 'blue' : 'default'));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Preload critical and requested assets
    const portfolioImages = Array.from({ length: 54 }, (_, i) => {
      const num = i + 1;
      const pad = String(num).padStart(2, '0');
      const ext = num <= 5 ? 'png' : 'jpg';
      return `/portfolio/kwf-portfolio-${pad}.${ext}`;
    });

    const assetsToPreload = [
      '/hero.png',
      '/values/engineering.svg',
      '/values/economy.svg',
      '/values/speed.svg',
      '/values/white.svg',
      '/values/srp.svg',
      ...portfolioImages,
    ];

    let loadedCount = 0;
    const total = assetsToPreload.length;

    const handleAssetLoad = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / total) * 100));
      
      if (loadedCount >= total) {
        // Small delay to ensure smooth transition at 100%
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    };

    assetsToPreload.forEach((src) => {
      const img = new Image();
      img.onload = handleAssetLoad;
      img.onerror = handleAssetLoad; // Proceed even if an image fails to load
      img.src = src;
    });

    // Fallback: If network is extremely slow, allow continuing after 15 seconds
    const fallbackTimeout = setTimeout(() => {
      onComplete();
    }, 15000);

    return () => clearTimeout(fallbackTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#F8F9FA] flex flex-col items-center justify-center">
      {/* Animated Logo */}
      <div className="w-48 sm:w-64 md:w-80 relative flex items-center justify-center">
        <Logo variant={variant} className="w-full h-auto" />
      </div>

      {/* Progress Bar Container */}
      <div className="mt-12 w-48 sm:w-64 h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#C6893F] transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 text-[#C6893F] font-bold tracking-widest uppercase text-xs sm:text-sm font-mono text-center">
        <span>{progress}%</span>
      </div>
    </div>
  );
}
