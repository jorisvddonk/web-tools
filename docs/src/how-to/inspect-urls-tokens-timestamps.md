# Inspect URLs, tokens and timestamps

These tools answer questions about the values that travel between services.

## Break down a URL

1. Open the [URL inspector](https://jorisvddonk.github.io/web-tools/url.html).
2. Paste a URL, or a bare query string.
3. Read the protocol, host, path and fragment, plus every query parameter in decoded form.

From here you can edit, remove or add parameters, sort them by name, and press **Copy rebuilt** to get a clean URL back.

## Decode a JWT

1. Open the [JWT decoder](https://jorisvddonk.github.io/web-tools/jwt.html).
2. Paste the token.
3. Read the header and payload, with `exp`, `nbf` and `iat` shown as human dates next to the raw values.

To check an HS256, HS384 or HS512 signature, paste the shared secret and press **Verify**. Verification happens locally; the secret is never sent anywhere.

## Convert a curl command

1. Open the [curl converter](https://jorisvddonk.github.io/web-tools/curl.html).
2. Paste a `curl` command, for example one copied from your browser's network panel.
3. Choose fetch, axios, Python `requests` or Go and press **Convert**.

Headers, JSON bodies, basic auth, query data and multipart forms are translated.

## Read a timestamp

Open the [timestamp converter](https://jorisvddonk.github.io/web-tools/timestamp.html). Paste a number and the unit is detected (seconds, milliseconds, microseconds or nanoseconds); the tool shows ISO 8601, RFC 1123, local time and relative time. Press **Use now** to start from the current time and edit backwards.

## Explain a cron expression

1. Open the [cron explainer](https://jorisvddonk.github.io/web-tools/cron.html).
2. Type a five-field expression such as `*/15 9-17 * * MON-FRI`.
3. Press **Explain** for a plain-language description and the next run times.

Ranges, steps, lists and month/day names are supported.

## Hash text or a file

1. Open the [hash calculator](https://jorisvddonk.github.io/web-tools/hash.html).
2. Paste text or press **Choose file…**.
3. Read SHA-1, SHA-256, SHA-384 and SHA-512 digests at once.

## Generate identifiers

Open the [UUID / ULID generator](https://jorisvddonk.github.io/web-tools/uuid.html), choose UUID v4, UUID v7, ULID or NanoID, and press **Generate** for a batch. UUID v7 and ULIDs sort by creation time.

## Related

- [Convert data between formats](convert-data-formats.md)
- [Reference: tools](../reference/tools.md)
