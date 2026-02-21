import fs from "node:fs";
import path from "node:path";

export type CurriculumPlan = {
  key: string;
  title: { en: string; ko: string };
  summary: { en: string; ko: string };
  goals: { en: string[]; ko: string[] };
  actions: { en: string[]; ko: string[] };
  tools: { en: string[]; ko: string[] };
  deliverables: { en: string[]; ko: string[] };
};

const ROOT = path.join(process.cwd(), "..");

function readText(filePath: string): string {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "";
}

function normalizeHeading(line: string): string {
  return line
    .replace(/^#+\s*/, "")
    .replace(/^\d+[\.)]\s*/, "")
    .replace(/[()\[\]【】:：]/g, "")
    .trim()
    .toLowerCase();
}

function extractSectionBullets(md: string, headingKeywords: string[]): string[] {
  const lines = md.split("\n");
  const normalizedKeywords = headingKeywords.map((k) => k.toLowerCase());
  const idx = lines.findIndex((l) => {
    const norm = normalizeHeading(l);
    return normalizedKeywords.some((k) => norm.includes(k));
  });
  if (idx < 0) return [];

  const out: string[] = [];
  for (let i = idx + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("## ") || line.startsWith("---")) break;
    const bullet = line.match(/^[-*]\s+(.+)/)?.[1] ?? line.match(/^\d+\.\s+(.+)/)?.[1];
    if (bullet) out.push(bullet.trim());
  }
  return out;
}

function parseRoadmapPlan(level: string): Partial<CurriculumPlan> | undefined {
  const md = readText(path.join(ROOT, "curriculum", level, "roadmap.md"));
  if (!md) return undefined;

  const goals = extractSectionBullets(md, ["학습목표", "learning outcomes"]);
  const actions = extractSectionBullets(md, ["필수 실습", "필수 과제", "필수 체크", "실습", "과제", "required"]);
  const deliverables = extractSectionBullets(md, ["출력물 패키지", "증빙 패키지", "evidence"]);

  // Keep bilingual title/summary from canonical static map so EN/KO switching remains stable.
  // Dynamic roadmap parsing is used for detailed list items.
  const base = curriculumPlans[level];

  return {
    key: level,
    title: base?.title,
    summary: base?.summary,
    goals: { en: goals, ko: goals },
    actions: { en: actions, ko: actions },
    tools: base?.tools || { en: [], ko: [] },
    deliverables: { en: deliverables, ko: deliverables },
  };
}

export const curriculumPlans: Record<string, CurriculumPlan> = {
  "00-orientation": {
    key: "00-orientation",
    title: { en: "Orientation & Setup", ko: "오리엔테이션 및 환경설정" },
    summary: {
      en: "Set your learning system, tools, and weekly rhythm before deep study.",
      ko: "본격 학습 전 학습 시스템·도구·주간 루틴을 먼저 세팅합니다.",
    },
    goals: {
      en: ["Understand roadmap structure", "Prepare dev environment", "Define weekly study slots"],
      ko: ["로드맵 구조 이해", "개발 환경 준비", "주간 학습 시간 확정"],
    },
    actions: {
      en: ["Install Python, VS Code, Git", "Create GitHub repo and first commit", "Write 4-week learning schedule"],
      ko: ["Python·VS Code·Git 설치", "GitHub 저장소 생성 및 첫 커밋", "4주 학습 일정표 작성"],
    },
    tools: {
      en: ["Python", "VS Code", "Git/GitHub", "Notion or Obsidian"],
      ko: ["Python", "VS Code", "Git/GitHub", "Notion 또는 Obsidian"],
    },
    deliverables: {
      en: ["Working dev environment", "Public GitHub study repo", "Weekly plan document"],
      ko: ["동작하는 개발 환경", "공개 GitHub 학습 저장소", "주간 계획 문서"],
    },
  },
  "01-python": {
    key: "01-python",
    title: { en: "Python Fundamentals", ko: "파이썬 기초" },
    summary: {
      en: "Build coding fluency for data work and automation.",
      ko: "데이터 작업과 자동화를 위한 코딩 기초 체력을 만듭니다.",
    },
    goals: {
      en: ["Master data types and control flow", "Use functions and modules", "Read/write files"],
      ko: ["자료형·제어문 숙달", "함수·모듈 활용", "파일 입출력 가능"],
    },
    actions: {
      en: ["Solve 30 short Python exercises", "Implement CSV parser mini script", "Create one CLI utility"],
      ko: ["파이썬 문제 30개 풀이", "CSV 파서 미니 스크립트 구현", "CLI 유틸리티 1개 제작"],
    },
    tools: {
      en: ["Python", "Jupyter", "pytest", "Black formatter"],
      ko: ["Python", "Jupyter", "pytest", "Black 포매터"],
    },
    deliverables: {
      en: ["Python basics notebook", "Reusable utility script", "Tested mini project"],
      ko: ["파이썬 기초 노트북", "재사용 가능한 유틸 스크립트", "테스트된 미니 프로젝트"],
    },
  },
  "02-statistics": {
    key: "02-statistics",
    title: { en: "Statistics for Data Analysis", ko: "데이터 분석 통계" },
    summary: {
      en: "Learn probability, distributions, and hypothesis testing for decisions.",
      ko: "확률·분포·가설검정을 익혀 데이터 기반 의사결정을 합니다.",
    },
    goals: {
      en: ["Understand mean/variance/distribution", "Run hypothesis tests", "Interpret confidence intervals"],
      ko: ["평균·분산·분포 이해", "가설검정 수행", "신뢰구간 해석"],
    },
    actions: {
      en: ["Analyze one public dataset statistically", "Run A/B test simulation", "Write insight report"],
      ko: ["공개 데이터셋 통계 분석", "A/B 테스트 시뮬레이션", "인사이트 리포트 작성"],
    },
    tools: {
      en: ["NumPy", "SciPy", "pandas", "Matplotlib"],
      ko: ["NumPy", "SciPy", "pandas", "Matplotlib"],
    },
    deliverables: {
      en: ["Statistical analysis notebook", "A/B simulation notebook", "1-page findings summary"],
      ko: ["통계 분석 노트북", "A/B 시뮬레이션 노트북", "1페이지 결과 요약"],
    },
  },
  "03-sql": {
    key: "03-sql",
    title: { en: "SQL for Analytics", ko: "분석용 SQL" },
    summary: {
      en: "Query and transform data for dashboards and model inputs.",
      ko: "대시보드·모델 입력용 데이터를 SQL로 추출/가공합니다.",
    },
    goals: {
      en: ["Write joins and aggregations", "Use window functions", "Optimize query basics"],
      ko: ["조인·집계 작성", "윈도우 함수 사용", "쿼리 최적화 기초"],
    },
    actions: {
      en: ["Solve 20 SQL interview queries", "Build KPI query set", "Create star-schema practice DB"],
      ko: ["SQL 문제 20개 풀이", "KPI 쿼리 세트 작성", "스타 스키마 연습 DB 구성"],
    },
    tools: {
      en: ["PostgreSQL", "DuckDB", "DBT (optional)", "Metabase"],
      ko: ["PostgreSQL", "DuckDB", "DBT(선택)", "Metabase"],
    },
    deliverables: {
      en: ["SQL practice repo", "Business KPI SQL pack", "Data mart ERD"],
      ko: ["SQL 연습 저장소", "비즈니스 KPI SQL 묶음", "데이터마트 ERD"],
    },
  },
  "04-data-viz": {
    key: "04-data-viz",
    title: { en: "Data Visualization", ko: "데이터 시각화" },
    summary: {
      en: "Turn analysis into clear charts and stakeholder-ready stories.",
      ko: "분석 결과를 명확한 차트와 전달력 있는 스토리로 바꿉니다.",
    },
    goals: {
      en: ["Choose correct chart types", "Design readable dashboards", "Tell insight-driven stories"],
      ko: ["적절한 차트 선택", "읽기 쉬운 대시보드 설계", "인사이트 중심 스토리텔링"],
    },
    actions: {
      en: ["Redesign 3 poor charts", "Build one executive dashboard", "Present 5-minute analysis story"],
      ko: ["나쁜 차트 3개 개선", "임원용 대시보드 1개 제작", "5분 분석 발표"],
    },
    tools: {
      en: ["Seaborn", "Plotly", "Tableau/Power BI", "Figma (optional)"],
      ko: ["Seaborn", "Plotly", "Tableau/Power BI", "Figma(선택)"],
    },
    deliverables: {
      en: ["Visualization playbook", "Interactive dashboard", "Story deck (PDF)"],
      ko: ["시각화 플레이북", "인터랙티브 대시보드", "스토리 발표자료(PDF)"],
    },
  },
  "05-ml-fundamentals": {
    key: "05-ml-fundamentals",
    title: { en: "Machine Learning Fundamentals", ko: "머신러닝 기초" },
    summary: {
      en: "Train and evaluate baseline ML models end-to-end.",
      ko: "기본 ML 모델을 학습·평가하는 전체 흐름을 익힙니다.",
    },
    goals: {
      en: ["Understand supervised learning", "Run feature engineering", "Evaluate with proper metrics"],
      ko: ["지도학습 이해", "피처 엔지니어링 수행", "지표 기반 평가"],
    },
    actions: {
      en: ["Build 2 baseline models", "Compare models with cross-validation", "Write model card"],
      ko: ["베이스라인 모델 2개 구축", "교차검증으로 모델 비교", "모델 카드 작성"],
    },
    tools: {
      en: ["scikit-learn", "pandas", "Optuna", "MLflow (optional)"],
      ko: ["scikit-learn", "pandas", "Optuna", "MLflow(선택)"],
    },
    deliverables: {
      en: ["ML baseline notebook", "Model comparison report", "Reproducible training script"],
      ko: ["ML 베이스라인 노트북", "모델 비교 리포트", "재현 가능한 학습 스크립트"],
    },
  },
  "06-deep-learning": {
    key: "06-deep-learning",
    title: { en: "Deep Learning", ko: "딥러닝" },
    summary: {
      en: "Learn neural network training and debugging workflow.",
      ko: "신경망 학습과 디버깅 워크플로를 익힙니다.",
    },
    goals: {
      en: ["Understand tensors and backprop", "Train CNN/Transformer basics", "Handle overfitting"],
      ko: ["텐서·역전파 이해", "CNN/Transformer 기초 학습", "과적합 대응"],
    },
    actions: {
      en: ["Train one image model", "Train one text model", "Track experiments and results"],
      ko: ["이미지 모델 1개 학습", "텍스트 모델 1개 학습", "실험/결과 추적"],
    },
    tools: {
      en: ["PyTorch", "Weights & Biases", "Hugging Face", "CUDA (if available)"],
      ko: ["PyTorch", "Weights & Biases", "Hugging Face", "CUDA(가능 시)"],
    },
    deliverables: {
      en: ["Training logs", "Model checkpoints", "Failure analysis notes"],
      ko: ["학습 로그", "모델 체크포인트", "실패 원인 분석 노트"],
    },
  },
  "07-llm": {
    key: "07-llm",
    title: { en: "LLM Applications", ko: "LLM 응용" },
    summary: {
      en: "Build practical LLM apps with prompting, RAG, and evaluation.",
      ko: "프롬프트·RAG·평가를 포함한 실전 LLM 앱을 구축합니다.",
    },
    goals: {
      en: ["Design robust prompts", "Implement basic RAG", "Evaluate hallucination and quality"],
      ko: ["견고한 프롬프트 설계", "기본 RAG 구현", "환각/품질 평가"],
    },
    actions: {
      en: ["Create Q&A RAG prototype", "Add prompt/version tracking", "Build evaluation dataset"],
      ko: ["Q&A RAG 프로토타입 제작", "프롬프트/버전 추적 추가", "평가용 데이터셋 구축"],
    },
    tools: {
      en: ["OpenAI API", "LangChain/LlamaIndex", "Vector DB", "Promptfoo"],
      ko: ["OpenAI API", "LangChain/LlamaIndex", "벡터DB", "Promptfoo"],
    },
    deliverables: {
      en: ["Working LLM demo", "Prompt library", "Eval score dashboard"],
      ko: ["동작하는 LLM 데모", "프롬프트 라이브러리", "평가 점수 대시보드"],
    },
  },
  "08-mlops": {
    key: "08-mlops",
    title: { en: "MLOps & Deployment", ko: "MLOps 및 배포" },
    summary: {
      en: "Move models to production with CI/CD, monitoring, and retraining plans.",
      ko: "모델을 운영 환경에 배포하고 모니터링/재학습 체계를 만듭니다.",
    },
    goals: {
      en: ["Containerize model service", "Build CI pipeline", "Define monitoring metrics"],
      ko: ["모델 서비스 컨테이너화", "CI 파이프라인 구축", "모니터링 지표 정의"],
    },
    actions: {
      en: ["Deploy inference API", "Add model/version registry", "Set drift alert baseline"],
      ko: ["추론 API 배포", "모델/버전 레지스트리 추가", "드리프트 알림 기준 설정"],
    },
    tools: {
      en: ["Docker", "GitHub Actions", "FastAPI", "Prometheus/Grafana"],
      ko: ["Docker", "GitHub Actions", "FastAPI", "Prometheus/Grafana"],
    },
    deliverables: {
      en: ["Deployable API", "CI/CD workflow file", "Monitoring dashboard"],
      ko: ["배포 가능한 API", "CI/CD 워크플로 파일", "모니터링 대시보드"],
    },
  },
  "09-capstone": {
    key: "09-capstone",
    title: { en: "Capstone Project", ko: "캡스톤 프로젝트" },
    summary: {
      en: "Integrate all skills into one portfolio-ready end-to-end project.",
      ko: "전체 역량을 통합해 포트폴리오용 엔드투엔드 프로젝트를 완성합니다.",
    },
    goals: {
      en: ["Define business problem clearly", "Ship MVP with measurable value", "Document impact and lessons"],
      ko: ["비즈니스 문제 명확화", "측정 가능한 MVP 출시", "성과·회고 문서화"],
    },
    actions: {
      en: ["Propose one project brief", "Deliver MVP in 4 weeks", "Publish demo + write case study"],
      ko: ["프로젝트 제안서 작성", "4주 내 MVP 완성", "데모 공개 + 케이스 스터디 작성"],
    },
    tools: {
      en: ["Your full stack", "GitHub Projects", "Vercel/Cloud Run", "Analytics tool"],
      ko: ["전체 기술스택", "GitHub Projects", "Vercel/Cloud Run", "분석 도구"],
    },
    deliverables: {
      en: ["Public demo URL", "Readable README", "Portfolio case study"],
      ko: ["공개 데모 URL", "이해 쉬운 README", "포트폴리오 케이스 스터디"],
    },
  },
};

export function getCurriculumPlan(level?: string): CurriculumPlan | undefined {
  if (!level) return undefined;
  const parsed = parseRoadmapPlan(level);
  if (parsed && parsed.goals && parsed.goals.ko.length > 0) {
    return parsed as CurriculumPlan;
  }
  return curriculumPlans[level];
}
