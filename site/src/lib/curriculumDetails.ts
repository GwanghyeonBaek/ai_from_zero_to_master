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
};

export function getCurriculumDetail(level?: string) {
  if (!level) return undefined;
  return curriculumDetails[level];
}

export function pick<T>(v: { en: T; ko: T }, lang: Lang): T {
  return v[lang];
}
