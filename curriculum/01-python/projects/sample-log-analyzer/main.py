import argparse
import csv
from collections import defaultdict


def read_rows(path: str):
    rows = []
    with open(path, "r", encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            rows.append(row)
    return rows


def summarize(rows):
    by_subject = defaultdict(int)
    total = 0
    for r in rows:
        minutes = int(r["minutes"])
        subject = r["subject"]
        total += minutes
        by_subject[subject] += minutes
    top_subject = max(by_subject, key=by_subject.get) if by_subject else "N/A"
    return total, dict(by_subject), top_subject


def write_report(path: str, total: int, by_subject: dict, top_subject: str):
    with open(path, "w", encoding="utf-8") as f:
        f.write(f"총 학습 시간: {total}분\n")
        f.write("과목별 합계:\n")
        for s, m in sorted(by_subject.items()):
            f.write(f"- {s}: {m}분\n")
        f.write(f"최다 학습 과목: {top_subject}\n")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    args = parser.parse_args()

    try:
        rows = read_rows(args.input)
        total, by_subject, top_subject = summarize(rows)
        write_report(args.output, total, by_subject, top_subject)
        print("리포트 생성 완료")
    except FileNotFoundError:
        print("입력 파일을 찾을 수 없습니다.")
    except KeyError:
        print("CSV 헤더(date,subject,minutes)를 확인하세요.")
    except ValueError:
        print("minutes는 숫자여야 합니다.")


if __name__ == "__main__":
    main()
