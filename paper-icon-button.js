module.exports = {
  name: "paper-icon-button",
  title: "Paper icon button",
  ns: "polymer",
  type: "polymer",
  description: "Material Design: <a href=\"http://www.google.com/design/spec/components/buttons.html\">Buttons</a>\n\n`paper-icon-button` is a button with an image placed at the center. When the user touches\nthe button, a ripple effect emanates from the center of the button.\n\n`paper-icon-button` includes a default icon set.  Use `icon` to specify which icon\nfrom the icon set to use.\n\n    <paper-icon-button icon=\"menu\"></paper-icon-button>\n\nSee [`core-iconset`](#core-iconset) for more information about\nhow to use a custom icon set.\n\nExample:\n\n    <link href=\"path/to/core-icons/core-icons.html\" rel=\"import\">\n\n    <paper-icon-button icon=\"favorite\"></paper-icon-button>\n    <paper-icon-button src=\"star.png\"></paper-icon-button>\n\nStyling\n-------\n\nStyle the button with CSS as you would a normal DOM element. If you are using the icons\nprovided by `core-icons`, they will inherit the foreground color of the button.\n\n    /* make a red \"favorite\" button */\n    <paper-icon-button icon=\"favorite\" style=\"color: red;\"></paper-icon-button>\n\nBy default, the ripple is the same color as the foreground at 25% opacity. You may\ncustomize the color using this selector:\n\n    /* make #my-button use a blue ripple instead of foreground color */\n    #my-button::shadow #ripple {\n      color: blue;\n    }\n\nThe opacity of the ripple is not customizable via CSS.\n\nAccessibility\n-------------\n\nThe button is accessible by default if you use the `icon` property. By default, the\n`aria-label` attribute will be set to the `icon` property. If you use a custom icon,\nyou should ensure that the `aria-label` attribute is set.\n\n    <paper-icon-button src=\"star.png\" aria-label=\"star\"></paper-icon-button>",
  dependencies: {
    bower: {
      "paper-icon-button": "Polymer/paper-icon-button#master"
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
      }
    },
    output: {}
  }
}