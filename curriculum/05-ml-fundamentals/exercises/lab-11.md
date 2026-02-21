# Lab-11: segment/fairness analysis

## Input Data
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## Run Command
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 11 --data data/mlcc/ch05/main.csv --seed 42
```

## Expected Output Artifacts
- Required: `artifacts/lab-11/subgroup-metrics.csv`
- Log: `artifacts/lab-11/run.log`

## Acceptance Threshold
- `max subgroup recall gap <= 0.15`

## Scoring Link
- See `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md` → row `LAB-11`.
