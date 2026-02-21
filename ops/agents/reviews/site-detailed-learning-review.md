# Site Detailed Learning Review (00~05) — Re-review

- Reviewer: Quality Agent
- Timestamp (UTC): 2026-02-21 13:52+
- Scope: Re-check prior critical defects + build verification
- Spec basis: `ops/agents/plans/AGENT_QUALITY.md`

## Decision
- **Score: 91/100**
- **Verdict: PASS**
- Prior critical defects have been resolved on the main rendering path.

## Re-review Focus Results

### 1) `00-orientation` actions mapping (`필수 체크`) capture
**Status: RESOLVED**

Evidence:
- `site/src/lib/curriculum.ts`
  - `extractSectionBullets` now normalizes headings (`normalizeHeading`), reducing punctuation/numbering sensitivity.
  - Actions keywords now include: `필수 체크`, `실습`, `과제` (plus existing keys).
- Reproduction check on `curriculum/00-orientation/roadmap.md` now yields non-empty action items (`count=6`), where previously it was empty.

Impact:
- `actions` section for `curriculum-00-orientation` is now populated from roadmap content.

### 2) Lossy lesson fallback path in detailed rendering path
**Status: RESOLVED (primary path)**

Evidence:
- `site/src/app/posts/[slug]/page.tsx`
  - Detailed curriculum section now uses `getCurriculumSections(post.level)` first.
  - Per-section docs are rendered from source markdown via `markdownToHtml(doc.content)`.
  - UI includes tabs: lessons/exercises/solutions/evaluation/evidence/projects.
- `site/src/lib/curriculumDetails.ts`
  - Added `getCurriculumSections()` + section builders that load full markdown files from curriculum directories.
  - `getCurriculumDetail()` now static fallback only; page uses it only if sections are unavailable.

Residual note:
- The old summary converter (`toLessonFromFile`) still exists as secondary fallback utility, but it is no longer the normal detailed rendering path when section files are present (00~05 all have section files).

## Additional Coverage Checks (00~05)
- Section file counts detected for each level:
  - 00: lessons 7 / exercises 3 / solutions 1 / evaluation 2 / evidence 6
  - 01: lessons 8 / exercises 2 / solutions 1 / evaluation 2 / evidence 3 / projects 1
  - 02: lessons 8 / exercises 2 / solutions 1 / evaluation 2 / evidence 3 / projects 1
  - 03: lessons 8 / exercises 2 / solutions 1 / evaluation 2 / evidence 3 / projects 1
  - 04: lessons 8 / exercises 2 / solutions 1 / evaluation 2 / evidence 3 / projects 1
  - 05: lessons 12 / exercises 16 / solutions 13 / evaluation 2 / evidence 3 / projects 1

## Build Verification
- Command run: `npm run build` in `site/`
- Result: **exit code 0**
- Evidence from log:
  - `Compiled successfully`
  - `Generating static pages ... (19/19)`
  - Route output present for `/`, `/posts/[slug]`, `/tags/[tag]`

## Rubric Scoring (site-focused)
1. Curriculum render correctness (00~05): **23/25**
2. Mapping completeness (source → UI sections): **23/25**
3. Markdown/rendering sanity + fallback: **16/20**
4. Build/release evidence quality: **20/20**
5. User-facing completeness/readability: **9/10**

**Total: 91/100 → PASS**
