# Day 2 - Digital Modeling & Architecture

## 📌 Course Day Overview

**Theme:** From concept to CAD. Building parametric models for HSP-PCB.

**Learning Objectives:**
- Translate threat model into hardware architecture
- Create parametric 3D model of PCB form factor
- Design block diagrams for HSP-PCB subsystems
- Apply Design for Manufacturing (DFM) constraints
- Establish CAD workflows for precision fabrication

---

## 🏛️ HSP-PCB Architecture Overview

### System-Level Block Diagram

```
┌─────────────────────────────────────────────────────────┐
│              HSP-PCB Security Coprocessor                │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────────┐         ┌──────────────────┐      │
│  │ MCU + Crypto     │────────→│  Tamper Detection│      │
│  │ (STM32L0 + ATECC)│         │  System          │      │
│  │                  │         │                  │      │
│  │ • 32-bit ARM     │         │ • Pressure       │      │
│  │ • AES-256        │         │ • Continuity     │      │
│  │ • ECC keygen     │         │ • Temperature    │      │
│  └──────────────────┘         └──────────────────┘      │
│          │                             │                 │
│          └─────────────┬───────────────┘                │
│                        │                                 │
│              ┌─────────▼──────────┐                     │
│              │  Secure Storage    │                     │
│              │  (Flash + EEPROM)  │                     │
│              │                    │                     │
│              │ • Crypto keys      │                     │
│              │ • Device cert      │                     │
│              │ • Firmware         │                     │
│              └────────────────────┘                     │
│                                                           │
└─────────────────────────────────────────────────────────┘
        │                              │
        │ I2C/SPI                      │ Power & GND
        │                              │
     (To host MCU)            (3.3V battery or 5V USB)
```

### Major Subsystems

| Subsystem | Purpose | Key Components |
|-----------|---------|----------------|
| **Security Processor** | Verify, attest, decrypt | STM32L0 ARM MCU + ATECC crypto chip |
| **Tamper Detection** | Detect physical attacks | Pressure sensors, continuity traces |
| **Secure Storage** | Protect cryptographic keys | Encrypted Flash + EEPROM |
| **Power Management** | Low-power + secure shutdown | DC-DC converters, watchdog timer |
| **Communication** | Interface with host systems | I2C/SPI isolation, optional NFC |

---

## 🎨 CAD Workflow: FreeCAD + KiCad

### Step 1: Parametric Outline (FreeCAD)

**Goal:** Create a credit-card form factor PCB outline with tolerance stack-ups.

#### Constraints & Parameters

| Parameter | Value | Notes |
|-----------|-------|-------|
| **Length** | 85 mm | ±0.5 mm (manufacturing tolerance) |
| **Width** | 54 mm | ±0.5 mm (ISO/IEC 7810 ID-1 standard) |
| **Thickness** | 1.6 mm | FR-4 PCB standard thickness |
| **Corner Radius** | 3.0 mm | Soft corners for durability |
| **Mount Points** | 4× M3 holes | For enclosure attachment |
| **Port Openings** | SMA/JST (2×) | For external antenna & power |

#### FreeCAD Model Steps

1. Create 2D sketch with constraints (parametric)
2. Extrude to 1.6 mm thickness
3. Add corner fillets (R3.0 mm)
4. Define mount points with hole diameter constraints
5. Export as STEP for KiCad import

**Key Design Decision:** Parametric model allows quick iteration if form factor changes.

### Step 2: PCB Layout (KiCad)

**Goal:** Route signals with security-aware trace layout.

#### KiCad Design Rules

- **Trace Width:** 0.25 mm (10 mils) for power, 0.15 mm (6 mils) for signals
- **Clearance:** 0.15 mm (6 mils) minimum (conservative for hand-tracing if needed)
- **Via Size:** 0.3 mm drill, 0.8 mm pad (through-hole vias for thermal relief)
- **Layer Stack:** 2-layer design (Top + GND; minimize layers for verifiability)

#### Security-Aware Layout

**Principle:** Make attack surface visible through layout.

```
┌─────────────────────────────────┐
│       Top Layer (Signals)        │
│                                 │
│  [MCU]  [ATECC]  [Flash]       │
│    │       │         │          │
│    └───────┼─────────┘          │
│        [Tamper Sensors]         │
│        (continuity traces)      │
│                                 │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│   Bottom Layer (GND + Power)     │
│                                 │
│  GND plane (continuous)          │
│  + Power distribution traces     │
│                                 │
└─────────────────────────────────┘
```

#### Tamper Detection Traces

- **Perimeter Loop:** Continuous trace around device boundary
  - If trace is cut, micro detects open circuit → triggers secure deletion
  - Visible on PCB (not hidden) for auditability

- **Component Continuity Check:** Traces under each IC
  - Verify no components are cloned or replaced
  - Regular self-test during operation

### Step 3: Mechanical Enclosure (FreeCAD)

**Goal:** Design aluminum enclosure that supports tamper detection casing.

#### Enclosure Features

| Feature | Purpose | Design |
|---------|---------|--------|
| **Sealed Case** | Faraday cage + physical integrity | Aluminum 5052-H32 (2mm) with gasket |
| **Port Glands** | Sealed pass-throughs for power/comms | M5 glands with O-ring seals |
| **Pressure Cavity** | Room for pressure sensor | Sealed air pocket with vent to sensor |
| **Attachment Points** | Modular integration into vehicles/homes | ¼-20 tapped holes on sides |
| **Bottom Access Panel** | For battery replacement | Tool-free latches (security screw) |

---

## 🔧 Design for Manufacturing (DFM)

### Manufacturing Constraints

#### PCB Milling (Day 3)

- **Min trace width:** 0.15 mm (6 mils) for 1/32" bit
- **Min clearance:** 0.15 mm between traces
- **Via aspect ratio:** ≤ 1:10 (depth:width)
- **Undercuts:** Avoid; mill from top-down only

#### CNC Routing (Day 5)

- **Min feature:** 2 mm diameter (tool path)
- **Undercuts:** Require custom bits or multi-axis milling
- **Draft angle:** 0–5° (vertical walls acceptable)
- **Material:** Aluminum 5052-H32 (easy machine)

#### 3D Printing (Day 6)

- **Wall thickness:** Min 1.5 mm (Ultimaker FDM)
- **Overhangs:** Max 45° without support
- **Resolution:** ±0.3 mm (0.2 mm layer height)
- **Material:** PLA (biodegradable, easy post-processing)

---

## 📊 Day 2 Deliverables

### CAD Files Generated

✅ **STEP Model** — Parametric PCB outline (FreeCAD → KiCad import)  
✅ **KiCad Schematic** — Preliminary component list (netlist)  
✅ **Enclosure CAD** — FreeCAD assembly drawing  
✅ **Block Diagram** — System architecture (PNG + Visio)  
✅ **DFM Report** — Manufacturing constraints checklist  

### File Structure

```
UR-ACEIoT/
├── docs/
│   ├── day_2.md (this file)
│   ├── images/day_2/
│   │   ├── block_diagram.png
│   │   ├── pcb_outline.png
│   │   ├── enclosure_assembly.png
│   │   └── dfm_checklist.pdf
├── cad/
│   ├── HSP_PCB_Outline.FCStd     # FreeCAD model
│   ├── HSP_PCB_Outline.STEP      # STEP export (import to KiCad)
│   ├── HSP_PCB.kicad_pcb         # KiCad layout (preliminary)
│   ├── HSP_PCB.sch               # KiCad schematic
│   └── Enclosure_v1.FCStd        # Mechanical design
```

---

## 🧠 Reflection: From Concept to Model

### The Bridge

**Yesterday,** we established *why* HSP-PCB matters (threat model, design principles).

**Today,** we translate that intent into *how* to build it (CAD, DFM, architecture).

**Tomorrow,** we verify it can be manufactured (PCB milling specifications).

### Key Insight

**Parametric design is sovereignty too.**

When a design is parametric (form factor, trace width, constraints all defined as variables), anyone can:
- **Audit** the design decisions (parameters are transparent)
- **Modify** for their context (smaller form factor? Change one variable)
- **Reproduce** consistently (same parameters → same output)

This is how open-source hardware scales across communities.

### Challenge

The models we create today must be:
- **Verifiable** — Every line and hole justified by threat model or DFM
- **Auditable** — Git history shows why each design decision was made
- **Replicable** — A technician in Rwanda, India, or Brazil can follow the same CAD file and fabricate the same device

---

## 🔗 Resources

### CAD Tools

- **FreeCAD:** [freecadweb.org](https://wiki.freecadweb.org/) (open-source 3D CAD)
- **KiCad:** [kicad.org](https://kicad.org/) (open-source PCB design)
- **Fusion 360:** [autodesk.com/fusion](https://www.autodesk.com/products/fusion-360) (CAM for toolpaths)

### Design Standards

- [ISO/IEC 7810 (ID-1 Card Standard)](https://en.wikipedia.org/wiki/ISO/IEC_7810)
- [NIST FIPS 140-2 (Cryptographic Module Validation)](https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/nistfips140-2.pdf)
- [IPC-A-600 (PCB Acceptability)](https://www.ipc.org/standards/ipc-a-600)

---

**Status:** Day 2 Complete ✅  
**Next:** Day 3 - PCB Milling & Design for Manufacturability  
**Last Updated:** January 31, 2026

## Course Overview
Digital modeling transforms design ideas into precise, fabrication-ready representations. Today I create the detailed CAD model for the **HSP-PCB security module**.

---

## Project: HSP-PCB Enclosure & Component Layout

### Design Specifications
**Objective:** Create a production-ready 3D model of the HSP-PCB enclosure
**Software:** FreeCAD (Part Design Workbench) + KiCad
**Final Dimensions:**
- Credit-card form factor: 85mm × 54mm
- Enclosure thickness: <2.5mm
- PCB thickness: 1.6mm
- Component clearance: 3mm maximum height
- Border width: 12mm minimum

---

## Precision Modeling and Scale Control

### Understanding Precision
For the CO3 nameplate, precision is critical because:
- Letters must be legible and properly proportioned
- CNC toolpaths depend on exact dimensions
- Tolerances affect the final carved depth

!!! info "Key Principle"
    **Every dimension in the CAD model directly translates to the physical nameplate.** If I model the oval as 150mm wide, the CNC will cut it exactly 150mm wide.

### My Approach to Precision for CO3
- **Use constraints:** Applied dimensional constraints for exact oval shape (150mm x 90mm)
- **Work in millimeters:** All measurements match final fabrication requirements
- **Verify letter spacing:** Ensured proper visual balance between C, O, and 3
- **Consider tool radius:** All internal corners have 2mm radius for 4mm end mill

---

## Design for Manufacturing (DFM) Applied to CO3

### DFM Principles for CNC Milling

!!! quote "DFM for CO3 Nameplate"
    "Letters must be machinable with available end mills, depth must be achievable without multiple tool changes, and the design must be efficient to fabricate."

### Critical DFM Decisions for CO3 Nameplate

**1. Tool-Accessible Geometry**
- All internal letter corners: 2mm radius (matches 4mm end mill)
- No sharp internal corners that would require special tooling
- Letters designed with clearance for tool entry and exit

**2. Carving Depth Strategy**
- Selected 4mm depth for optimal visibility
- Deep enough for dramatic shadows and visual impact
- Shallow enough for single-pass milling with appropriate feeds/speeds
- Maintains structural integrity of 10mm base plate

**3. Material Considerations**
- Base thickness (10mm) provides rigidity
- Letter walls have 2° draft for easier milling
- Surface area optimized for stable workholding during CNC

---

## Modeling Workflow: Creating the CO3 Nameplate

### Step 1: Oval Base Creation

=== "1. Setup & Sketch"
    I started by creating a new **Body** in the Part Design Workbench and selected the **XY Plane**.
    
    * **Tool:** Ellipse `CreateEllipse`
    * **Action:** Drew an ellipse centered at origin (0,0)
    * **Constraints:**
        * Major axis (width): 150mm
        * Minor axis (height): 90mm
        * Centered at origin for symmetry

    !!! info "Parametric Logic"
        By fully constraining the ellipse, I ensure the oval shape remains perfect even if dimensions are later adjusted.

=== "2. Padding (Extrusion)"
    Once the oval profile was defined, I extruded it to create the base plate.
    
    * **Tool:** Pad `PartDesign_Pad`
    * **Parameter:** Length = 10mm (base thickness)
    
    ![Extruded Base - Precision Modeling](../images/day_2/Extruded Base.png)
    *Extruded Base: Demonstrating precision modeling and parametric constraints in FreeCAD - the oval base with 10mm thickness showing dimensional accuracy*
    * **Result:** A solid 10mm thick oval base plate

---

### Step 2: Creating Letter Geometry

=== "3. Letter 'C' Sketch"
    Created the letter C on the top face of the oval base.
    
    1. **Select Face:** Top surface of oval base
    2. **Sketch Tool:** Circles and arcs to form 'C' shape
    3. **Dimensions:**
        * Outer diameter: 40mm
        * Inner diameter: 28mm (12mm stroke width)
        * Opening gap: 15mm wide
    4. **Position:** Centered horizontally, upper third of oval

=== "4. Letter 'O' Sketch"
    Created the letter O below the C.
    
    * **Outer diameter:** 38mm
    * **Inner diameter:** 26mm (12mm stroke width)
    * **Position:** Middle section, 5mm gap from C
    * **Constraint:** Horizontally aligned with C

=== "5. Number '3' Sketch"
    Created the number 3 at the bottom.
    
    * **Height:** 40mm
    * **Width:** 24mm
    * **Curves:** Two semicircles with 12mm radius
    * **Position:** Lower third, 5mm gap from O
    * **Constraint:** Horizontally aligned with C and O

=== "6. Carving the Letters (Pocket)"
    Used the Pocket tool to carve all three letters into the base.
    
    * **Tool:** Pocket `PartDesign_Pocket`
    * **Depth:** 4mm (removes material downward)
    * **Important:** Added 2mm fillet to all internal corners for tool clearance
    * **Result:** Letters carved 4mm deep into the oval base

---

### Step 3: Edge Refinement

=== "7. Outer Edge Chamfer"
    Added a subtle chamfer to the outer edge for professional appearance.
    
    * **Tool:** Chamfer `PartDesign_Chamfer`
    * **Angle:** 45°
    * **Distance:** 1mm
    * **Result:** Smooth transition from base to edges

---

## Fabrication Considerations for CO3 Nameplate

### Design Validation Checklist

| Feature | Specification | Fabrication Logic |
| :--- | :--- | :--- |
| **Oval Dimensions** | 150mm x 90mm | Fits standard sheet materials, easy to clamp |
| **Base Thickness** | 10mm | Provides rigidity, accommodates 4mm carving depth |
| **Letter Depth** | 4mm carved | Creates strong shadows, visible from distance |
| **Corner Radii** | 2mm minimum | Matches 4mm end mill, prevents tool breakage |
| **Letter Stroke** | 12mm width | Ensures letters remain strong after carving |
| **Edge Chamfer** | 1mm x 45° | Prevents sharp edges, professional finish |

### Material Considerations
- **Tested Materials:** Plywood, hardwood (maple/walnut), aluminum
- **Final Selection:** To be determined after material testing (Day 4)
- **Clamping Strategy:** Vacuum table or double-sided tape for secure holding

---

## File Formats for Digital Fabrication

### Exporting CO3 Nameplate for Different Processes

| Format | Purpose | Export Settings |
|--------|---------|-----------------|
| **STEP** | CNC CAM programming | Solid body, all features preserved |
| **STL** | 3D printed prototype (Day 6) | Resolution: 0.1mm, binary format |
| **DXF** | Laser cut test template (Day 5) | Top view projection, 2D outline only |
| **3MF** | Alternative 3D print format | Color and material data included |

### Export Process from FreeCAD

**For CNC Milling (STEP):**
1. Select the Body
2. File → Export → STEP format
3. Save as: `CO3_Nameplate_v1.step`
4. Verify: Open in CAM software to confirm geometry

**For 3D Printing (STL):**
1. Select the Body
2. File → Export → STL format
3. Settings: Binary, 0.1mm deviation
4. Save as: `CO3_Nameplate_prototype.stl`
5. Import into slicer (Cura) for validation

**For Laser Test (DXF):**
1. Create sketch on XY plane
2. Project outer oval outline
3. Export sketch as DXF
4. Save as: `CO3_Outline_template.dxf`

---

## Precision Measurements

### Dimensional Verification

After completing the CAD model, I verified all critical dimensions:

- Oval width: 150.00mm ± 0.1mm
- Oval height: 90.00mm ± 0.1mm
- Base thickness: 10.00mm
- Letter C height: 40.00mm
- Letter O height: 38.00mm
- Number 3 height: 40.00mm
- Carving depth: 4.00mm
- Internal corner radii: 2.00mm (all corners)
- Letter spacing: 5.00mm between each character

---

## Reflection

### Day 2 Achievements

Today I successfully created a production-ready 3D CAD model of the CO3 nameplate with:
- Precise oval base geometry (150mm x 90mm x 10mm)
- Three carved letters (C, O, 3) with 4mm depth
- All internal corners properly radiused for CNC milling
- Professional edge chamfer for finished appearance
- Multiple file formats exported for different fabrication methods

### Key Takeaways

1. **Parametric constraints enable rapid iteration** - If dimensions need adjustment, constraints maintain design intent
2. **DFM thinking from the start saves time** - Adding corner radii during modeling prevents CAM headaches later
3. **File format selection depends on fabrication method** - STEP for CNC, STL for 3D printing, DXF for laser cutting
4. **Dimensional verification prevents errors** - Double-checking measurements before export ensures fabrication success
5. **Professional details matter** - Small touches like edge chamfers elevate the final appearance

### Challenges Overcome

**Challenge 1:** Creating smooth letter curves
**Solution:** Used combination of circles and arcs with tangent constraints

**Challenge 2:** Ensuring consistent letter stroke width
**Solution:** Applied parametric dimensions (12mm) to all letter elements

**Challenge 3:** Previewing carving depth visually
**Solution:** Used FreeCAD's section view to verify 4mm depth looks correct

---

## CAD Design Gallery

![Extruded Base - Precision Modeling](../images/day_2/Extruded Base.png)
*Extruded Base: Demonstrating precision modeling and parametric constraints in FreeCAD*

---

### Next Steps for Day 3

While Day 3 typically focuses on PCB design, for the CO3 project I will:
- Conduct dimensional verification using digital calipers techniques
- Create detailed technical drawings with dimensions
- Generate quality control documentation
- Prepare measurement protocols for validating the final fabricated piece

This session reinforced that **digital modeling is not just about creating shapes—it's about creating manufacturable designs**. Every decision, from geometry to file format, impacts the final fabricated object.

### Key Takeaways
1. **Design with fabrication in mind from the start**
2. **Tolerances are essential, not optional**
3. **File format selection impacts fabrication success**
4. **DFM principles save time, materials, and money**
5. **Parametric modeling enables rapid iteration**


