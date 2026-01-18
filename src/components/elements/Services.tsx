import { useTranslation } from "react-i18next";

interface ServiceProps {
  label: string;
  svgPath: string;
}

function Service(props: ServiceProps) {
  return (
    <div
      className={
        "flex flex-col grow items-center justify-center space-y-4 w-64 h-64 bg-[#f7f7f7] dark:bg-[#2c2c2e]"
      }
    >
      {/* Icon */}
      <img src={props.svgPath} alt={props.label} className={"size-26"} />

      {/* Label */}
      <p className={"text-[#333] dark:text-[#ddd]"}>
        {props.label.toUpperCase()}
      </p>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();

  const services: ServiceProps[] = [
    {
      label: t("Engineering"),
      svgPath: "/images/services/1-engineering.svg",
    },
    {
      label: t("Procurement"),
      svgPath: "/images/services/2-procurement.svg",
    },
    {
      label: t("Construction"),
      svgPath: "/images/services/3-construction.svg",
    },
  ];

  return (
    <div
      className={
        "container mx-auto flex flex-row items-center justify-center flex-wrap"
      }
    >
      {services.map((prop, index) => (
        <Service {...prop} key={`service-${index}`} />
      ))}
    </div>
  );
}
