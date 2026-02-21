# Setup Proof
Date (UTC): 2026-02-21

## System/Tool Versions
```bash
python3 --version   # Python 3.11.x
git --version       # git version 2.x
node --version      # v20.x (LTS)
npm --version       # 10.x
```

## Troubleshooting Notes
- If `python` points to old version, use `python3` explicitly.
- If pip permission errors occur, verify venv is activated.

## Rerun-From-Scratch Proof (explicit)
```bash
rm -rf .venv
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -U pip
python -m pip freeze > requirements.txt
python - <<'PY'
import sys
print('python_ok', sys.version.split()[0])
PY
```
Expected output includes `python_ok 3.11.*` and non-empty `requirements.txt` file.
