module.exports = {
  name: "paper-radio-button",
  title: "Paper radio button",
  ns: "polymer",
  type: "polymer",
  description: "`paper-radio-button` is a button that can be either checked or unchecked.\nUser can tap the radio button to check it.  But it cannot be unchecked by\ntapping once checked.\n\nUse `paper-radio-group` to group a set of radio buttons.  When radio buttons\nare inside a radio group, only one radio button in the group can be checked.\n\nExample:\n\n    <paper-radio-button></paper-radio-button>\n    \nStyling radio button:\n\nTo change the ink color for checked state:\n\n    paper-radio-button::shadow #ink[checked] {\n      color: #4285f4;\n    }\n    \nTo change the radio checked color:\n    \n    paper-radio-button::shadow #onRadio {\n      background-color: #4285f4;\n    }\n\n    paper-radio-button[checked]::shadow #offRadio {\n      border-color: #4285f4;\n    }\n\nTo change the ink color for unchecked state:\n\n    paper-radio-button::shadow #ink {\n      color: #b5b5b5;\n    }\n    \nTo change the radio unchecked color:\n    \n    paper-radio-button::shadow #offRadio {\n      border-color: #b5b5b5;\n    }",
  dependencies: {
    bower: {
      "paper-radio-button": "Polymer/paper-radio-button#master"
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
      label: {
        name: "label",
        description: "The label for the radio button.",
        type: "string",
        "default": "",
        title: "Label"
      },
      toggles: {
        name: "toggles",
        description: "Normally the user cannot uncheck the radio button by tapping once\nchecked.  Setting this property to `true` makes the radio button\ntoggleable from checked to unchecked.",
        type: "boolean",
        "default": false,
        title: "Toggles"
      },
      disabled: {
        name: "disabled",
        description: "If true, the user cannot interact with this element.",
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