import { useEffect } from 'react';

/** Adds the `is-in` class to every `[data-reveal]` element as it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    nodes.forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight * 0.95) {
        n.classList.add('is-in');
      } else {
        io.observe(n);
      }
    });
    return () => io.disconnect();
  }, []);
}
