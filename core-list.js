module.exports = {
  name: "core-list",
  title: "Core list",
  ns: "polymer",
  type: "polymer",
  description: "`core-list` displays a virtual, 'infinite' list. The template inside the \n`core-list` element represents the DOM to create for each list item. The\n`data` property specifies an array of list item data.\n\nFor performance reasons, not every item in the list is rendered at once; instead\na small subset of actual template elements (enough to fill the viewport) are\nrendered and reused as the user scrolls.  As such, it is important that all\nstate of the list template be bound to the model driving it, since the view \nmay be reused with a new model at any time.  Particularly, any state that \nmay change as the result of a user interaction with the list item must be\nbound to the model to avoid view state inconsistency.\n\nIMPORTANT: `core-list` must ether be explicitly sized, or delegate scrolling to\nan explicitly sized parent.  By \"explicitly sized\", we mean it either has an\nexplicit CSS `height` property set via a class or inline style, or else is sized\nby other layout means (e.g. `flex` or `fit`).  Alternatively, `core-list` can\ndelegate scrolling to a scrollable element that contains the list by setting the\n`scrollTarget` property, and the same explicit sizing requiremets will apply\nto that element.\n\n### Template model\n\nList item templates should bind to template models of the following structure:\n\n    {\n      index: 0,           // data index for this item\n      selected: false,    // selection state for this item\n      model: {            // user data corresponding to data[index]\n        /* user item data  */\n      }\n    }\n\nFor example, given the following data array:\n\n    [\n      {name: 'Bob', checked: true},\n      {name: 'Tim', checked: false},\n      ...\n    ]\n\nThe following code would render the list (note the `name` and `checked`\nproperties are bound from the `model` object provided to the template\nscope):\n\n    <core-list data=\"{{data}}\">\n      <template>\n        <div class=\"row {{ {selected: selected} | tokenList }}\">\n          List row: {{index}}, User data from model: {{model.name}}\n          <input type=\"checkbox\" checked=\"{{model.checked}}\">\n        </div>\n      </template>\n    </core-list>\n\n### Selection\n\nBy default, the list supports selection via tapping. Styling selected items\nshould be done via binding to the `selected` property of each model (see examples\nabove.  The data model for the selected item (for single-selection) or array of\nmodels (for multi-selection) is published to the `selection` property.\n\n### Grouping **(experimental)**\n\n`core-list` supports showing dividers between groups of data by setting the \n`groups` property to an array containing group information.  An element with\na `divider` attribute set should be supplied a the top level of the template\nnext to the template item to provide the divider template.  The template model\ncontains extra fields when `groups` is used, as follows:\n\n    {\n      index: 0,           // data index for this item\n      groupIndex: 0,      // group index for this item\n      groupItemIndex: 0,  // index within group for this item\n      selected: false,    // selection state for this item\n      model: {            // user data corresponding to data[index]\n        /* user item data  */\n      },\n      groupModel: {       // user group data corresponding to groups[index]\n        /* user group data */\n      }\n    }\n\nGroups may be specified one of two ways (users should choose the data format \nthat closest matches their source data, to avoid the performance impact of \nneeding totransform data to fit the required structure):\n\n1. Flat data array - In this scenario, the `data` array is provided as \na flat list of models.  Group lengths are determined by the `length` property\non each group object, with the `data` property providing user-specified group\ndata, typically for binding to dividers.  For example:\n\n        data = [\n          { name: 'Adam' },\n          { name: 'Alex' },\n          { name: 'Bob' },\n          { name: 'Chuck' },\n          { name: 'Cathy' },\n          ...\n        ];\n\n        groups = [\n          { length: 2, data: { letter: 'A' } },\n          { length: 1, data: { letter: 'B' } },\n          { length: 2, data: { letter: 'C' } },\n          ...\n        ];\n\n        <core-list data=\"{{data}}\" groups=\"{{groups}}\">\n          <template>\n            <div divider class=\"divider\">{{groupModel.letter}}</div>\n            <div class=\"item\">{{model.name}}</div>\n          </template>\n        </core-list>\n\n2. Nested data array - In this scenario, the `data` array is a nested\narray of arrays of models, where each array determines the length of the\ngroup, and the `groups` models provide the user-specified data directly.\nFor example:\n\n        data = [\n          [ { name: 'Adam' }, { name: 'Alex' } ],\n          [ { name: 'Bob' } ],\n          [ { name: 'Chuck' }, { name: 'Cathy' } ],\n          ...\n        ];\n\n        groups = [\n          { letter: 'A' },\n          { letter: 'B' },\n          { letter: 'C' },\n          ...\n        ];\n\n        <core-list data=\"{{data}}\" groups=\"{{groups}}\">\n          <template>\n            <div divider class=\"divider\">{{groupModel.letter}}</div>\n            <div class=\"item\">{{model.name}}</div>\n          </template>\n        </core-list>\n\n### Grid layout **(experimental)**\n\n`core-list` supports a grid layout in addition to linear layout by setting\nthe `grid` attribute.  In this case, the list template item must have both fixed\nwidth and height (e.g. via CSS), with the desired width of each grid item\nspecified by the `width` attribute.  Based on this, the number of items \nper row are determined automatically based on the size of the list viewport.\n\n### Non-native scrollers **(experimental)**\n\nBy default, core-list assumes the `scrollTarget` (if set) is a native scrollable\nelement (e.g. `overflow:auto` or `overflow:y`) that fires the `scroll` event and\nwhose scroll position can be read/set via the `scrollTop` property.\n`core-list` provides experimental support for setting `scrollTarget`\nto a custom scroller element (e.g. a JS-based scroller) as long as it provides \nthe following abstract API:\n\n  - `getScrollTop()` - returns the current scroll position\n  - `setScrollTop(y)` - sets the current scroll position\n  - Fires a `scroll` event indicating when the scroll position has changed",
  dependencies: {
    bower: {
      "core-list": "Polymer/core-list#master"
    }
  },
  ports: {
    input: {
      data: {
        name: "data",
        description: "An array of source data for the list to display.  Elements\nfrom this array will be set to the `model` peroperty on each\ntemplate instance scope for binding.\n\nWhen `groups` is used, this array may either be flat, with\nthe group lengths specified in the `groups` array; otherwise\n`data` may be specified as an array of arrays, such that the\neach array in `data` specifies a group.  See examples above.",
        type: "array",
        "default": null,
        title: "Data"
      },
      groups: {
        name: "groups",
        description: "An array of data conveying information about groupings of items\nin the `data` array.  Elements from this array will be set to the\n`groupModel` property of each template instance scope for binding.\n\nWhen `groups` is used, template children with the `divider` attribute\nwill be shown above each group.  Typically data from the `groupModel`\nwould be bound to dividers.\n\nIf `data` is specified as a flat array, the `groups` array must\ncontain objects of the format `{ length: n, data: {...} }`, where\n`length` determines the number of items from the `data` array\nthat should be grouped, and `data` specifies the user data that will\nbe assigned to the `groupModel` property on the template instance\nscope.\n\nIf `data` is specified as a nested array of arrays, group lengths\nare derived from these arrays, so each object in `groups` need only\ncontain the user data to be assigned to `groupModel`.",
        type: "array",
        "default": null,
        title: "Groups"
      },
      scrollTarget: {
        name: "scrollTarget",
        description: "An optional element on which to listen for scroll events.",
        type: "Element",
        "default": "core-list",
        title: "Scroll target"
      },
      selectionEnabled: {
        name: "selectionEnabled",
        description: "When true, tapping a row will select the item, placing its data model\nin the set of selected items retrievable via the `selection` property.\n\nNote that tapping focusable elements within the list item will not\nresult in selection, since they are presumed to have their own action.",
        type: "{boolean}",
        "default": "true",
        title: "Selection enabled"
      },
      multi: {
        name: "multi",
        description: "Set to true to support multiple selection.  Note, existing selection\nstate is maintained only when changing `multi` from `false` to `true`;\nit is cleared when changing from `true` to `false`.",
        type: "boolean",
        "default": false,
        title: "Multi"
      },
      selection: {
        name: "selection",
        description: "Data record (or array of records, if `multi: true`) corresponding to\nthe currently selected set of items.",
        type: "{any}",
        "default": null,
        title: "Selection"
      },
      grid: {
        name: "grid",
        description: "When true, the list is rendered as a grid.  Grid items must be fixed\nheight and width, with the width of each item specified in the `width`\nproperty.",
        type: "boolean",
        "default": false,
        title: "Grid"
      },
      width: {
        name: "width",
        description: "When `grid` is used, `width` determines the width of each grid item.\nThis property has no meaning when not in `grid` mode.",
        type: "number",
        "default": null,
        title: "Width"
      },
      height: {
        name: "height",
        description: "The approximate height of a list item, in pixels. This is used only for determining\nthe number of physical elements to render based on the viewport size\nof the list.  Items themselves may vary in height between each other\ndepending on their data model.  There is typically no need to adjust \nthis value unless the average size is much larger or smaller than the default.",
        type: "number",
        "default": 200,
        title: "Height"
      },
      runwayFactor: {
        name: "runwayFactor",
        description: "The amount of scrolling runway the list keeps rendered, as a factor of\nthe list viewport size.  There is typically no need to adjust this value\nother than for performance tuning.  Larger value correspond to more\nphysical elements being rendered.",
        type: "number",
        "default": 4,
        title: "Runway factor"
      },
      updateSize: {
        name: "updateSize",
        description: "To be called by the user when the list is manually resized\nor shown after being hidden.",
        title: "Update size",
        async: true
      },
      selectItem: {
        name: "selectItem",
        description: "Select the list item at the given index.",
        title: "Select item",
        async: true,
        type: "object",
        properties: {
          index: {
            type: "number",
            name: "index",
            description: "",
            title: "Index"
          }
        }
      },
      setItemSelected: {
        name: "setItemSelected",
        description: "Set the selected state of the list item at the given index.",
        title: "Set item selected",
        async: true,
        type: "object",
        properties: {
          index: {
            type: "number",
            name: "index",
            description: "",
            title: "Index"
          },
          isSelected: {
            type: "boolean",
            name: "isSelected",
            description: "",
            title: "Is selected"
          }
        }
      },
      clearSelection: {
        name: "clearSelection",
        description: "Clears the current selection state of the list.",
        title: "Clear selection",
        async: true
      },
      scrollToItem: {
        name: "scrollToItem",
        description: "Scroll to an item.\n\nNote, when grouping is used, the index is based on the\ntotal flattened number of items.  For scrolling to an item\nwithin a group, use the `scrollToGroupItem` API.",
        title: "Scroll to item",
        async: true,
        type: "object",
        properties: {
          index: {
            type: "number",
            name: "index",
            description: "",
            title: "Index"
          }
        }
      },
      scrollToGroup: {
        name: "scrollToGroup",
        description: "Scroll to a group.",
        title: "Scroll to group",
        async: true,
        type: "object",
        properties: {
          group: {
            type: "number",
            name: "group",
            description: "",
            title: "Group"
          }
        }
      },
      scrollToGroupItem: {
        name: "scrollToGroupItem",
        description: "Scroll to an item within a group.",
        title: "Scroll to group item",
        async: true,
        type: "object",
        properties: {
          group: {
            type: "number",
            name: "group",
            description: "",
            title: "Group"
          },
          index: {
            type: "number",
            name: "index",
            description: "",
            title: "Index"
          }
        }
      }
    },
    output: {
      "core-activate": {
        name: "core-activate",
        description: "Fired when an item element is tapped.",
        title: "Core activate",
        type: "object",
        properties: {
          detail: {
            type: "Object",
            name: "detail",
            title: "Detail",
            properties: {
              item: {
                type: "Object",
                name: "item",
                description: "the item element",
                title: "Item"
              }
            }
          }
        }
      }
    }
  }
}