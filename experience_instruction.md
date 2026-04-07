# Experience Section Layout Refactor Guide

## Goal

Refactor the Experience timeline layout to:

- Preserve chronological order:  
  Left (latest) → Right → Left → Right → … → Oldest
- Reduce wasted vertical space
- Avoid reserving empty columns
- Make left/right columns stack independently
- Keep center timeline (line + dots)

Target style: Two-column staggered timeline with independent vertical flow.

---

## Current Problem

The current layout uses:

- flex-row / flex-row-reverse
- w-1/2 spacers
- One item per row

This causes:

- Each experience item occupies a full row
- The opposite side is always reserved
- Large vertical gaps appear when one card is taller
- Space is wasted

Root cause:
Each item is rendered as a full-width row.

---

## New Layout Strategy

Switch from row-based layout to column-based layout.

Key Concept:

- Left column: items with even index (0, 2, 4, ...)
- Right column: items with odd index (1, 3, 5, ...)
- Each column stacks vertically on its own
- No shared row height

---

## Step 1: Split Items into Two Columns

In the Astro component:

const leftItems = items.filter((_, i) => i % 2 === 0);
const rightItems = items.filter((_, i) => i % 2 === 1);

---

## Step 2: Replace Row Layout with Grid Layout

Use:

grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12

---

## Step 3: Remove Spacer Elements

Delete:

hidden md:block w-1/2

---

## Step 4: Card Width Control

Use:

w-full max-w-xl

---

## Step 5: Keep Center Timeline Line

Use absolute positioned center line.

---

## Step 6: Dot Positioning

Each card wrapper should be relative.
Dot should align at 50% width.

---

## Step 7: Optional Connector Line

Add horizontal connectors to center line.

---

## Step 8: Preserve Chronological Readability

Add index labels or highlight dates.

---

## Step 9: Mobile Layout

Use grid-cols-1 md:grid-cols-2.

---

## Final Structure Overview

Container
 ├── Center Line
 └── Grid (2 columns)
      ├── Left Column
      └── Right Column

---

## Expected Result

- No empty half rows
- Compact stacking
- Clean timeline
- Better space usage

---

## Implementation Checklist

- No spacers
- No row wrappers
- Items split
- Grid active
- Mobile works