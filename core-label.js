module.exports = {
  name: "core-label",
  title: "Core label",
  ns: "polymer",
  type: "polymer",
  description: "`<core-label>` provides a version of the `<label>` element that works with Custom Elements as well as native elements.\n\nAll text in the `core-label` will be applied to the target element as a screen-reader accessible description.\n\nThere are two ways to use `core-label` to target an element:\n\n1. place an element inside core-label with the `for` attribute:\n\n        <core-label>\n          Context for the Button\n          <paper-button for>button</paper-button>\n        </core-label>\n\n2. Set the `for` attribute on the `core-label` element to point to a target element in the same scope with a query\nstring:\n\n        <core-label for=\".foo\">\n          Context for the button witht the \"foo\" class\"\n        </core-label>\n        <paper-button class=\"foo\">Far away button</paper-button>\n\nAll taps on the `core-label` will be forwarded to the \"target\" element.",
  dependencies: {
    bower: {
      "core-label": "Polymer/core-label#master"
    }
  },
  ports: {
    input: {
      "for": {
        name: "for",
        description: "A query selector string for a \"target\" element not nested in the `<core-label>`",
        type: "string",
        "default": "",
        title: "For"
      }
    },
    output: {}
  }
}