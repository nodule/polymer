module.exports = {
  name: "core-submenu",
  title: "Core submenu",
  ns: "polymer",
  type: "polymer",
  description: "Use to create nested menus inside of `core-menu` elements.\n\n    <core-menu selected=\"0\">\n    \n      <core-submenu icon=\"settings\" label=\"Topics\">\n        <core-item label=\"Topic 1\"></core-item>\n        <core-item label=\"Topic 2\"></core-item>\n      </core-submenu>\n      \n      <core-submenu icon=\"settings\" label=\"Favorites\">\n        <core-item label=\"Favorite 1\"></core-item>\n        <core-item label=\"Favorite 2\"></core-item>\n        <core-item label=\"Favorite 3\"></core-item>\n      </core-submenu>\n      \n    </core-menu>\n    \nThere is a margin set on the submenu to indent the items.\nYou can override the margin by doing:\n\n    core-submenu::shadow #submenu {\n      margin-left: 20px;\n    }\n\nTo style the item for the submenu, do something like this:\n\n    core-submenu::shadow > #submenuItem {\n      color: blue;\n    }\n    \nTo style all the `core-item`s in the light DOM:\n\n    polyfill-next-selector { content: 'core-submenu > #submenu > core-item'; }\n    core-submenu > core-item {\n      color: red;\n    }\n    \nThe above will style `Topic1` and `Topic2` to have font color red.\n\n    <core-submenu icon=\"settings\" label=\"Topics\">\n      <core-item label=\"Topic1\"></core-item>\n      <core-item label=\"Topic2\"></core-item>\n    </core-submenu>",
  dependencies: {
    bower: {
      "core-submenu": "Polymer/core-submenu#master"
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