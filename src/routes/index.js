'use strict';

var carouselRouter = require('./carousel');

module.exports.configure = function(app) {
	app.use('/carousel', carouselRouter);
	app.use('/backbone', function(req, res) {
		res.render('backbone');
	});
	app.use('/', function(req, res) {
		res.render('index');
	});
};