import { LanguageCode } from "@/i18n";

export interface Project {
  id: number;
  title: Record<LanguageCode, string>;
  imageUrls: string[];
}
