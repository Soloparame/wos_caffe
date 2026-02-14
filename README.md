# Woscaffe — Premium Ethiopian Coffee Website

A premium, modern, export-ready website for **Woscaffe**, reflecting Ethiopian heritage, premium quality, and a clean luxury aesthetic.

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (custom palette: cream, coffee brown, gold)
- **Framer Motion** (scroll and fade-in animations)
- **TypeScript**

## Design

- Layout and visual style follow the reference hero: cream/beige background, deep coffee brown text, warm gold accents, elegant serif (Cormorant Garamond) and clean sans (DM Sans).
- Sections: Hero (with stats bar), About, Coffee Collection (6 origins), Quality & Process, Packaging, Sustainability, Wholesale & Export, Brewing Guide, Contact.
- Fully responsive, mobile-first, with smooth scroll and soft fade-in effects.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Images

Copy your provided images into `public/assets/` with the names listed in **`public/assets/ASSETS_README.txt`**:

- **Hero:** Use your 2nd and 3rd images as `hero-cups-1.png` and `hero-cups-2.png`.
- **About:** e.g. coffee cherries / origin as `about-origin.png`.
- **Packaging:** Bag/packaging shot as `packaging.png`.
- **Coffee collection:** One image per origin (or reuse one bag) as `jimma.png`, `guji.png`, `wollega.png`, `dilla.png`, `bonga.png`, `gishen.png`.

If a file is missing, the UI shows a neutral placeholder so the site still runs.

## Build

```bash
npm run build
npm start
```

## Project structure

- `app/` — Layout, globals, homepage
- `components/` — Header, Hero, About, CoffeeCollection, QualityProcess, Packaging, Sustainability, WholesaleExport, BrewingGuide, Contact, Footer, ImageWithFallback
- `lib/` — `data.ts` (coffee list, brewing methods), `images.ts` (asset paths)
- `public/assets/` — Hero, about, packaging, and product images (see ASSETS_README.txt)

## Content

- Brand: **Woscaffe** — *From the Birthplace of Coffee to Your Cup*
- Six origins with slogans: Jimma, Guji, Wollega, Dilla, Bonga, Gishen
- About: Ethiopian origin story and Kaldi legend
- Quality: 100% Arabica, natural & washed, handpicked high-altitude
- Packaging: 250g, 500g, 1kg; private labeling
- Sustainability: direct farmer partnerships, ethical sourcing, community support
- Wholesale: bulk, green/roasted, export-ready, global distribution
- Brewing: Espresso, pour-over, French press, Ethiopian jebena
- Contact: form, email, phone, location, social links

---

*Confident, refined, heritage-driven, premium.*
