module.exports = {
  name: "core-collapse",
  title: "Core collapse",
  ns: "polymer",
  type: "polymer",
  description: "`core-collapse` creates a collapsible block of content.  By default, the content\nwill be collapsed.  Use `opened` or `toggle()` to show/hide the content.\n\n    <button on-click=\"{{toggle}}\">toggle collapse</button>\n\n    <core-collapse id=\"collapse\">\n      Content goes here...\n    </core-collapse>\n\n    ...\n\n    toggle: function() {\n      this.$.collapse.toggle();\n    }\n\n`core-collapse` adjusts the height/width of the collapsible element to show/hide\nthe content.  So avoid putting padding/margin/border on the collapsible directly,\nand instead put a div inside and style that.\n\n    <style>\n      .collapse-content {\n        padding: 15px;\n        border: 1px solid #dedede;\n      }\n    </style>\n\n    <core-collapse>\n      <div class=\"collapse-content\">\n        Content goes here...\n      </div>\n    </core-collapse>",
  dependencies: {
    bower: {
      "core-collapse": "Polymer/core-collapse#master"
    }
  },
  ports: {
    input: {
      target: {
        name: "target",
        description: "The target element that will be opened when the `core-collapse` is\nopened. If unspecified, the `core-collapse` itself is the target.",
        type: "Object",
        "default": null,
        title: "Target"
      },
      horizontal: {
        name: "horizontal",
        description: "If true, the orientation is horizontal; otherwise is vertical.",
        type: "boolean",
        "default": false,
        title: "Horizontal"
      },
      opened: {
        name: "opened",
        description: "Set opened to true to show the collapse element and to false to hide it.",
        type: "boolean",
        "default": false,
        title: "Opened"
      },
      duration: {
        name: "duration",
        description: "Collapsing/expanding animation duration in second.",
        type: "number",
        "default": 0,
        title: "Duration"
      },
      fixedSize: {
        name: "fixedSize",
        description: "If true, the size of the target element is fixed and is set\non the element.  Otherwise it will try to\nuse auto to determine the natural size to use\nfor collapsing/expanding.",
        type: "boolean",
        "default": false,
        title: "Fixed size"
      },
      allowOverflow: {
        name: "allowOverflow",
        description: "By default the collapsible element is set to overflow hidden. This helps\navoid element bleeding outside the region and provides consistent overflow\nstyle across opened and closed states. Set this property to true to allow\nthe collapsible element to overflow when it's opened.",
        type: "boolean",
        "default": false,
        title: "Allow overflow"
      },
      toggle: {
        name: "toggle",
        description: "Toggle the opened state.",
        title: "Toggle",
        async: true
      }
    },
    output: {
      "core-collapse-open": {
        name: "core-collapse-open",
        description: "Fired when the `core-collapse`'s `opened` property changes.",
        title: "Core collapse open"
      },
      "core-resize": {
        name: "core-resize",
        description: "Fired when the target element has been resized as a result of the opened\nstate changing.",
        title: "Core resize"
      }
    }
  }
}