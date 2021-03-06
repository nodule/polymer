module.exports = {
  name: "core-dropdown-base",
  title: "Core dropdown base",
  ns: "polymer",
  type: "polymer",
  description: "`core-dropdown-base` is a base class for implementing controls that displays\nan overlay when tapped on.\n\nThe child element with the class `dropdown` will be used as the drop-down. It\nshould be a `core-dropdown` or other overlay element.",
  dependencies: {
    bower: {
      "core-dropdown-base": "Polymer/core-dropdown-base#master"
    }
  },
  ports: {
    input: {
      opened: {
        name: "opened",
        description: "True if the menu is open.",
        type: "boolean",
        "default": false,
        title: "Opened"
      }
    },
    output: {}
  }
}