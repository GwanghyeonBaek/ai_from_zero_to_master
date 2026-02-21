# Master Plan (MLCC-Aligned) for Curriculum 00~05

## Scope
- Target chapters: `00-orientation` ~ `05-ml-fundamentals`
- Primary basis:
  - `ops/agents/research/mlcc_analysis.json`
  - `ops/agents/plans/AGENT_PLANNER.md`
  - Existing curriculum roadmaps/checklists/rubrics for 00~05

---

## 1) Execution Order & Global Acceptance Gates

## Execution Order
1. **00-orientation** (system + evidence foundation)
2. **01-python** (implementation fluency)
3. **02-statistics** (inference literacy)
4. **03-sql** (data extraction + feature-ready datasets)
5. **04-data-viz** (decision communication)
6. **05-ml-fundamentals** (modeling core, MLCC-intensive)

## Global Acceptance Gates (all chapters must pass)
- G1. Learning objectives, mandatory concepts, and assessments are explicitly mapped.
- G2. Each mandatory concept has at least:
  - 1 lesson,
  - 1 exercise,
  - 1 solution artifact,
  - 1 evidence item.
- G3. Deliverables exist for: lessons / exercises / solutions / projects / rubrics / evidence.
- G4. Reproducibility standard: runnable commands, seed policy, data paths, README.
- G5. Chapter gate score threshold met (default 75/100 unless chapter defines stricter gate).

---

## 2) MLCC Module-to-Chapter Mapping (Explicit)

| MLCC module | 00 | 01 | 02 | 03 | 04 | 05 |
|---|---:|---:|---:|---:|---:|---:|
| Numerical Data | △ | ● | ● | ● | ● | ● |
| Categorical Data | - | △ | △ | ● | △ | ● |
| Overfitting/Generalization | ● (principle) | - | ● (sampling/generalization) | △ (leakage by query time) | - | ● (core) |
| Linear Regression | - | - | △ (simple regression intuition) | - | △ (residual plots) | ● |
| Logistic Regression | - | - | - | - | △ (classification charting) | ● |
| Classification Metrics | - | - | △ (error interpretation) | - | ● (CM/ROC/PR visualization) | ● |
| Fairness | ● (ethics baseline) | - | △ (sampling bias awareness) | △ (representation bias in data marts) | △ (bias-aware reporting) | ● (evaluation axis) |
| AutoML | - | - | - | - | - | △ (extension module) |

Legend: ● direct core, △ preparatory/bridge, - not targeted in this phase

---

## 3) Chapter-by-Chapter Detailed Plan

## Chapter 00 — Orientation (MLCC readiness + operating system)

### Chapter outcomes
- Build reproducible dev environment and evidence workflow.
- Lock safety/ethics rules including data quality-first and leakage awareness.
- Establish assessment structure and progression contracts.

### MLCC mapping
- **Overfitting/Generalization (principle level):** enforce “data quality > model complexity” mindset early.
- **Fairness (principle level):** add baseline checks to learning contract.
- **Numerical data readiness:** define data typing discipline for downstream chapters.

### Mandatory concepts
1. Reproducibility (env, dependency hygiene, version logging)
2. Experiment evidence model (logs/commits/reports)
3. Safety and ethics baseline (PII, licensing, AI usage transparency)
4. Assessment architecture (diagnostic/formative/summative)
5. Learning continuity system (anti-dropout protocol)

### Deliverables
- **Lessons:** orientation-01~07 (env, venv, git, auth, learning ops, assessment, roadmap)
- **Exercises:** setup verification drill, reproducibility drill, safety checklist completion
- **Solutions:** canonical setup proofs + sample filled templates
- **Projects:** Orientation completion bundle (all required docs)
- **Rubrics:** onboarding completion rubric (100, pass 85)
- **Evidence:** setup-proof, venv-proof, git/auth logs, learning contract, assessment plan, 14/90 plans, retrospective

### Acceptance gate (to enter 01)
- All 10 DoD artifacts present and validated.
- Push-to-remote evidence and rerun-from-scratch proof complete.

---

## Chapter 01 — Python (ML implementation substrate)

### Chapter outcomes
- Write reliable, modular Python for data/ML prep.
- Produce reusable scripts with error handling and documentation.

### MLCC mapping
- **Numerical Data (direct prep):** numeric cleaning/transformation foundations.
- **Categorical Data (early prep):** string/category handling prerequisites.

### Mandatory concepts
1. Data structures and control flow for tabular logic
2. Function decomposition and modularization
3. Exception handling and input validation
4. File I/O and basic data pipeline scripting
5. Virtual environment + dependency capture

### Deliverables
- **Lessons:** python-01~08 (syntax to modular scripts)
- **Exercises:** required 10 tasks (validator, parser, csv summarizer, refactor)
- **Solutions:** answer-guide with clean/reference implementations
- **Projects:** mini A/B (log organizer, csv report generator)
- **Rubrics:** existing mini project rubric (pass 75)
- **Evidence:** practice scripts, weekly notes, runnable demos, project READMEs

### Acceptance gate (to enter 02)
- 10 mandatory tasks + 2 mini projects complete.
- Code quality checklist pass + demo reproducibility pass.

---

## Chapter 02 — Statistics (evaluation and inference backbone)

### Chapter outcomes
- Interpret uncertainty correctly and avoid statistical misuse.
- Connect quantitative findings to decision-quality reporting.

### MLCC mapping
- **Overfitting/Generalization (bridge):** sampling variance and generalization risk.
- **Linear Regression (bridge):** correlation/regression intuition before ML modeling.
- **Classification metrics (bridge):** prepare metric literacy.
- **Numerical data (direct):** distribution/outlier handling.

### Mandatory concepts
1. Descriptive statistics and distribution diagnostics
2. Sampling, confidence intervals, hypothesis testing
3. p-value limits and effect-size thinking
4. Correlation vs causation
5. Statistical communication (result + uncertainty + limits)

### Deliverables
- **Lessons:** stats-01~08 (descriptive → inference → reporting)
- **Exercises:** required 8 tasks including CI and A/B test analysis
- **Solutions:** notebook-based solution guide with interpretation notes
- **Projects:** correlation report + A/B test report
- **Rubrics:** existing rubric (pass 75)
- **Evidence:** notebooks, interpretation memos, retrospective

### Acceptance gate (to enter 03)
- 8 mandatory tasks + 2 reports complete.
- Formative score >= 75 and no major interpretation error.

---

## Chapter 03 — SQL (feature-ready data extraction)

### Chapter outcomes
- Translate business questions into reliable SQL.
- Build analysis-ready datasets with correct joins and aggregations.

### MLCC mapping
- **Categorical Data (direct prep):** cardinality/profile extraction for encoding decisions.
- **Numerical Data (direct prep):** aggregate/scale-ready numeric features.
- **Overfitting/leakage (bridge):** time-aware query design to prevent future leakage.

### Mandatory concepts
1. Query composition for KPI extraction
2. Join correctness and null-safe logic
3. CTE/subquery/window function patterns
4. Data quality checks (row-count invariants, duplicate inflation)
5. Feature mart construction with time-split constraints

### Deliverables
- **Lessons:** sql-01~08 (query basics to retention/cohort patterns)
- **Exercises:** required 12 tasks
- **Solutions:** canonical SQL answers + validation checks
- **Projects:** ecommerce analysis + retention analysis
- **Rubrics:** existing rubric (pass 75)
- **Evidence:** SQL scripts, validation logs, report artifacts

### Acceptance gate (to enter 04)
- 12 mandatory tasks + 2 SQL reports complete.
- Join-leakage checks and null handling validated.

---

## Chapter 04 — Data Visualization (metric interpretation channel)

### Chapter outcomes
- Select and build charts that support decisions, not decoration.
- Communicate uncertainty and metric trade-offs clearly.

### MLCC mapping
- **Classification module (direct prep):** confusion matrix, ROC/PR visualization.
- **Linear regression module (prep):** residual/fit visualization.
- **Fairness (bridge):** subgroup performance visualization for bias checks.
- **Numerical/Categorical data (bridge):** distribution/category-level comparison.

### Mandatory concepts
1. Chart-type selection by analytical question
2. Distortion prevention (axis, scale, annotation integrity)
3. Distribution, relationship, and trend storytelling
4. Classification visualization (CM, ROC, PR)
5. Accessibility and interpretable design

### Deliverables
- **Lessons:** viz-01~08
- **Exercises:** 12 required chart tasks incl. correction of misleading charts
- **Solutions:** reproducible notebook/py scripts and interpretation exemplars
- **Projects:** dashboard-style + decision-story report
- **Rubrics:** existing rubric (pass 75)
- **Evidence:** chart files, report pages, retrospective

### Acceptance gate (to enter 05)
- 12 tasks + 2 visualization projects complete.
- Includes at least one classification-metric visualization pack.

---

## Chapter 05 — ML Fundamentals (MLCC core integration)

### Chapter outcomes
- Build, evaluate, and improve baseline ML systems with leakage-safe pipelines.
- Justify metric/model choices with business and risk framing.

### MLCC mapping (core)
- **Linear Regression** → regression modeling, residual diagnostics, regularization basics
- **Logistic Regression** → probabilistic binary classification and thresholding
- **Classification** → confusion matrix, precision/recall/F1/ROC-AUC/PR-AUC selection
- **Overfitting/Generalization** → split discipline, CV, bias-variance control
- **Numerical Data** → scaling/transforms and type-safe preprocessing
- **Categorical Data** → one-hot/hash/target-encoding decision framework
- **Fairness** → subgroup metrics and risk disclosure
- **AutoML (optional extension)** → manual-vs-automated modeling comparison

### Mandatory concepts
1. Problem framing (target, horizon, constraints, cost of errors)
2. Data partitioning + CV + stratification/time split
3. Leakage taxonomy and prevention via pipeline discipline
4. Baselines and model family comparison
5. Regression metrics (MAE/RMSE/R²) and error distribution analysis
6. Classification metrics and threshold optimization
7. Regularization and overfitting controls
8. Hyperparameter search protocol (grid/random)
9. Error analysis by segment
10. Reproducibility package (seed, versions, commands, artifacts)
11. Fairness-aware evaluation (minimum subgroup checks)

### Mandatory model methods
- Linear Models: LinearRegression, Ridge/Lasso, LogisticRegression
- Tree-based: DecisionTree, RandomForest, GradientBoosting/XGBoost-concept
- Margin/Distance: SVM, kNN
- Baselines: DummyRegressor, DummyClassifier

### Deliverables
- **Lessons:** ml-01~12 (mapping to mandatory concepts above)
- **Exercises:** 12 required labs (including 3 leakage reenactments)
- **Solutions:** fully runnable notebooks + `src/pipeline.py` reference
- **Projects:**
  - Project A (Regression): baseline → tuned → error analysis
  - Project B (Classification): baseline → threshold tuning → segment/fairness checks
- **Rubrics:** 100-point integrated rubric (pass 75)
- **Evidence:** notebooks 01~04, two error reports, metrics summary CSV, confusion matrix image, reproducibility README

### Acceptance gate (to enter 06)
- All mandatory concepts evidenced.
- 12 labs completed, leakage corrections documented.
- Regression + classification project packages reproducible by reviewer.

---

## 4) Build Sequence (Implementation Work Packages)

1. **WP-A (Foundation docs hardening, 00~01)**
   - Normalize templates, evidence checklist schema, chapter gate forms.
2. **WP-B (Quant backbone, 02~03)**
   - Align statistics and SQL outputs to ML-ready artifacts.
3. **WP-C (Interpretation layer, 04)**
   - Add mandatory metric-visualization packs.
4. **WP-D (ML core build-out, 05)**
   - Expand lessons/exercises/solutions/projects/rubrics to full MLCC mapping.
5. **WP-E (QA & gate audit, 00~05)**
   - Verify coverage matrix, missing evidence, reproducibility pass.

---

## 5) Acceptance Audit Checklist (for planner/quality agents)

- [ ] Every chapter has explicit MLCC link notes (direct or bridge).
- [ ] Mandatory concept list exists and is assessable.
- [ ] Deliverables set complete: lessons/exercises/solutions/projects/rubrics/evidence.
- [ ] Chapter gate criteria measurable and binary-checkable.
- [ ] Global reproducibility criteria met.
- [ ] 05 includes mandatory model-method comparison and fairness check axis.

---

## 6) Effort & Priority Estimate

- Highest priority: **05-ml-fundamentals** (largest gap + highest impact)
- Medium: **02, 03, 04** (bridges to ML quality)
- Stabilization: **00, 01** (already strong, mostly standardization)

Estimated relative effort (story points):
- 00: 3
- 01: 5
- 02: 6
- 03: 6
- 04: 6
- 05: 13
- QA cross-chapter: 5
