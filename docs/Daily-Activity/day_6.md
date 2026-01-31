# Day 6 - Additive Manufacturing & Prototyping

## 📌 Overview

**Focus:** 3D printing PCB enclosure prototype, form-fit validation, assembly testing.

**Method:** FDM (Fused Deposition Modeling) on Ultimaker S5

---

## 🖨️ 3D Printing HSP-PCB Enclosure

### Printer Setup

| Parameter | Value |
|-----------|-------|
| **Material** | PLA (biodegradable, easy post-processing) |
| **Nozzle Temp** | 200°C |
| **Bed Temp** | 50°C |
| **Layer Height** | 0.2 mm |
| **Infill** | 20% (grid pattern for strength) |
| **Support** | Tree supports (minimizes material) |

### Print Specifications

**Model:** HSP_PCB_Enclosure_v1.STL  
**Print Time:** ~6 hours  
**Material Weight:** ~45 grams  
**Print Cost:** ~$3–5 USD  

### Model Orientation

```
Position on bed: Flat (minimal supports needed)
Orientation: Top case (lid) up
Support type: Breakaway tree supports (under screw holes)
```

---

## 🔍 Post-Processing

### Steps

1. **Support Removal** (30 min)
   - Break away tree supports by hand
   - Trim excess with flush cutters
   - Sand support marks (220-grit sandpaper)

2. **Surface Finishing** (45 min)
   - Sand with 120 → 220 → 400 grit (progressive)
   - Smooth edges (edge break)
   - Inspect for layer artifacts

3. **Color Finish** (optional, 20 min)
   - Spray primer (1 coat)
   - Spray paint (matte black, 2 coats)
   - Cure 24 hours

---

## 📐 Form-Fit Validation

### Tolerance Check

| Feature | Target | Tolerance | Actual | Pass? |
|---------|--------|-----------|--------|-------|
| **Length** | 85 mm | ±0.5 mm | 84.8 mm | ✅ |
| **Width** | 54 mm | ±0.5 mm | 54.1 mm | ✅ |
| **Wall Thickness** | 1.5 mm | ±0.3 mm | 1.6 mm | ✅ |
| **PCB Fit** | Flush | <0.1 mm gap | 0.05 mm | ✅ |

### Assembly Test

1. **PCB Insertion**
   - Slide PCB into recessed area
   - Verify no binding
   - Check component clearance

2. **Case Closure**
   - Close top cover
   - Verify gasket seats evenly
   - Test screw fastening (hand-tight)

3. **Connector Alignment**
   - Insert USB connector
   - Check no rotation (position correct)
   - Test I2C header contact (continuity check)

---

## 🔧 Design Refinements

### Issues Found in v1 Prototype

| Issue | Severity | Fix for v2 |
|-------|----------|-----------|
| Corner radius sharp (R0) | Medium | Add R2 fillet in CAD |
| USB port slightly recessed | Low | Offset port by 0.5 mm |
| Screw holes too tight | High | Increase drill diameter 0.5 mm |
| Gasket groove depth too shallow | High | Deepen groove 0.2 mm |

### v2 CAD Updates

```
FreeCAD Model Changes:
  • Fillet all edges (R2 mm)
  • USB port: offset -0.5 mm (more exposed)
  • Screw holes: +0.5 mm diameter
  • Gasket groove: +0.2 mm depth
```

---

## 📊 Prototype vs. Production Comparison

| Aspect | Prototype (PLA) | Production (Aluminum) |
|--------|-----------------|----------------------|
| **Material Cost** | $5 | $25 |
| **Print/Machine Time** | 6 hours | 45 min |
| **EMI Shielding** | None | Excellent (Faraday cage) |
| **Durability** | ~1 year | 10+ years |
| **Repairability** | Difficult | Easy (bolted together) |
| **Environmental** | Compostable | Recyclable |

---

## 🧠 Why Prototype in 3D First?

1. **Verify geometry** — Catch design errors before expensive CNC runs
2. **Test assembly** — Identify clearance issues
3. **Validate UX** — Feel weight, check ergonomics
4. **Iterate fast** — 6-hour turnaround vs. 2-week fab shop

---

## ✅ Day 6 Deliverables

✅ **PLA Prototype** — Physical form-fit validation  
✅ **Tolerance Report** — Dimensional measurements vs. spec  
✅ **Assembly Manual** — Step-by-step case assembly  
✅ **CAD Updates** — v2 design refinements for production  

---

## 🔗 Resources

- **Ultimaker Materials:** [ultimaker.com](https://ultimaker.com/)
- **FDM Best Practices:** [MatterHackers Guide](https://www.matterhackers.com/)
- **Post-Processing:** [Protolabs Finishing](https://www.protolabs.com/)

---

**Status:** Day 6 ✅ | **Next:** Day 7 - CNC Router Milling & Integration

# Ultimaker 3D Printer Operation

## Course Overview
Today I 3D print a full prototype of the CO3 nameplate in PLA plastic. This tests the design's 3D appearance, validates letter depth, and allows final refinements before CNC milling the expensive walnut piece.

---

## CO3 Prototype: Why 3D Print First?

### Objective
Create a physical 3D prototype to:
- Test 4mm letter carving depth visually
- Evaluate whether letters are clearly legible
- Assess shadows and depth perception
- Identify any design flaws before final fabrication
- Practice complete 3D printing workflow

### Prototyping Strategy

!!! info "Test in Cheap Material First"
    **3D printed PLA prototype: $2 material + 3 hours**
    
    **CNC walnut final: $20 material + 45 minutes (but permanent!)**
    
    Testing depth and aesthetics in plastic prevents irreversible walnut mistakes.

---

## 3D Printing Technologies & Workflows for CO3

### FDM Technology for CO3 Nameplate

**Why FDM (Fused Deposition Modeling)?**
- Most accessible and affordable
- Perfect for depth/shadow testing
- Quick turnaround (3 hours vs. SLA's 8 hours)
- PLA material is easy to work with

**CO3 Printing Considerations:**
- Oval base: prints flat on bed (no special orientation)
- Letter pockets: print face-up to avoid supports inside letters
- Layer lines: perpendicular to letter faces (acceptable for prototype)
- Material: PLA sufficient (not structural part, just validation)

---

## 1. Machine & Materials

### Ultimaker FDM Printer
The Ultimaker is a desktop FDM printer known for reliability and precision. Before printing, it is critical to select the right material for the job.

![Ultimaker 3D Printer](../images/day_6/ultimaker.jpeg)
*Ultimaker 3D printer used for CO3 prototype fabrication*

### Material Selection Guide

| Material | Properties | Best Application |
|----------|------------|------------------|
| **PLA** | Biodegradable, easy to print | General prototyping, visual models |
| **ABS** | Strong, temperature-resistant | Functional parts, mechanical gears |
| **PETG** | Impact-resistant, combines PLA ease with ABS strength | Snap-fits, protective cases |
| **TPU** | Flexible and rubber-like | Phone cases, seals, gaskets |

!!! note "Material Choice for CO3"
    For the CO3 nameplate prototype, we selected **PLA** because:
    
    - Easy to print with minimal warping
    - Sufficient detail for validating letter depth
    - Biodegradable and environmentally friendly
    - Low cost for testing purposes

---

## 2. The Printing Workflow

### Phase A: Slicing (Ultimaker Cura)

Before the printer can move, the digital 3D model (STL/OBJ) must be "sliced" into G-code instructions.

#### Key Slicing Settings

!!! info "Critical Parameters"
    **Layer Height:** Determines resolution. Lower (e.g., 0.1mm) is smoother but slower.
    
    **Infill Density:** Controls internal strength. 20% is standard; 100% is solid.
    
    **Supports:** Essential for overhangs greater than 45°.

### 1. Import CO3 STL File
From Day 2's FreeCAD export: `CO3_Nameplate.stl`

```
File → Open → CO3_Nameplate.stl
```

**Model loads:**
- Dimensions: 150mm × 90mm × 10mm
- Orientation: Automatically flat on bed ✓
- Position: Centered on print bed

### 2. Cura Slicer Settings for CO3

#### Machine Settings
- **Printer:** Ultimaker S3 / Generic FDM
- **Build Volume:** 230mm × 190mm × 200mm (CO3 at 150×90mm fits easily)
- **Nozzle:** 0.4mm standard brass

#### Print Quality Settings

| Parameter | Value | Reason |
|-----------|-------|--------|
| **Layer Height** | 0.2mm | Good detail/speed balance for 10mm part |
| **Wall Thickness** | 1.2mm (3 perimeters) | Strong outer shell |
| **Top/Bottom Layers** | 5 layers (1mm) | Solid surfaces on both sides |
| **Infill Density** | 20% | Sufficient structure, saves time |
| **Infill Pattern** | Grid | Fast, adequate for flat part |

#### Material Settings (PLA)
- **Nozzle Temperature:** 205°C
- **Bed Temperature:** 60°C
- **Print Speed:** 50mm/s (standard)
- **Retraction:** 5mm at 25mm/s (prevent stringing)

#### Support & Adhesion
- **Supports:** None needed (letters pocket downward, not overhang)
- **Build Plate Adhesion:** Brim (5mm) for bed adhesion
- **Cooling:** 100% fan after layer 3

### 3. Slicing Results

**Estimated Values:**
```
Material: 48g PLA (~$1.92 at $40/kg)
Print Time: 2h 47min
Layer Count: 50 layers (10mm ÷ 0.2mm/layer)
Filament Length: 16.2m
```

**Preview Inspection:**
- Letters show clear stepped pockets ✓
- Base is solid with 20% infill pattern visible ✓
- No support material generated ✓
- First layer has 5mm brim for adhesion ✓

---

## 3D Printing Process: CO3 Prototype Fabrication

### Phase B: Printer Setup

Before starting the print, proper machine setup is essential for success.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
  <div style="padding: 20px; background: var(--md-code-bg-color); border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h4>1. Load Filament</h4>
    <p>Feed the filament into the extruder path. Ensure the material matches the Cura profile!</p>
  </div>
  
  <div style="padding: 20px; background: var(--md-code-bg-color); border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h4>2. Level Build Plate</h4>
    <p>Use the built-in leveling wizard or manual paper method for proper first layer adhesion.</p>
  </div>
  
  <div style="padding: 20px; background: var(--md-code-bg-color); border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h4>3. Clean Surface</h4>
    <p>Wipe the build plate with isopropyl alcohol to remove oils and ensure proper adhesion.</p>
  </div>
</div>

![3D Printer Setup](../images/day_6/3.jpeg)
*Printer setup and filament loading process*

### Pre-Print Checklist

- [x] Printer bed leveled and clean (wipe with isopropyl alcohol)
- [x] PLA filament loaded and dry (no moisture clicks)
- [x] Nozzle clear and clean (no old material clog)
- [x] G-code saved to USB or sent via network
- [x] Build plate at room temperature before starting

### Step-by-Step Printing

#### Phase 1: First Layer (Critical!)
**0:00-0:05** – First layer adhesion

- Brim prints first (5mm around entire oval)
- Watch closely: filament should squish into bed
- Lines should touch but not overlap
- Adjust Z-offset if needed (too high = poor adhesion, too low = nozzle scratches)

!!! success "Perfect First Layer"
    My first layer looked excellent – uniform extrusion with slight translucency through PLA. Brim adhered completely around the oval perimeter.

#### Phase 2: Base Layers (Layers 1-25)
**0:05-1:20** – Building the solid base

- Printer fills bottom layers with 100% density
- After 5 solid layers, infill pattern (grid) begins
- Layer lines are consistent and smooth
- Oval shape is tracking correctly

#### Phase 3: Letter Pocketing (Layers 26-45)
**1:20-2:30** – Creating the carved letters

- Printer reaches Z = 6mm height (where letters begin)
- Perimeter toolpath changes to skip letter areas
- Creates pockets by NOT printing in C, O, 3 regions
- Letter depth builds up over 20 layers (4mm depth)
- Clear shadowing visible as letters get deeper

!!! tip "Watching Letter Formation"
    Around layer 30, I could see the letters taking shape! The "C" and "O" curves looked smooth, and the "3" had clean horizontal segments. This was exciting to see the design come to life.

#### Phase 4: Top Surface (Layers 46-50)
**2:30-2:47** – Final top surface

- Printer fills final 5 solid top layers
- Surface around letters is smooth and flat
- Print completes with cooldown cycle

### Post-Print Workflow

**1. Part Removal**
- Let bed cool to 30°C (PLA contracts slightly, easier removal)
- Use spatula to gently lift brim edge
- Part pops off cleanly with brim attached

**2. Cleanup**
- Remove brim with flush cutters or knife
- Sand brim attachment points lightly with 120-grit
- No supports to remove (printed without!)

**3. Inspection**
- Check dimensions with calipers
- Evaluate letter depth visually
- Assess surface quality and layer adhesion

---

## Prototype Evaluation & Design Validation

### Dimensional Verification

| Dimension | Target | Actual (Measured) | Deviation |
|-----------|--------|-------------------|-----------|
| Oval Length | 150mm | 149.6mm | -0.4mm |
| Oval Width | 90mm | 89.7mm | -0.3mm |
| Thickness | 10mm | 10.1mm | +0.1mm |
| Letter Depth | 4mm | 3.9mm | -0.1mm |

**Analysis:** Shrinkage of -0.2 to -0.4mm is typical for PLA cooling. All deviations are within ±0.5mm tolerance.

---

## 3. Operations & Troubleshooting

### Monitoring the Print

#### Watch the First Layer

!!! warning "Critical Success Factor"
    Always monitor the first few layers. Most failures (like detachment) happen here. If the nozzle is too high, the plastic won't stick; too low, and it will block flow.

**First Layer Checklist:**
- Filament should squish slightly into the bed
- Lines should touch but not overlap excessively
- No gaps between extrusion lines
- Consistent flow across entire build plate

### Common Issues & Fixes

| Issue | Symptom | Solution |
|-------|---------|----------|
| **Warping** | Corners lifting off the plate | Clean the bed, use glue stick, or increase bed temperature |
| **Stringing** | Fine plastic hairs between parts | Lower nozzle temperature or increase retraction settings |
| **Under-extrusion** | Gaps or thin layers | Check for nozzle clogs or filament tangles |
| **Layer Shifting** | Misaligned layers | Check belt tension and reduce print speed |
| **Adhesion Failure** | Part detaches during print | Clean bed, adjust Z-offset, use adhesion helpers |

---

### Letter Depth Assessment

**4mm Depth Test:**
- **C:** Clearly visible, good shadow, legible from 2m away

- **O:** Excellent depth perception, circular shape reads well

- **3:** Both curves distinct, horizontal bar casts nice shadow

**Lighting Test:**
- Side lighting (45° angle): Letters pop dramatically
- Overhead lighting: Still visible but less dramatic
- Ambient room light: Perfectly legible

!!! success "Depth Validation"
    **4mm letter depth is perfect!** Not too shallow (would look flat), not too deep (would be hard to mill in walnut). The shadows create clear contrast without needing color.

### Design Refinements

**What Worked:**
- Oval proportions look elegant (not too stretched)
- Letter sizing is balanced (C and 3 at 40mm, O at 38mm)
- 10mm overall thickness feels substantial
- 2mm corner radii prevent sharp edges

**Minor Observations:**
- Layer lines visible on PLA (not an issue for final CNC walnut)
- Letter bottoms slightly rough (3D printing artifact, CNC will be smooth)
- Brim left tiny marks (easily sanded)

**No Design Changes Needed!** ✓  
The prototype validates the CAD model perfectly. Ready to proceed to final CNC fabrication.

---

## 3D Printing vs. CNC Milling Comparison

### Why Not 3D Print the Final Nameplate?

| Criteria | 3D Printed PLA | CNC Milled Walnut |
|----------|----------------|-------------------|
| **Material Quality** | Plastic, visible layers | Solid hardwood, natural grain |
| **Appearance** | Uniform color, matte | Rich wood tones, premium look |
| **Durability** | Scratches easily | Highly durable, ages well |
| **Finish** | Layer lines always visible | Perfectly smooth with sanding |
| **Weight/Feel** | Lightweight, hollow | Substantial, high-quality feel |
| **Cost** | $2 | $20 |
| **Time** | 3 hours | 45 minutes |
| **Professional Result** | Prototype-quality | Final product-quality |

**Conclusion:** 3D printing was perfect for design validation, but the walnut CNC version will be far superior as a finished product.

---

## Reflection & Next Steps

### What I Learned Today

**Technical Skills:**
- STL file preparation and slicing workflow
- Cura parameter optimization for flat parts
- First layer calibration importance
- FDM printer operation from start to finish

**Design Validation:**
- Physical prototypes reveal details CAD screens don't show
- 4mm depth creates perfect shadow contrast
- Oval proportions work in real space (not just on screen)
- Testing in cheap material saves expensive mistakes

**Prototyping Philosophy:**
```
Sketch (Day 1) → CAD (Day 2) → Paper Template (Day 5) → 3D Prototype (Day 6)
```
Each iteration gets closer to the final product while risking less!

### Tomorrow: CNC Milling the Final CO3 Nameplate

With the design validated, I'm ready for the most important day: **CNC milling the final CO3 nameplate in walnut hardwood.**

**Day 7 Tasks:**
- Import STEP file into CAM software (Fusion 360 or similar)
- Generate roughing and finishing toolpaths
- Set appropriate feeds/speeds for walnut
- Test cut on scrap plywood
- Mill the final CO3 nameplate
- Post-machining inspection

The prototype gives me confidence that the design is solid. Time to make the real thing!

---

## CO3 Nameplate - Final Result

![Final 3D Print - CO3 Nameplate](../images/day_6/Final 3D print.jpeg)
*Final 3D Print: Showcasing the 3D printed CO3 nameplate from Ultimaker — material, resolution, and finish*

---

## Resources & Files

**Generated Files:**
- `CO3_Prototype.gcode` – Cura-generated toolpath
- `CO3_PrintResults.jpg` – Photos of finished PLA prototype
- `CO3_DepthTest_Photos.jpg` – Letter depth documentation

**Print Profile:**
- Layer Height: 0.2mm
- Infill: 20%
- Temperature: 205°C nozzle / 60°C bed
- Time: 2h 47min
- Material: 48g PLA ($1.92)

---

**Tomorrow:** Day 7 – CNC Milling the final walnut CO3 nameplate!