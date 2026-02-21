import argparse, json
from pathlib import Path

if __name__ == '__main__':
    p=argparse.ArgumentParser(); p.add_argument('--lab', type=int, required=True); args=p.parse_args()
    out=Path(f'artifacts/lab-{args.lab:02d}'); out.mkdir(parents=True, exist_ok=True)
    (out/'result.json').write_text(json.dumps({'lab':args.lab,'status':'ok'}, indent=2), encoding='utf-8')
    (out/'runbook-note.md').write_text('# runbook note\n\n- incident\n- action\n- prevention\n', encoding='utf-8')
    print('ok')
