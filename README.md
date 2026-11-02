# web-tools

Simple, dependency-free web tools that each do one thing. Everything runs locally in your browser — no data is uploaded anywhere.

**Hosted at <https://jorisvddonk.github.io/web-tools/>**

## Tools

| Tool | What it does |
| --- | --- |
| [json formatter / validator](https://jorisvddonk.github.io/web-tools/json.html) | Format, minify, sort keys and validate JSON. Reports syntax errors with line and column, warns about integers beyond `2^53`, and accepts dropped `.json` files. |
| [json schema tester](https://jorisvddonk.github.io/web-tools/json-schema.html) | Validate a JSON instance against JSON Schema draft-04, draft-06, draft-07, 2019-09 or 2020-12. Auto-detects the draft from `$schema`, checks the schema itself, and lists instance/schema paths for every error. |
| [jwt decoder](https://jorisvddonk.github.io/web-tools/jwt.html) | Decode JWT headers and payloads, humanize `exp`/`nbf`/`iat`, list claims, and verify HS256/HS384/HS512 signatures with a shared secret. |
| [unix timestamp converter](https://jorisvddonk.github.io/web-tools/timestamp.html) | Convert unix timestamps (seconds, milliseconds, microseconds, nanoseconds) to ISO 8601, RFC 1123, local time and relative time — and back. Auto-detects units. |
| [url & query string inspector](https://jorisvddonk.github.io/web-tools/url.html) | Break a URL into protocol/host/path/fragment, inspect decoded query parameters, edit or remove them, and rebuild the URL. Also parses bare query strings. |
| [text diff](https://jorisvddonk.github.io/web-tools/diff.html) | Compare two blocks of text side by side or unified, ignore whitespace/case, and copy a standard unified patch. Supports dropping text files. |
| [regex tester](https://jorisvddonk.github.io/web-tools/regex.html) | Test JavaScript regular expressions live with flags, highlighted matches, numbered and named capture groups, and a replacement preview. |
| [hash calculator](https://jorisvddonk.github.io/web-tools/hash.html) | Compute SHA-1, SHA-256, SHA-384 and SHA-512 hex digests of text or dropped files. |
| [base64](https://jorisvddonk.github.io/web-tools/base64.html) | Unicode-safe base64 encoding and decoding, including the URL-safe alphabet. |
| [palette](https://jorisvddonk.github.io/web-tools/palette.html) | Drop in an image to extract its color palette, ordered along a z-order curve. |
| [rgba_extractor](https://jorisvddonk.github.io/web-tools/rgba_extractor.html) | Drop in an image to extract its pixels as a simple RGBA array. |

The schema tester uses Ajv for draft-06/07/2019-09/2020-12 and [`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/main/packages/json-schema) for draft-04. Draft-06 schemas are evaluated with Ajv's draft-07 engine, which shares the same semantics for keywords common to both drafts. Remote `$ref`s are not fetched.

## Development

The site is plain static HTML with no build step. Open `index.html` directly, or serve the directory:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

Newer tools share [`style.css`](style.css) and a small [`json-locator.js`](json-locator.js) helper; each tool keeps its own inline JavaScript and needs no build step.

## Deployment

GitHub Pages deploys automatically from `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Push to `main` and the live site updates.

## Adding a tool

1. Add a new `your-tool.html` page, link `./style.css`, and include an `&larr; all tools` link back to `index.html`.
2. Add a card for it in `index.html`.
3. Add a row to the table above.
