module.exports = {
  name: "core-a11y-keys",
  title: "Core a11y keys",
  ns: "polymer",
  type: "polymer",
  description: "`core-a11y-keys` provides a normalized interface for processing keyboard commands that pertain to [WAI-ARIA best\npractices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The element takes care of browser differences\nwith respect to Keyboard events and uses an expressive syntax to filter key presses.\n\nUse the `keys` attribute to express what combination of keys will trigger the event to fire.\n\nUse the `target` attribute to set up event handlers on a specific node.\nThe `keys-pressed` event will fire when one of the key combinations set with the `keys` attribute is pressed.\n\nExample:\n\nThis element will call `arrowHandler` on all arrow keys:\n\n    <core-a11y-keys target=\"{{}}\" keys=\"up down left right\" on-keys-pressed=\"{{arrowHandler}}\"></core-a11y-keys>\n\nKeys Syntax:\n\nThe `keys` attribute can accepts a space seprated, `+` concatenated set of modifier keys and some common keyboard keys.\n\nThe common keys are `a-z`, `0-9` (top row and number pad), `*` (shift 8 and number pad), `F1-F12`, `Page Up`, `Page\nDown`, `Left Arrow`, `Right Arrow`, `Down Arrow`, `Up Arrow`, `Home`, `End`, `Escape`, `Space`, `Tab`, and `Enter` keys.\n\nThe modifier keys are `Shift`, `Control`, and `Alt`.\n\nAll keys are expected to be lowercase and shortened:\n`Left Arrow` is `left`, `Page Down` is `pagedown`, `Control` is `ctrl`, `F1` is `f1`, `Escape` is `esc` etc.\n\nKeys Syntax Example:\n\nGiven the `keys` attribute value \"ctrl+shift+f7 up pagedown esc space alt+m\", the `<core-a11y-keys>` element will send\nthe `keys-pressed` event if any of the follow key combos are pressed: Control and Shift and F7 keys, Up Arrow key, Page\nDown key, Escape key, Space key, Alt and M key.\n\nSlider Example:\n\nThe following is an example of the set of keys that fulfil the WAI-ARIA \"slider\" role [best\npractices](http://www.w3.org/TR/wai-aria-practices/#slider):\n\n    <core-a11y-keys target=\"{{}}\" keys=\"left pagedown down\" on-keys-pressed=\"{{decrement}}\"></core-a11y-keys>\n    <core-a11y-keys target=\"{{}}\" keys=\"right pageup up\" on-keys-pressed=\"{{increment}}\"></core-a11y-keys>\n    <core-a11y-keys target=\"{{}}\" keys=\"home\" on-keys-pressed=\"{{setMin}}\"></core-a11y-keys>\n    <core-a11y-keys target=\"{{}}\" keys=\"end\" on-keys-pressed=\"{{setMax}}\"></core-a11y-keys>\n\nThe `increment` function will move the slider a set amount toward the maximum value.\nThe `decrement` function will move the slider a set amount toward the minimum value.\nThe `setMin` function will move the slider to the minimum value.\nThe `setMax` function will move the slider to the maximum value.\n\nKeys Syntax Grammar:\n\n[EBNF](http://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form) Grammar of the `keys` attribute.\n\n    modifier = \"shift\" | \"ctrl\" | \"alt\";\n    ascii = ? /[a-z0-9]/ ? ;\n    fnkey = ? f1 through f12 ? ;\n    arrow = \"up\" | \"down\" | \"left\" | \"right\" ;\n    key = \"tab\" | \"esc\" | \"space\" | \"*\" | \"pageup\" | \"pagedown\" | \"home\" | \"end\" | arrow | ascii | fnkey ;\n    keycombo = { modifier, \"+\" }, key ;\n    keys = keycombo, { \" \", keycombo } ;",
  dependencies: {
    bower: {
      "core-a11y-keys": "Polymer/core-a11y-keys#master"
    }
  },
  ports: {
    input: {
      keys: {
        name: "keys",
        description: "The set of key combinations that will be matched (in keys syntax).",
        type: "string",
        "default": "",
        title: "Keys"
      },
      target: {
        name: "target",
        description: "The node that will fire keyboard events.\nDefault to this element's parentNode unless one is assigned",
        type: "Node",
        "default": "this.parentNode",
        title: "Target"
      }
    },
    output: {
      "keys-pressed": {
        name: "keys-pressed",
        description: "Fired when a keycombo in `keys` is pressed.",
        title: "Keys pressed",
        type: "object",
        properties: {
          detail: {
            type: "Object",
            name: "detail",
            title: "Detail",
            properties: {
              shift: {
                type: "boolean",
                name: "shift",
                description: "true if shift key is pressed",
                title: "Shift"
              },
              ctrl: {
                type: "boolean",
                name: "ctrl",
                description: "true if ctrl key is pressed",
                title: "Ctrl"
              },
              meta: {
                type: "boolean",
                name: "meta",
                description: "true if meta key is pressed",
                title: "Meta"
              },
              alt: {
                type: "boolean",
                name: "alt",
                description: "true if alt key is pressed",
                title: "Alt"
              },
              key: {
                type: "String",
                name: "key",
                description: "the normalized key",
                title: "Key"
              }
            }
          }
        }
      }
    }
  }
}