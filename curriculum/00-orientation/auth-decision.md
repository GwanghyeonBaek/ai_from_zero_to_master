# Auth Decision
Date (UTC): 2026-02-21

## Chosen Method
- SSH authentication selected for long-lived local development.

## Why SSH
- No plaintext token storage in shell history.
- Easy key rotation and host-level trust model.

## Security Controls
- Private key passphrase enabled.
- Secret files excluded from git (`.env`, token files).
- Least-privilege policy for any PAT fallback.

## Push Verification
- Verified push to remote repository with commit `7a27d07`.
- Remote endpoint recorded in redacted form only.
