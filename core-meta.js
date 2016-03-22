module.exports = {
  name: "core-meta",
  title: "Core meta",
  ns: "polymer",
  type: "polymer",
  description: "`core-meta` provides a method of constructing a self-organizing database.\nIt is useful to collate element meta-data for things like catalogs and for \ndesigner.\n\nExample, an element folder has a `metadata.html` file in it, that contains a \n`core-meta`, something like this:\n\n    <core-meta id=\"my-element\" label=\"My Element\">\n      <property name=\"color\" value=\"blue\"></property>\n    </core-meta>\n\nAn application can import as many of these files as it wants, and then use \n`core-meta` again to access the collected data.\n\n    <script>\n      var meta = document.createElement('core-meta');\n      console.log(meta.list); // dump a list of all meta-data elements that have been created\n    </script>\n\nUse `byId(id)` to retrive a specific core-meta.\n\n    <script>\n      var meta = document.createElement('core-meta');\n      console.log(meta.byId('my-element'));\n    </script>\n\nBy default all meta-data are stored in a single databse.  If your meta-data \nhave different types and want them to be stored separately, use `type` to \ndifferentiate them.\n\nExample:\n\n    <core-meta id=\"x-foo\" type=\"xElt\"></core-meta>\n    <core-meta id=\"x-bar\" type=\"xElt\"></core-meta>\n    <core-meta id=\"y-bar\" type=\"yElt\"></core-meta>\n\n    <script>\n      var meta = document.createElement('core-meta');\n      meta.type = 'xElt';\n      console.log(meta.list);\n    </script>",
  dependencies: {
    bower: {
      "core-meta": "Polymer/core-meta#master"
    }
  },
  ports: {
    input: {
      type: {
        name: "type",
        description: "The type of meta-data.  All meta-data with the same type with be\nstored together.",
        type: "string",
        "default": "default",
        title: "Type"
      },
      byId: {
        name: "byId",
        description: "Retrieves meta-data by ID.",
        title: "By",
        async: true,
        type: "object",
        properties: {
          id: {
            type: "String",
            name: "id",
            description: "The ID of the meta-data to be returned.",
            title: "Id"
          }
        }
      }
    },
    output: {}
  }
}