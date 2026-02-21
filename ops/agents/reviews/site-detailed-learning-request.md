# Site Detailed Learning Content Review Request

## Summary
Implemented curriculum post rendering (00~05) so detailed content is loaded directly from markdown files under `curriculum/<chapter>/...` instead of summary-only lesson objects.

## What Changed
- Data loader (`site/src/lib/curriculumDetails.ts`)
  - Added section-aware loaders for:
    - Lessons
    - Exercises
    - Solutions
    - Evaluation
    - Evidence
    - Projects
  - Reads markdown files from chapter folders/subfolders and maps to section documents.
  - Keeps old fallback behavior via existing `getCurriculumDetail` when files are missing.
  - Added source language detection (`ko`/`en`/`mixed`) for display hinting.

- UI (`site/src/app/posts/[slug]/page.tsx`)
  - Added section tabs for the six required sections.
  - Each tab renders full markdown content from source files (not summaries).
  - Added Korean-only source label on English page when source doc language is Korean.
  - Maintained existing language switch and curriculum summary blocks.

- Markdown rendering
  - Added `site/src/lib/markdown.ts` lightweight renderer (headings/lists/code/links/basic inline formatting).

## Validation
- Build passed:
  - `cd site && npm run build`

## Review Focus
1. Verify sections/tabs appear for curriculum posts 00~05.
2. Confirm each section displays full markdown from `curriculum/<chapter>/...` files.
3. Confirm English page behavior when content is Korean-only (label + as-is display).
4. Confirm fallback behavior for missing files remains acceptable.
