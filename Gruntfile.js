(function() {
	'use strict';

	module.exports = function(grunt) {
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			watch: {
				options: {
					livereload: true
				},
				compass: {
					files: ['<%= pkg.webapp_path %>/**/*.{scss,sass}'],
					tasks: ['compass:dev']
				},
				handlebars: {
					files: ['<%= pkg.webapp_path %>/**/*.hbs'],
					tasks: ['handlebars']
				},
				imagemin: {
					files: ['**/*.{png,jpg,gif}', '!node_modules/**', '!<%= pkg.target_path %>/**'],
					tasks: ['imagemin']
				},
				concat_css: {
					files: ['<%= pkg.webapp_path %>/**/*.css', '!<%= pkg.webapp_path %>/assets/bundles/**'],
					tasks: ['concat:css_bundles']
				},
				concat_js: {
					files: ['<%= pkg.webapp_path %>/**/*.{js,hbs}', '!<%= pkg.webapp_path %>/assets/bundles/**'],
					tasks: ['concat:js_bundles']
				},
				redeploy_static: {
					files: ['<%= pkg.webapp_path %>/**/*.{js,css,jsp,gif,png,jpeg,jpg,html}'],
					tasks: ['copyto', 'notify:static_redeployed']
				}
			},
			notify: {
				static_redeployed: {
					options: {
						message: 'Static files redeployed!'
					}
				}
			},
			karma: {
				unit: {
					configFile: 'karma.conf.js',
					files: {
						src: [
					      'bower_components/angular/angular.min.js',
					      'bower_components/angular-mocks/angular-mocks.js',

					      'assets/**/*.js',

					      'spec/**/*-spec.js'
					    ]
					}
				}
			}
		});

		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-karma');
		grunt.loadNpmTasks('grunt-notify');

		grunt.registerTask('dev', ['compass:dev', 'handlebars', 'concat', 'copyto', 'notify:static_redeployed', 'watch']);
		grunt.registerTask('prod', ['compass:prod', 'handlebars', 'imagemin', 'concat', 'uglify', 'cssmin']);
	};
})();