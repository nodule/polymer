module.exports = {
  name: "paper-spinner",
  title: "Paper spinner",
  ns: "polymer",
  type: "polymer",
  description: "Element providing material design circular spinner.\n\n##### Example\n\n    <paper-spinner active></paper-spinner>\n\nThe default spinner cycles between blue, red, yellow and green. It can be customized so\nthat it uses one color only.\n\n##### Example\n\n    <style shim-shadowdom>\n      paper-spinner.blue::shadow .circle {\n        border-color: #4285f4;\n      }\n    </style>\n\n    <paper-spinner class=\"blue\" active></paper-spinner>\n\nAlt attribute should be set to provide adequate context for accessibility. If not provided,\nit defaults to 'loading'.\nEmpty alt can be provided to mark the element as decorative if alternative content is provided\nin another form (e.g. a text block following the spinner).\n\n##### Example\n  <paper-spinner alt=\"Loading contacts list\" active></paper-spinner>",
  dependencies: {
    bower: {
      "paper-spinner": "Polymer/paper-spinner#master"
    }
  },
  ports: {
    input: {
      active: {
        name: "active",
        description: "Displays the spinner.",
        type: "boolean",
        "default": false,
        title: "Active"
      },
      alt: {
        name: "alt",
        description: "Alternative text content for accessibility support.\nIf alt is present, it will add an aria-label whose content matches alt when active.\nIf alt is not present, it will default to 'loading' as the alt value.",
        type: "string",
        "default": "loading",
        title: "Alt"
      }
    },
    output: {}
  }
}