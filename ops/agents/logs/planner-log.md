# planner-log

## 2026-02-21
- initialized
- Created `ops/agents/plans/master_plan_mlcc.md` covering chapters 00~05 with explicit MLCC alignment.
- Decision: use a dual mapping model (direct core vs bridge/preparatory) so non-ML chapters still show concrete MLCC relevance without forcing artificial depth.
  - Rationale: `mlcc_analysis.json` alignment block indicates 00~04 are foundational connectors while 05 is core integration.
- Decision: define global acceptance gates (G1~G5) across all chapters before chapter-specific gates.
  - Rationale: AGENT_PLANNER requires chapter-level mandatory concepts + deliverables + acceptance logic; global gates enforce consistency.
- Decision: include chapter-level mandatory concepts with operational wording (assessable, evidence-linked), not only topic names.
  - Rationale: existing roadmaps are strong but mixed in granularity; plan needed assessment-ready specificity.
- Decision: preserve existing chapter pass threshold baseline (75) and add stricter artifact checks for reproducibility.
  - Rationale: existing rubrics/checklists already converge on 75 pass; upgrading without continuity risk was avoided.
- Decision: prioritize execution order by dependency chain 00→01→02→03→04→05 and implementation work packages WP-A~WP-E.
  - Rationale: current curriculum progression and ML readiness dependencies (Python→Stats/SQL→Viz→ML).
- Decision: encode mandatory model-family coverage in 05 (linear/tree/margin-distance/baseline) plus fairness axis.
  - Rationale: direct requirement from `mlcc_analysis.json` (`ml_fundamentals_required_model_methods`) and fairness module inclusion.
- Decision: include explicit deliverable taxonomy per chapter: lessons/exercises/solutions/projects/rubrics/evidence.
  - Rationale: user request + AGENT_PLANNER checklist completeness requirement.
