# Ernest Nkunzimana-ACEIoT-WISENeT: HSP-PCB Board

## 🔐 Human-Sovereign Privacy & Security PCB — Masters Project

[![License: CC BY-NC](https://img.shields.io/badge/License-CC%20BY--NC-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Open Source Hardware](https://img.shields.io/badge/Open-Source%20Hardware-green)](https://www.oshwa.org/)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0007--2107--6572-green)](https://orcid.org/0009-0007-2107-6572)
[![GitHub](https://img.shields.io/badge/GitHub-HSP--PCB--board-blue)](https://github.com/ernestonkunzimana/HSP-PCB-board)

**Live Documentation:** [https://ernestonkunzimana.github.io/HSP-PCB-board/](https://ernestonkunzimana.github.io/HSP-PCB-board/)

**Repository:** [https://github.com/ernestonkunzimana/HSP-PCB-board.git](https://github.com/ernestonkunzimana/HSP-PCB-board.git)

---

## 📋 Project Overview

This repository documents **Ernest Nkunzimana's comprehensive digital fabrication journey** designing and prototyping the **Human-Sovereign Privacy & Security PCB (HSP-PCB)** — a tamper-detecting, cryptographically-hardened security coprocessor for privacy-first IoT systems.

### The Problem

Digital trust has collapsed:
- Smartphones ship with backdoors and forced telemetry
- Data brokers aggregate intimate information about billions
- IoT devices have no security updates or recovery paths
- Supply chain attacks compromise hardware before it reaches users

### The Solution

**HSP-PCB** restores trust by providing:
- **Verifiable hardware** — All designs open for inspection
- **Repairable systems** — Owned by users, not corporations
- **Modular architecture** — Integrates into vehicles, homes, devices
- **Tamper-resistant design** — Detects & responds to attacks
- **Cryptographic keys** — Isolated, secure-deletion on compromise
- **Sustainable infrastructure** — 10+ year lifecycle

---

## 🎯 9-Day Intensive Curriculum

**Days 1–2:** Concept & Design (threat model → CAD)  
**Days 3–4:** Manufacturing Specs (DFM, materials, sustainability)  
**Days 5–6:** Prototyping (CNC, laser, 3D print)  
**Days 7–8:** Production (router, molding, casting)  
**Day 9:** Deployment (integration, roadmap, documentation)

👉 **[Start the course here!](docs/Daily-Activity/index.md)**

---

## 📊 HSP-PCB Specifications

| Specification | Value |
|---------------|-------|
| **Form Factor** | Credit-card (<2.5mm) |
| **Enclosure** | Aluminum 5052-H32 (anodized) |
| **Microcontroller** | STM32L0 ARM 32-bit |
| **Crypto Chip** | ATECC608A (ECC key storage) |
| **Dimensions** | 85×54mm (<2.5mm thick) |
| **Operating Temp** | -40°C to +85°C |
| **Power** | USB 5V + CR2032 backup |
| **Sensors** | Pressure, temperature, continuity (tamper) |
| **Prototype Cost** | ~$125–200 USD |
| **Production Cost (1K)** | ~$15–25 USD per unit |
| **Lifecycle** | 10+ years (repairable, updatable) |

---

## 🚀 Quick Start

```bash
# Clone & setup
git clone https://github.com/ernestonkunzimana/HSP-PCB-board.git
cd HSP-PCB-board
python -m venv .venv
.venv\Scripts\activate  # Windows
pip install -r requirements.txt

# Run documentation site
mkdocs serve
# Visit http://127.0.0.1:8000/
```

---

## 🌐 GitHub Pages (Auto Build & Deploy)

This project is configured for **automatic deployment** to GitHub Pages using GitHub Actions.

- Every push to `main` triggers a fresh MkDocs build
- Pull requests run a build check (no production deploy)
- Successful builds on `main` are published automatically

### One-time repository settings

1. Open **Settings → Pages** in this repository
2. Set **Source** to **GitHub Actions**
3. Push to `main` and wait for the workflow **Deploy MkDocs to GitHub Pages**

Your site URL remains:
**https://ernestonkunzimana.github.io/HSP-PCB-board/**

---

## 📚 Documentation

- **[Full 9-Day Course](docs/Daily-Activity/index.md)** — Complete learning path
- **[System Architecture](spec/System_Architecture.pdf)** — Block diagrams & design
- **[Fabrication Manual](spec/Fabrication_Manual.pdf)** — Step-by-step procedures
- **[User Manual](spec/User_Manual.pdf)** — Operation & troubleshooting

---

## 🔧 Files Included

| Folder | Contents |
|--------|----------|
| **docs/** | Course documentation (Days 1–9) |
| **cad/** | FreeCAD + KiCad design files |
| **gerber/** | PCB manufacturing files |
| **gcode/** | CNC & router programs |
| **spec/** | Technical specifications (PDF) |

---

## 🎓 Key Skills

 Security-driven hardware design  
 CAD & PCB design (FreeCAD, KiCad)  
 Digital fabrication (CNC, laser, 3D print, casting)  
 Threat modeling & security validation  
 Manufacturing at scale  
 Technical documentation  

---

## 🔐 Security

**Threat Coverage:** 83% of identified attacks mitigated

-  Supply chain tampering detected
-  Hardware cloning prevented (unique crypto keys)
-  Firmware modification blocked (signed boot)
-  Physical tampering detected (sensor grid)
-  Key compromise → secure deletion

---

## ♻️ Sustainability

-  Designed for long lifecycle (10+ years)
-  Repairable (standard tools, tool-free battery access)
-  Recyclable materials (aluminum, FR-4, plastics)
-  End-of-life secure deletion protocol
-  Local community manufacturing

---

## 📖 License

**Creative Commons Attribution Non-commercial (CC BY-NC)**

-  Use freely for education & non-profit
-  Share & adapt with attribution
-  All derivatives must stay open-source

---

## 🤝 Contributing

1. **Fork the repository**
2. **Make improvements** (better trace routing, firmware, etc.)
3. **Submit pull requests**
4. **Help deploy locally** — Train technicians in your region

---

## 👤 Author

**Author:** Ernest Nkunzimana  
**Program:** Masters of Science in IoT - Wireless Intelligent Sensor Networks (WISENeT)  
**Institution:** University of Rwanda - ACEIoT  
**Project:** HSP-PCB Board
- 🔗 [GitHub](https://github.com/ernestonkunzimana)
- 🔗 [ORCID](https://orcid.org/0009-0007-2107-6572)
- 📍 Kigali, Rwanda 🇷🇼

---

## 🎉 Getting Started

**Next Steps:**
1. Read the [Course Overview](docs/Daily-Activity/index.md)
2. Explore [Day 1: Foundations](docs/Daily-Activity/day_1.md)
3. Review [CAD designs](cad/)
4. Check [Deployment Scenarios](docs/Daily-Activity/day_9.md)

---

**Status:** COMPLETE | **Last Updated:** Jan 31, 2026

🚀 **"The best time to build trustworthy hardware was yesterday. The second best time is today."**
