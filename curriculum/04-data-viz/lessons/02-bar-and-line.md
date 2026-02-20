# Lesson 02 — 막대/선 그래프 실전

## 막대그래프 체크
- 정렬(내림차순) 적용
- 축 단위 명시
- 불필요한 격자선 최소화

## 선그래프 체크
- 시간 정렬 확인
- 이상치/전환점 주석
- 이동평균으로 노이즈 완화

## 코드 예시
```python
monthly = df.groupby('month', as_index=False)['sales'].sum()
monthly['ma3'] = monthly['sales'].rolling(3).mean()
```
