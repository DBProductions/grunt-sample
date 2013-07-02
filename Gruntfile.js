module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['<%= pkg.buildDir %>', '<%= pkg.docsDir %>'],
        jshint: {
            allFiles: ['grunt.js', 
                       '<%= pkg.srcDir %>**/*.js',
                       '<%= pkg.specDir %>**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jasmine: {
            pivotal: {
                src: '<%= pkg.srcDir %>**/*.js',
                options: {
                    specs: '<%= pkg.specDir %>/**/*.js'
                }
            }
        },
        uglify: {
            options: {
                mangle: {toplevel: false}, //prevent changes to variable and function names
                squeeze: {dead_code: false},
                codegen: {quote_keys: true}
            },
            project: {
                files: '<%= pkg.files %>'
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: { 
                    paths: '<%= pkg.srcDir %>',
                    outdir: '<%= pkg.docsDir %>'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    grunt.registerTask('default', ['clean', 'jshint', 'jasmine', 'uglify', 'yuidoc']);
};
