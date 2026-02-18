export type Lang = "en" | "ko";

export function resolveLang(input?: string): Lang {
  return input === "ko" ? "ko" : "en";
}

export const ui = {
  en: {
    siteLabel: "AI Education Blog",
    title: "AI From Zero to Master",
    subtitle:
      "This learning blog auto-refreshes from GitHub content. Explore curriculum tracks and curated resources in card format.",
    tags: "Tags",
    posts: "Posts",
    updated: "Updated",
    viewPost: "View post →",
    backHome: "← Back to home",
    autoLinks: "Auto-generated links",
    roadmap: "Roadmap",
    relatedPosts: "Related posts",
    read: "Read →",
    curriculum: "Curriculum",
    resources: "Auto Resources",
    goals: "Learning goals",
    actions: "What to do",
    tools: "Tools / stack",
    deliverables: "Deliverables",
    langEn: "English",
    langKo: "Korean",
  },
  ko: {
    siteLabel: "AI 교육 블로그",
    title: "AI From Zero to Master",
    subtitle:
      "GitHub 콘텐츠를 기반으로 자동 갱신되는 학습 블로그입니다. 커리큘럼 트랙과 최신 리소스를 카드형으로 탐색해 보세요.",
    tags: "태그",
    posts: "포스트",
    updated: "업데이트",
    viewPost: "포스트 보기 →",
    backHome: "← 홈으로",
    autoLinks: "자동 생성된 링크 목록",
    roadmap: "로드맵",
    relatedPosts: "관련 포스트",
    read: "읽기 →",
    curriculum: "커리큘럼",
    resources: "자동 리소스",
    goals: "학습 목표",
    actions: "실행 항목",
    tools: "도구 / 스택",
    deliverables: "산출물",
    langEn: "영어",
    langKo: "한국어",
  },
} as const;
