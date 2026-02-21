# Site Detailed Learning Plan (00~05)

## Scope
- 대상: `curriculum/00-orientation` ~ `curriculum/05-ml-fundamentals`
- 목적: 현재 roadmap 요약형 UI를 **완주형 학습 UI**로 전환
- 기준 코드:
  - `site/src/app/posts/[slug]/page.tsx`
  - `site/src/lib/content.ts`
  - `site/src/lib/curriculum.ts`
  - `site/src/lib/curriculumDetails.ts`

---

## 1) IA/UX 구조 (탭 기반)

각 curriculum post(`slug=curriculum-xx-*`)는 아래 6개 탭을 고정 제공:

1. **Lessons**
2. **Exercises**
3. **Solutions**
4. **Evaluation**
5. **Evidence**
6. **Projects**

### UX 원칙
- 기본 진입 탭: `Lessons`
- 탭별 상단에 공통 블록 표시:
  - Chapter title / summary
  - DoD(완료 기준) 요약
  - Progress badge (파일 존재율 기반)
- 탭 비어있을 경우 숨기지 않고 `Coming soon + required file contract` 노출
- 언어 처리: 문서 원문(한글) 우선, UI 라벨만 i18n 적용

---

## 2) 파일 → UI 정확 매핑 규칙

## A. Chapter 루트 규칙
- Chapter root: `curriculum/{level}/`
- `level`은 `content.ts`의 curriculum post level(`00-orientation` 등)과 1:1 매칭

## B. 탭별 소스 매핑

### Lessons 탭
1. `curriculum/{level}/lessons/*.md` (정렬: 파일명 오름차순)
2. 없으면 fallback: `curriculumDetails[level].lessons`
3. 둘 다 없으면 fallback: `roadmap.md`의 "주차별 커리큘럼" 섹션 파싱

### Exercises 탭
우선순위:
1. `curriculum/{level}/exercises/*.md`
2. `curriculum/{level}/practice-checklist.md`
3. `roadmap.md`의 "필수 과제"/"실습" 섹션

### Solutions 탭
우선순위:
1. `curriculum/{level}/solutions/*.md`
2. (05 전용) `solutions/lab-*-solution.md`를 lab별 카드로 그룹핑
3. 없으면 placeholder + "solution pack required"

### Evaluation 탭
표시 소스 묶음:
1. `curriculum/{level}/project-rubric.md`
2. `curriculum/{level}/rubrics/*.md`
3. `curriculum/{level}/assessment-plan.md` (00 전용)
4. `roadmap.md`의 "평가 기준"/"챕터 게이트"/"완료 기준"

### Evidence 탭
표시 소스 묶음:
1. `curriculum/{level}/evidence/*.md`
2. 루트 증빙 문서(00 전용):
   - `setup-proof.md`, `venv-proof.md`, `git-hygiene.md`, `auth-decision.md`, `learning-contract.md`, `plan-14days.md`, `plan-90days.md`, `ai-safety-checklist.md`, `orientation-retrospective.md`
3. `roadmap.md`의 "증빙"/"출력물 패키지"

### Projects 탭
우선순위:
1. `curriculum/{level}/projects/**` 내 markdown 파일
2. `roadmap.md`의 "미니 프로젝트"/"프로젝트" 섹션
3. 없으면 "Project brief required" placeholder

---

## 3) Markdown 렌더링 전략

## 렌더링 정책
- 모든 탭 콘텐츠는 markdown 원문 렌더링으로 통일
- 코드블록(````), 표, 체크리스트(`- [ ]`)를 그대로 유지
- 파일 단위 카드형 렌더링:
  - 제목: H1 또는 파일명
  - 메타: 상대경로, last modified
  - 본문: markdown render

## 구현 제안
- `site/src/lib/curriculumDetails.ts`의 하드코딩 lesson 중심 구조를 확장/대체:
  - `getCurriculumContent(level)` → `{ lessons, exercises, solutions, evaluation, evidence, projects }`
  - 각 항목은 `Array<{ path, title, markdown, sourceType }>` 형태로 표준화
- `page.tsx`는 detail card 반복 대신 탭 컴포넌트 + markdown renderer 사용
- 안전:
  - raw HTML 비활성(기본 sanitize)
  - 외부 링크 `target="_blank" rel="noopener noreferrer"`

---

## 4) Chapter 완전성 규칙 + fallback 동작

## 완전성(Complete) 판정
아래 6조건 모두 충족 시 chapter를 complete 처리:
1. lessons 파일 1개 이상
2. exercises 소스 1개 이상
3. solutions 소스 1개 이상
4. evaluation 소스 1개 이상
5. evidence 소스 1개 이상
6. projects 소스 1개 이상

추가 강화(05-ml-fundamentals):
- lessons >= 10, labs(exercises) >= 12, lab solutions >= 12
- leakage 재현 문서 3개 확인 (`leakage-reenactment-*.md`)

## fallback 단계
- L1: 표준 디렉토리 파일 사용
- L2: chapter 루트 보조 파일(`practice-checklist`, `project-rubric`, `retrospective-template`, `assessment-plan`)
- L3: `roadmap.md` 섹션 추출
- L4: `curriculumDetails` 정적 데이터
- L5: empty-state (missing contract + required paths 표시)

## 사용자 표시 규칙
- 탭별 데이터가 L3 이하 fallback이면 "Auto-generated from roadmap" 배지 노출
- L5 상태는 경고 스타일과 함께 누락 파일 경로를 명시

---

## 5) 구현 우선순위 (짧은 실행 플랜)

1. **Content Loader 표준화** (`curriculumDetails.ts` 리팩터)
2. **Post Detail 탭 UI 도입** (`page.tsx`)
3. **Markdown renderer + checklist/code style 확정**
4. **Completeness 계산 및 배지 추가**
5. **00~05 회귀검증** (각 탭 최소 1개 노출 확인)

---

## 6) 근거 요약
- 현재 UI는 goals/actions/tools/deliverables + lesson card 중심이며, exercises/solutions/evaluation/evidence/projects가 구조적으로 분리 노출되지 않음 (`page.tsx`).
- 실제 파일 시스템에는 00~05 전 챕터에 탭 대응 디렉토리(`lessons/exercises/solutions/evidence/projects/rubrics`)가 이미 존재.
- `getCurriculumDetail`은 lessons 디렉토리가 있으면 lesson만 동적 생성하고 나머지 학습 구성요소를 반영하지 못함 (`curriculumDetails.ts`).
- `mlcc_analysis.json`의 quality gates(학습목표-실습-평가-증빙 일체화, 재현성)와 탭 분리 UX가 직접 정합됨.