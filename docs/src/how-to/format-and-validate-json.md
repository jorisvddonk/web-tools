# Format and validate JSON

Use the [JSON formatter / validator](https://jorisvddonk.github.io/web-tools/json.html) to pretty-print, minify, sort and check a JSON document.

## Before you start

You need a JSON document, either on the clipboard or as a `.json` file.

## Format it

1. Paste the document into the left editor, or drop the `.json` file onto the page.
2. Press **Format**.
3. Read the result in the right pane.

The formatter indents with two spaces and keeps key order.

## Minify it

Press **Minify** to remove all insignificant whitespace. This is the shape you want when a payload has to be as small as possible.

## Sort the keys

Sorting is part of formatting: object keys are emitted alphabetically, recursively, which makes diffs between two versions stable. Arrays keep their order.

## Validate it

Validation happens on every action. If the document is not valid JSON:

- the error names the problem, for example `Expecting ',' or '}'`;
- the message includes the line and column;
- the output pane keeps the last good result so you do not lose your work.

Additional warnings appear for values that will lose precision, such as integers beyond `2^53` — JSON has no integer type, so JavaScript will round them.

## Move the result back

Press **Swap** to copy the output into the input. This is how you chain operations: format, swap, then sort or minify.

## Check it worked

Paste `{"b":2,"a":1}` and press **Format**. You should see:

```json
{
  "a": 1,
  "b": 2
}
```

## Related

- [Validate JSON against a schema](validate-json-against-a-schema.md)
- [Convert data between formats](convert-data-formats.md)
