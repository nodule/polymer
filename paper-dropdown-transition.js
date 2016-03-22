module.exports = {
  name: "paper-dropdown-transition",
  title: "Paper dropdown transition",
  ns: "polymer",
  type: "polymer",
  description: "`paper-dropdown-transition` is a transition for `paper-dropdown`.\n\nAdd the class `menu` to a `core-selector` child of the `paper-dropdown` to\nenable the optional list cascade transition.",
  dependencies: {
    bower: {
      "paper-dropdown-transition": "Polymer/paper-dropdown-transition#master"
    }
  },
  ports: {
    input: {
      duration: {
        name: "duration",
        description: "The duration of the transition in ms. You can also set the duration by\nsetting a `duration` attribute on the target:\n\n   <paper-dropdown duration=\"1000\"></paper-dropdown>",
        type: "number",
        "default": 500,
        title: "Duration"
      }
    },
    output: {}
  }
}