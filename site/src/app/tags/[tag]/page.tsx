import Link from "next/link";
import { getPostsByTag } from "@/lib/content";

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getPostsByTag(decodeURIComponent(tag));

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <Link href="/" className="text-sm text-slate-600 hover:underline">
        ← 홈으로
      </Link>

      <header className="mt-5 mb-8">
        <h1 className="text-2xl font-bold">#{decodeURIComponent(tag)}</h1>
        <p className="mt-2 text-slate-600">관련 포스트 {posts.length}개</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
            <Link
              href={`/posts/${post.slug}`}
              className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline"
            >
              읽기 →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
