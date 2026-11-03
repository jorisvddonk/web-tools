# Tools

Every tool is a single page at `https://jorisvddonk.github.io/web-tools/<name>.html`.

## Data and text

| Tool | Page | What it does |
| --- | --- | --- |
| JSON formatter / validator | [json.html](https://jorisvddonk.github.io/web-tools/json.html) | Format, minify, sort keys and validate JSON with precise error locations; warns about integers beyond `2^53`; accepts dropped `.json` files |
| JSON Schema tester | [json-schema.html](https://jorisvddonk.github.io/web-tools/json-schema.html) | Validate an instance against draft-04, draft-06, draft-07, 2019-09 or 2020-12; auto-detects the draft; checks the schema itself |
| JSON to types | [json-to-types.html](https://jorisvddonk.github.io/web-tools/json-to-types.html) | Infer TypeScript interfaces, Zod schemas or Go structs from a JSON sample |
| YAML ↔ JSON | [yaml.html](https://jorisvddonk.github.io/web-tools/yaml.html) | Convert in both directions with multi-document support, sorting and exact parse errors |
| JSONPath tester | [jsonpath.html](https://jorisvddonk.github.io/web-tools/jsonpath.html) | Query JSON with filters, wildcards and recursive descent; shows values and paths |
| CSV ↔ JSON | [csv.html](https://jorisvddonk.github.io/web-tools/csv.html) | Convert CSV/TSV to JSON and back with delimiter detection, header options and a table preview |
| Text diff | [diff.html](https://jorisvddonk.github.io/web-tools/diff.html) | Side-by-side, unified and patch views; ignore whitespace or case; copy a unified patch |
| Regex tester | [regex.html](https://jorisvddonk.github.io/web-tools/regex.html) | Live JS regex testing with flags, highlighted matches, groups and replacement preview |
| Case converter | [case.html](https://jorisvddonk.github.io/web-tools/case.html) | camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE and slug |
| Line tools | [lines.html](https://jorisvddonk.github.io/web-tools/lines.html) | Sort, dedupe, trim, remove blanks, reverse, shuffle and number lines; operations chain |
| Escape / unescape | [escape.html](https://jorisvddonk.github.io/web-tools/escape.html) | HTML entities, JSON strings, Python strings, shell arguments and URL components |
| Unicode inspector | [unicode.html](https://jorisvddonk.github.io/web-tools/unicode.html) | Graphemes, code points, UTF-8/UTF-16 bytes, invisible characters, normalization forms |
| Markdown table formatter | [markdown.html](https://jorisvddonk.github.io/web-tools/markdown.html) | Clean up Markdown tables or convert CSV/TSV, with numeric alignment |
| `.env` ↔ JSON/YAML | [env.html](https://jorisvddonk.github.io/web-tools/env.html) | Dotenv conversion handling quotes, comments, `export`, type coercion and quoting |
| Base64 | [base64.html](https://jorisvddonk.github.io/web-tools/base64.html) | Unicode-safe encoding/decoding including the URL-safe alphabet |

## Web, time and security

| Tool | Page | What it does |
| --- | --- | --- |
| JWT decoder | [jwt.html](https://jorisvddonk.github.io/web-tools/jwt.html) | Decode header/payload, humanize `exp`/`nbf`/`iat`, verify HS256/384/512 |
| URL inspector | [url.html](https://jorisvddonk.github.io/web-tools/url.html) | Split a URL, inspect and edit query parameters, rebuild it; parses bare query strings |
| curl converter | [curl.html](https://jorisvddonk.github.io/web-tools/curl.html) | Convert curl to fetch, axios, Python requests or Go |
| Timestamp converter | [timestamp.html](https://jorisvddonk.github.io/web-tools/timestamp.html) | Unix seconds/milliseconds/microseconds/nanoseconds ↔ ISO 8601, RFC 1123, local and relative time |
| Cron explainer | [cron.html](https://jorisvddonk.github.io/web-tools/cron.html) | Describe five-field cron expressions and preview upcoming runs |
| Hash calculator | [hash.html](https://jorisvddonk.github.io/web-tools/hash.html) | SHA-1, SHA-256, SHA-384 and SHA-512 digests of text or files |
| UUID / ULID generator | [uuid.html](https://jorisvddonk.github.io/web-tools/uuid.html) | UUID v4, UUID v7, ULID and NanoID in bulk |

## Images and design

| Tool | Page | What it does |
| --- | --- | --- |
| Diagram renderer | [diagrams.html](https://jorisvddonk.github.io/web-tools/diagrams.html) | Twelve diagram formats with examples, highlighting, dark mode, recommender and portable exports |
| Image resizer / converter | [image.html](https://jorisvddonk.github.io/web-tools/image.html) | Resize, compress and convert to JPEG, PNG, WebP or AVIF |
| Favicon generator | [favicon.html](https://jorisvddonk.github.io/web-tools/favicon.html) | PNG favicons at common sizes plus a multi-size `favicon.ico`, with an HTML snippet |
| QR generator / decoder | [qr.html](https://jorisvddonk.github.io/web-tools/qr.html) | Generate styled QR codes and decode QR images, including pasted screenshots |
| Colour converter & contrast | [color.html](https://jorisvddonk.github.io/web-tools/color.html) | HEX/RGB/HSL/HSV/OKLCH conversion and WCAG AA/AAA contrast |
| CSS generators | [css.html](https://jorisvddonk.github.io/web-tools/css.html) | `clamp()` sizes, gradients and box shadows with live previews |
| SVG viewer / optimizer | [svg.html](https://jorisvddonk.github.io/web-tools/svg.html) | Preview SVG and strip comments, metadata, scripts, handlers and whitespace |
| Palette | [palette.html](https://jorisvddonk.github.io/web-tools/palette.html) | Extract an image palette ordered along a z-order curve; copy lists or a palette PNG |
| RGBA extractor | [rgba_extractor.html](https://jorisvddonk.github.io/web-tools/rgba_extractor.html) | Extract pixels as a flat array, tuples, or JSON with dimensions |

## Not included

PlantUML is intentionally omitted: it requires a server-side renderer, and every tool here runs entirely in the browser.

## Related

- [Diagram formats](diagram-formats.md)
- [Browser support](browser-support.md)
