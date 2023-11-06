import { RefObject, useEffect, useState } from "react";

export default function useMenuAtu(el: RefObject<HTMLElement>) {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  const handleResize = () => {
    if (el.current) {
      setSize({
        width: el.current.clientWidth,
        height: el.current.clientHeight
      });
    }
  };

  useEffect(() => {
    const element = el.current;
    if (element) {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(element);
      return () => {
        resizeObserver.unobserve(element);
      };
    }
  }, [el]);

  return size;
}

