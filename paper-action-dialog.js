module.exports = {
  name: "paper-action-dialog",
  title: "Paper action dialog",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/dialogs.html\">Dialogs</a>\n\n`paper-action-dialog` is a `paper-dialog` a row of buttons at the bottom that\nindicate user action. The action buttons do not scroll with the dialog body.\n\nThe buttons should have either the `affirmative` or `dismissive` attribute. See\nthe Material Design spec for more info.\n\nExample:\n\n    <paper-action-dialog heading=\"Dialog Title\">\n      <p>Some content</p>\n      <paper-button dismissive>More Info</paper-button>\n      <paper-button affirmative>Decline</paper-button>\n      <paper-button affirmative>Accept</paper-button>\n    </paper-action-dialog>",
  dependencies: {
    bower: {
      "paper-action-dialog": "Polymer/paper-action-dialog#master"
    }
  },
  ports: {
    input: {
      closeSelector: {
        name: "closeSelector",
        description: "",
        type: "string",
        "default": "[affirmative],[dismissive]",
        title: "Close selector"
      }
    },
    output: {}
  }
}