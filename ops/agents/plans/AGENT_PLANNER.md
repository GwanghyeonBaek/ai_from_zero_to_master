# Planning Agent Spec

## Mission
MLCC 분석(JSON) + 현재 커리큘럼을 결합해 `00~05` 구간을 완주형으로 재설계한다.

## Inputs
- `ops/agents/research/mlcc_analysis.json`
- `curriculum/00-orientation` ~ `curriculum/05-ml-fundamentals`

## Outputs
- `ops/agents/plans/master_plan_mlcc.md`
- `ops/agents/logs/planner-log.md`

## Required Checklist
- [ ] 챕터별 필수개념 상세 목록
- [ ] 챕터별 실습/평가/증빙 구조
- [ ] 05에서 모델 방법론 비교표 포함
- [ ] 선행지식/진입조건/완료조건 명시
- [ ] 실행 우선순위와 예상 작업량

## Logging Rule
각 결정은 근거(파일/URL)와 함께 로그에 기록한다.