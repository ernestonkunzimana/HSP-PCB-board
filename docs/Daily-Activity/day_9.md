# Day 9 – Final Presentation & Course Reflection: CO3 Nameplate Project

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

