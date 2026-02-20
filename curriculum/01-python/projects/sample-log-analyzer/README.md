# Sample Project — Study Log Analyzer

## 목표
`study_log.csv`를 읽어 학습시간 요약 리포트를 생성한다.

## 실행
```bash
python main.py --input study_log.csv --output report.txt
```

## 입력 예시 (study_log.csv)
```csv
date,subject,minutes
2026-02-01,python,60
2026-02-01,statistics,40
2026-02-02,python,50
```

## 출력 요구
- 총 학습 시간
- 과목별 합계
- 최다 학습 과목

## 평가 포인트
- 함수 분리
- 예외처리
- README 재현성
