# DentGO Engineering Standards & Best Practices

## 📱 Mobile-First Design
- **Core Principle:** Design for the smallest screen first, then enhance for desktop.
- **Touch Targets:** Minimum 44x44px for all interactive elements to ensure fat-finger safety.
- **Typography:** Minimum 16px font size for inputs to prevent automatic iOS zoom.
- **Adaptive Patterns:** Use "Bottom Sheets" for modals on mobile and centered dialogs on desktop.
- **Layout:** Prefer Flexbox and Grid. Use `100vw` and `100dvh` for full-screen containers.

## 🎨 CSS & Styling (BEM + Tokens)
- **Methodology:** Use BEM (Block Element Modifier). Example: `.card`, `.card__title`, `.card--active`.
- **Tokens:** Always use CSS Variables from `variables.css` for colors, spacing, and shadows.
- **Isolation:** One CSS file per component. Avoid global styles unless absolutely necessary.
- **Animations:** Use `transform` and `opacity` for performance-friendly transitions. Avoid layout-shifting animations (e.g., animating `height` or `top`).

## 🏗️ Component Architecture
- **Composition:** Prefer composition over complex props.
- **Atomic Focus:** Components should be small and single-purpose.
- **Consistency:** Use the latest version of common components (`Button`, `Card`, `Input`, `Select`, `Modal`) instead of native HTML equivalents.
- **Interactive Areas:** On mobile, prefer making the entire parent container (like a `Card`) clickable rather than small nested buttons.

## ⚡ Performance & PWA
- **Lazy Loading:** All pages must be lazy-loaded using `React.lazy` and `Suspense`.
- **Offline-First:** All static assets must be cached via Service Worker (Vite PWA Plugin).
- **Bundle Size:** Minimize dependencies. Verify build size periodically.
- **Image Optimization:** Use modern formats (WebP/SVG) and provide explicit dimensions.

## ♿ Accessibility (a11y)
- **Semantic HTML:** Use `<header>`, `<main>`, `<nav>`, `<aside>`, `<button>`, and `<a>` appropriately.
- **Focus States:** Never remove focus outlines without providing a visible alternative.
- **ARIA:** Use `aria-label` for icon-only buttons.
- **Contrast:** Ensure all text meets WCAG AA contrast standards (Institutional Blue on Gray-100 is safe).

## 🛠️ Development Workflow
- **Clean Build:** The project must build without errors or warnings at all times.
- **Mock-Driven:** Use mocks in `services/mocks` for UI development until backend integration.
- **Verification:** Test every component in the `/dev` gallery before deploying to feature pages.
- **Typing:** Use TypeScript `interface` or `type` for all data structures and component props.
