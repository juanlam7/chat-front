import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    setMatches(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};
