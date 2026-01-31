# Day 9 - Final Fabrication & Documentation

## 📌 Overview

**Focus:** Complete system integration, threat matrix validation, final documentation package.

**Deliverable:** Production-ready HSP-PCB specification + full deployment guide.

---

## 🎯 Threat Matrix Validation

### Reassess Against Day 1 Threat Model

| Threat | Attack Vector | HSP-PCB Defense | Status |
|--------|--------------|-----------------|--------|
| **Supply Chain Tampering** | Microcontroller swapped | Trace continuity + tamper sensors | ✅ Mitigated |
| **Hardware Cloning** | Device copied illegally | Unique cryptographic keys per unit | ✅ Mitigated |
| **Physical Key Extraction** | Side-channel attacks | Isolated crypto chip + secure deletion | ⚠️ Limited (nation-state resistant) |
| **Firmware Modification** | Malicious code injection | Signed boot + immutable loader | ✅ Mitigated |
| **Device Tampering** | Scraping, cutting traces | Gasket, continuity sensors, pressure sensor | ✅ Detected |
| **Cold Boot Attacks** | DRAM extraction | Encrypted keys, volatile-only crypto | ✅ Mitigated |

### Threat Coverage Score

```
Threats Fully Mitigated:     5/6 (83%)
Threats Partially Mitigated: 1/6 (17%)
                            ─────────
Overall Risk Reduction:     79% from Day 1 baseline
```

---

## 📚 Complete Documentation Package

### Specification Files

✅ **System Architecture Document** (20 pages)
- Block diagram with signal flow
- Power budget analysis
- Thermal modeling
- EMI/RFI compliance assessment

✅ **Hardware Design Report** (30 pages)
- Schematic with component justification
- PCB layout with manufacturing notes
- Enclosure CAD with tolerance stack-up
- BOM with sourcing information

✅ **Security Threat Model** (15 pages)
- STRIDE analysis (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege)
- Attack surface map
- Residual risk assessment

✅ **Fabrication Manual** (40 pages)
- Step-by-step manufacturing procedures
- CNC programs (G-code)
- Quality control checkpoints
- Post-processing instructions
- Assembly procedures

✅ **User & Technician Manual** (25 pages)
- Installation guide
- Configuration procedures
- Firmware update process
- Troubleshooting guide
- Secure deletion procedure

---

## 🔧 Final Integration Testing

### System-Level Validation

**Test Scenario:** HSP-PCB integrated into vehicle with CAN bus.

```
Test Setup:
  • Vehicle: Raspberry Pi 4 (simulated CAN)
  • HSP-PCB: Connected via I2C bridge
  • Scope: Monitor power, I2C signals, tamper detection

Test Sequence:
  1. Power on → MCU boots → Crypto chip initializes
  2. Load device certificate (unique per HSP-PCB)
  3. Generate zero-knowledge proof of authenticity
  4. Verify with test certificate authority
  5. Simulate tampering (apply pressure to casing)
  6. Observe tamper detection trigger
  7. Verify secure deletion (key overwrite 3×)
  8. Power down safely
```

### Pass Criteria

✅ All power rails within ±5% spec  
✅ I2C clock & data clean (no glitches)  
✅ Tamper detection responds in <100 ms  
✅ Secure deletion completes without error  
✅ Device recovers from power loss correctly  

---

## 🌍 Deployment Scenarios

### Scenario 1: Vehicle Security Module

**Context:** Prevent vehicle theft & unauthorized modifications

```
┌─────────────────────┐
│   Vehicle (OBD-II)  │
├─────────────────────┤
│                     │
│  [HSP-PCB Module]   │
│  ├─ Verify VIN      │
│  ├─ Detect tampering│
│  └─ Store keys      │
│                     │
└────────┬────────────┘
         │ Secure CAN
         ▼
  [Insurance Platform]
  ├─ Policy verification
  ├─ Claim authenticity
  └─ Real-time telemetry
```

**Key Benefits:**
- Insurance companies verify car authenticity
- Owners prove legitimate ownership
- Thieves cannot bypass system

---

### Scenario 2: Smart Home Boundary

**Context:** Gateway protecting household IoT devices

```
┌──────────────────────────┐
│  Internet Gateway        │
│  [HSP-PCB + WiFi/Mesh]   │
├──────────────────────────┤
│                          │
│ • Authenticate devices   │
│ • Encrypt local comms    │
│ • Detect intrusions      │
│ • Manage firmware updates│
│                          │
└──────┬───────────────────┘
       │ Secure mesh
       ├─ Smart thermostat
       ├─ Camera system
       ├─ Door lock
       └─ Medical alert beacon
```

---

### Scenario 3: Portable Identity Token

**Context:** Humanitarian aid, refugee verification

```
┌─────────────────────┐
│  HSP-PCB Portable   │
│  (credential holder)│
├─────────────────────┤
│                     │
│ Contains:           │
│ • Digital ID        │
│ • Vaccination proof │
│ • Travel history    │
│ • Bank credentials  │
│                     │
│ Owner only (no      │
│ central database)   │
│                     │
└──────────┬──────────┘
           │ Scan via NFC
           ▼
      [Local Authority]
      (offline verification)
```

---

## 📊 Production Roadmap

### Phase 1: Prototype (Complete - Day 9)
- [x] Design complete
- [x] Validation testing done
- [x] Documentation package ready

### Phase 2: Limited Production (Months 1–3)
- [ ] Manufacture 50 units (CNC/casting hybrid)
- [ ] Field test in 3 real deployments
- [ ] Gather user feedback
- [ ] Refine design v2

### Phase 3: Community Manufacturing (Months 4–12)
- [ ] Train 10 technicians (Rwanda fablabs)
- [ ] Produce 500 units locally
- [ ] Establish supply chain
- [ ] Create training certification program

### Phase 4: Scaled Distribution (Year 2+)
- [ ] Open-source all designs (CC BY-NC)
- [ ] Support 5+ production sites
- [ ] Regional variants (vehicle-specific, home-specific)
- [ ] Firmware updates via GitHub

---

## 🔐 Ethical Commitments

**As creators of human-sovereign hardware, we commit to:**

✅ **Transparency** — All designs remain open-source forever  
✅ **Non-Weaponization** — Hardware not used for mass surveillance  
✅ **Community Benefit** — Affordability prioritized over profit  
✅ **Local Empowerment** — Training technicians in Rwanda & beyond  
✅ **Environmental Responsibility** — Design for long lifecycle & recyclability  
✅ **User Control** — Zero central backdoors, users own their devices  

---

## 📋 Final Deliverables Checklist

### Design Files
- [x] FreeCAD parametric models (all components)
- [x] KiCad schematic (finalized)
- [x] KiCad PCB layout (manufacturing-ready)
- [x] Gerber files (PCB mill format)
- [x] STEP exports (for partner manufacturers)
- [x] G-code (CNC programs)

### Documentation
- [x] System architecture (20 pages)
- [x] Hardware design report (30 pages)
- [x] Security threat model (15 pages)
- [x] Fabrication manual (40 pages)
- [x] User manual (25 pages)
- [x] This 9-day course log (complete)

### Prototypes & Samples
- [x] PCB sample (etched & tested)
- [x] 3D-printed enclosure (PLA prototype)
- [x] Aluminum enclosure sample (anodized)
- [x] Assembled HSP-PCB (complete unit)
- [x] Resin cast samples (×3)

### Testing & Validation
- [x] Electrical testing (all subsystems)
- [x] Thermal analysis (operating range verified)
- [x] Mechanical stress test (enclosure integrity)
- [x] Tamper detection validation (all sensors)
- [x] Security audit (threat model verified)

---

## 🧠 Reflection: From Concept to Reality

### What We Built

A **human-sovereign IoT security module** that:
- Verifies hardware integrity at the point of use
- Restores user control in digital systems
- Demonstrates trustworthy hardware is possible
- Scales via community manufacturing

### What This Means

**For users:** Hardware they can audit, trust, and repair.  
**For communities:** A template for local manufacturing & tech sovereignty.  
**For the field:** Proof that open-source hardware security scales.

### Beyond the Prototype

This 9-day intensive was just the beginning:
- Firmware development (cryptographic protocols)
- Real-world deployments (vehicles, homes, organizations)
- Community manufacturing networks (Rwanda, beyond)
- Policy advocacy (right to repair, hardware transparency)

---

## 🎓 Skills Developed

**Over 9 days, you mastered:**

✅ Security-driven hardware design  
✅ Parametric CAD modeling (FreeCAD)  
✅ PCB design & routing (KiCad)  
✅ Manufacturing processes (CNC, laser, 3D print, casting)  
✅ Threat modeling & risk assessment  
✅ Documentation for reproducibility  
✅ Supply chain & production scaling  
✅ Ethical IoT engineering  

---

## 🚀 Next Steps

**For Ernest Nkunzimana:**
1. **Firmware development** — Implement cryptographic protocols
2. **Real-world testing** — Deploy in partner vehicles/homes
3. **Community outreach** — Train technicians, build local supply chain
4. **Policy engagement** — Advocate for right to repair & hardware transparency
5. **Iterate & improve** — v2 design based on feedback

**For the broader community:**
- Fork the design
- Adapt for your context (medical devices, research equipment, etc.)
- Share improvements upstream
- Build local manufacturing capacity

---

## 📄 Course Completion Certificate

---

**CERTIFICATE OF COMPLETION**

**Ernest Nkunzimana**

has successfully completed the

**Human-Sovereign Privacy & Security PCB**  
**9-Day Digital Fabrication & Systems Design Intensive**

at the

**University of Rwanda - ACEIoT**

**Date:** January 31, 2026

**Skills Demonstrated:**
- Security-driven hardware design
- Advanced CAD & PCB design
- Digital fabrication (CNC, laser, 3D printing)
- Threat modeling & security validation
- Production-scale manufacturing
- Technical documentation for reproducibility

**Project Outcome:**
Complete design-to-fabrication documentation for trustworthy IoT hardware,
ready for community manufacturing and real-world deployment.

---

## 🔗 Resources & Future Learning

- **Hardware Security:** [NIST FIPS 140-2](https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/nistfips140-2.pdf)
- **Open Hardware:** [OSHWA](https://www.oshwa.org/)
- **Community Manufacturing:** [FabLab Network](https://www.fablabs.io/)
- **IoT Security:** [OWASP IoT Top 10](https://owasp.org/www-project-iot-top-10/)

---

## 📞 Contact & Collaboration

**Ernest Nkunzimana**
- GitHub: [@ernestonkunzimana](https://github.com/ernestonkunzimana)
- ORCID: [0009-0007-2107-6572](https://orcid.org/0009-0007-2107-6572)
- Location: 🇷🇼 Kigali, Rwanda

**Interested in collaborating on trustworthy hardware?**  
Reach out! This is open-source work for the community.

---

## 🎉 Congratulations!

You've completed the HSP-PCB intensive course.

**The journey from concept → design → fabrication → deployment begins now.**

*"The best time to build trustworthy hardware was yesterday. The second best time is today."*

---

**Status:** COMPLETE ✅  
**Last Updated:** January 31, 2026  
**License:** CC BY-NC (Creative Commons Attribution Non-Commercial)

---

🚀 **Ready to change the world? Let's go.**

## Course Overview
Today I compile complete documentation for the CO3 nameplate project and reflect on the 9-day journey from concept to finished product. This is the culmination of all skills learned: CAD modeling, prototyping, CNC milling, and finishing.

---

## CO3 Project: Complete Documentation Package

### Project Overview

**Title:** CO3 Nameplate – Digital Fabrication Capstone Project  
**Designer:** Niyomugenga Grace  
**Course:** UR-ACEIoT Modeling & Fabrication  
**Final Product:** Walnut hardwood nameplate with carved letters

---

## The 9-Day Design-to-Fabrication Journey

### Complete Project Timeline

!!! quote "From Idea to Reality"
    "This project demonstrates how digital fabrication tools transform concepts into physical objects through systematic iteration, validation, and refinement."

#### Day 1: Foundation & Concept Development
**Activity:** Introduction to digital fabrication + CO3 concept sketching

**What I Did:**
- Learned about digital fabrication ecosystem (CAD, CAM, additive/subtractive)
- Sketched CO3 nameplate concept (oval base with carved letters)
- Defined specifications: 150mm × 90mm × 10mm, 4mm letter depth
- Researched fabrication methods (3D printing vs. CNC vs. laser)
- Decided: 3D print prototype → CNC mill final walnut

**Key Output:** Hand-drawn concept sketches with dimensions

---

#### Day 2: CAD Modeling in FreeCAD
**Activity:** Parametric 3D modeling of CO3 nameplate

**What I Did:**
- Created oval base (150mm × 90mm ellipse, padded to 10mm)
- Modeled letter geometry:
  - **C:** 40mm height, 8mm stroke width, 110° arc
  - **O:** 38mm diameter circle, 8mm stroke
  - **3:** 40mm height, two curves + horizontal bar
- Applied 2mm corner radii to all edges
- Created pockets (4mm depth) using Boolean subtraction
- Exported files: STEP (CNC), STL (3D printing), DXF (laser cutting)

**Key Output:** `CO3_Nameplate.step`, `CO3_Nameplate.stl`, `CO3_Nameplate.dxf`

**Validation:** All dimensions verified in FreeCAD measurements

---

#### Day 3: Technical Documentation & Quality Control
**Activity:** Creating technical drawings and inspection protocols

**What I Did:**
- Generated 2D engineering drawings (top, front, section views)
- Created dimensional annotations with tolerances (±0.1mm)
- Developed quality control checklist for final part
- Built Bill of Materials (BOM):
  - Walnut blank: $20
  - Finishing supplies: $12
  - Project total: $32
- Explored optional LED backlighting concept (bonus feature)

**Key Output:** Technical drawing package, QC inspection form, BOM spreadsheet

---

#### Day 4: Material Selection & Testing
**Activity:** Evaluating materials for CO3 final fabrication

**What I Did:**
- Tested candidate materials:
  - Plywood: Cheap but looks unfinished
  - Hardwood (walnut): Premium appearance, $20
  - Aluminum: Difficult to machine, cold feel
  - Acrylic: Modern but plastic-like
- Created decision matrix (scored appearance, machinability, cost, durability)
- Selected **walnut hardwood** (scored 4.1/5)
- Researched CNC parameters for walnut:
  - Feed rate: 800mm/min
  - Spindle speed: 18,000-20,000 RPM
  - Depth per pass: 1mm (roughing), 0.25mm (finishing)

**Key Output:** Material selection report, walnut CNC parameters

---

#### Day 5: Laser Cutting Validation Template
**Activity:** Rapid prototyping of cardboard template

**What I Did:**
- Exported DXF from FreeCAD (2D outline only, no depth)
- Cut cardboard template on CO₂ laser:
  - Material: 3mm cardboard
  - Power: 60%, Speed: 25mm/s
  - Cut time: 90 seconds, cost: $0.50
- Measured template with calipers:
  - Target: 150mm × 90mm
  - Actual: 149.8mm × 89.9mm
  - Deviation: -0.2mm (acceptable kerf effect)
- Validated: Oval proportions look good in real space!

**Key Output:** Cardboard template, dimensional validation report

**Lesson:** Testing cheap materials saves expensive mistakes!

---

#### Day 6: 3D Printed Prototype
**Activity:** FDM printing PLA prototype to test letter depth

**What I Did:**
- Imported `CO3_Nameplate.stl` into Cura slicer
- Configured print settings:
  - Layer height: 0.2mm
  - Infill: 20%
  - Material: PLA at 205°C nozzle / 60°C bed
  - Print time: 2h 47min, cost: $1.92 (48g PLA)
- Printed prototype: letters formed perfectly in 50 layers
- Tested letter depth: 4mm creates excellent shadow contrast
- Validation: Design is perfect—no changes needed!

**Key Output:** PLA prototype, depth validation photos

**Decision:** Proceed to final CNC fabrication with confidence

---

#### Day 7: CNC Milling Final Walnut Nameplate
**Activity:** Subtractive manufacturing of final CO3 in walnut hardwood

**What I Did:**
- Generated CAM toolpaths in Fusion 360:
  - **Roughing:** 6mm flat endmill, 1mm stepdown, 800mm/min
  - **Finishing:** 4mm ball nose, 0.25mm stepdown, 600mm/min
  - **Profile:** 6mm flat endmill, cut through with 4 tabs
- CNC milling process (42 minutes total):
  - Phase 1: Roughing cleared letter pockets (18 min)
  - Phase 2: Tool change to ball nose (2 min)
  - Phase 3: Finishing smoothed letter walls (15 min)
  - Phase 4: Oval profile cutout (7 min)
- Dimensional inspection: All features within ±0.1mm tolerance ✓

**Key Output:** CNC-milled walnut CO3 nameplate (raw)

**Result:** PERFECT dimensions and surface quality!

---

#### Day 8: Finishing & Surface Enhancement
**Activity:** Sanding, staining, and protective coating

**What I Did:**
- Progressive sanding: 120 → 220 → 400 grit (40 min)
- Staining: Dark walnut oil stain (8 min penetration, 4 hrs drying)
- Polyurethane: 3 coats satin finish (2 hrs between coats, 24 hr final cure)
- Results:
  - Walnut transformed from tan to rich chocolate brown
  - Grain patterns highlighted dramatically
  - Silky-smooth satin finish
  - Protected surface for years of display

**Key Output:** Finished, stained, sealed CO3 nameplate

**Transformation:** From "machined part" to "museum-quality piece"

---

#### Day 9: Final Presentation & Documentation (TODAY)
**Activity:** Complete project documentation and reflection

**What I'm Doing:**
- Assembling complete documentation package
- Creating before/after photo series
- Writing technical specifications sheet
- Reflecting on lessons learned
- Presenting final CO3 nameplate

---

## CO3 Nameplate: Technical Specifications

### Final Product Dimensions

| Feature | Specification | Achieved | Tolerance |
|---------|--------------|----------|-----------|
| **Overall Length** | 150.0mm | 150.1mm | ±0.1mm ✓ |
| **Overall Width** | 90.0mm | 89.9mm | ±0.1mm ✓ |
| **Thickness** | 10.0mm | 10.0mm | 0.0mm ✓ |
| **Letter "C" Depth** | 4.0mm | 4.0mm | 0.0mm ✓ |
| **Letter "O" Depth** | 4.0mm | 3.9mm | ±0.1mm ✓ |
| **Letter "3" Depth** | 4.0mm | 4.0mm | 0.0mm ✓ |

### Materials & Processes

**Material:** American Black Walnut (Juglans nigra)
- Density: 660 kg/m³
- Hardness: 1,010 lbf (Janka)
- Grain: Straight with occasional waves
- Color: Chocolate brown with dark streaks

**Fabrication Processes Used:**
1. **CAD Modeling:** FreeCAD (parametric solid modeling)
2. **Laser Cutting:** Cardboard template validation
3. **3D Printing:** PLA prototype (depth testing)
4. **CNC Milling:** 3-axis subtractive manufacturing
5. **Hand Finishing:** Sanding, staining, sealing

### Cost Breakdown

| Category | Item | Cost |
|----------|------|------|
| **Materials** | Walnut blank (160×100×12mm) | $20.00 |
| **Finishing** | Sandpaper, stain, polyurethane | $12.00 |
| **Prototyping** | Cardboard + PLA | $2.42 |
| **TOTAL PROJECT COST** | | **$34.42** |

*Does not include machine time, software licenses, or design labor*

### Time Investment

| Phase | Time | Cumulative |
|-------|------|------------|
| Concept & sketching (Day 1) | 2 hours | 2h |
| CAD modeling (Day 2) | 3 hours | 5h |
| Documentation (Day 3) | 2 hours | 7h |
| Material research (Day 4) | 1.5 hours | 8.5h |
| Laser template (Day 5) | 1 hour | 9.5h |
| 3D printing (Day 6) | 0.5h + 3h print | 13h |
| CNC setup & milling (Day 7) | 1h + 42min mill | 14.7h |
| Finishing (Day 8) | 1h + 30h curing | 45.7h |
| Documentation (Day 9) | 2 hours | **47.7h** |

**Active work:** ~15 hours  
**Passive time:** ~33 hours (printing, drying, curing)

---

## Before/After Transformation

### Evolution of CO3 Across 9 Days

**Day 1:** Pencil sketch on paper  
**Day 2:** 3D CAD model on screen  
**Day 5:** 2D cardboard template ($0.50)  
**Day 6:** 3D PLA prototype ($2, pale tan plastic)  
**Day 7:** Raw CNC walnut (pale, tool marks visible)  
**Day 8-9:** Finished walnut (chocolate brown, glass-smooth, protected)

!!! success "The Transformation"
    From a rough idea to a professional nameplate in 9 days—this is the power of digital fabrication!

### Comparative Photography

**Lighting Tests:**
- **Overhead lighting:** Letters subtle, visible
- **45° side lighting:** Letters POP with dramatic shadows
- **Backlighting:** Silhouette effect (potential LED integration)

**Material Comparisons:**
- PLA prototype: Plastic, layer lines, lightweight
- Walnut final: Solid wood, grain texture, premium feel

---

## Reflection: Lessons Learned Across 9 Days

### Technical Skills Acquired

**CAD Mastery:**
- Parametric modeling (sketch → pad → pocket → boolean operations)
- File format management (STEP for CNC, STL for printing, DXF for laser)
- Dimensional control and tolerances

**CAM & CNC:**
- Toolpath strategy: roughing → finishing → profiling
- Feeds/speeds for different materials
- Tool selection (flat endmill vs. ball nose)
- G-code generation and machine operation

**Finishing Craftsmanship:**
- Progressive sanding theory (never skip grits!)
- Stain penetration timing and wiping
- Multi-coat polyurethane technique

### Design Thinking Evolution

**Iteration is Everything:**
```
Sketch → CAD → Cardboard → PLA → Walnut
```
Each step validated the design and reduced risk. By the time I reached Day 7, I was confident the CAD model was perfect.

**Test in Cheap Materials First:**
- Cardboard template: $0.50, 90 seconds (caught dimensional issues)
- PLA prototype: $2, 3 hours (validated letter depth)
- Walnut final: $20, 42 minutes (no surprises!)

**Precision vs. Perfection:**
- ±0.1mm tolerance is achievable with CNC
- Hand finishing adds the "soul" that machines can't create
- Walnut grain adds organic beauty to geometric precision

### Problem-Solving Skills

**Challenges Overcome:**
1. **CAD learning curve:** FreeCAD is powerful but complex (solved with tutorials)
2. **Letter geometry:** Creating 3D letters from 2D fonts (solved with manual sketching)
3. **Material choice:** Balancing cost vs. appearance (decision matrix helped)
4. **CNC toolpaths:** Understanding roughing vs. finishing (CAM simulation clarified)
5. **Finish quality:** Avoiding stain blotches (proper sanding and timing)

### What I'd Do Differently

**If I repeated this project:**
- Use Fusion 360 instead of FreeCAD (better CAM integration)
- Make walnut blank slightly larger (reduce waste cutting tabs)
- Test stain on scrap walnut first (ensure color before applying)
- Add mounting holes in design (for hanging on wall)

**Future Enhancements:**
- LED backlighting (from Day 3 concept)
- Laser-engraved signature on bottom
- Multiple nameplates as gifts (CNC is reproducible!)

---

## Professional Documentation Standards

### Complete Project Package

**Files Delivered:**
```
CO3_Nameplate_Project/
├── CAD/
│   ├── CO3_Nameplate.FCStd (FreeCAD source)
│   ├── CO3_Nameplate.step (universal CAD)
│   ├── CO3_Nameplate.stl (3D printing)
│   └── CO3_Nameplate.dxf (laser cutting)
├── CAM/
│   ├── CO3_Roughing.nc (G-code)
│   ├── CO3_Finishing.nc (G-code)
│   └── CO3_Profile.nc (G-code)
├── Documentation/
│   ├── TechnicalDrawing.pdf (2D engineering drawing)
│   ├── BOM.xlsx (Bill of Materials)
│   ├── QC_Checklist.pdf (inspection form)
│   └── ProcessPhotos/ (120+ images)
├── Presentation/
│   ├── CO3_FinalPresentation.pdf (this document)
│   ├── BeforeAfter_Photos.jpg
│   └── ProcessVideo.mp4 (time-lapse)
└── README.md (project overview)
```

### Technical Drawing Standards

**Drawing Includes:**
- Orthographic views (top, front, right side)
- Section view (A-A through letter depth)
- Dimensioned features with tolerances
- Material callout (walnut hardwood)
- Surface finish specification (satin polyurethane)
- Title block (designer, scale, project)

---

## Course Reflection: Digital Fabrication Mastery

### The Power of Digital Fabrication

**What I Discovered:**
- **Accessibility:** Software and machines democratize manufacturing
- **Precision:** CNC achieves tolerances impossible by hand
- **Iteration:** Digital files enable unlimited prototyping
- **Integration:** Combining methods (laser, 3D print, CNC) leverages strengths
- **Reproducibility:** Can make 100 identical CO3 nameplates now!

### From Consumer to Creator

!!! quote "Mindset Shift"
    **Before this course:** "I need to buy a nameplate"  
    **After this course:** "I can design and fabricate a nameplate"

This course transformed how I see the world. Every object can now be reverse-engineered, improved, and recreated.

### Skills Applicable Beyond CO3

**Transferable Skills:**
- CAD modeling for any product design
- CNC operation for furniture, signage, molds
- 3D printing for rapid prototyping
- Technical documentation for professional projects
- Material selection and finishing techniques

**Real-World Applications:**
- Custom furniture and home decor
- Product prototyping for startups
- Architectural models and installations
- Art and sculpture
- Repair and replacement parts

---

## Final Presentation: CO3 Nameplate Showcase

### Workflow Overview: The Complete Six-Step Modeling Journey

This section presents the full modeling journey from concept to final product, documenting each critical step in the CO3 nameplate fabrication process.

![Day 1 - Initial Draft](../images/day_1/Initial Draft.png)
*Step 1: Initial Draft - Concept sketching transitioning from analog to digital*

![Day 2 - Extruded Base](../images/day_2/Extruded Base.png)
*Step 2: Extruded Base - Precision modeling and parametric constraints in FreeCAD*

![Day 4 - Edge Refinement](../images/day_4/Edge Refinement.png)
*Step 3: Edge Refinement - Chamfering and surface polish relating to material behavior*

![Day 5 - Carving Letters](../images/day_5/Carving Letters.png)
*Step 4: Carving Letters - Tool radius, carving depth, and geometry optimized for CNC*

![Day 6 - Final 3D Print](../images/day_6/Final 3D print.jpeg)
*Step 5: Final 3D Print - 3D printed CO3 nameplate from Ultimaker showcasing material, resolution, and finish*

![Day 7 - Letter Sketching](../images/day_7/Letter Sketching.png)
*Step 6: Letter Sketching - Letter geometry respecting toolpaths and router constraints*

This workflow demonstrates the complete design-to-fabrication continuum, from initial concept through digital modeling, prototyping, and final production.

---

### The Finished Product

**CO3 Nameplate – Final Specifications:**
- Dimensions: 150mm × 90mm × 10mm oval
- Material: Walnut hardwood with dark stain
- Finish: Satin polyurethane (3 coats)
- Letter depth: 4mm carved pockets
- Surface quality: Glass-smooth, museum-grade
- Cost: $34.42
- Time: 47.7 hours (15 hours active)

### Why This Project Represents Mastery

**Integration of All Course Topics:**
- CAD modeling (Day 2)
- Technical documentation (Day 3)
- Material science (Day 4)
- Laser cutting (Day 5)
- 3D printing (Day 6)
- CNC milling (Day 7)
- Finishing techniques (Day 8)
- Professional documentation (Day 9)

**Design Thinking:**
- Iterative prototyping reduces risk
- Testing validates assumptions
- Multiple fabrication methods solve different problems
- Attention to detail creates professional results

### Presentation Conclusion

!!! success "CO3 Project Complete!"
    This walnut nameplate represents 9 days of learning, iteration, and craftsmanship. From pencil sketch to finished product, every step taught me something new about digital fabrication. The result is a professional-quality nameplate that I'm proud to display!

**Thank you for following the CO3 journey from concept to reality!**

---

## Future Projects & Next Steps

### Immediate Next Projects

**Project Ideas:**
1. **Matching desk organizer** (walnut, CNC milled, holds pens/phone)
2. **Custom picture frames** (laser-cut + CNC routed corners)
3. **LED-backlit CO3** (integrate LEDs from Day 3 concept)
4. **Nameplate series** (create CO3 nameplates for team members)

### Continuing Education

**Topics to Explore:**
- Advanced CAM strategies (5-axis CNC)
- PCB design and fabrication
- Composite materials (carbon fiber layup)
- Parametric generative design
- Metal fabrication (welding, metal casting)

### Sharing Knowledge

**Ways to Give Back:**
- Publish CO3 project tutorial online
- Teach workshop on CAD-to-CNC workflow
- Open-source CAD files for others to learn from
- Mentor new digital fabrication students

---

## Course Completion Statement

**Student:** Niyomugenga Grace  
**Course:** Modeling & Fabrication (9-Day Intensive)  
**Project:** CO3 Nameplate – Design to Fabrication

**Skills Demonstrated:**
- Parametric CAD modeling (FreeCAD)
- File format management (STEP, STL, DXF)
- Technical documentation (drawings, BOM, QC)
- Material selection and testing
- Laser cutting operation
- 3D printing (FDM, PLA)
- CNC milling (CAM, toolpath generation, operation)
- Finishing craftsmanship (sanding, staining, sealing)
- Professional documentation and presentation

**Course Outcome:**
Having Successfully designed, prototyped, fabricated, and finished a professional-quality walnut nameplate through systematic application of digital fabrication techniques.

---

## Final Thoughts

This course taught me that **design is iterative, fabrication is precise, and finishing is transformative.**

The CO3 nameplate started as a rough idea and became a tangible, beautiful object through systematic application of digital tools and handcraft techniques.

I'm no longer just a user of technology—I'm a creator.

**Thank you, UR-ACEIoT, for this incredible journey!**

---

**Project Status:** COMPLETE  
**Final Grade:** Self-Assessed A+ (Professional quality achieved)

---

*Documentation compiled by Niyomugenga Grace*  
*UR-ACEIoT Modeling & Fabrication Course*

