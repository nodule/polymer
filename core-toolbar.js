module.exports = {
  name: "core-toolbar",
  title: "Core toolbar",
  ns: "polymer",
  type: "polymer",
  description: "`core-toolbar` is a horizontal bar containing items that can be used for\nlabel, navigation, search and actions.  The items place inside the \n`core-toolbar` are projected into a `horizontal center layout` container inside of \n`core-toolbar`'s Shadow DOM.  You can use flex attributes to control the items'\nsizing.\n\nExample:\n\n    <core-toolbar>\n      <core-icon-button icon=\"menu\" on-tap=\"{{menuAction}}\"></core-icon-button>\n      <div flex>Title</div>\n      <core-icon-button icon=\"more-vert\" on-tap=\"{{moreAction}}\"></core-icon-button>\n    </core-toolbar>\n\n`core-toolbar` has a standard height, but can made be taller by setting `tall`\nclass on the `core-toolbar`.  This will make the toolbar 3x the normal height.\n\n    <core-toolbar class=\"tall\">\n      <core-icon-button icon=\"menu\"></core-icon-button>\n    </core-toolbar>\n\nApply `medium-tall` class to make the toolbar medium tall.  This will make the\ntoolbar 2x the normal height.\n\n    <core-toolbar class=\"medium-tall\">\n      <core-icon-button icon=\"menu\"></core-icon-button>\n    </core-toolbar>\n\nWhen `tall`, items can pin to either the top (default), middle or bottom.  Use\n`middle` class for middle content and `bottom` class for bottom content.\n\n    <core-toolbar class=\"tall\">\n      <core-icon-button icon=\"menu\"></core-icon-button>\n      <div class=\"middle indent\">Middle Title</div>\n      <div class=\"bottom indent\">Bottom Title</div>\n    </core-toolbar>\n    \nFor `medium-tall` toolbar, the middle and bottom contents overlap and are\npinned to the bottom.  But `middleJustify` and `bottomJustify` attributes are \nstill honored separately.\n    \nTo make an element completely fit at the bottom of the toolbar, use `fit` along\nwith `bottom`.\n\n    <core-toolbar class=\"tall\">\n      <div id=\"progressBar\" class=\"bottom fit\"></div>\n    </core-toolbar>\n\n`core-toolbar` adapts to mobile/narrow layout when there is a `core-narrow` class set\non itself or any of its ancestors.",
  dependencies: {
    bower: {
      "core-toolbar": "Polymer/core-toolbar#master"
    }
  },
  ports: {
    input: {
      justify: {
        name: "justify",
        description: "Controls how the items are aligned horizontally.\nOptions are `start`, `center`, `end`, `between` and `around`.",
        type: "string",
        "default": "",
        title: "Justify"
      },
      middleJustify: {
        name: "middleJustify",
        description: "Controls how the items are aligned horizontally when they are placed\nin the middle.\nOptions are `start`, `center`, `end`, `between` and `around`.",
        type: "string",
        "default": "",
        title: "Middle justify"
      },
      bottomJustify: {
        name: "bottomJustify",
        description: "Controls how the items are aligned horizontally when they are placed\nat the bottom.\nOptions are `start`, `center`, `end`, `between` and `around`.",
        type: "string",
        "default": "",
        title: "Bottom justify"
      }
    },
    output: {}
  }
}