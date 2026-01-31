# Day 8 - Molding & Casting Processes

## 📌 Overview

**Focus:** Scaled production through replication. Using HSP-PCB as master pattern.

**Goal:** Create molds that enable production of 100+ identical units.

---

## 🔄 Casting Strategy

### Two-Stage Process

```
Stage 1: Master Pattern (from Day 6 prototype)
   ↓
Stage 2A: Silicone Mold (negative)
   ↓
Stage 2B: Resin Casting (positive copies)
```

### Why Casting for Production?

| Method | Unit Cost | Batch Size | Quality | Timeline |
|--------|-----------|-----------|---------|----------|
| **CNC (subtractive)** | $40 | 1–10 | Excellent | 2 hours/unit |
| **3D Printing (additive)** | $5 | 1–50 | Good | 6 hours/unit |
| **Casting (replication)** | $3 | 100+ | Excellent | 4 hours setup + 30 min/unit |

**Decision:** For 500+ units, casting is 10× cheaper than CNC.

---

## 🧴 Silicone Mold Making

### Materials

| Material | Type | Use |
|----------|------|-----|
| **Ecoflex 00-30** | Silicone rubber | High-detail mold |
| **Mold Release Agent** | Silicone spray | Prevent sticking |
| **Mold Box** | Acrylic or cardboard | Contain silicone |

### Process

**Time:** ~30 min setup + 6 hours cure

1. **Prepare Master**
   - Clean PLA prototype (remove dust)
   - Apply mold release (light spray coat)

2. **Mix Silicone**
   - Ecoflex ratio: 1A:1B by volume
   - Mix 2–3 minutes (slow mixer to minimize bubbles)

3. **Pour Mold**
   - Build mold box around master (4 cm sides)
   - Slowly pour silicone (de-gas if necessary)
   - Allow to cure 6+ hours at room temperature

4. **De-Mold**
   - Carefully cut open mold box
   - Remove master pattern (reusable)
   - Inspect mold for undercuts/defects

---

## 🎨 Resin Casting (Production Enclosures)

### Materials

| Material | Type | Properties | Cost |
|----------|------|------------|------|
| **Polyurethane (Smooth-On Smooth Cast)** | Liquid resin | Fast cure (15 min), durable | $25/liter |
| **Epoxy Resin** | Liquid resin | Slower cure (2 hr), very hard | $20/liter |
| **Polyester Resin** | Liquid resin | Fastest (5 min), brittle | $15/liter |

**Decision:** Polyurethane (Smooth-On Smooth Cast 325)
- **Cure Time:** 15 minutes
- **Demolding:** Safe at 30 minutes
- **Durability:** 5+ years
- **Cost:** ~$1.50/enclosure

### Casting Process

**Time per casting:** ~45 minutes (including cure)

1. **Prepare Mold**
   - Light mold release spray
   - Position in level work area

2. **Mix Resin**
   - Part A : Part B = 1:1 by volume
   - Mix 45 seconds (avoid introducing bubbles)
   - Stir gently (not whipping)

3. **Pour Casting**
   - Slow pour into mold cavity
   - Allow air bubbles to rise
   - Fill to slightly above rim

4. **Cure**
   - Wait 15 minutes (initial cure)
   - De-mold carefully
   - Post-cure 24 hours for full strength

### Finishing Casts

After removing from mold:

1. **Trim Gates** — Remove excess resin (sprues)
2. **Sand Surface** — 220 grit for smoothness
3. **Drill Holes** — Install threaded inserts
4. **Paint** — Spray black paint (optional branding)

---

## 🎯 Quality Control in Casting

### Common Issues & Solutions

| Issue | Cause | Prevention |
|-------|-------|-----------|
| **Bubbles** | Trapped air | Pour slowly, de-gas resin |
| **Incomplete Fill** | Low mold release | Use mold release generously |
| **Sticking** | Resin bonds to mold | Use proper release agent |
| **Shrinkage** | Resin curing pulls inward | Post-cure slowly (low temp) |
| **Warping** | Uneven cooling | Cure in level position |

### Inspection Checklist

- [ ] Surface smooth (no pits)
- [ ] Dimensions within ±1 mm (tolerance stack from mold)
- [ ] No visible bubbles
- [ ] Color consistent
- [ ] Threaded inserts aligned
- [ ] Weight ±5% from spec

---

## 📊 Production Economics

### Cost Breakdown (per enclosure, 500-unit batch)

| Cost Item | Amount |
|-----------|--------|
| **Mold** (amortized) | $0.20 |
| **Resin** | $1.50 |
| **Post-processing (labor)** | $0.80 |
| **Threaded inserts** | $0.15 |
| **Paint/finish** | $0.35 |
| **Overhead (10%)** | $0.30 |
| **Total per unit** | **$3.30** |

### Comparison: 500-Unit Run

| Method | Total Cost | Per Unit | Quality |
|--------|-----------|----------|---------|
| **CNC (Aluminum)** | $25,000 | $50 | Excellent |
| **3D Printing** | $2,500 | $5 | Good |
| **Casting** | $1,650 | $3.30 | Excellent |

**Savings with casting:** ~$850 per 500 units (~50% cost reduction)

---

## ♻️ Sustainable Considerations

**Problem:** Polyurethane waste from casting.

**Solutions:**
- **Scrap Resin Recycling:** Collect spills, cure fully, grind for filler
- **Mold Longevity:** Silicone molds last 100+ pours (amortizes mold cost)
- **End-of-Life:** Resin casts are non-toxic, can be mechanically recycled

---

## ✅ Day 8 Deliverables

✅ **Silicone Mold** (from Day 6 prototype)  
✅ **Cast Enclosures** (×5 test samples)  
✅ **Dimensional Report** — QC data from casts  
✅ **Production Protocol** — Standardized casting process  
✅ **Cost Analysis** — Unit economics at scale  

---

## 🔗 Resources

- **Smooth-On Casting Materials:** [smooth-on.com](https://www.smooth-on.com/)
- **Mold Making Guide:** [Smooth-On Tutorial](https://www.smooth-on.com/page_11013.html)
- **Resin Safety:** [MSDS Documentation](https://www.smooth-on.com/)

---

**Status:** Day 8 ✅ | **Next:** Day 9 - Final Fabrication & Documentation

## Course Overview
The CNC-milled CO3 nameplate is structurally complete, but today I'll transform it from a raw machined part into a polished, professional finished product through sanding, staining, and protective coating.

---

## CO3 Finishing Workflow: Raw Walnut → Museum Quality

### Objective
Transform the CNC nameplate through:
- **Sanding:** Remove tool marks, smooth all surfaces
- **Staining:** Enhance walnut grain and create depth contrast
- **Sealing:** Apply protective polyurethane topcoat
- **Final Inspection:** Document completed project

### Why Finishing Matters

!!! quote "The Difference Between Good and Great"
    The CNC did 80% of the work. The final 20%—finishing—makes the difference between a "machined part" and a "work of art."

**Before Finishing:**
- Tool marks visible (0.02mm scalloping on letter walls)
- Raw walnut is pale and uniform
- Surface prone to stains, scratches, moisture

**After Finishing:**
- Glass-smooth to the touch
- Rich chocolate-brown color with highlighted grain
- Protected surface that will last decades

---

## Phase 1: Progressive Sanding (Raw → Smooth)

### Sanding Progression Theory

**Grit Sequence:**
```
120 grit → 220 grit → 400 grit
```

Each grit removes scratches from the previous, halving scratch depth:
- **120 grit:** Removes CNC tool marks (~0.02mm)
- **220 grit:** Removes 120-grit scratches (~0.01mm)
- **400 grit:** Removes 220-grit scratches (nearly mirror-smooth)

!!! warning "Never Skip Grits!"
    Jumping from 120 to 400 won't work—coarse scratches remain visible. Each grit must remove the previous grit's marks.

### Step 1: 120-Grit Sanding (Rough Smoothing)

**Objective:** Remove ball nose scalloping and flatten surfaces

**Materials:**
- 120-grit sandpaper sheets
- Cork sanding block (for flat surfaces)
- Small foam sanding stick (for letter pockets)

**Technique:**
```
Flat surfaces → Sand with block in circular motions
Letter pockets → Fold sandpaper over foam stick, follow curves
```

**Process:**
- Start with oval top surface (20 strokes, light pressure)
- Sand letter walls carefully (don't round edges!)
- Sand letter bottoms (10 strokes each letter)
- Check: Run fingernail across surface—should not catch on marks

**Time:** 15 minutes  
**Result:** Tool marks removed, surface feels less smooth than before (expected—120 grit creates new scratches)

### Step 2: 220-Grit Sanding (Medium Smoothing)

**Objective:** Remove 120-grit scratches, begin smoothing

**Technique:**
- Same as 120-grit: block for flats, foam stick for pockets
- Sand in direction of walnut grain (lengthwise along oval)
- Use lighter pressure than 120-grit

**Process:**
- Wipe dust with dry cloth between grits
- Sand all surfaces again (15-20 strokes each area)
- Check: Surface should feel noticeably smoother
- Letters should have crisp edges (not rounded)

**Time:** 15 minutes  
**Result:** Surface is smooth to touch, no visible scratches under normal lighting

### Step 3: 400-Grit Sanding (Fine Smoothing)

**Objective:** Create near-mirror surface for staining

**Technique:**
- Ultra-light pressure (let sandpaper weight do the work)
- Long strokes along grain direction
- Focus on flat surfaces (letters are smooth enough from 220)

**Process:**
- Wipe with slightly damp cloth (removes fine dust)
- Let dry 5 minutes
- Final sanding with 400-grit (10 strokes each area)
- Check: Surface reflects light evenly, feels silky-smooth

**Time:** 10 minutes  
**Result:** Walnut surface is ready for staining—completely smooth

!!! success "Sanding Complete"
    The CO3 nameplate transformed from "machined" to "furniture-grade" smooth. The letter edges are sharp, surfaces are glass-like, and the walnut grain is beginning to pop even without stain.

---

## Phase 2: Staining (Enhancing Walnut Grain)

### Stain Selection: Dark Walnut

**Why Stain Walnut Wood?**
- Natural walnut is pale tan (not dramatic enough)
- Stain darkens wood to rich chocolate brown
- Stain highlights grain patterns (makes them pop)
- Creates depth contrast between flat surfaces and carved letters

**Product:** Minwax Dark Walnut Oil-Based Stain

### Staining Process

**Materials:**
- Dark walnut stain (oil-based)
- Foam brushes (disposable)
- Lint-free cotton rags
- Nitrile gloves (oil stain stains skin for days!)
- Newspaper (protect work surface)

#### Step 1: Pre-Stain Preparation

**Surface Inspection:**
- Wipe entire nameplate with clean, dry cloth
- Check for sanding dust in letter corners (blow out with compressed air)
- Ensure surface is completely dry and oil-free

**Workspace Setup:**
- Lay newspaper over work surface
- Place CO3 nameplate on elevated supports (so stain doesn't pool on bottom)
- Open window (oil stain fumes need ventilation!)
- Put on gloves and safety glasses

#### Step 2: Apply Stain

**Application Technique:**
1. Dip foam brush in stain (shake off excess)
2. Brush stain onto flat top surface (long strokes with grain)
3. Immediately brush into letter pockets (full coverage)
4. Work quickly—don't let any area dry partially

**Coverage:**
- Apply generous coat (stain should look wet)
- Make sure letter walls and bottoms are fully coated
- Oval edges should be covered too

**Time:** 3 minutes to apply entire surface

#### Step 3: Wait & Wipe

**Penetration Time:**
- Let stain sit for **8 minutes** (per Minwax instructions)
- Stain soaks into wood fibers during this time
- Don't wipe too early (light color) or too late (blotchy)

**Wiping Off Excess:**
1. At 8-minute mark, wipe entire surface with cotton rag
2. Use firm pressure—remove all excess stain
3. Wipe letter pockets carefully (use rag-wrapped finger)
4. Goal: Leave no puddles or thick spots

**Result After Wiping:**
- Walnut transforms from tan to rich brown
- Grain patterns are dramatically visible (dark lines in light wood)
- Letters appear slightly darker (end-grain absorbs more stain)

!!! tip "The Magic Moment"
    When I wiped the stain off, the CO3 nameplate came ALIVE! The walnut grain now has 3D depth, and the carved letters cast even more dramatic shadows against the rich brown surface. This looks incredible!

#### Step 4: Drying

**Drying Time:**
- Place nameplate on drying rack (ensure air circulation underneath)
- Let dry in ventilated area for **4-6 hours** (until not tacky)
- Do NOT apply polyurethane until stain is fully dry

**Progress Check:**
- Touch surface lightly after 4 hours
- Should feel dry, not sticky
- If tacky, wait another 2 hours

**Time:** 4 hours drying  
**Result:** Stain is dry, walnut has deep chocolate color, grain is highlighted

---

## Phase 3: Protective Coating (Polyurethane Sealing)

### Why Seal with Polyurethane?

**Protection:**
- Protects stain from rubbing off
- Creates moisture barrier (prevents water damage)
- Adds scratch resistance
- UV protection (prevents fading)

**Appearance:**
- Adds subtle sheen (satin finish)
- Deepens color slightly
- Makes surface feel silky-smooth

**Product:** Minwax Satin Polyurethane (Water-Based)

### Polyurethane Application

**Materials:**
- Water-based polyurethane (satin finish)
- High-quality foam brush (cheap brushes leave bubbles)
- 320-grit sandpaper (between coats)
- Clean workspace (dust-free as possible)

#### Coat 1: First Sealing Layer

**Application:**
1. Stir polyurethane gently (don't shake—creates bubbles)
2. Dip foam brush, tap off excess
3. Brush thin, even coat over entire CO3 surface
4. Work quickly before poly starts to tack up
5. Brush into letter pockets carefully

**Technique:**
- Long, smooth strokes along grain direction
- Don't over-brush (causes bubbles and drag marks)
- Aim for thin, even coating (not thick)

**Drying:**
- Let dry 2 hours (water-based poly dries fast)
- Surface will feel slightly rough (raised grain)
- This is normal!

**Time:** 2 hours drying

#### Light Sanding Between Coats

**Why Sand Between Coats?**
- First poly coat raises wood grain (feels rough)
- Sanding knocks down raised fibers
- Creates smooth surface for next coat
- Improves coat adhesion

**Process:**
1. After 2 hours, feel surface (should be dry)
2. Lightly sand with 320-grit (barely any pressure!)
3. Wipe dust with tack cloth (sticky cloth grabs dust)
4. Ready for coat 2

**Time:** 5 minutes

#### Coat 2: Build Depth

**Application:**
- Same process as coat 1
- Thin, even brushing along grain
- Cover entire surface including letters

**Drying:**
- Let dry 2 hours
- Surface now has more sheen
- Smoother to the touch

**Time:** 2 hours drying

#### Coat 3: Final Protection Layer

**Application:**
- Final coat (three coats = excellent protection)
- Extra care to avoid bubbles or drips
- Make sure letter pockets are fully coated

**Final Drying:**
- Let cure for **24 hours** before handling
- Polyurethane continues to harden during this time
- After 24 hours, nameplate is fully finished and durable

**Time:** 24 hours curing  
**Result:** CO3 nameplate has satin sheen, silky-smooth surface, protected for years of display

---

## Final Inspection & Quality Verification

### Visual Inspection

**Checklist:**
- [x] No drips or bubbles in polyurethane finish
- [x] Stain color is even (no blotches)
- [x] Letter edges are sharp and clean
- [x] Oval perimeter is smooth
- [x] No dust particles embedded in finish
- [x] Walnut grain is beautifully highlighted

**Result:** **PERFECT!** The CO3 nameplate looks professional and high-quality.

### Tactile Inspection

- Surface: Silky-smooth, slight satin sheen
- Letters: Crisp edges, smooth bottoms
- Overall: Substantial weight, feels premium

### Photography

**Documentation Photos:**
- Top view (shows full CO3 layout and grain)
- Angled view (captures letter depth shadows)
- Close-up (details grain patterns and finish quality)
- Comparison: Raw CNC vs. Finished (dramatic transformation)

---

## Finishing Materials Cost Breakdown

| Material | Quantity Used | Cost |
|----------|---------------|------|
| Sandpaper (120, 220, 400) | 3 sheets | $2.00 |
| Dark Walnut Stain | ~50ml | $3.00 |
| Polyurethane (satin) | ~100ml | $4.00 |
| Foam Brushes | 3 brushes | $1.50 |
| Cotton Rags | 2 rags | $1.00 |
| Gloves | 1 pair | $0.50 |
| **TOTAL FINISHING COST** | | **$12.00** |

**Total CO3 Project Cost:**
- Walnut blank (Day 7): $20.00
- Finishing supplies (Day 8): $12.00
- **GRAND TOTAL: $32.00**

(Not including CAD/CAM software, machine time, or prototyping materials)

---

## Reflection: From Raw Wood to Finished Product

### What I Learned

**Technical Skills:**
- Progressive sanding theory and practice
- Stain application and penetration timing
- Multi-coat polyurethane technique
- Grain direction importance

**Material Understanding:**
- Walnut darkens dramatically with stain
- End-grain (letter bottoms) absorbs more stain
- Water-based poly raises grain (requires sanding between coats)
- Three coats provide excellent durability

**Patience & Process:**
- **Total finishing time: ~30 hours** (mostly drying)
- Rushing any step would ruin the result
- Each phase builds on the previous (can't skip steps)
- The difference between 80% done and 100% done is enormous

### The Transformation

**Raw CNC (End of Day 7):**
- Pale tan walnut
- Tool marks visible
- Unprotected surface
- "Machined part" appearance

**Finished (End of Day 8):**
- Rich chocolate-brown color
- Glass-smooth surface
- Protected and durable
- "Professional product" appearance

!!! success "Finishing Success"
    The CO3 nameplate is now complete! It looks like something you'd buy in a high-end furniture store or design boutique. The walnut grain flows through the letters, the carved depth creates beautiful shadows, and the satin finish gives it a sophisticated, premium feel.

### Tomorrow: Final Presentation & Course Reflection

Day 9 will focus on:
- Complete project documentation assembly
- Before/after photo series
- Technical specifications sheet
- Process reflection and lessons learned
- Final presentation to showcase CO3 nameplate

The journey from concept sketch to finished walnut nameplate has been incredible!

---

## Resources & Documentation

**Finishing Schedule:**
- Sanding: 40 minutes (120 → 220 → 400 grit)
- Staining: 3 min apply + 8 min penetration + 4 hrs drying
- Polyurethane: 3 coats × 2 hrs drying each + 24 hr final cure
- Total time: ~30 hours (mostly passive drying)

**Products Used:**
- Minwax Dark Walnut Stain (oil-based)
- Minwax Satin Polyurethane (water-based)
- 3M Sandpaper assortment

**Documentation:**
- Before/after photos
- Finishing process video
- Close-up grain details
- Lighting tests (shadow depth)

---

**Tomorrow:** Day 9 – Final presentation and course reflection!
| **Plaster** | Rigid, porous, heat-resistant | Metal casting, simple shapes | 30-60 minutes |
| **Resin (Rigid)** | Hard, durable, reusable | Production runs | 2-8 hours |

!!! info "Silicone for Flexibility"
    Silicone molds are preferred for objects with undercuts because the flexibility allows demolding without damaging the cast or mold.

---

## Casting Materials

### Resin
**Types:** Polyurethane, epoxy, polyester
**Properties:** Hard, durable, can be pigmented
**Applications:** Functional parts, jewelry, decorative objects
**Safety:** Requires ventilation, gloves, proper mixing ratios

### Plaster
**Properties:** Rigid, porous, fragile
**Applications:** Architectural details, art pieces
**Advantages:** Inexpensive, easy to work with

### Metal (Advanced)
**Types:** Aluminum, bronze, pewter
**Properties:** Strong, conductive, heat-resistant
**Applications:** Functional parts, jewelry, tools
**Requirements:** Heat-resistant molds, safety equipment

---

## Design for Molding & Casting (DFMC)

### Critical Design Considerations

**Draft Angles**
!!! warning "Demolding Requires Draft"
    Vertical walls make demolding nearly impossible. Add **2-5° draft angle** to all walls perpendicular to the parting line.

**Undercuts**
- Avoid when possible
- If necessary, use flexible mold materials
- Consider multi-part molds for severe undercuts

**Parting Line**
- Choose location carefully to minimize seams
- Place along least visible edge when possible
- Consider ease of mold separation

**Wall Thickness**
- Maintain consistent thickness to prevent differential curing
- Thick sections may trap air bubbles or generate heat
- Minimum 2mm for structural integrity

**Vents and Pour Spouts**
- Design channels for air to escape
- Include funnel area for pouring
- Consider pressurized casting for thin sections

---

## My Molding & Casting Project

!!! note "CO3 Nameplate as Potential Master Pattern"
    The finished CO3 nameplate could serve as an excellent master pattern for mold-making. Its smooth surfaces, defined letter geometry, and professional finish make it ideal for creating silicone molds that could replicate the nameplate in various materials (resin, concrete, metal). The 2mm corner radii and draft angles designed for CNC milling also facilitate easy demolding in casting applications.

### Master Pattern Fabrication
**Method:** 3D printed in PLA
**Finish:** Sanded to 400 grit and primed
**Reason:** PLA layer lines would transfer to mold and all subsequent casts

### Mold Making Process
1. **Mold Box Construction**
   - Built containment box from acrylic sheets
   - Sealed corners with hot glue
   - Applied mold release to pattern and box

2. **Silicone Mixing**
   - Mixed RTV silicone with catalyst (10:1 ratio)
   - Degassed in vacuum chamber to remove bubbles
   - Poured slowly from height to minimize air entrapment

3. **Curing**
   - Allowed 24 hours cure time at room temperature
   - Carefully disassembled mold box
   - Extracted master pattern

### Casting Process
1. **Mold Preparation**
   - Applied mold release
   - Inspected for debris or damage

2. **Resin Casting**
   - Mixed polyurethane resin (1:1 ratio by volume)
   - Added pigment for color
   - Poured steadily to avoid bubbles
   - Tapped mold to release trapped air

3. **Demolding**
   - Waited full cure time (2 hours)
   - Carefully flexed mold to release cast
   - Inspected for defects

4. **Post-Processing**
   - Trimmed flash with knife
   - Sanded pour spout smooth
   - Applied finish as needed

---

## Quality Control

### Common Defects & Solutions

| Defect | Cause | Solution |
|--------|-------|----------|
| **Bubbles on surface** | Air trapped during pour | Pour from height, degas resin |
| **Incomplete fill** | Resin too viscous or mold too complex | Warm resin, add vents, pressure cast |
| **Flash (excess material)** | Mold not sealed properly | Clamp mold halves, add registration |
| **Warping** | Uneven cooling or demolding too early | Wait full cure time, reduce exotherm |

---

## Safety Considerations

!!! danger "Chemical Safety"
    - Always work in ventilated area
    - Wear nitrile gloves (latex dissolves in some resins)
    - Wear safety glasses
    - Follow manufacturer’s mixing ratios precisely
    - Dispose of materials according to local regulations
    - Never pour uncured resin down drains

---

## Reflection

Molding and casting taught me that **replication is an art form**. Creating a successful mold requires understanding material properties, designing for the process, and meticulous attention to detail.

### Key Takeaways
1. **Draft angles are non-negotiable** for successful demolding
2. **Surface finish of the master transfers to every cast**
3. **Bubbles are the enemy**—degassing and proper pouring technique are essential
4. **Material selection depends on both function and aesthetics**
5. **Molding enables mass customization** impossible with other methods

<!-- Images to be added:
- Master pattern
- Mold box construction
- Silicone pouring
- Cured mold
- Casting process
- Finished casts
- Defect examples
-->

