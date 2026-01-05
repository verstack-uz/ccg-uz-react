import { useTranslation } from "react-i18next";

import { NumberTicker } from "@/components/ui/number-ticker";

interface StatisticProps {
  value: number;
  label: string;
  svgPath: string;
  plusSign?: boolean;
}

function Statistic(props: StatisticProps) {
  return (
    <div
      className={
        "flex flex-col grow items-center justify-center space-y-4 w-40 h-64 bg-[#f7f7f7] dark:bg-[#2c2c2e]"
      }
    >
      {/* Icon */}
      <img src={props.svgPath} alt={props.label} className={"size-20"} />

      {/* Counter value */}
      <span className="inline-flex items-center gap-1 text-6xl tracking-tighter whitespace-pre-wrap text-[#f7644a]">
        <NumberTicker
          value={props.value}
          className="inline-block text-[#f7644a] dark:text-[#f7644a]"
        />
        {props.plusSign && <span>+</span>}
      </span>

      {/* Label */}
      <p className={"text-[#999999] dark:text-[#aaaaaa]"}>{props.label}</p>
    </div>
  );
}

export default function Statistics() {
  const { t } = useTranslation();

  const statistics: StatisticProps[] = [
    {
      value: 7,
      label: t("Current projects"),
      svgPath: "/images/statistics/1-current-projects.svg",
    },
    {
      value: 10,
      label: t("Completed projects"),
      svgPath: "/images/statistics/2-completed-projects.svg",
    },
    {
      value: 250,
      label: t("Employees"),
      svgPath: "/images/statistics/3-employees.svg",
      plusSign: true,
    },
    {
      value: 25,
      label: t("Service offer"),
      svgPath: "/images/statistics/4-service-offer.svg",
      plusSign: true,
    },
    {
      value: 5,
      label: t("Equipments"),
      svgPath: "/images/statistics/5-equipments.svg",
      plusSign: true,
    },
  ];

  return (
    <div
      className={
        "container mx-auto flex flex-row items-center justify-center flex-wrap -translate-y-8 md:-translate-y-16"
      }
    >
      {statistics.map((prop) => (
        <Statistic {...prop} />
      ))}
    </div>
  );
}
