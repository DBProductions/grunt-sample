module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
         * clean directories
         */
        clean: ['<%= pkg.releaseDir %>',
            '<%= pkg.docsDir %>',
            '<%= pkg.coverage %>',
            '<%= pkg.reportsDir %>'],
        /**
         * check code quality
         */
        eslint: {
            src: ['Gruntfile.js',
                '<%= pkg.srcDir %>**/*.js',
                '<%= pkg.specDir %>**/*.js'],
            options: {
                fix: true
            }
        },
        /**
         * run jasmine tests
         */
        jasmine: {
            pivotal: {
                src: '<%= pkg.srcDir %>**/*.js',
                options: {
                    specs: '<%= pkg.specDir %>/**/*.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: '<%= pkg.coverage %>coverage.json',
                        report: [
                            {
                                type: 'html',
                                options: {
                                    dir: '<%= pkg.coverage %>html'
                                }
                            },
                            {
                                type: 'cobertura',
                                options: {
                                    dir: '<%= pkg.coverage %>cobertura'
                                }
                            },
                            {
                                type: 'text-summary'
                            }
                        ]
                    },
                    junit : {
                        path: '<%= pkg.reportsDir %>'
                    }
                }
            }
        },
        /**
         * build release
         */
        release: {
            options: {
                bump: true,
                file: 'package.json',
                add: false,
                commit: false,
                tag: false,
                push: false,
                pushTags: false,
                npm: false,
                npmtag: false
            }
        },
        /**
         * git hook
         */
        githooks: {
            all: {
                'pre-commit': 'test'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-githooks');

    grunt.loadTasks('tasks');

    grunt.registerTask('test', ['nsp']);
    grunt.registerTask('default', ['clean', 'nsp', 'jasmine', 'jsdoc']);
};
