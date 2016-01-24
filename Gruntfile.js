module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    notify: {
      options: {
        enabled: true,
        max_jshint_notifications: 5, // maximum number of notifications from jshint output
        title: "Grunt <nustimetabler>", // defaults to the name in package.json, or will use project directory's name
        success: false, // whether successful grunt executions should be notified automatically
        duration: 1.5 // the duration of notification in seconds, for `notify-send only
      },
      grunt_start: {
        options: {
          message: 'Grunt is watching for changes.'
        }
      },
      grunt_reloaded: {
        options: {
          message: 'Gruntfile.js reloaded.'
        }
      },
      foundation_sass: {
        options: {
          message: 'Foundation SASS successfully compiled.'
        }
      },
      site_sass: {
        options: {
          message: 'default.scss successfully compiled to default.min.css.'
        }
      },
      lib_js: {
        options: {
          message: 'JS libraries successfully minified into core.min.js.'
        }
      },
      site_js: {
        options: {
          message: 'app.js successfully minified to default.min.js.'
        }
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss'],
        outputStyle: 'compressed'
      },
      
      foundation: {
        files: {
          'assets/css/foundation.min.css': 'scss/foundation.scss'
        }
      },

      site: {
        files: {
          'assets/css/app.min.css': ['scss/app.scss']
        }
      }
    },

    uglify: {
      libs: {
        files: [{
          src: ['js/vendor/*.js',
                'js/foundation/foundation.js',
                'js/foundation/*.js',
                '!js/foundation/_**.js',
                '!js/vendor/_**.js',
               ],
        dest: 'assets/js/core.min.js'
        }]
      },
      site: {
        files: {
          'assets/js/app.min.js' : 'js/app.js'
        }
      }
    },

    watch: {
      grunt: { 
        files: ['Gruntfile.js'],
        tasks: ['notify:grunt_reloaded']
      },

      foundation_sass: {
        files: ['scss/normalize.scss', 'scss/foundation.scss', 'scss/foundation/_settings.scss', 'scss/*/*.scss'],
        tasks: ['sass:foundation', 'notify:foundation_sass']
      },

      site_sass: {
        files: ['scss/*.scss', '!scss/foundation.scss', '!scss/normalize.scss'],
        tasks: ['sass:site', 'notify:site_sass']
      },

      lib_js: {
        files: ['js/*.js','js/*/*.js','!js/_*/*.js','!js/*/_*.js','!js/default.js','!js/app.js'], 
        tasks: ['uglify:libs', 'notify:lib_js']
      },

      site_js: {
        files: ['js/app.js'], 
        tasks: ['uglify:site', 'notify:site_js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('build', ['sass:site','uglify:site']);
  grunt.registerTask('build_core', ['sass:foundation','uglify:libs']);
  grunt.registerTask('js_libs', ['uglify:libs']);
  grunt.registerTask('foundation', ['sass:foundation']);
  grunt.registerTask('default', ['build','notify:grunt_start','watch']);
}