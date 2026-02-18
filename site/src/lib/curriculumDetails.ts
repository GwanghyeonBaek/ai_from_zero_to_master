import type { Lang } from "@/lib/i18n";

export type LessonBlock = {
  title: { en: string; ko: string };
  explain: { en: string; ko: string };
  steps: { en: string[]; ko: string[] };
  code?: string;
  practice?: { en: string; ko: string };
};

export type CurriculumDetail = {
  intro: { en: string; ko: string };
  lessons: LessonBlock[];
};

export const curriculumDetails: Record<string, CurriculumDetail> = {
  "00-orientation": {
    intro: {
      en: "This stage sets your real learning workflow: repository, environment, schedule, and note system.",
      ko: "이 단계는 실제 학습 운영 체계(저장소, 환경, 일정, 노트 시스템)를 세팅합니다.",
    },
    lessons: [
      {
        title: { en: "1) Learning environment setup", ko: "1) 학습 환경 세팅" },
        explain: {
          en: "Install Python, VS Code, and Git. Verify all tools before moving on.",
          ko: "Python, VS Code, Git를 설치하고 실행 가능한지 먼저 검증합니다.",
        },
        steps: {
          en: [
            "Install Python 3.11+",
            "Install VS Code + Python extension",
            "Install Git and run git --version",
            "Create workspace folder and open in VS Code",
          ],
          ko: [
            "Python 3.11+ 설치",
            "VS Code + Python 확장 설치",
            "Git 설치 후 git --version 확인",
            "작업 폴더 생성 후 VS Code로 열기",
          ],
        },
        code: `python3 --version\ngit --version`,
      },
      {
        title: { en: "2) GitHub workflow basics", ko: "2) GitHub 워크플로 기초" },
        explain: {
          en: "Create one public repo and practice commit/push once.",
          ko: "공개 repo 1개를 만들고 commit/push를 1회 수행합니다.",
        },
        steps: {
          en: ["Create repo", "git init", "git add .", "git commit", "git push"],
          ko: ["repo 생성", "git init", "git add .", "git commit", "git push"],
        },
        code: `git init\ngit add .\ngit commit -m "init"\ngit push -u origin main`,
      },
    ],
  },
  "01-python": {
    intro: {
      en: "Focus on writing and running code daily. Small scripts > passive reading.",
      ko: "매일 직접 코드를 작성/실행하는 데 집중합니다. 읽기보다 짧은 실습이 우선입니다.",
    },
    lessons: [
      {
        title: { en: "1) Variables, conditions, loops", ko: "1) 변수, 조건문, 반복문" },
        explain: {
          en: "Learn basic control flow with practical examples.",
          ko: "실전 예제로 제어 흐름의 기본을 익힙니다.",
        },
        steps: {
          en: [
            "Use if/elif/else for branching",
            "Use for loops with range and list",
            "Use while loop safely with break condition",
          ],
          ko: [
            "if/elif/else로 분기 처리",
            "range/list 기반 for 반복",
            "종료조건이 있는 while 반복",
          ],
        },
        code: `scores = [82, 67, 91, 76]\npassed = 0\nfor s in scores:\n    if s >= 70:\n        passed += 1\nprint(f"passed={passed}")`,
        practice: {
          en: "Practice: Given a number list, print count/sum/average of values >= 50.",
          ko: "실습: 숫자 리스트에서 50 이상 값의 개수/합계/평균을 출력하세요.",
        },
      },
      {
        title: { en: "2) Functions and modules", ko: "2) 함수와 모듈" },
        explain: {
          en: "Refactor repeated logic into reusable functions.",
          ko: "반복되는 로직을 함수로 분리해 재사용합니다.",
        },
        steps: {
          en: ["Define function with type hints", "Return clear output", "Split utility file"],
          ko: ["타입힌트로 함수 정의", "명확한 반환값 설계", "유틸 파일 분리"],
        },
        code: `def grade(score: int) -> str:\n    if score >= 90: return "A"\n    if score >= 80: return "B"\n    if score >= 70: return "C"\n    return "D"\n\nprint(grade(88))`,
      },
      {
        title: { en: "3) File I/O and exception handling", ko: "3) 파일 입출력과 예외처리" },
        explain: {
          en: "Read CSV/text and handle common runtime failures.",
          ko: "CSV/텍스트 파일을 읽고 자주 나는 오류를 처리합니다.",
        },
        steps: {
          en: ["Use with open(...)", "Catch FileNotFoundError", "Validate input types"],
          ko: ["with open(...) 사용", "FileNotFoundError 처리", "입력값 검증"],
        },
        code: `try:\n    with open("data.txt", "r", encoding="utf-8") as f:\n        lines = f.readlines()\n    print(len(lines))\nexcept FileNotFoundError:\n    print("file not found")`,
      },
    ],
  },
  "02-statistics": {
    intro: {
      en: "Statistics should be connected to decisions: compare groups, estimate uncertainty, explain confidence.",
      ko: "통계는 의사결정과 연결되어야 합니다: 그룹 비교, 불확실성 추정, 신뢰구간 해석.",
    },
    lessons: [
      {
        title: { en: "1) Descriptive statistics", ko: "1) 기술통계" },
        explain: {
          en: "Compute central tendency and spread before modeling.",
          ko: "모델링 전에 중심·산포를 먼저 확인합니다.",
        },
        steps: {
          en: ["mean/median/std", "distribution shape", "outlier check"],
          ko: ["평균/중앙값/표준편차", "분포 형태 확인", "이상치 점검"],
        },
        code: `import pandas as pd\n\ndf = pd.read_csv("sales.csv")\nprint(df["revenue"].describe())`,
      },
      {
        title: { en: "2) Hypothesis testing (A/B basics)", ko: "2) 가설검정(A/B 기초)" },
        explain: {
          en: "Test whether observed difference is likely due to chance.",
          ko: "관측된 차이가 우연인지 통계적으로 검정합니다.",
        },
        steps: {
          en: ["Set H0/H1", "Choose significance level", "Interpret p-value correctly"],
          ko: ["귀무/대립가설 설정", "유의수준 선택", "p-value 올바르게 해석"],
        },
        code: `from scipy import stats\n\na = [12,13,11,15,14]\nb = [15,17,16,18,17]\nt, p = stats.ttest_ind(a, b, equal_var=False)\nprint(t, p)`,
        practice: {
          en: "Practice: Explain result in 3 business sentences, not math symbols.",
          ko: "실습: 수식 말고 비즈니스 문장 3줄로 결과를 설명하세요.",
        },
      },
    ],
  },
  "03-sql": {
    intro: {
      en: "SQL is the language of real analytics. Build confidence with joins, aggregations, and windows.",
      ko: "SQL은 실무 분석의 언어입니다. 조인·집계·윈도우 함수 중심으로 실전 감각을 만듭니다.",
    },
    lessons: [
      {
        title: { en: "1) Joins + aggregation", ko: "1) 조인 + 집계" },
        explain: {
          en: "Combine tables and compute KPI per dimension.",
          ko: "테이블 결합 후 차원별 KPI를 계산합니다.",
        },
        steps: {
          en: ["INNER JOIN orders + customers", "GROUP BY country", "SUM/COUNT metrics"],
          ko: ["orders+customers INNER JOIN", "country 기준 GROUP BY", "SUM/COUNT 지표 산출"],
        },
        code: `SELECT c.country, COUNT(*) AS orders, SUM(o.amount) AS revenue\nFROM orders o\nJOIN customers c ON o.customer_id = c.id\nGROUP BY c.country\nORDER BY revenue DESC;`,
      },
      {
        title: { en: "2) Window function for ranking", ko: "2) 랭킹용 윈도우 함수" },
        explain: {
          en: "Use RANK() to find top entities per group.",
          ko: "그룹별 상위 항목을 RANK()로 추출합니다.",
        },
        steps: {
          en: ["Partition by month", "Order by revenue desc", "Filter rank <= 3"],
          ko: ["월 기준 파티션", "매출 내림차순 정렬", "rank<=3 필터"],
        },
        code: `WITH m AS (\n  SELECT DATE_TRUNC('month', order_date) AS month, product_id, SUM(amount) AS revenue\n  FROM orders\n  GROUP BY 1,2\n)\nSELECT * FROM (\n  SELECT month, product_id, revenue,\n         RANK() OVER (PARTITION BY month ORDER BY revenue DESC) AS rnk\n  FROM m\n) t\nWHERE rnk <= 3;`,
        practice: {
          en: "Practice: Build a weekly KPI query with conversion_rate and retention proxy.",
          ko: "실습: 주간 KPI 쿼리(전환율, 리텐션 대체지표 포함)를 작성하세요.",
        },
      },
    ],
  },
};

export function getCurriculumDetail(level?: string) {
  if (!level) return undefined;
  return curriculumDetails[level];
}

export function pick<T>(v: { en: T; ko: T }, lang: Lang): T {
  return v[lang];
}
