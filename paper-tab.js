module.exports = {
  name: "paper-tab",
  title: "Paper tab",
  ns: "polymer",
  type: "polymer",
  description: "`paper-tab` is styled to look like a tab.  It should be used in conjunction with\n`paper-tabs`.\n\nExample:\n\n    <paper-tabs selected=\"0\">\n      <paper-tab>TAB 1</paper-tab>\n      <paper-tab>TAB 2</paper-tab>\n      <paper-tab>TAB 3</paper-tab>\n    </paper-tabs>\n    \nStyling tab:\n\nTo change the ink color:\n\n    .pink paper-tab::shadow #ink {\n      color: #ff4081;\n    }",
  dependencies: {
    bower: {
      "paper-tab": "Polymer/paper-tab#master"
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
      }
    },
    output: {}
  }
}