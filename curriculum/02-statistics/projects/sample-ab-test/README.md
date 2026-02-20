# Sample Project — A/B Test Analyzer

## 목표
A/B 테스트 데이터를 읽어 통계 결과와 의사결정 리포트를 생성한다.

## 실행
```bash
python main.py --input ab_test.csv --output report.md
```

## 입력 예시
```csv
group,converted
A,0
A,1
B,1
B,0
```

## 출력
- 각 그룹 전환율
- 전환율 차이
- z-test p-value
- 결론(적용/보류)
