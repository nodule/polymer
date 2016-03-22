module.exports = {
  name: "paper-fab",
  title: "Paper fab",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/buttons.html\">Button</a>\n\n`paper-fab` is a floating action button. It contains an image placed in the center and\ncomes in two sizes: regular size and a smaller size by applying the attribute `mini`. When\nthe user touches the button, a ripple effect emanates from the center of the button.\n\nYou may import `core-icons` to use with this element, or provide an URL to a custom icon.\nSee `core-iconset` for more information about how to use a custom icon set.\n\nExample:\n\n    <link href=\"path/to/core-icons/core-icons.html\" rel=\"import\">\n\n    <paper-fab icon=\"add\"></paper-fab>\n    <paper-fab mini icon=\"favorite\"></paper-fab>\n    <paper-fab src=\"star.png\"></paper-fab>\n\nStyling\n-------\n\nStyle the button with CSS as you would a normal DOM element. If you are using the icons\nprovided by `core-icons`, the icon will inherit the foreground color of the button.\n\n    /* make a blue \"cloud\" button */\n    <paper-fab icon=\"cloud\" style=\"color: blue;\"></paper-fab>\n\nBy default, the ripple is the same color as the foreground at 25% opacity. You may\ncustomize the color using this selector:\n\n    /* make #my-button use a blue ripple instead of foreground color */\n    #my-button::shadow #ripple {\n      color: blue;\n    }\n\nThe opacity of the ripple is not customizable via CSS.\n\nAccessibility\n-------------\n\nThe button is accessible by default if you use the `icon` property. By default, the\n`aria-label` attribute will be set to the `icon` property. If you use a custom icon,\nyou should ensure that the `aria-label` attribute is set.\n\n    <paper-fab src=\"star.png\" aria-label=\"star\"></paper-fab>",
  dependencies: {
    bower: {
      "paper-fab": "Polymer/paper-fab#master"
    }
  },
  ports: {
    input: {
      src: {
        name: "src",
        description: "The URL of an image for the icon. If the src property is specified,\nthe icon property should not be.",
        type: "string",
        "default": "",
        title: "Src"
      },
      icon: {
        name: "icon",
        description: "Specifies the icon name or index in the set of icons available in\nthe icon's icon set. If the icon property is specified,\nthe src property should not be.",
        type: "string",
        "default": "",
        title: "Icon"
      },
      mini: {
        name: "mini",
        description: "Set this to true to style this is a \"mini\" FAB.",
        type: "boolean",
        "default": false,
        title: "Mini"
      }
    },
    output: {}
  }
}