# AI & Data Analysis: Zero → Pro

초보자가 **데이터분석 + AI**를 기초부터 실무/전문가 수준까지 학습할 수 있도록 만든 오픈 학습 리포지토리입니다.

## 목표
- 비전공/초보자도 따라갈 수 있는 학습 경로
- 이론 + 실습 + 프로젝트 기반 성장
- 최신 트렌드(논문/아티클/툴) 자동 수집 및 주기 업데이트

## 학습 레벨
1. **Foundation (0~2개월)**: Python, 통계, SQL, 시각화
2. **Core (3~5개월)**: 머신러닝, 딥러닝 기초
3. **Advanced (6~9개월)**: LLM, RAG, MLOps
4. **Pro (10~12개월+)**: 도메인 프로젝트, 포트폴리오, 배포/운영

## 빠른 시작
```bash
# 1) 클론
# git clone <your-repo-url>
# cd ai-data-from-zero-to-pro

# 2) Python 환경
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 3) 최신 자료 수집(수동)
python scripts/update_resources.py
```

## 블로그(Next.js) 실행
```bash
cd site
npm install
npm run dev
```
- 기본 주소: `http://localhost:3000`
- 카드형 홈: 커리큘럼 + 자동 수집 리소스 포스트
- 태그 페이지: `/tags/[tag]`
- 포스트 상세: `/posts/[slug]`
- `resources/latest.md` 섹션별로 자동 포스트 생성

## 폴더 구조
- `curriculum/`: 단계별 학습 로드맵(체크리스트 포함)
- `resources/`: 자동 수집된 최신 학습 리소스
- `projects/`: 난이도별 프로젝트 가이드
- `notebooks/`: 실습 노트북
- `scripts/`: 리소스 업데이트 자동화 스크립트
- `.github/workflows/`: GitHub Actions 자동 업데이트

## 자동 업데이트
- 매일(UTC 기준) GitHub Actions가 최신 리소스를 수집
- 변경사항이 있으면 자동 커밋
- 필요 시 주간 요약 이슈/PR로 확장 가능

## GitHub → Vercel 자동 배포
1. Vercel에서 `New Project` 클릭
2. GitHub `GwanghyeonBaek/ai_from_zero_to_master` repo 선택
3. **Root Directory를 `site`로 지정**
4. Deploy

이후에는 `main` 브랜치에 push할 때마다 Vercel이 자동 배포합니다.

## 추천 학습 루프
1. 로드맵 체크리스트 진행
2. 매주 미니 프로젝트 1개
3. 매달 포트폴리오 업데이트
4. 자동 업데이트된 최신 자료에서 1~2개 읽고 정리

## 기여 규칙
- 초보자 친화적 설명 우선
- 실습 가능한 코드/데이터셋 포함
- 출처 명확히 표기

---

원하면 다음 단계로, 이 리포를 네 GitHub에 바로 연결(publish)하고
브랜치 전략 + 이슈 자동화 + 스터디 운영 템플릿까지 붙여줄게.
