# web-tools

Simple static web tools that each do one thing. Everything runs locally in your browser — schemas, text, images and files are never uploaded. A few tools load small libraries from a CDN.

**Hosted at <https://jorisvddonk.github.io/web-tools/>**

**Documentation: <https://jorisvddonk.github.io/web-tools/docs/>** — tutorials, how-to guides, reference and explanation, built with [mdBook](https://rust-lang.github.io/mdBook/) from [`docs/`](docs/).

## Tools

### Data & text

| Tool | What it does |
| --- | --- |
| [json formatter / validator](https://jorisvddonk.github.io/web-tools/json.html) | Format, minify, sort keys and validate JSON. Reports syntax errors with line and column, warns about integers beyond `2^53`, and accepts dropped `.json` files. |
| [json schema tester](https://jorisvddonk.github.io/web-tools/json-schema.html) | Validate a JSON instance against JSON Schema draft-04, draft-06, draft-07, 2019-09 or 2020-12. Auto-detects the draft from `$schema`, checks the schema itself, and lists instance/schema paths for every error. |
| [json to types](https://jorisvddonk.github.io/web-tools/json-to-types.html) | Infer TypeScript interfaces, Zod schemas or Go structs from a JSON sample, including optional fields from arrays of objects. |
| [yaml ↔ json](https://jorisvddonk.github.io/web-tools/yaml.html) | Convert YAML to JSON and back, with multi-document support, sorting and exact parse errors. |
| [jsonpath tester](https://jorisvddonk.github.io/web-tools/jsonpath.html) | Query JSON with JSONPath filters, wildcards and recursive descent; inspect values and the paths that produced them. |
| [csv ↔ json](https://jorisvddonk.github.io/web-tools/csv.html) | Convert CSV or TSV to JSON and back, with delimiter detection, header options and a table preview. |
| [text diff](https://jorisvddonk.github.io/web-tools/diff.html) | Compare two blocks of text side by side or unified, ignore whitespace/case, and copy a standard unified patch. Supports dropping text files. |
| [regex tester](https://jorisvddonk.github.io/web-tools/regex.html) | Test JavaScript regular expressions live with flags, highlighted matches, numbered and named capture groups, and a replacement preview. |
| [case converter](https://jorisvddonk.github.io/web-tools/case.html) | Convert identifiers and phrases between camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, slug and more. |
| [line tools](https://jorisvddonk.github.io/web-tools/lines.html) | Sort, dedupe, trim, remove blanks, reverse, shuffle and number lines. Operations chain. |
| [escape / unescape](https://jorisvddonk.github.io/web-tools/escape.html) | Escape and unescape HTML entities, JSON strings, Python strings, shell arguments and URL components. |
| [unicode inspector](https://jorisvddonk.github.io/web-tools/unicode.html) | Inspect graphemes, code points, UTF-8/UTF-16 bytes, invisible characters and normalization forms; generate JS/JSON/HTML escapes. |
| [markdown table formatter](https://jorisvddonk.github.io/web-tools/markdown.html) | Clean up Markdown tables or convert CSV/TSV into aligned Markdown, with automatic numeric alignment and a preview. |
| [.env ↔ json / yaml](https://jorisvddonk.github.io/web-tools/env.html) | Convert dotenv files to JSON or YAML and back, handling quotes, comments, `export`, type coercion and value quoting. |
| [base64](https://jorisvddonk.github.io/web-tools/base64.html) | Unicode-safe base64 encoding and decoding, including the URL-safe alphabet. |

### Web, time & security

| Tool | What it does |
| --- | --- |
| [jwt decoder](https://jorisvddonk.github.io/web-tools/jwt.html) | Decode JWT headers and payloads, humanize `exp`/`nbf`/`iat`, list claims, and verify HS256/HS384/HS512 signatures with a shared secret. |
| [url & query string inspector](https://jorisvddonk.github.io/web-tools/url.html) | Break a URL into protocol/host/path/fragment, inspect decoded query parameters, edit or remove them, and rebuild the URL. Also parses bare query strings. |
| [curl converter](https://jorisvddonk.github.io/web-tools/curl.html) | Convert curl commands to fetch, axios, Python requests or Go code, including headers, JSON bodies, basic auth, query data and multipart forms. |
| [unix timestamp converter](https://jorisvddonk.github.io/web-tools/timestamp.html) | Convert unix timestamps (seconds, milliseconds, microseconds, nanoseconds) to ISO 8601, RFC 1123, local time and relative time — and back. Auto-detects units. |
| [cron expression explainer](https://jorisvddonk.github.io/web-tools/cron.html) | Describe five-field cron expressions and preview the next runs, with ranges, steps, lists and month/day names. |
| [hash calculator](https://jorisvddonk.github.io/web-tools/hash.html) | Compute SHA-1, SHA-256, SHA-384 and SHA-512 hex digests of text or dropped files. |
| [uuid / ulid generator](https://jorisvddonk.github.io/web-tools/uuid.html) | Generate UUID v4, time-sortable UUID v7, ULID and NanoID values in bulk. |

### Images & design

| Tool | What it does |
| --- | --- |
| [diagram renderer](https://jorisvddonk.github.io/web-tools/diagrams.html) | Render Mermaid, Graphviz DOT, D2, Nomnoml, WaveDrom, Vega-Lite, ECharts, Markmap, BPMN, Svgbob, Pikchr and js-sequence-diagrams locally, with 46 examples, CodeMirror syntax highlighting, dark mode with theme-aware diagram palettes, a guided recommender and SVG/PNG export (SVG only for Markmap/BPMN). Exports embed their source, so an exported SVG or PNG can be dropped back in to restore the diagram; dropped or pasted source text is detected automatically. |
| [image resizer / converter](https://jorisvddonk.github.io/web-tools/image.html) | Resize, compress and convert images to JPEG, PNG, WebP or AVIF with quality and background controls. |
| [favicon generator](https://jorisvddonk.github.io/web-tools/favicon.html) | Generate favicon PNGs at common sizes plus a multi-size `favicon.ico`, with an HTML snippet. |
| [qr code generator / decoder](https://jorisvddonk.github.io/web-tools/qr.html) | Generate styled QR codes and decode QR images, including pasted screenshots. |
| [color converter & contrast checker](https://jorisvddonk.github.io/web-tools/color.html) | Convert HEX/RGB/HSL/HSV/OKLCH and check WCAG AA/AAA contrast for text. |
| [css generators](https://jorisvddonk.github.io/web-tools/css.html) | Generate `clamp()` sizes, gradients and box shadows with live previews. |
| [svg viewer / optimizer](https://jorisvddonk.github.io/web-tools/svg.html) | Preview SVG and strip comments, metadata, scripts, event handlers and extra whitespace. |
| [palette](https://jorisvddonk.github.io/web-tools/palette.html) | Drop in an image to extract its palette, ordered along a z-order curve. Copy hex/RGBA lists or download a palette PNG. |
| [rgba_extractor](https://jorisvddonk.github.io/web-tools/rgba_extractor.html) | Drop in an image to extract pixels as a flat RGBA array, an array of tuples or JSON with width/height. |

The diagram renderer intentionally omits PlantUML because it requires a server-side renderer.

Full documentation for every tool lives in the mdBook guide under [`docs/`](docs/): start at the [tutorials](docs/src/tutorials/first-five-minutes.md), follow a [how-to guide](docs/src/how-to/format-and-validate-json.md), look things up in the [reference](docs/src/reference/tools.md), or read the [explanation](docs/src/explanation/architecture.md).

The schema tester uses Ajv for draft-06/07/2019-09/2020-12 and [`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/main/packages/json-schema) for draft-04. Draft-06 schemas are evaluated with Ajv's draft-07 engine, which shares the same semantics for keywords common to both drafts. Remote `$ref`s are not fetched.

Some tools load libraries from a CDN: js-yaml, JSONPath Plus, qrcode, jsQR, Ajv, CodeMirror, Mermaid, Viz.js, D2, nomnoml, WaveDrom, Vega-Lite, ECharts, Markmap, bpmn-js, Svgbob, Pikchr and js-sequence-diagrams. All processing still happens in the browser.

## Diagram formats and syntax references

The diagram renderer links the current format's syntax reference next to its hint line, and a render error offers a link to the same reference. These are the official specs and help pages it points at:

| Format | Renderer | Syntax / help |
| --- | --- | --- |
| Mermaid | [mermaid](https://mermaid.js.org/) | <https://mermaid.js.org/intro/> |
| Graphviz DOT | [Viz.js](https://github.com/mdaines/viz.js) | <https://graphviz.org/doc/info/lang.html> |
| D2 | [@terrastruct/d2](https://github.com/terrastruct/d2) | <https://d2lang.com/tour/intro> |
| Nomnoml | [nomnoml](https://github.com/skanaar/nomnoml) | <https://nomnoml.com/> |
| WaveDrom | [wavedrom](https://github.com/wavedrom/wavedrom) | <https://wavedrom.com/tutorial.html> |
| Vega-Lite | [vega-embed](https://github.com/vega/vega-embed) | <https://vega.github.io/vega-lite/docs/> |
| ECharts | [Apache ECharts](https://echarts.apache.org/) | <https://echarts.apache.org/en/option.html> |
| Markmap | [markmap](https://github.com/markmap/markmap) | <https://markmap.js.org/docs> |
| BPMN 2.0 | [bpmn-js](https://github.com/bpmn-io/bpmn-js) | <https://www.omg.org/spec/BPMN/2.0/> |
| Svgbob | [bob-wasm](https://github.com/ivanceras/svgbob) | <https://github.com/ivanceras/svgbob> |
| Pikchr | [pikchr](https://pikchr.org/) | <https://pikchr.org/home/doc/trunk/doc/userman.md> |
| js-sequence-diagrams | [js-sequence-diagrams](https://github.com/bramp/js-sequence-diagrams) | <https://bramp.github.io/js-sequence-diagrams/> |

## Diagram renderer usage

- **Themes** — light/dark follows the browser, and the toolbar toggle persists the choice. Diagrams render with matching palettes, so previews and exports stay readable in either theme.
- **Autosave** — the format, source and selected example are stored in `localStorage` and restored on refresh.
- **Portable exports** — every exported SVG carries its source in a `<metadata id="webtools-source">` element, and PNGs carry it in a `webtools-source` text chunk. Open…, drag and drop, or paste such a file to restore the diagram.
- **Format detection** — dropping or pasting source text detects the format (Mermaid, DOT, D2, nomnoml, WaveDrom, Vega-Lite, ECharts, Markmap, BPMN, Svgbob, Pikchr, js-sequence-diagrams) and loads it. Detection only replaces the editor contents when the editor is empty or everything is selected.
- **Recommender** — "Find a diagram" walks through use cases with visual choices, previews the result and loads the sample.

## Development

The site is plain static HTML with no build step. The docs are an mdBook built during deployment. Open `index.html` directly, or serve the directory:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

Newer tools share [`style.css`](style.css), [`toolkit.js`](toolkit.js) and a small [`json-locator.js`](json-locator.js) helper; each tool keeps its own inline JavaScript and needs no build step.

## Documentation

The user guide is an [mdBook](https://rust-lang.github.io/mdBook/) in `docs/`, organised with [Diátaxis](https://diataxis.fr/):

| Quadrant | Pages |
| --- | --- |
| Tutorials | [first five minutes](docs/src/tutorials/first-five-minutes.md), [build and share a diagram](docs/src/tutorials/build-and-share-a-diagram.md) |
| How-to guides | [format and validate JSON](docs/src/how-to/format-and-validate-json.md), [render a diagram](docs/src/how-to/render-a-diagram.md), [share and restore diagrams](docs/src/how-to/share-and-restore-diagrams.md), and more |
| Reference | [tools](docs/src/reference/tools.md), [diagram formats](docs/src/reference/diagram-formats.md), [storage and metadata](docs/src/reference/storage-and-metadata.md), [browser support](docs/src/reference/browser-support.md) |
| Explanation | [architecture](docs/src/explanation/architecture.md), [privacy](docs/src/explanation/privacy.md), [diagram pipeline](docs/src/explanation/diagram-pipeline.md), [docs structure](docs/src/explanation/diataxis.md) |

Build it locally (mdBook 0.5):

```bash
mdbook build docs            # output in docs/book
mdbook serve docs --open     # live preview on http://localhost:3000
```

## Deployment

GitHub Pages deploys automatically from `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow builds the mdBook into `_site/docs`, stages the static site next to it, and deploys `_site`, so the docs are published at `/docs/`. Push to `main` and the live site updates.

## Adding a tool

1. Add a new `your-tool.html` page, link `./style.css`, and include an `&larr; all tools` link back to `index.html`.
2. Add a card for it in `index.html`.
3. Add a row to the table above.
4. Add a row to the [tools reference](docs/src/reference/tools.md) and, if the tool needs a walkthrough, a page in the matching [Diátaxis](https://diataxis.fr/) quadrant under `docs/src/`, plus an entry in `docs/src/SUMMARY.md`.
5. Run `mdbook build docs` to check the book still builds.
