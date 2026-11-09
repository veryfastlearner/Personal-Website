export type Locale = "en" | "fr";

export const LOCALES: Locale[] = ["en", "fr"];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|fr)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function localizePath(pathname: string, locale: Locale): string {
  const base = stripLocalePrefix(pathname);
  if (locale === DEFAULT_LOCALE) return base;
  return base === "/" ? `/${locale}` : `/${locale}${base}`;
}

const en = {
  "nav.home": "Home",
  "nav.blog": "Blog",
  "nav.work": "Work",
  "nav.projects": "Projects",

  "home.greeting": "Hi, I'm Ben Mim Ahmed",
  "home.title":
    "Engineering Student in ICT | Focused on Offensive Cybersecurity & Penetration Testing",
  "home.summary":
    "ICT engineering student at SUP'COM, specializing in offensive cybersecurity and penetration testing. Developing hands-on security experience in web and network environments through CTF solving, personal projects, and lab environments. Focused on web pentesting, vulnerability analysis, and applying OWASP Top 10 methodologies.",

  "section.latestPosts": "Latest posts",
  "section.workExperience": "Work Experience",
  "section.recentProjects": "Recent projects",
  "section.letsConnect": "Let's Connect",
  "seeAll.posts": "See all posts",
  "seeAll.work": "See all work",
  "seeAll.projects": "See all projects",

  "connect.blurb":
    "If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.",

  "page.blog": "Blog",
  "page.work": "Work",
  "page.projects": "Projects",

  "backToTop": "Back to top",
  "backToBlog": "Back to blog",
  "backToProjects": "Back to projects",
  "demo": "demo",
  "repo": "repo",

  "post.newer": "Newer article",
  "post.older": "Older article",
  "post.navigation": "Article navigation",
  "post.copyCode": "Copy code",
  "post.copied": "Copied",

  "meta.home.title": "Home",
  "meta.home.description":
    "Ben Mim Ahmed — ICT engineering student focused on offensive cybersecurity and penetration testing.",
  "meta.blog.title": "Blog",
  "meta.blog.description":
    "A collection of articles on topics I am passionate about.",
  "meta.work.title": "Work",
  "meta.work.description": "Where I have worked and what I have done.",
  "meta.projects.title": "Projects",
  "meta.projects.description":
    "A collection of my projects, with links to repositories and demos.",
};

const fr: Record<keyof typeof en, string> = {
  "nav.home": "Accueil",
  "nav.blog": "Blog",
  "nav.work": "Expérience",
  "nav.projects": "Projets",

  "home.greeting": "Bonjour, je suis Ben",
  "home.title":
    "Élève Ingénieur en TIC | Orienté Cybersécurité Offensive & Tests d'Intrusion",
  "home.summary":
    "Étudiant ingénieur en TIC à SUP'COM, spécialisé en cybersécurité offensive et tests d'intrusion. Développe une expérience pratique en sécurité Web et réseau à travers la résolution de CTFs, des projets personnels et des environnements de laboratoire. Focalisé sur le pentest Web, l'analyse de vulnérabilités et la mise en application des méthodologies OWASP Top 10.",

  "section.latestPosts": "Derniers articles",
  "section.workExperience": "Expérience",
  "section.recentProjects": "Projets récents",
  "section.letsConnect": "Contact",
  "seeAll.posts": "Voir tous les articles",
  "seeAll.work": "Voir toute l'expérience",
  "seeAll.projects": "Voir tous les projets",

  "connect.blurb":
    "Si vous souhaitez me contacter pour quoi que ce soit ou simplement dire bonjour, retrouvez-moi sur les réseaux sociaux ou envoyez-moi un e-mail.",

  "page.blog": "Blog",
  "page.work": "Expérience",
  "page.projects": "Projets",

  "backToTop": "Retour en haut",
  "backToBlog": "Retour au blog",
  "backToProjects": "Retour aux projets",
  "demo": "démo",
  "repo": "repo",

  "post.newer": "Article plus récent",
  "post.older": "Article plus ancien",
  "post.navigation": "Navigation entre les articles",
  "post.copyCode": "Copier le code",
  "post.copied": "Copié",

  "meta.home.title": "Accueil",
  "meta.home.description":
    "Ben Mim Ahmed — Élève ingénieur en TIC orienté cybersécurité offensive et tests d'intrusion.",
  "meta.blog.title": "Blog",
  "meta.blog.description":
    "Une collection d'articles sur les sujets qui me passionnent.",
  "meta.work.title": "Expérience",
  "meta.work.description": "Où j'ai travaillé et ce que j'ai fait.",
  "meta.projects.title": "Projets",
  "meta.projects.description":
    "Une collection de mes projets, avec liens vers les dépôts et démos.",
};

const dictionaries = { en, fr } as const;

export type TranslationKey = keyof typeof en;

export function t(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale][key];
}
