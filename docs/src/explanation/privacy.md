# Privacy and the client-side model

Every tool in this collection processes data in your browser. There is no backend to send it to, and no analytics or accounts.

## What stays local

- text pasted into any tool;
- JSON, YAML, CSV and `.env` documents;
- images dropped into the image tools;
- hashes, tokens and secrets used for JWT verification;
- diagrams and their exported files.

None of it is transmitted. Refreshing the page after clearing the input leaves no copy anywhere except the clipboard and any file you downloaded.

## What does leave the browser

Two things, both optional and both about code rather than data:

1. **Library requests.** Some tools fetch their engine from a CDN (`cdn.jsdelivr.net`, `esm.sh`) the first time they need it. The request asks for a library by name and version; it does not contain your data.
2. **Nothing else.** There is no telemetry, no font request, no error reporting.

If you want zero third-party requests, the tools with no engine dependency (JSON formatting, diff, base64, hashing, and so on) work when you block the CDNs entirely.

## Storage

The diagram renderer keeps its last diagram and theme in `localStorage` so a refresh does not lose work. That data never leaves the machine and can be cleared with the browser's site-data controls. The exact keys are documented in [Browser storage and export metadata](../reference/storage-and-metadata.md).

## Exported files

Exports are ordinary files, but they are not anonymous: an SVG or PNG exported from the diagram renderer contains the diagram source. That is what makes the round trip work, and it is worth knowing before publishing an export that contains internal hostnames or notes.

The [SVG optimizer](https://jorisvddonk.github.io/web-tools/svg.html) removes metadata, which also removes the embedded source.

## Verification

Because the site is static, you can check the claim rather than trust it:

- open DevTools → Network and watch the requests while pasting data;
- view source on any page and read the inline script;
- the repository is public: <https://github.com/jorisvddonk/web-tools>.

## Related

- [Architecture](architecture.md)
- [Browser support](../reference/browser-support.md)
