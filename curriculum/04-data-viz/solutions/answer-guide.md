# 04-data-viz 정답 가이드 (핵심 패턴)

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('sales.csv')

# 1) 비교: 카테고리 매출
cat = df.groupby('category', as_index=False)['sales'].sum().sort_values('sales', ascending=False)
sns.barplot(data=cat, x='category', y='sales')
plt.title('Sales by Category')
plt.xticks(rotation=30)
plt.show()

# 2) 추세: 월별 매출 + 이동평균
monthly = df.groupby('month', as_index=False)['sales'].sum()
monthly['ma3'] = monthly['sales'].rolling(3).mean()
ax = sns.lineplot(data=monthly, x='month', y='sales', label='sales')
sns.lineplot(data=monthly, x='month', y='ma3', label='ma3', ax=ax)
plt.title('Monthly Sales Trend')
plt.show()
```

체크: 차트마다 "한 줄 결론"을 반드시 텍스트로 남긴다.
