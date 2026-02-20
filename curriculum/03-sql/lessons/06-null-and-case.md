# Lesson 06 — NULL 처리와 CASE

## 학습목표
- NULL 데이터를 안전하게 처리한다.

## 예제
```sql
SELECT
  order_id,
  COALESCE(coupon_code, 'NONE') AS coupon,
  CASE WHEN amount >= 100 THEN 'HIGH' ELSE 'LOW' END AS amount_tier
FROM orders;
```

## 미션
- 결측값 처리 규칙 3개 문서화
