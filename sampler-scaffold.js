module.exports = {
  name: "sampler-scaffold",
  title: "Sampler scaffold",
  ns: "polymer",
  type: "polymer",
  description: "`sampler-scaffold` provides a responsive layout for elements sampler.\n\nExampler:\n\n    <sampler-scaffold label=\"HTML Input Elements\">\n\n      <core-item label=\"String\" url=\"demos/string.html\"></core-item>\n      <core-item label=\"Checkbox\" url=\"demos/checkbox.html\"></core-item>\n      <core-item label=\"Radio\" url=\"demos/radio.html\"></core-item>\n      <core-item label=\"Range\" url=\"demos/range.html\"></core-item>\n      <core-item label=\"Color\" url=\"demos/color.html\"></core-item>\n    \n    </sampler-scaffold>\n\nUse `label` to set the sampler label and `responsiveWidth` to change the layout \nof the scaffold.",
  dependencies: {
    bower: {
      "sampler-scaffold": "Polymer/sampler-scaffold#master"
    }
  },
  ports: {
    input: {
      responsiveWidth: {
        name: "responsiveWidth",
        description: "When the browser window size is smaller than the `responsiveWidth`, \n`sampler-scaffold` changes to a narrow layout. In narrow layout, \nthe drawer will be stacked on top of the main panel.",
        type: "string",
        title: "Responsive width"
      },
      label: {
        name: "label",
        description: "Sampler label.",
        type: "string",
        title: "Label"
      }
    },
    output: {}
  }
}