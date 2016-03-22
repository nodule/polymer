module.exports = {
  name: "paper-toggle-button",
  title: "Paper toggle button",
  ns: "polymer",
  type: "polymer",
  description: "`paper-toggle-button` provides a ON/OFF switch that user can toggle the state\nby tapping or by dragging the swtich.\n\nExample:\n\n    <paper-toggle-button></paper-toggle-button>\n\nStyling toggle button:\n\nTo change the toggle color:\n\n    paper-toggle-button::shadow .toggle {\n      background-color: #9c27b0;\n    }\n\nTo change the ink color:\n    \n    paper-toggle-button::shadow .toggle-ink {\n      color: #009688;\n    }\n\nTo change the checked toggle color:\n\n    paper-toggle-button::shadow [checked] .toggle {\n      background-color: #4285f4;\n    }\n\nTo change the checked ink color:\n\n    paper-toggle-button::shadow [checked] .toggle-ink {\n      color: #4285f4;\n    }\n\nTo change the toggle bar and toggle button colors separately:\n\n    paper-toggle-button::shadow .toggle-bar {\n      background-color: #5677fc;\n    }\n\n    paper-toggle-button::shadow .toggle-button {\n      background-color: #9c27b0;\n    }",
  dependencies: {
    bower: {
      "paper-toggle-button": "Polymer/paper-toggle-button#master"
    }
  },
  ports: {
    input: {
      checked: {
        name: "checked",
        description: "Gets or sets the state, `true` is checked and `false` is unchecked.",
        type: "boolean",
        "default": false,
        title: "Checked"
      },
      disabled: {
        name: "disabled",
        description: "If true, the toggle button is disabled.  A disabled toggle button cannot\nbe tapped or dragged to change the checked state.",
        type: "boolean",
        "default": false,
        title: "Disabled"
      }
    },
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