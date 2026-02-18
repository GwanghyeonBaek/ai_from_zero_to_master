#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import pathlib
import re

import feedparser
import yaml

ROOT = pathlib.Path(__file__).resolve().parents[1]
SOURCES_PATH = ROOT / "resources" / "sources.yaml"
OUTPUT_PATH = ROOT / "resources" / "latest.md"


def clean(text: str) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    return text


def load_sources() -> list[dict]:
    data = yaml.safe_load(SOURCES_PATH.read_text(encoding="utf-8"))
    return data.get("feeds", [])


def build_markdown() -> str:
    now = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = [
        "# Latest Learning Resources",
        "",
        f"Updated: {now}",
        "",
        "자동 수집된 최신 자료입니다.",
        "",
    ]

    for source in load_sources():
        name = source["name"]
        url = source["url"]
        category = source.get("category", "general")

        lines.append(f"## {name} ({category})")
        feed = feedparser.parse(url)
        entries = feed.entries[:5]

        if not entries:
            lines.append("- (No recent entries found)")
            lines.append("")
            continue

        for entry in entries:
            title = clean(getattr(entry, "title", "Untitled"))
            link = getattr(entry, "link", "")
            summary = clean(getattr(entry, "summary", ""))
            if len(summary) > 180:
                summary = summary[:177] + "..."

            lines.append(f"- [{title}]({link})")
            if summary:
                lines.append(f"  - {summary}")

        lines.append("")

    return "\n".join(lines).strip() + "\n"


def main() -> None:
    OUTPUT_PATH.write_text(build_markdown(), encoding="utf-8")
    print(f"Updated {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
