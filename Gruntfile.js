module.exports = function(grunt) {
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
        jshint: {
            allFiles: ['grunt.js', 
                       '<%= pkg.srcDir %>**/*.js',
                       '<%= pkg.specDir %>**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        /**
         * run code style linter
         */
        jscs: {
            src: "<%= pkg.srcDir %>**/*.js"
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
                        coverage: '<%= pkg.coverage %>/coverage.json',
                        report: [
                            {
                                type: 'html',
                                options: {
                                    dir: '<%= pkg.coverage %>/html'
                                }
                            },
                            {
                                type: 'cobertura',
                                options: {
                                    dir: '<%= pkg.coverage %>/cobertura'
                                }
                            },
                            {
                                type: 'text-summary'
                            }
                        ]
                    },
                    junit : {
                        path: '<%= pkg.reportsDir %>'
                    },
                }
            }
        },
        /**
         * minifying files
         */
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
         * create api documentation
         */
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
        },
        /**
         * create a archive
         */
        compress: {
            main: {
                options: {
                    archive: '<%= pkg.releaseDir %>grunt_sample_<%= pkg.version %>.tgz'
                },
                files: [
                    {src: ['**/*.js'], cwd: '<%= pkg.releaseDir %>', expand: true}
                ]
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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs-checker');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-githooks');

    grunt.registerTask('test', ['jshint', 'jscs']); 
    grunt.registerTask('default', ['clean', 'jshint', 'jscs', 'jasmine', 'uglify', 'release', 'yuidoc', 'compress']);
};
