# UI Design System: Karton Works Factory

Use this strict color palette and structural framework to design and code the website. The color system is extracted directly from the company logo to maintain brand identity.

---

## 🎨 Color Palette Reference

| Palette Role | Hex Code | Purpose / Feeling |
| :--- | :--- | :--- |
| **Primary Brand** | `#C6934B` | Kraft Cardboard Brown (Eco-friendly, industrial) |
| **Secondary Base** | `#231F20` | Deep Charcoal / Off-Black (Professional, clean) |
| **Accent / Neutral**| `#939598` | Muted Structural Gray (Balance, metadata) |
| **Canvas Base** | `#FFFFFF` | Pure White (Main backgrounds, crisp contrast) |

---

## 🌐 UI Application Rules (60-30-10 Rule)

Apply the colors across the user interface using the following structural distribution:

### 1. Backgrounds & Structure (60%)
*   **Main Body Background:** Use `#FFFFFF` (or a very soft off-white `#FDFBF7`) for content areas to ensure maximum readability.
*   **Footer Background:** Use the Deep Charcoal `#231F20` to visually ground the site. Text in the footer must be white or light gray.
*   **Section Dividers:** Use a very faint tint of the brown or light gray to separate layout blocks.

### 2. Typography & Navigation (30%)
*   **Headings (H1, H2, H3):** Always use Deep Charcoal `#231F20` for a strong, premium editorial feel. Do not use pure `#000000`.
*   **Body Text:** Use Deep Charcoal `#231F20` at 90% opacity, or Muted Gray `#939598` for sub-text and captions.
*   **Navigation Links:** Default state is `#231F20`. Hover state transitions smoothly to Kraft Brown `#C6934B`.

### 3. Interactive Elements & Accents (10%)
*   **Primary CTA Buttons:** Use Kraft Brown `#C6934B` as the background color with white text. This applies to high-value actions (e.g., "Request a Quote", "Contact Us").
*   **Secondary Buttons:** Use an outline (ghost) style with a `#231F20` or `#939598` border.
*   **Icons & Highlights:** Use Kraft Brown `#C6934B` for feature icons, active navigation states, and text highlights.

---

## 🚀 AI Implementation Instruction
When generating HTML, CSS, or Tailwind configurations, strictly map these hex codes to their designated roles. Ensure all background-to-text layer combinations pass WCAG AA contrast requirements.