module.exports = {
  name: "paper-char-counter",
  title: "Paper char counter",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/text-fields.html#text-fields-character-counter\">Character counter</a>\n\n`paper-char-counter` adds a character counter for paper input fields with a character restriction in place.\n\nExample:\n\n    <paper-input-decorator>\n      <input id=\"input1\" is=\"core-input\" maxlength=\"5\">\n      <paper-char-counter class=\"footer\" target=\"input1\"></paper-char-counter>\n    </paper-input-decorator>\n\nTheming\n-------\n\n`paper-char-counter` uses `paper-input-decorator`'s error `core-style` for global theming.",
  dependencies: {
    bower: {
      "paper-char-counter": "Polymer/paper-char-counter#master"
    }
  },
  ports: {
    input: {
      target: {
        name: "target",
        description: "The id of the textinput or textarea that should be monitored.",
        type: "string",
        "default": null,
        title: "Target"
      },
      showCounter: {
        name: "showCounter",
        description: "If false, don't show the character counter. Used in conjunction with\n`paper-input-decorator's` `error` field.",
        type: "boolean",
        "default": true,
        title: "Show counter"
      }
    },
    output: {}
  }
}