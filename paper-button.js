module.exports = {
  name: "paper-button",
  title: "Paper button",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/buttons.html\">Buttons</a>\n\n`paper-button` is a button. When the user touches the button, a ripple effect emanates\nfrom the point of contact. It may be flat or raised. A raised button is styled with a\nshadow.\n\nExample:\n\n    <paper-button>flat button</paper-button>\n    <paper-button raised>raised button</paper-button>\n    <paper-button noink>No ripple effect</paper-button>\n\nYou may use custom DOM in the button body to create a variety of buttons. For example, to\ncreate a button with an icon and some text:\n\n    <paper-button>\n      <core-icon icon=\"favorite\"></core-icon>\n      custom button content\n    </paper-button>\n\nStyling\n-------\n\nStyle the button with CSS as you would a normal DOM element.\n\n    /* make #my-button green with yellow text */\n    #my-button {\n        background: green;\n        color: yellow;\n    }\n\nBy default, the ripple is the same color as the foreground at 25% opacity. You may\ncustomize the color using this selector:\n\n    /* make #my-button use a blue ripple instead of foreground color */\n    #my-button::shadow #ripple {\n      color: blue;\n    }\n\nThe opacity of the ripple is not customizable via CSS.",
  dependencies: {
    bower: {
      "paper-button": "Polymer/paper-button#master"
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
        description: "By default the ripple expands to fill the button. Set this to true to\nconstrain the ripple to a circle within the button.",
        type: "boolean",
        "default": true,
        title: "Fill"
      }
    },
    output: {}
  }
}