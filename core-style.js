module.exports = {
  name: "core-style",
  title: "Core style",
  ns: "polymer",
  type: "polymer",
  description: "The `core-style` element helps manage styling inside other elements and can \nbe used to make themes. The `core-style` element can be either a producer \nor consumer of styling. If it has its `id` property set, it's a producer. \nElements that are producers should include css styling as their text content.\nIf a `core-style` has its `ref` property set, it's a consumer. A `core-style`\ntypically sets its `ref` property to the value of the `id` property of the\n`core-style` it wants to use. This allows a single producer to be used in \nmultiple places, for example, in many different elements.\n\nIt's common to place `core-style` producer elements inside HTMLImports.\nRemote stylesheets should be included this way, the &#64;import css mechanism is\nnot currently supported.\n\nHere's a basic example:\n\n    <polymer-element name=\"x-test\" noscript>\n      <template>\n        <core-style ref=\"x-test\"></core-style>\n        <content></content>\n      </template>\n    </polymer-element>\n\nThe `x-test` element above will be styled by any `core-style` elements that have\n`id` set to `x-test`. These `core-style` producers are separate from the element\ndefinition, allowing a user of the element to style it independent of the author's \nstyling. For example:\n\n    <core-style id=\"x-test\">\n      :host {\n        background-color: steelblue;\n      }\n    </core-style>\n\nThe content of the `x-test` `core-style` producer gets included inside the\nshadowRoot of the `x-test` element. If the content of the `x-test` producer\n`core-style` changes, all consumers of it are automatically kept in sync. This\nallows updating styling on the fly.\n\nThe `core-style` element also supports bindings, in which case the producer\n`core-style` element is the model. Here's an example:\n\n    <core-style id=\"x-test\">\n      :host {\n        background-color: {{myColor}};\n      }\n    </core-style>\n    <script>\n      document._currentScript.ownerDocument.getElementById('x-test').myColor = 'orange';\n    </script>\n\nFinally, to facilitate sharing data between `core-style` elements, all\n`core-style` elements have a `g` property which is set to the global \n`CoreStyle.g`. Here's an example:\n\n    <core-style id=\"x-test\">\n      :host {\n        background-color: {{g.myColor}};\n      }\n    </core-style>\n    <script>\n      CoreStyle.g.myColor = 'tomato';\n    </script>\n\nFinally, one `core-style` can be nested inside another. The `core-style`\nelement has a `list` property which is a map of all the `core-style` producers.\nA `core-style` producer's content is available via its `cssText` property. \nPutting this together:\n\n    <core-style id=\"common\">\n      :host {\n        font-family: sans-serif;\n      }\n    </core-style>\n\n    <core-style id=\"x-test\">\n      {{list.common.cssText}}\n\n      :host {\n        background-color: {{g.myColor}};\n      }\n    </core-style>",
  dependencies: {
    bower: {
      "core-style": "Polymer/core-style#master"
    }
  },
  ports: {
    input: {
      id: {
        name: "id",
        description: "The `id` property should be set if the `core-style` is a producer\nof styles. In this case, the `core-style` should have text content\nthat is cssText.",
        type: "string",
        "default": "",
        title: "Id"
      },
      ref: {
        name: "ref",
        description: "The `ref` property should be set if the `core-style` element is a \nconsumer of styles. Set it to the `id` of the desired `core-style`\nelement.",
        type: "string",
        "default": "",
        title: "Ref"
      },
      list: {
        name: "list",
        description: "The `list` is a map of all `core-style` producers stored by `id`. It \nshould be considered readonly. It's useful for nesting one `core-style`\ninside another.",
        type: "object",
        "default": "{map of all `core-style` producers}",
        title: "List"
      }
    },
    output: {}
  }
}