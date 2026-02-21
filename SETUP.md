# SETUP.md — 로컬 학습 실행 가이드

이 저장소는 **Vercel에서는 읽기/탐색**, **로컬에서는 실습/실행**을 기준으로 설계되어 있습니다.

## 1) 필수 준비물
- Git
- Python 3.10+
- Node.js 20+

## 2) 저장소 클론
```bash
git clone https://github.com/GwanghyeonBaek/ai_from_zero_to_master.git
cd ai_from_zero_to_master/ai-data-from-zero-to-pro
```

## 3) Python 환경
```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## 4) 사이트(교재 뷰어) 실행
```bash
cd site
npm install
npm run dev
```
- 브라우저: `http://localhost:3000`
- KO/EN 전환: `?lang=ko` / `?lang=en`

## 5) 챕터 실습 실행 방식
각 챕터는 아래 구조를 따릅니다.
- `roadmap.md` → 전체 목표/완료조건
- `lessons/` → 개념 학습
- `exercises/` → 실습 문제
- `solutions/` → 해설/예시 코드
- `projects/` → 챕터 미니 프로젝트
- `rubrics/`, `evidence/` → 평가/증빙

예시(05 머신러닝 기초):
```bash
# repo root 기준
python curriculum/05-ml-fundamentals/solutions/src/pipeline.py --lab 1 --data data/mlcc/ch05/main.csv --seed 42
```

예시(06 딥러닝):
```bash
python curriculum/06-deep-learning/solutions/src/train.py --lab 1 --seed 42
```

예시(07 LLM):
```bash
python curriculum/07-llm/solutions/src/run_lab.py --lab 1 --seed 42
```

예시(08 MLOps):
```bash
python curriculum/08-mlops/solutions/src/run_lab.py --lab 1
```

## 6) 추천 학습 방법(실행 순서)
1. `roadmap.md`에서 완료 기준 먼저 확인
2. `lessons/`를 순서대로 학습
3. `exercises/` 실습 수행
4. `solutions/`으로 비교/복기
5. `projects/` 수행
6. `rubrics/`로 자가 채점
7. `evidence/` 제출물 정리

## 7) 체크포인트
- 챕터별 `practice-checklist.md`를 반드시 완료
- Pass 기준 미달이면 다음 챕터로 넘어가지 않기
- 각 실습 결과를 `artifacts/` 또는 `evidence/`에 저장

## 8) 문제 발생 시
- 의존성 오류: 가상환경 재생성
- 실행 경로 오류: repo root에서 명령 재실행
- 언어 전환 오류: URL에 `?lang=ko|en` 직접 추가
