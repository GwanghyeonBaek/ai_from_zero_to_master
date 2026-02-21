# Lab-12: reproducibility package

## Input Data
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## Run Command
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 12 --data data/mlcc/ch05/main.csv --seed 42
```

## Expected Output Artifacts
- Required: `artifacts/lab-12/repro-check.md`
- Log: `artifacts/lab-12/run.log`

## Acceptance Threshold
- `rerun metric delta <= 0.01`

## Scoring Link
- See `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md` → row `LAB-12`.
