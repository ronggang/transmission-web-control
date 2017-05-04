module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'src/tr-web-control/script/system.min.js': ['src/tr-web-control/script/system.js'],
         // 'src/tr-web-control/script/public.min.js': ['src/tr-web-control/script/public.js'],
         // 'src/tr-web-control/script/clientDevice.min.js': ['src/tr-web-control/script/clientDevice.js'],
         // 'src/tr-web-control/script/cookies.min.js': ['src/tr-web-control/script/cookies.js'],
         // 'src/tr-web-control/script/system.mobile.min.js': ['src/tr-web-control/script/system.mobile.js'],
         // 'src/tr-web-control/script/transmission.min.js': ['src/tr-web-control/script/transmission.js'],
         // 'src/tr-web-control/script/transmission.torrents.min.js': ['src/tr-web-control/script/transmission.torrents.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
