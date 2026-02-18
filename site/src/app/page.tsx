import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/content";

function kindBadge(kind: "curriculum" | "resource") {
  return kind === "curriculum" ? "커리큘럼" : "자동 리소스";
}

export default function HomePage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10">
      <header className="mb-10">
        <p className="text-sm text-slate-500">AI Education Blog</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">AI From Zero to Master</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          GitHub의 콘텐츠를 기반으로 자동 갱신되는 학습 블로그입니다. 커리큘럼 트랙과 최신 리소스를 카드형으로 탐색해 보세요.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">태그</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="rounded-full border px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">포스트</h2>
          <span className="text-sm text-slate-500">{posts.length}개</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{kindBadge(post.kind)}</span>
                {post.updatedAt && (
                  <span className="text-xs text-slate-500">업데이트: {post.updatedAt}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-50 px-2 py-1 text-xs text-slate-500">
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/posts/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline"
              >
                포스트 보기 →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
