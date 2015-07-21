/* jshint node: true */
'use strict';
var fs = require('fs');

module.exports = {
  name: 'ember-svg-sprite-sheet',
  contentFor: function(type, config) {
    if(type === 'body') {
      var svgPath = this.app.options["ember-svg-sprite-sheet"].path;
      if(svgPath) {
        return fs.readFileSync(svgPath).toString();
      }
    }
  },
  isDevelopingAddon: function() {
    return true;
  }
};
