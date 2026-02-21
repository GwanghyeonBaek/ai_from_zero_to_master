# Agent System (Plan / Execute / Quality)

이 디렉토리는 `ai_from_zero_to_master`의 다중 에이전트 운영 규약입니다.

## Agents

1. **Planning Agent** (`planner`)
   - 입력: `research/mlcc_analysis.json`, 현재 curriculum
   - 출력: `plans/master_plan_mlcc.md`

2. **Execution Agent** (`executor`)
   - 입력: `plans/master_plan_mlcc.md`
   - 출력: 챕터별 콘텐츠, 실습, 코드, 템플릿, 증빙 파일

3. **Quality Agent** (`quality`)
   - 입력: planner 산출물 + executor 산출물 + MLCC 분석 JSON
   - 출력: `reviews/*.md` 품질 점검서 (pass/fail + 수정요청)

## Operating Rules

- 모든 agent는 자신의 활동을 `logs/`에 타임스탬프와 함께 기록한다.
- hallucination 방지를 위해 모든 주요 결정은 근거 파일/링크를 남긴다.
- executor는 각 챕터 완료 후 quality 검토 통과 전 다음 챕터로 진행할 수 없다.
- quality는 단순 감상이 아니라 체크리스트 기반으로 판정한다.
