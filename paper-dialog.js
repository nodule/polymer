module.exports = {
  name: "paper-dialog",
  title: "Paper dialog",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/dialogs.html\">Dialogs</a>\n\n`paper-dialog` is an overlay with a drop shadow.\n\nExample:\n\n    <paper-dialog heading=\"Dialog Title\">\n      <p>Some content</p>\n    </paper-dialog>\n\nStyling\n-------\n\nBecause a `paper-dialog` is `layered` by default, you need to use the `/deep/`\ncombinator to style all instances of the `paper-dialog`. Style the position,\ncolors and other inherited properties of the dialog using the\n`html /deep/ paper-dialog` selector. Use the `html /deep/ paper-dialog::shadow #scroller` selector to size the dialog. Note that if you provided actions, the height\nof the actions will be added to the height of the dialog.\n\n    html /deep/ paper-dialog {\n        color: green;\n    }\n\n    html /deep/ paper-dialog::shadow #scroller {\n        height: 300px;\n        width: 300px;\n    }\n\nTransitions\n-----------\n\nYou can use transitions provided by `core-transition` with this element.\n\n    <paper-dialog transition=\"core-transition-center\">\n      <p>Some content</p>\n    </paper-dialog>\n\nAccessibility\n-------------\n\nBy default, the `aria-label` will be set to the value of the `heading` attribute.",
  dependencies: {
    bower: {
      "paper-dialog": "Polymer/paper-dialog#master"
    }
  },
  ports: {
    input: {
      heading: {
        name: "heading",
        description: "The title of the dialog.",
        type: "string",
        "default": "",
        title: "Heading"
      },
      transition: {
        name: "transition",
        description: "",
        type: "string",
        "default": "",
        title: "Transition"
      },
      layered: {
        name: "layered",
        description: "",
        type: "boolean",
        "default": true,
        title: "Layered"
      }
    },
    output: {}
  }
}