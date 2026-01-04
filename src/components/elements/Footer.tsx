import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className={
        "h-16 border-t-black dark:border-t-white border-t flex items-center"
      }
    >
      <div className={"flex flex-row gap-x-1 w-full justify-center"}>
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <span>{t("Civil Construction Group")}</span>
      </div>
    </footer>
  );
}
