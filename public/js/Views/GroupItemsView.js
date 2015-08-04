(function(app) {
	"use strict";
	app.GroupItemsView = Backbone.View.extend({
		className: "groupItems _groupItems",		

		initialize: function(options){
			this.addResults(options.result);	
		},

		addResults: function(results) {
			this.$el.find('._carouselWrapper').append(this.render().el);
			_.each(results.images, $.proxy(this, 'addResult'));
		},
		addResult: function(result) {
			var view = new app.ImageView({
				image: result
			});
			this.$el.append(view.render().el);
		},

		// populate the html to the dom
		render: function () {
			return this;
		}
	});
}(APP));