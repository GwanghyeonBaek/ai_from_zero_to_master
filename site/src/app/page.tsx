import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

type Track = { slug: string; title: string; path: string };

function getTracks(): Track[] {
  const curriculumDir = path.join(process.cwd(), "..", "curriculum");
  if (!fs.existsSync(curriculumDir)) return [];

  return fs
    .readdirSync(curriculumDir)
    .filter((name) => /^\d{2}-/.test(name))
    .map((name) => {
      const roadmapPath = path.join(curriculumDir, name, "roadmap.md");
      const firstLine = fs.existsSync(roadmapPath)
        ? fs
            .readFileSync(roadmapPath, "utf-8")
            .split("\n")
            .find((line) => line.trim().startsWith("#"))
        : undefined;

      return {
        slug: name,
        title: firstLine?.replace(/^#+\s*/, "") || name,
        path: roadmapPath,
      };
    });
}

function getResourcePreview(): string {
  const p = path.join(process.cwd(), "..", "resources", "latest.md");
  if (!fs.existsSync(p)) return "No resources yet.";

  return fs
    .readFileSync(p, "utf-8")
    .split("\n")
    .filter((line) => line.trim())
    .slice(0, 6)
    .join("\n");
}

export default function Home() {
  const tracks = getTracks();
  const resourcePreview = getResourcePreview();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <header className="mb-10">
        <p className="text-sm text-gray-500">AI & Data Education Hub</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          AI From Zero to Master
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          GitHub에서 커리큘럼/리소스를 관리하고, 이 사이트는 push 될 때마다 자동
          배포됩니다. (Next.js + Vercel)
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">학습 트랙</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {tracks.map((track) => (
            <article key={track.slug} className="rounded-xl border p-4">
              <h3 className="font-semibold">{track.title}</h3>
              <p className="mt-1 text-xs text-gray-500">{track.slug}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">최신 리소스 미리보기</h2>
          <span className="text-xs text-gray-500">resources/latest.md 기반</span>
        </div>
        <pre className="overflow-x-auto rounded-xl border bg-gray-50 p-4 text-xs leading-6 text-gray-700">
          {resourcePreview}
        </pre>
      </section>

      <section className="rounded-xl border p-5">
        <h2 className="text-lg font-semibold">배포/자동화</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>GitHub main 브랜치에 push</li>
          <li>Vercel이 자동 빌드/배포</li>
          <li>사이트가 최신 콘텐츠로 갱신</li>
        </ul>
        <p className="mt-4 text-sm">
          <Link href="https://vercel.com/new" className="underline">
            Vercel에서 이 repo 연결하기
          </Link>
        </p>
      </section>
    </main>
  );
}
