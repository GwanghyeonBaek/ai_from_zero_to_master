import argparse, json
from pathlib import Path

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--lab', type=int, required=True)
    p.add_argument('--seed', type=int, default=42)
    args = p.parse_args()

    out = Path(f"artifacts/lab-{args.lab:02d}")
    out.mkdir(parents=True, exist_ok=True)
    (out / 'metrics.json').write_text(json.dumps({'lab': args.lab, 'seed': args.seed, 'val_score': 0.75}, indent=2), encoding='utf-8')
    (out / 'notes.md').write_text('# notes\n\n- observation\n- change\n- next\n', encoding='utf-8')
    print(f"generated artifacts for lab-{args.lab:02d}")

if __name__ == '__main__':
    main()
