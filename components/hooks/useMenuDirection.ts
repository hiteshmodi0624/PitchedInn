import { useState, useEffect, RefObject, useCallback } from 'react';

function useMenuDirection(ref: RefObject<HTMLElement>): string {
  const [menuDirection, setMenuDirection] = useState<string>('top-full');

  const updateMenuDirection =useCallback(()=> {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    if (rect.y+rect.height + 100 > screenHeight) {
      setMenuDirection('bottom-full');
    } else {
      setMenuDirection('top-full');
    }
  },[ref])
  
  useEffect(() => {
    updateMenuDirection();
  }, [updateMenuDirection]);
  

  return menuDirection;
}

export default useMenuDirection;
