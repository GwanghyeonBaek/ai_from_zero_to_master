-- 월별 매출/주문수
SELECT strftime('%Y-%m', order_date) AS ym,
       SUM(amount) AS total_sales,
       COUNT(*) AS order_count
FROM orders
GROUP BY 1
ORDER BY 1;

-- 재구매 고객수(2회 이상 주문)
SELECT COUNT(*) AS repeat_customers
FROM (
  SELECT customer_id
  FROM orders
  GROUP BY customer_id
  HAVING COUNT(*) >= 2
);

-- 고객별 누적 구매액
SELECT customer_id, order_date, amount,
       SUM(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS running_total
FROM orders
ORDER BY customer_id, order_date;
