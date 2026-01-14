import { LazyImage } from "@/components/lazy-image";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export function ImageGallery(props: ImageGalleryProps) {
  const numColumns = 3;

  // Distribute images across columns
  const columns: { src: string; alt: string }[][] = Array.from(
    { length: numColumns },
    () => []
  );

  props.images?.forEach((image, index) => {
    const columnIndex = index % numColumns;
    columns[columnIndex].push(image);
  });

  return (
    <div className="relative flex w-full flex-col items-center justify-center px-4">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {columns.map((columnImages, columnIndex) => (
          <div className="grid gap-4 md:gap-6" key={columnIndex}>
            {columnImages.map((image, imageIndex) => (
              <LazyImage
                alt={image.alt}
                fallback={`https://placehold.co/200x200/`}
                inView={true}
                ratio={1}
                src={image.src}
                key={`${columnIndex}-${imageIndex}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
