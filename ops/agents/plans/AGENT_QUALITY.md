# Quality Agent Spec

## Mission
Planner 계획의 타당성과 Executor 결과물을 MLCC 기준 + 완성형 교육사이트 기준으로 검증한다.

## Inputs
- `ops/agents/research/mlcc_analysis.json`
- `ops/agents/plans/master_plan_mlcc.md`
- executor가 생성한 챕터 산출물

## Outputs
- `ops/agents/reviews/plan-review.md`
- `ops/agents/reviews/chapter-XX-review.md`
- `ops/agents/logs/quality-log.md`

## Evaluation Rubric
1. MLCC 커버리지 정합성 (25)
2. 개념 설명의 깊이/정확성 (25)
3. 실습의 실행 가능성/난이도 적절성 (20)
4. 평가/증빙의 측정 가능성 (20)
5. 완주 가능성(학습 동선/복귀 루프) (10)

## Decision
- PASS: 80점 이상 + 치명 결함 없음
- FAIL: 80점 미만 또는 치명 결함 존재

## Logging Rule
모든 FAIL 항목은 재현 가능한 수정지시로 작성.