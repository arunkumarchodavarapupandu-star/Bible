# Little Lights Bible Stories

A free, kid-friendly Bible story website for children ages 4–8. Static HTML/CSS/JS — no build step, no dependencies.

## How to run it

**Option 1 — simplest:** double-click `index.html`.

**Option 2 — local server (recommended):**

```powershell
npx serve .
```

or

```powershell
npx http-server -p 8080
```

Then open the URL it prints (usually `http://localhost:3000`).

## What's inside

| File | Purpose |
|---|---|
| `index.html` | Home page — hero, searchable story library, categories, verse of the day |
| `story.html` | Story reader — reads `?id=story-id` from the URL |
| `css/styles.css` | Full design system (responsive, print styles, reduced-motion support) |
| `js/stories-data.js` | **All 16 stories** + SVG story artwork icons |
| `js/app.js` | Home page logic: search, filter chips, favorites, categories |
| `js/quiz.js` | Short, accessible Bible story quiz |
| `js/story.js` | Reader: read-aloud, font size, progress bar, related stories |
| `js/ui.js` | Shared helpers: favorites (localStorage), toast, scroll reveal |
| `assets/favicon.svg` | Site icon |

## Features

- 16 stories (8 Old Testament, 8 New Testament) with summary, narrative, memory verse, lesson, discussion questions, and an activity
- **Listen-aloud** mode using the browser's Web Speech API
- **Search + theme filters** (Miracles, Courage, Kindness, Jesus…)
- **Favorites** saved in the browser (no account needed)
- **Interactive Bible quiz** with answer feedback and a final score
- **Print-friendly** story handouts
- Reading progress bar, bigger-text toggle, share button
- Fully responsive, accessible (skip links, ARIA, keyboard focus), SEO meta tags

## Adding a new story

Open `js/stories-data.js` and copy any story object in the `STORIES` array. Fill in:

```js
{
  id: "unique-url-id",
  title: "Story Title",
  testament: "Old Testament" | "New Testament",
  category: "Miracles",
  icon: "fish",                 // key from ICONS at top of file
  colors: ["#60A5FA", "#2563EB"], // card gradient
  minutes: 4,
  age: "4–8",
  ref: "Jonah 1–4",
  verse: "Memory verse text.",
  verseRef: "Jonah 2:1",
  summary: "One-line summary.",
  body: ["Paragraph 1.", "Paragraph 2."],
  lesson: "The takeaway for kids.",
  questions: ["Q1?", "Q2?", "Q3?"],
  activity: "A craft or game idea."
}
```

Save the file and refresh — the new story appears on the home page automatically.

## Optional: a custom icon

Add a new key to the `ICONS` object (any simple 64×64 SVG) and use its name as `icon`.
