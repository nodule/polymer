module.exports = {
  name: "core-layout-trbl",
  title: "Core layout trbl",
  ns: "polymer",
  type: "polymer",
  description: "`<core-layout-trbl>` arranges nodes horizontally via absolute positioning.\nSet the `vertical` attribute (boolean) to arrange vertically instead.\n\n`<core-layout-trbl>` arranges it's <b>sibling elements</b>, not\nit's children.\n\nOne arranged node may be marked as elastic by giving it a `flex`\nattribute (boolean).\n\nYou may remove a node from layout by giving it a `nolayout`\nattribute (boolean).\n\nCSS Notes:\n\n`padding` is ignored on the parent node.\n`margin` is ignored on arranged nodes.\n`min-width` is ignored on arranged nodes, use `min-width` on the parent node \ninstead.\n\nExample: \n\nArrange three `div` into columns. `flex` attribute on Column Two makes that\ncolumn elastic.\n\n     <core-layout-trbl></core-layout-trbl>\n     <div>Column One</div>\n     <div flex>Column Two</div>\n     <div>Column Three</div>\n\nRemember that `<core-layout-trbl>` arranges it's sibling elements, not it's children.\n\nIf body has width 52 device pixels (in this case, ascii characters), call that 52px.\nColumn One has it's natural width of 12px (including border), Column Three has it's\nnatural width of 14px, body border uses 2px, and Column Two automatically uses the\nremaining space: 24px.\n\n     |-                    52px                        -| \n     ----------------------------------------------------\n     ||Column One||      Column Two      ||Column Three||\n     ----------------------------------------------------\n      |-  12px  -||-     (24px)         -||    14px   -|\n\nAs the parent node resizes, the elastic column reacts via CSS to adjust it's size.\nNo javascript is used during parent resizing, for best performance. \n\nChanges in content or sibling size are not handled automatically. \n\n     ----------------------------------------------------------------\n     ||Column One|             Column Two             |Column Three||\n     ----------------------------------------------------------------\n\n     --------------------------------------\n     ||Column One|Column Two|Column Three||\n     --------------------------------------\n\nArrange in rows by adding the `vertical` attribute.\n\nExample:\n\n     <core-layout-trbl vertical></core-layout-trbl>\n     <div>Row One</div>\n     <div flex>Row Two</div>\n     <div>Row Three</div>\n\nThis setup will cause Row Two to stretch to fill the container.\n\n     -----------             -----------\n     |---------|             |---------|\n     |         |             |         |\n     |Row One  |             |Row One  |\n     |         |             |         |\n     |---------|             |---------|\n     |         |             |         |\n     |Row Two  |             |Row Two  |\n     |         |             |         |\n     |---------|             |         |\n     |         |             |         |\n     |Row Three|             |         |\n     |         |             |---------|\n     |---------|             |         |\n     -----------             |Row Three|\n                             |         |\n                             |---------|\n                             |---------|\n\nLayouts can be nested arbitrarily.\n\n     <core-layout-trbl></core-layout-trbl>\n     <div>Menu</div>\n     <div flex>\n        <core-layout-trbl vertical></core-layout-trbl>\n        <div>Title</div>\n        <div>Toolbar</div>\n        <div flex>Main</div>\n        <div>Footer</div>\n     </div>\n\nRenders something like this\n\n     --------------------------------\n     ||Menu     ||Title            ||\n     ||         ||-----------------||\n     ||         ||Toolbar          ||\n     ||         ||-----------------||\n     ||         ||Main             ||\n     ||         ||                 ||\n     ||         ||-----------------||\n     ||         ||Footer           ||\n     --------------------------------",
  dependencies: {
    bower: {
      "core-layout-trbl": "Polymer/core-layout-trbl#master"
    }
  },
  ports: {
    input: {
      layout: {
        name: "layout",
        description: "Arrange sibling nodes end-to-end in one dimension.\n\nArrangement is horizontal unless the `vertical`\nattribute is applied on this node.",
        title: "Layout",
        async: true
      }
    },
    output: {}
  }
}