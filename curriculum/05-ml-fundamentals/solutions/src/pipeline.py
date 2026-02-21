"""Reference training/evaluation pipeline skeleton for chapter 05."""
from dataclasses import dataclass

@dataclass
class RunConfig:
    seed: int = 42
    data_path: str = "data/train.csv"
    target: str = "target"


def main(cfg: RunConfig) -> None:
    print(f"Run with seed={cfg.seed}, data_path={cfg.data_path}, target={cfg.target}")
    print("Implement preprocessing, split policy, model baseline, metrics, and logging.")


if __name__ == "__main__":
    main(RunConfig())
