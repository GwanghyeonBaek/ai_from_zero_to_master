# Lesson 02 — GROUP BY/HAVING

## 학습목표
- 집계와 집계 후 필터를 적용한다.

## 예제
```sql
SELECT category, SUM(amount) AS total_sales
FROM orders
GROUP BY category
HAVING SUM(amount) >= 1000;
```

## 미션
- 카테고리별 평균 주문금액과 건수 계산
