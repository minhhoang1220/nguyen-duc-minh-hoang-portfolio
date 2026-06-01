const preloadedImages = new Set<string>();

export function preloadImage(src?: string) {
  if (!src || preloadedImages.has(src) || typeof window === "undefined") {
    return;
  }

  preloadedImages.add(src);
  const image = new Image();
  image.decoding = "async";
  image.src = src;
}
