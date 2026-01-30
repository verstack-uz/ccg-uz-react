import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { LightRays } from "@/components/ui/light-rays";

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard(props: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered((isHovered) => !isHovered)}
      onMouseLeave={() => setIsHovered((isHovered) => !isHovered)}
      className="relative overflow-hidden cursor-pointer bg-[#333] border-[#555] text-white w-full md:w-96 h-48"
    >
      {isHovered && (
        <>
          <BorderBeam duration={8} size={100} />
          <LightRays />
        </>
      )}

      <CardHeader>
        <CardTitle className={"text-2xl text-center font-light"}>
          {props.title.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent className={"text-xl text-center font-light"}>
        {props.description}
      </CardContent>
    </Card>
  );
}

export default function Features() {
  const { t } = useTranslation();

  const featureData: Array<FeatureCardProps> = [
    {
      title: t("Xavfsizlik"),
      description: t("Biz xavfsiz ishlashni ta'minlaymiz"),
    },
    {
      title: t("Xarajat samaradorligi"),
      description: t("Biz o'rtacha xarajat evaziga sifatli ishni ta'minlaymiz"),
    },
    {
      title: t("Yuqori malakali jamoa"),
      description: t(
        "Bizning quruvchilar jamoamiz tajribali mutaxassislardan iborat",
      ),
    },
    {
      title: t("Vaqtdan optimal foydalanish"),
      description: t("Biz har doim ishimizni o'z vaqtida bajaramiz"),
    },
    {
      title: t("Sifat"),
      description: t(
        "Biz sanoat qurilishi va qurilishda katta tajribaga egamiz",
      ),
    },
  ];

  return (
    <div
      className={
        "flex flex-col md:flex-row p-2 gap-2 md:gap-16 items-center justify-center flex-wrap"
      }
    >
      {featureData.map((feature, index) => (
        <FeatureCard
          key={`feature-card-${index}`}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
