(function(app) {
	app.InfoResult = Backbone.Model.extend({
		urlRoot: '/carousel',
	});
	app.InfoResults = Backbone.Collection.extend({
		model: app.InfoResult,
		url:  '/carousel',
		parse: function(response) {
			return response;
		}
	});

}(APP));