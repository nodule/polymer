module.exports = {
  name: "paper-checkbox",
  title: "Paper checkbox",
  ns: "polymer",
  type: "polymer",
  description: "`paper-checkbox` is a button that can be either checked or unchecked.  User\ncan tap the checkbox to check or uncheck it.  Usually you use checkboxes\nto allow user to select multiple options from a set.  If you have a single\nON/OFF option, avoid using a single checkbox and use `paper-toggle-button`\ninstead.\n\nExample:\n\n    <paper-checkbox></paper-checkbox>\n\n    <paper-checkbox checked></paper-checkbox>\n    \nStyling checkbox:\n\nTo change the ink color for checked state:\n\n    paper-checkbox::shadow #ink[checked] {\n      color: #4285f4;\n    }\n    \nTo change the checkbox checked color:\n\n    paper-checkbox::shadow #checkbox.checked {\n      border-color: #4285f4;\n    }\n\nTo change the ink color for unchecked state:\n\n    paper-checkbox::shadow #ink {\n      color: #b5b5b5;\n    }\n\nTo change the checbox unchecked color:\n\n    paper-checkbox::shadow #checkbox {\n      border-color: #b5b5b5;\n    }",
  dependencies: {
    bower: {
      "paper-checkbox": "Polymer/paper-checkbox#master"
    }
  },
  ports: {
    input: {},
    output: {
      change: {
        name: "change",
        description: "Fired when the checked state changes due to user interaction.",
        title: "Change"
      },
      "core-change": {
        name: "core-change",
        description: "Fired when the checked state changes.",
        title: "Core change"
      }
    }
  }
}