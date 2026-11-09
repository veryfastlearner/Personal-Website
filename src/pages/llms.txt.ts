import { getCollection } from "astro:content";
import { SITE } from "@consts";

export async function GET() {
  const site = import.meta.env.SITE;

  const blog = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const projects = (await getCollection("projects"))
    .filter((project) => !project.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const entryHref = (
    entry: { slug: string; data: { lang: string } },
    collection: "blog" | "projects"
  ) => {
    const base = entry.data.lang === "fr" ? "/fr" : "";
    const slug = entry.slug.replace(/^fr\//, "");
    return `${site}${base}/${collection}/${slug}/`;
  };

  const lines: string[] = [
    `# ${SITE.NAME}`,
    "",
    `> Personal portfolio of ${SITE.NAME}, ICT engineering student focused on offensive cybersecurity and penetration testing. Contains technical articles on penetration testing, OWASP, CTF writeups, threat intelligence, threat hunting, Splunk and SOC workflows, plus project write-ups with repositories.`,
    "",
    "Static site built with Astro. Main sections: home (bio, latest posts, experience, projects, contact), blog, work, projects.",
    "",
    "## Blog",
  ];

  for (const post of blog) {
    const suffix = post.data.lang === "fr" ? " (in French)" : "";
    lines.push(
      `- [${post.data.title}](${entryHref(post, "blog")}): ${post.data.description}${suffix}`
    );
  }

  lines.push("", "## Projects");

  for (const project of projects) {
    const suffix = project.data.lang === "fr" ? " (in French)" : "";
    lines.push(
      `- [${project.data.title}](${entryHref(project, "projects")}): ${project.data.description}${suffix}`
    );
  }

  lines.push(
    "",
    "## Feeds and indexes",
    `- [RSS feed](${site}/rss.xml): all published articles and projects with publication dates.`,
    `- [Sitemap](${site}/sitemap-index.xml): index of all public pages.`,
    ""
  );

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
