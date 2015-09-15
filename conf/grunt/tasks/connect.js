module.exports = {
  server: {
    options: {
      base: '<%= dir.src.main %>',
      hostname: '*',
      livereload: '<%= server.port.livereload %>',
      open: true,
      port: '<%= server.port.http %>',
      onCreateServer: function (server, connect, options) {
        console.log('Serving on port: ' + options.port);
      }
    }
  }
};