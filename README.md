# `contrast-details`

A Web Component to display the contrast ratio and level of two colours using CSS custom properties

**[Demo](https://daviddarnes.github.io/contrast-details/demo.html)** | **[Custom template demo](https://daviddarnes.github.io/contrast-details/demo-custom-template.html)** | **[Further reading](https://darn.es/contrast-details-web-component/)**

## Examples

General usage example:

```html
<script type="module" src="contrast-details.js"></script>

<contrast-details
  style="--foreground: #444; --background: #ccc"
></contrast-details>
<contrast-details
  style="--foreground: #444; --background: #613fe8"
></contrast-details>
```

Example using inherited values:

```html
<script type="module" src="contrast-details.js"></script>

<div style="--foreground: #444">
  <contrast-details style="--background: #ccc"></contrast-details>
  <contrast-details style="--background: #ffffff"></contrast-details>
  <contrast-details style="--background: #613fe8"></contrast-details>
</div>
```

Example using `level` attribute for styling

```html
<style>
  contrast-details[level^="aa"] [data-key="level"]::after {
    content: " ✅";
  }

  contrast-details[level="fail"] [data-key="level"]::after {
    content: " ❌";
  }
</style>

<script type="module" src="contrast-details.js"></script>

<contrast-details
  style="--foreground: #444; --background: #ccc"
></contrast-details>
<contrast-details
  style="--foreground: #444; --background: #613fe8"
></contrast-details>
```

Example using a custom template:

```html
<script type="module" src="contrast-details.js"></script>

<template id="contrast-details-template">
  <p>
    Contrast: <span data-key="ratio"></span> –
    <span data-key="level"></span>
  </p>
</template>

<contrast-details
  style="--foreground: #444; --background: #ccc"
></contrast-details>
<contrast-details
  style="--foreground: #444; --background: #613fe8"
></contrast-details>
```

## Features

This Web Component allows you to:

- Compare two colours and render their contrast details
- Render the contrast ratio
- Render the contrast level, as per WCAG grading
- Utilise CSS custom properties to provide values, either on the element or through inheritance, which also allows the element to use those colours as you wish
- Utilise a `level` attribute selector to style elements differently depending on `aaa`, `aa` and `fail` grades

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
  src="https://www.unpkg.com/@daviddarnes/contrast-details@1.1.0/contrast-details.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/contrast-details@1.1.0"
></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/contrast-details)
