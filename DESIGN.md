# Design System Document: The Botanical Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Glasshouse"**

This design system moves away from the rigid, boxed-in constraints of traditional e-commerce. Instead, it treats the interface as a high-end editorial spread—think *Vogue* meets an artisanal botanical garden. We achieve a "fresh, premium feel" not through lines and borders, but through the mastery of **Negative Space** and **Organic Layering**.

The brand identity is expressed as **FlowerShop**—a single-word editorial marquee that balances luxury with botanical warmth. The goal is to evoke the scent of fresh eucalyptus and the softness of a petal. We break the "template" look by using intentional asymmetry, where high-scale Noto Serif headings overlap soft-colored containers, and products are treated as art pieces rather than just inventory items.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule

The palette is a sophisticated interplay of organic sage, blush, and deep emerald. We use color to define structure, never lines.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections or cards. Boundaries must be defined solely through background shifts.
* **Surface Hierarchy:** A card (`surface-container-lowest`) sits on a section (`surface-container-low`), which sits on the main page (`background`). This creates a soft, natural "lift" that feels expensive and intentional.
* **The Glass & Gradient Rule:** For hero sections and primary CTAs, use subtle gradients transitioning from `primary` (#2b6954) to `primary_container` (#a6e5cb). For floating navigation or product filters, apply **Glassmorphism**: use `surface_container_lowest` at 70% opacity with a `20px` backdrop blur.

### Color Roles
* **Primary (#2b6954):** The Deep Emerald. Used for high-impact actions and signature branding.
* **Secondary (#566342):** The Sage Green. Used for secondary UI elements and "natural" accents.
* **Tertiary (#715953):** The Blush Pink/Dusty Rose. Used for highlights, promotional tags, or soft "human" touches.
* **Background (#fbf9f5):** The Cream. This is your canvas. It is warmer than pure white, providing a "fine paper" texture.

---

## 3. Typography: The Editorial Scale

We pair the authoritative weight of **Noto Serif** with the modern, approachable clarity of **Manrope**.

* **Display (L/M/S):** Noto Serif. Used for "Hero" moments and large editorial pull-quotes. Set these with tight letter-spacing (-2%) to feel bespoke.
* **Headlines (L/M/S):** Noto Serif. These are your "Chapter Titles." Use `on_surface` color to maintain authority.
* **Titles & Body:** Manrope. Use `title-lg` for product names. Use `body-md` for descriptions. The sans-serif nature provides a clean "scientific" contrast to the organic serif headers.
* **Labels:** Manrope. Use for metadata (e.g., "Seasonality," "Care Instructions"). Always uppercase with `0.05rem` letter spacing for a premium feel.

---

## 4. Elevation & Depth: The Layering Principle

Forget traditional shadows. We create depth through **Tonal Layering** and **Ambient Light**.

* **The Layering Principle:** Stack your containers.
* *Level 0:* `background` (#fbf9f5)
* *Level 1:* `surface_container_low` (#f5f3ef) for large section backgrounds.
* *Level 2:* `surface_container_lowest` (#ffffff) for cards or interactive elements.
* **Ambient Shadows:** If a card requires a float (e.g., a hover state), use a shadow with a `32px` blur, `0%` spread, and `6%` opacity of the `on_surface` color. It should look like a soft glow, not a dark smudge.
* **The "Ghost Border" Fallback:** If accessibility requires a border (e.g., input fields), use `outline_variant` at **20% opacity**. It should be barely visible—a suggestion of a boundary rather than a hard wall.

---

## 5. Components: Softness & Intention

### Buttons
* **Primary:** `primary` background with `on_primary` text. Use `rounded-full` (9999px) for a "pebble" feel.
* **Secondary:** `surface_container_highest` background. No border.
* **Tertiary:** No background. Underlined with a `2px` stroke of `tertiary_fixed` offset by `4px`.

### Cards & Lists
* **Card Style:** Use `rounded-xl` (1.5rem) for product cards.
* **Spacing:** Use `spacing-8` (2.75rem) between cards to give products "room to breathe."
* **The Divider Rule:** Forbid 1px horizontal dividers. Use `spacing-4` (1.4rem) of vertical white space to separate content, or a subtle shift from `surface` to `surface_container`.

### Input Fields
* **Style:** Minimalist. Use `surface_container_low` background with `rounded-md`. The label should be `label-md` in `on_surface_variant`. Avoid boxes; use a soft-pill shape.

### Signature Component: The "Floral Petal" Chip
* **Usage:** For flower types or "In Stock" tags.
* **Style:** Use `tertiary_container` with a `rounded-full` shape and `label-sm` text. It should feel like a small petal dropped on the page.

---

## 6. Do's and Don'ts

### Do
* **Do** use asymmetrical layouts. Let a product image bleed off the edge of the grid.
* **Do** use high-quality photography with natural lighting. The UI is designed to frame the flowers, not compete with them.
* **Do** use `spacing-16` or `spacing-20` for major section breaks to evoke luxury through "wasted" space.

### Don't
* **Don't** use pure black (#000000). Use `on_surface` (#1b1c1a) for better tonal harmony.
* **Don't** use sharp corners. Everything must feel "pruned" and soft (minimum `rounded-sm`).
* **Don't** use standard "Drop Shadows." If it looks like a default Material Design shadow, it is wrong. It must be ambient and diffused.
* **Don't** crowd the interface. If in doubt, add more white space (`spacing-12` or higher).

---

## 7. Spacing & Grid

This system relies on the **Golden Ratio** of spacing.
* **Grid:** 12-column with large `8.5rem` (spacing-24) margins on desktop to center the content like a premium magazine.
* **Vertical Rhythm:** Use `spacing-6` for related items and `spacing-16` for unrelated sections. The "breathability" is what justifies the premium price point of the products.