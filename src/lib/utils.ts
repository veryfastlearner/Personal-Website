import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Locale } from "@i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const LOCALE_TAGS: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
};

export function formatDate(date: Date, locale: Locale = "en") {
  return Intl.DateTimeFormat(LOCALE_TAGS[locale], {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).filter(Boolean).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string, locale: Locale = "en") {
  const tag = LOCALE_TAGS[locale];
  const startMonth = startDate.toLocaleString(tag, { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth = "";
  let endYear = "";

  if (endDate) {
    if (typeof endDate === "string") {
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString(tag, { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`.trim();
}
