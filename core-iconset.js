module.exports = {
  name: "core-iconset",
  title: "Core iconset",
  ns: "polymer",
  type: "polymer",
  description: "The `core-iconset` element allows users to define their own icon sets. \nThe `src` property specifies the url of the icon image. Multiple icons may\nbe included in this image and they may be organized into rows.\nThe `icons` property is a space separated list of names corresponding to the\nicons. The names must be ordered as the icons are ordered in the icon image.\nIcons are expected to be square and are the size specified by the `iconSize`\nproperty. The `width` property corresponds to the width of the icon image \nand must be specified if icons are arranged into multiple rows in the image.\n\nAll `core-iconset` elements are available for use by other `core-iconset`\nelements via a database keyed by id. Typically, an element author that wants\nto support a set of custom icons uses a `core-iconset` to retrieve \nand use another, user-defined iconset.\n\nExample:\n\n    <core-iconset id=\"my-icons\" src=\"my-icons.png\" width=\"96\" iconSize=\"24\"\n        icons=\"location place starta stopb bus car train walk\">\n    </core-iconset>\n\nThis will automatically register the icon set \"my-icons\" to the iconset\ndatabase.  To use these icons from within another element, make a \n`core-iconset` element and call the `byId` method to retrieve a\ngiven iconset. To apply a particular icon to an element, use the \n`applyIcon` method. For example:\n\n    iconset.applyIcon(iconNode, 'car');\n\nThemed icon sets are also supported. The `core-iconset` can contain child\n`property` elements that specify a theme with an offsetX and offsetY of the\ntheme within the icon resource. For example.\n\n    <core-iconset id=\"my-icons\" src=\"my-icons.png\" width=\"96\" iconSize=\"24\"\n        icons=\"location place starta stopb bus car train walk\">\n      <property theme=\"special\" offsetX=\"256\" offsetY=\"24\"></property>\n    </core-iconset>\n\nThen a themed icon can be applied like this:\n\n    iconset.applyIcon(iconNode, 'car', 'special');",
  dependencies: {
    bower: {
      "core-iconset": "Polymer/core-iconset#master"
    }
  },
  ports: {
    input: {
      src: {
        name: "src",
        description: "The URL of the iconset image.",
        type: "string",
        "default": "",
        title: "Src"
      },
      width: {
        name: "width",
        description: "The width of the iconset image. This must only be specified if the\nicons are arranged into separate rows inside the image.",
        type: "number",
        "default": 0,
        title: "Width"
      },
      icons: {
        name: "icons",
        description: "A space separated list of names corresponding to icons in the iconset\nimage file. This list must be ordered the same as the icon images\nin the image file.",
        type: "string",
        "default": "",
        title: "Icons"
      },
      iconSize: {
        name: "iconSize",
        description: "The size of an individual icon. Note that icons must be square.",
        type: "number",
        "default": 24,
        title: "Icon size"
      },
      offsetX: {
        name: "offsetX",
        description: "The horizontal offset of the icon images in the inconset src image.\nThis is typically used if the image resource contains additional images\nbeside those intended for the iconset.",
        type: "number",
        "default": 0,
        title: "Offset x"
      },
      offsetY: {
        name: "offsetY",
        description: "The vertical offset of the icon images in the inconset src image.\nThis is typically used if the image resource contains additional images\nbeside those intended for the iconset.",
        type: "number",
        "default": 0,
        title: "Offset y"
      },
      getOffset: {
        name: "getOffset",
        description: "Returns an object containing `offsetX` and `offsetY` properties which\nspecify the pixel locaion in the iconset's src file for the given\n`icon` and `theme`. It's uncommon to call this method. It is useful,\nfor example, to manually position a css backgroundImage to the proper\noffset. It's more common to use the `applyIcon` method.\n\nicon within in the icon image.\nwithin the icon resource file; `offsetX` is the horizontal offset and\n`offsetY` is the vertical offset. Both values are in pixel units.",
        title: "Get offset",
        async: true,
        type: "object",
        properties: {
          icon: {
            type: "String|Number",
            name: "icon",
            description: "The name of the icon or the index of the",
            title: "Icon"
          },
          theme: {
            type: "String",
            name: "theme",
            description: "The name of the theme.",
            title: "Theme"
          }
        }
      },
      applyIcon: {
        name: "applyIcon",
        description: "Applies an icon to the given element as a css background image. This\nmethod does not size the element, and it's often necessary to set \nthe element's height and width so that the background image is visible.\n\napplied.\nwith which the icon can be magnified.",
        title: "Apply icon",
        async: true,
        type: "object",
        properties: {
          element: {
            type: "Element",
            name: "element",
            description: "The element to which the background is",
            title: "Element"
          },
          icon: {
            type: "String|Number",
            name: "icon",
            description: "The name or index of the icon to apply.",
            title: "Icon"
          },
          scale: {
            type: "Number",
            name: "scale",
            description: "(optional, defaults to 1) A scaling factor ",
            title: "Scale"
          }
        }
      }
    },
    output: {}
  }
}