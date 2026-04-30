# Price Component Design Spec

**Date:** 2026-04-29  
**Topic:** Universal Price Representation  
**Status:** Approved

## 1. Goal
Provide a consistent, serious, and highly readable representation of currency (Cordobas C$) across the DentMatch application. The component must stand out without being visually "noisy" or "playful," adhering to institutional standards.

## 2. Requirements
- **Currency:** Prefix with `C$`.
- **Integer Part:** Bold, high contrast (`raw-gray-900`), primary focus.
- **Decimal Part:** Smaller (`0.75em`), italicized (cursive feel), lower contrast (`raw-gray-600`).
- **Alignment:** Use `tabular-nums` to ensure vertical alignment of digits in lists/tables.
- **Responsive:** Sizing should scale based on parent context (e.g., small in lists, large in details).

## 3. Architecture & Components

### `Price` (Component)
- **Location:** `src/components/common/Price/Price.tsx`
- **Props:**
  - `amount: number` (required)
  - `currency?: string` (default: `C$`)
  - `size?: 'sm' | 'md' | 'lg'` (default: `md`)
  - `className?: string`

### Implementation Logic
1. Split `amount` into integer and decimal strings.
2. Render three distinct spans for prefix, integer, and decimal.
3. Apply `Price.css` styles for typography and hierarchy.

## 4. Styling (BEM)
- `.price`: Base container (flex, baseline alignment).
- `.price__currency`: `C$` prefix.
- `.price__integer`: Main digits (bold).
- `.price__decimals`: Fractional part (small, italic).

## 5. Testing Strategy
- Verify decimal formatting (rounding to 2 places).
- Verify alignment with different lengths (e.g., 10 vs 10,000).
- Check contrast against light/dark themes.
