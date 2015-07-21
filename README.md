# Ember-svg-sprite-sheet

The goal of this addon is to compile svgs into a "srpite sheet" that is then inlined at the top of the document body. For now you must precompile your svg file, but in the future this addon will automate this process.

## Installation

* `ember install ember-svg-sprite-sheet`
Add to your `Brocfile.js`, where `'path'` is a reative URL from your apps root to a precompiled svg sprite sheet (for now).
```JS
var app = new EmberApp({
  'ember-svg-sprite-sheet': {
    'path': 'public/svg/svgss.svg'
  }
});
```

## Usage

`{{svg-sprite sprite="#svg-twitter" class="icon"}}`
`sprite` is the name of the SVG you want to use from your sheet.
`class` is a string of classes you want to add to the svg.

Rendered output:

```HTML
<svg id="ember464" class="ember-view svg-sprite icon">
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-twitter"></use>
</svg>
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
