import { useState, useEffect } from 'react';

/**
 * Custom hook to monitor window scroll position.
 * Provides isScrolled and isPastHero states to control navbar visibility.
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);
      // Considered past hero once user scrolls down ~280px (entering the next section)
      setIsPastHero(currentScrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled, isPastHero };
}
