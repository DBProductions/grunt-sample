module.exports = function (grunt) {
    grunt.config("nsp", {
        package: grunt.file.readJSON('package.json')
    });

    grunt.loadNpmTasks("grunt-nsp");
};
