# Lesson 07 — 모듈과 패키지

## 학습목표
- 코드를 파일 단위로 분리해 재사용한다.

## 예제 구조
- `main.py`
- `utils/math_utils.py`

`math_utils.py`
```python
def mean(nums):
    return sum(nums) / len(nums)
```

`main.py`
```python
from utils.math_utils import mean
print(mean([10, 20, 30]))
```

## 미션
- 계산 함수 3개를 utils 모듈로 분리
