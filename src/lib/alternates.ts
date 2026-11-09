import { getCollection } from "astro:content";
import { localizePath, stripLocalePrefix, type Locale } from "@i18n";

type LocalizedHrefs = {
  en: string;
  fr: string;
  enTranslated: boolean;
  frTranslated: boolean;
};

async function hasTranslation(
  collection: "blog" | "projects",
  slug: string,
  target: Locale
) {
  const entries = await getCollection(collection);
  return entries.some((entry) => {
    const entrySlug = target === "fr" ? entry.slug.replace(/^fr\//, "") : entry.slug;
    return entry.data.lang === target && !entry.data.draft && entrySlug === slug;
  });
}

export async function getLocalizedHrefs(pathname: string): Promise<LocalizedHrefs> {
  const basePath = stripLocalePrefix(pathname.replace(/\/$/, "") || "/");
  let en = localizePath(basePath, "en");
  let fr = localizePath(basePath, "fr");
  let enTranslated = true;
  let frTranslated = true;

  const blogSlug = basePath.startsWith("/blog/")
    ? basePath.slice("/blog/".length)
    : null;

  if (blogSlug) {
    enTranslated = await hasTranslation("blog", blogSlug, "en");
    frTranslated = await hasTranslation("blog", blogSlug, "fr");
    if (!enTranslated) en = "/blog";
    if (!frTranslated) fr = "/fr/blog";
  }

  const projectSlug = basePath.startsWith("/projects/")
    ? basePath.slice("/projects/".length)
    : null;

  if (projectSlug) {
    enTranslated = await hasTranslation("projects", projectSlug, "en");
    frTranslated = await hasTranslation("projects", projectSlug, "fr");
    if (!enTranslated) en = "/projects";
    if (!frTranslated) fr = "/fr/projects";
  }

  return { en, fr, enTranslated, frTranslated };
}
