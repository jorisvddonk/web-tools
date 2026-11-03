# Browser storage and export metadata

This page documents the exact keys and payloads the tools read and write, for debugging and for tooling that consumes exports.

## `localStorage`

| Key | Written by | Shape |
| --- | --- | --- |
| `webtools-theme-v1` | diagram renderer | `"light"` or `"dark"` |
| `webtools-diagram-v1` | diagram renderer | JSON, see below |

`webtools-diagram-v1`:

```json
{
  "format": "mermaid",
  "source": "flowchart LR\n  A --> B",
  "exampleIndex": "0",
  "exampleName": "Architecture flowchart",
  "savedAt": 1767225600000
}
```

- `format` is one of the keys in [Diagram formats](diagram-formats.md).
- `source` is the exact editor contents.
- `exampleIndex` is the `<option>` value (`""` for a custom source).
- `exampleName` is used to re-select the example if the list order changes.
- `savedAt` is a millisecond epoch timestamp.

The theme key is only written after the user presses the theme toggle. Without it, the renderer follows `prefers-color-scheme` and keeps following it as the system changes.

The diagram is saved 400 ms after the last change and again on `beforeunload`.

## SVG metadata

```xml
<metadata id="webtools-source" data-format="mermaid" data-tool="web-tools">flowchart LR
  A --> B</metadata>
```

- `id="webtools-source"` is the lookup key.
- `data-format` must match a supported format key.
- The element's text is the source, XML-escaped.
- The element is inserted as the first child of `<svg>` after rendering, so any SVG saved from the preview keeps it.

## PNG text chunk

Exports contain a single `iTXt` chunk:

| Field | Value |
| --- | --- |
| Keyword | `webtools-source` |
| Compression | none |
| Language tag | empty |
| Translated keyword | empty |
| Text | `{"format":"mermaid","source":"flowchart LR\n  A --> B"}` (UTF-8) |

The chunk is inserted before `IEND`. PNG readers that ignore text chunks render the image normally; the diagram renderer reads the keyword to restore the source.

## Theme handling on import

Imports restore only the format and source. The diagram is then re-rendered with the reader's current theme, so a diagram exported in dark mode opens correctly in light mode and vice versa.

## Related

- [Share and restore diagrams](../how-to/share-and-restore-diagrams.md)
- [Browser support](browser-support.md)
