import { LanguageCode } from "@/i18n";

export interface Project {
  id: number;
  title: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  imageUrls: string[];
  isCompleted: boolean;
}
