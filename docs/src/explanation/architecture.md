# Architecture

web-tools is a static site. There is no framework, no bundler and no server component: every tool is one HTML file with its own inline JavaScript, plus two shared assets.

## Repository layout

```
index.html          landing page with one card per tool
*.html              one page per tool
style.css           shared styles for the newer pages
toolkit.js          shared helpers (copy, download, debounce, flash)
json-locator.js     JSON pointer/path helpers used by schema-aware tools
README.md           tool table and development notes
docs/               this book (mdBook source)
.github/workflows/  GitHub Pages deployment
```

Thirty of the thirty-two pages link `style.css`; the tool pages that predate it carry their styles inline. The tools themselves are independent: opening `json.html` directly works, and nothing needs the landing page.

## Page anatomy

A typical tool page is:

1. a header with a `← all tools` link back to `index.html`;
2. an input pane and an output pane, side by side on wide screens and stacked on narrow ones;
3. a row of actions per pane (`Format`, `Swap`, `Clear`, `Copy output`, …);
4. inline JavaScript that wires the actions to pure functions over strings, JSON or canvas data.

State lives in the DOM or in `localStorage`; there is no application state object shared between pages.

## Shared helpers

`toolkit.js` exposes a small global `Toolkit`:

| Helper | Purpose |
| --- | --- |
| `Toolkit.escapeHtml(text)` | escape `&`, `<`, `>` |
| `Toolkit.copyText(text)` | clipboard write with a `execCommand` fallback |
| `Toolkit.download(blob, name)` | trigger a download via an object URL |
| `Toolkit.debounce(fn, ms)` | debounce for live inputs |
| `Toolkit.formatBytes(n)` | human-readable sizes |
| `Toolkit.flash(button, text)` | transient button label |

Libraries are loaded lazily: the JSONPath tools import JSONPath Plus only when a query runs, and the diagram renderer imports each engine on first use (see [How diagrams are rendered](diagram-pipeline.md)).

## Deployment

GitHub Pages serves the repository root. The `Deploy to GitHub Pages` workflow runs on every push to `main`:

1. checks out the repository;
2. installs mdBook and builds this book into `_site/docs`;
3. copies the static site into `_site`;
4. uploads `_site` as the Pages artifact and deploys it.

The site and the book are therefore published together, at `/` and `/docs/` respectively. Raw Markdown sources under `docs/` are not part of the artifact.

## Why no build step

- Every page is inspectable with "view source" and editable without tooling.
- There is no dependency graph to keep in sync, so a tool cannot break because another tool changed.
- The failure mode of a missing CDN script is local to one tool.

The trade-off is duplication: a change to a shared interaction pattern has to be applied per page. `toolkit.js` exists to keep that duplication small for the newer tools.

## Related

- [Privacy and the client-side model](privacy.md)
- [How diagrams are rendered](diagram-pipeline.md)
