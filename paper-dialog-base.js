module.exports = {
  name: "paper-dialog-base",
  title: "Paper dialog base",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/dialogs.html\">Dialogs</a>\n\n`paper-dialog-base` is a base class used to implement Material Design styled\ndialogs.",
  dependencies: {
    bower: {
      "paper-dialog-base": "Polymer/paper-dialog-base#master"
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