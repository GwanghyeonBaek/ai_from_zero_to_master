CREATE TABLE customers (
  customer_id INTEGER PRIMARY KEY,
  customer_name TEXT
);

CREATE TABLE orders (
  order_id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  order_date TEXT,
  category TEXT,
  amount REAL,
  coupon_code TEXT,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
