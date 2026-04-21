#!/usr/bin/env bash
set -euo pipefail

# Deploys one clinic to a dedicated Vercel project at <clinic>.kingdom-tech.co
# Usage: scripts/deploy-clinic.sh <clinic-id>
# Example: scripts/deploy-clinic.sh apo

CLINIC_ID="${1:-}"
ROOT_DOMAIN="${ROOT_DOMAIN:-kingdom-tech.co}"

if [[ -z "$CLINIC_ID" ]]; then
  echo "Usage: $0 <clinic-id>"
  echo "Example: $0 apo"
  exit 1
fi

# Slug → filename overrides (for cases where the JSON filename isn't <slug>.json).
# Keep in sync with the registry in lib/clinic.ts.
case "$CLINIC_ID" in
  dental) JSON_FILE="default.json" ;;
  *)      JSON_FILE="${CLINIC_ID}.json" ;;
esac
JSON_PATH="config/clinics/${JSON_FILE}"

if [[ ! -f "$JSON_PATH" ]]; then
  echo "ERROR: $JSON_PATH not found. Create it before deploying."
  exit 1
fi

PROJECT_NAME="${CLINIC_ID}-landing"
DOMAIN="${CLINIC_ID}.${ROOT_DOMAIN}"

echo "=============================="
echo " Clinic:  $CLINIC_ID"
echo " JSON:    $JSON_PATH"
echo " Project: $PROJECT_NAME"
echo " Domain:  $DOMAIN"
echo "=============================="

# Check Vercel login
if ! vercel whoami >/dev/null 2>&1; then
  echo "ERROR: Not logged into Vercel. Run: vercel login"
  exit 1
fi

# 1. Ensure project exists (idempotent)
if vercel project ls 2>/dev/null | awk 'NR>2 {print $1}' | grep -qx "$PROJECT_NAME"; then
  echo "[1/5] Project '$PROJECT_NAME' exists — skipping create."
else
  echo "[1/5] Creating project '$PROJECT_NAME'..."
  vercel project add "$PROJECT_NAME"
fi

# 2. Link current directory to the project (rewrites .vercel/project.json)
echo "[2/5] Linking repo to project..."
vercel link --yes --project "$PROJECT_NAME" >/dev/null

# 3. Ensure NEXT_PUBLIC_CLINIC_ID env var is set for production (idempotent)
if vercel env ls production 2>/dev/null | awk '{print $1}' | grep -qx "NEXT_PUBLIC_CLINIC_ID"; then
  echo "[3/5] NEXT_PUBLIC_CLINIC_ID already set — skipping."
else
  echo "[3/5] Setting NEXT_PUBLIC_CLINIC_ID=$CLINIC_ID for production..."
  printf '%s' "$CLINIC_ID" | vercel env add NEXT_PUBLIC_CLINIC_ID production
fi

# 4. Ensure domain is attached (idempotent — ignore "already exists")
echo "[4/5] Attaching domain $DOMAIN..."
vercel domains add "$DOMAIN" 2>&1 | grep -v "already" || true

# 5. Deploy to production
echo "[5/5] Deploying to production..."
vercel --prod

echo ""
echo "Done. Visit https://$DOMAIN"
