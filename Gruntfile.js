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
      scripts: {
        cwd: 'src',
        src: ['**/*.js'],
        dest: 'build',
        expand: true
      },
    },

    clean: {
      build: {
        src: ['build']
      },
      stylesheets: {
        src: ['build/**/*.css', 'build/**/*.scss', 'build/**/*.less', '!build/assets/application.css']
      },
      scripts: {
        src: ['build/**/*.js', '!build/vendor/application.js', '!build/server.js']
      },
      app: {
        src: ['build/vendor/application.js']
      },
    },

    bower: {
      dev: {
        dest: 'build/vendor',
        options: {
          packageSpecific: {
            bootstrap: {
              dest: 'build/assets/fonts'
            }
          }
        }
      }
    },

    sass: {
      dist: {
        files: {
          'build/assets/main.css' : 'src/sass/**/*.scss'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'build//assets/application.css': ['build/**/*.css']
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['build/vendor/jquery.js', 'build/vendor/angular.js', 'build/**/*.js', '!build/server.js'],
        dest: 'build/vendor/application.js',
      },
    },

    uglify: {
      build: {
        options: {
          mangle: false
        },
        files: {
          'build/vendor/application.js': ['build/**/*.js']
        }
      }
    },

    watch: {

      stylesheets: {
        files: 'src/**/*.scss',
        tasks: ['stylesheets'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: 'src/**/*.js',
        tasks: ['clean:app', 'copy:scripts', 'bower', 'scripts'],
        options: {
          livereload: true
        }
      },
      copy: {
        files: ['src/**', '!rc/**/*.scss', '!src/**/*.js'],
        tasks: ['copy'],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: 'build',
          hostname: '*',
          livereload: true
        },
      }
    }

  });

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-bower');

  // define the tasks
  grunt.registerTask(
    'stylesheets',
    'Compiles the stylesheets.',
    ['sass', 'cssmin', 'clean:stylesheets']
  );

  grunt.registerTask(
    'scripts',
    'Compiles the JavaScript files.',
    ['concat', 'clean:scripts']
  );

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    ['clean:build', 'copy', 'bower', 'stylesheets', 'scripts']
  );

  grunt.registerTask(
    'default',
    'Watches the project for changes, automatically builds them and runs a server.',
    ['build', 'connect', 'watch']
  );
};
