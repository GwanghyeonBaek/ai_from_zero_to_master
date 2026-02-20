# Lesson 05 — 예외처리

## 학습목표
- 오류 상황을 안전하게 처리한다.

## 핵심 개념
- `try`: 위험 코드
- `except`: 오류 처리
- `finally`: 항상 실행

## 예제
```python
try:
    x = int(input("숫자 입력: "))
    print(100 / x)
except ValueError:
    print("숫자를 입력해야 합니다.")
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다.")
```

## 미션
- 사용자 입력 5개 평균 계산기(예외 포함)
