# Merging into zaheerpoei.github.io

This folder is your **existing** `zaheerpoei/zaheerpoei.github.io` repo, updated:

- `privacy.html` and `app-ads.txt` — **untouched**, exact same content as what's live now. Nothing that points to these (AdMob, Play Store) breaks.
- `index.html`, `style.css`, `script.js` — **new**. This is now the career portfolio (was previously the Smart Expense Manager landing page).
- `smart-expense-manager.html` — **new file**. This is your old `index.html` content, moved here as-is, with one addition: a "← Back to Zaheer Ahmed's portfolio" link in the footer.
- `Zaheer_Ahmed_Android_Developer.pdf` — new, for the résumé download button.

The portfolio's "Independent — under SharpEdges" section now links to `smart-expense-manager.html` directly, so the two sites are cross-linked into one.

## What you need to check before pushing

If your Play Store listing, AdMob console, or anything else references `https://zaheerpoei.github.io/` directly expecting the Smart Expense Manager page, that link will now show the portfolio instead. If that matters somewhere, update that reference to point to `https://zaheerpoei.github.io/smart-expense-manager.html` instead.

## How to push this

```bash
# Clone your existing repo (or cd into it if you already have it locally)
git clone https://github.com/zaheerpoei/zaheerpoei.github.io.git
cd zaheerpoei.github.io

# Copy every file from this folder into the repo root, overwriting index.html
# (privacy.html and app-ads.txt are identical to what's already there, so
# copying them over is harmless — or just skip those two files)

git add .
git commit -m "Merge career portfolio into homepage, move app landing page to /smart-expense-manager.html"
git push
```

GitHub Pages will redeploy automatically within a minute or two — no changes needed in **Settings → Pages**, since this repo is already configured and live.

## Play Store icons — final status

**9 of 12 cards now show their real icon automatically**, hotlinked straight from Google's Play Store CDN — no files to add:

PackageX Receive, PackageX Mailroom, Warehouse Logistics, GenixDrive, Photo Vault, Islamic Prayer Times, JS Mobile, Zindigi, and Smart Expense Manager.

**3 cards show a placeholder (initials tile) because the listing itself has a problem:**

| App | Issue |
|---|---|
| SalonToday Client — `com.salontoday.client.pk` | Play Store returns a 404 — page not found |
| Vevue — `com.vevue.powehi` | Play Store returns a 404 — page not found |
| Find A Doctor — `com.findadoctor.pk` | This package ID now resolves to a different app ("Marham: Doctors & Hospitals"), confirmed on 3 separate checks |

These three now show no Play Store link and no icon — just the initials placeholder — rather than pointing at a broken or wrong URL. If you have the correct current package IDs for these apps, update the `link` field for that entry in `script.js` and I (or you) can pull the icon URL the same way.

**SalonToday** itself (`com.salontoday.pk`) is confirmed live and correctly linked, but I wasn't able to cleanly extract its icon URL this session — the fetch kept returning a cached, image-stripped copy of the page no matter how I varied the request. Its card still points at `icons/salontoday.png` as a placeholder path; grab the icon manually (steps below) and it'll pick it up automatically.

## Adding icons manually for the rest

1. Create an `icons/` folder next to `index.html`.
2. Open the app's Play Store listing, right-click the icon → **Save image as…** → save as `icons/salontoday.png`.

Each card checks for its icon automatically; if a local file is missing or fails to load, it quietly falls back to the initials glyph — safe to add one at a time. A square PNG around 512×512 works best.

## Editing content later

All project data lives in three arrays at the top of `script.js` — `featured`, `additional`, and `independent`. Add, remove, or edit an app by editing its object (`name`, `pkg`, `stack`, `layer`, `desc`, and optionally `link`/`role`/`icon`/`linkLabel`). No HTML editing needed to add a new project card.

`layer` accepts `"presentation"`, `"domain"`, or `"data"` — it just controls which accent color the card uses.
