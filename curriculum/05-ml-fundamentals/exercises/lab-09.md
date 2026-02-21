# Lab-09: tree overfitting control

## 입력 데이터
- Path: `data/mlcc/ch05/main.csv`
- Optional config: `data/mlcc/ch05/config.yaml`

## 실행 명령
```bash
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 9 --data data/mlcc/ch05/main.csv --seed 42
```

## 예상 산출물
- 필수: `artifacts/lab-09/tree-depth-study.csv`
- 로그: `artifacts/lab-09/run.log`

## 합격 기준
- `gap(train,val) reduced by depth control`

## 채점 연계
- `curriculum/05-ml-fundamentals/rubrics/chapter-rubric.md`의 `LAB-09` 항목 참조.
