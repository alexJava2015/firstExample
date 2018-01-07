'use strict';

module.exports= function (grunt) {

	grunt.initConfig({
		connect:{
			server:{
				options:{
					port:9080,
					keepalive:true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('local',['connect']);
};
