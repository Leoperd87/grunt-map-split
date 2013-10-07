/*
 * grunt-mapsplit
 * 
 *
 * Copyright (c) 2013 Efim Vl. Dejin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mapsplit', 'javascript source map file split', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      outputPath: './'
//      separator: ', '
    });

    var j, filepath = '', content = '', structure = [];
    if (this.files) {
      for (var key in this.files) {
        filepath = key;
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
        } else {
          content = grunt.file.read(filepath);
          structure = JSON.parse('[' + (content).replace(/}/g, '},') + '{}]');
          for (j = 0; j < structure.length; j++) {
            if (structure[j].file) {
              grunt.file.write(options.outputPath + structure[j].file, JSON.stringify(structure[j]));
              grunt.log.writeln('File "' + options.outputPath + structure[j].file + '" created.');
            }
          }
        }
      }
    }

  });

};
