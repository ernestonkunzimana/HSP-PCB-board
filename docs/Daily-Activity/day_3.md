

# Day 3 – Technical Documentation & Quality Control

## Course Overview
While PCB design is a core digital fabrication skill, Day 3 for the CO3 nameplate project focuses on **technical documentation**, **dimensional verification**, and **quality control planning** - essential skills for any fabrication project.

---

## CO3 Nameplate: Technical Documentation

### Objective
Create comprehensive technical drawings and quality control documentation for the CO3 nameplate to ensure fabrication accuracy and enable reproducibility.

---

## Technical Drawing Creation

### Why Technical Drawings Matter
!!! info "Professional Documentation"
    Technical drawings serve as the "blueprint" that communicates design intent to fabricators, clients, and future makers. They must be clear, accurate, and follow industry standards.

### Drawing Views Created

**1. Top View (Plan View)**
- Shows oval outline: 150mm x 90mm
- Letter positions and spacing
- All horizontal dimensions
- Center lines for symmetry

**2. Front View (Elevation)**
- Base thickness: 10mm
- Letter carving depth: 4mm
- Edge chamfer: 1mm x 45°
- Material specification

**3. Section View (A-A)**
- Cut through middle letter 'O'
- Shows internal profile of carved letter
- Demonstrates 4mm depth clearly
- Illustrates draft angle if present

**4. Detail View**
- Enlarged view of letter corner showing 2mm radius
- Critical for CNC tool selection
- Ensures machinability

### Dimensioning Standards

Applied proper dimensioning practices:
- All dimensions in millimeters (mm)
- Three decimal places for critical dimensions (150.000mm)
- Tolerance callouts: ±0.5mm general, ±0.1mm for letter depth
- Reference dimensions in parentheses for non-critical features
- Clear dimension lines with arrows
- No overlapping dimensions

---

## Quality Control Planning

### Inspection Points for CO3 Nameplate

| Feature | Target Dimension | Tolerance | Measurement Method |
|---------|------------------|-----------|-------------------|
| Oval Width | 150.00mm | ±0.5mm | Digital calipers |
| Oval Height | 90.00mm | ±0.5mm | Digital calipers |
| Base Thickness | 10.00mm | ±0.2mm | Digital calipers |
| Letter Depth | 4.00mm | ±0.1mm | Depth gauge |
| Letter C Height | 40.00mm | ±0.3mm | Digital calipers |
| Letter O Height | 38.00mm | ±0.3mm | Digital calipers |
| Number 3 Height | 40.00mm | ±0.3mm | Digital calipers |
| Corner Radius | 2.00mm | ±0.2mm | Radius gauge |

### Pre-Fabrication Checklist

- [ ] CAD model reviewed and approved
- [ ] Technical drawings completed
- [ ] Material selected and purchased
- [ ] CNC toolpaths generated and simulated
- [ ] All required end mills available and sharp
- [ ] Workholding method tested
- [ ] Safety equipment prepared
- [ ] Measurement tools calibrated

### Post-Fabrication Inspection Protocol

**Visual Inspection:**
1. Check for surface defects or tool marks
2. Verify letter clarity and definition
3. Inspect for chips or cracks
4. Examine edge quality

**Dimensional Inspection:**
1. Measure overall oval dimensions
2. Verify base thickness
3. Check letter carving depths (multiple points)
4. Confirm letter heights and spacing
5. Validate corner radii (tool clearance verification)

**Functional Inspection:**
1. Check flatness (does it sit flat on table?)
2. Verify edges are smooth (no sharp burrs)
3. Assess visual impact (are letters clearly visible?)

---

## PCB Design Skills Applied to CO3 (Optional Enhancement)

### LED Backlighting Concept

For future enhancement, the CO3 nameplate could incorporate LED backlighting:

**Concept:**
- Drill holes behind letters for LED placement
- Design small PCB with:
  - 3 LEDs (one per letter)
  - Current-limiting resistors
  - Power connector (USB or battery)
  - Simple on/off switch

**PCB Specifications:**
- Size: 50mm x 30mm
- Single-sided design
- Through-hole components for easy assembly
- Mounted to back of nameplate

**Design Considerations:**
- LED placement must align with letter positions
- Wire routing to avoid visible cables
- Power supply location (hidden on back)
- Diffusion method for even light distribution

*Note: This enhancement would be implemented after main fabrication is complete.*

---

## Bill of Materials (BOM)

### CO3 Nameplate BOM

| Item | Description | Quantity | Material/Spec | Source |
|------|-------------|----------|---------------|--------|
| 1 | Base Material | 1 piece | 160mm x 100mm x 10mm wood/aluminum | Material supplier |
| 2 | 4mm End Mill | 1 | Carbide, flat end | FabLab stock |
| 3 | 6mm End Mill | 1 | Carbide, flat end (roughing) | FabLab stock |
| 4 | Sandpaper Set | 1 set | 80, 120, 220, 400 grit | Hardware store |
| 5 | Wood Stain/Paint | As needed | Color TBD | Hardware store |
| 6 | Polyurethane Finish | 1 can | Clear matte or gloss | Hardware store |
| 7 | Double-Sided Tape | 1 roll | Heavy-duty, 25mm wide | FabLab stock |

**Estimated Costs:**
- Material: $5-15 (depending on wood vs. aluminum choice)
- Consumables: $10-20 (finish, sandpaper)
- **Total Project Cost: $15-35**

---

## Documentation Package

### Deliverables Created on Day 3

1. **Technical Drawings (PDF)**
   - Top view with dimensions
   - Front view with sections
   - Detail views of critical features
   - 3D isometric view for clarity

2. **Quality Control Checklist (PDF)**
   - Pre-fabrication checks
   - In-process monitoring points
   - Post-fabrication inspection protocol

3. **Bill of Materials (Spreadsheet)**
   - All materials and quantities
   - Cost estimates
   - Supplier information

4. **Fabrication Notes (Document)**
   - Recommended feeds and speeds
   - Tool change sequence
   - Safety precautions
   - Estimated machining time

---

## Reflection

### Day 3 Achievements

Today I created comprehensive technical documentation for the CO3 nameplate:
- Professional technical drawings with proper dimensioning
- Quality control inspection plan
- Complete bill of materials
- Fabrication notes and specifications

### Importance of Documentation

!!! quote "Documentation Enables Success"
    \"Proper documentation transforms a one-time project into a repeatable, teachable, and improvable process. It's the difference between making something and truly understanding how to make it.\"

### Skills Developed

1. **Technical drawing creation** following industry standards
2. **Dimensional tolerance specification** based on fabrication method
3. **Quality control planning** for inspection and validation
4. **BOM creation** for project planning and costing
5. **Process documentation** for reproducibility

### Ready for Fabrication

With Day 3 complete, the CO3 nameplate project now has:
- ✅ Completed CAD model (Day 2)
- ✅ Technical drawings (Day 3)
- ✅ Quality control plan (Day 3)
- ✅ BOM and cost estimate (Day 3)

### Next Steps for Day 4

Tomorrow I will:
- Test different materials (wood, aluminum, acrylic)
- Evaluate material properties for aesthetics and machinability
- Make final material selection for the CO3 nameplate
- Understand how material choice affects fabrication parameters

<!-- Images to be added:
- Technical drawing: Top view with all dimensions
- Technical drawing: Section view showing letter depth
- Technical drawing: Detail view of corner radius
- Quality control checklist document
- BOM spreadsheet screenshot
- Measurement tools (calipers, depth gauge)
-->

The objective of this activity is to design a **single-sided PCB** using **KiCad** based on a real microcontroller system.  
Students will create a board that:

- Uses an **ATtiny45 microcontroller**
- Controls an **LED using a push button**
- Can be programmed via a **6-pin ISP header**
- Is suitable for **PCB milling** and **hand soldering**

This is a complete embedded system design, not a demo circuit.

---

## Functional Description

- The **ATtiny45 runs at 5V**
- The **LED turns ON when the push button is pressed**
- The program is uploaded using an **ISP programmer**
- The board is powered using an **external 5V connector**

---

## CO3 Nameplate - Project Reference

![CO3 Nameplate Design](../images/day_4/2.jfif)
*The CO3 nameplate - our target design for this fabrication project*


