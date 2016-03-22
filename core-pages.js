module.exports = {
  name: "core-pages",
  title: "Core pages",
  ns: "polymer",
  type: "polymer",
  description: "`core-pages` is used to select one of its children to show. One use is to cycle through a list of children \"pages\".\n\nExample: \n\n    <core-pages selected=\"0\">\n      <div>One</div>\n      <div>Two</div>\n      <div>Three</div>\n    </core-pages>\n\n    <script>\n      document.addEventListener('click', function(e) {\n        var pages = document.querySelector('core-pages');\n        pages.selected = (pages.selected + 1) % pages.children.length;\n      });\n    </script>",
  dependencies: {
    bower: {
      "core-pages": "Polymer/core-pages#master"
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