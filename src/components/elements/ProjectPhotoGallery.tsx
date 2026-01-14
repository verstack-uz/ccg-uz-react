import { ImageGallery } from "@/components/image-gallery";
import { useTranslation } from "react-i18next";

interface GalleryProps {
  imageUrls: string[];
}

export default function ProjectPhotoGallery(props: GalleryProps) {
  const { t } = useTranslation();

  return (
    <ImageGallery
      images={props.imageUrls.map((url) => ({
        src: url,
        alt: t("Project photo"),
      }))}
    />
  );
}
