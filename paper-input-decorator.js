module.exports = {
  name: "paper-input-decorator",
  title: "Paper input decorator",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/text-fields.html\">Text fields</a>\n\n`paper-input-decorator` adds Material Design input field styling and animations to an element.\n\nExample:\n\n    <paper-input-decorator label=\"Your Name\">\n        <input is=\"core-input\">\n    </paper-input-decorator>\n\n    <paper-input-decorator floatingLabel label=\"Your address\">\n        <textarea></textarea>\n    </paper-input-decorator>\n\nTheming\n-------\n\n`paper-input-decorator` uses `core-style` for global theming. The following options are available:\n\n- `CoreStyle.g.paperInput.labelColor` - The inline label, floating label, error message and error icon color when the input does not have focus.\n- `CoreStyle.g.paperInput.focusedColor` - The floating label and the underline color when the input has focus.\n- `CoreStyle.g.paperInput.invalidColor` - The error message, the error icon, the floating label and the underline's color when the input is invalid and has focus.\n\nTo add custom styling to only some elements, use these selectors:\n\n    paper-input-decorator /deep/ .label-text,\n    paper-input-decorator /deep/ .error {\n        /* inline label,  floating label, error message and error icon color when the input is unfocused */\n        color: green;\n    }\n\n    paper-input-decorator /deep/ ::-webkit-input-placeholder {\n        /* platform specific rules for placeholder text */\n        color: green;\n    }\n    paper-input-decorator /deep/ ::-moz-placeholder {\n        color: green;\n    }\n    paper-input-decorator /deep/ :-ms-input-placeholder {\n        color: green;\n    }\n\n    paper-input-decorator /deep/ .unfocused-underline {\n        /* line color when the input is unfocused */\n        background-color: green;\n    }\n\n    paper-input-decorator[focused] /deep/ .floated-label .label-text {\n        /* floating label color when the input is focused */\n        color: orange;\n    }\n\n    paper-input-decorator /deep/ .focused-underline {\n        /* line color when the input is focused */\n        background-color: orange;\n    }\n\n    paper-input-decorator.invalid[focused] /deep/ .floated-label .label-text,\n    paper-input-decorator[focused] /deep/ .error {\n        /* floating label, error message nad error icon color when the input is invalid and focused */\n        color: salmon;\n    }\n\n    paper-input-decorator.invalid /deep/ .focused-underline {\n        /* line and color when the input is invalid and focused */\n        background-color: salmon;\n    }\n\nForm submission\n---------------\n\nYou can use inputs decorated with this element in a `form` as usual.\n\nValidation\n----------\n\nBecause you provide the `input` element to `paper-input-decorator`, you can use any validation library\nor the <a href=\"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation\">HTML5 Constraints Validation API</a>\nto implement validation. Set the `isInvalid` attribute when the input is validated, and provide an\nerror message in the `error` attribute.\n\nExample:\n\n    <paper-input-decorator id=\"paper1\" error=\"Value must start with a number!\">\n        <input id=\"input1\" is=\"core-input\" pattern=\"^[0-9].*\">\n    </paper-input-decorator>\n    <button onclick=\"validate()\"></button>\n    <script>\n        function validate() {\n            var decorator = document.getElementById('paper1');\n            var input = document.getElementById('input1');\n            decorator.isInvalid = !input.validity.valid;\n        }\n    </script>\n\nExample to validate as the user types:\n\n    <template is=\"auto-binding\">\n        <paper-input-decorator id=\"paper2\" error=\"Value must start with a number!\" isInvalid=\"{{!$.input2.validity.valid}}\">\n            <input id=\"input2\" is=\"core-input\" pattern=\"^[0-9].*\">\n        </paper-input-decorator>\n    </template>\n\nAccessibility\n-------------\n\n`paper-input-decorator` will automatically set the `aria-label` attribute on the nested input\nto the value of `label`. Do not set the `placeholder` attribute on the nested input, as it will\nconflict with this element.",
  dependencies: {
    bower: {
      "paper-input-decorator": "Polymer/paper-input-decorator#master"
    }
  },
  ports: {
    input: {
      label: {
        name: "label",
        description: "The label for this input. It normally appears as grey text inside\nthe text input and disappears once the user enters text.",
        type: "string",
        "default": "",
        title: "Label"
      },
      floatingLabel: {
        name: "floatingLabel",
        description: "If true, the label will \"float\" above the text input once the\nuser enters text instead of disappearing.",
        type: "boolean",
        "default": false,
        title: "Floating label"
      },
      disabled: {
        name: "disabled",
        description: "Set to true to style the element as disabled.",
        type: "boolean",
        "default": false,
        title: "Disabled"
      },
      labelVisible: {
        name: "labelVisible",
        description: "Use this property to override the automatic label visibility.\nIf this property is set to `true` or `false`, the label visibility\nwill respect this value instead of be based on whether there is\na non-null value in the input.",
        type: "boolean",
        "default": false,
        title: "Label visible"
      },
      isInvalid: {
        name: "isInvalid",
        description: "Set this property to true to show the error message.",
        type: "boolean",
        "default": false,
        title: "Is invalid"
      },
      autoValidate: {
        name: "autoValidate",
        description: "Set this property to true to validate the input as the user types.\nThis will not validate when changing the input programmatically; call\n`validate()` instead.",
        type: "boolean",
        "default": false,
        title: "Auto validate"
      },
      error: {
        name: "error",
        description: "The message to display if the input value fails validation. If this\nis unset or the empty string, a default message is displayed depending\non the type of validation error.",
        type: "string",
        title: "Error"
      },
      validate: {
        name: "validate",
        description: "Validate the input using HTML5 Constraints.",
        "return": {
          type: "boolean",
          description: "True if the input is valid."
        },
        title: "Validate",
        async: true
      },
      updateLabelVisibility: {
        name: "updateLabelVisibility",
        description: "Updates the label visibility based on a value. This is handled automatically\nif the user is typing, but if you imperatively set the input value you need\nto call this function.",
        title: "Update label visibility",
        async: true
      }
    },
    output: {}
  }
}