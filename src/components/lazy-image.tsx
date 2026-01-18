import ImageViewer from "@/components/commerce-ui/image-viewer-basic";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import React from "react";

type LazyImageProps = {
  alt: string;
  src: string;
  className?: string;
  AspectRatioClassName?: string;
  /** URL of the fallback image. default: undefined */
  fallback?: string;
  /** The ratio of the image. */
  ratio: number;
  /** Whether the image should only load when it is in view. default: false */
  inView?: boolean;
  /** Zoom in when the image is clicked. default: false */
  zoom?: boolean;
};

export function LazyImage({
  alt,
  src,
  ratio,
  fallback,
  inView = false,
  className,
  AspectRatioClassName,
  zoom = false,
}: LazyImageProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [imgSrc, setImgSrc] = React.useState<string | undefined>(
    inView ? undefined : src,
  );
  const [isLoading, setIsLoading] = React.useState(true);

  const handleError = () => {
    if (fallback) {
      setImgSrc(fallback);
    }
    setIsLoading(false);
  };

  const handleLoad = React.useCallback(() => {
    setIsLoading(false);
  }, []);

  // Load image only when inView
  React.useEffect(() => {
    if (inView && isInView && !imgSrc) {
      setImgSrc(src);
    }
  }, [inView, isInView, src, imgSrc]);

  // Handle cached images instantly
  React.useEffect(() => {
    if (imgRef.current?.complete) {
      handleLoad();
    }
  }, [handleLoad]);

  return (
    <AspectRatio
      className={cn(
        "relative size-full overflow-hidden rounded-lg border bg-accent/30",
        AspectRatioClassName,
      )}
      ratio={ratio}
      ref={ref}
    >
      {imgSrc &&
        (zoom ? (
          <ImageViewer thumbnailUrl={imgSrc} imageUrl={imgSrc} />
        ) : (
          <img
            alt={alt}
            className={cn(
              "size-full rounded-md object-cover transition-opacity duration-500",
              isLoading ? "opacity-0" : "opacity-100",
              className,
            )}
            decoding="async"
            fetchPriority={inView ? "high" : "low"}
            loading="lazy"
            onError={handleError}
            onLoad={handleLoad}
            ref={imgRef}
            role="presentation" // Changed from "img" to "presentation" since it's decorative
            src={imgSrc}
          />
        ))}
    </AspectRatio>
  );
}
