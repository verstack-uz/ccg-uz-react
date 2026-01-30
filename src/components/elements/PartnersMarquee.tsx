import { Marquee } from "@/components/ui/marquee";

export function PartnersMarquee() {
  const partnerLogoUrls = [
    "/images/partners/1_China_Energy_Engineering_Corporation.svg",
    "/images/partners/2_ACWA_Power.svg",
    "/images/partners/3_China_Gezhouba_Group_Company.svg",
    "/images/partners/4_Hubei_Huashengxin.svg",
    "/images/partners/5_China_Nuclear_Engineering_Corporation.svg",
    "/images/partners/6_Asia_Max.png",
    "/images/partners/7_CITIC_Group.svg",
    "/images/partners/8_Agro_Foods.png",
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {partnerLogoUrls.map((imageUrl) => (
          <img
            className={"h-16 mx-4"}
            key={imageUrl}
            src={imageUrl}
            alt="Partner logo"
          />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
}
