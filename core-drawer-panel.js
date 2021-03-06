module.exports = {
  name: "core-drawer-panel",
  title: "Core drawer panel",
  ns: "polymer",
  type: "polymer",
  description: "`core-drawer-panel` contains a drawer panel and a main panel.  The drawer\nand the main panel are side-by-side with drawer on the left.  When the browser\nwindow size is smaller than the `responsiveWidth`, `core-drawer-panel`\nchanges to narrow layout.  In narrow layout, the drawer will be stacked on top\nof the main panel.  The drawer will slide in/out to hide/reveal the main\npanel.\n\nUse the attribute `drawer` to indicate that the element is the drawer panel and\n`main` to indicate that the element is the main panel.\n\nExample:\n\n    <core-drawer-panel>\n      <div drawer> Drawer panel... </div>\n      <div main> Main panel... </div>\n    </core-drawer-panel>\n\nThe drawer and the main panels are not scrollable.  You can set CSS overflow\nproperty on the elements to make them scrollable or use `core-header-panel`.\n\nExample:\n\n    <core-drawer-panel>\n      <core-header-panel drawer>\n        <core-toolbar></core-toolbar>\n        <div> Drawer content... </div>\n      </core-header-panel>\n      <core-header-panel main>\n        <core-toolbar></core-toolbar>\n        <div> Main content... </div>\n      </core-header-panel>\n    </core-drawer-panel>\n\nAn element that should toggle the drawer will automatically do so if it's \ngiven the `core-drawer-toggle` attribute.  Also this element will automatically\nbe hidden in wide layout.\n\nExample:\n\n    <core-drawer-panel>\n      <core-header-panel drawer>\n        <core-toolbar>\n          <div>Application</div>\n        </core-toolbar>\n        <div> Drawer content... </div>\n      </core-header-panel>\n      <core-header-panel main>\n        <core-toolbar>\n          <core-icon-button icon=\"menu\" core-drawer-toggle></core-icon-button>\n          <div>Title</div>\n        </core-toolbar>\n        <div> Main content... </div>\n      </core-header-panel>\n    </core-drawer-panel>\n\nTo position the drawer to the right, add `rightDrawer` attribute.\n\n    <core-drawer-panel rightDrawer>\n      <div drawer> Drawer panel... </div>\n      <div main> Main panel... </div>\n    </core-drawer-panel>",
  dependencies: {
    bower: {
      "core-drawer-panel": "Polymer/core-drawer-panel#master"
    }
  },
  ports: {
    input: {
      drawerWidth: {
        name: "drawerWidth",
        description: "Width of the drawer panel.",
        type: "string",
        "default": "256px",
        title: "Drawer width"
      },
      responsiveWidth: {
        name: "responsiveWidth",
        description: "Max-width when the panel changes to narrow layout.",
        type: "string",
        "default": "640px",
        title: "Responsive width"
      },
      selected: {
        name: "selected",
        description: "The panel that is being selected. `drawer` for the drawer panel and\n`main` for the main panel.",
        type: "string",
        "default": null,
        title: "Selected"
      },
      defaultSelected: {
        name: "defaultSelected",
        description: "The panel to be selected when `core-drawer-panel` changes to narrow\nlayout.",
        type: "string",
        "default": "main",
        title: "Default selected"
      },
      narrow: {
        name: "narrow",
        description: "Returns true if the panel is in narrow layout.  This is useful if you\nneed to show/hide elements based on the layout.",
        type: "boolean",
        "default": false,
        title: "Narrow"
      },
      rightDrawer: {
        name: "rightDrawer",
        description: "If true, position the drawer to the right.",
        type: "boolean",
        "default": false,
        title: "Right drawer"
      },
      disableSwipe: {
        name: "disableSwipe",
        description: "If true, swipe to open/close the drawer is disabled.",
        type: "boolean",
        "default": false,
        title: "Disable swipe"
      },
      forceNarrow: {
        name: "forceNarrow",
        description: "If true, ignore `responsiveWidth` setting and force the narrow layout.",
        type: "boolean",
        "default": false,
        title: "Force narrow"
      },
      disableEdgeSwipe: {
        name: "disableEdgeSwipe",
        description: "If true, swipe from the edge is disabled.",
        type: "boolean",
        "default": false,
        title: "Disable edge swipe"
      },
      togglePanel: {
        name: "togglePanel",
        description: "Toggles the panel open and closed.",
        title: "Toggle panel",
        async: true
      },
      openDrawer: {
        name: "openDrawer",
        description: "Opens the drawer.",
        title: "Open drawer",
        async: true
      },
      closeDrawer: {
        name: "closeDrawer",
        description: "Closes the drawer.",
        title: "Close drawer",
        async: true
      }
    },
    output: {
      "core-responsive-change": {
        name: "core-responsive-change",
        description: "Fired when the narrow layout changes.",
        title: "Core responsive change",
        type: "object",
        properties: {
          detail: {
            type: "Object",
            name: "detail",
            title: "Detail",
            properties: {
              narrow: {
                type: "boolean",
                name: "narrow",
                description: "true if the panel is in narrow layout.",
                title: "Narrow"
              }
            }
          }
        }
      },
      "core-select": {
        name: "core-select",
        description: "Fired when the selected panel changes.\n\nListening for this event is an alternative to observing changes in the `selected` attribute.\nThis event is fired both when a panel is selected and deselected.\nThe `isSelected` detail property contains the selection state.",
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
                description: "the panel that the event refers to",
                title: "Item"
              }
            }
          }
        }
      }
    }
  }
}