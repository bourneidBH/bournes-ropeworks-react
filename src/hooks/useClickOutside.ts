import { useEffect, useState } from "react";
import type { RefObject } from "react";

export default function useClickOutside( ref: RefObject<HTMLElement>, callback: () => void ) {
  const [isOpen, setIsOpen] = useState(open)
  useEffect(()=> {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        console.log('running', callback)
        callback()
      }
    }
  
    document.addEventListener('click', handleClick);
    document.addEventListener('touchend', handleClick);
  
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchend', handleClick);
    }

  }, [ref])
}
