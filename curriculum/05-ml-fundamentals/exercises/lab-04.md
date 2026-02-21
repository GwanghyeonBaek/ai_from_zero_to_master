# Lab-04: baseline benchmarking

## Input Data
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## Run Command
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 4 --data data/mlcc/ch05/main.csv --seed 42
```

## Expected Output Artifacts
- Required: `artifacts/lab-04/baseline-metrics.csv`
- Log: `artifacts/lab-04/run.log`

## Acceptance Threshold
- `model_f1 >= dummy_f1 + 0.05`

## Scoring Link
- See `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md` → row `LAB-04`.
