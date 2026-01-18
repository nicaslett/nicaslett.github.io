# Palette's Journal

## 2025-02-09 - Chat Widget Accessibility
**Learning:** Chat widgets often trap focus or fail to return it. Adding `role="dialog"` and managing focus return to the trigger button significantly improves keyboard navigation. Screen readers also benefit from `aria-live` on character counts.
**Action:** Always check focus return on togglable components and add `sr-only` feedback for async states.
