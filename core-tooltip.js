module.exports = {
  name: "core-tooltip",
  title: "Core tooltip",
  ns: "polymer",
  type: "polymer",
  description: "The `core-tooltip` element creates a hover tooltip centered for the content\nit contains. It can be positioned on the top|bottom|left|right of content using\nthe `position` attribute.\n\nTo include HTML in the tooltip, include the `tip` attribute on the relevant\ncontent.\n\n<b>Example</b>:\n\n    <core-tooltip label=\"I'm a tooltip\">\n      <span>Hover over me.</span>\n    </core-tooltip>\n\n<b>Example</b> - positioning the tooltip to the right:\n\n    <core-tooltip label=\"I'm a tooltip to the right\" position=\"right\">\n      <core-icon-button icon=\"drawer\"></core-icon-button>\n    </core-tooltip>\n\n<b>Example</b> - no arrow and showing by default:\n\n    <core-tooltip label=\"Tooltip with no arrow and always on\" noarrow show>\n      <img src=\"image.jpg\">\n    </core-tooltip>\n\n<b>Example</b> - disable the tooltip.\n\n    <core-tooltip label=\"Disabled label never shows\" disabled>\n      ...\n    </core-tooltip>\n\n<b>Example</b> - rich tooltip using the `tip` attribute:\n\n    <core-tooltip>\n      <div>Example of a rich information tooltip</div>\n      <div tip>\n        <img src=\"profile.jpg\">Foo <b>Bar</b> - <a href=\"#\">@baz</a>\n      </div>\n    </core-tooltip>\n\nBy default, the `tip` attribute specifies the HTML content for a rich tooltip.\nYou can customize this attribute with the `tipAttribute` attribute:\n\n    <core-tooltip tipAttribute=\"htmltooltip\">\n      <div>Example of a rich information tooltip</div>\n      <div htmltooltip>\n        ...\n      </div>\n    </core-tooltip>",
  dependencies: {
    bower: {
      "core-tooltip": "Polymer/core-tooltip#master"
    }
  },
  ports: {
    input: {
      label: {
        name: "label",
        description: "A simple string label for the tooltip to display. To display a rich\nHTML tooltip instead, omit `label` and include the `tip` attribute\non a child node of `core-tooltip`.",
        type: "string",
        "default": null,
        title: "Label"
      },
      show: {
        name: "show",
        description: "Forces the tooltip to display. If `disabled` is set, this property is ignored.",
        type: "boolean",
        "default": false,
        title: "Show"
      },
      position: {
        name: "position",
        description: "Positions the tooltip to the top, right, bottom, left of its content.",
        type: "string",
        "default": "bottom",
        title: "Position"
      },
      noarrow: {
        name: "noarrow",
        description: "If true, the tooltip an arrow pointing towards the content.",
        type: "boolean",
        "default": false,
        title: "Noarrow"
      },
      tipAttribute: {
        name: "tipAttribute",
        description: "Customizes the attribute used to specify which content\nis the rich HTML tooltip.",
        type: "string",
        "default": "tip",
        title: "Tip attribute"
      }
    },
    output: {}
  }
}