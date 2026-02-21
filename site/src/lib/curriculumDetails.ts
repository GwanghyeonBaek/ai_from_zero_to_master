import fs from "node:fs";
import path from "node:path";
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
      en: "Orientation is your system-design phase for learning. You set tools, authentication, repo rules, and execution habits before touching advanced topics.",
      ko: "오리엔테이션은 학습 시스템 설계 단계입니다. 고급 주제 전에 도구·인증·저장소 규칙·실행 습관을 먼저 구축합니다.",
    },
    lessons: [
      {
        title: { en: "Chapter 1) Toolchain installation checklist", ko: "챕터 1) 도구 체인 설치 체크리스트" },
        why: {
          en: "If your base tools are unstable, every later lesson fails randomly. This is like building a house foundation before walls.",
          ko: "기초 도구가 불안정하면 이후 학습이 계속 랜덤하게 실패합니다. 벽보다 기초 공사가 먼저인 것과 같습니다.",
        },
        terms: {
          en: [
            { term: "Interpreter", desc: "Program that executes Python code" },
            { term: "CLI", desc: "Command Line Interface tool" },
            { term: "Extension", desc: "VS Code add-on feature" },
            { term: "PATH", desc: "Environment variable for command lookup" },
            { term: "Workspace", desc: "Root folder for one project" },
          ],
          ko: [
            { term: "인터프리터", desc: "파이썬 코드를 실행하는 프로그램" },
            { term: "CLI", desc: "명령줄 기반 도구" },
            { term: "확장(Extension)", desc: "VS Code 기능 추가 모듈" },
            { term: "PATH", desc: "명령어 위치를 찾는 환경변수" },
            { term: "워크스페이스", desc: "프로젝트 루트 폴더" },
          ],
        },
        explain: {
          en: "Install Python 3.11+, Git, and VS Code. In VS Code, install Python extension and select the project interpreter. Think of this as preparing one clean lab bench before experiments.",
          ko: "Python 3.11+, Git, VS Code를 설치하고 VS Code에서 Python 확장을 설치해 프로젝트 인터프리터를 선택합니다. 실험 전에 깨끗한 실험대를 만드는 단계라고 보면 됩니다.",
        },
        steps: {
          en: [
            "Install Python from python.org (or package manager)",
            "Install Git and confirm git command",
            "Install VS Code + Python extension",
            "Open project folder as workspace",
            "Verify versions in terminal (python3 or py on Windows)",
          ],
          ko: [
            "python.org(또는 패키지 매니저)로 Python 설치",
            "Git 설치 후 git 명령 인식 확인",
            "VS Code + Python 확장 설치",
            "프로젝트 폴더를 워크스페이스로 열기",
            "터미널에서 버전 확인",
          ],
        },
        code: `python3 --version\ngit --version\ncode --version`,
        mistakes: {
          en: [
            "Installing multiple Python versions and not knowing active one",
            "Working in random folders outside a workspace",
            "Skipping version checks after installation",
            "Not selecting interpreter in VS Code",
          ],
          ko: [
            "파이썬 다중 설치 후 현재 활성 버전 미확인",
            "워크스페이스 밖 임의 폴더에서 작업",
            "설치 후 버전 확인 생략",
            "VS Code 인터프리터 선택 누락",
          ],
        },
        practice: {
          en: "Capture a screenshot or log proving Python, Git, and VS Code are correctly installed and recognized.",
          ko: "Python/Git/VS Code가 정상 인식되는 화면 또는 로그를 캡처해 증빙하세요.",
        },
        next: {
          en: "Now isolate dependencies with a virtual environment.",
          ko: "다음은 가상환경으로 의존성을 격리합니다.",
        },
      },
      {
        title: { en: "Chapter 2) Virtual environment and dependency hygiene", ko: "챕터 2) 가상환경과 의존성 위생" },
        why: {
          en: "Without isolation, package versions conflict across projects. A venv is like giving each project its own private kitchen.",
          ko: "격리가 없으면 프로젝트 간 패키지 버전 충돌이 발생합니다. venv는 프로젝트마다 독립 주방을 주는 것과 같습니다.",
        },
        terms: {
          en: [
            { term: "venv", desc: "Project-local Python environment" },
            { term: "pip", desc: "Python package installer" },
            { term: "requirements.txt", desc: "Dependency snapshot for reproducibility" },
            { term: "Activation", desc: "Switch shell context to venv" },
            { term: "Reproducibility", desc: "Ability to recreate same environment" },
          ],
          ko: [
            { term: "venv", desc: "프로젝트 로컬 파이썬 환경" },
            { term: "pip", desc: "파이썬 패키지 설치 도구" },
            { term: "requirements.txt", desc: "의존성 목록 파일" },
            { term: "활성화", desc: "쉘을 가상환경 컨텍스트로 전환" },
            { term: "재현성", desc: "동일 환경 재구성 가능성" },
          ],
        },
        explain: {
          en: "Create .venv inside each project, activate it, install packages there, and freeze dependencies. Official Python docs emphasize environments are disposable and should be recreated, not moved.",
          ko: "프로젝트마다 .venv를 만들고 활성화한 뒤 그 안에 패키지를 설치하고 의존성을 고정합니다. 파이썬 공식 문서도 환경은 이동보다 재생성이 원칙이라고 강조합니다.",
        },
        steps: {
          en: [
            "Create .venv with python -m venv .venv",
            "Activate environment (Linux/macOS/Windows)",
            "Install packages with python -m pip",
            "Save dependencies with python -m pip freeze > requirements.txt",
            "Add .venv to .gitignore",
          ],
          ko: [
            "python -m venv .venv로 가상환경 생성",
            "OS별 방식으로 가상환경 활성화",
            "python -m pip로 패키지 설치",
            "python -m pip freeze > requirements.txt로 의존성 저장",
            ".gitignore에 .venv 추가",
          ],
        },
        code: `python3 -m venv .venv\n# Linux/macOS\nsource .venv/bin/activate\n# Windows PowerShell\n.venv\\Scripts\\Activate.ps1\n# Windows CMD\n.venv\\Scripts\\activate.bat\npython -m pip install -U pip\npython -m pip freeze > requirements.txt`,
        mistakes: {
          en: [
            "Committing .venv directory to git",
            "Installing globally instead of inside venv",
            "Forgetting to regenerate requirements after package changes",
            "Trying to copy/move venv between machines",
          ],
          ko: [
            ".venv 디렉토리를 git에 커밋",
            "가상환경 대신 전역 설치",
            "패키지 변경 후 requirements 갱신 누락",
            "가상환경을 기기 간 복사/이동 시도",
          ],
        },
        practice: {
          en: "Delete your .venv and recreate it only from requirements.txt to prove reproducibility.",
          ko: ".venv를 삭제한 뒤 requirements.txt만으로 재생성해 재현성을 검증하세요.",
        },
        next: {
          en: "Next, configure Git identity and repository defaults correctly.",
          ko: "다음은 Git 신원 정보와 저장소 기본값을 정확히 설정합니다.",
        },
      },
      {
        title: { en: "Chapter 3) Git identity and local workflow", ko: "챕터 3) Git 신원 설정과 로컬 워크플로" },
        why: {
          en: "Commit history is your learning evidence. Wrong identity and messy commits destroy traceability.",
          ko: "커밋 히스토리는 학습 증거입니다. 신원 설정 오류와 난잡한 커밋은 추적성을 망칩니다.",
        },
        terms: {
          en: [
            { term: "user.name", desc: "Commit author name" },
            { term: "user.email", desc: "Commit author email" },
            { term: "init.defaultBranch", desc: "Default branch for new repos" },
            { term: "Staging", desc: "Preparing selected changes" },
            { term: "Atomic commit", desc: "One logical change per commit" },
          ],
          ko: [
            { term: "user.name", desc: "커밋 작성자 이름" },
            { term: "user.email", desc: "커밋 작성자 이메일" },
            { term: "init.defaultBranch", desc: "새 저장소 기본 브랜치" },
            { term: "스테이징", desc: "선택 변경사항 준비 단계" },
            { term: "원자적 커밋", desc: "논리적 변경 1개 단위 커밋" },
          ],
        },
        explain: {
          en: "Set identity once globally, but override per repo when needed. Use small, meaningful commits with clear messages. Think of Git identity and commit discipline like labeling every lab sample: if labels are wrong or mixed, you cannot trust later analysis. Git docs emphasize config scopes: system, global, local.",
          ko: "신원 정보는 전역으로 1회 설정하되 필요 시 저장소 단위로 오버라이드합니다. 작은 단위의 의미 있는 커밋과 명확한 메시지를 사용하세요. Git 신원과 커밋 규율은 실험 샘플 라벨링과 같아서, 라벨이 틀리거나 섞이면 이후 분석을 신뢰할 수 없습니다. Git 문서도 설정 범위(system/global/local)를 강조합니다.",
        },
        steps: {
          en: [
            "Set global user.name and user.email",
            "Set default branch name to main",
            "Check effective config values",
            "Commit one logical change at a time",
          ],
          ko: [
            "전역 user.name/user.email 설정",
            "기본 브랜치를 main으로 설정",
            "현재 적용 설정값 확인",
            "논리 변경 1개 단위로 커밋",
          ],
        },
        code: `git config --global user.name "YourName"\ngit config --global user.email "you@example.com"\ngit config --global init.defaultBranch main\ngit config --list --show-origin`,
        mistakes: {
          en: [
            "Using wrong email causing disconnected contribution graph",
            "One giant commit for many unrelated changes",
            "No commit message convention",
          ],
          ko: [
            "잘못된 이메일로 기여 그래프 연결 실패",
            "무관한 변경을 한 번에 대형 커밋",
            "커밋 메시지 규칙 부재",
          ],
        },
        practice: {
          en: "Create three atomic commits: setup, dependency, and README update.",
          ko: "setup/dependency/README 변경을 각각 원자적 커밋 3개로 분리해보세요.",
        },
        next: {
          en: "Now connect local git to GitHub authentication safely.",
          ko: "이제 로컬 Git을 GitHub 인증과 안전하게 연결합니다.",
        },
      },
      {
        title: { en: "Chapter 4) GitHub authentication (PAT vs SSH)", ko: "챕터 4) GitHub 인증(PAT vs SSH)" },
        why: {
          en: "Push/pull automation depends on stable authentication. Security mistakes here can leak full repo access.",
          ko: "push/pull 자동화는 안정적인 인증이 핵심이며, 보안 실수 시 저장소 접근이 노출될 수 있습니다.",
        },
        terms: {
          en: [
            { term: "PAT", desc: "Personal Access Token for HTTPS auth" },
            { term: "Fine-grained token", desc: "Token with minimal scoped permissions" },
            { term: "SSH key", desc: "Public/private keypair auth" },
            { term: "Least privilege", desc: "Grant only required permissions" },
            { term: "Credential helper", desc: "Securely stores credentials locally" },
          ],
          ko: [
            { term: "PAT", desc: "HTTPS 인증용 개인 액세스 토큰" },
            { term: "세분화 토큰", desc: "최소 권한 범위 토큰" },
            { term: "SSH 키", desc: "공개키/개인키 기반 인증" },
            { term: "최소권한", desc: "필요한 권한만 부여" },
            { term: "credential helper", desc: "로컬 인증정보 저장 도구" },
          ],
        },
        explain: {
          en: "For HTTPS, use fine-grained PAT with expiration and minimum repo permissions. For long-term development machines, SSH keys are often more convenient. Think of PAT/SSH like office access cards and master keys: you issue the minimum access, track who can enter, and immediately disable compromised credentials. Never hardcode tokens in scripts.",
          ko: "HTTPS는 만료일과 최소 저장소 권한을 가진 세분화 PAT를 사용합니다. 장기 개발 머신은 SSH 키가 더 편한 경우가 많습니다. PAT/SSH는 출입카드와 마스터키처럼 다뤄야 해서, 최소 권한만 발급하고 접근 주체를 추적하며 노출 즉시 비활성화해야 합니다. 토큰을 스크립트에 하드코딩하면 안 됩니다.",
        },
        steps: {
          en: [
            "Choose auth mode (PAT or SSH)",
            "If PAT: create fine-grained token + expiration",
            "If SSH: generate ed25519 key and register public key",
            "Test authentication and push",
          ],
          ko: [
            "인증 방식(PAT/SSH) 선택",
            "PAT라면 세분화 토큰 + 만료일 설정",
            "SSH라면 ed25519 키 생성 후 공개키 등록",
            "인증 테스트 후 push 확인",
          ],
        },
        code: `# HTTPS + PAT flow\ngit config --global credential.helper store\ngit remote set-url origin https://github.com/<user>/<repo>.git\ngit push\n# (enter GitHub username + PAT when prompted)\n\n# SSH flow\nssh-keygen -t ed25519 -C "you@example.com"\nssh-add ~/.ssh/id_ed25519\ncat ~/.ssh/id_ed25519.pub\nssh -T git@github.com`,
        mistakes: {
          en: [
            "Using over-permissioned classic tokens without expiration",
            "Committing PAT into repo accidentally",
            "Not revoking and rotating token after exposure",
            "Sharing private SSH key or skipping passphrase protection",
          ],
          ko: [
            "만료 없는 과권한 classic 토큰 사용",
            "PAT를 저장소에 실수로 커밋",
            "토큰 노출 후 revoke/rotation 미실행",
            "SSH 개인키 공유 또는 패스프레이즈 미설정",
          ],
        },
        practice: {
          en: "Set up both PAT and SSH in a sandbox repo, then document when to choose each.",
          ko: "샌드박스 저장소에서 PAT와 SSH를 모두 설정하고, 각각 언제 쓰는지 기준을 문서화하세요.",
        },
        next: {
          en: "With auth done, enforce project structure and quality commands.",
          ko: "인증이 끝났다면 프로젝트 구조와 품질 명령을 고정합니다.",
        },
      },
      {
        title: { en: "Chapter 5) Project scaffold and quality baseline", ko: "챕터 5) 프로젝트 스캐폴드와 품질 기준" },
        why: {
          en: "A consistent scaffold prevents chaos when content grows across many tracks.",
          ko: "트랙이 많아질수록 일관된 스캐폴드가 없으면 금방 혼란해집니다.",
        },
        terms: {
          en: [
            { term: "Scaffold", desc: "Initial folder/file skeleton" },
            { term: "Lint", desc: "Static code quality checks" },
            { term: "Build", desc: "Compile/validate site output" },
            { term: "CI", desc: "Automated checks per push" },
          ],
          ko: [
            { term: "스캐폴드", desc: "초기 폴더/파일 골격" },
            { term: "린트", desc: "정적 코드 품질 검사" },
            { term: "빌드", desc: "사이트 결과 검증/생성" },
            { term: "CI", desc: "push마다 자동 점검" },
          ],
        },
        explain: {
          en: "Define folder conventions, run commands, and done-definition now. This is like labeling shelves in a warehouse before stock arrives—retrieval stays fast as content grows.",
          ko: "폴더 규칙·실행 명령·완료 기준을 지금 정의하면 이후 콘텐츠 확장 시 시간을 크게 절약합니다. 물건 입고 전에 창고 선반 라벨을 붙이는 것과 같은 원리입니다.",
        },
        steps: {
          en: [
            "Create standard folders (curriculum/resources/site)",
            "Document setup commands in README",
            "Run lint/build before each push",
            "Adopt commit message convention",
          ],
          ko: [
            "표준 폴더(curriculum/resources/site) 구성",
            "README에 실행 명령 문서화",
            "매 push 전 lint/build 실행",
            "커밋 메시지 규칙 적용",
          ],
        },
        code: `npm run build\n# optional\n# npm run lint`,
        mistakes: {
          en: [
            "Skipping lint/build before push",
            "No README setup/run instructions",
            "Inconsistent folder naming across tracks",
            "No CI parity between local and remote checks",
          ],
          ko: [
            "push 전 lint/build 생략",
            "README에 설치/실행 안내 미작성",
            "트랙별 폴더 네이밍 불일치",
            "로컬/원격 검사 기준 불일치",
          ],
        },
        practice: {
          en: "Write a one-page contributor guide: setup, run, commit, deploy.",
          ko: "설치/실행/커밋/배포를 포함한 1페이지 기여 가이드를 작성하세요.",
        },
        next: {
          en: "Final chapter creates your 2-week learning execution plan.",
          ko: "마지막 챕터에서 2주 학습 실행 계획을 만듭니다.",
        },
      },
      {
        title: { en: "Chapter 6) 14-day execution plan", ko: "챕터 6) 14일 실행 계획" },
        why: {
          en: "People fail not because content is weak, but because schedule and feedback loops are missing.",
          ko: "학습 실패의 주요 원인은 콘텐츠 부족보다 일정과 피드백 루프 부재입니다.",
        },
        terms: {
          en: [
            { term: "Cadence", desc: "Fixed rhythm of study sessions" },
            { term: "Checkpoint", desc: "Scheduled progress review point" },
            { term: "Retrospective", desc: "Post-activity reflection" },
          ],
          ko: [
            { term: "케이던스", desc: "고정 학습 리듬" },
            { term: "체크포인트", desc: "진도 점검 시점" },
            { term: "회고", desc: "수행 후 개선 정리" },
          ],
        },
        explain: {
          en: "Build a realistic 14-day plan (60–90 min/day): study, coding, review, and publish. Treat it like sprint planning.",
          ko: "현실적인 14일 계획(하루 60~90분)을 구성합니다: 학습·코딩·리뷰·공개. 스프린트 계획처럼 운영하세요.",
        },
        steps: {
          en: [
            "Define daily slot and backup slot",
            "Set day-7 and day-14 checkpoints",
            "Publish one weekly summary",
            "Log blockers and mitigation",
          ],
          ko: [
            "일일 학습 시간과 백업 시간 지정",
            "7일차/14일차 체크포인트 설정",
            "주간 요약 1회 공개",
            "장애요인과 대응책 기록",
          ],
        },
        code: `Day | Time | Output | Checkpoint\n01  | 20:00-21:00 | Setup notes | Tools verified\n07  | 20:00-21:30 | Week-1 summary | Checkpoint review\n14  | 20:00-21:30 | Final recap | Goal completion` ,
        mistakes: {
          en: [
            "Planning unrealistic daily workload",
            "No buffer day for missed sessions",
            "Checkpoint without measurable criteria",
            "Skipping retrospective after week 1",
          ],
          ko: [
            "비현실적인 일일 학습량 계획",
            "미이행 대비 버퍼일 미설정",
            "측정 기준 없는 체크포인트",
            "1주차 후 회고 생략",
          ],
        },
        practice: {
          en: "Submit your 14-day plan with exact times, outputs, and review criteria.",
          ko: "정확한 시간/산출물/검토기준이 포함된 14일 계획표를 제출하세요.",
        },
        next: {
          en: "You are now ready to start Python fundamentals with a stable execution system.",
          ko: "이제 안정적인 실행 시스템을 갖춘 상태로 파이썬 기초 트랙에 진입할 수 있습니다.",
        },
      },
    ],
  },
  "01-python": {
    intro: {
      en: "A practical Python course from absolute basics to mini-project level. Build by coding every chapter.",
      ko: "완전 기초부터 미니프로젝트 수준까지 가는 실전 파이썬 코스입니다. 각 챕터를 직접 코딩하며 진행합니다.",
    },
    lessons: [
      {
        title: { en: "Chapter 1) Variables and data types", ko: "챕터 1) 변수와 자료형" },
        why: {
          en: "Every program is built on storing values. Without variables and types, you cannot control or transform data.",
          ko: "모든 프로그램은 값을 저장하는 것에서 시작합니다. 변수와 자료형을 모르면 데이터 제어/변환이 불가능합니다.",
        },
        terms: {
          en: [
            { term: "Variable", desc: "A named container storing a value" },
            { term: "Data type", desc: "The category of data (int, str, float, bool)" },
            { term: "Type conversion", desc: "Changing one type into another" },
          ],
          ko: [
            { term: "변수", desc: "값을 이름으로 저장하는 공간" },
            { term: "자료형", desc: "데이터의 종류(int, str, float, bool)" },
            { term: "형변환", desc: "자료형을 다른 형태로 바꾸는 것" },
          ],
        },
        explain: {
          en: "Understand int/float/str/bool and type conversion.",
          ko: "int/float/str/bool과 형변환의 기본을 익힙니다.",
        },
        steps: {
          en: ["Create variables", "Check type()", "Convert with int()/str()/float()"],
          ko: ["변수 선언", "type() 확인", "int()/str()/float() 형변환"],
        },
        code: `age = 27\nheight = 175.2\nname = "Alex"\nprint(type(age), type(height), type(name))\nprint(str(age) + " years old")`,
        mistakes: {
          en: ["Using string and number together without conversion", "Overwriting variable names accidentally"],
          ko: ["문자열과 숫자를 형변환 없이 더함", "같은 변수명을 실수로 덮어씀"],
        },
        practice: { en: "Create 5 variables for your profile and print one formatted sentence.", ko: "자기소개 변수 5개를 만들고 포맷된 문장 1개를 출력하세요." },
        next: {
          en: "Next chapter uses these types in operator expressions and user input.",
          ko: "다음 챕터에서 이 자료형을 연산자와 사용자 입력에 적용합니다.",
        },
      },
      {
        title: { en: "Chapter 2) Operators and input/output", ko: "챕터 2) 연산자와 입출력" },
        why: {
          en: "Programs become interactive only when they accept input and compute results.",
          ko: "입력과 계산이 있어야 프로그램이 실제로 상호작용하게 됩니다.",
        },
        terms: {
          en: [
            { term: "Operator", desc: "A symbol that performs an operation" },
            { term: "Expression", desc: "A piece of code that evaluates to a value" },
            { term: "f-string", desc: "String formatting syntax with braces" },
          ],
          ko: [
            { term: "연산자", desc: "연산을 수행하는 기호" },
            { term: "표현식", desc: "값으로 계산되는 코드 조각" },
            { term: "f-string", desc: "중괄호로 변수 삽입하는 문자열 포맷" },
          ],
        },
        explain: { en: "Use arithmetic/comparison/logical operators with input().", ko: "산술/비교/논리 연산자와 input()을 다룹니다." },
        steps: { en: ["Read user input", "Convert numeric input", "Use f-string output"], ko: ["input()으로 입력 받기", "숫자형 변환", "f-string 출력"] },
        code: `price = int(input("Price: "))\nqty = int(input("Quantity: "))\ntotal = price * qty\nprint(f"Total: {total}")`,
        mistakes: {
          en: ["Forgetting int() conversion from input", "Confusing = and =="],
          ko: ["input 값을 int로 변환하지 않음", "= 과 == 를 혼동"],
        },
        practice: { en: "Build a simple discount calculator (10% off over 100).", ko: "100 이상 10% 할인 계산기를 만드세요." },
        next: {
          en: "Next chapter uses operators to branch logic with if/elif/else.",
          ko: "다음 챕터에서 연산 결과를 조건문(if/elif/else)에 연결합니다.",
        },
      },
      {
        title: { en: "Chapter 3) Conditionals", ko: "챕터 3) 조건문" },
        why: {
          en: "Decision-making logic is the core of automation. Conditionals decide which action to run.",
          ko: "자동화의 핵심은 의사결정 로직입니다. 조건문이 어떤 동작을 실행할지 결정합니다.",
        },
        terms: {
          en: [
            { term: "Boolean", desc: "A True/False value" },
            { term: "Branch", desc: "One path among many conditional paths" },
            { term: "Nested if", desc: "if statement inside another if" },
          ],
          ko: [
            { term: "불리언", desc: "True/False 값" },
            { term: "분기", desc: "조건에 따른 코드 실행 경로" },
            { term: "중첩 if", desc: "if 안에 또 if를 사용하는 구조" },
          ],
        },
        explain: { en: "Control program flow with if/elif/else.", ko: "if/elif/else로 흐름을 제어합니다." },
        steps: { en: ["Single condition", "Multiple branches", "Nested conditions"], ko: ["단일 조건", "다중 분기", "중첩 조건"] },
        code: `score = 83\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelse:\n    grade = "C"\nprint(grade)`,
        mistakes: {
          en: ["Using separate if blocks when elif is needed", "Wrong indentation breaks logic"],
          ko: ["elif 대신 if를 분리해 논리가 깨짐", "들여쓰기 오류로 조건 로직이 깨짐"],
        },
        practice: { en: "Write a login checker with id/password and lock message.", ko: "아이디/비밀번호 검사 + 잠금 메시지 로직을 작성하세요." },
        next: {
          en: "Next chapter repeats conditional logic across multiple items using loops.",
          ko: "다음 챕터에서 반복문을 통해 조건 로직을 여러 데이터에 적용합니다.",
        },
      },
      {
        title: { en: "Chapter 4) Loops", ko: "챕터 4) 반복문" },
        why: {
          en: "Loops remove repetitive work and are essential for processing lists, files, and datasets.",
          ko: "반복문은 반복 작업을 제거하며 리스트/파일/데이터셋 처리의 핵심입니다.",
        },
        terms: {
          en: [
            { term: "Iteration", desc: "One repeated cycle of execution" },
            { term: "for loop", desc: "Looping over iterable items" },
            { term: "while loop", desc: "Looping while condition stays True" },
          ],
          ko: [
            { term: "반복(Iteration)", desc: "코드가 한 번 반복 실행되는 단위" },
            { term: "for 루프", desc: "반복 가능한 데이터의 각 항목 순회" },
            { term: "while 루프", desc: "조건이 참인 동안 반복" },
          ],
        },
        explain: { en: "Iterate data with for/while and control with break/continue.", ko: "for/while 반복과 break/continue 제어를 익힙니다." },
        steps: { en: ["for with range", "for with list", "while with termination"], ko: ["range 기반 for", "리스트 반복", "종료 조건 while"] },
        code: `nums = [3, 7, 10, 2]\nodd_sum = 0\nfor n in nums:\n    if n % 2 == 0:\n        continue\n    odd_sum += n\nprint(odd_sum)`,
        mistakes: {
          en: ["Infinite while loop by missing condition update", "Wrong indentation inside loop body"],
          ko: ["조건 업데이트 누락으로 무한 while", "반복문 블록 들여쓰기 오류"],
        },
        practice: { en: "Print multiplication table (2~9) with nested loops.", ko: "중첩 반복으로 구구단(2~9)을 출력하세요." },
        next: { en: "Next, you will store repeated data in lists and dictionaries.", ko: "다음은 반복 대상이 되는 데이터를 리스트/딕셔너리에 저장해 다룹니다." },
      },
      {
        title: { en: "Chapter 5) Lists and dictionaries", ko: "챕터 5) 리스트와 딕셔너리" },
        why: {
          en: "Real data is structured. Lists and dictionaries let you model that structure directly.",
          ko: "실제 데이터는 구조화되어 있습니다. 리스트/딕셔너리로 그 구조를 그대로 표현합니다.",
        },
        terms: {
          en: [
            { term: "List", desc: "Ordered collection indexed by position" },
            { term: "Dictionary", desc: "Key-value mapping structure" },
            { term: "Mutable", desc: "Can be changed after creation" },
          ],
          ko: [
            { term: "리스트", desc: "순서가 있는 데이터 묶음" },
            { term: "딕셔너리", desc: "키-값 쌍 구조" },
            { term: "가변(Mutable)", desc: "생성 후 값을 변경 가능" },
          ],
        },
        explain: { en: "Store and transform structured data collections.", ko: "구조화된 데이터를 리스트/딕셔너리로 다룹니다." },
        steps: { en: ["Index and slice list", "append/pop", "dict key-value access"], ko: ["리스트 인덱스/슬라이스", "append/pop", "딕셔너리 접근"] },
        code: `students = [{"name": "A", "score": 88}, {"name": "B", "score": 74}]\nfor s in students:\n    print(s["name"], s["score"])`,
        mistakes: {
          en: ["Using wrong index out of range", "Accessing missing dict keys without check"],
          ko: ["존재하지 않는 인덱스 접근", "없는 딕셔너리 키를 바로 접근"],
        },
        practice: { en: "Create a phonebook dict and implement search by name.", ko: "전화번호부 딕셔너리를 만들고 이름 검색을 구현하세요." },
        next: { en: "Next chapter wraps these operations into reusable functions.", ko: "다음 챕터에서 이 로직을 함수로 감싸 재사용합니다." },
      },
      {
        title: { en: "Chapter 6) Functions", ko: "챕터 6) 함수" },
        why: {
          en: "Functions reduce duplication and make code readable, testable, and maintainable.",
          ko: "함수는 중복을 줄이고 코드를 읽기 쉽고 테스트 가능하게 만듭니다.",
        },
        terms: {
          en: [
            { term: "Parameter", desc: "Variable in function definition" },
            { term: "Argument", desc: "Actual value passed to function" },
            { term: "Return value", desc: "Result sent back by function" },
          ],
          ko: [
            { term: "매개변수", desc: "함수 정의부의 변수" },
            { term: "인자", desc: "함수 호출 시 전달하는 값" },
            { term: "반환값", desc: "함수가 돌려주는 결과" },
          ],
        },
        explain: { en: "Package logic into reusable functions with arguments and return values.", ko: "인자/반환값을 사용해 로직을 재사용 가능한 함수로 만듭니다." },
        steps: { en: ["Define function", "Default args", "Return complex values"], ko: ["함수 정의", "기본 인자", "복합 반환값"] },
        code: `def summarize(nums: list[int]) -> tuple[int, float]:\n    total = sum(nums)\n    avg = total / len(nums)\n    return total, avg\n\nprint(summarize([10, 20, 30]))`,
        mistakes: {
          en: ["Printing instead of returning from function", "Using global variables unnecessarily"],
          ko: ["반환 대신 print만 사용", "불필요하게 전역변수에 의존"],
        },
        practice: { en: "Make function that returns max/min/average from a list.", ko: "리스트의 최대/최소/평균을 반환하는 함수를 만드세요." },
        next: { en: "Next, separate functions into modules for cleaner projects.", ko: "다음은 함수를 모듈로 분리해 프로젝트 구조를 정리합니다." },
      },
      {
        title: { en: "Chapter 7) Modules and packages", ko: "챕터 7) 모듈과 패키지" },
        why: {
          en: "As projects grow, file separation is mandatory for collaboration and maintenance.",
          ko: "프로젝트가 커질수록 파일 분리는 협업과 유지보수에 필수입니다.",
        },
        terms: {
          en: [
            { term: "Module", desc: "Single Python file imported elsewhere" },
            { term: "Package", desc: "Folder of related modules" },
            { term: "Import", desc: "Bring code from other files" },
          ],
          ko: [
            { term: "모듈", desc: "다른 파일에서 불러쓰는 파이썬 파일" },
            { term: "패키지", desc: "관련 모듈을 모은 폴더" },
            { term: "import", desc: "다른 파일 코드를 불러오는 구문" },
          ],
        },
        explain: { en: "Split files and import utilities cleanly.", ko: "파일을 분리하고 import로 재사용합니다." },
        steps: { en: ["Create utils.py", "Import function", "Use __name__ guard"], ko: ["utils.py 만들기", "함수 import", "__name__ 가드 사용"] },
        code: `# utils.py\ndef c_to_f(c):\n    return c * 9/5 + 32\n\n# main.py\nfrom utils import c_to_f\nprint(c_to_f(25))`,
        mistakes: {
          en: ["Circular imports between files", "Wrong relative import path"],
          ko: ["파일 간 순환 import 발생", "상대 경로 import 오류"],
        },
        practice: { en: "Split one script into 2 modules: data_io.py and analyzer.py.", ko: "스크립트를 data_io.py와 analyzer.py로 분리하세요." },
        next: { en: "Next chapter handles external data through text/CSV files.", ko: "다음 챕터는 외부 데이터 파일(텍스트/CSV)을 다룹니다." },
      },
      {
        title: { en: "Chapter 8) File handling and CSV", ko: "챕터 8) 파일 처리와 CSV" },
        why: {
          en: "Most real tasks involve reading external files and producing output files.",
          ko: "대부분의 실무 작업은 외부 파일을 읽고 결과 파일을 만드는 과정입니다.",
        },
        terms: {
          en: [
            { term: "File I/O", desc: "Reading and writing files" },
            { term: "CSV", desc: "Comma-separated tabular text format" },
            { term: "Encoding", desc: "Rule to convert text to bytes" },
          ],
          ko: [
            { term: "파일 입출력", desc: "파일을 읽고 쓰는 작업" },
            { term: "CSV", desc: "콤마로 구분된 표 형식 텍스트" },
            { term: "인코딩", desc: "문자를 바이트로 변환하는 규칙" },
          ],
        },
        explain: { en: "Read/write text and CSV files for data tasks.", ko: "데이터 작업을 위한 텍스트/CSV 파일 입출력을 학습합니다." },
        steps: { en: ["Open/read/write text", "Use csv module", "Handle headers"], ko: ["텍스트 읽기/쓰기", "csv 모듈 사용", "헤더 처리"] },
        code: `import csv\nwith open("scores.csv", newline="", encoding="utf-8") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row["name"], row["score"])`,
        mistakes: {
          en: ["Missing encoding causing broken text", "Forgetting newline='' when writing CSV"],
          ko: ["인코딩 미지정으로 한글 깨짐", "CSV 쓰기 시 newline='' 누락"],
        },
        practice: { en: "Read CSV and output top-3 by score.", ko: "CSV를 읽어 점수 상위 3명을 출력하세요." },
        next: { en: "Next chapter teaches handling runtime errors safely.", ko: "다음 챕터에서 실행 중 오류를 안전하게 처리합니다." },
      },
      {
        title: { en: "Chapter 9) Error handling and debugging", ko: "챕터 9) 예외처리와 디버깅" },
        why: {
          en: "Reliable software must fail gracefully and provide clues for fixing issues.",
          ko: "신뢰 가능한 프로그램은 오류가 나도 안전하게 처리하고 원인을 추적 가능해야 합니다.",
        },
        terms: {
          en: [
            { term: "Exception", desc: "Runtime error event" },
            { term: "try/except", desc: "Error-catching control structure" },
            { term: "Traceback", desc: "Error location stack report" },
          ],
          ko: [
            { term: "예외", desc: "실행 중 발생한 오류 이벤트" },
            { term: "try/except", desc: "오류를 잡아 처리하는 구조" },
            { term: "트레이스백", desc: "오류 발생 위치를 보여주는 로그" },
          ],
        },
        explain: { en: "Prevent crashes and debug by inspecting values and stack traces.", ko: "예외로 프로그램 중단을 막고 값/오류를 추적합니다." },
        steps: { en: ["try/except basics", "Handle ValueError", "Add logging prints"], ko: ["try/except 기초", "ValueError 처리", "로그 출력 추가"] },
        code: `def to_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        return None\n\nprint(to_int("100"), to_int("abc"))`,
        mistakes: {
          en: ["Using broad except without logging", "Silencing errors and hiding root cause"],
          ko: ["광범위 except로 원인 정보 유실", "오류를 무시해서 문제를 숨김"],
        },
        practice: { en: "Add safe input validation to a calculator program.", ko: "계산기에 안전한 입력 검증을 추가하세요." },
        next: { en: "Final chapter integrates all skills in one mini project.", ko: "마지막 챕터에서 지금까지 내용을 하나의 미니프로젝트로 통합합니다." },
      },
      {
        title: { en: "Chapter 10) Mini project: Student score analyzer", ko: "챕터 10) 미니프로젝트: 성적 분석기" },
        why: {
          en: "Project integration is where learning becomes real skill.",
          ko: "프로젝트 통합 단계에서 학습 내용이 실제 역량으로 전환됩니다.",
        },
        terms: {
          en: [
            { term: "Pipeline", desc: "Ordered sequence of data steps" },
            { term: "Report", desc: "Summarized output for users" },
            { term: "Refactoring", desc: "Improving structure without changing behavior" },
          ],
          ko: [
            { term: "파이프라인", desc: "데이터 처리의 순차 단계" },
            { term: "리포트", desc: "사용자에게 전달할 요약 결과" },
            { term: "리팩토링", desc: "동작은 유지하고 구조를 개선" },
          ],
        },
        explain: { en: "Integrate all fundamentals into one complete script.", ko: "배운 기초를 하나의 완성형 스크립트로 통합합니다." },
        steps: { en: ["Load CSV", "Compute avg/top/fail list", "Save report.txt"], ko: ["CSV 로드", "평균/상위/낙제자 계산", "report.txt 저장"] },
        code: `import csv\nrows = []\nwith open("scores.csv", newline="", encoding="utf-8") as f:\n    for r in csv.DictReader(f):\n        r["score"] = int(r["score"])\n        rows.append(r)\n\navg = sum(r["score"] for r in rows) / len(rows)\ntop = max(rows, key=lambda r: r["score"])\nprint("avg", round(avg, 2), "top", top["name"])`,
        mistakes: {
          en: ["Putting all logic in one giant function", "No validation for empty dataset"],
          ko: ["모든 로직을 하나의 거대한 함수에 작성", "빈 데이터셋 예외처리 누락"],
        },
        practice: { en: "Project output must include average, top student, and fail list (<60).", ko: "프로젝트 결과에 평균/최고점/낙제자(<60) 목록을 포함하세요." },
        next: { en: "You are now ready for statistics and SQL tracks.", ko: "이제 통계/SQL 트랙으로 넘어갈 준비가 되었습니다." },
      },
    ],
  },
  "02-statistics": {
    intro: {
      en: "This track teaches practical statistics for analysts: describe data, quantify uncertainty, and make evidence-based decisions.",
      ko: "이 트랙은 분석가가 실제로 쓰는 통계를 다룹니다: 데이터 요약, 불확실성 정량화, 근거 기반 의사결정.",
    },
    lessons: [
      {
        title: { en: "Chapter 1) Mean, median, and spread", ko: "챕터 1) 평균·중앙값·산포" },
        why: {
          en: "Before any model, you must understand what a dataset looks like.",
          ko: "모델링 전에 데이터의 기본 분포를 이해해야 합니다.",
        },
        terms: {
          en: [
            { term: "Mean", desc: "Average value of data" },
            { term: "Median", desc: "Middle value after sorting" },
            { term: "Standard deviation", desc: "Typical distance from mean" },
          ],
          ko: [
            { term: "평균", desc: "데이터의 산술 평균" },
            { term: "중앙값", desc: "정렬 후 가운데 값" },
            { term: "표준편차", desc: "평균으로부터의 평균적 거리" },
          ],
        },
        explain: { en: "Compute central tendency and spread before any interpretation.", ko: "해석 전에 중심 경향과 산포를 먼저 계산합니다." },
        steps: { en: ["Use describe()", "Compare mean vs median", "Check std and min/max"], ko: ["describe() 사용", "평균-중앙값 비교", "표준편차·최솟값·최댓값 확인"] },
        code: `import pandas as pd\ndf = pd.read_csv("sales.csv")\nprint(df["revenue"].describe())`,
        mistakes: { en: ["Using mean when data is highly skewed", "Ignoring outliers"], ko: ["한쪽으로 치우친 분포에서 평균만 사용", "이상치를 무시"] },
        practice: { en: "Compare two columns and explain which one has more variability.", ko: "두 컬럼을 비교해 어떤 쪽이 변동성이 큰지 설명하세요." },
        next: { en: "Next, visualize distributions to see the shape directly.", ko: "다음 챕터에서 시각화로 분포 형태를 직접 확인합니다." },
      },
      {
        title: { en: "Chapter 2) Distribution and outliers", ko: "챕터 2) 분포와 이상치" },
        why: { en: "Shape of distribution changes interpretation and method choice.", ko: "분포 형태에 따라 해석과 통계 방법 선택이 달라집니다." },
        terms: {
          en: [
            { term: "Skewness", desc: "Asymmetry of distribution" },
            { term: "Outlier", desc: "Value far from typical range" },
            { term: "IQR", desc: "Interquartile range (Q3-Q1)" },
          ],
          ko: [
            { term: "왜도", desc: "분포의 비대칭 정도" },
            { term: "이상치", desc: "일반 범위에서 벗어난 값" },
            { term: "IQR", desc: "사분위 범위(Q3-Q1)" },
          ],
        },
        explain: { en: "Use histograms and boxplots to inspect skew and outliers.", ko: "히스토그램/박스플롯으로 왜도와 이상치를 점검합니다." },
        steps: { en: ["Plot histogram", "Plot boxplot", "Flag outliers via IQR rule"], ko: ["히스토그램 작성", "박스플롯 작성", "IQR 규칙으로 이상치 표시"] },
        code: `q1, q3 = df["revenue"].quantile([0.25, 0.75])\niqr = q3 - q1\noutliers = df[(df["revenue"] < q1 - 1.5*iqr) | (df["revenue"] > q3 + 1.5*iqr)]\nprint(len(outliers))`,
        mistakes: { en: ["Deleting all outliers without context", "Assuming normality automatically"], ko: ["맥락 없이 이상치를 모두 삭제", "정규분포를 자동 가정"] },
        next: { en: "After understanding distribution, move to probability foundations.", ko: "분포를 이해했으면 확률 기초로 넘어갑니다." },
      },
      {
        title: { en: "Chapter 3) Probability basics", ko: "챕터 3) 확률 기초" },
        why: { en: "Inference and uncertainty rely on probability thinking.", ko: "추론과 불확실성 해석은 확률 개념이 기반입니다." },
        terms: {
          en: [
            { term: "Probability", desc: "Chance of event occurring" },
            { term: "Independent events", desc: "One event does not affect another" },
            { term: "Conditional probability", desc: "Probability under a condition" },
          ],
          ko: [
            { term: "확률", desc: "사건이 일어날 가능성" },
            { term: "독립사건", desc: "한 사건이 다른 사건에 영향 없음" },
            { term: "조건부확률", desc: "조건이 있을 때의 확률" },
          ],
        },
        explain: { en: "Practice event probability and conditional probability with simple business examples.", ko: "비즈니스 예제로 사건 확률과 조건부확률을 연습합니다." },
        steps: { en: ["Define event", "Compute base probability", "Compute conditional probability"], ko: ["사건 정의", "기본 확률 계산", "조건부확률 계산"] },
        code: `p_purchase = 0.2\np_member = 0.5\np_purchase_given_member = 0.3\nprint(p_purchase_given_member)`,
        mistakes: { en: ["Confusing P(A|B) and P(B|A)"], ko: ["P(A|B)와 P(B|A)를 혼동"] },
        next: { en: "Next chapter introduces sampling and the central limit theorem.", ko: "다음 챕터는 표본추출과 중심극한정리입니다." },
      },
      {
        title: { en: "Chapter 4) Sampling and central limit theorem", ko: "챕터 4) 표본추출과 중심극한정리" },
        why: { en: "You rarely observe full populations; good sampling enables valid conclusions.", ko: "모집단 전체를 보기 어렵기 때문에 올바른 표본추출이 결론의 품질을 좌우합니다." },
        terms: {
          en: [
            { term: "Population", desc: "Entire target group" },
            { term: "Sample", desc: "Subset drawn from population" },
            { term: "CLT", desc: "Sample means approach normality as n grows" },
          ],
          ko: [
            { term: "모집단", desc: "분석 대상 전체 집단" },
            { term: "표본", desc: "모집단에서 추출한 일부" },
            { term: "중심극한정리", desc: "표본평균 분포가 정규분포에 가까워짐" },
          ],
        },
        explain: { en: "Simulate repeated sampling and inspect sample mean distribution.", ko: "반복 표본추출 시뮬레이션으로 표본평균 분포를 확인합니다." },
        steps: { en: ["Draw many random samples", "Compute sample means", "Plot mean distribution"], ko: ["무작위 표본 반복 추출", "표본평균 계산", "평균 분포 시각화"] },
        code: `import numpy as np\nmeans = []\nfor _ in range(1000):\n    s = np.random.choice(df["revenue"], size=30, replace=True)\n    means.append(np.mean(s))\nprint(np.mean(means), np.std(means))`,
        next: { en: "Then estimate intervals around metrics using confidence intervals.", ko: "다음으로 신뢰구간을 이용해 지표의 범위를 추정합니다." },
      },
      {
        title: { en: "Chapter 5) Confidence intervals", ko: "챕터 5) 신뢰구간" },
        why: { en: "Point estimates alone are misleading; intervals communicate uncertainty.", ko: "점추정만으로는 부족하며 신뢰구간이 불확실성을 전달합니다." },
        terms: {
          en: [
            { term: "Point estimate", desc: "Single estimated value" },
            { term: "Confidence interval", desc: "Range likely containing true parameter" },
            { term: "Margin of error", desc: "Half-width of interval" },
          ],
          ko: [
            { term: "점추정", desc: "하나의 추정값" },
            { term: "신뢰구간", desc: "모수가 포함될 가능성이 높은 구간" },
            { term: "오차한계", desc: "구간 반폭" },
          ],
        },
        explain: { en: "Estimate 95% confidence interval for mean metrics.", ko: "평균 지표에 대한 95% 신뢰구간을 추정합니다." },
        steps: { en: ["Compute sample mean", "Estimate standard error", "Build CI range"], ko: ["표본평균 계산", "표준오차 계산", "신뢰구간 산출"] },
        code: `import numpy as np\nx = df["revenue"].dropna().values\nmean = np.mean(x)\nse = np.std(x, ddof=1) / np.sqrt(len(x))\nci = (mean - 1.96*se, mean + 1.96*se)\nprint(ci)`,
        mistakes: { en: ["Interpreting CI as probability of parameter for this sample"], ko: ["신뢰구간을 샘플 기준 확률로 잘못 해석"] },
        next: { en: "Next, formally compare groups with hypothesis testing.", ko: "다음으로 가설검정으로 집단 차이를 검증합니다." },
      },
      {
        title: { en: "Chapter 6) Hypothesis testing", ko: "챕터 6) 가설검정" },
        why: { en: "Testing helps decide whether observed differences are likely real or random.", ko: "관측된 차이가 실제인지 우연인지 판단하기 위해 검정이 필요합니다." },
        terms: {
          en: [
            { term: "Null hypothesis", desc: "Default assumption of no effect" },
            { term: "p-value", desc: "How extreme data is under H0" },
            { term: "Significance level", desc: "Threshold for rejecting H0" },
          ],
          ko: [
            { term: "귀무가설", desc: "효과가 없다는 기본 가정" },
            { term: "p-value", desc: "귀무가설 하에서 관측값의 극단성" },
            { term: "유의수준", desc: "귀무가설 기각 기준" },
          ],
        },
        explain: { en: "Use t-tests for mean comparison and report interpretation in plain language.", ko: "평균 비교에 t-검정을 사용하고 결과를 쉬운 문장으로 해석합니다." },
        steps: { en: ["Set H0/H1", "Run test", "Interpret p-value and effect direction"], ko: ["가설 설정", "검정 실행", "p-value와 효과 방향 해석"] },
        code: `from scipy import stats\na = [12,13,11,15,14]\nb = [15,17,16,18,17]\nt, p = stats.ttest_ind(a, b, equal_var=False)\nprint(t, p)`,
        practice: { en: "Explain t-test result in 3 business-friendly lines.", ko: "t-검정 결과를 비즈니스 친화 문장 3줄로 설명하세요." },
        next: { en: "Next chapter applies this to A/B test decision-making.", ko: "다음 챕터에서 A/B 테스트 의사결정에 적용합니다." },
      },
      {
        title: { en: "Chapter 7) A/B test analysis", ko: "챕터 7) A/B 테스트 분석" },
        why: { en: "A/B testing is a core method for product and marketing optimization.", ko: "A/B 테스트는 제품/마케팅 최적화의 핵심 도구입니다." },
        terms: {
          en: [
            { term: "Conversion rate", desc: "Share of users completing target action" },
            { term: "Control/Treatment", desc: "Baseline vs changed variant" },
            { term: "Lift", desc: "Relative improvement" },
          ],
          ko: [
            { term: "전환율", desc: "목표 행동 완료 비율" },
            { term: "대조군/실험군", desc: "기준안과 변경안" },
            { term: "향상률(Lift)", desc: "상대적 개선 비율" },
          ],
        },
        explain: { en: "Compare conversion between variants and judge statistical + practical significance.", ko: "버전 간 전환율을 비교해 통계적/실무적 유의성을 함께 판단합니다." },
        steps: { en: ["Summarize by group", "Compute lift", "Run significance test"], ko: ["그룹별 요약", "향상률 계산", "유의성 검정"] },
        code: `control_conv = 240/2000\ntreat_conv = 286/2000\nlift = (treat_conv - control_conv) / control_conv\nprint(round(lift*100, 2), "%")`,
        mistakes: { en: ["Stopping experiment too early", "Ignoring sample size requirements"], ko: ["실험을 너무 일찍 종료", "필요 표본 수를 무시"] },
        next: { en: "Finally, package insights into a clear statistical report.", ko: "마지막으로 분석 결과를 리포트 형태로 정리합니다." },
      },
      {
        title: { en: "Chapter 8) Reporting statistical insights", ko: "챕터 8) 통계 인사이트 리포팅" },
        why: { en: "Statistics only creates value when stakeholders can act on it.", ko: "통계는 이해관계자가 행동할 수 있을 때 가치가 생깁니다." },
        terms: {
          en: [
            { term: "Insight", desc: "Actionable finding from data" },
            { term: "Recommendation", desc: "Suggested next action" },
            { term: "Limitation", desc: "Boundary where conclusion may not hold" },
          ],
          ko: [
            { term: "인사이트", desc: "행동 가능한 데이터 발견" },
            { term: "권고안", desc: "다음 행동 제안" },
            { term: "한계점", desc: "결론 적용의 제한 조건" },
          ],
        },
        explain: { en: "Write decision-ready summary with metric, uncertainty, and recommendation.", ko: "지표·불확실성·권고안을 포함한 의사결정용 요약을 작성합니다." },
        steps: { en: ["State question", "Show evidence", "Recommend action + risk"], ko: ["질문 명시", "근거 제시", "행동/리스크 제안"] },
        practice: { en: "Write a 1-page memo: what changed, confidence, and what to do next.", ko: "1페이지 메모를 작성하세요: 무엇이 달라졌고, 신뢰도와 다음 액션은 무엇인지." },
        next: { en: "You are ready to move into SQL-based analytics pipelines.", ko: "이제 SQL 기반 분석 파이프라인으로 넘어갈 준비가 되었습니다." },
      },
    ],
  },
  "03-sql": {
    intro: {
      en: "This SQL track is designed for real analytics work: querying cleanly, joining safely, and producing KPI-ready outputs.",
      ko: "이 SQL 트랙은 실무 분석을 목표로 합니다: 정확한 조회, 안전한 조인, KPI 결과 산출까지 다룹니다.",
    },
    lessons: [
      {
        title: { en: "Chapter 1) SELECT, WHERE, ORDER BY", ko: "챕터 1) SELECT, WHERE, ORDER BY" },
        why: {
          en: "Every SQL analysis begins with filtering and sorting raw data.",
          ko: "모든 SQL 분석은 원본 데이터를 조회·필터·정렬하는 것에서 시작합니다.",
        },
        terms: {
          en: [
            { term: "SELECT", desc: "Choose columns to retrieve" },
            { term: "WHERE", desc: "Filter rows by condition" },
            { term: "ORDER BY", desc: "Sort result rows" },
          ],
          ko: [
            { term: "SELECT", desc: "조회할 컬럼 선택" },
            { term: "WHERE", desc: "조건으로 행 필터링" },
            { term: "ORDER BY", desc: "결과 정렬" },
          ],
        },
        explain: { en: "Start with basic retrieval and conditions.", ko: "기본 조회와 조건 필터링부터 시작합니다." },
        steps: { en: ["Select needed columns", "Filter by date/status", "Sort latest first"], ko: ["필요 컬럼 선택", "날짜/상태 필터", "최신순 정렬"] },
        code: `SELECT order_id, customer_id, amount\nFROM orders\nWHERE amount >= 100\nORDER BY order_date DESC;`,
        mistakes: { en: ["Using SELECT * in production queries", "Forgetting date range filters"], ko: ["실무에서 SELECT * 남용", "기간 필터 누락"] },
        practice: { en: "Query last 30 days high-value orders (>=200).", ko: "최근 30일 고액 주문(>=200) 조회 쿼리를 작성하세요." },
        next: { en: "Next chapter summarizes data with GROUP BY.", ko: "다음 챕터에서 GROUP BY로 지표를 요약합니다." },
      },
      {
        title: { en: "Chapter 2) GROUP BY and aggregations", ko: "챕터 2) GROUP BY와 집계" },
        why: { en: "Business decisions depend on summarized metrics, not raw rows.", ko: "비즈니스 의사결정은 원시 행보다 집계 지표를 기반으로 합니다." },
        terms: {
          en: [
            { term: "GROUP BY", desc: "Aggregate rows by category" },
            { term: "COUNT/SUM/AVG", desc: "Common aggregate functions" },
            { term: "HAVING", desc: "Filter aggregated groups" },
          ],
          ko: [
            { term: "GROUP BY", desc: "카테고리 기준 집계" },
            { term: "COUNT/SUM/AVG", desc: "대표 집계 함수" },
            { term: "HAVING", desc: "집계 결과 조건 필터" },
          ],
        },
        explain: { en: "Create KPI tables by segment (country/channel/product).", ko: "국가/채널/상품 등 세그먼트 기준 KPI 테이블을 만듭니다." },
        steps: { en: ["Group by dimension", "Compute multiple metrics", "Filter low-volume groups"], ko: ["차원별 그룹화", "여러 지표 동시 계산", "저볼륨 그룹 제외"] },
        code: `SELECT country, COUNT(*) AS orders, SUM(amount) AS revenue, AVG(amount) AS aov\nFROM orders\nGROUP BY country\nHAVING COUNT(*) >= 10\nORDER BY revenue DESC;`,
        mistakes: { en: ["Mixing non-grouped columns without aggregation", "Using WHERE instead of HAVING for aggregates"], ko: ["비집계 컬럼을 GROUP BY 없이 조회", "집계조건에 WHERE 사용"] },
        next: { en: "Next, combine multiple tables with joins.", ko: "다음은 조인을 통해 다중 테이블을 결합합니다." },
      },
      {
        title: { en: "Chapter 3) Joins safely", ko: "챕터 3) 조인을 안전하게" },
        why: { en: "Real datasets are split across tables; joins are unavoidable.", ko: "실무 데이터는 여러 테이블로 분리되어 있어 조인이 필수입니다." },
        terms: {
          en: [
            { term: "INNER JOIN", desc: "Keep matching rows only" },
            { term: "LEFT JOIN", desc: "Keep all left rows" },
            { term: "Join key", desc: "Columns used to match tables" },
          ],
          ko: [
            { term: "INNER JOIN", desc: "양쪽 매칭 행만 유지" },
            { term: "LEFT JOIN", desc: "왼쪽 테이블 전체 유지" },
            { term: "조인 키", desc: "테이블 연결에 사용하는 컬럼" },
          ],
        },
        explain: { en: "Join orders with customers/products and validate row counts.", ko: "orders를 customers/products와 조인하고 행 수를 검증합니다." },
        steps: { en: ["Pick correct join type", "Check duplicates", "Validate result counts"], ko: ["조인 타입 선택", "중복 여부 점검", "결과 행 수 검증"] },
        code: `SELECT o.order_id, c.country, o.amount\nFROM orders o\nLEFT JOIN customers c ON o.customer_id = c.id;`,
        mistakes: { en: ["Join explosion due to non-unique keys", "Missing ON condition causing Cartesian product"], ko: ["유일키 미보장으로 행 폭증", "ON 누락으로 카테시안 곱 발생"] },
        practice: { en: "Join orders+customers and compute revenue by customer segment.", ko: "orders+customers 조인 후 고객세그먼트별 매출을 계산하세요." },
        next: { en: "Then use CTEs for readability and multi-step logic.", ko: "다음은 CTE로 다단계 로직을 읽기 쉽게 작성합니다." },
      },
      {
        title: { en: "Chapter 4) CTEs and subqueries", ko: "챕터 4) CTE와 서브쿼리" },
        why: { en: "Complex analytics queries become maintainable with staged query blocks.", ko: "복잡한 분석 쿼리는 단계별 블록(CTE)으로 나눠야 유지보수 가능합니다." },
        terms: {
          en: [
            { term: "CTE", desc: "Named temporary result (WITH clause)" },
            { term: "Subquery", desc: "Query inside another query" },
            { term: "Refactor", desc: "Improve structure while keeping result" },
          ],
          ko: [
            { term: "CTE", desc: "WITH 절의 이름 있는 임시 결과" },
            { term: "서브쿼리", desc: "쿼리 내부의 또 다른 쿼리" },
            { term: "리팩토링", desc: "결과는 유지하고 구조 개선" },
          ],
        },
        explain: { en: "Break KPI calculations into logical steps with WITH blocks.", ko: "WITH 블록으로 KPI 계산을 단계적으로 분리합니다." },
        steps: { en: ["Create base CTE", "Aggregate in second CTE", "Select final output"], ko: ["기초 CTE 작성", "2차 집계 CTE 작성", "최종 SELECT 출력"] },
        code: `WITH base AS (\n  SELECT customer_id, amount, order_date\n  FROM orders\n), monthly AS (\n  SELECT DATE_TRUNC('month', order_date) AS month, SUM(amount) AS revenue\n  FROM base\n  GROUP BY 1\n)\nSELECT * FROM monthly ORDER BY month;`,
        next: { en: "Next chapter uses window functions for ranking and trends.", ko: "다음 챕터에서 윈도우 함수로 순위/추세를 계산합니다." },
      },
      {
        title: { en: "Chapter 5) Window functions", ko: "챕터 5) 윈도우 함수" },
        why: { en: "Window functions let you analyze row context without collapsing data.", ko: "윈도우 함수는 데이터 행을 유지하면서 순위/누적/이전값 비교를 가능하게 합니다." },
        terms: {
          en: [
            { term: "OVER()", desc: "Defines window scope" },
            { term: "PARTITION BY", desc: "Split window by group" },
            { term: "RANK/ROW_NUMBER", desc: "Ordering within groups" },
          ],
          ko: [
            { term: "OVER()", desc: "윈도우 범위 정의" },
            { term: "PARTITION BY", desc: "그룹별 윈도우 분할" },
            { term: "RANK/ROW_NUMBER", desc: "그룹 내 순위 계산" },
          ],
        },
        explain: { en: "Use rank and cumulative metrics for trend analysis.", ko: "순위/누적 지표를 이용해 추세를 분석합니다." },
        steps: { en: ["Partition by month", "Rank by revenue", "Compute running total"], ko: ["월별 파티션", "매출 순위 계산", "누적합 계산"] },
        code: `SELECT month, product_id, revenue,\n       RANK() OVER (PARTITION BY month ORDER BY revenue DESC) AS rnk,\n       SUM(revenue) OVER (PARTITION BY month ORDER BY revenue DESC) AS running_rev\nFROM product_monthly;`,
        mistakes: { en: ["Missing ORDER BY inside OVER for running metrics"], ko: ["누적 계산에서 OVER 내부 ORDER BY 누락"] },
        next: { en: "Next chapter standardizes time-based analytics patterns.", ko: "다음 챕터는 시계열 분석 패턴을 표준화합니다." },
      },
      {
        title: { en: "Chapter 6) Time-series SQL patterns", ko: "챕터 6) 시계열 SQL 패턴" },
        why: { en: "Most KPI reporting is weekly/monthly trend analysis.", ko: "대부분의 KPI 리포팅은 주간/월간 추세 분석입니다." },
        terms: {
          en: [
            { term: "DATE_TRUNC", desc: "Bucket timestamps by period" },
            { term: "YoY/MoM", desc: "Period-over-period comparison" },
            { term: "Lag", desc: "Previous period value" },
          ],
          ko: [
            { term: "DATE_TRUNC", desc: "시간을 기간 단위로 절삭" },
            { term: "YoY/MoM", desc: "전년/전월 대비" },
            { term: "LAG", desc: "이전 기간 값 조회" },
          ],
        },
        explain: { en: "Build weekly/monthly revenue and growth SQL templates.", ko: "주간/월간 매출 및 성장률 SQL 템플릿을 만듭니다." },
        steps: { en: ["Aggregate by month", "Use LAG for previous month", "Compute growth rate"], ko: ["월 단위 집계", "LAG로 전월 값 조회", "성장률 계산"] },
        code: `WITH m AS (\n  SELECT DATE_TRUNC('month', order_date) AS month, SUM(amount) AS revenue\n  FROM orders\n  GROUP BY 1\n)\nSELECT month, revenue,\n       LAG(revenue) OVER (ORDER BY month) AS prev_revenue,\n       (revenue - LAG(revenue) OVER (ORDER BY month)) / NULLIF(LAG(revenue) OVER (ORDER BY month),0) AS mom\nFROM m;`,
        next: { en: "Now build complete KPI query packs for stakeholders.", ko: "이제 이해관계자용 KPI 쿼리 묶음을 구성합니다." },
      },
      {
        title: { en: "Chapter 7) KPI query pack", ko: "챕터 7) KPI 쿼리 팩" },
        why: { en: "Teams need reusable SQL packs for recurring reporting.", ko: "팀은 반복 리포팅을 위한 재사용 가능한 SQL 팩이 필요합니다." },
        terms: {
          en: [
            { term: "KPI", desc: "Key performance indicator" },
            { term: "Reusable query", desc: "Query template used repeatedly" },
            { term: "Data contract", desc: "Agreed metric definition" },
          ],
          ko: [
            { term: "KPI", desc: "핵심성과지표" },
            { term: "재사용 쿼리", desc: "반복 사용 가능한 템플릿 쿼리" },
            { term: "데이터 계약", desc: "지표 정의 합의 문서" },
          ],
        },
        explain: { en: "Create a bundle for DAU, conversion, AOV, and retention proxy.", ko: "DAU/전환율/AOV/리텐션 대체지표 쿼리 묶음을 만듭니다." },
        steps: { en: ["Define each KPI SQL", "Standardize date filters", "Document metric definition"], ko: ["KPI별 SQL 정의", "날짜 필터 표준화", "지표 정의 문서화"] },
        code: `-- example: daily active users\nSELECT activity_date, COUNT(DISTINCT user_id) AS dau\nFROM user_events\nGROUP BY activity_date\nORDER BY activity_date;`,
        mistakes: { en: ["Different KPI definitions across teams", "Hard-coded dates in every query"], ko: ["팀마다 KPI 정의가 다름", "쿼리마다 날짜를 하드코딩"] },
        practice: { en: "Build 4 reusable KPI queries and save them in one SQL file.", ko: "재사용 가능한 KPI 쿼리 4개를 하나의 SQL 파일로 정리하세요." },
        next: { en: "Final chapter covers SQL optimization and troubleshooting.", ko: "마지막 챕터에서 SQL 최적화와 트러블슈팅을 다룹니다." },
      },
      {
        title: { en: "Chapter 8) SQL optimization and debugging", ko: "챕터 8) SQL 최적화와 디버깅" },
        why: { en: "Slow or wrong queries block analytics workflows and decision speed.", ko: "느리거나 잘못된 쿼리는 분석 흐름과 의사결정을 지연시킵니다." },
        terms: {
          en: [
            { term: "Execution plan", desc: "How database executes query" },
            { term: "Index", desc: "Data structure for faster lookup" },
            { term: "Bottleneck", desc: "Main cause of slowness" },
          ],
          ko: [
            { term: "실행계획", desc: "DB가 쿼리를 수행하는 방식" },
            { term: "인덱스", desc: "조회 속도를 높이는 구조" },
            { term: "병목", desc: "성능 저하의 핵심 원인" },
          ],
        },
        explain: { en: "Use EXPLAIN, simplify joins, and optimize filters for performance.", ko: "EXPLAIN으로 실행계획을 확인하고 조인/필터를 최적화합니다." },
        steps: { en: ["Run EXPLAIN", "Reduce scanned rows", "Refactor heavy subqueries"], ko: ["EXPLAIN 실행", "스캔 행 수 줄이기", "무거운 서브쿼리 리팩토링"] },
        code: `EXPLAIN ANALYZE\nSELECT *\nFROM orders\nWHERE order_date >= '2026-01-01'\n  AND customer_id = 123;`,
        mistakes: { en: ["Optimizing before checking correctness", "Adding indexes blindly"], ko: ["정확성 검증 전 성능 최적화 시도", "근거 없이 인덱스 추가"] },
        practice: { en: "Take one slow query and reduce runtime by at least 30%.", ko: "느린 쿼리 하나를 선정해 실행시간을 30% 이상 줄이세요." },
        next: { en: "You are now ready for ML-feature and analytics engineering pipelines.", ko: "이제 ML 피처/분석 엔지니어링 파이프라인으로 넘어갈 준비가 되었습니다." },
      },
    ],
  },
  "04-data-viz": {
    intro: {
      en: "Build decision-focused visuals and dashboards.",
      ko: "의사결정 중심 시각화와 대시보드를 만듭니다.",
    },
    lessons: [
      {
        title: { en: "Chapter 1) Choosing the right chart", ko: "챕터 1) 올바른 차트 선택" },
        why: { en: "A wrong chart leads to wrong decisions.", ko: "잘못된 차트는 잘못된 의사결정으로 이어집니다." },
        terms: {
          en: [{ term: "Bar", desc: "Category comparison" }, { term: "Line", desc: "Trend over time" }, { term: "Scatter", desc: "Relationship between variables" }],
          ko: [{ term: "막대", desc: "범주 비교" }, { term: "선", desc: "시간 추세" }, { term: "산점도", desc: "변수 관계" }],
        },
        explain: { en: "Map business question to chart type first.", ko: "먼저 비즈니스 질문에 맞는 차트 유형을 고릅니다." },
        steps: { en: ["Define question", "Pick chart", "Check readability"], ko: ["질문 정의", "차트 선택", "가독성 점검"] },
        code: `# seaborn quick example\nimport seaborn as sns\nsns.lineplot(data=df, x="date", y="revenue")`,
        mistakes: { en: ["Using pie chart for many categories"], ko: ["범주가 많은데 파이차트 사용"] },
        practice: { en: "For one dataset, propose 3 chart options and justify best one.", ko: "한 데이터셋에 대해 차트 3안을 제시하고 최적안을 설명하세요." },
        next: { en: "Next, design labels/colors so people read correctly.", ko: "다음은 라벨/색상 설계로 오해를 줄입니다." },
      },
      {
        title: { en: "Chapter 2) Dashboard storytelling", ko: "챕터 2) 대시보드 스토리텔링" },
        why: { en: "A dashboard should guide action, not just display charts.", ko: "대시보드는 차트 나열이 아니라 행동 유도를 해야 합니다." },
        terms: {
          en: [{ term: "KPI", desc: "Top decision metric" }, { term: "Drill-down", desc: "Move from summary to detail" }, { term: "Narrative", desc: "Context-evidence-action flow" }],
          ko: [{ term: "KPI", desc: "핵심 지표" }, { term: "드릴다운", desc: "요약에서 상세로 이동" }, { term: "내러티브", desc: "맥락-근거-행동 흐름" }],
        },
        explain: { en: "Structure as KPI row → trend row → detail row.", ko: "KPI 행 → 추세 행 → 상세 행으로 구조화합니다." },
        steps: { en: ["Pick 3 core KPIs", "Add trend", "Add segment table"], ko: ["핵심 KPI 3개 선정", "추세 추가", "세그먼트 표 추가"] },
        mistakes: { en: ["Too many widgets on one screen"], ko: ["한 화면에 위젯 과다 배치"] },
        practice: { en: "Create one executive dashboard with one-page story note.", ko: "임원용 대시보드 1개와 1페이지 스토리 노트를 작성하세요." },
        next: { en: "You are ready for ML fundamentals.", ko: "이제 ML 기초 트랙으로 이동합니다." },
      },
    ],
  },
  "05-ml-fundamentals": {
    intro: { en: "Core ML workflow from problem framing to evaluation.", ko: "문제정의부터 평가까지 ML 핵심 워크플로를 다룹니다." },
    lessons: [
      {
        title: { en: "Chapter 1) Problem framing and baseline", ko: "챕터 1) 문제정의와 베이스라인" },
        why: { en: "Good modeling starts with a clear target and metric.", ko: "좋은 모델링은 명확한 타깃/지표 정의에서 시작합니다." },
        terms: {
          en: [{ term: "Target", desc: "What to predict" }, { term: "Feature", desc: "Input variable" }, { term: "Baseline", desc: "Simple reference model" }],
          ko: [{ term: "타깃", desc: "예측할 값" }, { term: "피처", desc: "입력 변수" }, { term: "베이스라인", desc: "비교 기준 모델" }],
        },
        explain: { en: "Define objective, split data, and train simple baseline first.", ko: "목표 정의, 데이터 분할, 단순 베이스라인 학습을 먼저 수행합니다." },
        steps: { en: ["Define business target", "Train/test split", "Fit baseline"], ko: ["비즈니스 타깃 정의", "학습/평가 분할", "베이스라인 학습"] },
        code: `from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression`,
        practice: { en: "Build baseline and report one core metric.", ko: "베이스라인 모델을 만들고 핵심 지표 1개를 보고하세요." },
        next: { en: "Next, improve input quality via preprocessing.", ko: "다음은 전처리로 입력 품질을 개선합니다." },
      },
      {
        title: { en: "Chapter 2) Evaluation and error analysis", ko: "챕터 2) 평가와 오류분석" },
        why: { en: "Without evaluation, model quality is unknown.", ko: "평가가 없으면 모델 품질을 알 수 없습니다." },
        terms: {
          en: [{ term: "Precision/Recall", desc: "Classification trade-off metrics" }, { term: "Cross-validation", desc: "Robust validation across folds" }, { term: "Confusion matrix", desc: "Error type table" }],
          ko: [{ term: "정밀도/재현율", desc: "분류 트레이드오프 지표" }, { term: "교차검증", desc: "폴드 기반 안정 검증" }, { term: "혼동행렬", desc: "오류 유형 표" }],
        },
        explain: { en: "Measure, compare, and analyze errors before tuning.", ko: "튜닝 전에 측정/비교/오류 분석을 수행합니다." },
        steps: { en: ["Compute metrics", "Inspect confusion matrix", "Analyze failure cases"], ko: ["지표 계산", "혼동행렬 확인", "실패 케이스 분석"] },
        mistakes: { en: ["Optimizing one metric blindly"], ko: ["단일 지표만 맹목 최적화"] },
        practice: { en: "Write top 3 failure patterns and mitigation ideas.", ko: "상위 3개 실패 패턴과 개선 아이디어를 작성하세요." },
        next: { en: "Move to deep learning when baseline plateaus.", ko: "베이스라인이 정체되면 딥러닝으로 확장합니다." },
      },
    ],
  },
  "06-deep-learning": {
    intro: { en: "Practical deep learning training and debugging.", ko: "실전 딥러닝 학습/디버깅을 다룹니다." },
    lessons: [
      {
        title: { en: "Chapter 1) Training loop fundamentals", ko: "챕터 1) 학습 루프 기초" },
        why: { en: "Understanding the loop is key to debugging model behavior.", ko: "학습 루프 이해가 모델 디버깅의 핵심입니다." },
        terms: {
          en: [{ term: "Forward", desc: "Compute predictions" }, { term: "Loss", desc: "Error objective" }, { term: "Backprop", desc: "Gradient computation" }],
          ko: [{ term: "순전파", desc: "예측 계산" }, { term: "손실", desc: "오류 목적함수" }, { term: "역전파", desc: "기울기 계산" }],
        },
        explain: { en: "Run train/val loops and monitor loss curves.", ko: "학습/검증 루프를 돌리고 손실 곡선을 모니터링합니다." },
        steps: { en: ["Batch loading", "Forward+loss", "Backward+step"], ko: ["배치 로드", "순전파+손실", "역전파+스텝"] },
        practice: { en: "Train for 10 epochs and plot train/val loss.", ko: "10 epoch 학습 후 train/val loss를 시각화하세요." },
        next: { en: "Then handle overfitting and instability.", ko: "다음은 과적합/불안정 학습을 다룹니다." },
      },
      {
        title: { en: "Chapter 2) Regularization and stability", ko: "챕터 2) 일반화와 안정화" },
        why: { en: "Models must generalize beyond training data.", ko: "모델은 학습 데이터를 넘어 일반화해야 합니다." },
        terms: {
          en: [{ term: "Dropout", desc: "Randomly disable units" }, { term: "Early stopping", desc: "Stop before overfit" }, { term: "Learning rate", desc: "Step size for updates" }],
          ko: [{ term: "드롭아웃", desc: "유닛 일부를 랜덤 비활성화" }, { term: "조기종료", desc: "과적합 전 학습 중단" }, { term: "학습률", desc: "업데이트 보폭" }],
        },
        explain: { en: "Tune regularization and LR schedules for stable convergence.", ko: "정규화와 학습률 스케줄로 안정 수렴을 유도합니다." },
        steps: { en: ["Apply dropout", "Try scheduler", "Use early stop"], ko: ["드롭아웃 적용", "스케줄러 적용", "조기종료 사용"] },
        mistakes: { en: ["Training too long without validation checks"], ko: ["검증 없이 과도하게 장시간 학습"] },
        next: { en: "Ready for LLM application layer.", ko: "LLM 응용 레이어로 넘어갈 준비가 되었습니다." },
      },
    ],
  },
  "07-llm": {
    intro: { en: "Build robust LLM applications with retrieval and evaluation.", ko: "검색과 평가를 포함한 견고한 LLM 앱을 구축합니다." },
    lessons: [
      {
        title: { en: "Chapter 1) Prompt design and guardrails", ko: "챕터 1) 프롬프트 설계와 가드레일" },
        why: { en: "Prompt quality strongly affects output quality.", ko: "프롬프트 품질이 출력 품질을 크게 좌우합니다." },
        terms: {
          en: [{ term: "System prompt", desc: "High-level behavior instruction" }, { term: "Few-shot", desc: "Examples in prompt" }, { term: "Guardrail", desc: "Safety/format constraints" }],
          ko: [{ term: "시스템 프롬프트", desc: "상위 동작 지시" }, { term: "퓨샷", desc: "예시 기반 유도" }, { term: "가드레일", desc: "안전/형식 제약" }],
        },
        explain: { en: "Design role, task, constraints, and output format explicitly.", ko: "역할/작업/제약/출력형식을 명시적으로 설계합니다." },
        steps: { en: ["Write system prompt", "Add examples", "Constrain output schema"], ko: ["시스템 프롬프트 작성", "예시 추가", "출력 스키마 제약"] },
        practice: { en: "Create 3 prompt variants and compare quality.", ko: "프롬프트 3개 버전을 만들어 품질을 비교하세요." },
        next: { en: "Next, connect external knowledge with RAG.", ko: "다음은 RAG로 외부 지식을 연결합니다." },
      },
      {
        title: { en: "Chapter 2) RAG pipeline and evaluation", ko: "챕터 2) RAG 파이프라인과 평가" },
        why: { en: "RAG reduces hallucination and increases domain relevance.", ko: "RAG는 환각을 줄이고 도메인 적합성을 높입니다." },
        terms: {
          en: [{ term: "Chunking", desc: "Split docs into retrieval units" }, { term: "Embedding", desc: "Vector representation" }, { term: "Retriever", desc: "Find relevant chunks" }],
          ko: [{ term: "청킹", desc: "문서를 검색 단위로 분할" }, { term: "임베딩", desc: "벡터 표현" }, { term: "리트리버", desc: "관련 청크 검색" }],
        },
        explain: { en: "Implement query→retrieve→generate and evaluate faithfulness.", ko: "질의→검색→생성을 구현하고 사실성을 평가합니다." },
        steps: { en: ["Index documents", "Retrieve top-k", "Grounded generation + eval"], ko: ["문서 인덱싱", "top-k 검색", "근거 기반 생성+평가"] },
        mistakes: { en: ["Too large chunk size causing noisy retrieval"], ko: ["청크 크기 과대로 검색 정확도 저하"] },
        practice: { en: "Build QA bot over one domain corpus and report eval scores.", ko: "한 도메인 코퍼스로 QA 봇을 만들고 평가점수를 보고하세요." },
        next: { en: "Move to MLOps for production operation.", ko: "운영을 위해 MLOps 트랙으로 이동합니다." },
      },
    ],
  },
  "08-mlops": {
    intro: { en: "Take models from notebook to production lifecycle.", ko: "모델을 노트북에서 운영 라이프사이클로 옮깁니다." },
    lessons: [
      {
        title: { en: "Chapter 1) Serve and deploy", ko: "챕터 1) 서빙과 배포" },
        why: { en: "A model has value only when users can call it reliably.", ko: "모델은 사용자가 안정적으로 호출할 수 있어야 가치가 생깁니다." },
        terms: {
          en: [{ term: "Inference API", desc: "Prediction endpoint" }, { term: "Container", desc: "Portable runtime package" }, { term: "CI/CD", desc: "Automated delivery pipeline" }],
          ko: [{ term: "추론 API", desc: "예측 제공 엔드포인트" }, { term: "컨테이너", desc: "이식 가능한 실행 패키지" }, { term: "CI/CD", desc: "자동 배포 파이프라인" }],
        },
        explain: { en: "Package model service and deploy through CI pipeline.", ko: "모델 서비스를 패키징하고 CI 파이프라인으로 배포합니다." },
        steps: { en: ["Build FastAPI service", "Dockerize", "Deploy"], ko: ["FastAPI 서비스 구성", "Docker화", "배포"] },
        next: { en: "Then monitor reliability and drift.", ko: "다음은 안정성과 드리프트를 모니터링합니다." },
      },
      {
        title: { en: "Chapter 2) Monitoring and retraining", ko: "챕터 2) 모니터링과 재학습" },
        why: { en: "Data and behavior drift over time in production.", ko: "운영 환경에서는 데이터와 동작이 시간에 따라 변합니다." },
        terms: {
          en: [{ term: "Drift", desc: "Distribution change over time" }, { term: "Alert", desc: "Threshold-based warning" }, { term: "Retraining", desc: "Refresh model with new data" }],
          ko: [{ term: "드리프트", desc: "시간에 따른 분포 변화" }, { term: "알림", desc: "임계치 기반 경고" }, { term: "재학습", desc: "신규 데이터로 모델 갱신" }],
        },
        explain: { en: "Define alerts and retraining triggers using data/model metrics.", ko: "데이터/모델 지표 기반 알림과 재학습 트리거를 정의합니다." },
        steps: { en: ["Track latency/error", "Track input drift", "Define retrain policy"], ko: ["지연/오류 추적", "입력 드리프트 추적", "재학습 정책 수립"] },
        practice: { en: "Write one monitoring spec with trigger thresholds.", ko: "트리거 임계치를 포함한 모니터링 명세 1개를 작성하세요." },
        next: { en: "Now integrate everything in capstone.", ko: "이제 캡스톤에서 전체를 통합합니다." },
      },
    ],
  },
  "09-capstone": {
    intro: { en: "Build and ship one portfolio-grade end-to-end project.", ko: "포트폴리오급 엔드투엔드 프로젝트를 완성합니다." },
    lessons: [
      {
        title: { en: "Chapter 1) Define and build MVP", ko: "챕터 1) 문제정의와 MVP 구현" },
        why: { en: "A capstone proves you can turn concepts into outcomes.", ko: "캡스톤은 개념을 결과로 전환하는 역량을 증명합니다." },
        terms: {
          en: [{ term: "MVP", desc: "Minimum viable product" }, { term: "Scope", desc: "Boundary of what to deliver" }, { term: "Milestone", desc: "Checkpoint target" }],
          ko: [{ term: "MVP", desc: "최소 기능 제품" }, { term: "스코프", desc: "산출 범위" }, { term: "마일스톤", desc: "중간 목표" }],
        },
        explain: { en: "Pick one problem, set metric, build MVP in 4 weeks.", ko: "문제 하나를 정해 지표를 설정하고 4주 내 MVP를 구현합니다." },
        steps: { en: ["Problem statement", "Data+model plan", "MVP delivery"], ko: ["문제정의", "데이터+모델 계획", "MVP 구현"] },
        practice: { en: "Submit one-page project brief with timeline.", ko: "일정 포함 1페이지 프로젝트 브리프를 제출하세요." },
        next: { en: "Then evaluate impact and publish portfolio assets.", ko: "다음은 성과 평가와 포트폴리오 공개입니다." },
      },
      {
        title: { en: "Chapter 2) Publish and portfolio", ko: "챕터 2) 공개와 포트폴리오" },
        why: { en: "Shipping and communication matter as much as modeling.", ko: "모델링만큼 배포와 커뮤니케이션도 중요합니다." },
        terms: {
          en: [{ term: "Demo", desc: "Live working showcase" }, { term: "Case study", desc: "Problem-solution-impact document" }, { term: "Reproducibility", desc: "Others can run same result" }],
          ko: [{ term: "데모", desc: "실행 가능한 공개 시연" }, { term: "케이스 스터디", desc: "문제-해결-성과 문서" }, { term: "재현성", desc: "타인이 동일 결과 재현 가능" }],
        },
        explain: { en: "Publish repo, demo URL, and concise case study.", ko: "저장소/데모 URL/케이스 스터디를 공개합니다." },
        steps: { en: ["Clean README", "Deploy demo", "Write impact summary"], ko: ["README 정리", "데모 배포", "성과 요약 작성"] },
        mistakes: { en: ["No clear problem statement in portfolio"], ko: ["포트폴리오에 문제정의가 불명확"] },
        practice: { en: "Publish final portfolio page with links and key metrics.", ko: "링크와 핵심 지표를 포함한 최종 포트폴리오 페이지를 공개하세요." },
      },
    ],
  },
};

const ROOT = path.join(process.cwd(), "..");

export type CurriculumSectionKey = "lessons" | "exercises" | "solutions" | "evaluation" | "evidence" | "projects";

export type CurriculumDoc = {
  id: string;
  title: string;
  filePath: string;
  relPath: string;
  content: string;
  sourceLang: "ko" | "en" | "mixed";
};

export type CurriculumSections = Record<CurriculumSectionKey, CurriculumDoc[]>;

function readMaybe(filePath: string): string {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "";
}

function detectSourceLang(md: string): "ko" | "en" | "mixed" {
  const hasKo = /[가-힣]/.test(md);
  const hasEn = /[A-Za-z]/.test(md);
  if (hasKo && hasEn) return "mixed";
  if (hasKo) return "ko";
  return "en";
}

function stripMdTitle(md: string): string {
  return md.replace(/^#\s+.+\n?/, "").trim();
}

function firstHeadingOrFilename(filePath: string, md: string): string {
  return md.split("\n").find((l) => l.startsWith("# "))?.replace(/^#\s+/, "").trim() || path.basename(filePath, ".md");
}

function listMarkdownFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => path.join(dirPath, f));
}

function toDoc(filePath: string, chapterDir: string): CurriculumDoc {
  const raw = readMaybe(filePath);
  return {
    id: path.relative(chapterDir, filePath).replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase(),
    title: firstHeadingOrFilename(filePath, raw),
    filePath,
    relPath: path.relative(chapterDir, filePath),
    content: stripMdTitle(raw),
    sourceLang: detectSourceLang(raw),
  };
}

function buildSections(level: string): CurriculumSections {
  const chapterDir = path.join(ROOT, "curriculum", level);
  const allRootFiles = fs.existsSync(chapterDir)
    ? fs.readdirSync(chapterDir).filter((f) => f.endsWith(".md")).sort().map((f) => path.join(chapterDir, f))
    : [];

  const lessons = listMarkdownFiles(path.join(chapterDir, "lessons"));
  const exercises = [...listMarkdownFiles(path.join(chapterDir, "exercises")), ...allRootFiles.filter((f) => /practice|drill/i.test(path.basename(f)))];
  const solutions = listMarkdownFiles(path.join(chapterDir, "solutions"));
  const evaluation = [
    ...listMarkdownFiles(path.join(chapterDir, "rubrics")),
    ...allRootFiles.filter((f) => /rubric|assessment/i.test(path.basename(f))),
  ];
  const evidence = [
    ...listMarkdownFiles(path.join(chapterDir, "evidence")),
    ...allRootFiles.filter((f) => /evidence|proof|retrospective|contract/i.test(path.basename(f))),
  ];
  const projects = allRootFiles.filter((f) => /project|capstone/i.test(path.basename(f)));

  const uniq = (arr: string[]) => [...new Set(arr)].sort();

  return {
    lessons: uniq(lessons).map((f) => toDoc(f, chapterDir)),
    exercises: uniq(exercises).map((f) => toDoc(f, chapterDir)),
    solutions: uniq(solutions).map((f) => toDoc(f, chapterDir)),
    evaluation: uniq(evaluation).map((f) => toDoc(f, chapterDir)),
    evidence: uniq(evidence).map((f) => toDoc(f, chapterDir)),
    projects: uniq(projects).map((f) => toDoc(f, chapterDir)),
  };
}

function firstParagraph(md: string): string {
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#") || line.startsWith("- ") || line.startsWith("* ")) continue;
    return line;
  }
  return "";
}

function toLessonFromFile(filePath: string): LessonBlock {
  const md = readMaybe(filePath);
  const heading = md.split("\n").find((l) => l.startsWith("# "))?.replace(/^#\s+/, "") || path.basename(filePath, ".md");
  const intro = firstParagraph(md) || "실습 가능한 형태로 내용을 정리합니다.";
  const steps = md
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => /^[-*]\s+/.test(l))
    .slice(0, 5)
    .map((l) => l.replace(/^[-*]\s+/, ""));

  return {
    title: { en: heading, ko: heading },
    explain: { en: intro, ko: intro },
    steps: { en: steps.length ? steps : ["문서를 읽고 핵심 개념을 요약한다."], ko: steps.length ? steps : ["문서를 읽고 핵심 개념을 요약한다."] },
    practice: { en: "문서 기준 실습 산출물을 제출하세요.", ko: "문서 기준 실습 산출물을 제출하세요." },
  };
}

function buildDynamicDetail(level: string): CurriculumDetail | undefined {
  const chapterDir = path.join(ROOT, "curriculum", level);
  const roadmap = readMaybe(path.join(chapterDir, "roadmap.md"));
  if (!roadmap) return undefined;

  const sections = buildSections(level);
  if (sections.lessons.length === 0) return undefined;

  const intro = roadmap.split("\n").find((l) => l.trim().startsWith(">"))?.replace(/^>\s*/, "").trim() || "커리큘럼 원문 기준 상세 내용";
  return {
    intro: { en: intro, ko: intro },
    lessons: sections.lessons.map((d) => toLessonFromFile(d.filePath)),
  };
}

export function getCurriculumSections(level?: string): CurriculumSections | undefined {
  if (!level) return undefined;
  const sections = buildSections(level);
  const hasAny = Object.values(sections).some((docs) => docs.length > 0);
  return hasAny ? sections : undefined;
}

export function getCurriculumDetail(level?: string) {
  if (!level) return undefined;
  const dynamic = buildDynamicDetail(level);
  return dynamic || curriculumDetails[level];
}

export function pick<T>(v: { en: T; ko: T }, lang: Lang): T {
  return v[lang];
}
