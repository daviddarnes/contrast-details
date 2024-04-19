# `contrast-details`

A Web Component to display the contrast ratio and level of two colours using CSS custom properties

**[Demo](https://daviddarnes.github.io/contrast-details/demo.html)** | **[Further reading](https://darn.es/contrast-details-web-component/)**

## Examples

General usage example:

```html
<script type="module" src="contrast-details.js"></script>

<contrast-details style="--foreground: #000000; --background: #FCFAF2"></contrast-details>
```

Example using inherited values:

```html
<div style="--foreground: #3D3D3D">
  <contrast-details style="--background: #613FE8"></contrast-details>
  <contrast-details style="--background: #FCFAF2"></contrast-details>
  <contrast-details style="--background: #FFFFFF"></contrast-details>
</div>
```

Example using a custom template:

```html
<script type="module" src="contrast-details.js"></script>

<template id="contrast-details-template">
  <p>Contrast: <span data-key="ratio"></span> | <span data-key="level"></span></p>
</template>

<contrast-details style="--foreground: #000000; --background: #FCFAF2"></contrast-details>
```

## Features

This Web Component allows you to:

- Compare two colours and render their contrast details
- Render the contrast ratio
- Render the contrast level, as per WCAG grading
- Utilise CSS custom properties to provide values, either on the element or through inheritance, which also allows the element to use those colours as you wish

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/contrast-details): `npm install @daviddarnes/contrast-details`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/contrast-details/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="contrast-details.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/contrast-details@1.0.1/contrast-details.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/contrast-details@1.0.1"
></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/contrast-details)
