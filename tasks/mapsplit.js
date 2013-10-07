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

    grunt.log.writeln('start');
    var i = 0, j, filepath = '', content = '', structure = [];
    if (this.files && this.files.length) {
      grunt.log.writeln('firts if');
      for (; i < this.files.length; i++) {
        grunt.log.writeln('for');
        filepath = this.files[i];
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
    /*
     // Iterate over all specified file groups.
     this.files.forEach(function(f) {
     // Concat specified files.
     var src = f.src.filter(function(filepath) {
     // Warn on and remove invalid source files (if nonull was set).
     if (!grunt.file.exists(filepath)) {
     grunt.log.warn('Source file "' + filepath + '" not found.');
     return false;
     } else {
     return true;
     }
     }).map(function(filepath) {
     // Read file source.
     return grunt.file.read(filepath);
     }).join(grunt.util.normalizelf(options.separator));

     // Handle options.
     src += options.punctuation;

     // Write the destination file.
     grunt.file.write(f.dest, src);

     // Print a success message.
     grunt.log.writeln('File "' + f.dest + '" created.');
     });
     */
  });

};
