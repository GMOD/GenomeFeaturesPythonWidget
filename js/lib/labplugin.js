var genomefeatures = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'genomefeatures',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'genomefeatures',
          version: genomefeatures.version,
          exports: genomefeatures
      });
  },
  autoStart: true
};

