import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Projects from "@/lib/data/projects";

export default function HomePage() {
  const { t } = useTranslation();
  const projects = Projects.getInstance();

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
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 p-0">
                  <CardContent className="p-0">
                    <div className="aspect-square relative bg-linear-to-br from-gray-100 to-gray-200">
                      <img
                        src={project.imageUrls[0]}
                        alt={`Project ${project.id} Image`}
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
