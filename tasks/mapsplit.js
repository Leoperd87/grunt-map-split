/*
 * grunt-map-split
 * 
 *
 * Copyright (c) 2013 Efim Vl. Dejin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('map-split', 'javascript source map file split', function () {
    // Merge task-specific and/or target-specific options with these defaults.
//    var options = this.options({
//      punctuation: '.',
//      separator: ', '
//    });

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      var filepath = f.dest;
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
      var structure = JSON.parse('[' + (grunt.file.read(filepath)).replace(/}/g, '},') + '{}]');

      // Concat specified files.
      structure.filter(function (record) {
        return record.file;
      }).map(function (record) {

          // Print a success message.
          grunt.log.writeln('File "' + f.dest + '" created.');

          grunt.file.write(f.src + record.file + '.map', JSON.stringify(record));
          return true;
        });
    });
  });

};
