module.exports = {
  name: "core-animation",
  title: "Core animation",
  ns: "polymer",
  type: "polymer",
  description: "`core-animation` is a convenience element to use web animations with Polymer elements. It\nallows you to create a web animation declaratively. You can extend this class to create\nnew types of animations and combine them with `core-animation-group`.\n\nExample to create animation to fade out an element over 500ms:\n\n    <core-animation id=\"fadeout\" duration=\"500\">\n      <core-animation-keyframe>\n        <core-animation-prop name=\"opacity\" value=\"1\"></core-animation-prop>\n      </core-animation-keyframe>\n      <core-animation-keyframe>\n        <core-animation-prop name=\"opacity\" value=\"0\"></core-animation-prop>\n      </core-animation-keyframe>\n    </core-animation>\n\n    <div id=\"el\">Fade me out</div>\n\n    <script>\n      var animation = document.getElementById('fadeout');\n      animation.target = document.getElementById('el');\n      animation.play();\n    </script>\n\nOr do the same imperatively:\n\n    var animation = new CoreAnimation();\n    animation.duration = 500;\n    animation.keyframes = [\n      {opacity: 1},\n      {opacity: 0}\n    ];\n    animation.target = document.getElementById('el');\n    animation.play();\n\nYou can also provide a javascript function instead of keyframes to the animation. This\nbehaves essentially the same as `requestAnimationFrame`:\n\n    var animation = new CoreAnimation();\n    animation.customEffect = function(timeFraction, target, animation) {\n      // do something custom\n    };\n    animation.play();\n\nElements that are targets to a `core-animation` are given the `core-animation-target` class.",
  dependencies: {
    bower: {
      "core-animation": "Polymer/core-animation#master"
    }
  },
  ports: {
    input: {
      play: {
        name: "play",
        description: "Plays the animation. If the animation is currently paused, seeks the animation\nto the beginning before starting playback.",
        title: "Play",
        async: true
      },
      cancel: {
        name: "cancel",
        description: "Stops the animation and clears all effects on the target.",
        title: "Cancel",
        async: true
      },
      finish: {
        name: "finish",
        description: "Seeks the animation to the end.",
        title: "Finish",
        async: true
      },
      pause: {
        name: "pause",
        description: "Pauses the animation.",
        title: "Pause",
        async: true
      },
      hasTarget: {
        name: "hasTarget",
        description: "",
        title: "Has target",
        async: true
      },
      apply: {
        name: "apply",
        description: "Creates a web animations object based on this object's properties, and\nplays it if autoplay is true.",
        title: "Apply",
        async: true
      }
    },
    output: {
      "core-animation-finish": {
        name: "core-animation-finish",
        description: "Fired when the animation completes.",
        title: "Core animation finish"
      },
      "core-animation-change": {
        name: "core-animation-change",
        description: "Fired when the web animation object changes.",
        title: "Core animation change"
      }
    }
  }
}