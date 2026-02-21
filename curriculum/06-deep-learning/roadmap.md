# 06-deep-learning — 완주형 로드맵 (MLCC + D2L + CS231n + PyTorch)

> 목표: 딥러닝을 "모델 실행"이 아니라 **설계-학습안정화-오류분석-재현성-공정성 점검**까지 완주한다.

---

## 1) 챕터 완료 기준 (Definition of Done)

- [ ] MLP/임베딩 기반 모델을 각각 1개 이상 학습
- [ ] 최적화/정규화 실험(learning rate, batch size, dropout/L2/early stop) 완료
- [ ] 과적합 재현 + 교정 실험 리포트 제출
- [ ] 서브그룹 공정성 점검 리포트 제출
- [ ] 미니 프로젝트 2개(Project A/B) 완료
- [ ] 재현성 패키지(코드/명령/시드/아티팩트) 제출
- [ ] 루브릭 75점 이상

---

## 2) 핵심 참고자료 (반영 기준)

### Primary
- D2L (Dive into Deep Learning): https://d2l.ai
- Google MLCC (Neural Networks / Embeddings / Fairness)

### Secondary
- CS231n Notes: https://cs231n.github.io/
- PyTorch Tutorials: https://pytorch.org/tutorials/

### 반영 원칙
- D2L: 개념/수식/학습 루프 구조
- CS231n: 직관/디버깅 관점(과적합/학습불안정)
- PyTorch: 실행 가능한 코드 패턴(모델/훈련/평가)
- MLCC: 임베딩/공정성/실무 점검 축

---

## 3) 학습목표 (Learning Outcomes)

1. 퍼셉트론→MLP 전환 이유와 비선형성을 설명한다.
2. forward/loss/backward/update를 코드 레벨로 구현한다.
3. 최적화·정규화 하이퍼파라미터를 실험으로 조정한다.
4. 임베딩 레이어를 설계하고 차원 선택 근거를 제시한다.
5. 오류 슬라이스와 서브그룹 성능을 통해 공정성 리스크를 보고한다.
6. 시드/설정/체크포인트 기반 재현 가능한 실험 패키지를 구성한다.

---

## 4) 필수 개념

- MLP 아키텍처/활성화(ReLU, Sigmoid, Softmax)
- 손실함수/역전파/기울기 기반 최적화
- SGD vs Adam, LR 스케줄, batch size trade-off
- 정규화(dropout, weight decay, early stopping)
- 학습곡선과 과적합 진단
- 임베딩(희소성, lookup, 차원 선택)
- 오류 슬라이스 분석(세그먼트 기반)
- 공정성 점검(서브그룹 metric gap)
- 재현성(시드, config, checkpoint, 실행명령)

---

## 5) 필수 실습 (12개)

- [ ] lab-01 MLP baseline
- [ ] lab-02 선형 vs MLP 비교
- [ ] lab-03 활성화 함수 실험
- [ ] lab-04 LR/batch sweep
- [ ] lab-05 정규화 ablation
- [ ] lab-06 과적합 재현/교정
- [ ] lab-07 임베딩 모델 구축
- [ ] lab-08 임베딩 차원 실험
- [ ] lab-09 임베딩 유사도 점검
- [ ] lab-10 오류 슬라이스 분석
- [ ] lab-11 공정성 서브그룹 점검
- [ ] lab-12 재현성 검증

---

## 6) 평가 기준 (100점)

- 개념 정확성/깊이: 20
- 학습 안정화 실험 품질: 20
- 임베딩 실험 및 해석: 20
- 오류/공정성 분석: 20
- 재현성/증빙 품질: 20

통과: 75점 이상

---

## 7) 출력물 패키지

- `curriculum/06-deep-learning/lessons/`
- `curriculum/06-deep-learning/exercises/`
- `curriculum/06-deep-learning/solutions/`
- `curriculum/06-deep-learning/projects/project-a-deep-tabular/`
- `curriculum/06-deep-learning/projects/project-b-embeddings/`
- `curriculum/06-deep-learning/rubrics/chapter-rubric.md`
- `curriculum/06-deep-learning/evidence/`
