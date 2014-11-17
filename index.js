var parser = require('polymer-context-free-parser');
var fs = require('fs');
var util = require('util');
var glob = require('glob');
var path = require('path');
var d = require('dot-object')();

/**
 *
 * Todo: some packages define multiple components.
 * Maybe use metadata.
 *
 */
var g = glob('./bower_components/*/');
g.on('match', function(file) {

  var basename  = path.basename(file);
  var component = basename + '.html';
  var componentFile = file + component;

  if (fs.existsSync(componentFile)) {

    console.log('Processing', component);

    var text = fs.readFileSync(componentFile, 'utf8');

    var result = parser.parse(text);

    result.forEach(function(def) {

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

      } else {
        console.warn('Component has no attributes');
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
          }
        });
      } else {
        console.warn('Component has no methods');
      }

      if (def.events) {
        def.events.forEach(function(e) {
          if (e.description) {
            e.description = e.description.trim();
          }
          nD.ports.output[e.name] = e;
        });
      } else {
        console.warn('Component has no events');
      }

      // only write if there are any ports.
      if (Object.keys(nD.ports.input).length || Object.keys(nD.ports.output).length) {
        if (!fs.existsSync('./nodes/' + basename)) {
          fs.mkdirSync('./nodes/' + basename);
        }

        fs.writeFileSync('./nodes/' + basename + '/node.json',
          JSON.stringify(nD, null, 2)
        );
      }

    });

  }

});
