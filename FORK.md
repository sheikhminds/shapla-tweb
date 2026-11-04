# FORK.md — what Shapla Web changes

This repository is a fork of [morethanwords/tweb](https://github.com/morethanwords/tweb)
(“Telegram Web K”), licensed under GPL-3.0. It is not affiliated with, endorsed by, or supported by
Telegram. The upstream copyright and license are unchanged; everything below is the set of
modifications added on top, as GPL-3.0 requires us to state.

**Fork date:** 2026-11-04 · **Upstream commit the fork was cut from:** `28bba1b`

## 1. Bangladesh palette as the factory theme

New palette constants in `src/config/themePresets.ts`, shared by the default theme and the accent
picker so the two cannot drift apart:

| Token | Value | Meaning |
|---|---|---|
| `SHAPLA_GREEN` | `#006A4E` | bottle green accent for the light bases |
| `SHAPLA_GREEN_NIGHT` | `#3ECFA3` | the same green, lifted so it reads on the dark bases |
| `SHAPLA_GREEN_TINTED` | `#1FA37D` | green for the “Dark” base |
| `SHAPLA_RED` | `#F42A41` | red outgoing bubbles |
| `SHAPLA_RED_DARK` | `#D9243A` → `#B01C2C` | two-stop bubble gradient on dark bases |

Wallpapers are light mint and dark bottle-green gradients with a red hint
(`SHAPLA_WALLPAPERS`), and each base gets a green selection tint
(`DEFAULT_HIGHLIGHTING_COLORS` in `src/config/state.ts`).

## 2. Default theme

`DEFAULT_THEME` in `src/config/state.ts` now points at the palette above for all four base themes
(classic/day, night, tinted, light) instead of the upstream blue/purple, so a fresh install is green
with red outgoing bubbles.

## 3. Accent swatch

`getAccentPresetsForBase()` prepends one curated Shapla preset per base (id `201`, outside the iOS
index range `10..18` / `101..107`, so the upstream presets keep their cross-platform meaning). The
swatch appears first in *Settings → General settings → Themes* in every base theme.

## 4. Project plumbing

- `.github/workflows/build.yml` — unit tests, typecheck and a production bundle on every push and
  pull request; a push to `master` publishes the bundle to GitHub Pages
  (https://sheikhminds.github.io/shapla-tweb/), and a `v*` tag publishes `shapla-tweb-dist.tar.gz`
  as a release asset.
- `.github/workflows/push-review.yml` — removed. It is upstream's private maintainer workflow (it
  posts to Telegram with repository secrets this fork does not have) and would fail on every push.
- `README.md` — Shapla header above the untouched upstream instructions.
- `src/lib/calls/e2e/tests/blockchain.test.ts` — three `describe` bodies built libsodium keys while
  the file was being collected, before the `beforeAll` that awaits `sodium.ready`; the full suite
  hit `crypto_sign_seed_keypair is not a function` on CI. The keys are now made in `beforeAll`.
  No assertion or fixture changed.

## What is *not* changed

The client itself: protocol, UI, features, tests, language packs and upstream branding are tweb's.
No upstream file is deleted except the one workflow noted above, and no license or attribution text
is removed.
