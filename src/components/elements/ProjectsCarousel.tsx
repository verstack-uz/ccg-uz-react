import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Projects from "@/lib/data/projects";
import i18, { LanguageCode } from "@/i18n";
import AppPaths from "@/routes/AppPaths";
import { LazyImage } from "@/components/lazy-image";
import { Project } from "@/lib/types/Project";

interface ProjectsCarouselProps {
  isCompleted?: boolean;
}

export default function ProjectsCarousel(props: ProjectsCarouselProps) {
  const projects = Projects.getInstance();
  let projectsFiltered = Array<Project>();
  if (props.isCompleted === undefined) {
    projectsFiltered = projects.filter(() => true);
  } else {
    projectsFiltered = projects.filter(
      (project) => project.isCompleted === props.isCompleted,
    );
  }

  const langCode: LanguageCode = i18.language as LanguageCode;
  const navigate = useNavigate();

  return (
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
      className="w-full"
    >
      <CarouselContent>
        {projectsFiltered.map((project) => (
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
            <Card
              className="mx-2 overflow-hidden hover:shadow-xl transition-shadow duration-300 p-0 cursor-pointer"
              onClick={() => navigate(`${AppPaths.PROJECTS}/${project.id}`)}
            >
              <CardContent className="p-0">
                <LazyImage
                  src={project.imageUrls[0]}
                  alt={`Project ${project.id} Image`}
                  className={"object-cover w-full h-full"}
                  ratio={16 / 9}
                  inView={true}
                  fallback="https://placehold.co/160x90/"
                />
                <div className={"h-24 p-2 flex items-center justify-center"}>
                  <span className={"text-xl text-center line-clamp-3"}>
                    {project.title[langCode]}
                  </span>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
