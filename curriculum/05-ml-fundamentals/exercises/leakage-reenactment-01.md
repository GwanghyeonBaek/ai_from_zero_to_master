# Leakage Reenactment 01

## Input Data
- Path: `data/mlcc/ch05/main.csv`

## Run Command
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab leakage-01 --data data/mlcc/ch05/main.csv --seed 42
```

## Expected Artifacts
- `artifacts/leakage-01/before-fix-metrics.csv`
- `artifacts/leakage-01/after-fix-metrics.csv`
- `artifacts/leakage-01/fix-notes.md`

## Acceptance Threshold
- Inflated metric observed before fix.
- Metric normalizes after fix with documented cause.
- Guardrail test added in `fix-notes.md`.

## Scoring Link
- See rubric row `LEAK-01`.
