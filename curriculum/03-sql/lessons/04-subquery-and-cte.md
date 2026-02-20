# Lesson 04 — 서브쿼리와 CTE

## 학습목표
- 복잡한 쿼리를 단계별로 분해한다.

## 예제
```sql
WITH monthly AS (
  SELECT strftime('%Y-%m', order_date) AS ym, SUM(amount) AS sales
  FROM orders
  GROUP BY 1
)
SELECT * FROM monthly ORDER BY ym;
```

## 미션
- 서브쿼리 기반 쿼리를 CTE로 리팩터링
