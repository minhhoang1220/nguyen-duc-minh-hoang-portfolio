import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { AssetImage } from "../data/portfolio";

type ArtifactLightboxProps = {
  image: AssetImage | null;
  closeLabel: string;
  zoomInLabel: string;
  zoomOutLabel: string;
  resetZoomLabel: string;
  loadingLabel: string;
  onClose: () => void;
};

type Point = {
  x: number;
  y: number;
};

const minScale = 1;
const maxScale = 4;
const zoomStep = 0.35;

const clampScale = (value: number) => Math.min(maxScale, Math.max(minScale, value));

function ArtifactLightbox({
  image,
  closeLabel,
  zoomInLabel,
  zoomOutLabel,
  resetZoomLabel,
  loadingLabel,
  onClose,
}: ArtifactLightboxProps) {
  const [scale, setScale] = useState(minScale);
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<Element | null>(null);
  const dragStartRef = useRef<Point | null>(null);
  const dragOriginRef = useRef<Point>({ x: 0, y: 0 });
  const activePointersRef = useRef<Map<number, Point>>(new Map());
  const lastPinchDistanceRef = useRef<number | null>(null);

  const resetZoom = useCallback(() => {
    setScale(minScale);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
    activePointersRef.current.clear();
    lastPinchDistanceRef.current = null;
  }, []);

  const zoomBy = useCallback(
    (delta: number) => {
      setScale((currentScale) => {
        const nextScale = clampScale(Number((currentScale + delta).toFixed(2)));

        if (nextScale === minScale) {
          setPosition({ x: 0, y: 0 });
        }

        return nextScale;
      });
    },
    [],
  );

  useEffect(() => {
    resetZoom();
    setIsImageLoaded(false);
  }, [image?.src, resetZoom]);

  useEffect(() => {
    if (!image) {
      return;
    }

    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const focusControl = window.setTimeout(() => {
      const firstControl = dialogRef.current?.querySelector<HTMLElement>("[data-autofocus='true']");
      firstControl?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoomBy(zoomStep);
        return;
      }

      if (event.key === "-") {
        event.preventDefault();
        zoomBy(-zoomStep);
        return;
      }

      if (event.key === "0") {
        event.preventDefault();
        resetZoom();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusControl);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      const previousFocus = previousFocusRef.current;

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [image, onClose, resetZoom, zoomBy]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    activePointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    event.currentTarget.setPointerCapture(event.pointerId);

    if (activePointersRef.current.size === 2) {
      const [firstPointer, secondPointer] = Array.from(activePointersRef.current.values());
      lastPinchDistanceRef.current = Math.hypot(firstPointer.x - secondPointer.x, firstPointer.y - secondPointer.y);
      setIsDragging(false);
      return;
    }

    if (scale <= minScale) {
      return;
    }

    setIsDragging(true);
    dragStartRef.current = { x: event.clientX, y: event.clientY };
    dragOriginRef.current = position;
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!activePointersRef.current.has(event.pointerId)) {
      return;
    }

    activePointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (activePointersRef.current.size === 2) {
      const [firstPointer, secondPointer] = Array.from(activePointersRef.current.values());
      const nextDistance = Math.hypot(firstPointer.x - secondPointer.x, firstPointer.y - secondPointer.y);
      const lastDistance = lastPinchDistanceRef.current;

      if (lastDistance && nextDistance > 0) {
        setScale((currentScale) => clampScale(currentScale * (nextDistance / lastDistance)));
      }

      lastPinchDistanceRef.current = nextDistance;
      return;
    }

    if (!isDragging || !dragStartRef.current || scale <= minScale) {
      return;
    }

    setPosition({
      x: dragOriginRef.current.x + event.clientX - dragStartRef.current.x,
      y: dragOriginRef.current.y + event.clientY - dragStartRef.current.y,
    });
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    activePointersRef.current.delete(event.pointerId);

    if (activePointersRef.current.size < 2) {
      lastPinchDistanceRef.current = null;
    }

    if (activePointersRef.current.size === 0) {
      setIsDragging(false);
      dragStartRef.current = null;
    }
  };

  if (!image) {
    return null;
  }

  const zoomPercentage = `${Math.round(scale * 100)}%`;
  const previewSrc = image.previewSrc && image.previewSrc !== image.src ? image.previewSrc : undefined;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-navy-night/88 p-3 backdrop-blur-sm md:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="artifact-lightbox-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div ref={dialogRef} className="relative flex max-h-[94vh] w-full max-w-[1500px] flex-col rounded-lg border border-cream/20 bg-card">
        <div className="flex flex-col gap-4 border-b border-line p-4 md:flex-row md:items-start md:justify-between md:p-5">
          <div className="min-w-0">
            <p id="artifact-lightbox-title" className="text-base font-semibold text-navy md:text-xl">
              {image.title}
            </p>
            {image.caption ? <p className="mt-1 max-w-3xl text-sm leading-6 text-muted">{image.caption}</p> : null}
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <button
              type="button"
              data-lightbox-control="zoom-out"
              className="min-h-10 rounded-md border border-line px-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              aria-label={zoomOutLabel}
              onClick={() => zoomBy(-zoomStep)}
              disabled={scale <= minScale}
            >
              -
            </button>
            <span className="min-w-14 text-center text-xs font-semibold text-muted" aria-live="polite">
              {zoomPercentage}
            </span>
            <button
              type="button"
              data-lightbox-control="zoom-in"
              className="min-h-10 rounded-md border border-line px-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              aria-label={zoomInLabel}
              onClick={() => zoomBy(zoomStep)}
              disabled={scale >= maxScale}
            >
              +
            </button>
            <button
              type="button"
              data-lightbox-control="reset"
              className="min-h-10 rounded-md border border-line px-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              aria-label={resetZoomLabel}
              onClick={resetZoom}
            >
              {resetZoomLabel}
            </button>
            <button
              type="button"
              data-autofocus="true"
              className="min-h-10 rounded-md border border-navy px-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-cream focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              aria-label={closeLabel}
              onClick={onClose}
            >
              {closeLabel}
            </button>
          </div>
        </div>
        <div
          className={`relative min-h-0 h-[68vh] overflow-hidden bg-cream md:h-[72vh] ${
            scale > minScale ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
          }`}
          style={{ touchAction: scale > minScale ? "none" : "manipulation" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          <div className="flex h-full w-full items-center justify-center p-3 md:p-6">
            {!isImageLoaded ? (
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <span className="rounded-md border border-line bg-card px-4 py-2 text-sm font-semibold text-muted shadow-minimal">
                  {loadingLabel}
                </span>
              </div>
            ) : null}
            {previewSrc && !isImageLoaded ? (
              <img
                src={previewSrc}
                alt=""
                className="absolute h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] select-none object-contain opacity-70 blur-[1px] md:h-[calc(100%-3rem)] md:w-[calc(100%-3rem)]"
                draggable={false}
                decoding="async"
                aria-hidden="true"
                style={{
                  transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
                  transition: isDragging ? "none" : "transform 180ms ease-out",
                  transformOrigin: "center center",
                }}
              />
            ) : null}
            <img
              src={image.src}
              alt={image.alt}
              className={`max-h-full max-w-full select-none object-contain transition-opacity duration-200 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
              decoding="async"
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setIsImageLoaded(true)}
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
                transition: isDragging ? "none" : "transform 180ms ease-out",
                transformOrigin: "center center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtifactLightbox;
