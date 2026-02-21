# Leakage Reenactment 01

## 입력 데이터
- Path: `data/mlcc/ch05/main.csv`

## 실행 명령
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab leakage-01 --data data/mlcc/ch05/main.csv --seed 42
```

## Expected Artifacts
- `artifacts/leakage-01/before-fix-metrics.csv`
- `artifacts/leakage-01/after-fix-metrics.csv`
- `artifacts/leakage-01/fix-notes.md`

## 합격 기준
- Inflated metric observed before fix.
- Metric normalizes after fix with documented cause.
- Guardrail test added in `fix-notes.md` 항목 참조.

## 채점 연계
- See rubric row `LEAK-01` 항목 참조.
