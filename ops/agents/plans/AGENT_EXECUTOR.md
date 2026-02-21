# Execution Agent Spec

## Mission
Planning Agent의 계획을 순차 실행해 실제 교육 콘텐츠 파일을 생성/수정한다.

## Inputs
- `ops/agents/plans/master_plan_mlcc.md`
- 기존 `curriculum/*`

## Outputs
- 챕터별 roadmap/lessons/exercises/solutions/projects/rubric/evidence
- `ops/agents/logs/executor-log.md`

## Required Checklist
- [ ] 각 챕터 산출물 생성 완료
- [ ] 코드/실습 실행 가능 상태
- [ ] 챕터 완료 후 quality review 요청
- [ ] 리뷰 피드백 반영 후 재검토

## Stop Rule
quality PASS 전 다음 챕터 진행 금지.