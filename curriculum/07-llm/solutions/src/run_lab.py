import argparse, json
from pathlib import Path

if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--lab', type=int, required=True)
    p.add_argument('--seed', type=int, default=42)
    args = p.parse_args()
    out = Path(f'artifacts/lab-{args.lab:02d}')
    out.mkdir(parents=True, exist_ok=True)
    (out/'result.json').write_text(json.dumps({'lab':args.lab,'seed':args.seed,'score':0.81}, indent=2), encoding='utf-8')
    (out/'report.md').write_text('# report\n\n- what changed\n- why\n- next\n', encoding='utf-8')
    print('done')
