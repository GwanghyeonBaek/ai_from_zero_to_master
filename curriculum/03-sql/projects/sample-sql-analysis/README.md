# Sample Project — SQL Sales Analyzer

## 목표
샘플 DB에서 월별 KPI를 추출하고 리포트한다.

## 실행
```bash
sqlite3 sample.db < queries.sql > result.txt
```

## 포함 파일
- `schema.sql`: 테이블 생성
- `seed.sql`: 샘플 데이터
- `queries.sql`: KPI 쿼리

## KPI
- 월별 매출
- 월별 주문수
- 재구매 고객수
