# Lab-04: baseline benchmarking

## 입력 데이터
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## 실행 명령
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 4 --data data/mlcc/ch05/main.csv --seed 42
```

## 예상 산출물
- 필수: `artifacts/lab-04/baseline-metrics.csv`
- 로그: `artifacts/lab-04/run.log`

## 합격 기준
- `model_f1 >= dummy_f1 + 0.05`

## 채점 연계
- `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md`의 `LAB-04` 항목 참조.
