import { useState, useEffect } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
  assets?: string[];
  minDisplayTime?: number;
}

const DEFAULT_ASSETS = [
  '/hero.png',
  '/values/engineering.svg',
  '/values/economy.svg',
  '/values/speed.svg',
  '/values/white.svg',
  '/values/srp.svg',
];

export default function LoadingScreen({
  onComplete,
  assets,
  minDisplayTime = 1000,
}: LoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const assetsToPreload = assets && assets.length > 0 ? assets : DEFAULT_ASSETS;

    let hasCompleted = false;
    const startTime = Date.now();

    const finishLoading = () => {
      if (hasCompleted) return;
      hasCompleted = true;

      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 400); // Graceful 400ms fade-out
      }, remainingTime);
    };

    let loadedCount = 0;
    const total = assetsToPreload.length;

    if (total === 0) {
      finishLoading();
      return;
    }

    const handleAssetLoad = () => {
      loadedCount++;
      if (loadedCount >= total) {
        finishLoading();
      }
    };

    assetsToPreload.forEach((src) => {
      const img = new Image();
      let resolved = false;

      const onDone = () => {
        if (resolved) return;
        resolved = true;
        if ('decode' in img) {
          img.decode().then(handleAssetLoad).catch(handleAssetLoad);
        } else {
          handleAssetLoad();
        }
      };

      img.onload = onDone;
      img.onerror = () => {
        if (resolved) return;
        resolved = true;
        handleAssetLoad();
      };
      img.src = src;

      if (img.complete) {
        onDone();
      }
    });

    // Fallback: If network is slow, proceed after 8 seconds
    const fallbackTimeout = setTimeout(finishLoading, 8000);

    return () => clearTimeout(fallbackTimeout);
  }, [onComplete, assets, minDisplayTime]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#F8F9FA] flex flex-col items-center justify-center transition-opacity duration-400 ease-out select-none ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Bouncing Logo Icon changing color from default to blue */}
        <div className="animate-loader-bounce">
          <Logo iconOnly variant="pulse" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
        </div>

        {/* Dynamic floor shadow synchronized with the bounce */}
        <div className="mt-2 w-14 sm:w-16 h-2 bg-slate-400/25 rounded-[100%] blur-[2px] animate-loader-shadow" />
      </div>
    </div>
  );
}
