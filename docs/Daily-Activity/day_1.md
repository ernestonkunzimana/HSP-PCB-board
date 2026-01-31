# Day 1 - Foundations & Problem Statement

## 📌 Course Day Overview

**Theme:** Why digital trust matters. Foundations of modeling for secure hardware.

**Learning Objectives:**
- Understand the collapse of digital trust and human harm
- Contextualize the HSP-PCB project within IoT sovereignty
- Introduce design thinking for hardware security
- Establish threat modeling as a design principle

---

## 🔐 The Crisis: Digital Trust Has Collapsed

### Context: Loss of Autonomy

Over the past two decades, digital systems have become essential infrastructure for commerce, communication, governance, and identity. Yet this infrastructure has been systematically compromised:

#### **Manufacturers Exploit Users**
- Smartphones ship with backdoors, spyware, and forced telemetry
- Devices collect intimate behavioral data without consent
- Hardware is engineered to fail, forcing unnecessary replacement
- Repair is criminalized through DMCA enforcement

#### **Cloud Providers Monetize Privacy**
- Data brokers aggregate intimate information about billions of people
- Third-party tracking is ubiquitous across web & mobile ecosystems
- Governments demand backdoor access; corporations comply without warrant
- "Free services" are the product—not users, but their data

#### **IoT Systems Amplify Exposure**
- Smart homes, vehicles, wearables, and industrial systems leak data continuously
- Most IoT devices have no security updates, no recovery path
- Supply chain attacks compromise hardware before it reaches users
- Decentralized systems (vehicles, medical) become single points of control

#### **The Harm: Real Human Impact**
- Political prisoners tracked through location data
- Undocumented immigrants persecuted through biometric systems
- Women subjected to stalking through smart device hijacking
- Communities surveilled through weaponized algorithms
- **Autonomy is lost when data becomes liability**

---

## 🎯 The HSP-PCB Solution: Human-Sovereign Privacy & Security

### Problem Statement

**How can we build hardware infrastructure that restores human autonomy in digital systems while remaining:**
- **Verifiable** (not a black box)
- **Repairable** (owned & maintained by users, not corporations)
- **Modular** (integrated into diverse systems—vehicles, homes, devices)
- **Sustainable** (engineered for long lifecycle, not planned obsolescence)

### What HSP-PCB Solves

The **Human-Sovereign Privacy & Security PCB (HSP-PCB)** is a **tamper-detecting, cryptographically-hardened security coprocessor** designed to:

1. **Verify Hardware Integrity** — Detect unauthorized modifications, cloned devices, or supply-chain tampering
2. **Protect Cryptographic Keys** — Isolated key storage with tamper response (secure deletion)
3. **Enable Privacy-First IoT** — Serve as trust anchor for vehicles, homes, and portable devices
4. **Maintain User Control** — All schematics open for inspection; repairable by trained technicians
5. **Prove Authenticity** — Zero-knowledge proofs of device legitimacy without data leakage

---

## 🏗️ Design Philosophy: Security by Design

### Principles

| Principle | What It Means | Example |
|-----------|--------------|---------|
| **Verifiable** | All design decisions must be visible & auditable | Open schematics in KiCad; git history of every change |
| **Recoverable** | Systems must survive failure & maintain availability | Graceful degradation; no kill switches; repair manual |
| **Modular** | Components must compose without creating new vulnerabilities | Plug-and-play integration; standardized interfaces |
| **Minimal Trust** | Reduce reliance on corporations or governments | Open-source firmware; community-auditable code |
| **Transparent Threat Model** | Publish what we can & cannot defend against | Threat matrix; attack surface documentation |

---

## 📋 Threat Landscape: What We're Defending Against

### Threat Categories

| Threat | Attack Vector | HSP-PCB Defense |
|--------|--------------|-----------------|
| **Supply Chain Tampering** | Microcontroller replaced with spy chip | Tamper detection casing; trace continuity sensors |
| **Hardware Cloning** | Legitimate devices copied by adversaries | Cryptographic attestation; unique key per device |
| **Key Extraction** | Physical attacks (side-channel, fault injection) | Tamper-responsive secure deletion; isolation |
| **Firmware Modification** | Malicious code injected into firmware | Signed boot; immutable boot loader; flash protection |
| **Physical Tampering** | Solder joints scraped, traces cut, components moved | Pressure sensors; laser tamper-detection grid |
| **Cold Boot Attacks** | Memory extracted while powered (DRAM not cleared) | Encrypted key storage; volatile-only crypto keys |

### Threats We Do NOT Defend Against

- Quantum computing (future concern; key length > 256 bits for post-quantum prep)
- Insider threat (manufacturer compromises device at fabrication)
- Nation-state adversary with unlimited resources (physical reverse-engineering)
- User negligence (user hands device to attacker)

---

## 🛠️ Modeling Foundation: Design for Security

### Design Approach

To make HSP-PCB work, we must integrate **security into the *physical* design**:

1. **Form Factor Constraints** — Credit-card size + <2.5mm thickness
   - Limits what sensors we can embed
   - Affects power consumption & thermal stability
   - Requires tight mechanical tolerances

2. **Threat Detection Sensors** — Embedded in PCB layout
   - Pressure sensors (detects physical stress)
   - Trace continuity sensors (detects wire cutting)
   - Temperature sensors (detects targeted heating)
   - Laser sensors (optional: detects optical probing)

3. **Enclosure Integrity** — Mechanical design must support sensing
   - Metal casing (Faraday cage + structural integrity)
   - Sealed ports with tamper detection
   - Modular attachment points (for different IoT contexts)

4. **Power & Thermal** — Design for secure failure
   - Isolated power domains (sensitive circuits shielded)
   - Low-power operation (battery-based deployment)
   - Thermal shutdown triggers secure deletion

---

## 📊 Day 1 Deliverables

### What We Document Today

✅ **Executive Summary** — 1-page overview of HSP-PCB  
✅ **Problem Statement** — Why digital trust matters  
✅ **Threat Landscape** — Categorized attacks & defense mechanisms  
✅ **Design Philosophy** — Security-by-design principles  
✅ **Success Criteria** — What makes HSP-PCB a success  

### Key Artifacts

```
docs/
├── day_1.md              # This document
├── images/
│   ├── day_1/
│   │   ├── threat_landscape.png
│   │   ├── design_philosophy.png
│   │   └── trust_collapse.png
```

---

## 🧠 Reflection: Why This Matters

### Context

**Modeling is not just about shapes and dimensions.** It's about solving structural failures in systems.

The HSP-PCB project begins with understanding a **structural failure in digital trust**:
- Trust was delegated to corporations → They betrayed it
- Governments mandate backdoors → Citizens become monitored
- Devices are designed to fail → Autonomy becomes costly

**Our model (the PCB) is a response to this structure.**

### What We're Really Building

The PCB is not just a circuit board—it's an **artifact of sovereignty**:
- **For the user:** Proof that their device is theirs, not rented
- **For the community:** A replicable, auditable security standard
- **For society:** An existence proof that trustworthy hardware is possible

### Tomorrow's Work

Tomorrow, we translate this vision into **digital models**: CAD outlines, block diagrams, and parametric constraints that engineers can manufacture.

---

## 🔗 Resources & Further Reading

### On Digital Trust Collapse

- EFF: [Surveillance Self-Defense](https://ssd.eff.org/)
- Shoshana Zuboff: *The Age of Surveillance Capitalism*
- Bruce Schneier: *Click Here to Kill Everybody*

### On Hardware Security

- [NIST Hardware Security Module Guidelines](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-133r1.pdf)
- [Open Hardware Certification](https://www.oshwa.org/)
- [Privacy by Design](https://www.privacybydesign.ca/)

### Tools We'll Use

- **KiCad:** [kicad.org](https://kicad.org/)
- **FreeCAD:** [freecadweb.org](https://wiki.freecadweb.org/Manual)
- **Git & GitHub:** [github.com/ernestonkunzimana](https://github.com/ernestonkunzimana)

---

**Status:** Day 1 Complete ✅  
**Next:** Day 2 - Digital Modeling & Architecture  
**Last Updated:** January 31, 2026

# Digital Modeling

## Initial Concept Sketching
Before jumping into CAD, I started with hand sketches to explore the design:

**Sketch 1: Layout Options**
- Explored different letter arrangements
- Tested oval vs. rectangular outer shapes
- Considered proportions and visual balance

**Sketch 2: Dimensional Planning**
- Overall dimensions: ~150mm x 90mm oval
- Letter height: ~40mm for "C", "O", "3"
- Depth of cut: 3-5mm for dramatic shadows
- Border thickness: 10-15mm around letters

**Design Decision:** Selected oval shape with vertically-stacked "CO3" for optimal visual impact and material efficiency.

![Initial Draft - CO3 Concept Sketch](../images/day_1/Initial Draft.png)
*Initial Draft: My first concept sketch transitioning from analog to digital modeling - exploring layout options and proportions for the CO3 nameplate*

## Modeling Workflow
Modeling is more than just creating a shape; it is the **representation of form, logic, and behavior**. My workflow incorporates two distinct approaches:

1.  **Geometric Modeling:** Defining static shapes and physical dimensions.
2.  **Parametric & Rule-Based Modeling:** Using parameters to enable variation without needing to redesign the entire object.

## Design Decisions
Every design choice was made with the understanding that **fabrication method is a design choice**.

### Parametric Thinking
By utilizing parametric thinking, I treat my models as **research tools**. This allows me to:
* Test assumptions about fit and function.
* Quickly adjust variables when physical constraints change.

![CO3 Nameplate Design Reference](../images/day_1/Initial Draft.png)
*The CO3 nameplate design we will create throughout this course*

# Fabrication Logic

## Fabrication Paradigms for the CO3 Nameplate
To transform my digital model into physical reality, I considered multiple fabrication approaches:

**Option 1: Laser Cutting (Subtractive)**
- Pros: Fast, precise, clean edges
- Cons: Limited to 2D cutting, no depth variation
- Best for: Flat nameplate with through-cuts

**Option 2: CNC Router Milling (Subtractive)**
- Pros: Can create depth, 2.5D carving, professional finish
- Cons: Longer fabrication time, requires tool changes
- Best for: Carved lettering with depth

**Option 3: 3D Printing (Additive)**
- Pros: Rapid prototyping, complex geometries
- Cons: Visible layer lines, requires extensive finishing
- Best for: Initial prototypes and design validation

**Decision:** I will use **CNC router milling** for the final piece due to its ability to create depth and professional surface finish. However, I'll start with a 3D printed prototype to validate the design.

## Material & Tolerance Considerations
Real-world fabrication introduces physical constraints that digital models often ignore.

!!! warning "Designing for Imperfection"
    As noted in our coursework, real-world fabrication inevitably introduces **error and deformation**. 
    
    * **Tolerance:** I designed my parts with specific **tolerance limits** to ensure proper fit despite machine inaccuracy.
    * **Material Behavior:** The choice of material actively influenced the design outcome, requiring adjustments for shrinkage and flexibility.

# Prototyping & Iteration

## Rapid Prototyping Strategy for CO3 Nameplate
Prototyping validates design decisions before committing to final fabrication.

### Phase 1: Paper Mockup (Day 1)
**Purpose:** Validate size and proportions
**Method:** Print 1:1 scale outline on paper
**Result:** Confirmed 150mm x 90mm oval feels appropriately sized

### Phase 2: 3D Printed Prototype (Day 6)
**Purpose:** Test letter depth, overall aesthetics, and design refinement
**Material:** PLA plastic
**Timeline:** 2-3 hours print time
**Validation:** Check letter legibility, depth effectiveness, overall visual balance

### Phase 3: Test Cut on Scrap Material (Day 7)
**Purpose:** Validate CNC toolpaths and cutting parameters
**Material:** Scrap plywood
**Result:** Refine feeds, speeds, and depth settings

### Phase 4: Final Fabrication (Day 7-8)
**Material:** Aluminum 5052-H32 or FR-4 PCB
**Process:** CNC milling, PCB etching, and assembly
**Finishing:** Anodizing, conformal coating, final testing

# Reflection – Lessons Learned & Critical Analysis

## Day 1 Achievements
Today marked the beginning of the HSP-PCB project. I established:
- Clear security threat model and requirements
- System architecture concepts and component selection
- Fabrication strategy (PCB manufacturing, CNC enclosure milling, assembly)
- Development timeline across the course

## The Iterative Process
The most important lesson from this module is that the process is **iterative, not linear**. For the CO3 nameplate:
1. I started with rough sketches to explore layout options
2. Defined critical dimensions and proportions
3. Planned a multi-phase prototyping approach
4. Selected appropriate fabrication methods for each phase

### Design Thinking for the CO3 Project
**Question:** Why an oval shape?
**Answer:** The oval provides visual softness while maximizing usable surface area and creating an elegant frame for the letters.

**Question:** Why vertically stacked letters?
**Answer:** Vertical stacking creates a strong visual axis, ensures letter legibility, and works well within the oval proportions.

## Next Steps for Day 2
Tomorrow I will:
1. Create the precise CAD model in FreeCAD
2. Define exact dimensions and tolerances
3. Export files in multiple formats (STL for 3D printing, DXF for CNC)
4. Validate the digital model against design requirements

## Final Learning Outcomes
Through Day 1, I have learned to:
1.  **Start with clear project requirements** before designing
2.  **Sketch before modeling** to explore options quickly
3.  **Plan the entire fabrication workflow** from the beginning
4.  **Select appropriate processes** for prototyping vs. final production

!!! quote "Key Insight"
    \"The best designs emerge when fabrication logic informs the design process from day one, not as an afterthought.\"

---

## Visual Reference Gallery

![FabLab Digital Fabrication](../images/day_1/fabslogo.svg)
*FabLab - Digital Fabrication Foundation*

