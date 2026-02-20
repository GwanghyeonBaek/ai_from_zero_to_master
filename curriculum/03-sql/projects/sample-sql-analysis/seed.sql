INSERT INTO customers (customer_id, customer_name) VALUES
(1, 'Alice'), (2, 'Bob'), (3, 'Chris');

INSERT INTO orders (order_id, customer_id, order_date, category, amount, coupon_code) VALUES
(101, 1, '2026-01-03', 'book', 45, NULL),
(102, 1, '2026-01-18', 'book', 55, 'NEW10'),
(103, 2, '2026-01-20', 'toy', 120, NULL),
(104, 3, '2026-02-02', 'book', 80, NULL),
(105, 2, '2026-02-10', 'toy', 150, 'WINTER'),
(106, 2, '2026-02-18', 'game', 60, NULL);
