/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 * 
 * Proudly built by the Bluemix Tiger Team
 * 
 * For question or feedback, contact:
 * Oliver Siebenmarck (siebenmarck@de.ibm.com)
 */

module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  // Add more entries if you want check code in other locations too.
  var sourceFiles = [ 
              'gruntfile.js', 
              'app.js', 
              'routes/**/*.js',
              'test/**/*.js',
               ];

  grunt.initConfig({
    

    // Lints your source files
    // It is very recommended to take this seriously
    jshint: {
      files: sourceFiles,
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
            // more options here if you want to override JSHint defaults
            globals: {
              jQuery: true,
              console: true,
              module: true
            }
      }
    },
    
    // Sets up UNIT-Testing
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    },

    

  });

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', 'mochaTest');


};

