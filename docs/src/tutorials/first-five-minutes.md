# Your first five minutes

In this tutorial you will open a tool, transform a small piece of data and copy the result. Nothing is installed, no account is created, and the data you paste never leaves the browser.

## Open the site

1. Go to <https://jorisvddonk.github.io/web-tools/>.
2. The landing page groups tools into *data & text*, *web, time & security* and *images & design*.
3. Click **json formatter / validator**.

Each tool page shows a **← all tools** link in the top-left corner, so you can always get back to the list.

## Format some JSON

On the JSON formatter page:

1. Paste this into the left editor:

   ```json
   {"name":"web-tools","tags":["json","csv","diagrams"],"count":3}
   ```

2. Press **Format**. The output pane now shows the same JSON indented across several lines.
3. Press **Minify** and the output collapses back onto one line.
4. Press **Swap** to copy the output back into the input, ready for another pass.

Every tool follows the same layout: input on one side, output on the other, and a row of actions at the top of each pane.

## Break it on purpose

1. Delete a closing brace in the input so the JSON is invalid.
2. Press **Format** again.
3. The error message names the problem and points at the line and column, so you can fix it without guessing.

Good tools fail usefully; web-tools always reports *why* something did not parse.

## Copy the result

Press **Copy output**. The formatted JSON is on your clipboard.

If you had opened DevTools and watched the network tab, you would see no request carrying your JSON: the parsing, formatting and copying all happened in the page.

## Where to go next

- Build and share a diagram in [Build and share a diagram](build-and-share-a-diagram.md).
- Jump straight to a task in the [How-to guides](../how-to/format-and-validate-json.md).
- Look up a tool in the [Reference](../reference/tools.md).
