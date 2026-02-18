import Link from "next/link";
import { getAllPosts, getAllTags, localizePost } from "@/lib/content";
import { resolveLang, ui } from "@/lib/i18n";

function kindBadge(kind: "curriculum" | "resource", lang: "en" | "ko") {
  return kind === "curriculum" ? ui[lang].curriculum : ui[lang].resources;
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang: qLang } = await searchParams;
  const lang = resolveLang(qLang);
  const text = ui[lang];

  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10">
      <header className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-500">{text.siteLabel}</p>
          <div className="flex gap-2 text-sm">
            <Link href="/?lang=en" className={`rounded-full border px-3 py-1 ${lang === "en" ? "bg-slate-100" : ""}`}>
              {text.langEn}
            </Link>
            <Link href="/?lang=ko" className={`rounded-full border px-3 py-1 ${lang === "ko" ? "bg-slate-100" : ""}`}>
              {text.langKo}
            </Link>
          </div>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{text.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{text.subtitle}</p>
      </header>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">{text.tags}</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}?lang=${lang}`}
              className="rounded-full border px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{text.posts}</h2>
          <span className="text-sm text-slate-500">{posts.length}</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => {
            const localized = localizePost(post, lang);
            return (
              <article key={post.slug} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{kindBadge(post.kind, lang)}</span>
                  {post.updatedAt && (
                    <span className="text-xs text-slate-500">
                      {text.updated}: {post.updatedAt}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{localized.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">{localized.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-50 px-2 py-1 text-xs text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/posts/${post.slug}?lang=${lang}`}
                  className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline"
                >
                  {text.viewPost}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
