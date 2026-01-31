import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import ArrowUpIcon from "@/components/arrow-up-icon";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Set isVisible to true when scrollY > 20
  useEffect(() => {
    const windowScrollHandler = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", windowScrollHandler, { passive: true });
    windowScrollHandler();

    return () => {
      window.removeEventListener("scroll", windowScrollHandler);
    };
  }, []);

  return (
    <Button
      variant="outline"
      className={`rounded-full cursor-pointer z-999 fixed bottom-5 end-5 md:bottom-16 lg:end-16 ${isVisible ? "" : "hidden"} size-12 dark:bg-[#2c2c2e]`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon
        className="text-black dark:text-white size-6"
        duration={1.5}
        strokeWidth={2}
        repeatDelay={1}
        ease="easeInOut"
      />
    </Button>
  );
}
