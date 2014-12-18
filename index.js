var parser = require('polymer-context-free-parser');
var fs = require('fs');
var util = require('util');
var glob = require('glob');
var path = require('path');
var d = require('dot-object')();
var defs = {};
var extenders = [];
var humanize = require('underscore.string').humanize;
var _ = require('underscore');
var g = glob('./bower_components/*/*.html');

/**
 *
 * Todo: some packages define multiple components.
 * Maybe use metadata.
 *
 *
 * core-slider extends core-range
 * But the attributes are not merged..
 */

function parseFile(file) {

  var basename  = path.basename(file);
  var component = basename + '.html';
  var componentFile = file + component;

  var text = fs.readFileSync(file, 'utf8');

  var result = parser.parse(text);
  result.forEach(processDef);

}

g.on('end', function(files) {

  files.forEach(parseFile);

  while (extenders.length) {
    var def  = extenders.pop();
    var base = defs[def.extends];

    console.log('doing extender', def.extends);

    if(base) {
      def.extends = null;
      //def = extend(true, base, def);
      def = _.extend(true, def, base);
      console.log(def.name);
      if(def.name === 'paper-slider') {
        console.log('MERGED!', def);
      }

      processDef(def);
    } else {
      console.log('Unable to find:', def.extends);
    }
  }

});

function processDef(def, base) {

  if (def.name === 'Entity') {
    return false;
  }

  console.log('Processing', def.name, [
    'attributes', 'methods', 'events'
  ].filter(function(prop) { return def.hasOwnProperty(prop);  })
    .join(', '));

  var nD = createNodeDefinition(def);

  console.log('nD.name', nD.name);

  // register to resolve extends
  defs[nD.name] = nD;

  if (def.extends) {
    nD.extends = def.extends;
    extenders.push(nD);
    return;
  }

  if (!def.methods && !def.attributes && !def.events) {
    // ain't no web component or is base
    return false;
  }

  // only write if there are any ports.
  if (Object.keys(nD.ports.input).length || Object.keys(nD.ports.output).length) {
    if (!fs.existsSync('./nodes/' + def.name)) {
      fs.mkdirSync('./nodes/' + def.name);
    }

    fs.writeFileSync('./nodes/' + def.name + '/node.json',
      JSON.stringify(nD, null, 2)
    );
  }

}

/*

  Still faulty, is a described object

  "properties": {
+          "detail.isSelected": {
             "type": "boolean",
             "name": "detail.isSelected",
-            "description": "true for selection and false for deselection"
+            "description": "true for selection and false for deselection",
+            "title": "Detail.is selected"
           },
-          {
+          "detail.item": {
             "type": "Object",
             "name": "detail.item",
-            "description": "the item element"
+            "description": "the item element",
+            "title": "Detail.item"
           }
*/


function paramsToProperties(a) {

  var name;
  var prop;
  var param;

  // .params is an array.
  // I would like to always pass them as an object
  // so PolymerNode must understand this.
  if(a.params) {

    // not overwriting anything?
    a.type = 'object';
    a.properties = {};

    for(var i = 0; i < a.params.length; i++) {
      param = a.params[i];

      // only one level deep for now detail.isSelected
      var m = param.name.split('.');
      name = m[0];

      param.title = humanize(m[0]);

      convertDefault(param);

      if(m[1]) {
        prop = m[1];
        // type is object/
        // we are handling a property.
        if (!a.properties.hasOwnProperty(name)) {
          a.properties[name] = {
            type: 'Object',
            name: name,
            title: humanize(name)
            // description:  can have a description?
          };
          a.properties[name].properties = {};
        }
        param.name = prop;
        param.title = humanize(prop);
        a.properties[name].properties[prop] = param;

      } else {
        a.properties[param.name] = param;
      }
    }

    delete a.params;
  }

}

function convertDefault(def) {
  if (def.default) {
    if (def.default === 'null') {
      def.default = null;
    } else {
      switch (def.type) {
        case 'string':
          def.default = def.default.replace(/(^'|'$)/g, '');
        break;

        case 'boolean':
          def.default = /^t/i.test(def.default);
        break;

        case 'number':
          def.default = parseInt(def.default);
        break;
      }
    }
  }
}

function createNodeDefinition(def) {

  var nD = {};

  nD.name = def.name;
  nD.title = humanize(def.name);
  nD.ns = 'polymer';
  nD.type = 'polymer';
  if(def.description) {
    nD.description = def.description.trim();
  }
  nD.dependencies = { bower: { } };
  nD.dependencies.bower[def.name] =
    'Polymer/' + def.name + '#master';
  nD.ports = {
    input: {},
    output: {}
  };

  if (def.attributes) {

    def.attributes.forEach(function(a) {

      a.title = humanize(a.name);

      convertDefault(a);

      if (a.description) {
        a.description = a.description.trim();
      }
      nD.ports.input[a.name] = a;
    });

  }

  if (def.methods) {
    def.methods.forEach(function(a) {
      if (nD.ports.input.hasOwnProperty(a.name)) {
        throw Error('Conflicting port names');
      } else {

        if (a.description) {
          a.description = a.description.trim();
        }

        a.title = humanize(a.name);

        convertDefault(a);

        a.async = true;

        paramsToProperties(a);

        nD.ports.input[a.name] = a;

      }
    });
  }

  if (def.events) {
    def.events.forEach(function(e) {
      e.title = humanize(e.name);
      if (e.description) {
        e.description = e.description.trim();
      }

      paramsToProperties(e);

      nD.ports.output[e.name] = e;
    });
  }

  return nD;

}
