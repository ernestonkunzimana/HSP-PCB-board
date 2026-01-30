# Day 7 – CNC Milling: Final CO3 Nameplate Fabrication

## Course Overview
Today is the most critical day: **CNC milling the final CO3 nameplate in walnut hardwood.** After weeks of design, validation, and prototyping, it's time to create the real thing.

---

## CO3 CNC Milling: From Digital to Physical

### Objective
Mill the final CO3 nameplate with:
- Material: Walnut hardwood (150mm × 90mm × 10mm blank)
- Precision: ±0.1mm tolerance
- Surface finish: Tool marks <0.05mm (smooth enough for sanding)
- Letter depth: Exactly 4mm as designed

### Why CNC for the Final Piece?

!!! success "CNC Advantages for CO3"
    - **Precision:** 0.01mm repeatability (vs. hand carving's ±2mm)
    - **Smooth finish:** 18,000 RPM cuts leave glass-like surfaces
    - **Walnut-safe:** Controlled feeds prevent tearout/splitting
    - **Reproducible:** Can make multiple identical CO3 nameplates
    - **Complex curves:** Oval and letter curves cut perfectly

**3D Printing vs. CNC:**
- Prototype (Day 6): 3D printed PLA validates design ($2, 3 hours)
- Final (Day 7): CNC milled walnut creates premium product ($20, 45 min)

---

## CNC Router Components & Setup

### Machine Architecture

**Shopbot / 3-Axis CNC Router:**
- **X-Axis:** 1200mm travel (left/right)
- **Y-Axis:** 900mm travel (front/back)
- **Z-Axis:** 150mm travel (up/down)
- **Spindle:** 2.2kW spindle, 0-24,000 RPM variable speed
- **Positioning:** Stepper motors with 0.01mm resolution
- **Bed:** MDF spoilboard (sacrificial surface)

**Key Components:**
- **Collet:** ER20 collet holds 6mm and 4mm endmills
- **Dust Collection:** 100mm hose removes walnut chips
- **Emergency Stop:** Large red button (always accessible!)
- **Control Software:** Mach3 or GRBL for G-code execution

---

## CAM Workflow: CO3 STEP File → G-code Toolpaths

### Step 1: Import CO3 Model into Fusion 360 CAM

**File Import:**
```
File → Open → CO3_Nameplate.step
```

From Day 2's FreeCAD export, the STEP file contains:
- Oval base body (150mm × 90mm × 10mm)
- Letter pockets (C, O, 3) at 4mm depth
- 2mm corner radii throughout

**Manufacturing Setup:**
- Create new CAM workspace
- Set machine: Generic 3-axis router
- Material: Walnut hardwood
- Stock size: 160mm × 100mm × 12mm (slight oversizing)
- Model position: Centered, top face at Z=0

### Step 2: Toolpath Strategy for CO3

#### Roughing Pass – Clear Material Quickly

**Tool:** 6mm Flat End Mill (2-flute carbide)  
**Operation:** Adaptive clearing (pocketing)

| Parameter | Value | Reason |
|-----------|-------|--------|
| **Target Depth** | -4mm | Letter pocket depth |
| **Stepdown** | 1mm per pass | Safe for walnut, prevents tool breakage |
| **Stepover** | 50% (3mm) | Efficient material removal |
| **Feed Rate** | 800mm/min | Moderate speed for hardwood |
| **Spindle Speed** | 18,000 RPM | High speed for clean cuts |
| **Ramp Entry** | Helical | Gradual entry prevents plunging damage |

**Roughing clears:**
- 90% of letter pocket material
- Leaves 0.5mm stock for finishing pass
- Cuts in 4 passes (1mm each)

#### Finishing Pass – Create Smooth Surfaces

**Tool:** 4mm Ball Nose End Mill (2-flute)  
**Operation:** 3D contour finishing

| Parameter | Value | Reason |
|-----------|-------|--------|
| **Stepdown** | 0.25mm | Ultra-fine for smooth walls |
| **Stepover** | 0.2mm | Remove all tool marks |
| **Feed Rate** | 600mm/min | Slower for surface quality |
| **Spindle Speed** | 20,000 RPM | Higher RPM = smoother finish |
| **Tolerance** | 0.01mm | Match letter curves precisely |

**Finishing creates:**
- Glass-smooth letter walls and bottoms
- Sharp transitions at 2mm corner radii
- <0.05mm tool marks (sands easily)

#### Profile Pass – Cut Outer Oval

**Tool:** 6mm Flat End Mill (same as roughing)  
**Operation:** 2D contour (full depth)

| Parameter | Value | Reason |
|-----------|-------|--------|
| **Total Depth** | -11mm | Cut through 10mm + 1mm into spoilboard |
| **Stepdown** | 2mm per pass | Faster for through-cuts |
| **Feed Rate** | 800mm/min | Standard walnut speed |
| **Tabs** | 4 tabs × 3mm wide | Hold part until cut completes |
| **Lead-in** | Arc entry | Prevent witness marks |

**Profile cuts:**
- 6 passes at 2mm each
- Leaves 4 small tabs holding CO3 to stock
- Cuts slightly into spoilboard (protects bottom face)

### Step 3: Simulation & Collision Detection

**Fusion 360 Simulation:**
- Play toolpath animation (verify no crashes)
- Check stock removal visualization (all pockets cleared?)
- Validate tool doesn't collide with clamps
- Estimate total machining time: **42 minutes**

**G-code Generation:**
```
Post Process → GRBL / Mach3 → CO3_Nameplate.nc
```

File size: ~85,000 lines of G-code, 2.1MB

---

## Pre-CNC Safety & Setup Checklist

### Material Preparation: Walnut Blank

**Walnut Stock:**
- Dimensions: 160mm × 100mm × 12mm (oversized)
- Surfaced: Both faces planed flat and parallel
- Sanded: 120-grit to remove mill marks
- Grain direction: Lengthwise along 150mm oval axis

**Workholding:**
- Double-sided carpet tape on bottom
- 4 corner clamps on spoilboard
- Verify clamps won't interfere with toolpaths (simulate in CAM)
- Stock sits flat with no rocking

### Tool Loading & Calibration

**Tool 1: 6mm Flat End Mill**
- Inspect cutting edges (no chips or dullness)
- Insert into ER20 collet
- Tighten collet nut to 20 Nm torque
- Tool length: Measure with touch probe (Z=0 at stock top)

**Tool 2: 4mm Ball Nose End Mill**
- Same inspection and installation process
- Will prompt for tool change mid-program

### Safety Checklist

- [x] Safety glasses ON
- [x] Hearing protection ON (CNC router is 90+ dB!)
- [x] Long hair tied back, no loose clothing
- [x] Emergency stop button tested and accessible
- [x] Dust collection system running (walnut dust is fine and hazardous)
- [x] Work area clear of obstructions
- [x] Fire extinguisher nearby (rare but spindle can spark)
- [x] First aid kit accessible

---

## CNC Milling Execution: Creating the CO3 Nameplate

### Phase 1: Roughing Pass (0:00 - 0:18)

**Load G-code:**
```
File → Load → CO3_Nameplate.nc
```

**Starting the Program:**
1. Jog spindle to safe height (Z = +20mm)
2. Start spindle at 18,000 RPM (wait for full speed)
3. Press "Cycle Start"

**Roughing Operation:**
- Spindle plunges to first 1mm depth with helical ramp
- 6mm endmill traces letter outlines, clearing pockets
- Walnut chips fly into dust collector
- 4 passes total (1mm → 2mm → 3mm → 4mm depth)
- Clean cuts with no burning smell ✓

!!! tip "Monitoring the Cut"
    I watched carefully for:
    - **Sound changes:** Steady hum is good; squealing means dull tool or wrong feed
    - **Chip evacuation:** Chips should be flying, not packing into pockets
    - **Burning smell:** None detected (good sign!)
    - **Vibration:** Minimal chatter (walnut cuts cleanly)

**Time:** 18 minutes  
**Result:** Letter pockets cleared to 4mm depth, slight tool marks visible (expected)

### Phase 2: Tool Change to Ball Nose (0:18 - 0:20)

**Program pauses automatically:**
```
M06 T2 ; Tool change to 4mm Ball Nose
```

**Steps:**
1. Spindle stops and raises to safe height
2. Remove 6mm flat endmill, store safely
3. Install 4mm ball nose endmill in collet
4. Re-measure tool length with touch probe (Z-offset updates)
5. Press "Cycle Start" to resume

**Time:** 2 minutes

### Phase 3: Finishing Pass (0:20 - 0:35)

**Finishing Operation:**
- Ball nose traces 3D contours of letter walls
- 0.25mm stepdown creates ultra-smooth surfaces
- Multiple overlapping passes remove all roughing marks
- Letters **C**, **O**, and **3** emerge with crisp edges
- 2mm corner radii are perfectly smooth

!!! success "Letter Quality"
    The finishing pass transformed the rough pockets into glass-smooth letter forms! The ball nose captured every curve of the "C" and "O", and the "3" horizontal bar is razor-sharp.

**Time:** 15 minutes  
**Result:** Letter surfaces are nearly mirror-smooth walnut

### Phase 4: Oval Profile Cut (0:35 - 0:42)

**Profile Cutting:**
- 6mm endmill cuts oval perimeter
- 6 passes at 2mm depth each (12mm total through stock + spoilboard)
- 4 tabs (3mm wide) hold CO3 nameplate in place
- Lead-in arcs prevent entry marks on oval edge

**Final Pass:**
- Endmill cuts through into spoilboard ~1mm
- Part remains held by 4 tabs
- Spindle stops, retracts to home position

**Time:** 7 minutes  
**Total CNC time:** 42 minutes

---

## Post-CNC Processing & Inspection

### Part Removal

**Breaking Tabs:**
1. Turn off spindle and wait for full stop
2. Use flush-cut saw to cut through 4 holding tabs
3. CO3 nameplate lifts free from waste stock
4. Sand tab remnants flush with 120-grit sandpaper

### Dimensional Verification

**Caliper Measurements:**

| Feature | Target | Actual | Deviation |
|---------|--------|--------|-----------|
| Oval Length | 150.0mm | 150.1mm | +0.1mm |
| Oval Width | 90.0mm | 89.9mm | -0.1mm |
| Thickness | 10.0mm | 10.0mm | 0.0mm |
| Letter C Depth | 4.0mm | 4.0mm | 0.0mm |
| Letter O Depth | 4.0mm | 3.9mm | -0.1mm |
| Letter 3 Depth | 4.0mm | 4.0mm | 0.0mm |

**Analysis:** All dimensions within ±0.1mm tolerance! CNC precision validated.

### Surface Quality Inspection

**Tool Marks:**
- Letter walls: <0.02mm scalloping (ball nose stepover marks)
- Letter bottoms: Completely smooth (no visible marks)
- Oval perimeter: Clean cut, no tearout on walnut grain
- Top surface: Untouched (as expected)

**Wood Quality:**
- No tearout at corners or grain transitions ✓
- No burning or scorching ✓
- No cracks or splits ✓
- Natural walnut grain flows beautifully through letters

!!! success "CNC Success!"
    The CO3 nameplate came out **perfectly**. The letters have sharp, clean edges with smooth bottoms. The walnut grain adds organic beauty to the geometric precision. This looks professional!

---

## CNC vs. Other Fabrication Methods

### CO3 Fabrication Method Comparison

| Method | Time | Cost | Precision | Surface Quality | Feasibility |
|--------|------|------|-----------|----------------|-------------|
| **Hand Carving** | 6+ hours | $20 | ±2mm | Rough, inconsistent | Difficult curves |
| **Laser Cutting** | 15 min | $15 | ±0.2mm | Burn marks, no 3D | Only surface engraving |
| **3D Printing (PLA)** | 3 hours | $2 | ±0.3mm | Layer lines visible | Not wood, prototype only |
| **CNC Milling** | 42 min | $20 | ±0.1mm | Glass-smooth | ✓ Perfect for CO3 |

**CNC is optimal because:**
- Walnut is impossible to 3D print
- Laser can only engrave surface (no 4mm depth)
- Hand carving lacks precision for clean letters
- CNC combines speed, precision, material versatility, and finish quality

---

## Reflection & Lessons Learned

### Technical Mastery

**CAM Skills:**
- STEP file import and orientation
- Toolpath strategy: roughing → finishing → profiling
- Feeds/speeds optimization for walnut hardwood
- G-code generation and post-processing

**CNC Operation:**
- Safe machine setup and workholding
- Tool installation and length calibration
- Real-time monitoring during cutting
- Tool change procedures

**Material Understanding:**
- Walnut cuts cleanly at 18,000-20,000 RPM
- 800mm/min feed prevents burning
- Grain direction affects tear-out risk
- Hardwoods require sharp carbide tools

### Design Validation Through Prototyping

**Progression:**
```
Day 1: Sketch concept
Day 2: CAD model (FreeCAD)
Day 5: Laser-cut cardboard template (dimensional check)
Day 6: 3D printed PLA prototype (depth validation)
Day 7: CNC milled walnut final piece (REAL CO3!)
```

Each step refined the design and reduced risk. By Day 7, I was confident the CAD model was perfect—and it was!

### Tomorrow: Finishing & Enhancement

The CNC nameplate is technically complete, but tomorrow (Day 8) I'll:
- Sand progression (120 → 220 → 400 grit)
- Apply dark walnut stain to enhance grain
- Polyurethane topcoat for protection and sheen
- Final beauty photography

---

## Resources & Files

**CAM Files:**
- `CO3_Nameplate.step` – FreeCAD export (Day 2)
- `CO3_Roughing.nc` – 6mm endmill roughing G-code
- `CO3_Finishing.nc` – 4mm ball nose finishing G-code
- `CO3_Profile.nc` – Oval cutout G-code

**CNC Parameters:**
- Roughing: 800mm/min, 18,000 RPM, 1mm stepdown
- Finishing: 600mm/min, 20,000 RPM, 0.25mm stepdown
- Material: Walnut hardwood (150×90×10mm)
- Total time: 42 minutes
- Tool wear: Minimal (carbide endmills still sharp)

**Documentation:**
- Dimensional inspection report (±0.1mm achieved)
- Surface quality photos (before sanding)
- CNC process video (time-lapse)

---

**Tomorrow:** Day 8 – Sanding, staining, and finishing the CO3 nameplate!

### Nesting & Optimization
**Nesting** is the process of arranging multiple parts on a single sheet to maximize yield and minimize waste.
* **Gap:** Always leave at least `2x Tool Diameter` between parts for stability.
* **Tabs:** Small bridges of material left behind to hold the part in place so it doesn't fly loose when cut.

---

## 4. Design for CNC Fabrication
CNC routers have physical limitations that directly dictate design logic.

### Design Constraints

**Internal Corners**
!!! warning "The Corner Radius Problem"
    CNC routers use cylindrical bits. They **cannot create sharp internal corners**. Every inside corner will have a radius equal to at least half the bit diameter.
    
    **Solution:** Use Dogbone or T-bone fillets to allow square parts to fit.

**Tolerances**
- Aim for ±0.5mm tolerance on dimensions
- Account for material deflection during cutting
- Design press-fit joints with 0.2mm interference

**Depth of Cut**
- Multiple shallow passes are safer than one deep cut
- Standard: 3mm depth per pass in plywood
- Adjust based on material hardness and tool strength

---

## 5. Practical Application

### My CNC Project Workflow

**Design Phase:**
1. Created CAD model in FreeCAD with joinery features
2. Arranged parts for nesting on 600x400mm plywood sheet
3. Added tabs to hold parts in place during cutting

**CAM Phase:**
1. Imported DXF into CAM software
2. Generated toolpaths:
   - Pockets: 3mm flat end mill, 50mm/s feed, 18000 RPM
   - Profile cuts: Same tool, added 0.5mm tabs every 50mm
3. Simulated toolpaths to check for collisions

**Fabrication Phase:**
1. Secured plywood to spoilboard with screws
2. Installed and measured tool length
3. Set work zero at material surface
4. Ran pocketing operations first
5. Changed to smaller bit for detail work
6. Cut profiles last
7. Manually removed parts and cleaned tabs

---

## Reflection

CNC routing demonstrated that **material removal is both science and art**. Understanding feeds, speeds, and toolpath strategies transformed raw sheet material into functional parts.

### Key Lessons
1. **Tool selection directly affects surface finish and efficiency**
2. **Nesting optimization reduces material waste**
3. **Tabs are essential** to prevent parts from moving during cutting
4. **Internal corners require special design consideration**
5. **CAM simulation prevents costly mistakes**

<!-- Images to be added:
- CNC router machine
- Nesting layout
- Cutting process
- Finished parts with tabs
- Final assembly
-->

### The "Internal Corner" Problem
Because the cutting tool is round, a CNC router **cannot cut a sharp internal 90° corner**. The radius of the tool will always remain.

!!! tip "Solution: Dog-Bones & T-Bones"
    To fit a rectangular tenon into a slot, we must create **"Dog-Bone" fillets** (over-cutting the corners) to allow the mating part to seat fully square.



### Tolerances & Press-Fit Joinery
For parts to snap together without glue (Press-Fit), tolerances must be exact.
* **Kerf/Runout:** The actual cut width is often slightly larger than the tool diameter due to vibration.
* **Offset:** Designing parts with a `0.1mm - 0.2mm` interference for a tight friction fit.

---

## 5. Assembly & Structural Evaluation
* **Joinery:** Using Mortise & Tenon or Box Joints for mechanical strength.
* **Structural Evaluation:** Checking if the sheet material direction (grain) aligns with the load-bearing requirements of the assembly.
