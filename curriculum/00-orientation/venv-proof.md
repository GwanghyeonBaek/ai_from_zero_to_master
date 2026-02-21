# venv Proof
Date (UTC): 2026-02-21

## Create / Remove / Recreate Verification
```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -U pip
python -m pip freeze > requirements.txt
deactivate
rm -rf .venv
python3 -m venv .venv
source .venv/bin/activate
python -c "print('venv_recreated_ok')"
```
Expected output: `venv_recreated_ok`.
