module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author.name %> <%= pkg.author.url %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true
        }
      }
    },
    watch: {
      assets: {
        files: ['**/*.js', '**/*.html', '**/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);
  grunt.registerTask('server', ['connect', 'watch']);

};
