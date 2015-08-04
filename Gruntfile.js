/*
	Fichero para la configuracion de las tareas que gestinan 
	el codigo de la aplicacion.

	Si la ejecucion de GRUNT empieza a ser demasiado lenta, podemos organizar las tareas
	de modo que las dependencias se carguen bajo demanda: 
*/
module.exports = function(grunt) {
	// require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		// Validate JS code (client, server, tests)
		jshint: {
			files: ['app.js', 'src/**/*.js', 'spec/src/**/*.js'],
			options: {
				jshintrc: './.jshintrc'
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['styles']
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'public/scss',
					cssDir: 'public/css'
				}
			}
		},
		
	});

	
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask( 'styles', ['compass:dist' ] );
	grunt.registerTask('default', ['watch']);

};