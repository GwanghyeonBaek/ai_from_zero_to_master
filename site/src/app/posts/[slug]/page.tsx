import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, localizePost } from "@/lib/content";
import { curriculumPlans } from "@/lib/curriculum";
import { getCurriculumDetail, pick } from "@/lib/curriculumDetails";
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
  const detail = getCurriculumDetail(post.level);

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
        <section className="space-y-8">
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

          <div>
            <h2 className="mb-2 text-xl font-semibold">{text.detailedLessons}</h2>
            {detail ? (
              <div className="space-y-5">
                <p className="text-slate-700">{pick(detail.intro, lang)}</p>
                {detail.lessons.map((lesson) => (
                  <article key={lesson.title.en} className="rounded-xl border p-4">
                    <h3 className="text-lg font-semibold">{pick(lesson.title, lang)}</h3>

                    {lesson.why && (
                      <p className="mt-2 text-sm text-slate-700">
                        <span className="font-semibold">{text.whyThis}: </span>
                        {pick(lesson.why, lang)}
                      </p>
                    )}

                    {lesson.terms && (
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-slate-800">{text.keyTerms}</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
                          {pick(lesson.terms, lang).map((item) => (
                            <li key={item.term}>
                              <span className="font-medium">{item.term}</span>: {item.desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="mt-3 text-sm text-slate-700">{pick(lesson.explain, lang)}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                      {pick(lesson.steps, lang).map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                    {lesson.code && (
                      <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
                        {lesson.code}
                      </pre>
                    )}

                    {lesson.mistakes && (
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-slate-800">{text.commonMistakes}</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
                          {pick(lesson.mistakes, lang).map((m) => (
                            <li key={m}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {lesson.practice && (
                      <p className="mt-3 text-sm text-slate-700">
                        <span className="font-semibold">{text.practiceTask}: </span>
                        {pick(lesson.practice, lang)}
                      </p>
                    )}

                    {lesson.next && (
                      <p className="mt-2 text-sm text-slate-600">
                        <span className="font-semibold">{text.nextStep}: </span>
                        {pick(lesson.next, lang)}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">{text.comingSoon}</p>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
