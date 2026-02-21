# Lab-09: tree overfitting control

## Input Data
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## Run Command
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 9 --data data/mlcc/ch05/main.csv --seed 42
```

## Expected Output Artifacts
- Required: `artifacts/lab-09/tree-depth-study.csv`
- Log: `artifacts/lab-09/run.log`

## Acceptance Threshold
- `gap(train,val) reduced by depth control`

## Scoring Link
- See `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md` → row `LAB-09`.
