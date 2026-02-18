import type { Lang } from "@/lib/i18n";

export type LessonBlock = {
  title: { en: string; ko: string };
  why?: { en: string; ko: string };
  terms?: { en: { term: string; desc: string }[]; ko: { term: string; desc: string }[] };
  explain: { en: string; ko: string };
  steps: { en: string[]; ko: string[] };
  code?: string;
  mistakes?: { en: string[]; ko: string[] };
  practice?: { en: string; ko: string };
  next?: { en: string; ko: string };
};

export type CurriculumDetail = {
  intro: { en: string; ko: string };
  lessons: LessonBlock[];
};

export const curriculumDetails: Record<string, CurriculumDetail> = {
  "00-orientation": {
    intro: {
      en: "Set up tools, workflow, and learning cadence before deep study.",
      ko: "본격 학습 전에 도구/워크플로/학습 루틴을 먼저 세팅합니다.",
    },
    lessons: [
      {
        title: { en: "1) Environment setup", ko: "1) 환경 세팅" },
        explain: { en: "Install Python, VS Code, and Git and verify versions.", ko: "Python, VS Code, Git를 설치하고 버전을 확인합니다." },
        steps: { en: ["Install Python", "Install VS Code", "Install Git", "Run version commands"], ko: ["Python 설치", "VS Code 설치", "Git 설치", "버전 명령 확인"] },
        code: `python3 --version\ngit --version`,
      },
      {
        title: { en: "2) GitHub workflow", ko: "2) GitHub 워크플로" },
        explain: { en: "Create repo and complete first commit/push.", ko: "저장소를 만들고 첫 commit/push를 완료합니다." },
        steps: { en: ["git init", "git add .", "git commit", "git push"], ko: ["git init", "git add .", "git commit", "git push"] },
        code: `git init\ngit add .\ngit commit -m "init"\ngit push -u origin main`,
      },
    ],
  },
  "01-python": {
    intro: {
      en: "Practical Python from absolute basics to mini-project level.",
      ko: "완전 기초부터 미니프로젝트 수준까지 가는 실전 파이썬 코스입니다.",
    },
    lessons: [
      {
        title: { en: "Chapter 1) Variables and types", ko: "챕터 1) 변수와 자료형" },
        why: { en: "All programs store values first.", ko: "모든 프로그램은 값 저장에서 시작합니다." },
        terms: {
          en: [
            { term: "Variable", desc: "Named value container" },
            { term: "Data type", desc: "Kind of value" },
          ],
          ko: [
            { term: "변수", desc: "이름 있는 값 저장소" },
            { term: "자료형", desc: "데이터의 종류" },
          ],
        },
        explain: { en: "Use int/float/str/bool and convert types safely.", ko: "int/float/str/bool과 형변환을 안전하게 사용합니다." },
        steps: { en: ["Declare variables", "Use type()", "Convert with int/str/float"], ko: ["변수 선언", "type() 확인", "int/str/float 변환"] },
        code: `age=27\nname="Alex"\nprint(type(age), type(name))`,
        mistakes: { en: ["Mixing string and number without conversion"], ko: ["형변환 없이 문자열/숫자 혼합"] },
        practice: { en: "Create 5 profile variables and print one sentence.", ko: "프로필 변수 5개를 만들고 한 문장으로 출력하세요." },
      },
      {
        title: { en: "Chapter 2) Operators and I/O", ko: "챕터 2) 연산자와 입출력" },
        explain: { en: "Read input and compute with arithmetic and conditions.", ko: "입력을 받아 연산과 조건 처리를 합니다." },
        steps: { en: ["input()", "int conversion", "f-string output"], ko: ["input()", "int 변환", "f-string 출력"] },
        code: `price=int(input("price:"))\nqty=int(input("qty:"))\nprint(price*qty)`,
      },
      {
        title: { en: "Chapter 3) Conditionals", ko: "챕터 3) 조건문" },
        explain: { en: "Use if/elif/else for branching.", ko: "if/elif/else로 분기를 처리합니다." },
        steps: { en: ["Single branch", "Multiple branch", "Nested condition"], ko: ["단일 분기", "다중 분기", "중첩 조건"] },
        code: `if score>=90:\n  grade='A'\nelif score>=80:\n  grade='B'`,
      },
      {
        title: { en: "Chapter 4) Loops", ko: "챕터 4) 반복문" },
        explain: { en: "Process repeated data with for/while loops.", ko: "for/while로 반복 데이터를 처리합니다." },
        steps: { en: ["for range", "for list", "while condition"], ko: ["for range", "for 리스트", "while 조건"] },
      },
      {
        title: { en: "Chapter 5) Lists and dicts", ko: "챕터 5) 리스트와 딕셔너리" },
        explain: { en: "Model structured data with list and dictionary.", ko: "리스트/딕셔너리로 구조화된 데이터를 다룹니다." },
        steps: { en: ["list index", "dict key access", "loop through items"], ko: ["리스트 인덱스", "딕셔너리 키 접근", "항목 반복"] },
      },
      {
        title: { en: "Chapter 6) Functions", ko: "챕터 6) 함수" },
        explain: { en: "Refactor repeated logic into reusable functions.", ko: "반복 로직을 함수로 분리합니다." },
        steps: { en: ["define function", "arguments", "return"], ko: ["함수 정의", "인자", "반환값"] },
      },
      {
        title: { en: "Chapter 7) Modules", ko: "챕터 7) 모듈" },
        explain: { en: "Split scripts into multiple files for maintainability.", ko: "유지보수를 위해 파일을 분리합니다." },
        steps: { en: ["create utils.py", "import function"], ko: ["utils.py 생성", "함수 import"] },
      },
      {
        title: { en: "Chapter 8) File and CSV", ko: "챕터 8) 파일과 CSV" },
        explain: { en: "Read and write files for real data tasks.", ko: "실제 데이터 작업을 위해 파일 입출력을 학습합니다." },
        steps: { en: ["open/read", "csv module", "write output"], ko: ["open/read", "csv 모듈", "결과 저장"] },
      },
      {
        title: { en: "Chapter 9) Error handling", ko: "챕터 9) 예외처리" },
        explain: { en: "Use try/except to keep programs robust.", ko: "try/except로 프로그램 안정성을 높입니다." },
        steps: { en: ["catch ValueError", "handle file errors"], ko: ["ValueError 처리", "파일 오류 처리"] },
      },
      {
        title: { en: "Chapter 10) Mini project", ko: "챕터 10) 미니프로젝트" },
        explain: { en: "Build student score analyzer as an integration task.", ko: "성적 분석기를 통합 과제로 구현합니다." },
        steps: { en: ["read csv", "compute metrics", "output report"], ko: ["csv 읽기", "지표 계산", "리포트 출력"] },
      },
    ],
  },
  "02-statistics": {
    intro: {
      en: "Practical statistics for data decisions.",
      ko: "데이터 의사결정을 위한 실전 통계 트랙입니다.",
    },
    lessons: [
      { title: { en: "Chapter 1) Descriptive stats", ko: "챕터 1) 기술통계" }, explain: { en: "Understand central tendency and spread.", ko: "중심 경향과 산포를 이해합니다." }, steps: { en: ["mean/median/std", "describe()"], ko: ["평균/중앙값/표준편차", "describe()"] } },
      { title: { en: "Chapter 2) Distribution & outliers", ko: "챕터 2) 분포와 이상치" }, explain: { en: "Inspect skew and outliers with visuals.", ko: "시각화로 왜도와 이상치를 확인합니다." }, steps: { en: ["histogram", "boxplot", "IQR rule"], ko: ["히스토그램", "박스플롯", "IQR 규칙"] } },
      { title: { en: "Chapter 3) Probability basics", ko: "챕터 3) 확률 기초" }, explain: { en: "Use probability for uncertainty reasoning.", ko: "불확실성 해석에 확률 개념을 적용합니다." }, steps: { en: ["event probability", "conditional probability"], ko: ["사건확률", "조건부확률"] } },
      { title: { en: "Chapter 4) Sampling & CLT", ko: "챕터 4) 표본추출과 중심극한정리" }, explain: { en: "Learn why sample means stabilize.", ko: "표본평균이 안정되는 이유를 학습합니다." }, steps: { en: ["resampling", "sample mean distribution"], ko: ["리샘플링", "표본평균 분포"] } },
      { title: { en: "Chapter 5) Confidence interval", ko: "챕터 5) 신뢰구간" }, explain: { en: "Express metric uncertainty with intervals.", ko: "구간으로 지표 불확실성을 표현합니다." }, steps: { en: ["point estimate", "standard error", "95% CI"], ko: ["점추정", "표준오차", "95% 신뢰구간"] } },
      { title: { en: "Chapter 6) Hypothesis testing", ko: "챕터 6) 가설검정" }, explain: { en: "Decide whether observed difference is meaningful.", ko: "관측된 차이가 의미 있는지 검정합니다." }, steps: { en: ["H0/H1", "p-value", "interpretation"], ko: ["귀무/대립가설", "p-value", "해석"] } },
      { title: { en: "Chapter 7) A/B testing", ko: "챕터 7) A/B 테스트" }, explain: { en: "Compare variants for product decisions.", ko: "제품 의사결정을 위해 실험군/대조군을 비교합니다." }, steps: { en: ["conversion", "lift", "significance"], ko: ["전환율", "향상률", "유의성"] } },
      { title: { en: "Chapter 8) Statistical reporting", ko: "챕터 8) 통계 리포팅" }, explain: { en: "Write action-ready summary from statistical results.", ko: "통계 결과를 행동 가능한 요약으로 작성합니다." }, steps: { en: ["insight", "risk", "recommendation"], ko: ["인사이트", "리스크", "권고안"] } },
    ],
  },
  "03-sql": {
    intro: {
      en: "SQL for real analytics workflow from query to KPI pack.",
      ko: "조회부터 KPI 쿼리팩까지 실무 분석 SQL을 다룹니다.",
    },
    lessons: [
      { title: { en: "Chapter 1) SELECT/WHERE/ORDER", ko: "챕터 1) SELECT/WHERE/ORDER" }, explain: { en: "Filter and sort core datasets.", ko: "핵심 데이터 조회/필터/정렬을 수행합니다." }, steps: { en: ["select columns", "where filters", "order results"], ko: ["컬럼 선택", "조건 필터", "결과 정렬"] } },
      { title: { en: "Chapter 2) GROUP BY", ko: "챕터 2) GROUP BY" }, explain: { en: "Aggregate business metrics by dimension.", ko: "차원별 비즈니스 지표를 집계합니다." }, steps: { en: ["sum/count/avg", "having"], ko: ["sum/count/avg", "having"] } },
      { title: { en: "Chapter 3) JOIN", ko: "챕터 3) JOIN" }, explain: { en: "Combine tables safely and validate counts.", ko: "테이블을 안전하게 조인하고 행 수를 검증합니다." }, steps: { en: ["inner/left join", "key validation"], ko: ["inner/left join", "키 검증"] } },
      { title: { en: "Chapter 4) CTE/Subquery", ko: "챕터 4) CTE/서브쿼리" }, explain: { en: "Split complex query into readable blocks.", ko: "복잡한 쿼리를 읽기 쉬운 단계로 분리합니다." }, steps: { en: ["with clause", "multi-step query"], ko: ["with 절", "다단계 쿼리"] } },
      { title: { en: "Chapter 5) Window functions", ko: "챕터 5) 윈도우 함수" }, explain: { en: "Compute rank and running metrics.", ko: "순위와 누적 지표를 계산합니다." }, steps: { en: ["partition", "rank", "lag"], ko: ["partition", "rank", "lag"] } },
      { title: { en: "Chapter 6) Time-series SQL", ko: "챕터 6) 시계열 SQL" }, explain: { en: "Build weekly/monthly trend metrics.", ko: "주간/월간 추세 지표를 생성합니다." }, steps: { en: ["date_trunc", "mom/yoy"], ko: ["date_trunc", "mom/yoy"] } },
      { title: { en: "Chapter 7) KPI pack", ko: "챕터 7) KPI 팩" }, explain: { en: "Standardize reusable KPI queries.", ko: "재사용 가능한 KPI 쿼리를 표준화합니다." }, steps: { en: ["template queries", "metric contracts"], ko: ["템플릿 쿼리", "지표 정의"] } },
      { title: { en: "Chapter 8) Optimization", ko: "챕터 8) 최적화" }, explain: { en: "Use explain plans and indexing basics.", ko: "실행계획과 인덱스 기초로 성능을 개선합니다." }, steps: { en: ["explain analyze", "reduce scan"], ko: ["explain analyze", "스캔량 감소"] } },
    ],
  },
  "04-data-viz": {
    intro: { en: "Visual analytics and storytelling for decisions.", ko: "의사결정을 위한 시각 분석과 스토리텔링입니다." },
    lessons: [
      { title: { en: "Chapter 1) Chart selection", ko: "챕터 1) 차트 선택" }, explain: { en: "Choose chart type based on question.", ko: "질문에 맞는 차트 유형을 선택합니다." }, steps: { en: ["comparison", "trend", "relationship"], ko: ["비교", "추세", "관계"] } },
      { title: { en: "Chapter 2) Visual design", ko: "챕터 2) 시각 디자인" }, explain: { en: "Improve clarity with labels/colors/axes.", ko: "라벨/색상/축으로 전달력을 높입니다." }, steps: { en: ["color semantics", "axis integrity", "declutter"], ko: ["색상 의미화", "축 무결성", "요소 정리"] } },
      { title: { en: "Chapter 3) Dashboard layout", ko: "챕터 3) 대시보드 레이아웃" }, explain: { en: "Build KPI-first dashboard structure.", ko: "KPI 중심 대시보드 구조를 만듭니다." }, steps: { en: ["kpi row", "trend area", "detail table"], ko: ["kpi 영역", "추세 영역", "상세 테이블"] } },
      { title: { en: "Chapter 4) Storytelling", ko: "챕터 4) 스토리텔링" }, explain: { en: "Present insight as context-evidence-action.", ko: "맥락-근거-행동 구조로 제시합니다." }, steps: { en: ["problem framing", "evidence", "recommendation"], ko: ["문제정의", "근거", "권고안"] } },
    ],
  },
  "05-ml-fundamentals": {
    intro: { en: "Core machine learning workflow from baseline to evaluation.", ko: "베이스라인부터 평가까지 머신러닝 핵심 워크플로를 학습합니다." },
    lessons: [
      { title: { en: "Chapter 1) Problem framing", ko: "챕터 1) 문제정의" }, explain: { en: "Define target, features, and success metric.", ko: "타깃/피처/성공지표를 정의합니다." }, steps: { en: ["target definition", "data split", "metric choice"], ko: ["타깃 정의", "데이터 분할", "지표 선택"] } },
      { title: { en: "Chapter 2) Data preprocessing", ko: "챕터 2) 전처리" }, explain: { en: "Handle missing values, encoding, scaling.", ko: "결측치/인코딩/스케일링을 처리합니다." }, steps: { en: ["clean", "encode", "scale"], ko: ["정제", "인코딩", "스케일링"] } },
      { title: { en: "Chapter 3) Baseline models", ko: "챕터 3) 베이스라인 모델" }, explain: { en: "Train simple models first for reference.", ko: "기준선 확보를 위해 단순 모델부터 학습합니다." }, steps: { en: ["logistic/linear", "decision tree"], ko: ["로지스틱/선형", "의사결정트리"] } },
      { title: { en: "Chapter 4) Evaluation and CV", ko: "챕터 4) 평가와 교차검증" }, explain: { en: "Use proper metrics and cross-validation.", ko: "적절한 지표와 교차검증을 사용합니다." }, steps: { en: ["precision/recall", "k-fold cv"], ko: ["precision/recall", "k-fold cv"] } },
      { title: { en: "Chapter 5) Feature engineering", ko: "챕터 5) 피처 엔지니어링" }, explain: { en: "Create domain-driven features.", ko: "도메인 기반 피처를 생성합니다." }, steps: { en: ["feature transform", "interaction features"], ko: ["피처 변환", "상호작용 피처"] } },
      { title: { en: "Chapter 6) Model comparison", ko: "챕터 6) 모델 비교" }, explain: { en: "Compare multiple models fairly.", ko: "여러 모델을 공정하게 비교합니다." }, steps: { en: ["same split", "same metric", "error analysis"], ko: ["동일 분할", "동일 지표", "오류 분석"] } },
    ],
  },
  "06-deep-learning": {
    intro: { en: "Deep learning foundations and practical training loops.", ko: "딥러닝 기초와 실전 학습 루프를 다룹니다." },
    lessons: [
      { title: { en: "Chapter 1) Neural network basics", ko: "챕터 1) 신경망 기초" }, explain: { en: "Understand layers, activations, and loss.", ko: "레이어/활성화/손실함수를 이해합니다." }, steps: { en: ["forward pass", "loss", "gradient"], ko: ["순전파", "손실", "기울기"] } },
      { title: { en: "Chapter 2) Training loop", ko: "챕터 2) 학습 루프" }, explain: { en: "Implement train/validation loop with optimizer.", ko: "옵티마이저 기반 학습/검증 루프를 구현합니다." }, steps: { en: ["batch", "backprop", "optimizer step"], ko: ["배치", "역전파", "optimizer step"] } },
      { title: { en: "Chapter 3) CNN basics", ko: "챕터 3) CNN 기초" }, explain: { en: "Apply convolutional models to image tasks.", ko: "이미지 문제에 CNN을 적용합니다." }, steps: { en: ["conv block", "pooling", "classifier"], ko: ["conv 블록", "풀링", "분류기"] } },
      { title: { en: "Chapter 4) Transformer basics", ko: "챕터 4) Transformer 기초" }, explain: { en: "Understand attention and sequence modeling.", ko: "어텐션과 시퀀스 모델링을 학습합니다." }, steps: { en: ["tokenization", "attention", "fine-tuning"], ko: ["토크나이징", "어텐션", "파인튜닝"] } },
      { title: { en: "Chapter 5) Regularization and debugging", ko: "챕터 5) 일반화와 디버깅" }, explain: { en: "Handle overfitting and unstable training.", ko: "과적합과 불안정 학습을 해결합니다." }, steps: { en: ["dropout", "early stopping", "lr tuning"], ko: ["dropout", "조기종료", "학습률 조정"] } },
    ],
  },
  "07-llm": {
    intro: { en: "Build practical LLM apps with prompting, RAG, and evaluation.", ko: "프롬프트·RAG·평가를 포함한 실전 LLM 앱을 구축합니다." },
    lessons: [
      { title: { en: "Chapter 1) Prompt design", ko: "챕터 1) 프롬프트 설계" }, explain: { en: "Design instructions and constraints clearly.", ko: "지시와 제약을 명확하게 설계합니다." }, steps: { en: ["role", "task", "format"], ko: ["역할", "작업", "출력형식"] } },
      { title: { en: "Chapter 2) Retrieval basics", ko: "챕터 2) 검색 기반 기초" }, explain: { en: "Connect external docs with embeddings + vector search.", ko: "임베딩과 벡터검색으로 외부 문서를 연결합니다." }, steps: { en: ["chunking", "embedding", "retrieval"], ko: ["청킹", "임베딩", "검색"] } },
      { title: { en: "Chapter 3) RAG pipeline", ko: "챕터 3) RAG 파이프라인" }, explain: { en: "Assemble query-retrieve-generate flow.", ko: "질의-검색-생성 흐름을 구성합니다." }, steps: { en: ["retriever", "prompt context", "answer generation"], ko: ["retriever", "컨텍스트 주입", "답변 생성"] } },
      { title: { en: "Chapter 4) LLM evaluation", ko: "챕터 4) LLM 평가" }, explain: { en: "Evaluate quality, faithfulness, and safety.", ko: "품질/사실성/안전성을 평가합니다." }, steps: { en: ["test set", "rubric", "score tracking"], ko: ["테스트셋", "평가루브릭", "점수추적"] } },
      { title: { en: "Chapter 5) App integration", ko: "챕터 5) 앱 통합" }, explain: { en: "Integrate LLM feature into web app workflow.", ko: "웹앱 워크플로에 LLM 기능을 통합합니다." }, steps: { en: ["api endpoint", "latency handling", "fallback"], ko: ["api 엔드포인트", "지연 처리", "대체 경로"] } },
    ],
  },
  "08-mlops": {
    intro: { en: "From model notebook to reliable production operations.", ko: "노트북 모델을 안정적인 운영 환경으로 옮기는 과정입니다." },
    lessons: [
      { title: { en: "Chapter 1) Packaging and API", ko: "챕터 1) 패키징과 API" }, explain: { en: "Serve model via API endpoint.", ko: "모델을 API 엔드포인트로 서비스합니다." }, steps: { en: ["model artifact", "fastapi", "inference schema"], ko: ["모델 아티팩트", "fastapi", "입출력 스키마"] } },
      { title: { en: "Chapter 2) Docker and deployment", ko: "챕터 2) Docker와 배포" }, explain: { en: "Containerize and deploy reproducibly.", ko: "컨테이너화해 재현 가능한 배포를 수행합니다." }, steps: { en: ["dockerfile", "build", "deploy"], ko: ["dockerfile", "빌드", "배포"] } },
      { title: { en: "Chapter 3) CI/CD", ko: "챕터 3) CI/CD" }, explain: { en: "Automate test/build/release pipeline.", ko: "테스트/빌드/릴리즈 파이프라인을 자동화합니다." }, steps: { en: ["unit test", "lint", "deploy trigger"], ko: ["단위테스트", "lint", "배포 트리거"] } },
      { title: { en: "Chapter 4) Monitoring", ko: "챕터 4) 모니터링" }, explain: { en: "Track latency, errors, drift, and data quality.", ko: "지연/오류/드리프트/데이터 품질을 모니터링합니다." }, steps: { en: ["service metrics", "model metrics", "alerts"], ko: ["서비스 지표", "모델 지표", "알림"] } },
      { title: { en: "Chapter 5) Retraining strategy", ko: "챕터 5) 재학습 전략" }, explain: { en: "Define when and how to retrain safely.", ko: "언제/어떻게 안전하게 재학습할지 정의합니다." }, steps: { en: ["trigger policy", "evaluation gate", "rollout"], ko: ["트리거 정책", "평가 게이트", "점진 배포"] } },
    ],
  },
  "09-capstone": {
    intro: { en: "End-to-end portfolio project integrating all prior tracks.", ko: "앞선 트랙을 통합한 엔드투엔드 포트폴리오 프로젝트입니다." },
    lessons: [
      { title: { en: "Chapter 1) Problem statement", ko: "챕터 1) 문제 정의" }, explain: { en: "Define user pain and measurable target.", ko: "사용자 문제와 측정 가능한 목표를 정의합니다." }, steps: { en: ["user persona", "success metric", "scope"], ko: ["사용자 정의", "성공지표", "범위 설정"] } },
      { title: { en: "Chapter 2) Data and baseline", ko: "챕터 2) 데이터와 베이스라인" }, explain: { en: "Prepare dataset and baseline approach.", ko: "데이터셋과 베이스라인 접근을 준비합니다." }, steps: { en: ["data pipeline", "eda", "baseline"], ko: ["데이터 파이프라인", "eda", "베이스라인"] } },
      { title: { en: "Chapter 3) Build MVP", ko: "챕터 3) MVP 구축" }, explain: { en: "Implement core model/app quickly.", ko: "핵심 모델/앱을 빠르게 구현합니다." }, steps: { en: ["feature dev", "model/app integration", "demo"], ko: ["기능개발", "모델/앱 통합", "데모"] } },
      { title: { en: "Chapter 4) Evaluation and iteration", ko: "챕터 4) 평가와 개선" }, explain: { en: "Measure impact and iterate based on failures.", ko: "성과를 측정하고 실패 기반으로 개선합니다." }, steps: { en: ["evaluation", "error analysis", "iteration"], ko: ["평가", "오류분석", "개선"] } },
      { title: { en: "Chapter 5) Publish portfolio", ko: "챕터 5) 포트폴리오 공개" }, explain: { en: "Publish code, demo, and case-study writeup.", ko: "코드/데모/케이스스터디를 공개합니다." }, steps: { en: ["public repo", "deployed demo", "write case study"], ko: ["공개 저장소", "배포 데모", "케이스스터디 작성"] } },
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
