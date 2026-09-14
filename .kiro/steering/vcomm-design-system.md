# VCOMM Lighting Design System

**Inclusion:** auto  
**Name:** VCOMM Design System & Theme Standards  
**Description:** Design system guidelines for VCOMM Lighting website - enforces consistent theme, fonts, typography, colors, and spacing across all components.

---

## Overview

This design system ensures a unified, professional appearance across the VCOMM Lighting website. All components must follow these standards to maintain consistency.

---

## 🎨 Color System

### Core Colors (CSS Variables)
All colors are defined in `app/globals.css` and automatically adapt to light/dark mode.

#### Light Mode (Default)
- **Background**: `#ffffff` (Pure White)
- **Foreground**: `#1f2937` (Dark Grey Text)

#### Dark Mode
- **Background**: `#0a0e27` (Very Dark Blue)
- **Foreground**: `#e0e0e0` (Light Text)

### Brand Colors

#### Primary Neon Colors
```css
--neon-blue:    Light Mode: #1e40af | Dark Mode: #60a5fa
--neon-pink:    Light Mode: #dc2626 | Dark Mode: #f87171
--neon-green:   Light Mode: #059669 | Dark Mode: #34d399
--neon-yellow:  Light Mode: #d97706 | Dark Mode: #fbbf24
```

**Usage in Tailwind:**
- `text-neon-blue`, `bg-neon-blue`, `border-neon-blue`
- `text-neon-pink`, `bg-neon-pink`, `border-neon-pink`
- `text-neon-green`, `bg-neon-green`, `border-neon-green`
- `text-neon-yellow`, `bg-neon-yellow`, `border-neon-yellow`

#### Secondary Brand Colors
```css
--teal:         Light Mode: #006666 | Dark Mode: #003333     (Footer, Secondary)
--teal-light:   Light Mode: #00a3a3 | Dark Mode: #005555     (Hover states)
--navy-dark:    Light Mode: #0c2340 | Dark Mode: #1e3a5f     (Headers, CTA)
```

**Usage in Tailwind:**
- `bg-teal`, `text-teal`, `border-teal`
- `text-navy-dark`, `bg-navy-dark`

#### Neutral Grays
```css
--text-primary:      Light Mode: #1f2937 | Dark Mode: #e0e0e0
--text-secondary:    Light Mode: #6b7280 | Dark Mode: #a3a3a3
--text-tertiary:     Light Mode: #9ca3af | Dark Mode: #737373
--border-light:      Light Mode: #e5e7eb | Dark Mode: #374151
--border-default:    Light Mode: #d1d5db | Dark Mode: #4b5563
--bg-light:          Light Mode: #f9fafb | Dark Mode: #1a1f3a
--bg-lighter:        Light Mode: #f3f4f6 | Dark Mode: #242d4a
```

### Color Usage Guidelines

✅ **DO:**
- Use CSS variable utilities in all components: `text-neon-green`, `bg-navy-dark`, `border-neon-blue`
- Use semantic color names for better maintainability
- Check `globals.css` for available colors before hardcoding

❌ **DO NOT:**
- Hardcode hex colors like `bg-[#15803d]` or `text-[#FFA500]`
- Use arbitrary Tailwind colors outside the design system
- Mix CSS variable colors with hardcoded hex values in the same component

### Dark Mode Support

All components automatically support dark mode through the color variables. Ensure you:
- Test components in both light and dark modes
- Use CSS variable colors that adapt to the current theme
- Avoid hardcoded hex values that won't respect theme changes

---

## 🔤 Typography System

### Font Stack
**Primary Font:** Geist Sans (from Next.js `next/font/google`)  
**Mono Font:** Geist Mono (for code blocks)

```css
--font-geist-sans:  Geist Sans (loaded in app/layout.tsx)
--font-geist-mono:  Geist Mono (loaded in app/layout.tsx)
```

✅ **DO:**
- All text automatically uses Geist Sans (set in `body` font-family)
- No need to import or specify fonts per component

❌ **DO NOT:**
- ~~Import Prompt or Montserrat fonts~~ (removed)
- Use `font-thai` or `font-eng` classes (deprecated)
- Load fonts at component level (centralizes at root layout)

### Typography Utilities

#### Headings
```css
.heading-h1    /* 3rem → 3.75rem | font-weight: 800 | text-neon-blue */
.heading-h2    /* 2.25rem → 3rem | font-weight: 700 | text-primary */
.heading-h3    /* 1.875rem | font-weight: 600 | text-primary */
.heading-h4    /* 1.5rem | font-weight: 600 | text-primary */
```

**Usage in JSX:**
```tsx
<h1 className="heading-h1">Main Title</h1>
<h2 className="heading-h2">Section Title</h2>
<h3 className="heading-h3">Subsection</h3>
```

#### Body Text
```css
.text-subtitle   /* 1.25rem | font-weight: 500 | text-secondary */
.text-body       /* 1rem | font-weight: 400 | text-primary */
.text-body-sm    /* 0.875rem | font-weight: 400 | text-secondary */
.text-caption    /* 0.75rem | font-weight: 500 | text-tertiary | letter-spacing: 0.025em */
```

**Usage in JSX:**
```tsx
<p className="text-body">Regular paragraph text</p>
<span className="text-caption">Small caption or label</span>
```

#### Legacy Compatibility
```css
.page-title      /* heading-h1 + subtle text-shadow */
.section-title   /* heading-h2 + bottom border */
.body-text       /* text-body (for backward compatibility) */
```

### Typography Guidelines

✅ **DO:**
- Use `.heading-h1`, `.heading-h2` for page titles and section titles
- Use `.text-body` for body paragraphs
- Combine utilities: `<p className="text-body text-neon-green">`

❌ **DO NOT:**
- Hardcode `font-size`, `font-weight`, `line-height` inline
- Mix typography utilities inconsistently across similar elements
- Use arbitrary Tailwind font sizes like `text-[23px]`

### Responsive Typography
Typography scales responsively at breakpoints:
- **Mobile** (default): heading-h1 = `3rem`
- **Tablet** (md): heading-h1 = `3.75rem`

---

## 📐 Spacing & Layout

### Standard Spacing Patterns
```css
Container max-width:  max-w-7xl (80rem)
Padding horizontal:   px-4 sm:px-6 lg:px-8
Padding vertical:     py-12 md:py-16 lg:py-24
Gap between sections: gap-6 md:gap-8 lg:gap-10
```

### Common Layout Patterns

**Hero Section:**
```tsx
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
```

**Grid Layouts:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**Cards:**
```tsx
<article className="rounded-lg border border-gray-200 p-6 shadow-sm">
```

---

## 🎯 Component Standards

### Buttons
```tsx
// Primary Button (CTAs)
<button className="bg-neon-green hover:bg-neon-green text-white px-6 py-2.5 rounded font-semibold transition">
  ขอใบเสนอราคา
</button>

// Secondary Button
<button className="border border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue hover:text-white px-6 py-2.5 rounded transition">
  นัดหมาย
</button>
```

### Form Inputs
```tsx
<input 
  type="text"
  className="border border-border-default bg-bg-light text-text-primary px-3 py-2 rounded outline-none focus:border-neon-green"
/>
```

### Cards & Containers
```tsx
<div className="rounded-lg border border-border-light bg-white dark:bg-bg-light p-6 shadow-sm hover:shadow-md transition">
  {/* Content */}
</div>
```

### Modals
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
  <div className="relative max-w-md rounded-xl border border-neon-green/40 bg-navy-dark p-6 shadow-2xl">
    {/* Content */}
  </div>
</div>
```

---

## 🌙 Dark Mode Implementation

### Automatic Theme Support
All components automatically support dark mode through CSS variables. No extra work needed!

```tsx
// ❌ DON'T do this (hardcoded):
<div className="bg-white dark:bg-[#0a0e27]">

// ✅ DO this (uses CSS variables):
<div className="bg-background text-foreground">
```

### Testing Dark Mode
1. Check theme toggle in Header
2. Verify all elements are visible in both modes
3. Ensure sufficient contrast for accessibility
4. Test hover states in both light and dark modes

---

## 📋 Checklist for New Components

When creating a new component, ensure:

- [ ] Use CSS variable colors (no hardcoded hex values)
- [ ] Use typography utilities (`.heading-h2`, `.text-body`, etc.)
- [ ] Follow standard spacing patterns (`px-4 sm:px-6 lg:px-8`)
- [ ] Support dark mode automatically via CSS variables
- [ ] Test component in both light and dark modes
- [ ] Follow naming conventions (PascalCase for components)
- [ ] Use Geist fonts (no custom font imports)
- [ ] Document any custom styles in inline comments
- [ ] Ensure responsive design on mobile, tablet, desktop

---

## 📁 Key Files Reference

- **Color & Typography Definitions**: `app/globals.css`
- **Theme Provider Setup**: `app/layout.tsx`
- **Root Layout Provider**: `components/RootLayoutProvider.tsx`
- **Header Component**: `components/Header.tsx`
- **Footer Component**: `components/Footer.tsx`

---

## 🔗 Related Resources

- Next.js `next/font`: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Tailwind CSS: https://tailwindcss.com/docs
- next-themes: https://github.com/pacocoursey/next-themes
- Design Tokens: See `app/globals.css` `:root` and `.dark` sections

---

## ⚠️ Common Mistakes to Avoid

1. **Hardcoding Colors**: Use `text-neon-green` instead of `text-[#34d399]`
2. **Importing Custom Fonts**: All fonts are centralized in `app/layout.tsx`
3. **Inconsistent Typography**: Use `.heading-h2` instead of `text-3xl font-bold`
4. **Breaking Dark Mode**: Use CSS variables instead of arbitrary hex values
5. **Mixing Color Systems**: Don't mix Tailwind colors with CSS variables in same component

---

## ✨ Version Control

**Last Updated**: September 2026  
**Design System Version**: 1.0  
**Maintained By**: VCOMM Development Team

---

## 📞 Questions?

Refer to this design system guide when:
- Creating new components
- Updating existing components
- Fixing styling issues
- Adding new colors or typography
- Testing theme switching (light/dark mode)

**Always prioritize consistency over customization.**
