#!/usr/bin/env bash
# verify-design.sh — Eagle Dumpster design token verification
# Regenerated for Direction C + A tokens. Run after every change.
# macOS-compatible (uses grep -E instead of grep -P)

set -euo pipefail

PASS=0
FAIL=0
WARN=0

pass() { ((PASS++)); echo "  PASS: $1"; }
fail() { ((FAIL++)); echo "  FAIL: $1"; }
warn() { ((WARN++)); echo "  WARN: $1"; }

echo "=== Eagle Dumpster Design Verification ==="
echo ""

HAS_SRC=false
if [ -d "src/" ] || [ -d "app/" ]; then
  HAS_SRC=true
fi

# --- 1. Allowed hex colors ---
echo "--- Hex color check ---"

if [ "$HAS_SRC" = true ]; then
  # Allowed hex: #0C0C0C #1C1C1C #E31B1B #FFFFFF #A1A1AA #2E2E2E #DC2626
  HEX_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.css" --include="*.jsx" \
    -o '#[0-9A-Fa-f]\{3,8\}' \
    src/ app/ 2>/dev/null \
    | grep -v 'tokens.css' \
    | grep -v 'globals.css' \
    | grep -iv '#\(0C0C0C\|1C1C1C\|E31B1B\|FFFFFF\|A1A1AA\|2E2E2E\|DC2626\|fff\|000\)' \
    || true)

  if [ -z "$HEX_VIOLATIONS" ]; then
    pass "No unauthorized hex colors found"
  else
    fail "Unauthorized hex colors found:"
    echo "$HEX_VIOLATIONS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping hex check)"
fi

# --- 2. Tailwind default radius classes (radius is 0px - no rounded allowed) ---
echo ""
echo "--- Tailwind default radius check ---"

if [ "$HAS_SRC" = true ]; then
  # Radius is 0px. Only rounded-full is allowed in AvailabilityBadge (for the dot).
  RADIUS_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.jsx" \
    -E 'rounded-(sm|md|lg|xl|2xl|3xl|full|\[8px\]|\[12px\]|\[16px\])' \
    src/ app/ 2>/dev/null \
    | grep -v 'AvailabilityBadge.tsx' \
    | grep -v 'StickyHeader.tsx' \
    || true)

  if [ -z "$RADIUS_VIOLATIONS" ]; then
    pass "No rounded corners found (radius is 0px)"
  else
    fail "Rounded corners found (radius must be 0px - sharp corners only):"
    echo "$RADIUS_VIOLATIONS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping radius check)"
fi

# --- 3. Tailwind default shadow classes (no shadows in this design) ---
echo ""
echo "--- Shadow check (no shadows allowed) ---"

if [ "$HAS_SRC" = true ]; then
  SHADOW_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.jsx" \
    -E 'shadow-(sm|md|lg|xl|2xl|inner|\[)' \
    src/ app/ 2>/dev/null || true)

  if [ -z "$SHADOW_VIOLATIONS" ]; then
    pass "No shadow classes found"
  else
    fail "Shadow classes found (this design uses no shadows):"
    echo "$SHADOW_VIOLATIONS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping shadow check)"
fi

# --- 4. Framer Motion / motion library imports ---
echo ""
echo "--- Motion library check ---"

if [ "$HAS_SRC" = true ]; then
  MOTION_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.jsx" \
    -E "from ['\"]framer-motion['\"]|from ['\"]motion/react['\"]|from ['\"]motion['\"]" \
    src/ app/ 2>/dev/null || true)

  if [ -z "$MOTION_VIOLATIONS" ]; then
    pass "No motion library imports (CSS-only motion budget)"
  else
    fail "Motion library imports found (budget is CSS-only):"
    echo "$MOTION_VIOLATIONS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping motion check)"
fi

# --- 5. Font family outside variables ---
echo ""
echo "--- Font family check ---"

if [ "$HAS_SRC" = true ]; then
  FONT_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.css" --include="*.jsx" \
    "font-family:" \
    src/ app/ 2>/dev/null \
    | grep -v 'tokens.css' \
    | grep -v 'globals.css' \
    | grep -v "var(--font" \
    || true)

  if [ -z "$FONT_VIOLATIONS" ]; then
    pass "No hardcoded font-family declarations"
  else
    fail "Hardcoded font-family found (use CSS variables):"
    echo "$FONT_VIOLATIONS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping font check)"
fi

# --- 6. Banned fonts ---
echo ""
echo "--- Banned font names check ---"

if [ "$HAS_SRC" = true ]; then
  BANNED_FONTS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.css" --include="*.jsx" \
    -E "(font.*Inter[^a-zA-Z]|['\"]Inter['\"]|['\"]Roboto['\"]|['\"]Arial['\"]|['\"]Open Sans['\"]|['\"]Helvetica['\"]|['\"]Plus Jakarta Sans['\"])" \
    src/ app/ 2>/dev/null \
    | grep -v 'tokens.css' \
    | grep -v 'node_modules' \
    || true)

  if [ -z "$BANNED_FONTS" ]; then
    pass "No banned font names found"
  else
    fail "Banned font names found:"
    echo "$BANNED_FONTS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping banned fonts check)"
fi

# --- 7. Default Tailwind color classes ---
echo ""
echo "--- Default Tailwind color classes check ---"

if [ "$HAS_SRC" = true ]; then
  TW_COLOR_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.jsx" \
    -E '(bg|text|border|ring|outline|fill|stroke)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]{2,3}' \
    src/ app/ 2>/dev/null || true)

  if [ -z "$TW_COLOR_VIOLATIONS" ]; then
    pass "No default Tailwind color utilities"
  else
    fail "Default Tailwind color utilities found (use token classes only):"
    echo "$TW_COLOR_VIOLATIONS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping Tailwind color check)"
fi

# --- 8. Em-dash check ---
echo ""
echo "--- Em-dash check ---"

if [ "$HAS_SRC" = true ]; then
  EMDASH_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.css" \
    $'\xe2\x80\x93\|\xe2\x80\x94' \
    src/ app/ 2>/dev/null || true)

  if [ -z "$EMDASH_VIOLATIONS" ]; then
    pass "No em-dashes or en-dashes found"
  else
    fail "Em-dash or en-dash found (use hyphen instead):"
    echo "$EMDASH_VIOLATIONS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping em-dash check)"
fi

# --- 9. Contrast ratio verification ---
echo ""
echo "--- Contrast ratio verification ---"

hex_to_luminance() {
  local hex="${1#\#}"
  local r=$((16#${hex:0:2}))
  local g=$((16#${hex:2:2}))
  local b=$((16#${hex:4:2}))

  awk -v r="$r" -v g="$g" -v b="$b" 'BEGIN {
    rs = r / 255.0
    gs = g / 255.0
    bs = b / 255.0

    if (rs <= 0.03928) rl = rs / 12.92; else rl = ((rs + 0.055) / 1.055) ^ 2.4
    if (gs <= 0.03928) gl = gs / 12.92; else gl = ((gs + 0.055) / 1.055) ^ 2.4
    if (bs <= 0.03928) bl = bs / 12.92; else bl = ((bs + 0.055) / 1.055) ^ 2.4

    printf "%.6f", 0.2126 * rl + 0.7152 * gl + 0.0722 * bl
  }'
}

contrast_ratio() {
  local l1=$(hex_to_luminance "$1")
  local l2=$(hex_to_luminance "$2")

  awk -v l1="$l1" -v l2="$l2" 'BEGIN {
    if (l1 > l2) {
      ratio = (l1 + 0.05) / (l2 + 0.05)
    } else {
      ratio = (l2 + 0.05) / (l1 + 0.05)
    }
    printf "%.1f", ratio
  }'
}

check_contrast() {
  local fg="$1"
  local bg="$2"
  local min="$3"
  local label="$4"

  local ratio=$(contrast_ratio "$fg" "$bg")
  local passes=$(awk -v r="$ratio" -v m="$min" 'BEGIN { print (r >= m) ? 1 : 0 }')

  if [ "$passes" -eq 1 ]; then
    pass "$label: ${ratio}:1 (min ${min}:1)"
  else
    fail "$label: ${ratio}:1 (min ${min}:1)"
  fi
}

# Read token colors from tokens.css
extract_color() {
  local token="$1"
  local file="tokens.css"
  if [ -f "src/app/tokens.css" ]; then file="src/app/tokens.css"; fi
  sed -n "s/.*${token}:[[:space:]]*\(#[0-9a-fA-F]\{6\}\).*/\1/p" "$file" | head -1
}

BG=$(extract_color "--color-bg")
SURFACE=$(extract_color "--color-surface")
PRIMARY=$(extract_color "--color-primary")
ON_PRIMARY=$(extract_color "--color-on-primary")
TEXT=$(extract_color "--color-text")
TEXT_MUTED=$(extract_color "--color-text-muted")

if [ -z "$BG" ] || [ -z "$TEXT" ] || [ -z "$PRIMARY" ] || [ -z "$ON_PRIMARY" ] || [ -z "$TEXT_MUTED" ] || [ -z "$SURFACE" ]; then
  fail "Could not read all color tokens from tokens.css"
else
  check_contrast "$TEXT" "$BG" "4.5" "text on bg"
  check_contrast "$TEXT_MUTED" "$BG" "3.0" "text-muted on bg"
  check_contrast "$TEXT" "$SURFACE" "4.5" "text on surface"
  check_contrast "$ON_PRIMARY" "$PRIMARY" "4.5" "on-primary on primary"
fi

# --- 10. h-screen check ---
echo ""
echo "--- Viewport stability check ---"

if [ "$HAS_SRC" = true ]; then
  HSCREEN_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.jsx" \
    'h-screen' \
    src/ app/ 2>/dev/null || true)

  if [ -z "$HSCREEN_VIOLATIONS" ]; then
    pass "No h-screen usage (using min-h-[100dvh] instead)"
  else
    warn "h-screen found (prefer min-h-[100dvh] for iOS Safari):"
    echo "$HSCREEN_VIOLATIONS" | head -10
  fi
else
  pass "No src/ or app/ directories yet (skipping h-screen check)"
fi

# --- 11. prefers-reduced-motion check ---
echo ""
echo "--- Reduced motion check ---"

if [ "$HAS_SRC" = true ]; then
  ANIMATION_FILES=$(grep -rln --include="*.css" \
    -E '(animation|transition|@keyframes)' \
    src/ app/ 2>/dev/null \
    | grep -v 'tokens.css' \
    | grep -v 'node_modules' \
    || true)

  if [ -n "$ANIMATION_FILES" ]; then
    REDUCED_MOTION=$(grep -rn --include="*.css" \
      'prefers-reduced-motion' \
      src/ app/ 2>/dev/null || true)

    if [ -z "$REDUCED_MOTION" ]; then
      warn "CSS animations found but no prefers-reduced-motion media query"
    else
      pass "prefers-reduced-motion is handled"
    fi
  else
    pass "No CSS animations to check (or source dirs don't exist yet)"
  fi
else
  pass "No src/ or app/ directories yet (skipping reduced-motion check)"
fi

# --- 12. Light background leak check ---
echo ""
echo "--- Light background leak check ---"

if [ "$HAS_SRC" = true ]; then
  LIGHT_BG_VIOLATIONS=$(grep -rn --include="*.tsx" --include="*.ts" --include="*.jsx" \
    -E 'bg-(white|gray-50|gray-100|zinc-50|zinc-100|neutral-50|slate-50|stone-50)' \
    src/ app/ 2>/dev/null || true)

  if [ -z "$LIGHT_BG_VIOLATIONS" ]; then
    pass "No light background classes found (dark-only design)"
  else
    fail "Light background classes found (this is a dark-only design):"
    echo "$LIGHT_BG_VIOLATIONS" | head -20
  fi
else
  pass "No src/ or app/ directories yet (skipping light bg check)"
fi

# --- Summary ---
echo ""
echo "=== Summary ==="
echo "  PASS: $PASS"
echo "  FAIL: $FAIL"
echo "  WARN: $WARN"
echo ""

if [ "$FAIL" -gt 0 ]; then
  echo "RESULT: FAILED ($FAIL violations)"
  exit 1
else
  echo "RESULT: PASSED"
  exit 0
fi
