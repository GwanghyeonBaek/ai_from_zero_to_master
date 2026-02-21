# 09-capstone — 엔드투엔드 캡스톤 프로젝트

> 목표: 00~08에서 학습한 역량을 통합하여, **재현 가능하고 운영 가능한 포트폴리오급 AI 프로젝트**를 완성한다.

## 참고자료(기반)
- Primary
  - End-to-end reproducible project template (model card + experiment log)
  - Papers with Code (task benchmark / baseline 비교)
- Secondary
  - 공개 실서비스 사례(배포/모니터링/재학습 포함)

## 1) 완료 기준 (Definition of Done)
- [ ] 문제정의, 데이터, 모델, 평가, 배포, 운영까지 전 과정을 문서화
- [ ] baseline 대비 개선 결과를 정량 지표로 제시
- [ ] 재현성 검증(클린 환경 재실행) 통과
- [ ] 모델 카드 + 리스크/공정성 보고서 제출
- [ ] 데모 URL 또는 실행 영상 제출
- [ ] 최종 발표 자료 + 회고 제출

## 2) 학습목표
1. 실제 문제를 AI 문제로 변환하고 성공지표를 설정한다.
2. 실험을 체계적으로 기록하고 baseline 대비 개선을 증명한다.
3. 모델 결과를 사용자/비즈니스 관점에서 설명한다.
4. 운영 리스크(드리프트/공정성/비용)를 점검하고 대응 계획을 제시한다.
5. 포트폴리오로 전달 가능한 산출물 패키지를 완성한다.

## 3) 단계별 진행 (4주 권장)
### Week 1 — 문제정의/데이터/계획
- 문제정의서 작성
- 데이터 소스 선정 및 품질점검
- baseline 설계

### Week 2 — 모델링/실험
- baseline 학습
- 개선 실험(특성/모델/하이퍼파라미터)
- 실험 로그 정리

### Week 3 — 평가/해석/운영 설계
- 오류분석/서브그룹 분석
- 모델 카드 작성
- 배포 및 모니터링 설계

### Week 4 — 패키징/발표
- README 정리
- 데모 제작
- 최종 발표 및 회고

## 4) 필수 실습
- [ ] 프로젝트 브리프 작성
- [ ] baseline 실험 + 결과 기록
- [ ] 개선 실험 3회 이상
- [ ] 오류 분석 리포트
- [ ] 모델 카드 작성
- [ ] 배포/운영(runbook) 초안 작성

## 5) 평가 루브릭 (100점)
- 문제정의/목표 명확성: 15
- 실험 설계/개선 논리: 20
- 지표/오류분석 타당성: 20
- 운영/리스크 설계: 20
- 재현성/문서화: 15
- 전달력(데모/발표): 10

Pass: 80

## 6) 출력물 패키지
- `curriculum/09-capstone/projects/capstone-template/`
- `curriculum/09-capstone/templates/project-brief-template.md`
- `curriculum/09-capstone/templates/model-card-template.md`
- `curriculum/09-capstone/templates/experiment-log-template.md`
- `curriculum/09-capstone/templates/final-report-template.md`
- `curriculum/09-capstone/rubrics/chapter-rubric.md`
- `curriculum/09-capstone/evidence/`
