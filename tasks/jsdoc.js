module.exports = function (grunt) {
    grunt.config('jsdoc', {
        dist : {
            src: ['js/**/*.js'],
            options: {
                destination: 'docs'
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsdoc');
};
