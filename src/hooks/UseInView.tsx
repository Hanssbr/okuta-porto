import { useEffect, useRef, useState } from "react";

/**
 * Custom hook untuk mendeteksi apakah elemen sudah terlihat di layar
 * @param options konfigurasi IntersectionObserver (opsional)
 */
export const useInView = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // stop observing setelah kelihatan
      }
    }, options);

    observer.observe(currentElement);

    // cleanup saat unmount
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [options]);

  return { ref, isVisible };
};
