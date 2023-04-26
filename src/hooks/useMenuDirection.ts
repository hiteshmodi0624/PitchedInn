import { useState, useEffect, RefObject } from 'react';

function useMenuDirection(ref: RefObject<HTMLElement>): string {
  const [menuDirection, setMenuDirection] = useState<string>('down');

  useEffect(() => {
    const updateMenuDirection = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      if (rect.y + rect.height + 50 > screenHeight ) {
        setMenuDirection('up');
      } else {
        setMenuDirection('down');
      }
    };

    updateMenuDirection();
    document.addEventListener('scrollend', updateMenuDirection, true);

    return () => {
      document.removeEventListener('scrollend', updateMenuDirection, true);
    };
  }, [ref]);

  return menuDirection;
}

export default useMenuDirection;
