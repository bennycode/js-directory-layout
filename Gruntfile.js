module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Globals
    dir: grunt.file.readJSON('./conf/grunt/globals/dir.json'),
    pkg: grunt.file.readJSON('package.json'),
    server: grunt.file.readJSON('./conf/grunt/globals/server.json'),
    // Tasks
    connect: require('./conf/grunt/tasks/connect.js'),
    watch: require('./conf/grunt/tasks/watch.js')
  });

  grunt.event.on('watch', function (action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.registerTask('default', ['connect:server', 'watch']);
};