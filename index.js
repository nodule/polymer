var parser = require('polymer-context-free-parser');
var fs = require('fs');
var util = require('util');
var glob = require('glob');
var path = require('path');
var d = require('dot-object')();
var extend = require('extend');
var defs = {};
var extenders = [];
var g = glob('./bower_components/*/*.html');

/**
 *
 * Todo: some packages define multiple components.
 * Maybe use metadata.
 *
 */

g.on('match', function(file) {

  var basename  = path.basename(file);
  var component = basename + '.html';
  var componentFile = file + component;

  var text = fs.readFileSync(file, 'utf8');

  var result = parser.parse(text);
  result.forEach(function(def) {
    processDef(def);
  });

});

g.on('end', function() {

  while (extenders.length) {
    var def  = extenders.pop();
    var base = defs[def.extends];

    if(base) {
      def.extends = null;
      def = extend(true, base, def);
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

  if (def.extends) {
    extenders.push(def);
  }

  // register to resolve extends
  defs[def.name] = def;

  if (!def.methods && !def.attributes && !def.events) {
    // ain't no web component or is base
    return false;
  }

  console.log('Processing', def.name, [
    'attributes', 'methods', 'events'
  ].filter(function(prop) { return def.hasOwnProperty(prop);  })
    .join(', '));

  var nD = createNodeDefinition(def);

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

function createNodeDefinition(def) {

  var nD = {};

  nD.name = def.name;
  nD.ns = 'polymer';
  nD.type = 'polymer';
  nD.description = def.description.trim();
  nD.dependencies = { bower: { } };
  nD.dependencies.bower[def.name] =
    'Polymer/' + def.name + '#master';
  nD.ports = {
    input: {},
    output: {}
  };

  if (def.attributes) {

    def.attributes.forEach(function(a) {
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
        nD.ports.input[a.name] = a;
        /* not sure if I want to mark methods this way
         * but for now it will do
         */
        nD.ports.input[a.name].async = true;
      }
    });
  }

  if (def.events) {
    def.events.forEach(function(e) {
      if (e.description) {
        e.description = e.description.trim();
      }
      nD.ports.output[e.name] = e;
    });
  }

  return nD;

}
