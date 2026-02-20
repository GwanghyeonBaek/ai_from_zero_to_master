# Lesson 05 — 윈도우 함수

## 학습목표
- 순위/누적합을 계산한다.

## 예제
```sql
SELECT
  customer_id,
  order_date,
  amount,
  ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS rn,
  SUM(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS running_total
FROM orders;
```

## 미션
- 고객별 첫 구매일과 누적 구매액 계산
