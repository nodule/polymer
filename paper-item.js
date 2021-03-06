module.exports = {
  name: "paper-item",
  title: "Paper item",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/menus.html\">Menus</a>\n\n`paper-item` is a simple item object for use in menus. When the user touches the item, a ripple\neffect emanates from the point of contact. If used in a `core-selector`, the selected item will\nbe highlighted.\n\nExample:\n\n    <core-menu>\n        <paper-item>Cut</paper-item>\n        <paper-item>Copy</paper-item>\n        <paper-item>Paste</paper-item>\n    </core-menu>\n\nLinks\n-----\n\nTo use as a link, put an `<a>` element in the item. You may also use the `noink` attribute to\nprevent the ripple from \"freezing\" during a page navigation.\n\nExample:\n\n    <paper-item noink>\n        <a href=\"http://www.polymer-project.org\" layout horizontal center>Polymer</a>\n    </paper-item>",
  dependencies: {
    bower: {
      "paper-item": "Polymer/paper-item#master"
    }
  },
  ports: {
    input: {
      raised: {
        name: "raised",
        description: "If true, the button will be styled with a shadow.",
        type: "boolean",
        "default": false,
        title: "Raised"
      },
      recenteringTouch: {
        name: "recenteringTouch",
        description: "By default the ripple emanates from where the user touched the button.\nSet this to true to always center the ripple.",
        type: "boolean",
        "default": false,
        title: "Recentering touch"
      },
      fill: {
        name: "fill",
        description: "By default the ripple expands to fill the button. Set this to false to\nconstrain the ripple to a circle within the button.",
        type: "boolean",
        "default": true,
        title: "Fill"
      }
    },
    output: {}
  }
}