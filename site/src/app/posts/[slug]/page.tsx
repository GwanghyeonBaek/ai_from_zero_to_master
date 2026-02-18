import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10">
      <Link href="/" className="text-sm text-slate-600 hover:underline">
        ← 홈으로
      </Link>

      <header className="mt-5 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-3 text-slate-600">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="rounded-full border px-2 py-1 text-xs text-slate-600"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </header>

      {post.kind === "resource" && (
        <section>
          <h2 className="mb-3 text-xl font-semibold">자동 생성된 링크 목록</h2>
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

      {post.kind === "curriculum" && (
        <section>
          <h2 className="mb-3 text-xl font-semibold">로드맵</h2>
          <pre className="overflow-x-auto rounded-xl border bg-slate-50 p-4 text-sm leading-7 text-slate-700">
            {post.body}
          </pre>
        </section>
      )}
    </main>
  );
}
