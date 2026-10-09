import { useEffect, useState } from "react";

export default function useImagePreloader(imageUrls) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function preloadImages() {
      await Promise.all(
        imageUrls.map(
          (url) =>
            new Promise((resolve) => {
              const img = new Image();

              img.onload = resolve;
              img.onerror = resolve; // Don't block forever if one fails
              img.src = url;

              if (img.complete) resolve();
            }),
        ),
      );

      if (!cancelled) setLoaded(true);
    }

    preloadImages();

    return () => {
      cancelled = true;
    };
  }, [imageUrls]);

  return loaded;
}
