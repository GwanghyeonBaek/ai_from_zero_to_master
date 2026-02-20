# 02-statistics 정답 가이드 (요약)

## Q1 기술통계
```python
import numpy as np
x = np.array([10, 12, 15, 20, 30])
print(x.mean(), np.median(x), x.std())
```

## Q5 신뢰구간(평균)
```python
import scipy.stats as st
import numpy as np
x = np.array([3.1, 2.9, 3.4, 3.0, 3.3, 2.8])
mean = x.mean()
sem = st.sem(x)
ci = st.t.interval(0.95, len(x)-1, loc=mean, scale=sem)
print(mean, ci)
```

## Q6 t-test
```python
from scipy.stats import ttest_ind
a = [10, 11, 9, 10, 12]
b = [13, 14, 12, 15, 14]
print(ttest_ind(a, b, equal_var=False))
```

## Q8 효과크기(Cohen's d)
```python
import numpy as np
a = np.array([10,11,9,10,12])
b = np.array([13,14,12,15,14])
pooled = np.sqrt(((a.std(ddof=1)**2)+(b.std(ddof=1)**2))/2)
d = (b.mean()-a.mean())/pooled
print(d)
```
