module.exports = {
  name: "core-item",
  title: "Core item",
  ns: "polymer",
  type: "polymer",
  description: "`core-item` is a simple line-item object: a label and/or an icon that can also \nact as a link.\n\nExample:\n\n    <core-item icon=\"settings\" label=\"Settings\"></core-item>\n    \nTo use as a link, put &lt;a&gt; element in the item.\n\nExample:\n\n    <core-item icon=\"settings\" label=\"Settings\">\n      <a href=\"#settings\" target=\"_self\"></a>\n    </core-item>",
  dependencies: {
    bower: {
      "core-item": "Polymer/core-item#master"
    }
  },
  ports: {
    input: {
      src: {
        name: "src",
        description: "The URL of an image for the icon.",
        type: "string",
        "default": "",
        title: "Src"
      },
      icon: {
        name: "icon",
        description: "Specifies the icon from the Polymer icon set.",
        type: "string",
        "default": "",
        title: "Icon"
      },
      label: {
        name: "label",
        description: "Specifies the label for the menu item.",
        type: "string",
        "default": "",
        title: "Label"
      }
    },
    output: {}
  }
}