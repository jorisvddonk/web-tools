# How diagrams are rendered

The diagram renderer has to do one thing well: turn text in a chosen language into SVG, entirely in the browser, and keep that SVG safe to embed.

## The pipeline

```
source text + format
        │
        ▼
renderFormat(format, text, seq)          ← picks an engine
        │   Mermaid · Viz.js · D2 · nomnoml · WaveDrom · Vega-Lite
        │   ECharts · Markmap · bpmn-js · Svgbob · Pikchr · js-sequence-diagrams
        ▼
SVG string
        │
        ├── sanitizeSvg()                ← strip scripts, event handlers, unsafe hrefs
        ├── embedSource()                ← add <metadata id="webtools-source">
        ▼
preview  +  lastSvg (exports)
```

Rendering is serialised through a promise chain (`renderLock`). Each render takes a sequence number; if a newer render starts, the older result is discarded instead of overwriting the preview. That keeps live typing from flickering between stale renders.

## Engine loading

Each engine is imported lazily and cached:

- **Scripts** (Mermaid, Viz.js, WaveDrom, bpmn-js, ECharts) load via a `<script>` tag with a global-name check, so a second render reuses the same instance.
- **ES modules** (D2, Vega-Lite, Markmap, Svgbob, Pikchr, nomnoml) load with dynamic `import()`.

A failed load rejects the render with a message naming the engine, and the cached promise is cleared so the next attempt retries.

## Off-screen rendering

Engines that need a real layout box render into a `position: fixed; left: -100000px` container, then the resulting `<svg>` is cloned and serialised:

- **WaveDrom** needs a DOM element and writes into it.
- **Vega-Lite** uses `vega-embed`, then `view.toSVG()`.
- **ECharts** initialises an SVG-renderer chart and serialises the root `<svg>`; its absolutely-positioned style is removed so the export can be embedded anywhere.
- **Markmap** measures labels with `foreignObject`; it is rendered, re-rendered once for stable sizes, then given a `viewBox` from its real bounds.
- **BPMN** imports XML with `bpmn-js`, zooms to fit, crops to the content bounding box and embeds diagram-js CSS plus the icon font.

## Sanitising

`sanitizeSvg` parses the markup and removes:

- `<script>`, `<iframe>`, `<object>` and `<embed>` elements;
- every `on*` attribute;
- `href`/`xlink:href` values starting with `javascript:` or `data:text/html`.

This matters because diagram sources are often pasted from elsewhere, and some renderers allow raw HTML in labels.

## Theming

Diagrams are re-rendered when the theme changes rather than being recoloured with CSS filters:

- engines with a native dark theme (Mermaid, ECharts) are initialised with it;
- D2 compiles with a dark theme id;
- Vega-Lite receives a dark `config`;
- Markmap gets CSS variable overrides;
- the monochrome engines get a palette substitution, mapping black↔light and white↔background.

Rendering with the palette baked in means exports match the preview.

## Exports

`lastSvg` is the sanitised, source-tagged markup:

- **SVG** downloads it, adding a background rect in dark mode so the file is readable standalone.
- **PNG** rasterises it on a canvas filled with the theme background, then inserts an `iTXt` chunk before `IEND`.
- **Copy SVG** writes the same markup to the clipboard.

Source is embedded so an export can be re-imported; see [Share and restore diagrams](../how-to/share-and-restore-diagrams.md).

## Related

- [Diagram formats](../reference/diagram-formats.md)
- [Browser storage and export metadata](../reference/storage-and-metadata.md)
