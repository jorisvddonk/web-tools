# Share and restore diagrams

Exported diagrams are also saved diagrams. This page explains how the source travels inside the image and how to get it back.

## What gets embedded

| Export | Where the source lives |
| --- | --- |
| SVG | `<metadata id="webtools-source" data-format="mermaid">` containing the original text |
| PNG | an `iTXt` chunk with the keyword `webtools-source` containing `{"format":…,"source":…}` |

Both carry the format key (`mermaid`, `dot`, `d2`, `nomnoml`, `wavedrom`, `vega`, `echarts`, `markmap`, `bpmn`, `svgbob`, `pikchr`, `sequence`) so the diagram reopens in the right renderer.

## Restore from an exported file

Pick whichever is convenient:

- **Drag and drop** the `.svg` or `.png` anywhere on the page.
- Press **Open…** in the source pane and choose the file.
- Paste the file from the clipboard (for example after copying it in Finder or Explorer).

The diagram reopens with its original format and source, and the *Example* selector switches back to the matching sample when the source equals one.

## Drop or paste source text

You do not need an exported image. Dropping a `.mmd`, `.dot`, `.gv`, `.json`, `.md`, `.xml`, `.d2`, `.txt` file — or pasting text into an empty editor — detects the format and loads it.

Detection is conservative:

- it only switches format when the format is recognisably different;
- it only replaces editor contents when the editor is empty or everything is selected;
- if nothing is recognised, the text is left alone and a message explains that.

## What does not work

- An SVG or PNG from another tool has no embedded source, so it is rejected with an explanation. Re-export from this tool if you want the round trip.
- Optimising an SVG with the [SVG optimizer](https://jorisvddonk.github.io/web-tools/svg.html) strips metadata by design, including this metadata.

## Autosave

The current format, source and example are saved in `localStorage` as you type and restored on reload, so a refresh never loses your diagram. A custom source comes back as *Custom source*.

## Related

- [Render a diagram](render-a-diagram.md)
- [Browser storage and export metadata](../reference/storage-and-metadata.md)
