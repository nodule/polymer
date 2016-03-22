module.exports = {
  name: "core-transition-css",
  title: "Core transition css",
  ns: "polymer",
  type: "polymer",
  description: "`<core-transition-css>` implements CSS transitions as `<core-transition>` objects so they can be\nreused in a pluggable transition system such as in `<core-overlay>`. Currently this class has\nsome specific support to animate an element from and to the viewport such as a dialog, but you\ncan override it for different effects.\n\nExample:\n\nmy-css-transition.html:\n\n    <polymer-element name=\"my-css-transition\" extends=\"core-transition-css\">\n    <template>\n        <style>\n            :host(.my-transition) {\n                opacity: 0;\n                transition: transform 1s ease-out, opacity 1s ease-out;\n            }\n            :host(.my-transition.my-opened) {\n                opacity: 1;\n                transform: none;\n            }\n            :host(.my-transition-top) {\n                transform: translateY(-100vh);\n            }\n            :host(.my-transition-bottom) {\n                transform: translateY(100vh);\n            }\n        </style>\n    </template>\n    <script>\n      Polymer({\n        baseClass: 'my-transition',\n        openedClass: 'my-opened'\n      });\n    </script>\n    </polymer-element>\n\n    <my-css-transition id=\"my-transition-top\" transitionType=\"top\"></my-css-transition>\n    <my-css-transition id=\"my-transition-bottom\" transitionType=\"bottom\"></my-css-transition>\n\nmy-css-transition-demo.html\n\n    <link href=\"components/core-meta/core-meta.html\" rel=\"import\">\n    <link href=\"my-css-transition.html\">\n\n    <div id=\"animate-me\"></div>\n\n    <script>\n        // Get the core-transition\n        var meta = document.createElement('core-meta');\n        meta.type = 'transition';\n        var transition1 = meta.byId('my-transition-top');\n\n        // Set up the animation\n        var animated = document.getElementById('animate-me');\n        transition1.setup(animated);\n        transition1.go(animated, {opened: true});\n    </script>\n\nThe first element in the template of a `<core-transition-css>` object should be a stylesheet. It\nwill be injected to the scope of the animated node in the `setup` function. The node is initially\ninvisible with `opacity: 0`, and you can transition it to an \"opened\" state by passing\n`{opened: true}` to the `go` function.\n\nAll nodes being animated will get the class `my-transition` added in the `setup` function.\nAdditionally, the class `my-transition-<transitionType>` will be applied. You can use the\n`transitionType` attribute to implement several different behaviors with the same\n`<core-transition-css>` object. In the above example, `<my-css-transition>` implements both\nsliding the node from the top of the viewport and from the bottom of the viewport.\n\nAvailable transitions\n---------------------\n\n`<core-transition-css>` includes several commonly used transitions.\n\n`core-transition-fade`: Animates from `opacity: 0` to `opacity: 1` when it opens.\n\n`core-transition-center`: Zooms the node into the final size.\n\n`core-transition-top`: Slides the node into the final position from the top.\n\n`core-transition-bottom`: Slides the node into the final position from the bottom.\n\n`core-transition-left`: Slides the node into the final position from the left.\n\n`core-transition-right`: Slides the node into the final position from the right.",
  dependencies: {
    bower: {
      "core-transition-css": "Polymer/core-transition-css#master"
    }
  },
  ports: {
    input: {
      baseClass: {
        name: "baseClass",
        description: "The class that will be applied to all animated nodes.",
        type: "string",
        "default": "\"core-transition\"",
        title: "Base class"
      },
      openedClass: {
        name: "openedClass",
        description: "The class that will be applied to nodes in the opened state.",
        type: "string",
        "default": "\"core-opened\"",
        title: "Opened class"
      },
      closedClass: {
        name: "closedClass",
        description: "The class that will be applied to nodes in the closed state.",
        type: "string",
        "default": "\"core-closed\"",
        title: "Closed class"
      },
      completeEventName: {
        name: "completeEventName",
        description: "Event to listen to for animation completion.",
        type: "string",
        "default": "\"transitionEnd\"",
        title: "Complete event name"
      },
      transitionType: {
        name: "transitionType",
        description: "A secondary configuration attribute for the animation. The class\n`<baseClass>-<transitionType` is applied to the animated node during\n`setup`.",
        type: "string",
        title: "Transition type"
      }
    },
    output: {}
  }
}