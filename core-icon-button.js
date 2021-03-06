module.exports = {
  name: "core-icon-button",
  title: "Core icon button",
  ns: "polymer",
  type: "polymer",
  description: "`core-icon-button` is an icon with button behaviors.\n\n    <core-icon-button src=\"star.png\"></core-icon-button>\n\n`core-icon-button` includes a default icon set.  Use `icon` to specify \nwhich icon from the icon set to use.\n\n    <core-icon-button icon=\"menu\"></core-icon-button>\n\nSee [`core-iconset`](#core-iconset) for more information about \nhow to use a custom icon set.",
  dependencies: {
    bower: {
      "core-icon-button": "Polymer/core-icon-button#master"
    }
  },
  ports: {
    input: {
      src: {
        name: "src",
        description: "The URL of an image for the icon.  Should not use `icon` property\nif you are using this property.",
        type: "string",
        "default": "",
        title: "Src"
      },
      active: {
        name: "active",
        description: "If true, border is placed around the button to indicate it's\nactive state.",
        type: "boolean",
        "default": false,
        title: "Active"
      },
      icon: {
        name: "icon",
        description: "Specifies the icon name or index in the set of icons available in\nthe icon set.  Should not use `src` property if you are using this\nproperty.",
        type: "string",
        "default": "",
        title: "Icon"
      }
    },
    output: {}
  }
}