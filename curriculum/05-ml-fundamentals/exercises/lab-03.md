# Lab-03: leakage-safe pipeline

## 입력 데이터
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## 실행 명령
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 3 --data data/mlcc/ch05/main.csv --seed 42
```

## 예상 산출물
- 필수: `artifacts/lab-03/leakage-comparison.csv`
- 로그: `artifacts/lab-03/run.log`

## 합격 기준
- `auc_drop_after_fix between 0.02 and 0.20`

## 채점 연계
- `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md`의 `LAB-03` 항목 참조.
