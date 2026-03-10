import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const stringifiedSectionIds = JSON.stringify(sectionIds);

  useEffect(() => {
    const ids = JSON.parse(stringifiedSectionIds);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    ids.forEach((id: string) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      ids.forEach((id: string) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [stringifiedSectionIds]);

  return activeSection;
}