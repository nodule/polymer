module.exports = {
  name: "paper-dropdown-menu",
  title: "Paper dropdown menu",
  ns: "polymer",
  type: "polymer",
  description: "`paper-dropdown-menu` works together with `paper-dropdown` and `core-menu` to\nimplement a drop-down menu. The currently selected item is displayed in the\ncontrol. If no item is selected, the `label` is displayed instead.\n\nThe child element with the class `dropdown` will be used as the drop-down\nmenu. It should be a `paper-dropdown` or other overlay element. You should\nalso provide a `core-selector` or other selector element, such as `core-menu`,\nin the drop-down. You should apply the class `menu` to the selector element.\n\nExample:\n\n    <paper-dropdown-menu label=\"Your favorite pastry\">\n        <paper-dropdown class=\"dropdown\">\n            <core-menu class=\"menu\">\n                <paper-item>Croissant</paper-item>\n                <paper-item>Donut</paper-item>\n                <paper-item>Financier</paper-item>\n                <paper-item>Madeleine</paper-item>\n            </core-menu>\n        </paper-dropdown>\n    </paper-dropdown-menu>\n\nThis example renders a drop-down menu with 4 options.",
  dependencies: {
    bower: {
      "paper-dropdown-menu": "Polymer/paper-dropdown-menu#master"
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