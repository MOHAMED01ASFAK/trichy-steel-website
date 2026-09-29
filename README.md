# Trichy Steel Corporate Website Demo

This project is a frontend-only corporate website for a steel and construction-materials business. It is built as a polished demo for visual presentation, product marketing, branch discovery, contact, and enquiry flow.

## Project purpose

The site is designed to help a business owner understand how a modern industrial website can present:

- product categories and technical material information
- multiple branch locations
- enquiry and quotation requests
- gallery and project presentation
- professional digital positioning for a steel and construction brand

## Image replacement plan

All image sources are centralized in `src/data/images.js` so real Trichy Steel photography can be swapped in later with minimal disruption.

Recommended upload flow:
1. Add real branch, warehouse, project, and product photos to `src/assets/` or a future media folder.
2. Replace each URL in `src/data/images.js`.
3. Keep the same keys and structure so the UI continues to render correctly.

## Placeholder content

The current demo intentionally uses clearly marked placeholder copy where official business facts are unknown. These should be replaced later with verified details provided by the business owner.

## Stack

- React
- Vite
- React Router
- Lucide React
- @fontsource packages
- Custom CSS

## Development

```bash
npm install
npm run dev
npm run build
```
