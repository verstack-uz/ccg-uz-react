import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import AppPaths from "@/routes/AppPaths";
import ProjectsCarousel from "@/components/elements/ProjectsCarousel";
import Services from "@/components/elements/Services";
import PartnersMarquee from "@/components/elements/PartnersMarquee";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Highlighter } from "@/components/ui/highlighter";
import Features from "@/components/elements/Features";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* Joriy loyihalar karuseli */}
      {/* md:mt-24, but since previous element (statistics) translates upward, no need */}
      <h1
        id="projects"
        className={
          "mt-16 mb-4 md:mt-0 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Current projects").toUpperCase()}
      </h1>
      <ProjectsCarousel isCompleted={false} />

      {/* Bog'lanish tugmasi */}
      <div
        className={
          "flex flex-row mt-16 mb-4 md:mt-24 md:mb-8 bg-[#f7644a] text-white"
        }
      >
        <div
          className={
            "container mx-auto flex flex-col md:flex-row gap-4 items-center px-3 py-8"
          }
        >
          <div className={"grow flex flex-col gap-2"}>
            <h1 className={"text-3xl"}>
              <Highlighter action="underline" color="yellow">
                {t("Let's build together").toUpperCase()}
              </Highlighter>
            </h1>
            <p className={"text-2xl"}>
              {t("Start your construction project today!").toUpperCase()}
            </p>
          </div>
          <div className={"w-full md:w-auto"}>
            <ShinyButton
              className={"w-full md:w-auto bg-white text-[#333]"}
              onClick={() => navigate(AppPaths.CONTACT)}
            >
              {t("Contact").toUpperCase()}
            </ShinyButton>
          </div>
        </div>
      </div>

      {/* Bizning xizmatlarimiz */}
      <h1
        id="services"
        className={
          "mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Xizmatlar").toUpperCase()}
      </h1>
      <Services />

      {/* Tugallangan loyihalar karuseli */}
      <h1
        className={
          "mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Tugallangan loyihalar").toUpperCase()}
      </h1>
      <ProjectsCarousel isCompleted={true} />

      {/* Hamkorlar */}
      <h1
        className={
          "mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Bizning hamkorlar").toUpperCase()}
      </h1>
      <PartnersMarquee />

      {/* Biz bilan ishlashining afzalliklari */}
      <div className={"mt-16 py-8 md:mt-24 bg-[#333] text-white"}>
        <h1
          className={
            "mb-4 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
          }
        >
          {t("Biz bilan ishlashining afzalliklari").toUpperCase()}
        </h1>
        <Features />
      </div>

      {/* Vacancies */}
      {/* Part 1 */}
      <div
        id="career"
        className={
          "container mx-auto mt-8 py-8 md:mt-16 flex flex-col md:flex-row items-center justify-center"
        }
      >
        <h1
          className={
            "flex-1 mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
          }
        >
          {t("Karyera").toUpperCase()}
        </h1>

        <div
          className={
            "flex flex-1 flex-col gap-8 bg-[#eee] dark:bg-[#333] px-8 py-8"
          }
        >
          <p className={"text-lg font-light"}>{t("vacancy.description")}</p>

          <div>
            <Button asChild>
              <Link to={"/#vacancies"}>
                {t("Bo'sh ish o'rinlari").toUpperCase()}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Part 2 */}
      <div
        className={
          "container mx-auto md:mt-16 flex flex-col gap-16 md:flex-row items-center justify-center"
        }
      >
        <img
          className={"w-96 h-96 object-cover"}
          src="/images/career_ad.jpeg"
          alt="Vacancies"
        />

        <div className={"grow flex flex-col gap-6 px-4"}>
          <h1 className={"text-3xl"}>
            {t("vacancy.main_statement").toUpperCase()}
          </h1>

          <Separator />

          <div className={"flex flex-row gap-8 items-center"}>
            <img
              src="/images/career/career_icon1.svg"
              className={"w-16 h-16 object-contain"}
              alt="Jamoa"
            />
            <p className={"text-xl font-light tracking-wider"}>
              {t("vacancy.statement1")}
            </p>
          </div>

          <Separator />

          <div className={"flex flex-row gap-8 items-center"}>
            <img
              src="/images/career/career_icon2.svg"
              className={"w-16 h-16 object-contain"}
              alt="Loyihalar"
            />
            <p className={"text-xl font-light tracking-wider"}>
              {t("vacancy.statement2")}
            </p>
          </div>

          <Separator />

          <div className={"flex flex-row gap-8 items-center"}>
            <img
              src="/images/career/career_icon3.svg"
              className={"w-16 h-16 object-contain"}
              alt="Tajriba"
            />
            <p className={"text-xl font-light tracking-wider"}>
              {t("vacancy.statement3")}
            </p>
          </div>
        </div>
      </div>
      {/* Part 3 */}
      <div
        id="vacancies"
        className={"mt-16 py-16 md:mt-24 bg-[#333] text-white"}
      >
        <div className={"container mx-auto"}>
          <h1
            className={
              "mb-4 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
            }
          >
            {t("Bo'sh ish o'rinlari ro'yxati").toUpperCase()}
          </h1>
          <Separator />
          {/* No vacancies available */}
          <p className={"mt-8 text-center text-lg font-light"}>
            {t("Hozirgi vaqtda bo'sh ish o'ringlari yo'q")}
          </p>
        </div>
      </div>

      {/* Kontaktlar */}
      <h1
        className={
          "mt-16 mb-4 md:mt-24 md:mb-8 text-2xl md:text-4xl text-center tracking-normal"
        }
      >
        {t("Bizning kontaktlar").toUpperCase()}
      </h1>

      <div
        id="contact"
        className={"container mx-auto flex flex-col md:flex-row md:w-3xl gap-4"}
      >
        {/* Location */}
        <div className={"flex-1 flex flex-col items-center"}>
          <img
            src="/icons/location-pin.svg"
            className={"w-16 h-16 object-contain"}
            alt="Location"
          />
          <p className={"mt-4 text-xl"}>{t("Manzil").toUpperCase()}:</p>
          <p className={"mt-2 text-center text-lg"}>
            {t("contact.address")}
            <br />(
            <a
              href="https://yandex.uz/maps/-/CHuTEG6o"
              target="_blank"
              className={"mt-2 text-lg underline hover:text-[#f7644a]"}
            >
              Yandex
            </a>
            ,
            <a
              href="https://maps.app.goo.gl/neoxWACtBsHYU7Lt5"
              target="_blank"
              className={"mt-2 text-lg underline hover:text-[#f7644a]"}
            >
              Google Maps
            </a>
            )
          </p>
        </div>

        {/* Phone */}
        <div className={"flex-1 flex flex-col items-center"}>
          <img
            src="/icons/phone.svg"
            className={"w-16 h-16 object-contain"}
            alt="Phone"
          />
          <p className={"mt-4 text-xl"}>{t("Telefon").toUpperCase()}:</p>
          <a
            href="tel:+998770731717"
            className={"mt-2 text-lg underline hover:text-[#f7644a]"}
          >
            +998770731717
          </a>
        </div>

        {/* Working hours */}
        <div className={"flex-1 flex flex-col items-center"}>
          <img
            src="/icons/time.svg"
            className={"w-16 h-16 object-contain"}
            alt="Clock"
          />
          <p className={"mt-4 text-xl"}>{t("Ish vaqti").toUpperCase()}:</p>
          <p className={"mt-2 text-lg"}>9:00 - 18:00</p>
        </div>

        {/* Email */}
        <div className={"flex-1 flex flex-col items-center"}>
          <img
            src="/icons/email.svg"
            className={"w-16 h-16 object-contain"}
            alt="Email"
          />
          <p className={"mt-4 text-xl"}>{t("Email").toUpperCase()}:</p>
          <a
            href="mailto:info@ccg.uz"
            className={"mt-2 text-lg underline hover:text-[#f7644a]"}
          >
            info@ccg.uz
          </a>
        </div>
      </div>
    </>
  );
}
