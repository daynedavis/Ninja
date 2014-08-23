module.exports = function(grunt) {

  // configure the tasks
  grunt.initConfig({

    copy: {
      build: {
        cwd: 'src',
        src: ['**', '!**/sass/**'],
        dest: 'build',
        expand: true
      },
    },

    clean: {
      build: {
        src: ['build']
      },
    },

    sass: {
      dist: {
        files: {
          'build/assets/application.css' : 'src/sass/**/*.scss'
        }
      }
    },

  });

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');

  // define the tasks
  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    ['clean', 'copy']
  );
};
