import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports a fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      return; // Do not load custom cursor on mobile/touch screens
    }

    const updateCoordinates = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCoordinates);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCoordinates);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Ring - Brand Emerald Accent */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 will-change-[left,top,width,height] ${
          isHovered
            ? 'w-12 h-12 bg-emerald-400/20 border-2 border-emerald-400 scale-110 shadow-[0_0_20px_rgba(34,197,94,0.4)] backdrop-blur-[1px]'
            : 'w-8 h-8 border border-emerald-500/40 bg-emerald-500/5'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'left 0.1s cubic-bezier(0.25, 1, 0.5, 1), top 0.1s cubic-bezier(0.25, 1, 0.5, 1), width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s, transform 0.2s',
        }}
      />
      
      {/* Inner Locked Dot */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full bg-emerald-500 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out will-change-[left,top] ${
          isHovered ? 'w-2 h-2 scale-75 opacity-80' : 'w-2 h-2'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
