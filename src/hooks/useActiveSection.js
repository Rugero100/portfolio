import { useState, useEffect } from "react";

// Tracks which section is currently in view for navbar highlighting
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
