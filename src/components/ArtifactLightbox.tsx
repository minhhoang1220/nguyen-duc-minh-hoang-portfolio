import { useEffect } from "react";
import type { AssetImage } from "../data/portfolio";

type ArtifactLightboxProps = {
  image: AssetImage | null;
  closeLabel: string;
  onClose: () => void;
};

function ArtifactLightbox({ image, closeLabel, onClose }: ArtifactLightboxProps) {
  useEffect(() => {
    if (!image) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-navy-night/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="artifact-lightbox-title"
      onMouseDown={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col border border-cream/20 bg-card"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line p-4 md:p-5">
          <div>
            <p id="artifact-lightbox-title" className="text-base font-semibold text-navy md:text-xl">
              {image.title}
            </p>
            {image.caption ? <p className="mt-1 text-sm leading-6 text-muted">{image.caption}</p> : null}
          </div>
          <button
            type="button"
            className="shrink-0 border border-navy px-3 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
            aria-label={closeLabel}
            onClick={onClose}
          >
            {closeLabel}
          </button>
        </div>
        <div className="min-h-0 overflow-auto bg-cream p-3 md:p-5">
          <img src={image.src} alt={image.alt} className="mx-auto max-h-[72vh] w-auto max-w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default ArtifactLightbox;
