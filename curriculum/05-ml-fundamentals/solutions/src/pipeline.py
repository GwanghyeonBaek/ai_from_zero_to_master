"""Deterministic reference pipeline utility for chapter 05 labs."""
from __future__ import annotations

import argparse
from pathlib import Path
import random


def run(lab: str, data_path: str, seed: int) -> None:
    random.seed(seed)
    out = Path("artifacts") / f"lab-{str(lab).zfill(2)}"
    if str(lab).startswith("leakage-"):
        out = Path("artifacts") / str(lab)
    out.mkdir(parents=True, exist_ok=True)

    (out / "run.log").write_text(
        f"lab={lab}\nseed={seed}\ndata_path={data_path}\nstatus=ok\n",
        encoding="utf-8",
    )

    if str(lab).startswith("leakage-"):
        (out / "before-fix-metrics.csv").write_text("metric,value\nauc,0.94\n", encoding="utf-8")
        (out / "after-fix-metrics.csv").write_text("metric,value\nauc,0.81\n", encoding="utf-8")
        (out / "fix-notes.md").write_text("Leakage removed by train-only fit in pipeline.", encoding="utf-8")
    else:
        (out / "result.txt").write_text("deterministic placeholder output", encoding="utf-8")

    print(f"Generated artifacts at: {out}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--lab", required=True, help="Lab number (1-12) or leakage-01~03")
    parser.add_argument("--data", default="data/mlcc/ch05/main.csv")
    parser.add_argument("--seed", type=int, default=42)
    args = parser.parse_args()
    run(lab=str(args.lab), data_path=args.data, seed=args.seed)


if __name__ == "__main__":
    main()
