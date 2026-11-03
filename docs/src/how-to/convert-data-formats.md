# Convert data between formats

Several tools move the same data between representations. Reach for the one that matches your source and target.

| From → to | Tool | What it does |
| --- | --- | --- |
| YAML → JSON, JSON → YAML | [yaml ↔ json](https://jorisvddonk.github.io/web-tools/yaml.html) | Multi-document YAML, sorting, exact parse errors |
| CSV/TSV → JSON, JSON → CSV | [csv ↔ json](https://jorisvddonk.github.io/web-tools/csv.html) | Delimiter detection, header options, table preview |
| `.env` → JSON/YAML, back | [.env ↔ json / yaml](https://jorisvddonk.github.io/web-tools/env.html) | Quotes, comments, `export`, type coercion |
| JSON sample → TypeScript/Zod/Go | [json to types](https://jorisvddonk.github.io/web-tools/json-to-types.html) | Optional fields from arrays of objects |
| Text → base64, base64 → text | [base64](https://jorisvddonk.github.io/web-tools/base64.html) | Unicode-safe, URL-safe alphabet |
| JSON → JSONPath results | [jsonpath tester](https://jorisvddonk.github.io/web-tools/jsonpath.html) | Filters, wildcards, recursive descent |

## Convert YAML to JSON

1. Open the [YAML tool](https://jorisvddonk.github.io/web-tools/yaml.html).
2. Paste YAML into the input.
3. Press **Convert**.

Multi-document files (`---` separators) produce an array of documents. If the YAML is invalid, the error gives the line and column.

## Convert CSV to JSON

1. Open the [CSV tool](https://jorisvddonk.github.io/web-tools/csv.html).
2. Drop a `.csv` or `.tsv` file, or paste the text.
3. Press **Convert**.

The delimiter is detected from the first lines; you can override it and choose whether the first row is a header. A table preview shows how the columns were understood before you convert.

## Turn a JSON sample into types

1. Open [json to types](https://jorisvddonk.github.io/web-tools/json-to-types.html).
2. Paste a sample document.
3. Choose TypeScript, Zod or Go.
4. Press **Generate**.

Fields that are missing in some array elements become optional. Nested objects become nested types; mixed arrays become unions.

## Query a document with JSONPath

1. Open the [JSONPath tester](https://jorisvddonk.github.io/web-tools/jsonpath.html).
2. Paste the document and a query such as `$.items[?(@.price > 10)].name`.
3. Press **Query**.

Results list both the values and the paths that produced them, so you can reuse a path in code.

## Convert dotenv files

1. Open [.env ↔ json / yaml](https://jorisvddonk.github.io/web-tools/env.html).
2. Paste the `.env` content.
3. Choose JSON or YAML and press **Convert**.

Comments and blank lines are dropped, `export` prefixes are handled, and values are quoted correctly on the way back.

## Encode and decode base64

1. Open [base64](https://jorisvddonk.github.io/web-tools/base64.html).
2. Paste text and press **Encode ↓**, or paste base64 and press **Decode ↑**.

Encoding is Unicode-safe (UTF-8 is encoded before base64), and the URL-safe alphabet is available for tokens and query strings.

## Related

- [Format and validate JSON](format-and-validate-json.md)
- [Clean up and compare text](clean-up-and-compare-text.md)
