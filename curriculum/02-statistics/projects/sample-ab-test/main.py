import argparse
import csv
from math import sqrt


def read_rows(path: str):
    rows = []
    with open(path, "r", encoding="utf-8", newline="") as f:
        for r in csv.DictReader(f):
            rows.append(r)
    return rows


def summarize(rows):
    groups = {"A": [], "B": []}
    for r in rows:
        g = r["group"].strip().upper()
        c = int(r["converted"])
        if g in groups:
            groups[g].append(c)

    n1, n2 = len(groups["A"]), len(groups["B"])
    p1 = sum(groups["A"]) / n1 if n1 else 0
    p2 = sum(groups["B"]) / n2 if n2 else 0
    diff = p2 - p1

    p_pool = (sum(groups["A"]) + sum(groups["B"])) / (n1 + n2)
    se = sqrt(p_pool * (1 - p_pool) * (1 / n1 + 1 / n2)) if n1 and n2 else 0
    z = diff / se if se else 0

    # normal approximation p-value (two-sided)
    # using rough approximation for simplicity
    import math
    p_value = 2 * (1 - 0.5 * (1 + math.erf(abs(z) / sqrt(2))))

    return p1, p2, diff, z, p_value


def write_report(path: str, p1: float, p2: float, diff: float, z: float, p_value: float):
    decision = "적용" if p_value < 0.05 and diff > 0 else "보류"
    with open(path, "w", encoding="utf-8") as f:
        f.write("# A/B Test Report\n\n")
        f.write(f"- A 전환율: {p1:.4f}\n")
        f.write(f"- B 전환율: {p2:.4f}\n")
        f.write(f"- 차이(B-A): {diff:.4f}\n")
        f.write(f"- z-score: {z:.4f}\n")
        f.write(f"- p-value: {p_value:.6f}\n")
        f.write(f"- 결론: **{decision}**\n")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    args = parser.parse_args()

    try:
        rows = read_rows(args.input)
        p1, p2, diff, z, p_value = summarize(rows)
        write_report(args.output, p1, p2, diff, z, p_value)
        print("리포트 생성 완료")
    except FileNotFoundError:
        print("입력 파일을 찾을 수 없습니다.")
    except KeyError:
        print("CSV 헤더(group,converted)를 확인하세요.")
    except ValueError:
        print("converted 값은 0 또는 1이어야 합니다.")


if __name__ == "__main__":
    main()
