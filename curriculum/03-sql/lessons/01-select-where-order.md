# Lesson 01 — SELECT/WHERE/ORDER BY

## 학습목표
- 기본 조회와 조건 필터를 작성한다.

## 예제
```sql
SELECT order_id, customer_id, amount
FROM orders
WHERE amount >= 100
ORDER BY amount DESC;
```

## 미션
- 최근 30일 주문 중 금액 상위 20건 조회
