# 03-sql 정답 가이드 (요약)

## Q3 카테고리별 매출
```sql
SELECT category, SUM(amount) AS total_sales
FROM orders
GROUP BY category
ORDER BY total_sales DESC;
```

## Q6 주문 없는 고객
```sql
SELECT c.customer_id, c.customer_name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

## Q8 월별 매출 CTE
```sql
WITH monthly AS (
  SELECT strftime('%Y-%m', order_date) AS ym, SUM(amount) AS sales
  FROM orders
  GROUP BY 1
)
SELECT * FROM monthly ORDER BY ym;
```

## Q9 주문 순번
```sql
SELECT customer_id, order_id, order_date,
       ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS rn
FROM orders;
```

## Q11 NULL 처리
```sql
SELECT order_id,
       COALESCE(coupon_code, 'NONE') AS coupon,
       CASE WHEN amount >= 100 THEN 'HIGH' ELSE 'LOW' END AS amount_tier
FROM orders;
```
