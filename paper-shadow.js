module.exports = {
  name: "paper-shadow",
  title: "Paper shadow",
  ns: "polymer",
  type: "polymer",
  description: "`paper-shadow` is a container that renders two shadows on top of each other to\ncreate the effect of a lifted piece of paper.\n\nExample:\n\n    <paper-shadow z=\"1\">\n      ... card content ...\n    </paper-shadow>",
  dependencies: {
    bower: {
      "paper-shadow": "Polymer/paper-shadow#master"
    }
  },
  ports: {
    input: {
      z: {
        name: "z",
        description: "The z-depth of this shadow, from 0-5. Setting this property\nafter element creation has no effect. Use `setZ()` instead.",
        type: "number",
        "default": 1,
        title: "Z"
      },
      animated: {
        name: "animated",
        description: "Set this to true to animate the shadow when setting a new\n`z` value.",
        type: "boolean",
        "default": false,
        title: "Animated"
      },
      setZ: {
        name: "setZ",
        description: "Set the z-depth of the shadow. This should be used after element\ncreation instead of setting the z property directly.",
        title: "Set z",
        async: true
      }
    },
    output: {}
  }
}