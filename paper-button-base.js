module.exports = {
  name: "paper-button-base",
  title: "Paper button base",
  ns: "polymer",
  type: "polymer",
  description: "`paper-button-base` is the base class for button-like elements with ripple and optional shadow.",
  dependencies: {
    bower: {
      "paper-button-base": "Polymer/paper-button-base#master"
    }
  },
  ports: {
    input: {
      raised: {
        name: "raised",
        description: "If true, the button will be styled with a shadow.",
        type: "boolean",
        "default": false,
        title: "Raised"
      },
      recenteringTouch: {
        name: "recenteringTouch",
        description: "By default the ripple emanates from where the user touched the button.\nSet this to true to always center the ripple.",
        type: "boolean",
        "default": false,
        title: "Recentering touch"
      },
      fill: {
        name: "fill",
        description: "By default the ripple expands to fill the button. Set this to false to\nconstrain the ripple to a circle within the button.",
        type: "boolean",
        "default": true,
        title: "Fill"
      }
    },
    output: {}
  }
}