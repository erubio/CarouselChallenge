(function(app) {
	"use strict";
	app.ImageView = Backbone.View.extend({
		className: "item _item",
		
		template: _.template($('#item').html()),
		

		initialize: function(options){
			this.result = options;
		},

		// populate the html to the dom
		render: function () {
			var tmpl = _.template($('#item').html());
			this.$el.html(tmpl(this.result));
			return this;
		}
	});
}(APP));