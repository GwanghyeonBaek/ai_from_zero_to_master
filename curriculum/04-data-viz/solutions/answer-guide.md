# 04-data-viz 정답 가이드 (요약)

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('sales.csv')

# 월별 매출
monthly = df.groupby('month', as_index=False)['sales'].sum()
sns.lineplot(data=monthly, x='month', y='sales')
plt.title('Monthly Sales Trend')
plt.show()
```

핵심: 차트 선택 근거 + 해석 문장 포함.