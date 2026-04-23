# CCSB — Compounding & Colouring Sdn Bhd (Subsidiary Profile)

## Project Context
Subsidiary profile site for CCSB, nested under the TSP Group corporate profile project.
Part of: `/Users/mhdfarisx/tsp-profile-v2/`

## Company
- **Full name:** Compounding & Colouring Sdn Bhd (CCSB)
- **Parent:** Teck See Plastic Group → Oriental Holdings Berhad (SSM: 5286-U)
- **Est.:** April 1994
- **Industry:** Polymer compounding & colouring — Automotive, Home Appliances, E&E, Water Systems
- **Certifications:** IATF 16949:2016, ISO 9001:2015
- **Phone:** +603-8925 4272
- **Email:** aminhusni@ccsboh.com.my

## Stack
- Pure static HTML/CSS/JS — no framework
- Shared stylesheet: `../style.css`
- Shared JS (nav/logo injection): `../main.js`
- Path prefix for assets/links: `../` (subdirectory under TSP root)

## File Structure
```
ccsb/
├── index.html       — Homepage: hero banner, stats, overview
├── about.html       — About CCSB, org chart, team
├── history.html     — Company milestones timeline
├── products.html    — Product range
├── machinery.html   — Machinery & equipment
├── quality.html     — Quality certifications & standards
├── contact.html     — Contact form & details
└── assets/
    ├── ccsb-logo.png
    ├── ccsb-building.png
    ├── customers/
    │   ├── oem/       — OEM customer logos
    │   ├── tier1/     — Tier 1 customer logos
    │   └── industrial/— Industrial customer logos
    ├── history/       — Milestone images (2006–2017)
    └── people/        — Staff/org chart photos (MD, DMD, COO, dept heads)
```

## Nav Structure
Home → About → History → Products → Machinery → Quality → Contact
Back link: `← TSP Group` → `../index.html`

## Key Facts
- All internal links use relative paths (no leading `/`)
- CSS/JS inherited from parent: `../style.css` and `../main.js`
- People assets: MD.png, DMD.png, COO.png + dept heads (Sales, PROD, QAQC, PPC, WHSE, MAINTENANCE, Account)
- History images span 2006–2017 (not continuous — some years missing)
- Customer logos split into 3 tiers: OEM, Tier 1, Industrial
