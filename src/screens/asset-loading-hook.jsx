import { useEffect, useState } from "react";

export default function useImagePreloader(imageUrls) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function preloadImages() {
      setLoaded(false);

      await Promise.all(
        imageUrls.map(async (url) => {
          const img = new Image();
          img.src = url;

          try {
            // Wait until the image finishes loading.
            await new Promise((resolve, reject) => {
              if (img.complete) {
                img.naturalWidth > 0 ? resolve() : reject();
                return;
              }

              img.onload = resolve;
              img.onerror = reject;
            });

            // Wait until the image is decoded and ready to render.
            if (img.decode) {
              await img.decode();
            }
          } catch {
            console.error("Failed to preload image:", url);
          }
        }),
      );

      if (!cancelled) {
        setLoaded(true);
      }
    }

    preloadImages();

    return () => {
      cancelled = true;
    };
  }, [imageUrls]);

  return loaded;
}
