# Lesson 03 — JOIN 기초

## 학습목표
- INNER/LEFT JOIN 차이를 이해한다.

## 예제
```sql
SELECT c.customer_name, o.order_id, o.amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;
```

## 미션
- 주문이 없는 고객 목록 추출
