# 00-orientation — 근본 강화 로드맵

> 목표: 이후 Python/통계/SQL 학습이 흔들리지 않도록, **개발 환경·버전·인증·작업 규율**을 먼저 고정한다.

---

## 완료 기준 (Definition of Done)
- [ ] Python / Git / VS Code 설치 및 버전 확인 로그 확보
- [ ] 프로젝트별 `.venv` 생성/활성화/재생성(요구사항 파일 기반) 검증
- [ ] Git 신원(`user.name`, `user.email`) + 기본 브랜치(`main`) 설정 완료
- [ ] GitHub 인증(PAT 또는 SSH) 1개 이상 실제 push 성공
- [ ] 프로젝트 스캐폴드 + README 실행 가이드 + 최소 품질 명령(build/lint) 확인
- [ ] 14일 실행 계획(시간/산출물/검토기준 포함) 작성

---

## Chapter 1) Toolchain 설치 체크리스트

### 체크리스트
- [ ] Python 3.11+ 설치
- [ ] Git 설치
- [ ] VS Code 설치 + Python Extension 설치
- [ ] 워크스페이스 루트 폴더 고정
- [ ] 아래 명령어 버전 확인 캡처/로그 저장

```bash
python3 --version
git --version
code --version
```

### 산출물
- `setup-proof.md` (버전 확인 결과 + 설치 이슈/해결 기록)

---

## Chapter 2) 가상환경 / 의존성 위생

### 체크리스트
- [ ] `.venv` 생성
- [ ] OS별 활성화 방식 확인
- [ ] `python -m pip`로 패키지 설치
- [ ] `requirements.txt` 생성
- [ ] `.gitignore`에 `.venv` 반영
- [ ] `.venv` 삭제 후 `requirements.txt`만으로 재생성 성공

```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows는 PowerShell/CMD 방식 사용
python -m pip install -U pip
python -m pip freeze > requirements.txt
```

### 산출물
- `venv-proof.md` (생성/삭제/재생성 로그)

---

## Chapter 3) Git 신원과 커밋 규율

### 체크리스트
- [ ] 전역 신원 설정
- [ ] 기본 브랜치 `main` 설정
- [ ] 설정 출처까지 확인
- [ ] 원자적 커밋 3개 이상 수행(서로 다른 논리 변경)

```bash
git config --global user.name "YourName"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --list --show-origin
```

### 커밋 규칙(입문 기본)
- 1커밋 = 1논리 변경
- 메시지는 동사로 시작 (`Add`, `Fix`, `Refactor`, `Docs`)

### 산출물
- `git-hygiene.md` (설정 결과 + 커밋 원칙 + 실수/교훈)

---

## Chapter 4) GitHub 인증 (PAT vs SSH)

### 체크리스트
- [ ] PAT 또는 SSH 중 1개 선택
- [ ] 선택 이유 문서화(보안/편의/운영 관점)
- [ ] 실제 원격 저장소 push 성공
- [ ] 토큰/키 보안 수칙 확인

### HTTPS + PAT 예시
```bash
git remote set-url origin https://github.com/<user>/<repo>.git
git push
```

### SSH 예시
```bash
ssh-keygen -t ed25519 -C "you@example.com"
ssh-add ~/.ssh/id_ed25519
ssh -T git@github.com
```

### 보안 기준
- 토큰은 최소 권한 + 만료일 설정
- 노출 시 즉시 revoke/rotation
- 비밀정보를 코드/스크립트에 하드코딩 금지

### 산출물
- `auth-decision.md` (PAT/SSH 선택 이유 + 설정 로그)

---

## Chapter 5) 프로젝트 스캐폴드 + 품질 기준

### 체크리스트
- [ ] 표준 폴더 구조 유지 (`curriculum/`, `resources/`, `projects/`, `site/`)
- [ ] README에 설치/실행/검증 절차 명시
- [ ] push 전 `build`(가능하면 `lint` 포함) 실행
- [ ] 로컬 검사와 CI 검사 기준 정렬

### 산출물
- `contributor-guide.md` (설치, 실행, 커밋, 배포 요약)

---

## Chapter 6) 14일 실행 계획

### 체크리스트
- [ ] 하루 학습 슬롯(60~90분) + 백업 슬롯 지정
- [ ] Day 7 / Day 14 체크포인트 정의
- [ ] 주간 요약 1회 작성
- [ ] 장애요인/대응전략 기록

### 템플릿
```text
Day | Time        | Output               | Checkpoint
01  | 20:00-21:00 | Toolchain proof      | Versions verified
07  | 20:00-21:30 | Week-1 summary       | Execution review
14  | 20:00-21:30 | Final orientation log| Go/No-go to Python
```

### 산출물
- `plan-14days.md`

---

## 오리엔테이션 게이트 (다음 트랙 진입 조건)

아래 4개를 모두 충족해야 `01-python`으로 이동:
- [ ] 환경 재현 가능(venv 삭제 후 복구 가능)
- [ ] 버전/설정/인증 로그 문서화 완료
- [ ] 최소 3개 원자적 커밋 존재
- [ ] 14일 계획 확정

---

## 자주 나는 실수 (미리 차단)
- [ ] 전역 Python과 venv 혼용
- [ ] `.venv`를 git에 커밋
- [ ] PAT 과권한 발급/만료일 미설정
- [ ] push 전에 build/lint 생략
- [ ] 커밋을 대형 1개로 몰아넣기

---

## 추천 진행 순서 (2~3일)
1. Day 1: Chapter 1~2 완료
2. Day 2: Chapter 3~4 완료
3. Day 3: Chapter 5~6 + 게이트 통과 점검
