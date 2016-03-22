module.exports = {
  name: "paper-autogrow-textarea",
  title: "Paper autogrow textarea",
  ns: "polymer",
  type: "polymer",
  description: "`paper-autogrow-textarea` is an element containing a textarea that grows in height as more\nlines of input are entered. Unless an explicit height or the `maxRows` property is set, it will\nnever scroll.\n\nExample:\n\n    <paper-autogrow-textarea id=\"a1\">\n        <textarea id=\"t1\"></textarea>\n    </paper-autogrow-textarea>\n\nBecause the `textarea`'s `value` property is not observable, if you set the `value` imperatively\nyou must call `update` to notify this element the value has changed.\n\nExample:\n\n    /* using example HTML above */\n    t1.value = 'some\\ntext';\n    a1.update(t1);",
  dependencies: {
    bower: {
      "paper-autogrow-textarea": "Polymer/paper-autogrow-textarea#master"
    }
  },
  ports: {
    input: {
      target: {
        name: "target",
        description: "The textarea that should auto grow.",
        type: "HTMLTextAreaElement",
        "default": null,
        title: "Target"
      },
      rows: {
        name: "rows",
        description: "The initial number of rows.",
        type: "number",
        "default": 1,
        title: "Rows"
      },
      maxRows: {
        name: "maxRows",
        description: "The maximum number of rows this element can grow to until it\nscrolls. 0 means no maximum.",
        type: "number",
        "default": 0,
        title: "Max rows"
      },
      update: {
        name: "update",
        description: "Sizes this element to fit the input value. This function is automatically called\nwhen the user types in new input, but you must call this function if the value\nis updated imperatively. Takes as parameter the textarea containing the input.",
        title: "Update",
        async: true
      }
    },
    output: {}
  }
}