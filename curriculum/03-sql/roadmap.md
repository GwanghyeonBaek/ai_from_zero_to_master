# 03-sql — 완주형 로드맵 (데이터 질의·분석 핵심)

> 목표: SQL 문법 암기 수준이 아니라, **실무 데이터에서 필요한 답을 정확하고 빠르게 뽑는 능력**을 만든다.

---

## 1) 챕터 완료 기준 (Definition of Done)

- [ ] SELECT/FROM/WHERE/GROUP BY/HAVING/ORDER BY 정확히 사용
- [ ] JOIN(Inner/Left)과 집계를 결합해 분석 가능
- [ ] 서브쿼리/CTE/윈도우 함수 기초 사용 가능
- [ ] SQL 과제 12개 이상 완료
- [ ] 미니 프로젝트 2개 완료
- [ ] 성능/정확성 체크리스트 통과
- [ ] 회고 제출

---

## 2) 학습 목표 (Learning Outcomes)

완료 시 학습자는 다음을 할 수 있다.

1. 질문을 SQL로 번역한다.
2. 집계/필터/정렬을 조합해 KPI를 계산한다.
3. 다중 테이블 조인으로 인사이트를 도출한다.
4. CTE와 윈도우 함수를 이용해 시계열/순위 분석한다.
5. 쿼리 정확성을 검증하고 재사용 가능한 형태로 문서화한다.

---

## 3) 주차별 커리큘럼 (2~3주)

## Week 1 — 기본 질의와 집계

### 학습
- SELECT, DISTINCT, WHERE, ORDER BY
- GROUP BY, HAVING, COUNT/SUM/AVG/MIN/MAX

### 실습
- [ ] 실습 01: 특정 기간 주문 데이터 필터링
- [ ] 실습 02: 카테고리별 매출 집계
- [ ] 실습 03: 상위 고객 TOP N 추출

### 평가
- [ ] 기초 SQL 퀴즈 80점 이상
- [ ] 집계 문제 5개 중 4개 정답

### 증빙
- `practice/week1.sql`
- `notes/week1-summary.md`

---

## Week 2 — JOIN/서브쿼리/CTE

### 학습
- INNER JOIN, LEFT JOIN
- 서브쿼리
- CTE(`WITH`) 사용

### 실습
- [ ] 실습 04: 고객-주문 조인 분석
- [ ] 실습 05: 재구매 고객 비율 계산
- [ ] 실습 06: 월별 매출 CTE 리포트

### 평가
- [ ] JOIN 문제 4개 중 3개 정답
- [ ] 서브쿼리→CTE 리팩터링 1회

### 증빙
- `practice/week2.sql`
- `notes/week2-reflection.md`

---

## Week 3 — 윈도우 함수 + 미니 프로젝트

### 학습
- `ROW_NUMBER`, `RANK`, `LAG`, 누적합
- 코호트/리텐션 기초

### 실습
- [ ] 미니 프로젝트 A: 전자상거래 매출 분석 SQL 리포트
- [ ] 미니 프로젝트 B: 사용자 리텐션 기초 분석

### 평가
- [ ] 프로젝트 리포트 2건
- [ ] 쿼리 리뷰 체크리스트 통과

### 증빙
- `projects/sql-mini-a/`
- `projects/sql-mini-b/`
- `evidence/sql-demo.md`

---

## 4) 필수 과제 (총 12개)

- [ ] 기본 조회/정렬
- [ ] 다중 조건 필터
- [ ] 그룹 집계
- [ ] HAVING 필터
- [ ] INNER JOIN 분석
- [ ] LEFT JOIN 누락값 처리
- [ ] 서브쿼리 집계
- [ ] CTE 리팩터링
- [ ] 윈도우 함수 순위
- [ ] 누적합 계산
- [ ] 월별 KPI 대시보드용 쿼리
- [ ] 최종 SQL 리포트 작성

---

## 5) 평가 기준 (입문 SQL 표준)

- 정확성(정답): 35
- 쿼리 구조/가독성: 20
- 비즈니스 해석: 20
- 재현성/문서화: 15
- 성능 기초(불필요 연산 최소화): 10

총점 100 / 통과 75

---

## 6) 자주 나는 실수 & 교정법

1. **JOIN 키를 잘못 잡아 중복 폭증**
   - 교정: JOIN 전/후 row count 비교 습관화
2. **WHERE와 HAVING 혼동**
   - 교정: 집계 전 필터는 WHERE, 집계 후는 HAVING
3. **NULL 처리 누락**
   - 교정: `COALESCE` 기본 적용
4. **질문 없이 쿼리부터 작성**
   - 교정: 먼저 질문/KPI를 1문장으로 적고 시작

---

## 7) 챕터 게이트 (04-data-viz 진입 조건)

- [ ] 필수 과제 12개 완료
- [ ] 미니 프로젝트 2개 완료
- [ ] 평가 75점 이상
- [ ] SQL 리포트 2건 제출
- [ ] 회고 문서 제출

---

## 8) 출력물 패키지

- `curriculum/03-sql/roadmap.md`
- `curriculum/03-sql/practice-checklist.md`
- `curriculum/03-sql/project-rubric.md`
- `curriculum/03-sql/retrospective-template.md`
- `curriculum/03-sql/lessons/` (레슨 01~08)
- `curriculum/03-sql/exercises/problem-set.md`
- `curriculum/03-sql/solutions/answer-guide.md`
- `curriculum/03-sql/projects/sample-sql-analysis/`

---

## 9) 회고 질문

1. 가장 자주 틀리는 SQL 패턴은 무엇인가?
2. 질문을 SQL로 번역할 때 막히는 지점은?
3. SQL 결과를 비즈니스 언어로 설명할 수 있는가?
4. 다음 챕터(시각화)에서 어떤 차트를 연결할 것인가?
