module.exports = {
  name: "core-image",
  title: "Core image",
  ns: "polymer",
  type: "polymer",
  description: "`core-image` is an element for displaying an image that provides useful sizing and\npreloading options not found on the standard `<img>` tag.\n\nThe `sizing` option allows the image to be either cropped (`cover`) or\nletterboxed (`contain`) to fill a fixed user-size placed on the element.\n\nThe `preload` option prevents the browser from rendering the image until the\nimage is fully loaded.  In the interim, either the element's CSS `background-color`\ncan be be used as the placeholder, or the `placeholder` property can be\nset to a URL (preferably a data-URI, for instant rendering) for an\nplaceholder image.\n\nThe `fade` option (only valid when `preload` is set) will cause the placeholder\nimage/color to be faded out once the image is rendered.\n\nExamples:\n\n  Basically identical to &lt;img src=\"...\"&gt; tag:\n\n    <core-image src=\"http://lorempixel.com/400/400\"></core-image>\n\n  Will letterbox the image to fit:\n\n    <core-image style=\"width:400px; height:400px;\" sizing=\"contain\"\n      src=\"http://lorempixel.com/600/400\"></core-image>\n\n  Will crop the image to fit:\n\n    <core-image style=\"width:400px; height:400px;\" sizing=\"cover\"\n      src=\"http://lorempixel.com/600/400\"></core-image>\n\n  Will show light-gray background until the image loads:\n\n    <core-image style=\"width:400px; height:400px; background-color: lightgray;\"\n      sizing=\"cover\" preload src=\"http://lorempixel.com/600/400\"></core-image>\n\n  Will show a base-64 encoded placeholder image until the image loads:\n\n    <core-image style=\"width:400px; height:400px;\" placeholder=\"data:image/gif;base64,...\"\n      sizing=\"cover\" preload src=\"http://lorempixel.com/600/400\"></core-image>\n\n  Will fade the light-gray background out once the image is loaded:\n\n    <core-image style=\"width:400px; height:400px; background-color: lightgray;\"\n      sizing=\"cover\" preload fade src=\"http://lorempixel.com/600/400\"></core-image>",
  dependencies: {
    bower: {
      "core-image": "Polymer/core-image#master"
    }
  },
  ports: {
    input: {
      src: {
        name: "src",
        description: "The URL of an image.",
        type: "string",
        "default": null,
        title: "Src"
      },
      load: {
        name: "load",
        description: "When false, the image is prevented from loading and any placeholder is\nshown.  This may be useful when a binding to the src property is known to\nbe invalid, to prevent 404 requests.",
        type: "boolean",
        "default": true,
        title: "Load"
      },
      sizing: {
        name: "sizing",
        description: "Sets a sizing option for the image.  Valid values are `contain` (full\naspect ratio of the image is contained within the element and\nletterboxed) or `cover` (image is cropped in order to fully cover the\nbounds of the element), or `null` (default: image takes natural size).",
        type: "string",
        "default": null,
        title: "Sizing"
      },
      position: {
        name: "position",
        description: "When a sizing option is uzed (`cover` or `contain`), this determines\nhow the image is aligned within the element bounds.",
        type: "string",
        "default": "center",
        title: "Position"
      },
      preload: {
        name: "preload",
        description: "When `true`, any change to the `src` property will cause the `placeholder`\nimage (or background color, if no `placeholder` is specified) to be shown\nuntil the image has loaded.",
        type: "boolean",
        "default": false,
        title: "Preload"
      },
      placeholder: {
        name: "placeholder",
        description: "This image will be used as a background/placeholder until the src image has\nloaded.  Use of a data-URI for placeholder is encouraged for instant rendering.",
        type: "string",
        "default": null,
        title: "Placeholder"
      },
      role: {
        name: "role",
        description: "ARIA role for this element. It defaults to `img` since this element is\nintended to be behave like an `<img>`.",
        type: "string",
        "default": "\"img\"",
        title: "Role"
      },
      fade: {
        name: "fade",
        description: "When `preload` is true, setting `fade` to true will cause the image to\nfade into place.",
        type: "boolean",
        "default": false,
        title: "Fade"
      },
      loading: {
        name: "loading",
        description: "Read-only value that tracks the loading state of the image when the `preload`\noption is used.",
        type: "boolean",
        "default": false,
        title: "Loading"
      },
      width: {
        name: "width",
        description: "Can be used to set the width of image (e.g. via binding); size may also be\nset via CSS.",
        type: "number",
        "default": null,
        title: "Width"
      },
      height: {
        name: "height",
        description: "Can be used to set the height of image (e.g. via binding); size may also be\nset via CSS.",
        type: "number",
        "default": null,
        title: "Height"
      }
    },
    output: {}
  }
}