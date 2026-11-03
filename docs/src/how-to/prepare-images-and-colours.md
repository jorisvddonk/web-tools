# Prepare images and colour assets

The image tools run on `<canvas>`, so files are processed locally and never uploaded.

## Resize or convert an image

1. Open the [image resizer / converter](https://jorisvddonk.github.io/web-tools/image.html).
2. Drop an image, or choose one.
3. Set the target size, format (JPEG, PNG, WebP or AVIF), quality and background.
4. Press **Process**, then **Download**.

Transparent source images need a background colour when you export to JPEG.

## Generate favicons

1. Open the [favicon generator](https://jorisvddonk.github.io/web-tools/favicon.html).
2. Drop a square image.
3. Choose the sizes you need and download the PNGs and the multi-size `favicon.ico`.

An HTML snippet with the right `<link>` tags is generated alongside.

## Create or decode a QR code

Open the [QR tool](https://jorisvddonk.github.io/web-tools/qr.html) to generate a styled QR code, or drop/paste an image and press **Decode this QR**. Pasting a screenshot works.

## Work with colours

- [colour converter & contrast checker](https://jorisvddonk.github.io/web-tools/color.html) converts HEX, RGB, HSL, HSV and OKLCH, and reports WCAG AA/AAA contrast for text.
- [css generators](https://jorisvddonk.github.io/web-tools/css.html) build `clamp()` sizes, gradients and box shadows with live previews and copy buttons.

## Extract a palette

1. Open [palette](https://jorisvddonk.github.io/web-tools/palette.html).
2. Drop an image.
3. Copy the hex or RGBA list, or press **Download palette PNG**.

Colours are ordered along a z-order curve so that similar colours stay adjacent in the list.

## Extract raw pixels

Open [rgba_extractor](https://jorisvddonk.github.io/web-tools/rgba_extractor.html) to get pixels as a flat RGBA array, an array of tuples, or JSON with width and height — useful when you need the exact values for a shader or a test fixture.

## Inspect or optimise an SVG

1. Open the [SVG viewer / optimizer](https://jorisvddonk.github.io/web-tools/svg.html).
2. Drop or paste an SVG.
3. Preview it, then press **Optimize** to strip comments, metadata, scripts, event handlers and extra whitespace.

Review the result before shipping: metadata removal also removes embedded diagram sources from files exported by this site's diagram renderer.

## Related

- [Render a diagram](render-a-diagram.md)
- [Reference: tools](../reference/tools.md)
