module.exports = {
  name: "paper-progress",
  title: "Paper progress",
  ns: "polymer",
  type: "polymer",
  description: "The progress bars are for situations where the percentage completed can be \ndetermined. They give users a quick sense of how much longer an operation \nwill take.\n\nExample:\n\n    <paper-progress value=\"10\"></paper-progress>\n    \nThere is also a secondary progress which is useful for displaying intermediate \nprogress, such as the buffer level during a streaming playback progress bar.\n\nExample:\n\n    <paper-progress value=\"10\" secondaryProgesss=\"30\"></paper-progress>\n\nStyling progress bar:\n\nTo change the active progress bar color:\n\n    paper-progress::shadow #activeProgress {\n      background-color: #e91e63;\n    }\n\nTo change the secondary progress bar color:\n\n    paper-progress::shadow #secondaryProgress {\n      background-color: #f8bbd0;\n    }\n    \nTo change the progress bar background color:\n\n    paper-progress::shadow #progressContainer {\n      background-color: #64ffda;\n    }",
  dependencies: {
    bower: {
      "paper-progress": "Polymer/paper-progress#master"
    }
  },
  ports: {
    input: {
      secondaryProgress: {
        name: "secondaryProgress",
        description: "The number that represents the current secondary progress.",
        type: "number",
        "default": 0,
        title: "Secondary progress"
      },
      indeterminate: {
        name: "indeterminate",
        description: "Use an indeterminate progress indicator.",
        type: "boolean",
        "default": false,
        title: "Indeterminate"
      }
    },
    output: {}
  }
}