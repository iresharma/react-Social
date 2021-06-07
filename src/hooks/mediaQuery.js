import { useEffect, useState } from "react";

// Small (smaller than 640px)
// Medium (641px to 1007px)
// Large (1008px and larger)

export const useMediaQuery = () => {
  const [windowSize, setWindowSize] = useState(undefined);
  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (windowSize < 640) return [true, false, false];
  if (windowSize < 1007) return [false, true, false];
  return [false, false, true];
};
