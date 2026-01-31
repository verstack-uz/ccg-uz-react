import { useState } from "react";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import i18n, { LanguageCode } from "@/i18n";
import { CardContent } from "@/components/ui/card";
import { LazyImage } from "@/components/lazy-image";

export default function CompanyPage() {
  const { t } = useTranslation();
  const [curLangCode, setCurLangCode] = useState(i18n.language as LanguageCode);

  // List of all certificates with their respective language codes
  const allCertificates: Array<{
    src: string;
    langCodes: LanguageCode[];
    alt: string;
  }> = [
    {
      src: "/images/certificates/certificate-1-1-uzru.jpg",
      langCodes: ["uz-latin", "uz-cyrillic", "ru"],
      alt: t("about-company.certificates.certificate1.alt"),
    },
    {
      src: "/images/certificates/certificate-2-1-uzru.jpg",
      langCodes: ["uz-latin", "uz-cyrillic", "ru"],
      alt: t("about-company.certificates.certificate2.alt"),
    },
    {
      src: "/images/certificates/certificate-2-2-uzru.jpg",
      langCodes: ["uz-latin", "uz-cyrillic", "ru"],
      alt: t("about-company.certificates.certificate2.alt"),
    },
    {
      src: "/images/certificates/certificate-2-3-uzru.jpg",
      langCodes: ["uz-latin", "uz-cyrillic", "ru"],
      alt: t("about-company.certificates.certificate2.alt"),
    },
    {
      src: "/images/certificates/certificate-3-1-eng.jpg",
      langCodes: ["en"],
      alt: t("about-company.certificates.certificate3.alt"),
    },
    {
      src: "/images/certificates/certificate-3-2-eng.jpg",
      langCodes: ["en"],
      alt: t("about-company.certificates.certificate3.alt"),
    },
    {
      src: "/images/certificates/certificate-3-3-eng.jpg",
      langCodes: ["en"],
      alt: t("about-company.certificates.certificate3.alt"),
    },
    {
      src: "/images/certificates/certificate-4-1-eng.jpg",
      langCodes: ["en"],
      alt: t("about-company.certificates.certificate4.alt"),
    },
    {
      src: "/images/certificates/certificate-4-2-uzru.jpg",
      langCodes: ["uz-latin", "uz-cyrillic", "ru"],
      alt: t("about-company.certificates.certificate4.alt"),
    },
    {
      src: "/images/certificates/certificate-5-eng.jpg",
      langCodes: ["en"],
      alt: t("about-company.certificates.certificate5.alt"),
    },
  ];

  // Trigger language change to update displayed certificates
  i18n.on("languageChanged", (lng) => {
    setCurLangCode(lng as LanguageCode);
  });

  return (
    <div className={"container mx-auto mt-4 px-4 md:pt-8 font-light text-lg"}>
      <p className={"mt-4 text-justify"}>{t("about-company.paragraph1")}</p>
      <p className={"mt-4 text-justify"}>{t("about-company.paragraph2")}</p>
      <h1 className={"mt-6 text-2xl font-normal"}>
        {t("about-company.summary.title")}
      </h1>
      <ul className={"list-disc pl-4"}>
        <li>{t("about-company.summary.point1")}</li>
        <li>{t("about-company.summary.point2")}</li>
        <li>{t("about-company.summary.point3")}</li>
        <li>{t("about-company.summary.point4")}</li>
        <li>{t("about-company.summary.point5")}</li>
      </ul>
      <h1 className={"mt-6 text-2xl font-normal"}>
        {t("about-company.services.title")}
      </h1>
      <ul className={"list-disc pl-4"}>
        <li>{t("about-company.services.service1")}</li>
        <li>{t("about-company.services.service2")}</li>
        <li>{t("about-company.services.service3")}</li>
        <li>{t("about-company.services.service4")}</li>
        <li>{t("about-company.services.service5")}</li>
        <li>{t("about-company.services.service6")}</li>
        <li>{t("about-company.services.service7")}</li>
        <li>{t("about-company.services.service8")}</li>
      </ul>
      <h1 className={"mt-6 text-2xl font-normal"}>
        {t("about-company.team.title")}
      </h1>
      <p className={"mt-4 text-justify"}>
        {t("about-company.team.paragraph1")}
      </p>
      <h1 className={"mt-6 text-2xl font-normal"}>
        {t("about-company.certificates.title")}
      </h1>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1500,
            stopOnInteraction: true,
          }),
        ]}
        className="mt-4 container mx-auto w-[75%] md:w-full"
      >
        <CarouselContent>
          {allCertificates
            .filter((certificate) =>
              certificate.langCodes.includes(curLangCode),
            )
            .map((certificate, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <CardContent className="p-0 cursor-pointer">
                  <LazyImage
                    src={certificate.src}
                    alt={certificate.alt}
                    className={"object-cover w-full h-full"}
                    ratio={210 / 297}
                    inView={true}
                    fallback="https://placehold.co/160x90/"
                  />
                </CardContent>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
