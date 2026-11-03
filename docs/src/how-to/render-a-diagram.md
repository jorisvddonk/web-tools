# Render a diagram

The [diagram renderer](https://jorisvddonk.github.io/web-tools/diagrams.html) turns twelve text formats into SVG without a server.

## Pick a format

Choose the format first. The **Format** selector lists:

Mermaid, Graphviz DOT, D2, Nomnoml, WaveDrom, Vega-Lite, ECharts, Markmap, BPMN 2.0, Svgbob, Pikchr and js-sequence-diagrams.

If you are unsure, press **Find a diagram** and answer the questions; see [Choose a diagram with the recommender](choose-a-diagram.md).

A [syntax reference link](../reference/diagram-formats.md) for the selected format sits directly under the toolbar.

## Start from an example

Every format ships with at least three examples. Pick one in the **Example** selector and edit it; the select switches to *Custom source* as soon as the text no longer matches the example.

## Edit with confidence

- The editor is CodeMirror with line numbers, bracket matching and auto-closing brackets.
- Syntax highlighting is mode-aware: JSON mode for WaveDrom, Vega-Lite and ECharts; a custom mode for each diagram language.
- **Live** re-renders 650 ms after you stop typing. Untick it and press **Render** for explicit control.
- Errors appear above the editor and link to the syntax reference for the current format.

## Read the status line

The preview header shows the engine, the render time and the size of the generated SVG. A red badge with a message means the renderer rejected the source; the previous result is cleared so you are never looking at a stale diagram.

## Choose a theme

Press **Dark mode** / **Light mode** in the toolbar. The diagrams are rendered with matching palettes rather than being tinted with CSS, so text and lines stay readable. The choice is stored and restored on the next visit.

## Export

- **SVG** downloads the rendered vector. It contains the source in a `<metadata>` element.
- **PNG** rasterises the SVG at up to 2× and embeds the source in a text chunk.
- **Copy SVG** puts the markup on the clipboard, source included.

PNG is disabled for **Markmap** and **BPMN 2.0** because their output (HTML labels and embedded styles) does not rasterise reliably; export SVG instead.

## Related

- [Share and restore diagrams](share-and-restore-diagrams.md)
- [Diagram formats](../reference/diagram-formats.md)
- [How diagrams are rendered](../explanation/diagram-pipeline.md)
