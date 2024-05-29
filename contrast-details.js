const contrastDetailsTemplate = document.createElement("template");

contrastDetailsTemplate.innerHTML = `
<dl>
  <dt>Contrast ratio</dt><dd data-key="ratio"></dd>
  <dt>WCAG level</dt><dd data-key="level"></dd>
</dl>
`;

contrastDetailsTemplate.id = "contrast-details-template";

if (!document.getElementById(contrastDetailsTemplate.id)) {
  document.body.appendChild(contrastDetailsTemplate);
}

class ContrastDetails extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "contrast-details", ContrastDetails);
    }
  }

  connectedCallback() {
    this.style.display = "block";
    this.append(this.template.content.cloneNode(true));

    const { ratio, level } = this.slots;

    ratio.textContent = this.ratio.toFixed(2) + ":1";
    level.textContent = this.level;

    this.setAttribute("level", this.level.toLowerCase());
  }

  get template() {
    return document.getElementById(contrastDetailsTemplate.id);
  }

  get slots() {
    return {
      ratio: this.querySelector("[data-key='ratio']"),
      level: this.querySelector("[data-key='level']"),
    };
  }

  get colors() {
    const foreground = getComputedStyle(this).getPropertyValue("--foreground");
    const background = getComputedStyle(this).getPropertyValue("--background");
    return {
      foreground: this.toRGBArray(foreground),
      background: this.toRGBArray(background),
    };
  }

  get blendedForeground() {
    const { foreground, background } = this.colors;
    if (!(foreground > 3)) return foreground;
    const alpha = foreground[3];
    return [
      (1 - alpha) * background[0] + alpha * foreground[0],
      (1 - alpha) * background[1] + alpha * foreground[1],
      (1 - alpha) * background[2] + alpha * foreground[2],
    ];
  }

  toRGBArray(color) {
    this.template.style.color = color;
    const rgb = getComputedStyle(this.template).color;
    return rgb.replace(/[^0-9|,|.]/g, "").split(",");
  }

  luminance(rgb) {
    const levels = rgb.map((value) => {
      value /= 255;
      return value <= 0.03928
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
    });
    return levels[0] * 0.2126 + levels[1] * 0.7152 + levels[2] * 0.0722;
  }

  get ratio() {
    const fgLuminance = this.luminance(this.blendedForeground);
    const bgLuminance = this.luminance(this.colors.background);

    const brightest = Math.max(fgLuminance, bgLuminance);
    const darkest = Math.min(fgLuminance, bgLuminance);

    const contrastRatio = (brightest + 0.05) / (darkest + 0.05);
    return contrastRatio;
  }

  get level() {
    return this.ratio > 7.0 ? "AAA" : this.ratio > 4.5 ? "AA" : "Fail";
  }
}

ContrastDetails.register();
