### UR-ACEIoT Student Documentation for Niyomugenga Grace

This repository contains the documentation for **Niyomugenga Grace's** Modeling & Fabrication course at UR-ACEIoT, featuring the **CO3 Nameplate Project** - a comprehensive 9-day journey from concept to finished walnut nameplate.

## Project Overview

This documentation site showcases the complete digital fabrication workflow for creating a professional CO3 nameplate:
- **Material**: Walnut hardwood (150mm × 90mm × 10mm)
- **Process**: CAD modeling → Prototyping → CNC milling → Finishing
- **Techniques**: FreeCAD, laser cutting, 3D printing, CNC routing, hand finishing

Visit the [live documentation site](Ran terminal command: git status

Ran terminal command: git push origin main

Ran terminal command: git log --oneline -5

🎉 **Perfect! All files successfully pushed to your repository!**

## Summary of what's now on GitHub:

**Repository:** https://github.com/niyomugenga92/Niyomugenga-URACEIoT

**Latest commits pushed:**
1. All recent updates (commit 4170147)
2. Updated README with project information
3. Fixed repository name display
4. Updated site title
5. Configured correct GitHub repository links

**Complete documentation system includes:**
- 📁 All 9 days of CO3 nameplate documentation
- 🖼️ Images for Days 1, 2, 3, 4, 5, and 6
- 🎨 Custom responsive CSS styling
- 🔗 Proper GitHub repository integration
- ⚙️ GitHub Actions workflow for auto-deployment
- 📝 Updated README.md
- 🎯 All configuration files (mkdocs.yml, requirements.txt)

**Your documentation site will be automatically deployed to:**
`https://niyomugenga92.github.io/Niyomugenga-URACEIoT/`

Check the **Actions** tab in your GitHub repository to see the deployment progress! 🚀) to explore the full project.

---

## Features

* This website is built and published automatically using **GitHub Actions**, every time you push changes to the repository
* The markdown content is generated into a site using **MkDocs**, a static site generator written in Python
* Uses the **Material for MkDocs** theme with custom teal/purple color scheme
* Includes **9 comprehensive daily activities** documenting the complete CO3 fabrication process
* Uses the **Material for MkDocs** theme with custom teal/purple color scheme
* Includes **9 comprehensive daily activities** documenting the complete CO3 fabrication process

---

## Getting Started

### Prerequisites
* Python 3.11+ installed on your computer
* Git (for version control)

### Quick Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/YourUsername/YourRepoName.git
   cd YourRepoName
   ```

2. **Create virtual environment & install dependencies**
   ```bash
   python -m venv .venv
   .venv\Scripts\activate  # On Windows
   # source .venv/bin/activate  # On Mac/Linux
   pip install -r requirements.txt
   ```

3. **Run the development server**
   ```bash
   python -m mkdocs serve
   ```

4. **View your site**
   - Open your browser to `http://127.0.0.1:8000/NiyomugengaGrace/`
   - Edit markdown files in `docs/` and see live changes!

---

## Project Structure

```
EphronMk/
├── .github/              # GitHub Actions workflow (auto-deployment)
├── docs/                 # All documentation content
│   ├── Daily-Activity/   # 9 days of CO3 project documentation
│   │   ├── day_1.md     # Foundations & CO3 concept
│   │   ├── day_2.md     # CAD modeling in FreeCAD
│   │   ├── day_3.md     # Technical documentation
│   │   ├── day_4.md     # Material selection (walnut)
│   │   ├── day_5.md     # Laser cutting validation
│   │   ├── day_6.md     # 3D printed prototype
│   │   ├── day_7.md     # CNC milling final piece
│   │   ├── day_8.md     # Finishing & staining
│   │   ├── day_9.md     # Final presentation
│   │   └── index.md     # Daily activities overview
│   ├── images/          # All project images organized by day
│   ├── stylesheets/     # Custom CSS styling
│   └── index.md         # Homepage with bio and course overview
├── mkdocs.yml           # Site configuration
├── requirements.txt     # Python dependencies
├── .gitignore          # Git exclusions (.venv, site/)
└── README.md           # This file
```

---

## Documentation Content

### Day-by-Day Overview

1. **Day 1** - Foundations & CO3 Concept Development
2. **Day 2** - CAD Modeling (FreeCAD oval base + letter geometry)
3. **Day 3** - Technical Documentation & Quality Control
4. **Day 4** - Material Selection & Testing (walnut chosen)
5. **Day 5** - Laser Cutting Cardboard Validation Template
6. **Day 6** - 3D Printed PLA Prototype (depth validation)
7. **Day 7** - CNC Milling Final Walnut Nameplate ⭐
8. **Day 8** - Finishing (sanding, staining, polyurethane)
9. **Day 9** - Final Presentation & Course Reflection

---

## Customization

### Update Site Information
Edit `mkdocs.yml` to change:
* Site name and description
* Author information
* Theme colors
* Navigation structure
* GitHub repository link

### Add New Pages
1. Create markdown file in `docs/` (e.g., `docs/new-page.md`)
2. Add to navigation in `mkdocs.yml`:
   ```yaml
   nav:
     - New Page: new-page.md
   ```

### Add Images
Place images in `docs/images/` and reference in markdown:
```markdown
![Description](./images/grace.PNG)
```

---

## Deployment

### GitHub Pages (Automatic)
The site deploys automatically via GitHub Actions when you push to the `main` branch:
1. Commit your changes: `git add . && git commit -m "Update docs"`
2. Push to GitHub: `git push origin main`
3. GitHub Actions builds and deploys to `gh-pages` branch
4. Site is live at: `https://yourusername.github.io/reponame/`

### Manual Build
```bash
mkdocs build
# Generates static site in site/ folder
```

---

## Technologies Used

- **MkDocs** - Static site generator
- **Material for MkDocs** - Modern theme
- **Python Markdown Extensions** - Enhanced markdown features
- **GitHub Actions** - CI/CD pipeline
- **Git** - Version control

---

## Resources

- [MkDocs Documentation](https://www.mkdocs.org)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [UR-ACEIoT Fabrication Lab](https://fablabrwanda.github.io/UR-ACEIoT/)
- [Markdown Guide](https://www.markdownguide.org/)

---

## Author

**Niyomugenga Grace**  
MSc in IoT Embedded Computing Systems (ECS)  
UR-ACEIoT, Kigali, Rwanda

---

## License

This project documentation is for educational purposes as part of the UR-ACEIoT Modeling & Fabrication course.

---

**Project Status:** Complete - CO3 Nameplate fabrication documented across 9 comprehensive days!

