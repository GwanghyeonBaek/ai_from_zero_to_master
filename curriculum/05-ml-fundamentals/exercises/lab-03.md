# Lab-03: leakage-safe pipeline

## Input Data
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## Run Command
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 3 --data data/mlcc/ch05/main.csv --seed 42
```

## Expected Output Artifacts
- Required: `artifacts/lab-03/leakage-comparison.csv`
- Log: `artifacts/lab-03/run.log`

## Acceptance Threshold
- `auc_drop_after_fix between 0.02 and 0.20`

## Scoring Link
- See `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md` → row `LAB-03`.
