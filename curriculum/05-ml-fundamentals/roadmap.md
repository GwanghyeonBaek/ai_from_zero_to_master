# 05-ml-fundamentals — 완주형 로드맵 (핵심 개념 상세판)

> 목표: “모델 한 번 돌려보기” 수준이 아니라, **데이터 분할-평가-개선-재현**까지 스스로 수행하는 주니어 ML 실무 역량을 만든다.

---

## 1) 챕터 완료 기준 (Definition of Done)

아래를 모두 충족하면 05 완료:

- [ ] 회귀/분류 각 1개 이상 베이스라인 모델 구축
- [ ] train/validation/test 분리 + 교차검증 적용
- [ ] 데이터 누수(leakage) 3가지 이상 사례를 직접 재현하고 교정
- [ ] 하이퍼파라미터 튜닝(Grid/Random) 결과 비교표 제출
- [ ] 에러 분석 리포트 2건(회귀 1, 분류 1) 제출
- [ ] 재현 가능한 ML 파이프라인(전처리+모델+평가) 코드 제출
- [ ] 종합 루브릭 75점 이상

---

## 2) 학습목표 (Learning Outcomes)

1. 문제를 회귀/분류/랭킹 중 적절한 예측 문제로 정의한다.
2. 데이터 분할 전략(train/val/test, k-fold)을 근거 있게 선택한다.
3. 평가 지표를 비즈니스 비용(오탐/미탐)과 연결해 선택한다.
4. 과적합/과소적합을 학습곡선과 검증 성능으로 진단한다.
5. 전처리 일관성과 누수 방지를 위해 Pipeline을 설계한다.
6. 모델 성능을 “한 번의 점수”가 아닌 분포(CV 점수)로 해석한다.

---

## 3) 반드시 알아야 하는 필수개념 (상세)

아래는 “이름만 아는 수준”이 아니라, **정의 + 왜 필요한지 + 실무에서 틀리기 쉬운 지점**까지 이해해야 통과.

### A. 문제정의 & 데이터 이해

1. **타깃 변수 정의(target definition)**
   - 정의: 모델이 예측해야 할 값/클래스.
   - 핵심: “예측 시점에 실제로 알 수 있는 정보만” 입력으로 사용.
   - 실수: 사후 정보(미래 데이터)로 타깃을 정의하거나 입력에 섞는 오류.

2. **샘플/피처/라벨 구조**
   - 샘플 수(n), 피처 수(p), 클래스 불균형 여부 파악.
   - 불균형 데이터에서는 정확도(accuracy)만 보면 착시 발생.

3. **결측치/이상치/중복치 처리 기준**
   - 삭제/대치/모델기반 대치 중 선택 근거를 문서화.
   - 이상치 제거는 성능 향상보다 데이터 왜곡 위험도 함께 검토.

### B. 데이터 분할 & 일반화

4. **Train / Validation / Test 분리 목적**
   - Train: 학습
   - Validation: 모델/하이퍼파라미터 선택
   - Test: 최종 1회 평가
   - 원칙: test는 의사결정에 재사용하지 않는다.

5. **교차검증(k-fold CV)**
   - 목적: 단일 split 운빨을 줄이고 일반화 성능을 더 안정적으로 추정.
   - 해석: 평균 점수 + 표준편차(변동성)를 함께 본다.

6. **Stratified split (분류)**
   - 불균형 분류에서 클래스 비율을 split마다 유지.
   - 미적용 시 fold별 분포 붕괴로 지표 왜곡 가능.

### C. 누수(Leakage)와 전처리 일관성

7. **데이터 누수(data leakage)**
   - 정의: 예측 시점에 알 수 없는 정보가 학습에 유입된 상태.
   - 전형적 사례:
     - 분할 전 전체 데이터로 스케일링/인코딩 fit
     - 타깃 유도 파생변수 사용
     - 시계열에서 미래 구간 정보 사용

8. **fit vs transform 경계**
   - 규칙: 전처리의 `fit`은 train에서만, test/val에는 `transform`만.

9. **Pipeline 사용 이유**
   - 전처리-모델 단계를 묶어 누수/불일치 방지.
   - 실무 배포 시 동일한 추론 경로 보장.

### D. 모델링 핵심

10. **베이스라인 모델의 역할**
    - 복잡한 모델 전에 “최소 기준선” 확보.
    - 예: 회귀-평균예측, 분류-다수클래스 예측.

11. **선형회귀(Linear Regression)**
    - 예측값이 연속형일 때의 기본 모델.
    - 핵심: 손실(MSE), 계수 해석, 잔차(residual) 점검.

12. **로지스틱회귀(Logistic Regression)**
    - 분류 확률 예측 기반 기본 모델.
    - 핵심: threshold에 따라 precision/recall trade-off 발생.

13. **트리 기반 모델(Decision Tree / Random Forest / GBM 기초)**
    - 비선형 관계를 잡기 좋으나 과적합 관리 필요.
    - 중요 하이퍼파라미터: max_depth, min_samples_leaf, n_estimators.

14. **정규화(Regularization: L1/L2)**
    - 과적합 완화, 일반화 성능 개선 목적.
    - 해석: 모델 복잡도 페널티 부여.

### E. 평가 지표 & 임계값

15. **회귀 지표: MAE / RMSE / R²**
    - MAE: 이상치에 덜 민감, 절대 오차 평균
    - RMSE: 큰 오차에 더 큰 페널티
    - R²: 분산 설명력(단독 지표로 과신 금지)

16. **분류 지표: Precision / Recall / F1 / ROC-AUC / PR-AUC**
    - 클래스 불균형에서는 accuracy 단독 사용 금지.
    - 비용구조(오탐 vs 미탐)에 따라 주지표를 바꾼다.

17. **Confusion Matrix 해석**
    - TP/FP/TN/FN 각 오류의 실제 비용을 명시.

18. **임계값 튜닝(threshold tuning)**
    - 확률 모델의 `predict_proba`를 업무 목표에 맞는 cutoff로 조정.

### F. 개선 루프 & 재현성

19. **오류 분석(error analysis)**
    - 단순 점수 비교가 아니라 “어떤 샘플에서 틀렸는지” 분류.
    - 세그먼트별 성능(신규/기존, 소수집단, 고가치 고객 등) 확인.

20. **하이퍼파라미터 탐색(Grid/Random Search)**
    - 탐색 범위를 근거 있게 설계하고 CV 기반으로 비교.

21. **실험 추적(experiment tracking) 최소 단위**
    - 데이터 버전, 전처리 버전, 모델 파라미터, 랜덤시드, 지표 기록.

22. **재현 가능성(reproducibility)**
    - 동일 코드/동일 데이터/동일 seed에서 유사 결과 재현.
    - README에 실행 명령과 산출물 경로 명시.

---

## 4) 주차별 커리큘럼 (3주)

### Week 1 — 문제정의, 데이터 분할, 누수 방지
- 문제정의(회귀/분류 구분), 타깃 설정
- train/val/test 및 stratified split
- leakage 사례 재현 + Pipeline 교정
- 실습: 같은 데이터로 “잘못된 전처리 vs 올바른 파이프라인” 성능 비교

### Week 2 — 베이스라인, 핵심 모델, 지표 해석
- 회귀: Linear Regression + MAE/RMSE/R²
- 분류: Logistic Regression + Precision/Recall/F1/ROC-AUC
- confusion matrix 기반 임계값 조정
- 실습: 불균형 분류에서 accuracy 착시 재현

### Week 3 — 모델 개선, 튜닝, 보고
- 트리/앙상블 기초 + 과적합 제어
- Grid/Random Search + CV 결과 해석
- 에러 분석 리포트 작성(원인→개선→재평가)
- 미니 프로젝트 완성 + 발표

---

## 5) 필수 실습 (12개)

- [ ] 회귀/분류 문제정의 문서 작성(타깃/입력/제약)
- [ ] train/val/test 분할 및 stratified split 실험
- [ ] 데이터 누수 예제 1: 분할 전 스케일링
- [ ] 데이터 누수 예제 2: 타깃 유도 피처
- [ ] 데이터 누수 예제 3: 잘못된 CV 파이프라인
- [ ] 선형회귀 베이스라인 + 잔차 분석
- [ ] 로지스틱회귀 + threshold 실험
- [ ] 분류 지표 대시보드(precision/recall/F1/AUC)
- [ ] 트리 모델 과적합 재현(max_depth 변화)
- [ ] GridSearchCV 또는 RandomizedSearchCV 적용
- [ ] 에러 분석 리포트(회귀)
- [ ] 에러 분석 리포트(분류)

---

## 6) 평가 기준 (100점)

- 문제정의의 명확성(타깃/입력/제약): 15
- 데이터 분할/누수 방지의 타당성: 20
- 지표 선택의 적절성(비즈니스 비용 반영): 20
- 모델링/튜닝 과정의 논리성: 20
- 오류 분석과 개선 시도: 15
- 재현성(코드/README/실행결과): 10

통과 기준: 75점 이상

---

## 7) 증빙 패키지 (Evidence)

필수 제출물:

- `notebooks/01_split_and_leakage.ipynb`
- `notebooks/02_regression_baseline.ipynb`
- `notebooks/03_classification_metrics.ipynb`
- `notebooks/04_tuning_and_error_analysis.ipynb`
- `reports/regression_error_analysis.md`
- `reports/classification_error_analysis.md`
- `artifacts/metrics_summary.csv`
- `artifacts/confusion_matrix.png`
- `src/pipeline.py`
- `README.md` (실행 명령 + 데이터 경로 + 재현 절차)

---

## 8) 자주 나는 실수 & 교정법

1. **정확도만 보고 “좋은 모델”이라고 판단**
   - 교정: 불균형이면 PR-AUC/Recall/F1 중심으로 재평가.

2. **테스트셋을 튜닝에 반복 사용**
   - 교정: val/CV로 선택, test는 최종 1회만.

3. **전처리 fit을 전체 데이터에 수행**
   - 교정: split 먼저, fit은 train에만.

4. **점수 개선은 했지만 왜 개선됐는지 모름**
   - 교정: 에러 유형별 개선 로그(가설-실험-결과) 의무화.

---

## 9) 게이트 (06-deep-learning 진입 조건)

- [ ] 필수 실습 12개 완료
- [ ] 누수 재현/교정 3개 완료
- [ ] 회귀/분류 에러 분석 리포트 제출
- [ ] 종합 루브릭 75점 이상
- [ ] 재현 테스트 통과(동료가 README만으로 재실행 가능)

---

## 10) 내용 타당성 검토에 사용한 참고 소스 (검색/확인)

- Google ML Crash Course (모듈 구성: 선형/로지스틱/분류 지표/과적합)
  - https://developers.google.com/machine-learning/crash-course
  - https://developers.google.com/machine-learning/crash-course/overfitting
  - https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall
- scikit-learn 공식 문서
  - Common pitfalls (전처리 일관성, 누수, Pipeline)
    - https://scikit-learn.org/stable/common_pitfalls.html
  - Cross-validation
    - https://scikit-learn.org/stable/modules/cross_validation.html
  - Metrics and scoring
    - https://scikit-learn.org/stable/modules/model_evaluation.html
