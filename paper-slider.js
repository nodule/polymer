module.exports = {
  name: "paper-slider",
  title: "Paper slider",
  ns: "polymer",
  type: "polymer",
  description: "`paper-slider` allows user to select a value from a range of values by\nmoving the slider thumb.  The interactive nature of the slider makes it a \ngreat choice for settings that reflect intensity levels, such as volume, \nbrightness, or color saturation.\n\nExample:\n\n    <paper-slider></paper-slider>\n\nUse `min` and `max` to specify the slider range.  Default is 0 to 100.\n\nExample:\n\n    <paper-slider min=\"10\" max=\"200\" value=\"110\"></paper-slider>\n\nStyling slider:\n\nTo change the slider progress bar color:\n\n    paper-slider::shadow #sliderBar::shadow #activeProgress {\n      background-color: #0f9d58;\n    }\n\nTo change the slider knob color:\n\n    paper-slider::shadow #sliderKnobInner {\n      background-color: #0f9d58;\n    }\n\nTo change the slider pin color:\n\n    paper-slider::shadow #sliderKnobInner::before {\n      background-color: #0f9d58;\n    }\n\nTo change the slider pin's font color:\n\n    paper-slider::shadow #sliderKnob > #sliderKnobInner::after {\n      color: #0f9d58\n    }\n\nTo change the slider secondary progress bar color:\n\n    paper-slider::shadow #sliderBar::shadow #secondaryProgress {\n      background-color: #0f9d58;\n    }",
  dependencies: {
    bower: {
      "paper-slider": "Polymer/paper-slider#master"
    }
  },
  ports: {
    input: {
      snaps: {
        name: "snaps",
        description: "If true, the slider thumb snaps to tick marks evenly spaced based\non the `step` property value.",
        type: "boolean",
        "default": false,
        title: "Snaps"
      },
      pin: {
        name: "pin",
        description: "If true, a pin with numeric value label is shown when the slider thumb \nis pressed.  Use for settings for which users need to know the exact \nvalue of the setting.",
        type: "boolean",
        "default": false,
        title: "Pin"
      },
      disabled: {
        name: "disabled",
        description: "If true, this slider is disabled.  A disabled slider cannot be tapped\nor dragged to change the slider value.",
        type: "boolean",
        "default": false,
        title: "Disabled"
      },
      secondaryProgress: {
        name: "secondaryProgress",
        description: "The number that represents the current secondary progress.",
        type: "number",
        "default": 0,
        title: "Secondary progress"
      },
      editable: {
        name: "editable",
        description: "If true, an input is shown and user can use it to set the slider value.",
        type: "boolean",
        "default": false,
        title: "Editable"
      },
      immediateValue: {
        name: "immediateValue",
        description: "The immediate value of the slider.  This value is updated while the user\nis dragging the slider.",
        type: "number",
        "default": 0,
        title: "Immediate value"
      }
    },
    output: {
      "core-change": {
        name: "core-change",
        description: "Fired when the slider's value changes.",
        title: "Core change"
      },
      change: {
        name: "change",
        description: "Fired when the slider's value changes due to user interaction.\n\nChanges to the slider's value due to changes in an underlying\nbound variable will not trigger this event.",
        title: "Change"
      }
    }
  }
}