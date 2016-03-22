module.exports = {
  name: "core-ajax",
  title: "Core ajax",
  ns: "polymer",
  type: "polymer",
  description: "The `core-ajax` element exposes `XMLHttpRequest` functionality.\n\n    <core-ajax\n        auto\n        url=\"http://gdata.youtube.com/feeds/api/videos/\"\n        params='{\"alt\":\"json\", \"q\":\"chrome\"}'\n        handleAs=\"json\"\n        on-core-response=\"{{handleResponse}}\"></core-ajax>\n\nWith `auto` set to `true`, the element performs a request whenever\nits `url`, `params` or `body` properties are changed.\n\nNote: The `params` attribute must be double quoted JSON.\n\nYou can trigger a request explicitly by calling `go` on the\nelement.",
  dependencies: {
    bower: {
      "core-ajax": "Polymer/core-ajax#master"
    }
  },
  ports: {
    input: {
      url: {
        name: "url",
        description: "The URL target of the request.",
        type: "string",
        "default": "",
        title: "Url"
      },
      handleAs: {
        name: "handleAs",
        description: "Specifies what data to store in the `response` property, and\nto deliver as `event.response` in `response` events.\n\nOne of:\n\n   `text`: uses `XHR.responseText`.\n\n   `xml`: uses `XHR.responseXML`.\n\n   `json`: uses `XHR.responseText` parsed as JSON.\n\n   `arraybuffer`: uses `XHR.response`.\n\n   `blob`: uses `XHR.response`.\n\n   `document`: uses `XHR.response`.",
        type: "string",
        "default": "text",
        title: "Handle as"
      },
      auto: {
        name: "auto",
        description: "If true, automatically performs an Ajax request when either `url` or `params` changes.",
        type: "boolean",
        "default": false,
        title: "Auto"
      },
      params: {
        name: "params",
        description: "Parameters to send to the specified URL, as JSON.",
        type: "string",
        "default": "",
        title: "Params"
      },
      response: {
        name: "response",
        description: "The response for the current request, or null if it hasn't\ncompleted yet or the request resulted in error.",
        type: "Object",
        "default": null,
        title: "Response"
      },
      error: {
        name: "error",
        description: "The error for the current request, or null if it hasn't\ncompleted yet or the request resulted in success.",
        type: "Object",
        "default": null,
        title: "Error"
      },
      loading: {
        name: "loading",
        description: "Whether the current request is currently loading.",
        type: "boolean",
        "default": false,
        title: "Loading"
      },
      progress: {
        name: "progress",
        description: "The progress of the current request.",
        type: "{loaded: number, total: number, lengthComputable: boolean}",
        "default": "{}",
        title: "Progress"
      },
      method: {
        name: "method",
        description: "The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.\nDefault is 'GET'.",
        type: "string",
        "default": "",
        title: "Method"
      },
      headers: {
        name: "headers",
        description: "HTTP request headers to send.\n\nExample:\n\n    <core-ajax\n        auto\n        url=\"http://somesite.com\"\n        headers='{\"X-Requested-With\": \"XMLHttpRequest\"}'\n        handleAs=\"json\"\n        on-core-response=\"{{handleResponse}}\"></core-ajax>",
        type: "Object",
        "default": null,
        title: "Headers"
      },
      body: {
        name: "body",
        description: "Optional raw body content to send when method === \"POST\".\n\nExample:\n\n    <core-ajax method=\"POST\" auto url=\"http://somesite.com\"\n        body='{\"foo\":1, \"bar\":2}'>\n    </core-ajax>",
        type: "Object",
        "default": null,
        title: "Body"
      },
      contentType: {
        name: "contentType",
        description: "Content type to use when sending data.",
        type: "string",
        "default": "application/x-www-form-urlencoded",
        title: "Content type"
      },
      withCredentials: {
        name: "withCredentials",
        description: "Set the withCredentials flag on the request.",
        type: "boolean",
        "default": false,
        title: "With credentials"
      },
      go: {
        name: "go",
        description: "Performs an Ajax request to the specified URL.",
        title: "Go",
        async: true
      },
      abort: {
        name: "abort",
        description: "Aborts the current active request if there is one and resets internal\nstate appropriately.",
        title: "Abort",
        async: true
      }
    },
    output: {
      "core-response": {
        name: "core-response",
        description: "Fired when a response is received.",
        title: "Core response"
      },
      "core-error": {
        name: "core-error",
        description: "Fired when an error is received.",
        title: "Core error"
      },
      "core-complete": {
        name: "core-complete",
        description: "Fired whenever a response or an error is received.",
        title: "Core complete"
      }
    }
  }
}