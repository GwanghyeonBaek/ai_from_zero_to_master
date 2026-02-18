import Link from "next/link";
import { getPostsByTag } from "@/lib/content";
import { resolveLang, ui } from "@/lib/i18n";

export default async function TagPage({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { tag } = await params;
  const { lang: qLang } = await searchParams;
  const lang = resolveLang(qLang);
  const text = ui[lang];

  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <div className="mb-4 flex items-center justify-between">
        <Link href={`/?lang=${lang}`} className="text-sm text-slate-600 hover:underline">
          {text.backHome}
        </Link>
        <div className="flex gap-2 text-sm">
          <Link href={`/tags/${encodeURIComponent(decodedTag)}?lang=en`} className={`rounded-full border px-3 py-1 ${lang === "en" ? "bg-slate-100" : ""}`}>
            {text.langEn}
          </Link>
          <Link href={`/tags/${encodeURIComponent(decodedTag)}?lang=ko`} className={`rounded-full border px-3 py-1 ${lang === "ko" ? "bg-slate-100" : ""}`}>
            {text.langKo}
          </Link>
        </div>
      </div>

      <header className="mt-5 mb-8">
        <h1 className="text-2xl font-bold">#{decodedTag}</h1>
        <p className="mt-2 text-slate-600">
          {text.relatedPosts} {posts.length}
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <Link
              href={`/posts/${post.slug}?lang=${lang}`}
              className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline"
            >
              {text.read}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
