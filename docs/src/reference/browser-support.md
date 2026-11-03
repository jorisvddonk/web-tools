# Browser support

web-tools targets current evergreen browsers. There is no build step and no transpilation, so the code you get is the code that runs.

## Requirements

| Capability | Used by | Notes |
| --- | --- | --- |
| ES2020 syntax | all tools | Optional chaining, nullish coalescing, async/await |
| `fetch`, `Promise`, `async` functions | most tools | |
| `DOMParser` / `XMLSerializer` | diagram renderer, SVG tools | |
| `<canvas>` 2D context | image tools, PNG export | |
| `createImageBitmap`, `toBlob` | image tools | |
| WebAssembly | D2, Svgbob | compiled renderers loaded from a CDN |
| `localStorage` | diagram renderer | private windows may clear it on close |
| `navigator.clipboard` | copy buttons | falls back to a hidden textarea + `execCommand` |
| Drag and drop / `DataTransfer` | file inputs, diagram import | |
| CSS custom properties, `clamp()` | layout and theming | |

## Network access

All processing is local, but a few tools load their engine from a CDN the first time you use them:

- Diagram renderer: Mermaid, Viz.js, D2, nomnoml, WaveDrom, Vega-Lite, ECharts, Markmap, bpmn-js, bob-wasm, Pikchr, js-sequence-diagrams, plus CodeMirror.
- Schema tester: Ajv and `@cfworker/json-schema`.
- Others: js-yaml, JSONPath Plus, qrcode, jsQR.

If you are offline, tools that need a CDN report a load failure instead of rendering. Tools without a third-party engine (JSON formatting, diff, base64, hash, and so on) keep working.

## Clipboard and file access

- Copy buttons use the async Clipboard API when available and fall back to `document.execCommand("copy")`.
- File inputs and drop zones read files locally with `File.text()` / `File.arrayBuffer()`; nothing is uploaded.
- PNG import relies on reading text chunks from the file, which works for files produced by this tool.

## Known limitations

- **PNG export is unavailable for Markmap and BPMN 2.0.** Their SVG output uses HTML labels and embedded styles that do not rasterise reliably in a canvas; use SVG export instead.
- **Remote `$ref`s are not fetched** by the JSON Schema tester.
- **Very large images** are limited by the browser's canvas size limits (usually 16k pixels per side and a few hundred megabytes of memory).
- **Printing** is not a designed path; export SVG or PNG instead.

## Related

- [Diagram formats](diagram-formats.md)
- [Privacy and the client-side model](../explanation/privacy.md)
