import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className={"mt-8 md:mt-0"}>
      <h1 className={"text-2xl md:text-4xl text-center tracking-normal"}>
        {t("Current projects").toUpperCase()}
      </h1>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1500,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full mt-8"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square relative bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <img
                        src={`/path-to-image-${index + 1}.jpg`}
                        alt={`Project ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
