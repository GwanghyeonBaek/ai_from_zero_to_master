# Lab-10: hyperparameter search

## 입력 데이터
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## 실행 명령
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 10 --data data/mlcc/ch05/main.csv --seed 42
```

## 예상 산출물
- 필수: `artifacts/lab-10/search-results.csv`
- 로그: `artifacts/lab-10/run.log`

## 합격 기준
- `best_cv_score >= baseline_cv_score + 0.02`

## 채점 연계
- `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md`의 `LAB-10` 항목 참조.
