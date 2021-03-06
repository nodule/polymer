module.exports = {
  name: "paper-tabs",
  title: "Paper tabs",
  ns: "polymer",
  type: "polymer",
  description: "`paper-tabs` is a `core-selector` styled to look like tabs. Tabs make it easy to \nexplore and switch between different views or functional aspects of an app, or \nto browse categorized data sets.\n\nUse `selected` property to get or set the selected tab.\n\nExample:\n\n    <paper-tabs selected=\"0\">\n      <paper-tab>TAB 1</paper-tab>\n      <paper-tab>TAB 2</paper-tab>\n      <paper-tab>TAB 3</paper-tab>\n    </paper-tabs>\n\nSee <a href=\"#paper-tab\">paper-tab</a> for more information about \n`paper-tab`.\n\nA common usage for `paper-tabs` is to use it along with `core-pages` to switch\nbetween different views.\n\n    <paper-tabs selected=\"{{selected}}\">\n      <paper-tab>Tab 1</paper-tab>\n      <paper-tab>Tab 2</paper-tab>\n      <paper-tab>Tab 3</paper-tab>\n    </paper-tabs>\n  \n    <core-pages selected=\"{{selected}}>\n      <div>Page 1</div>\n      <div>Page 2</div>\n      <div>Page 3</div>\n    </core-pages>\n    \n`paper-tabs` adapt to mobile/narrow layout when there is a `core-narrow` class set\non itself or any of its ancestors.\n\nTo use links in tabs, add `link` attribute to `paper-tabs` and put an `<a>`\nelement in `paper-tab`.\n\nExample:\n\n    <paper-tabs selected=\"0\" link>\n      <paper-tab>\n        <a href=\"#link1\" horizontal center-center layout>TAB ONE</a>\n      </paper-tab>\n      <paper-tab>\n        <a href=\"#link2\" horizontal center-center layout>TAB TWO</a>\n      </paper-tab>\n      <paper-tab>\n        <a href=\"#link3\" horizontal center-center layout>TAB THREE</a>\n      </paper-tab>\n    </paper-tabs>\n\nStyling tabs:\n\nTo change the sliding bar color:\n\n    paper-tabs.pink::shadow #selectionBar {\n      background-color: #ff4081;\n    }\n    \nTo change the ink ripple color:\n\n    paper-tabs.pink paper-tab::shadow #ink {\n      color: #ff4081;\n    }",
  dependencies: {
    bower: {
      "paper-tabs": "Polymer/paper-tabs#master"
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
    output: {}
  }
}