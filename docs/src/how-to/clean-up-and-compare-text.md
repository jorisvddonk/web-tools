# Clean up and compare text

A handful of tools handle the small, repetitive edits that come up around code and prose.

## Compare two versions

1. Open [text diff](https://jorisvddonk.github.io/web-tools/diff.html).
2. Paste the old text on the left and the new text on the right, or drop two text files.
3. Press **Compare**.

Choose **Side by side** for a two-column view, **Unified** for a single column with `+`/`-` markers, or **Patch** for a standard unified patch. **Copy patch** copies that patch to the clipboard.

Options let you ignore whitespace or case so that reformatting does not drown out real changes.

## Test a regular expression

1. Open [regex tester](https://jorisvddonk.github.io/web-tools/regex.html).
2. Type the pattern and flags, and the subject text.
3. Read the highlighted matches, the numbered and named groups, and the replacement preview.

The regex engine is the browser's JavaScript engine, so behaviour matches what `new RegExp` does in your application.

## Convert identifiers and phrases

Open [case converter](https://jorisvddonk.github.io/web-tools/case.html), paste the text and press **Convert**. All common styles are produced at once: camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE and slug.

## Clean a list of lines

1. Open [line tools](https://jorisvddonk.github.io/web-tools/lines.html).
2. Paste the list.
3. Apply operations in any order: sort, natural sort, dedupe, trim, remove blanks, reverse, shuffle, number.

Operations chain, and **Use output as input** lets you feed a result straight back in.

## Escape and unescape strings

Open [escape / unescape](https://jorisvddonk.github.io/web-tools/escape.html) and choose the target: HTML entities, JSON strings, Python strings, shell arguments or URL components. Press **Convert** in either direction.

## Inspect Unicode

Open [unicode inspector](https://jorisvddonk.github.io/web-tools/unicode.html) to see graphemes, code points, UTF-8/UTF-16 bytes, invisible characters and normalization forms, and to generate JS, JSON or HTML escapes.

## Format Markdown tables

1. Open [markdown table formatter](https://jorisvddonk.github.io/web-tools/markdown.html).
2. Paste a messy Markdown table or CSV/TSV rows.
3. Press **Format**.

Columns are aligned, and numeric columns are right-aligned automatically.

## Related

- [Convert data between formats](convert-data-formats.md)
- [Inspect URLs, tokens and timestamps](inspect-urls-tokens-timestamps.md)
