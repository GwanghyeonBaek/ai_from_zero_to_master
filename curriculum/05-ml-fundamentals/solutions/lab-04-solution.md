# Lab-04 Solution

## Reference Code Snippet
```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, f1_score

RANDOM_STATE = 42
df = pd.read_csv('data/mlcc/ch05/main.csv')
train, test = train_test_split(df, test_size=0.2, random_state=RANDOM_STATE)
print(train.shape, test.shape)
```

## Expected Metric Range
- Regression-oriented labs: RMSE in **[0.45, 1.20]** after preprocessing.
- Classification-oriented labs: F1 in **[0.55, 0.90]** depending on class balance.
- CV std should generally remain **<= 0.08** for stable models.

## Validation Notes
- Seed must be fixed to 42.
- Artifact files must be generated under `artifacts/lab-04/`.
- Compare against dummy baseline and record uplift.
