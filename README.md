# India Qualifications, Certification & Awarding Body Playbook

An interactive, device-agnostic web playbook for India's qualification, certification and
awarding body ecosystem, built in the Swift AI Academy visual language.

It turns a long strategy document into something a team can actually operate: every section
opens with a **What / Why / How** triad, every master table is searchable and filterable, and a
**Credential Navigator** maps a desired learner outcome to the regulatory pathway, the
organisation to approach, the approval that governs it and the practical first move.

**Research verified as of 16 September 2026.**

## What is in it

| # | Section | Contents |
|---|---------|----------|
| 01 | Start here | The central strategic conclusion, the target credential architecture, four parallel 90-day tracks |
| 02 | Credential Navigator | Interactive outcome-to-pathway tool plus the decision tree |
| 03 | Vocabulary & claims | 20 credential terms, who gives each one authority, what it is worth |
| 04 | National ecosystem | Master Table A: 19 national bodies, NCVET deep dive, recognition requirements |
| 05 | Qualification routes | Master Table B: 12 routes with complexity and planning time |
| 06 | State landscape | Master Table C: all 36 states and UTs, 6 operating models, 4 deep dives |
| 07 | Universities & IITs | Master Table D: 8 institution types, the 4 IIT structures, contract architecture |
| 08 | Sectors & programmes | SSC mapping, 13 programme strategies, existing qualifications, OEM layer |
| 09 | Academic credit | NCrF, ABC, RPL, qualification recognition compared with academic credit |
| 10 | Partnership playbook | Master Table F, outreach sequences, 6 copy-ready templates, documentation checklist |
| 11 | Stakeholder directory | Master Table E: 16 stakeholder roles and their correct entry points |
| 12 | Myths & risks | 12 false claims with verdicts, 18-item risk register |
| 13 | Credential architecture | Six independent credential layers, recommended stack per programme type |
| 14 | Action plan | Master Table H pipeline, day 30 / 60 / 90 execution plan, pre-signing evidence list |
| 15 | Sources | 43 primary source entries covering all 76 citations |

## Features

- **Global search** across every table row, template, myth and source. `Ctrl`/`Cmd` + `K`, or `/`.
- **Per-table search and filters** on 24 master tables, with live row counts and a reset control.
- **Credential Navigator** linking 10 learner outcomes to pathway, organisation, approval and first move.
- **Inline citations** that jump to the source entry.
- **Copy-to-clipboard** first-contact templates for email, LinkedIn, WhatsApp and government notes.
- **Light and dark mode**, following the system preference and overridable, with the choice remembered.
- **Responsive by design**: wide tables become labelled cards below 860px; the sidebar becomes a drawer below 1080px.
- **Print and PDF stylesheet** via the toolbar print button.

## Running it

Static HTML, CSS and JavaScript. No build step, no dependencies, no framework.

```bash
git clone https://github.com/shubhamchakraborty-Prod/Qualification_Playbook.git
cd Qualification_Playbook
python3 -m http.server 8000
# open http://localhost:8000
```

## Publishing to GitHub Pages

Two options, both supported by this repository:

1. **GitHub Actions (recommended).** In *Settings → Pages*, set **Source** to **GitHub Actions**.
   The workflow in `.github/workflows/pages.yml` publishes the repository root on every push to `main`
   and can also be run manually from the Actions tab.
2. **Deploy from a branch.** In *Settings → Pages*, set **Source** to **Deploy from a branch**, then
   pick the branch and the `/ (root)` folder. The `.nojekyll` file is already present so Jekyll does
   not touch the assets.

## Structure

```
index.html                 markup shell, fonts, header, search modal
404.html                   branded not-found page
assets/css/styles.css      design tokens, layout, components, responsive and print rules
assets/js/data.js          all playbook content as structured data (sections, tables, sources)
assets/js/app.js           renderer, search index, table filters, Credential Navigator, theming
assets/img/                logo mark, stacked lockup, favicon (vector, from the master artwork)
```

Content lives entirely in `assets/js/data.js`. Each section declares a `wwh` triad and a list of
typed blocks (`table`, `flow`, `tree`, `cards`, `split`, `layers`, `accordion`, `templates`,
`phases`, `callout`, `prose`). Adding a row, a table or a whole section means editing data, not markup.

## Design

Built to the Swift AI Academy Brand & Design Guidelines v1.0 (2026).

| Token | Light | Dark |
|-------|-------|------|
| Primary | Royal Blue `#3D5AFE` | Gold `#FBB034` for the primary action |
| Ink / ground | Deep Navy `#0E1B5C` | Deep Navy `#0E1B5C` / `#0A1240` |
| Accent | Gold `#FBB034`, used sparingly | Blue Light `#6F87FF` for links |
| Border | `#E2E6F2` | `rgba(255,255,255,.12)` |

Typography is Cabinet Grotesk for display and text, JetBrains Mono for eyebrows, labels and data,
with Plus Jakarta Sans as the fallback stack. Radii follow the guideline: 999px for pills and
buttons, 16px for cards, 24 to 32px for large surfaces.

## A note on the content

Complexity ratings and planning times are internal planning estimates, not regulator service
levels. Fees, financial thresholds, tenure and renewal deadlines should be checked against the
current amended NCVET guidelines before anything is filed. State mission entries identify
institutions rather than office-holders, and current leadership and procurement rules should be
rechecked immediately before outreach.
