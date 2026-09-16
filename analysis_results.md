# Analysis: Web Technologies for Custom Cursor Implementation

Changing the mouse cursor is a common technique to enhance B2B website branding and create micro-interactive states. Below is an evaluation of the primary technical approaches, followed by a recommendation and code templates.

---

## 🛠️ Technical Options Comparison

### 1. Native CSS (`cursor: url()`)
The simplest method utilizes the standard CSS `cursor` property, loading external static images or SVGs.

*   **Syntax:**
    ```css
    .custom-cursor-element {
      cursor: url('/path-to-icon.svg') 16 16, auto;
    }
    ```
*   **Pros:**
    *   **Performance:** Executed directly by the browser rendering engine with zero JavaScript overhead. No movement lag or latency.
    *   **Simplicity:** Declarative, CSS-only implementation.
*   **Cons:**
    *   **Size Limits:** Most browsers restrict cursor images to `32x32` pixels (up to `128x128` is supported in some, but deprecated beyond `32x32` due to performance).
    *   **No Animation:** Native CSS cursors cannot run complex animations or transitions natively.
    *   **SVG Support:** Browser inconsistencies can arise when loading raw SVGs without explicit width/height declarations.

### 2. JavaScript Custom Cursor Follower (DOM Element)
Hiding the native system cursor and rendering a custom HTML element that tracks the coordinate position of the mouse pointer.

*   **Implementation Principle:**
    1.  Hide native cursor: `html, body { cursor: none; }`
    2.  Create a fixed-position container in the DOM: `<div id="custom-cursor"></div>`
    3.  Listen to `mousemove` events and update coordinates using CSS `transform: translate3d(x, y, 0)`.
*   **Pros:**
    *   **Complete Design Freedom:** The custom cursor can be any HTML/SVG/Canvas component, enabling rich hover transitions, sizing morphs, and particle effects.
    *   **Fluid Motion:** Can implement spring physics or easing (lagging effect) for a modern, organic sensation.
    *   **Dynamic States:** Easy state manipulation (e.g. changing color, opacity, size, or icon dynamically).
*   **Cons:**
    *   **Latency:** Can experience visual lag on low-refresh screens or heavy page loads because the element positioning is tied to the JS main thread.
    *   **Accessibility:** In rare cases, if JS crashes or fails, the user is left with no visible mouse cursor. A fallback must always be declared.

---

## 📦 Icon State Selection (Packing Box)

To implement the open/closed packaging box transition, we will utilize **two SVG graphics** matching the KWF brand guidelines.

*   **Default State (Closed Box):** Representing stability and storage.
*   **Interactive State (Open Box):** Shown when hovering over buttons, select boxes, links, or form fields (representing action and delivery).

| State | Box Icon SVG Path representation | Action Trigger |
| :--- | :--- | :--- |
| **Closed Box** | A geometric flat-topped square with corrugation lines. | Default `body` state |
| **Open Box** | A box showing open lid flaps extending outwards. | Hovering on `a, button, select, input` |

---

## 💻 Code Template (React + CSS/JS implementation)

Below is the recommended JavaScript-driven approach using React hooks for stateful cursor switching and smooth coordinate tracking.

```tsx
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Position tracking
    const updateCoordinates = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // 2. Global event listeners for hover state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCoordinates);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCoordinates);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {isHovered ? (
        // Open Box SVG
        <svg className="w-8 h-8 text-kwf-brown drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Box Bottom */}
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
          {/* Left Flap Open */}
          <path d="M12 2L2 7l10 5" />
          {/* Right Flap Open */}
          <path d="M12 2l10 5-10 5" />
          {/* Left Side flap */}
          <path d="M2 7v5" />
          {/* Right Side flap */}
          <path d="M22 7v5" />
          {/* Center seam */}
          <path d="M12 12v10" />
        </svg>
      ) : (
        // Closed Box SVG
        <svg className="w-8 h-8 text-kwf-charcoal drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Box Bottom & Sides */}
          <path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
          {/* Lid Lid top */}
          <path d="M22 5H2v3h20V5z" />
          {/* Center tape/corrugation stripe */}
          <path d="M12 5v15" />
        </svg>
      )}
    </div>
  );
}
```
