# Day 2 – Digital Modeling for Fabrication

## Course Overview
Digital modeling transforms design ideas into precise, fabrication-ready representations. Today I create the detailed CAD model for the **CO3 nameplate project**.

---

## Project: CO3 Nameplate CAD Design

### Design Specifications
**Objective:** Create a production-ready 3D model of the CO3 nameplate
**Software:** FreeCAD (Part Design Workbench)
**Final Dimensions:**
- Outer oval: 150mm x 90mm
- Base thickness: 10mm
- Letter depth: 4mm (carved)
- Letter height: "C" = 40mm, "O" = 38mm, "3" = 40mm
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


