import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's an anchor (e.g. #catalog), scroll smoothly to the element
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
        return;
      }
    }
    // Otherwise scroll to top on route transition
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
