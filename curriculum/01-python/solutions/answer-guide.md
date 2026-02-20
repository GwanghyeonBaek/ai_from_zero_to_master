# 01-python 정답 가이드 (요약)

## Q1 섭씨->화씨
```python
def c_to_f(c):
    return c * 9/5 + 32
```

## Q3 모음 개수
```python
def count_vowels(text):
    vowels = "aeiouAEIOU"
    return sum(1 for ch in text if ch in vowels)
```

## Q7 예외처리 계산기 핵심
```python
try:
    a = float(input())
    op = input().strip()
    b = float(input())
except ValueError:
    print("숫자 형식 오류")
```

## Q8 CSV 평균 계산 핵심
```python
import csv
from collections import defaultdict

totals = defaultdict(float)
counts = defaultdict(int)
with open("scores.csv", newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        subject = row["subject"]
        score = float(row["score"])
        totals[subject] += score
        counts[subject] += 1
```

> 나머지 문제는 동일 패턴(입력 검증 -> 함수 분리 -> 결과 출력)으로 작성
