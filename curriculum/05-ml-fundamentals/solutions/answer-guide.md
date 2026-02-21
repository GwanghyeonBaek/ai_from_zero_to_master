# ML Fundamentals Answer Guide

This guide maps all labs to expected outputs and rubric rows.

## Execution baseline
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 1 --data data/mlcc/ch05/main.csv --seed 42
```

## Metric expectations
- Regression-focused work: RMSE improvement vs dummy baseline >= 5%
- Classification-focused work: F1 uplift vs dummy >= 0.05
- Re-run stability: metric delta <= 0.01 with same seed/data

## Rubric linkage
- LAB-01~LAB-12 and LEAK-01~LEAK-03 rows are defined in:
  - `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md`

## Submission checks
1. All required artifacts under `artifacts/lab-XX` or `artifacts/leakage-0X`
2. Run logs include lab/data/seed
3. Solution notes include model choice and metric interpretation
