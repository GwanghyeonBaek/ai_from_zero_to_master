# Lesson 02 — 조건문과 반복문

## 학습목표
- `if/elif/else`로 분기 처리한다.
- `for/while` 반복문을 쓴다.

## 핵심 개념
- 조건문: 상황에 따라 다른 코드 실행
- 반복문: 같은 동작을 여러 번 실행

## 예제
```python
score = 82
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"

for i in range(1, 6):
    print(i)
```

## 자주 하는 실수
- `=`와 `==` 혼동
- 무한루프(`while True`) 종료 조건 누락

## 미션
- 1~100 사이 짝수 합 구하기
