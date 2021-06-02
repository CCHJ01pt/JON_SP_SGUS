'use strict';

module.exports = (grunt) => {
   // requires plugins to load before usage
   grunt.loadNpmTasks('grunt-mocha-test');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.initConfig({
      // create task
      mochaTest: {
         // task test settings
         test: {
            options: {
               // assign reporter
               reporter: 'spec'
            },
            // src location
            src: ['test/**/*.js']
         }
      },
      // create watch
      watch: {
         // task scripts
         scripts: {
            // files to watch
            files: ['**/*.js'],
            // task to run
            tasks: ['mochaTest'],
         }
      }
   });
   // set grunt default
   grunt.registerTask('default', 'watch');
};