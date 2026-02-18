import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, localizePost } from "@/lib/content";
import { curriculumPlans } from "@/lib/curriculum";
import { resolveLang, ui } from "@/lib/i18n";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostDetail({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const { lang: qLang } = await searchParams;
  const lang = resolveLang(qLang);
  const text = ui[lang];

  const post = getPostBySlug(slug);
  if (!post) return notFound();
  const localized = localizePost(post, lang);
  const plan = post.level ? curriculumPlans[post.level] : undefined;

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10">
      <div className="mb-4 flex items-center justify-between">
        <Link href={`/?lang=${lang}`} className="text-sm text-slate-600 hover:underline">
          {text.backHome}
        </Link>
        <div className="flex gap-2 text-sm">
          <Link href={`/posts/${slug}?lang=en`} className={`rounded-full border px-3 py-1 ${lang === "en" ? "bg-slate-100" : ""}`}>
            {text.langEn}
          </Link>
          <Link href={`/posts/${slug}?lang=ko`} className={`rounded-full border px-3 py-1 ${lang === "ko" ? "bg-slate-100" : ""}`}>
            {text.langKo}
          </Link>
        </div>
      </div>

      <header className="mt-5 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{localized.title}</h1>
        <p className="mt-3 text-slate-600">{localized.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}?lang=${lang}`}
              className="rounded-full border px-2 py-1 text-xs text-slate-600"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </header>

      {post.kind === "resource" && (
        <section>
          <h2 className="mb-3 text-xl font-semibold">{text.autoLinks}</h2>
          <div className="space-y-3">
            {(post.links || []).map((item) => (
              <article key={item.url} className="rounded-xl border p-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  {item.title}
                </a>
                {item.desc && <p className="mt-2 text-sm text-slate-600">{item.desc}</p>}
              </article>
            ))}
          </div>
        </section>
      )}

      {post.kind === "curriculum" && plan && (
        <section className="space-y-6">
          <div>
            <h2 className="mb-2 text-xl font-semibold">{text.goals}</h2>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {plan.goals[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">{text.actions}</h2>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {plan.actions[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">{text.tools}</h2>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {plan.tools[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">{text.deliverables}</h2>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              {plan.deliverables[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
