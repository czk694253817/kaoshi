module.exports = function (grunt) {
 
grunt.initConfig({
    less: {
        compile: {
            files: {
                'styles/styles.css': 'styles/styles.less'
            }
        }
    },
    watch: {
        scripts: {
            files: ['styles/styles.less'],
            tasks: ['less']
        }
    }
});
 
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
 
grunt.registerTask('default', ['less', 'watch']);
};