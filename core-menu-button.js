module.exports = {
  name: "core-menu-button",
  title: "Core menu button",
  ns: "polymer",
  type: "polymer",
  description: "`core-menu-button` works together with a button and `core-dropdown` to implement\nan button that displays a drop-down when tapped on.\n\nThe child element with the class `dropdown` will be used as the drop-down\nmenu. It should be a `core-dropdown` or other overlay element.\n\nExample:\n\n    <core-menu-button>\n        <core-icon-button icon=\"menu\"></core-icon-button>\n        <core-dropdown class=\"dropdown\" layered>\n            <core-menu>\n                <core-item>Share</core-item>\n                <core-item>Settings</core-item>\n                <core-item>Help</core-item>\n            </core-menu>\n        </core-dropdown>\n    </core-menu-button>",
  dependencies: {
    bower: {
      "core-menu-button": "Polymer/core-menu-button#master"
    }
  },
  ports: {
    input: {
      label: {
        name: "label",
        description: "A label for the control. The label is displayed if no item is selected.",
        type: "string",
        "default": "Select an item",
        title: "Label"
      },
      openedIcon: {
        name: "openedIcon",
        description: "The icon to display when the drop-down is opened.",
        type: "string",
        "default": "arrow-drop-up",
        title: "Opened icon"
      },
      closedIcon: {
        name: "closedIcon",
        description: "The icon to display when the drop-down is closed.",
        type: "string",
        "default": "arrow-drop-down",
        title: "Closed icon"
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
      }
    }
  }
}