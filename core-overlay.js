module.exports = {
  name: "core-overlay",
  title: "Core overlay",
  ns: "polymer",
  type: "polymer",
  description: "The `core-overlay` element displays overlayed on top of other content. It starts\nout hidden and is displayed by setting its `opened` property to true.\nA `core-overlay's` opened state can be toggled by calling the `toggle`\nmethod.\n\nThe `core-overlay` will, by default, show/hide itself when it's opened. The \n`target` property may be set to another element to cause that element to \nbe shown when the overlay is opened.\n\nIt's common to want a `core-overlay` to animate to its opened\nposition. The `core-overlay` element uses a `core-transition` to handle\nanimation. The default transition is `core-transition-fade` which \ncauses the overlay to fade in when displayed. See \n<a href=\"../core-transition/\">`core-transition`</a> for more\ninformation about customizing a `core-overlay's` opening animation. The\n`backdrop` property can be set to true to show a backdrop behind the overlay\nthat will darken the rest of the window.\n\nAn element that should close the `core-overlay` will automatically\ndo so if it's given the `core-overlay-toggle` attribute. This attribute\ncan be customized with the `closeAttribute` property. You can also use\n`closeSelector` if more general matching is needed.\n\nBy default  `core-overlay` will close whenever the user taps outside it or\npresses the escape key. This behavior can be turned off via the\n`autoCloseDisabled` property.\n\n    <core-overlay>\n      <h2>Dialog</h2>\n      <input placeholder=\"say something...\" autofocus>\n      <div>I agree with this wholeheartedly.</div>\n      <button core-overlay-toggle>OK</button>\n    </core-overlay>\n\n`core-overlay` will automatically size and position itself according to the \nfollowing rules. The overlay's size is constrained such that it does not\noverflow the screen. This is done by setting maxHeight/maxWidth on the \n`sizingTarget`. If the `sizingTarget` already has a setting for one of these\nproperties, it will not be overridden. The overlay should\nbe positioned via css or imperatively using the `core-overlay-position` event.\nIf the overlay is not positioned vertically via setting `top` or `bottom`, it\nwill be centered vertically. The same is true horizontally via a setting to \n`left` or `right`. In addition, css `margin` can be used to provide some space\naround the overlay. This can be used to ensure\nthat, for example, a drop shadow is always visible around the overlay.",
  dependencies: {
    bower: {
      "core-overlay": "Polymer/core-overlay#master"
    }
  },
  ports: {
    input: {
      target: {
        name: "target",
        description: "The target element that will be shown when the overlay is \nopened. If unspecified, the core-overlay itself is the target.",
        type: "Object",
        "default": "the overlay element",
        title: "Target"
      },
      sizingTarget: {
        name: "sizingTarget",
        description: "A `core-overlay`'s size is guaranteed to be \nconstrained to the window size. To achieve this, the sizingElement\nis sized with a max-height/width. By default this element is the \ntarget element, but it can be specifically set to a specific element\ninside the target if that is more appropriate. This is useful, for \nexample, when a region inside the overlay should scroll if needed.",
        type: "Object",
        "default": "the target element",
        title: "Sizing target"
      },
      opened: {
        name: "opened",
        description: "Set opened to true to show an overlay and to false to hide it.\nA `core-overlay` may be made initially opened by setting its\n`opened` attribute.",
        type: "boolean",
        "default": false,
        title: "Opened"
      },
      backdrop: {
        name: "backdrop",
        description: "If true, the overlay has a backdrop darkening the rest of the screen.\nThe backdrop element is attached to the document body and may be styled\nwith the class `core-overlay-backdrop`. When opened the `core-opened`\nclass is applied.",
        type: "boolean",
        "default": false,
        title: "Backdrop"
      },
      layered: {
        name: "layered",
        description: "If true, the overlay is guaranteed to display above page content.",
        type: "boolean",
        "default": false,
        title: "Layered"
      },
      autoCloseDisabled: {
        name: "autoCloseDisabled",
        description: "By default an overlay will close automatically if the user\ntaps outside it or presses the escape key. Disable this\nbehavior by setting the `autoCloseDisabled` property to true.",
        type: "boolean",
        "default": false,
        title: "Auto close disabled"
      },
      autoFocusDisabled: {
        name: "autoFocusDisabled",
        description: "By default an overlay will focus its target or an element inside\nit with the `autoFocus` attribute. Disable this\nbehavior by setting the `autoFocusDisabled` property to true.",
        type: "boolean",
        "default": false,
        title: "Auto focus disabled"
      },
      closeAttribute: {
        name: "closeAttribute",
        description: "This property specifies an attribute on elements that should\nclose the overlay on tap. Should not set `closeSelector` if this\nis set.",
        type: "string",
        "default": "\"core-overlay-toggle\"",
        title: "Close attribute"
      },
      closeSelector: {
        name: "closeSelector",
        description: "This property specifies a selector matching elements that should\nclose the overlay on tap. Should not set `closeAttribute` if this\nis set.",
        type: "string",
        "default": "\"\"",
        title: "Close selector"
      },
      transition: {
        name: "transition",
        description: "The transition property specifies a string which identifies a \n<a href=\"../core-transition/\">`core-transition`</a> element that \nwill be used to help the overlay open and close. The default\n`core-transition-fade` will cause the overlay to fade in and out.",
        type: "string",
        "default": "core-transition-fade",
        title: "Transition"
      },
      toggle: {
        name: "toggle",
        description: "Toggle the opened state of the overlay.",
        title: "Toggle",
        async: true
      },
      open: {
        name: "open",
        description: "Open the overlay. This is equivalent to setting the `opened`\nproperty to true.",
        title: "Open",
        async: true
      },
      close: {
        name: "close",
        description: "Close the overlay. This is equivalent to setting the `opened` \nproperty to false.",
        title: "Close",
        async: true
      },
      resizeHandler: {
        name: "resizeHandler",
        description: "Extensions of core-overlay should implement the `resizeHandler`\nmethod to adjust the size and position of the overlay when the \nbrowser window resizes.",
        title: "Resize handler",
        async: true
      }
    },
    output: {
      "core-overlay-open": {
        name: "core-overlay-open",
        description: "Fired when the `core-overlay`'s `opened` property changes.",
        title: "Core overlay open",
        type: "object",
        properties: {
          detail: {
            type: "Object",
            name: "detail",
            title: "Detail",
            properties: {
              opened: {
                type: "Object",
                name: "opened",
                description: "the opened state",
                title: "Opened"
              }
            }
          }
        }
      },
      "core-overlay-open-completed": {
        name: "core-overlay-open-completed",
        description: "Fired when the `core-overlay` has completely opened.",
        title: "Core overlay open completed"
      },
      "core-overlay-close-completed": {
        name: "core-overlay-close-completed",
        description: "Fired when the `core-overlay` has completely closed.",
        title: "Core overlay close completed"
      },
      "core-overlay-position": {
        name: "core-overlay-position",
        description: "Fired when the `core-overlay` needs to position itself. Optionally, implement\nin order to position an overlay via code. If the overlay was not otherwise\npositioned, it's important to indicate how the overlay has been positioned by\nsetting the `dimensions.position` object. For example, if the overlay has been\npositioned via setting `right` and `top`, set dimensions.position to an\nobject like this: `{v: 'top', h: 'right'}`.",
        title: "Core overlay position",
        type: "object",
        properties: {
          detail: {
            type: "Object",
            name: "detail",
            title: "Detail",
            properties: {
              target: {
                type: "Object",
                name: "target",
                description: "the overlay target",
                title: "Target"
              },
              sizingTarget: {
                type: "Object",
                name: "sizingTarget",
                description: "the overlay sizing target",
                title: "Sizing target"
              },
              opened: {
                type: "Object",
                name: "opened",
                description: "the opened state",
                title: "Opened"
              }
            }
          }
        }
      }
    }
  }
}