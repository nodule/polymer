module.exports = {
  name: "core-menu",
  title: "Core menu",
  ns: "polymer",
  type: "polymer",
  description: "`core-menu` is a selector which styles to looks like a menu.\n\n    <core-menu selected=\"0\">\n      <core-item icon=\"settings\" label=\"Settings\"></core-item>\n      <core-item icon=\"dialog\" label=\"Dialog\"></core-item>\n      <core-item icon=\"search\" label=\"Search\"></core-item>\n    </core-menu>\n    \nWhen an item is selected the `core-selected` class is added to it.  The user can\nuse the class to add more stylings to the selected item.\n\n    core-item.core-selected {\n      color: red;\n    }\n\nThe `selectedItem` property references the selected item.\n\n    <core-menu selected=\"0\" selectedItem=\"{{item}}\">\n      <core-item icon=\"settings\" label=\"Settings\"></core-item>\n      <core-item icon=\"dialog\" label=\"Dialog\"></core-item>\n      <core-item icon=\"search\" label=\"Search\"></core-item>\n    </core-menu>\n\n    <div>selected label: {{item.label}}</div>\n\nThe `core-select` event signals selection change.\n\n    <core-menu selected=\"0\" on-core-select=\"{{selectAction}}\">\n      <core-item icon=\"settings\" label=\"Settings\"></core-item>\n      <core-item icon=\"dialog\" label=\"Dialog\"></core-item>\n      <core-item icon=\"search\" label=\"Search\"></core-item>\n    </core-menu>\n\n    ...\n\n    selectAction: function(e, detail) {\n      if (detail.isSelected) {\n        var selectedItem = detail.item;\n        ...\n      }\n    }",
  dependencies: {
    bower: {
      "core-menu": "Polymer/core-menu#master"
    }
  },
  ports: {
    input: {
      noink: {
        name: "noink",
        description: "If true, ink ripple effect is disabled.",
        type: "boolean",
        "default": false,
        title: "Noink"
      },
      nobar: {
        name: "nobar",
        description: "If true, the bottom bar to indicate the selected tab will not be shown.",
        type: "boolean",
        "default": false,
        title: "Nobar"
      },
      noslide: {
        name: "noslide",
        description: "If true, the slide effect for the bottom bar is disabled.",
        type: "boolean",
        "default": false,
        title: "Noslide"
      },
      scrollable: {
        name: "scrollable",
        description: "If true, tabs are scrollable and the tab width is based on the label width.",
        type: "boolean",
        "default": false,
        title: "Scrollable"
      },
      disableDrag: {
        name: "disableDrag",
        description: "If true, dragging on the tabs to scroll is disabled.",
        type: "boolean",
        "default": false,
        title: "Disable drag"
      },
      hideScrollButton: {
        name: "hideScrollButton",
        description: "If true, scroll buttons (left/right arrow) will be hidden for scrollable tabs.",
        type: "boolean",
        "default": false,
        title: "Hide scroll button"
      },
      updateBar: {
        name: "updateBar",
        description: "Invoke this to update the size and position of the bottom bar.  Usually\nyou only need to call this if the `paper-tabs` is initially hidden and\nlater becomes visible.",
        title: "Update bar",
        async: true
      }
    },
    output: {
      "core-select": {
        name: "core-select",
        description: "Fired when an item's selection state is changed. This event is fired both\nwhen an item is selected or deselected. The `isSelected` detail property\ncontains the selection state.",
        title: "Core select",
        type: "object",
        properties: {
          detail: {
            type: "Object",
            name: "detail",
            title: "Detail",
            properties: {
              isSelected: {
                type: "boolean",
                name: "isSelected",
                description: "true for selection and false for deselection",
                title: "Is selected"
              },
              item: {
                type: "Object",
                name: "item",
                description: "the item element",
                title: "Item"
              }
            }
          }
        }
      },
      "core-activate": {
        name: "core-activate",
        description: "Fired when an item element is tapped.",
        title: "Core activate",
        type: "object",
        properties: {
          detail: {
            type: "Object",
            name: "detail",
            title: "Detail",
            properties: {
              item: {
                type: "Object",
                name: "item",
                description: "the item element",
                title: "Item"
              }
            }
          }
        }
      }
    }
  }
}