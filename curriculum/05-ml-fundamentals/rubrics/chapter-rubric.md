# Chapter 05 Rubric
- Mandatory concepts (11) evidenced: 35
- Labs and leakage corrections: 25
- Projects A/B quality: 25
- Documentation and reproducibility: 15
Pass: 75

## Per-lab scoring rows (linked)
| Row ID | Item | Points | Pass rule |
|---|---|---:|---|
| LAB-01 | Problem framing artifact | 2 | Required template complete |
| LAB-02 | Split strategy | 2 | Ratio drift <= 0.02 |
| LAB-03 | Leakage-safe pipeline | 2 | Leakage drop observed and explained |
| LAB-04 | Baseline benchmarking | 2 | Uplift over dummy >= 0.05 |
| LAB-05 | Regression diagnostics | 2 | RMSE improvement >= 5% |
| LAB-06 | Threshold tuning | 2 | Precision floor respected |
| LAB-07 | Metric selection rationale | 2 | Cost-linked justification present |
| LAB-08 | Regularization control | 2 | Validation improvement documented |
| LAB-09 | Tree overfit control | 2 | Train/val gap reduced |
| LAB-10 | Hyperparameter search | 2 | CV score improvement >= 0.02 |
| LAB-11 | Segment/fairness checks | 2 | Subgroup gap <= 0.15 or mitigation |
| LAB-12 | Reproducibility package | 2 | Re-run delta <= 0.01 |
| LEAK-01 | Leakage reenactment 1 | 1 | before/after proof + fix note |
| LEAK-02 | Leakage reenactment 2 | 1 | before/after proof + fix note |
| LEAK-03 | Leakage reenactment 3 | 1 | before/after proof + fix note |
