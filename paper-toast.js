module.exports = {
  name: "paper-toast",
  title: "Paper toast",
  ns: "polymer",
  type: "polymer",
  description: "`paper-toast` provides lightweight feedback about an operation in a small popup \nat the base of the screen on mobile and at the lower left on desktop. Toasts are \nabove all other elements on screen, including the FAB.\n\nToasts automatically disappear after a timeout or after user interaction \nelsewhere on the screen, whichever comes first. Toasts can be swiped off \nscreen.  There can be only one on the screen at a time.\n\nExample:\n\n    <paper-toast text=\"Your draft has been discarded.\" onclick=\"discardDraft(el)\"></paper-toast>\n    \n    <script>\n      function discardDraft(el) {\n        el.show();\n      }\n    </script>\n    \nAn action button can be presented in the toast.\n\nExample (using Polymer's data-binding features):\n\n    <paper-toast id=\"toast2\" text=\"Connection timed out. Showing limited messages.\">\n      <div style=\"color: blue;\" on-tap=\"{{retry}}\">Retry</div>\n    </paper-toast>\n    \nPositioning toast:\n\nA standard toast appears near the lower left of the screen.  You can change the\nposition by overriding bottom and left positions.\n\n    paper-toast {\n      bottom: 40px;\n      left: 10px;\n    }\n    \nTo position the toast to the right:\n\n    paper-toast {\n      right: 10px;\n      left: auto;\n    } \n  \nTo make it fit at the bottom of the screen:\n\n    paper-toast {\n      bottom: 0;\n      left: 0;\n      width: 100%;\n    }\n  \nWhen the screen size is smaller than the `responsiveWidth` (default to 480px),\nthe toast will automatically fits at the bottom of the screen.",
  dependencies: {
    bower: {
      "paper-toast": "Polymer/paper-toast#master"
    }
  },
  ports: {
    input: {
      text: {
        name: "text",
        description: "The text shows in a toast.",
        type: "string",
        "default": "",
        title: "Text"
      },
      duration: {
        name: "duration",
        description: "The duration in milliseconds to show the toast.",
        type: "number",
        "default": 3000,
        title: "Duration"
      },
      opened: {
        name: "opened",
        description: "Set opened to true to show the toast and to false to hide it.",
        type: "boolean",
        "default": false,
        title: "Opened"
      },
      responsiveWidth: {
        name: "responsiveWidth",
        description: "Min-width when the toast changes to narrow layout.  In narrow layout,\nthe toast fits at the bottom of the screen when opened.",
        type: "string",
        "default": "480px",
        title: "Responsive width"
      },
      swipeDisabled: {
        name: "swipeDisabled",
        description: "If true, the toast can't be swiped.",
        type: "boolean",
        "default": false,
        title: "Swipe disabled"
      },
      autoCloseDisabled: {
        name: "autoCloseDisabled",
        description: "By default, the toast will close automatically if the user taps\noutside it or presses the escape key. Disable this behavior by setting\nthe `autoCloseDisabled` property to true.",
        type: "boolean",
        "default": false,
        title: "Auto close disabled"
      },
      toggle: {
        name: "toggle",
        description: "Toggle the opened state of the toast.",
        title: "Toggle",
        async: true
      },
      show: {
        name: "show",
        description: "Show the toast for the specified duration",
        title: "Show",
        async: true
      },
      dismiss: {
        name: "dismiss",
        description: "Dismiss the toast and hide it.",
        title: "Dismiss",
        async: true
      }
    },
    output: {
      "core-overlay-open": {
        name: "core-overlay-open",
        description: "Fired when the `paper-toast`'s `opened` property changes.",
        title: "Core overlay open",
        type: "object",
        properties: {
          detail: {
            type: "boolean",
            name: "detail",
            description: "the opened state",
            title: "Detail"
          }
        }
      },
      "core-overlay-open-completed": {
        name: "core-overlay-open-completed",
        description: "Fired when the `paper-toast` has completely opened.",
        title: "Core overlay open completed"
      },
      "core-overlay-close-completed": {
        name: "core-overlay-close-completed",
        description: "Fired when the `paper-toast` has completely closed.",
        title: "Core overlay close completed"
      }
    }
  }
}