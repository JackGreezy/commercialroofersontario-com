#!/usr/bin/env bash
set -euo pipefail
ROOT=/Users/jackgreenberg/Desktop/rank-and-rent
S=$ROOT/David/clones/scripts
PROJ=$ROOT/commercial-roofing/commercialroofersontario-com
REFHOST=hoffmancorp-com
VOICE=$S/voice/commercial-roofing.json
PAGES="home=https://www.hoffmancorp.com/,about=https://www.hoffmancorp.com/about/,contact=https://www.hoffmancorp.com/contact/,index=https://www.hoffmancorp.com/projects/,slug=https://www.hoffmancorp.com/projects/commercial/"
CFG=$PROJ/home.config.json
MAP=$S/relabel-map-$REFHOST.json
CAP=$ROOT/David/clones/_captures/$REFHOST

[ -f "$CFG" ] || { echo "MISSING $CFG"; exit 1; }
[ -f "$MAP" ] || { echo "MISSING $MAP"; exit 1; }
[ -f "$CAP/public/home.html.ref" ] || node "$S/faithful-home.mjs" --src "https://www.hoffmancorp.com/" --pages "$PAGES" --dir "$CAP"
mkdir -p "$PROJ/public"
cp "$CAP"/public/*.html.ref "$PROJ/public/" 2>/dev/null || true
[ -d "$PROJ/public/assets-f" ] || cp -R "$CAP/public/assets-f" "$PROJ/public/"
mkdir -p "$PROJ/qa-out"
cp "$CAP"/qa-out/ref-*.png "$PROJ/qa-out/" 2>/dev/null || true
python3 "$S/normalize_content.py" "$PROJ" --voice "$VOICE"
mkdir -p "$PROJ/public/ours"
cp -R "$PROJ/public/images/." "$PROJ/public/ours/" 2>/dev/null || true
python3 "$S/relabel_engine.py" --config "$CFG" --map "$MAP" --voice "$VOICE"
python3 "$PROJ/scripts/normalize-contact-forms.py" "$PROJ"
python3 "$PROJ/scripts/hobo-seo-finalize.py" "$PROJ"
node "$PROJ/scripts/rebuild-ontario-funnel.mjs"
python3 "$S/verify_site.py" "$PROJ" --map "$MAP" --json "$PROJ/qa-out/verify.json"
node "$S/qa_shots.mjs" "$PROJ" --port 4878
echo "BUILD COMPLETE — gates green. Human QA: open $PROJ/qa-out/CONTACT-SHEET.html"
