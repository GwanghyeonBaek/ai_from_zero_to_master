import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  kind: "curriculum" | "resource";
  updatedAt?: string;
  level?: string;
  source?: string;
  category?: string;
  links?: { title: string; url: string; desc?: string }[];
  body?: string;
};

const ROOT = path.join(process.cwd(), "..");

function safeRead(filePath: string): string {
  if (!fs.existsSync(filePath)) return "";
  return fs.readFileSync(filePath, "utf-8");
}

function firstHeading(md: string, fallback: string): string {
  const line = md
    .split("\n")
    .find((l) => l.trim().startsWith("# "))
    ?.replace(/^#\s+/, "")
    .trim();
  return line || fallback;
}

function firstParagraph(md: string): string {
  const lines = md
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#") && !l.startsWith("-") && !/^\d+\./.test(l));
  return lines[0] || "학습 로드맵을 확인해 보세요.";
}

function toKoreanTitle(slug: string): string {
  return slug.replace(/^\d{2}-/, "").replaceAll("-", " ");
}

function parseCurriculumPosts(): BlogPost[] {
  const dir = path.join(ROOT, "curriculum");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((d) => /^\d{2}-/.test(d))
    .sort()
    .map((d) => {
      const mdPath = path.join(dir, d, "roadmap.md");
      const body = safeRead(mdPath);
      return {
        slug: `curriculum-${d}`,
        title: firstHeading(body, toKoreanTitle(d)),
        excerpt: firstParagraph(body),
        tags: ["curriculum", d.split("-")[1] || "track"],
        kind: "curriculum",
        level: d,
        body,
      };
    });
}

function parseUpdated(md: string): string | undefined {
  const line = md.split("\n").find((l) => l.startsWith("Updated:"));
  return line?.replace("Updated:", "").trim();
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseResourcePosts(): BlogPost[] {
  const md = safeRead(path.join(ROOT, "resources", "latest.md"));
  if (!md) return [];

  const updatedAt = parseUpdated(md);
  const lines = md.split("\n");

  const posts: BlogPost[] = [];
  let current: BlogPost | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      if (current) posts.push(current);
      const raw = line.replace(/^##\s+/, "");
      const categoryMatch = raw.match(/\(([^)]+)\)/);
      const source = raw.replace(/\s*\([^)]*\)\s*$/, "").trim();
      const category = categoryMatch?.[1]?.trim();
      current = {
        slug: `resources-${slugify(source)}`,
        title: `${source} 최신 글 모음`,
        excerpt: `${source}에서 자동 수집된 최신 콘텐츠`,
        tags: ["resources", "auto", ...(category ? [category] : [])],
        kind: "resource",
        source,
        category,
        updatedAt,
        links: [],
      };
      continue;
    }

    if (!current) continue;

    const linkMatch = line.match(/^- \[(.+?)\]\((https?:\/\/[^)]+)\)/);
    if (linkMatch) {
      const descLine = (lines[i + 1] || "").trim();
      const desc = descLine.startsWith("- ") ? descLine.replace(/^-\s+/, "") : undefined;
      current.links?.push({
        title: linkMatch[1],
        url: linkMatch[2],
        desc,
      });
    }
  }

  if (current) posts.push(current);
  return posts;
}

export function getAllPosts(): BlogPost[] {
  return [...parseResourcePosts(), ...parseCurriculumPosts()];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllPosts().forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return [...tags].sort();
}

export function getPostsByTag(tag: string): BlogPost[] {
  const normalized = tag.toLowerCase();
  return getAllPosts().filter((p) => p.tags.map((t) => t.toLowerCase()).includes(normalized));
}
