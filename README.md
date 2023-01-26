# @widgetbot/message-renderer

## Loading SVGs

Make sure your SVGs have, in their file, an `id` property with the value `svg`.
You'd set the color to currentColor if you want it to be controlled by the parent CSS.
Alternatively, you are also able to use the CSS variables accessible to the SVG when placed in the DOM.
In order to allow the SVG to be properly scaled, make sure your SVG has a viewBox defined.