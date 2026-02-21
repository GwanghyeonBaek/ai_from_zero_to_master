# 00-orientation — AI Zero → Master 완성형 오리엔테이션

> 목표: 학습자가 중간에 이탈하지 않고, **초보 → 실무 → 마스터**까지 완주할 수 있도록
> 학습 시스템(환경/습관/평가/윤리/증빙)을 먼저 완성한다.

---

## 0) 오리엔테이션 핵심 원칙 (교육 설계 기준)

1. **Outcome First (역설계)**
   - “무엇을 배울까?”보다 “무엇을 할 수 있게 될까?”를 먼저 정의한다.
2. **Mastery Gate (숙련 게이트)**
   - 각 단계는 체크리스트 통과 후 다음 단계로 이동한다.
3. **Project-Centered Learning**
   - 이론은 프로젝트를 통과하기 위한 최소 단위로 학습한다.
4. **Evidence-Based Progress**
   - ‘공부했다’가 아니라 실행 로그/산출물/회고로 진도를 증명한다.
5. **Safety & Ethics by Default**
   - 저작권/개인정보/프롬프트 보안/평가 공정성을 초기에 고정한다.

---

## 1) 최종 학습 성과 정의 (Program Outcomes)

오리엔테이션 종료 시 학습자는 아래를 수행할 수 있어야 한다.

- [ ] 로컬/클라우드 개발환경을 재현 가능하게 구축한다.
- [ ] Git/GitHub 기반으로 학습 증빙(커밋/문서/릴리즈)을 남긴다.
- [ ] 12개월 러닝맵(주 단위 산출물 포함)을 작성한다.
- [ ] AI 학습·개발 시 필수 윤리/보안 체크를 적용한다.
- [ ] 이후 챕터(01~09)에서 사용할 학습 루틴을 자동화한다.

---

## 2) 완료 기준 (Definition of Done)

아래 10개를 모두 충족하면 오리엔테이션 완료.

- [ ] `setup-proof.md` 작성 (OS/도구/버전/트러블슈팅 포함)
- [ ] `.venv` 생성→삭제→재생성 검증 완료
- [ ] Git 전역 설정 + 기본 브랜치 `main` 확인
- [ ] GitHub 인증(SSH 또는 PAT) 실제 push 성공 로그
- [ ] 리포 구조/README/실행 명령 검증
- [ ] 학습 계약서(`learning-contract.md`) 작성
- [ ] 14일 온보딩 계획 + 90일 실행 계획 작성
- [ ] 윤리/보안 체크리스트(`ai-safety-checklist.md`) 작성
- [ ] 진단평가(입문) + 목표평가(중간/최종) 설계
- [ ] 오리엔테이션 회고(`orientation-retrospective.md`) 작성

---

## 3) 오리엔테이션 챕터 구성

## Chapter 1. 환경 준비: 재현 가능한 Toolchain

### 학습 목표
- 환경 이슈로 학습이 멈추지 않도록 표준 환경을 확정한다.

### 필수 체크
- [ ] Python 3.11+ 설치
- [ ] Git 설치
- [ ] VS Code + Python 확장
- [ ] Node.js LTS (블로그/문서 사이트 운영용)
- [ ] 버전 로그 저장

```bash
python3 --version
git --version
code --version
node --version
npm --version
```

### 산출물
- `setup-proof.md`

---

## Chapter 2. 의존성 위생: venv / requirements / 잠금 규칙

### 학습 목표
- “내 컴퓨터에서는 되는데?” 문제를 제거한다.

### 필수 체크
- [ ] `.venv` 생성/활성화
- [ ] `python -m pip`만 사용
- [ ] `requirements.txt` 기록
- [ ] `.venv` git 제외
- [ ] venv 삭제 후 재생성 성공

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -U pip
python -m pip freeze > requirements.txt
```

### 산출물
- `venv-proof.md`

---

## Chapter 3. Git/GitHub 운영 규율

### 학습 목표
- 학습 과정을 포트폴리오로 전환 가능한 형태로 기록한다.

### 필수 체크
- [ ] `user.name`, `user.email`, `init.defaultBranch=main`
- [ ] 원자적 커밋(최소 3개)
- [ ] 브랜치/PR 기본 규칙 문서화

```bash
git config --global user.name "YourName"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --list --show-origin
```

### 산출물
- `git-hygiene.md`

---

## Chapter 4. 인증/보안: SSH 또는 PAT 표준화

### 학습 목표
- 계정 보안을 해치지 않으면서 지속적으로 배포/업데이트 가능하게 한다.

### 필수 체크
- [ ] SSH 또는 PAT 선택 이유 문서화
- [ ] 실제 push 성공
- [ ] 비밀정보 관리 규칙 확정(.env, secrets)
- [ ] 토큰 최소 권한/만료/회전 정책 확인

### 산출물
- `auth-decision.md`
- `ai-safety-checklist.md`

---

## Chapter 5. 학습 운영체계: 계약서 + 루틴 + 리뷰

### 학습 목표
- 의지 기반이 아닌 시스템 기반 학습으로 전환한다.

### 필수 체크
- [ ] 주간 학습 시간 슬롯 고정 (최소 주 5회, 60~90분)
- [ ] 데일리 로그 템플릿 확정
- [ ] 주간 리뷰 템플릿 확정
- [ ] 학습 계약서(중단 조건, 복귀 규칙 포함)

### 산출물
- `learning-contract.md`
- `study-log-template.md`
- `weekly-review-template.md`

---

## Chapter 6. 평가 설계: 진단/형성/총괄 평가

### 학습 목표
- 공부량이 아닌 실력 성장으로 관리한다.

### 필수 체크
- [ ] 진단평가(현재 수준) 작성
- [ ] 챕터별 형성평가 루브릭 작성
- [ ] 월말 총괄평가 기준 작성
- [ ] 합격/재학습 기준 정의

### 산출물
- `assessment-plan.md`

---

## Chapter 7. 로드맵 고정: 14일 + 90일 실행 플랜

### 학습 목표
- “언젠가”가 아닌 날짜 기반 실행 계획으로 전환한다.

### 필수 체크
- [ ] 14일 오리엔테이션 계획
- [ ] 90일 Phase 1 계획(01~03 우선 완주)
- [ ] 리스크(시간부족/슬럼프/환경문제) 대응 시나리오

### 산출물
- `plan-14days.md`
- `plan-90days.md`

---

## 4) 오리엔테이션 게이트 (다음 챕터 진입 조건)

아래 게이트를 모두 통과해야 `01-python`으로 이동:

- [ ] 개발환경 재현 증빙 완료
- [ ] Git/GitHub 인증 및 최소 3커밋 확인
- [ ] 학습 계약서 + 루틴 템플릿 확정
- [ ] 평가 설계 문서 확정
- [ ] 14일/90일 플랜 확정
- [ ] 안전/윤리 체크리스트 확정

---

## 5) 실패 방지 규칙 (이탈 최소화)

- [ ] 하루 쉬어도 **연속 2일 이상 공백 금지**
- [ ] 막히면 25분 제한 후 질문/검색/문서화
- [ ] 새 툴 도입 전 “현재 목표와의 관련성” 체크
- [ ] 결과보다 **진행 증빙(commit/log/review)** 우선
- [ ] 매주 1회 “왜 이걸 배우는지” 목적 재확인

---

## 6) 오리엔테이션 출력물 패키지

완료 시 아래 파일이 존재해야 함:

- `curriculum/00-orientation/setup-proof.md`
- `curriculum/00-orientation/venv-proof.md`
- `curriculum/00-orientation/git-hygiene.md`
- `curriculum/00-orientation/auth-decision.md`
- `curriculum/00-orientation/learning-contract.md`
- `curriculum/00-orientation/assessment-plan.md`
- `curriculum/00-orientation/plan-14days.md`
- `curriculum/00-orientation/plan-90days.md`
- `curriculum/00-orientation/ai-safety-checklist.md`
- `curriculum/00-orientation/orientation-retrospective.md`

---

## 7) 다음 단계

- 오리엔테이션 게이트 통과 후 `01-python`으로 이동
- `01-python`도 동일하게 **학습 목표 → 실습 → 평가 → 증빙** 구조로 완성
- 최종적으로 00~09 모든 챕터를 한 플랫폼 내에서 완주 가능하게 운영

---

## 8) 외부 공신력 자료 연동 (00 챕터 반영)

### 참고자료
- The Missing Semester (MIT): https://missing.csail.mit.edu/
- Git 공식 문서: https://git-scm.com/doc
- Python 공식 문서(venv): https://docs.python.org/3/library/venv.html

### 레슨 매핑
- orientation-01-environment.md
  - Missing Semester: Shell/개발환경 기본기
- orientation-02-venv.md
  - Python docs (venv): 생성/활성화/재생성 기준
- orientation-03-git-auth.md
  - Git docs: config scope / branch / commit / remote 기본
- orientation-04-learning-ops.md ~ orientation-07-roadmap.md
  - Missing Semester의 실무형 학습 습관/자동화 철학을 운영 규칙에 반영

### 반영 원칙
- 오리엔테이션의 모든 실습은 “재현 가능성”을 우선한다.
- 명령어/설정은 공식 문서 기준을 우선 적용한다.
- 도구 선택은 학습 효율과 보안(최소권한) 관점에서 결정한다.
