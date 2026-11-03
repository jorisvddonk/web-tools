# Validate JSON against a schema

Use the [JSON Schema tester](https://jorisvddonk.github.io/web-tools/json-schema.html) to check an instance against a schema and to check the schema itself.

## Before you start

You need a JSON instance and a JSON Schema document. Both can be pasted or dropped as files.

## Run a validation

1. Paste the schema into the left editor.
2. Paste the instance into the right editor.
3. Press **Validate**.

The report lists every violation with:

- the instance path (`#/items/2/price`);
- the schema path (`#/properties/items/items/required`);
- the keyword that failed and the reason.

## Pick the draft

The tester supports draft-04, draft-06, draft-07, 2019-09 and 2020-12.

- If the schema has `$schema`, that declaration is used.
- Without `$schema`, the newest supported draft is assumed.
- Draft-06 schemas are evaluated with Ajv's draft-07 engine, which behaves identically for the keywords the drafts share.

## Know the limits

- **Remote `$ref`s are not fetched.** A schema that references `https://example.com/schema.json` will fail to resolve; inline the referenced schema instead.
- The schema document is validated before the instance, so structural mistakes in the schema are reported separately.

## Try it without your own files

1. Press **Load valid** to fill both editors with a matching pair.
2. Press **Validate** — the report should show no errors.
3. Press **Load invalid** and validate again to see how violations are reported.

## Check it worked

With the valid pair loaded, the report is empty and the status is a success badge. With the invalid pair, the report lists each failing path.

## Related

- [Format and validate JSON](format-and-validate-json.md)
- [JSON to types](convert-data-formats.md) to generate types from a sample instead.
