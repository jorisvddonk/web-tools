# Diagram formats

The diagram renderer supports twelve formats. Each one is rendered by a client-side library loaded from a CDN.

| Format | Key | Renderer | Syntax / help |
| --- | --- | --- | --- |
| Mermaid | `mermaid` | mermaid 11 | [mermaid.js.org/intro](https://mermaid.js.org/intro/) |
| Graphviz DOT | `dot` | Viz.js | [graphviz.org/doc/info/lang](https://graphviz.org/doc/info/lang.html) |
| D2 | `d2` | @terrastruct/d2 | [d2lang.com/tour/intro](https://d2lang.com/tour/intro) |
| Nomnoml | `nomnoml` | nomnoml | [nomnoml.com](https://nomnoml.com/) |
| WaveDrom | `wavedrom` | wavedrom 3.8 | [wavedrom.com/tutorial](https://wavedrom.com/tutorial.html) |
| Vega-Lite | `vega` | vega-embed 7 | [vega.github.io/vega-lite](https://vega.github.io/vega-lite/docs/) |
| ECharts | `echarts` | Apache ECharts 5.6 | [echarts.apache.org/option](https://echarts.apache.org/en/option.html) |
| Markmap | `markmap` | markmap 0.18 | [markmap.js.org/docs](https://markmap.js.org/docs) |
| BPMN 2.0 | `bpmn` | bpmn-js 18.6 | [omg.org/spec/BPMN/2.0](https://www.omg.org/spec/BPMN/2.0/) |
| Svgbob | `svgbob` | bob-wasm | [github.com/ivanceras/svgbob](https://github.com/ivanceras/svgbob) |
| Pikchr | `pikchr` | pikchr | [pikchr.org user manual](https://pikchr.org/home/doc/trunk/doc/userman.md) |
| js-sequence-diagrams | `sequence` | js-sequence-diagrams | [bramp.github.io/js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) |

PNG export works for every format except **Markmap** and **BPMN 2.0**. Their SVG output uses HTML labels and embedded styles that do not rasterise reliably in a canvas, so the PNG button is disabled and SVG export is the supported path.

## Input languages

| Format | Input | Highlighting |
| --- | --- | --- |
| Mermaid | Mermaid text | custom mode |
| Graphviz DOT | DOT | custom mode |
| D2 | D2 text | custom mode |
| Nomnoml | Nomnoml text | custom mode |
| WaveDrom | WaveJSON | JSON mode |
| Vega-Lite | Vega-Lite JSON | JSON mode |
| ECharts | ECharts option JSON | JSON mode |
| Markmap | Markdown | Markdown mode |
| BPMN 2.0 | BPMN 2.0 XML | XML mode |
| Svgbob | ASCII art | plain |
| Pikchr | Pikchr text | custom mode |
| js-sequence-diagrams | sequence text | custom mode |

## Examples

Every format ships with at least three samples, 46 in total.

| Format | Examples |
| --- | --- |
| Mermaid | Architecture flowchart, sequence, class, entity relationship, gantt, state machine, pie, git graph, mindmap, timeline, user journey |
| Graphviz DOT | Service digraph, undirected graph, clustered architecture, state machine |
| D2 | Service architecture, containers, cloud deployment |
| Nomnoml | Service flow, class diagram, layered system |
| WaveDrom | Basic timing, bus transaction, clock and reset |
| Vega-Lite | Bar chart, line chart, scatter plot |
| ECharts | Bar chart, line and area, pie chart, network graph, sankey flow |
| Markmap | Project mindmap, learning notes, release plan |
| BPMN 2.0 | Simple process, approval flow |
| Svgbob | Boxes, pipeline, table |
| Pikchr | Box flow, architecture, circle to ellipse |
| js-sequence-diagrams | Basic conversation, authentication flow, arrow styles and notes |

## Rendering details

- WaveDrom, Vega-Lite, ECharts, Markmap and BPMN render into an off-screen container and are then serialised to SVG.
- ECharts uses its SVG renderer and its `dark` theme when the page is dark.
- Markmap needs a second layout pass before it is measured; the renderer performs that automatically.
- BPMN diagrams are cropped to their content bounding box, and their CSS and icon font are embedded in the exported SVG.

## Theme support

| Format | How dark mode is applied |
| --- | --- |
| Mermaid | native `dark` theme |
| ECharts | native `dark` theme |
| D2 | theme 200 (dark) |
| Vega-Lite | dark `config` (axes, legends, titles, view) |
| Markmap | CSS variable overrides |
| BPMN | colour substitution in the rendered SVG |
| Graphviz DOT, Nomnoml, WaveDrom, Svgbob, Pikchr, js-sequence-diagrams | palette substitution (light strokes/text, dark canvas) |

## Related

- [Render a diagram](../how-to/render-a-diagram.md)
- [Share and restore diagrams](../how-to/share-and-restore-diagrams.md)
- [How diagrams are rendered](../explanation/diagram-pipeline.md)
