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
