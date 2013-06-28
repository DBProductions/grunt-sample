module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["build", "docs"],
        jshint: {
            allFiles: ['grunt.js', 'src/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
            options: {
                mangle: {toplevel: false}, //prevent changes to variable and function names
                squeeze: {dead_code: false},
                codegen: {quote_keys: true}
            },
            user: {
                files: {
                    'build/src/user.min.js': ['src/user.js']
                }
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: { 
                    paths: 'src/',
                    outdir: 'docs/'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'yuidoc']);
};
