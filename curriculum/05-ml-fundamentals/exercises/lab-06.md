# Lab-06: logistic threshold tuning

## Input Data
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## Run Command
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 6 --data data/mlcc/ch05/main.csv --seed 42
```

## Expected Output Artifacts
- Required: `artifacts/lab-06/threshold-scan.csv`
- Log: `artifacts/lab-06/run.log`

## Acceptance Threshold
- `best_recall_at_precision>=0.70`

## Scoring Link
- See `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md` → row `LAB-06`.
