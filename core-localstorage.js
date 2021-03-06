module.exports = {
  name: "core-localstorage",
  title: "Core localstorage",
  ns: "polymer",
  type: "polymer",
  description: "Element access to localStorage.  The \"name\" property\nis the key to the data (\"value\" property) stored in localStorage.\n\n`core-localstorage` automatically saves the value to localStorage when\nvalue is changed.  Note that if value is an object auto-save will be\ntriggered only when value is a different instance.\n\n    <core-localstorage name=\"my-app-storage\" value=\"{{value}}\"></core-localstorage>",
  dependencies: {
    bower: {
      "core-localstorage": "Polymer/core-localstorage#master"
    }
  },
  ports: {
    input: {
      name: {
        name: "name",
        description: "The key to the data stored in localStorage.",
        type: "string",
        "default": null,
        title: "Name"
      },
      value: {
        name: "value",
        description: "The data associated with the specified name.",
        type: "object",
        "default": null,
        title: "Value"
      },
      useRaw: {
        name: "useRaw",
        description: "If true, the value is stored and retrieved without JSON processing.",
        type: "boolean",
        "default": false,
        title: "Use raw"
      },
      autoSaveDisabled: {
        name: "autoSaveDisabled",
        description: "If true, auto save is disabled.",
        type: "boolean",
        "default": false,
        title: "Auto save disabled"
      },
      save: {
        name: "save",
        description: "Saves the value to localStorage.",
        title: "Save",
        async: true
      }
    },
    output: {
      "core-localstorage-load": {
        name: "core-localstorage-load",
        description: "Fired when a value is loaded from localStorage.",
        title: "Core localstorage load"
      }
    }
  }
}