# Lesson 06 — 파일 입출력과 CSV

## 학습목표
- 텍스트/CSV 파일을 읽고 저장한다.

## 예제
```python
import csv

with open("scores.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    rows = list(reader)

with open("report.txt", "w", encoding="utf-8") as f:
    f.write(f"총 {len(rows)}건 처리\n")
```

## 미션
- CSV를 읽어 평균 점수 리포트 생성
