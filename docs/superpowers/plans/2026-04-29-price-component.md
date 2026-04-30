# Price Component Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a universal Price component for C$ currency with bold integers and small italicized decimals.

**Architecture:** A reusable functional React component that splits numeric values into integer and decimal parts for distinct styling.

**Tech Stack:** React, TypeScript, Vanilla CSS (BEM).

---

### Task 1: Create Price Component Structure

**Files:**
- Create: `frontend/src/components/common/Price/Price.tsx`
- Create: `frontend/src/components/common/Price/Price.css`

- [ ] **Step 1: Create Price.tsx with basic props**

```tsx
import React from 'react';
import './Price.css';

interface PriceProps {
  amount: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Price: React.FC<PriceProps> = ({ 
  amount, 
  currency = 'C$', 
  size = 'md',
  className = ''
}) => {
  const integerPart = Math.floor(amount).toLocaleString();
  const decimalPart = (amount % 1).toFixed(2).substring(1);

  return (
    <div className={`price price--${size} ${className}`}>
      <span className="price__currency">{currency}</span>
      <span className="price__integer">{integerPart}</span>
      <span className="price__decimals">{decimalPart}</span>
    </div>
  );
};

export default Price;
```

- [ ] **Step 2: Create Price.css with base styles**

```css
.price {
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  font-family: var(--font-family-base);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.price__currency {
  font-size: 0.85em;
  color: var(--text-secondary);
  margin-right: 2px;
}

.price__integer {
  font-weight: 700;
  color: var(--text-primary);
}

.price__decimals {
  font-size: 0.75em;
  font-style: italic;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Sizes */
.price--sm { font-size: var(--font-size-sm); }
.price--md { font-size: var(--font-size-base); }
.price--lg { font-size: var(--font-size-xl); }
```

- [ ] **Step 3: Commit**

```bash
git add frontend/src/components/common/Price/
git commit -m "feat: add Price component structure and styles"
```

---

### Task 2: Refactor Patient Dashboard to use Price component

**Files:**
- Modify: `frontend/src/pages/Patient/PatientDashboard.tsx`
- Modify: `frontend/src/pages/Patient/PatientDashboard.css`

- [ ] **Step 1: Update PatientDashboard.tsx imports and usage**

```tsx
// Add import
import Price from '../../components/common/Price/Price';

// Replace in Grid
<Price amount={proc.price} size="md" className="procedure-card__price" />

// Replace in Modal
<span>Precio estimado: <Price amount={selectedProc.price} size="lg" /></span>
```

- [ ] **Step 2: Cleanup PatientDashboard.css**

```css
/* Remove or update old price styles */
.procedure-card__price {
  /* margin-right or specific layout if needed */
}
```

- [ ] **Step 3: Verify and Commit**

```bash
git add frontend/src/pages/Patient/PatientDashboard.tsx frontend/src/pages/Patient/PatientDashboard.css
git commit -m "refactor: use Price component in PatientDashboard"
```
