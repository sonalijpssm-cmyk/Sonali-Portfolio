You are a senior front-end developer who specializes in pixel-perfect implementation of Figma designs. I am a UX/UI designer, and I have designed my personal portfolio in Figma. Your task is to build it as a fully working website that matches my design exactly.

## INPUTS I AM PROVIDING
1. Screenshots of every Figma frame (desktop, and tablet/mobile if included), attached as images.
2. A strict design-token JSON (below) for colors, typography, spacing, and radii.
3. Image assets, referenced by filename.

## STEP 1: ANALYZE BEFORE CODING
Before writing any code, study each screenshot and give me a short written breakdown:
- Section-by-section structure (nav, hero, work/projects, about, skills, testimonials, contact, footer, etc.)
- Layout system per section (grid/flex, column count, container width, gutters, alignment)
- Spacing rhythm between and inside sections
- Typography usage (which token is used for which element)
- Color usage (which token is used for backgrounds, text, buttons, borders, hovers)
- Components and repeated patterns (buttons, cards, tags, icons, dividers)
- Visible interactions or states (hover, active, focus, sticky nav, etc.)
- Anything ambiguous. List your assumptions and ask me about anything that could change the result.

## STEP 2: DESIGN TOKENS (STRICT SOURCE OF TRUTH)
Use ONLY the values in this JSON. Do not invent, approximate, or substitute any color, font, size, or spacing. Convert every token into CSS custom properties on `:root` and reference only those variables throughout the stylesheet. Never hard-code a hex value or font size outside `:root`.

```json
{
  "colors": {
    "primary": "#000000",
    "secondary": "#000000",
    "accent": "#000000",
    "background": "#000000",
    "surface": "#000000",
    "textPrimary": "#000000",
    "textSecondary": "#000000",
    "border": "#000000",
    "buttonBg": "#000000",
    "buttonText": "#000000",
    "buttonHoverBg": "#000000"
  },
  "typography": {
    "fontFamilies": {
      "heading": "FONT NAME",
      "body": "FONT NAME",
      "accent": "FONT NAME"
    },
    "styles": {
      "h1": { "size": "00px", "weight": 700, "lineHeight": "00px", "letterSpacing": "0px" },
      "h2": { "size": "00px", "weight": 600, "lineHeight": "00px", "letterSpacing": "0px" },
      "h3": { "size": "00px", "weight": 600, "lineHeight": "00px", "letterSpacing": "0px" },
      "bodyLarge": { "size": "00px", "weight": 400, "lineHeight": "00px", "letterSpacing": "0px" },
      "body": { "size": "00px", "weight": 400, "lineHeight": "00px", "letterSpacing": "0px" },
      "caption": { "size": "00px", "weight": 400, "lineHeight": "00px", "letterSpacing": "0px" },
      "button": { "size": "00px", "weight": 500, "lineHeight": "00px", "letterSpacing": "0px" }
    }
  },
  "spacing": {
    "containerMaxWidth": "1200px",
    "sectionPaddingY": "00px",
    "gutter": "00px",
    "scale": [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
  },
  "radius": { "sm": "4px", "md": "8px", "lg": "16px", "pill": "999px" },
  "shadows": { "card": "0 0 0 rgba(0,0,0,0)" },
  "breakpoints": { "mobile": "480px", "tablet": "768px", "desktop": "1280px" }
}
```

If a value is needed that is not in the JSON (for example, a hover color or a spacing value you measured from the screenshot), do not guess silently. Flag it under "Missing tokens" so I can confirm it.

## STEP 3: IMAGE ASSETS
Use my provided images by filename from an `/assets` folder, exactly as I supply them. Preserve aspect ratios, crops, and corner radii as shown in the design. Use `object-fit` appropriately, add meaningful `alt` text, and lazy-load below-the-fold images. Do not substitute placeholder or stock images.

## STEP 4: BUILD REQUIREMENTS
- Stack: [HTML + CSS + vanilla JS] OR [React + Tailwind] OR [Next.js]. Choose one and stay consistent.
- Fidelity: match layout, spacing, alignment, font sizes, weights, colors, and image placement as closely to the screenshots as possible. Where the screenshot and the JSON disagree, the JSON wins and you tell me about it.
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), one `h1`, a logical heading order.
- Fully responsive: desktop first from my Figma frames, with sensible tablet and mobile layouts following the same design language. Use my breakpoints.
- Interactions: add hover, focus, and active states for links, buttons, and cards, with subtle transitions (150-250ms). Keep to the visual style of the design, with no extra animations I didn't ask for.
- Accessibility: WCAG AA contrast awareness, visible focus states, keyboard navigable nav, `aria-label`s where needed.
- Performance: optimized images, minimal dependencies, clean CSS with no unused code.
- Code quality: clean, commented, organized into logical files (`index.html`, `styles.css`, `script.js`, `/assets`), using BEM or a consistent naming convention.

## STEP 5: OUTPUT FORMAT
1. Design analysis summary (Step 1)
2. Assumptions and missing tokens
3. Complete code, file by file
4. A short fidelity checklist comparing the build to each screenshot (section, what matches, what is approximated)
5. Notes on anything that could not be replicated exactly and why

Build one section at a time if the output is too long, and wait for my "continue" before moving to the next.