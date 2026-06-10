# Visual Design Brief & Prototype Blueprint

This document serves as a creative design brief and layout blueprint for **Nguyễn Đức Minh Hoàng** to prototype, verify, and export portfolio visual assets in Figma or Canva. 

The goal is to move away from raw, uncropped screenshots and create a unified, premium visual system that reflects a **game/product operations command center**.

---

## 1. Style Guide Summary

### Color Palette

| Token Name | Hex Code | Role in System |
| :--- | :--- | :--- |
| **navy-night** | `#080E24` | Primary dark background (Hero visual, Game section, dark layers) |
| **navy** | `#1B2D73` | Primary brand color (underlines, borders, buttons, main titles) |
| **navy-accent**| `#273A86` | Interactive hover states and kicker labels |
| **cream** | `#FAF8F2` | Global background color (soft, premium light background) |
| **beige** | `#ECEAE5` | Supporting card surfaces, badges, and structural blocks |
| **card** | `#FFFFFF` | Standard card surface (clean, high contrast) |
| **line** | `#DFE4E7` | Light-mode borders and dividers |
| **ink** | `#333333` | Main readable body text |
| **muted** | `#646670` | Secondary metadata labels and descriptions |
| **sky** | `#9DC4FF` | Accent text, terminal-style highlights, and glow overlays |
| **forest** *(Proposed)* | `#173D34` | Proposed secondary domain color for game/LiveOps visualizations |

#### Forest Green (`#173D34`) Prototype Rules:
* **Purpose:** Introduce a mature, strategic green representing game operations, LiveOps event planning, and balance systems. It must feel premium, not bright, neon, or childish.
* **Usage Limit:** Use as the background for a maximum of **1–2 high-priority thumbnails** (such as Case Study 1 or the Hero) to create visual focus. Do not apply it as the default page-wide background.
* **Text Pairing:** Always pair forest background with **cream (`#FAF8F2`)** text at 85–95% opacity.
* **Accent Pairing:** Use **sky (`#9DC4FF`)** for highlights, indicators, and chips on forest.
* **Borders on Forest:** Use **sky at 30–40% opacity** or **cream at 12–20% opacity** to define borders.

---

### Typography for Image Labels
* **Kicker/Label:** `10–12px`, uppercase, bold (`600–700` weight), letter spacing `0.08–0.14em`
* **Title:** `18–24px`, bold (`600–700` weight)
* **Annotation/Body:** `12–14px`, regular/medium (`400–500` weight)
* *Rule:* Avoid placing long paragraphs inside images. Distill screenshots down to structural shapes and label them clearly.

---

### Frame & Border Rules
* **Border Thickness:** `1px`
* **Border Color:** 
  * On light background: `line` (`#DFE4E7`)
  * On dark background: `sky` (`#9DC4FF`) at 30–40% opacity
  * On forest background: `sky` (`#9DC4FF`) at 30–40% opacity or `cream` (`#FAF8F2`) at 12–20% opacity
* **Border Radius:** `8px` (standard cards) or `12px` (devices/window frames)
* **Shadows:** Very subtle, soft shadows (e.g., `rgba(8, 14, 36, 0.04)` to `rgba(8, 14, 36, 0.08)`)
* **Top Bar / Browser Window Header:** `28–36px` height with a 3-dot window control system:
  * **Dot 1 (Red):** `#d56f5d`
  * **Dot 2 (Yellow):** `#d7aa4a`
  * **Dot 3 (Green):** `#68a37d`

---

### Device Mockup Rules
Select the device frame that matches the feature's core logic:

* **Desktop / Browser Frame:**
  * Use for: Admin tools, CDP panels, tabular reports, system architectures, permission matrices, and detailed flow maps.
* **Phone Frame (aspect ratio ~19.5:9):**
  * Use for: Push notifications, mobile game UIs, event status screens, and player journey maps.
* **Tablet Frame (aspect ratio ~4:3):**
  * Use for: Gantt charts, sprint timelines, LiveOps calendars, and project planning boards.
* **Note / Checklist Card:**
  * Use for: Specification drafts, user story cards, backlog checklists, and acceptance criteria.
* *Rule:* Never stack more than 2 overlay elements on a primary device frame. Keep the layouts flat and clean.

---

### Proof Labeling Rules
To maintain transparency and build trust with recruiters, differentiate real screenshots from visual templates using these exact terms:

* **For Real / Sanitized Work:**
  * `"Sanitized product UI"`
  * `"Internal details anonymized"`
  * `"Real process preview"`
* **For Visual Templates / Prototypes:**
  * `"Visual template"`
  * `"Anonymized system mockup"`
  * `"Placeholder for future proof"`

---

## 2. Asset Mapping Table

This table maps all current assets in `public/assets/` to their role and details design improvements:

| Image Filename | Used in Section | Current Role | Current Quality Issue | Recommended Treatment |
| :--- | :--- | :--- | :--- | :--- |
| `cdp-automation-flow-map.png` | Case Study 1 | Real Artifact | Large file size (4.7MB); text details are extremely dense and unreadable. | Crop to a high-readability segment focusing on the trigger-logic nodes. |
| `cdp-flow-management-states.png` | Hero / Case Study 1 | Real Artifact | Large file size (2.1MB); browser screenshot is too small in the nested frame. | Place in a neat desktop browser frame, crop to a key state screen, and overlay with a label card. |
| `chatbot-zalo-journey-flow.png` | Hero | Real Artifact | Large file size (2.6MB); chart is too wide and complex to read. | Use as background texture with low opacity. Overlay a clean mobile phone mockup showing a chat screen. |
| `cdp-flow-report-detail.png` | Hero / Product Proof | Real Artifact | Large file size (1.5MB); contains dry, crowded tabular rows. | Crop to show the main analytics chart, removing empty table rows. |
| `cdp-campaign-list-ui.png` | Product Proof | Real Artifact | UI is a bit generic; feels like a typical B2B list screen. | Add a browser frame top bar, apply a grid overlay, and add the label `"Sanitized campaign list UI"`. |
| `immersevietnam-website-overview.png` | Supporting Projects | Real Artifact | General website layout; looks a bit dry. | Use a clean desktop frame with a soft beige background shadow. |
| `dashboard-revenue-overview.png` | Supporting Projects | Real Artifact | Graph colors feel finance-focused and corporate. | Crop closely to the KPI metrics cards; frame as data operations proof. |
| `thesis-portfolio-optimization-overview.png` | Supporting Projects | Real Artifact | Look is purely academic/research-heavy. | Present in a clean window frame, labeled as `"Quantitative Decision Support"`. |
| `portrait-nguyen-duc-minh-hoang.jpg` | About *(Unused)* | Fallback / Portrait | Unused. About component currently uses the monogram fallback card. | Replace with a high-quality, professional headshot using the specs below. |
| `chatbot-feedback-rating-flow.png` | None | Unused | Leftover asset. | Retain in archive or delete to save space. |

---

## 3. Priority Plan

| Priority | Visual Target | Why It Matters | Asset Type | Forest Test? | Next Action in Figma/Canva |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **P0** | **Hero Command Center Visual** | The visual anchor of the site. Must instantly prove PM/BA execution. | Real + Template | **Yes** | Construct a 1400x1000px canvas showing the NDMH command center node. |
| **P0** | **Case Study 1 Thumbnail** | Case 1 is the primary game-transferable project (Notification Event Flow). | Real Artifact | **Yes** | Layer the CDP flow map inside a browser frame on a forest-to-navy-night gradient. |
| **P0** | **Case Study 2 Thumbnail** | Proves project operations ( Vega Fintech backlog/release tracking). | Visual Template | *No* | Set up a light cream canvas, place a Gantt chart inside a tablet frame, overlay a Jira card. |
| **P0** | **Case Study 3 Thumbnail** | Proves system logic (Permission Matrix). | Visual Template | *No* | Setup a pale blue canvas, draw a role-permission grid inside a browser frame. |
| **P1** | **Product Proof UI Previews** | Validates real product execution (CDP screen UI and reports). | Real Artifact | *No* | Crop campaign list and report screenshots into clean browser windows with line borders. |
| **P1** | **Project Thumbnails** | Supporting web, dashboard, and thesis visuals. | Real Artifact | *No* | Re-export screenshots at a consistent 16:10 ratio in browser frames. |
| **P2** | **About Monogram / Photo** | Personal identity block. | Monogram / Photo | **Yes** | Design a monogram avatar card that matches the command center aesthetic. |

---

## 4. Per-Image Spec Table

| Visual Target | Canvas Size | Background Style | Primary Element | Supporting Overlay | Custom Label Text | Export Filename |
| :--- | :---: | :--- | :--- | :--- | :--- | :--- |
| **Hero Command Center** | `1400×1000px` | Dark gradient (`#080E24` to `#14245F`) with a grid | Monogram Node `NDMH` + Journey Lines | Browser mockup (CDP states) + Phone mockup (Chatbot flow) | `"Game Product Command Center"` | `hero-command-center.png` |
| **Case Study 1** | `1400×900px` | Forest gradient (`#173D34` to `#080E24`) | Browser mockup (Automation Flow Map) | Floating spec sheet card (Acceptance criteria) | `"Feature Logic & Event flow"` | `case-notification-flow.png` |
| **Case Study 2** | `1400×900px` | Light cream (`#FAF8F2`) | Tablet mockup (Sprint Release Timeline) | Floating Kanban card (User Story) | `"Product Operations & backlog"` | `case-product-operations.png` |
| **Case Study 3** | `1400×900px` | Pale blue gradient (`#F4F8FB` to `#FFFFFF`) | Browser mockup (Access Matrix Grid) | Small role hierarchy tree diagram | `"Access Matrix & logic"` | `case-access-matrix.png` |
| **Project 1** | `1200×750px` | Light cream (`#FAF8F2`) | Browser mockup (ImmerseVietnam UI) | None | `"UX & site structure"` | `project-immersevietnam.png` |
| **Project 2** | `1200×750px` | Light cream (`#FAF8F2`) | Browser mockup (Revenue Dashboard) | None | `"BI performance analytics"` | `project-revenue-dashboard.png` |
| **Project 3** | `1200×750px` | Light cream (`#FAF8F2`) | Browser mockup (Thesis optimization UI) | None | `"Quantitative Decision Model"` | `project-thesis-analysis.png` |
| **Product Proof 1** | `1200×750px` | Light cream (`#FAF8F2`) | Browser mockup (Campaign List UI) | None | `"Sanitized campaign UI"` | `proof-campaign-list.png` |
| **Product Proof 2** | `1200×750px` | Light cream (`#FAF8F2`) | Browser mockup (Report Detail UI) | None | `"Sanitized report analytics"` | `proof-report-detail.png` |

---

## 5. Figma/Canva Step-by-Step

### 1. Frame Setup & Global Styling
1. Create a frame matching the target size (e.g. `1400×1000px` for Hero, `1400×900px` for Case Studies).
2. Set background color using the hex codes from the **Style Guide**.
3. **Add Grid Overlay:**
   * Create a repeating line grid pattern (`width: 36px`, `height: 36px`).
   * Color the grid lines:
     * On dark/forest background: `#9DC4FF` at `6%` opacity.
     * On light cream background: `#1B2D73` at `4%` opacity.
   * Apply a linear gradient layer mask on the grid to fade it out at the bottom edges.

### 2. Desktop Browser Mockup Window
1. Create a rectangle for the main window (e.g., `900×600px`).
2. Add a `1px` border:
   * Light-mode window: `#DFE4E7`
   * Dark/Forest-mode window: `#9DC4FF` at `30%` opacity.
3. Apply `8px` corner radius.
4. **Create Browser Header Top Bar:**
   * Add a rectangle at the top (`height: 32px`).
   * Add 3 circles (size `8px`, spacing `6px`) at the top-left:
     * Red: `#d56f5d`
     * Yellow: `#d7aa4a`
     * Green: `#68a37d`
5. Place the screenshot/flow chart inside this window. Set constraints to fill the container, cropped cleanly to highlight active interfaces.

### 3. Overlay Mobile Phone mockup
1. Create a rectangle representing a phone frame (e.g., `220×440px`).
2. Round the corners to `18px`.
3. Add a `1px` border (`#DFE4E7` or `#9DC4FF` at `35%` opacity).
4. Add a camera notch at the top: small pill-shaped rectangle (`width: 60px`, `height: 8px`, `radius: 99px`).
5. Place the phone screen mockup inside. Apply a rotation of `3°` or `-3°` for a layered, editorial look.
6. Apply a soft drop shadow: `X: 0, Y: 8, Blur: 20, Spread: 0, Color: rgba(8, 14, 36, 0.08)`.

### 4. Annotation Cards & Labels
1. Create a small card shape (e.g., `240×120px`) for spec/checklist notes.
2. Apply `1px` border, `6px` radius, and a color accent bar on the left edge (`3px` width, color: `#273A86` or `#d7aa4a`).
3. Add text layers inside the card with a clear kicker: e.g., `"ACCEPTANCE CRITERIA"`.
4. Draw annotation paths: a `1px` straight line connecting the card to the specific interface feature it explains, ending in a small dot (size `4px`).

### 5. Web Export Settings
1. Select the main export frame.
2. Export as **PNG (Full Resolution)** at `1x` scale.
3. Compress using an optimization tool (like TinyPNG) to ensure file sizes are under **1.2MB**.
4. Duplicate the frame and scale down to `600px` width.
5. Export as **JPG (Preview Thumbnail)** at `80%` quality.

---

## 6. Forest Prototype Recommendation

| Area for Forest Green | Recommended? | Technical & Brand Rationale | Text Pairing | Risk | Test Action |
| :--- | :---: | :--- | :--- | :--- | :---: |
| **Hero Command Center Background** | **Maybe** | Highlights game industry focus, but might contrast too starkly with light cream navbar elements. | Cream (`#FAF8F2`) | Navbar alignment | Test in Figma |
| **Game Direction Background** | **Recommended** | Section is already dark. Switching it from navy to forest green anchors the game strategy segment beautifully. | Cream (`#FAF8F2`) | None | Test in code |
| **CTA/Contact Background** | **Maybe** | A forest green banner at the footer creates a strong visual anchor for hiring managers. | Cream (`#FAF8F2`) | Visual weight | Test in Figma |
| **Case Study 1 Thumbnail Background** | **Recommended** | High contrast backdrop makes the white and sky flow map lines pop. Labeled as LiveOps/events. | Cream / Sky | None | Test in Figma |
| **About Portrait Placeholder Background** | **Recommended** | Monogram node looks highly professional when contrasted inside a forest frame. | Cream (`#FAF8F2`) | None | Test in Figma |

---

## 7. File Naming & Path Conventions

To prevent broken code paths, all files must use the exact filenames below:

* **Production Full Resolution (`public/assets/`):**
  * `public/assets/hero-command-center.png`
  * `public/assets/case-notification-flow.png`
  * `public/assets/case-product-operations.png`
  * `public/assets/case-access-matrix.png`
  * `public/assets/project-immersevietnam.png`
  * `public/assets/project-revenue-dashboard.png`
  * `public/assets/project-thesis-analysis.png`
  * `public/assets/proof-campaign-list.png`
  * `public/assets/proof-report-detail.png`
  * `public/assets/portrait-nguyen-duc-minh-hoang.jpg`

* **Recruiter Preview Thumbnails (`public/assets/previews/`):**
  * `public/assets/previews/hero-command-center-preview.jpg`
  * `public/assets/previews/case-notification-flow-preview.jpg`
  * `public/assets/previews/case-product-operations-preview.jpg`
  * `public/assets/previews/case-access-matrix-preview.jpg`
  * `public/assets/previews/project-immersevietnam-preview.jpg`
  * `public/assets/previews/project-revenue-dashboard-preview.jpg`
  * `public/assets/previews/project-thesis-analysis-preview.jpg`
  * `public/assets/previews/proof-campaign-list-preview.jpg`
  * `public/assets/previews/proof-report-detail-preview.jpg`

---

## 8. Replacement Checklist for Hoàng

Use this list in Figma to build out your high-fidelity portfolio assets:

- [ ] **Hero Visual:** Replace background text with a sanitized screenshot of the CDP flow management states. Set phone mockup overlay to contain chatbot journey flow diagram.
- [ ] **Case Study 1:** Crop `cdp-automation-flow-map.png` to focus on the central segmentation nodes, overlay with an acceptance criteria spec card.
- [ ] **Case Study 2:** Draft a clean Gantt chart or sprint timeline template to represent project operations. Mark as `"Visual template"`.
- [ ] **Case Study 3:** Construct a 21x20 grid representing a role-permission access matrix. Overlay a small tree hierarchy block. Mark as `"Visual template"`.
- [ ] **Product Proof 1:** Take a clean browser crop of `cdp-campaign-list-ui.png` and add a browser header bar.
- [ ] **Product Proof 2:** Take a clean browser crop of `cdp-flow-report-detail.png` focusing on the top-right analytics charts.
- [ ] **Portrait Photo:** Swap out the monogram placeholder card with a chest-up professional headshot. Set background to solid beige or muted navy, matching the command center lighting.
