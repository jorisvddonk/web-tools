# How these docs are organised

These pages follow [Diátaxis](https://diataxis.fr/), a documentation framework that separates four needs which are usually mixed together.

## The four quadrants

| Quadrant | Question it answers | Takes the form of |
| --- | --- | --- |
| [Tutorials](../tutorials/first-five-minutes.md) | "I am new — teach me by doing" | A lesson with a guaranteed result |
| [How-to guides](../how-to/format-and-validate-json.md) | "I have a task — help me finish it" | Steps aimed at a competent user |
| [Reference](../reference/tools.md) | "I need the exact facts" | Tables, keys, limits |
| [Explanation](../explanation/architecture.md) | "I want to understand why" | Discussion, trade-offs, context |

The quadrants differ in what they promise:

- A **tutorial** never offers choices. It picks one path and walks it end to end, so a beginner cannot get lost.
- A **how-to** assumes you know roughly what you want and gives you the shortest route, including alternatives when they matter.
- **Reference** is descriptive rather than instructive; it is meant to be looked up, not read cover to cover.
- **Explanation** connects ideas: why the site is static, why exports embed their source, why PNG is disabled for two formats.

## How the pages relate

A single subject appears in several quadrants, deliberately. Diagrams, for instance:

- [Build and share a diagram](../tutorials/build-and-share-a-diagram.md) — a guided first success;
- [Render a diagram](../how-to/render-a-diagram.md) — choice of format, editor features, export;
- [Share and restore diagrams](../how-to/share-and-restore-diagrams.md) — a specific task;
- [Diagram formats](../reference/diagram-formats.md) — the full list with syntax links;
- [How diagrams are rendered](../explanation/diagram-pipeline.md) — the implementation and its trade-offs.

Nothing is duplicated for its own sake: each page answers a different question about the same feature.

## Maintaining the docs

- The book source lives in `docs/src`. `SUMMARY.md` is the table of contents and the build fails if a listed page is missing.
- The site deploy workflow builds the book and publishes it at `/docs/`.
- When adding a tool, add a row to [Tools](../reference/tools.md) and, if it needs a walkthrough, a page in the matching quadrant plus an entry in `SUMMARY.md`.
- Cross-reference with relative links so the book renders correctly both locally and on Pages.

## See also

- Diátaxis: <https://diataxis.fr/>
- mdBook documentation: <https://rust-lang.github.io/mdBook/>
