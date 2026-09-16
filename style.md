# Visual Style and Design Documentation: KWF Website

This document serves as the authoritative visual identity reference guide for designers and developers working on the Karton Works Factory (KWF) digital platform. All interface layouts, front-end code configurations, and asset creations must strictly align with the principles detailed below.

---

## 🏛️ 1. Overall Concept & Design Philosophy

The website utilizes a hybrid design philosophy: **Corporate Minimalism structured by an Industrial Skeleton**. 

Instead of relying on distracting decorative flourishes, the layout embraces crisp whitespace, sharp structural lines, and tight grid alignments. This approach mirrors the exact values of physical packaging manufacturing—**precision, stability, and engineered reliability**. The user interface is treated as an efficient tool for B2B buyers who prioritize clarity, immediate access to technical specs, and effortless navigation over marketing fluff.

---

## 🎨 2. Visual Identity & Brand System

### A. Color Palette Hierarchy
To achieve an authoritative, balanced user interface, implement a strict **60-30-10 distribution rule**:

*   **60% Canvas Neutrals (The Foundation):**
    *   `#FFFFFF` (Pure White) or a soft off-white (`#FDFBF7`) for main body background areas to keep content highly readable and scannable.
    *   `#231F20` (Deep Charcoal) for dark sections such as footers to visually anchor the layout.
*   **30% Structure Tones (The Weight):**
    *   `#231F20` (Deep Charcoal) for primary headings, body copy, and global navigation components. Pure black (`#000000`) should be avoided.
    *   `#939598` (Muted Industrial Gray) for secondary typography, metadata text, border rules, and subtle structural frames.
*   **10% Action Accents (The Focus):**
    *   `#C6934B` (Kraft Cardboard Brown) used exclusively for interactive focal points, primary Call-to-Action (CTA) backgrounds, interactive hover states, and critical data highlights.

### B. Typography Architecture
Typography must establish an undeniable visual hierarchy across all viewports.
*   **Headings (H1, H2, H3):** Set in a clean, high-weight geometric Sans-Serif (e.g., *Inter*, *Roboto*, or *Helvetica Neue*). Headings must use `#231F20` to project authority.
*   **Body Text & Labels:** Set in highly legible, neutral Sans-Serif typography. For extended paragraphs, use the body color at roughly 85-90% opacity to minimize user eye strain during long technical reading sessions.

### C. Imagery & Graphic Elements
*   **Technical Transparency:** Prioritize high-resolution, sharp photography of real machinery, industrial assembly lines, and raw materials (corrugated cardboard). 
*   **Data Layouts:** Avoid generic vector illustrations or vague icons. Instead, utilize custom technical line icons, blueprint-inspired layouts, and authentic laboratory matrices to visualize engineering standards.
*   **Borders & Radii:** Maintain an industrial, geometric aesthetic. Buttons, cards, and image blocks should feature sharp corners or an absolute minimum border-radius (e.g., maximum `2px` or `4px` in Tailwind configuration).

---

## 👔 3. Tone & Feel (B2B Communication Protocol)

The visual tone must explicitly accommodate the psychological needs of B2B procurement officers and operations managers:

*   **Institutional Trust:** Every screen section must present an unyielding sense of stability and institutional capacity.
*   **Data Over Emotion:** Design components are structured around concrete data points (e.g., production capacity timelines, delivery windows, and certified test metrics) rather than exaggerated marketing taglines.
*   **Professional Calm:** The interface avoids neon color states, erratic scroll interactions, or intrusive decorative animations. Transitions are fast, smooth, and predictable.

---

## 🧭 4. User Experience (UX) & Accessibility

*   **Frictionless Information Architecture:** B2B buyers browse with intent. Deep technical content (such as Box Crush Test or Edge Crush Test specifications) must be organized into clear tables, responsive tabs, or expandable accordions rather than buried inside lengthy paragraphs.
*   **Persistent Navigation Utility:** The global navigation header must remain cleanly visible or accessible to ensure direct pathways to immediate contact utilities or quote forms.
*   **WCAG Contrast Accessibility:** All interactive states, text layers, and button layouts must comfortably pass a minimum **4.5:1 contrast ratio** (WCAG AA standard). Ensure that the Muted Industrial Gray (`#939598`) is never used for small body font sizes against white backgrounds.
*   **CTA Priority:** Primary conversion points (e.g., *"Request a Technical Quote"*) must clearly stand out via the Kraft Brown accent background, while secondary elements utilize clean outline/ghost style treatments.

---

## 🔄 5. Consistency Guidelines

To prevent design drift across internal pages, follow these rigid UI development rules:

1.  **Component Uniformity:** A button layout, input element form field, or data grid used on the homepage must retain identical padding, border weights, and hover effects on all deep sub-pages.
2.  **Strict Spacing Grids:** Implement a systematic, predictable spacing scale (e.g., multiples of 4px/8px) across all section margins, paddings, and column gap declarations to preserve strict grid alignments.
3.  **Section Alternation:** Break up long vertical layouts by alternating between crisp white content blocks and very light neutral tones, utilizing dark sections strictly for full footers or high-impact technical banners.
4.  **Universal Footer State:** The footer layout must remain structurally identical on every single route, serving as the permanent architectural base of the digital asset.