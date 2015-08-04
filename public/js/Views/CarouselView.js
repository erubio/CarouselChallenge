(function(app) {
	"use strict";
	app.CarouselView = Backbone.View.extend({
		className: "_carousel",

		id: "carousel",
		
		template: _.template($('#carouselContainer').html()),
		// functions to fire on events
		events: {
			"click ._prev": "prev",
			"click ._next": "next"
		},

		initialize: function(){
			var InfoResults = new app.InfoResults(),
				self = this;
			self.page = 0;

			InfoResults.fetch({
				success : function(collection, response, options) {
					self.carouselData = response;
					self.addResults(response);

				},
				error : function(collection, response, options) {
					console.log(response.statusText);
				},
				timeout : 5000
			});
			$(window).resize(function() {
				self.setSize();
				self.showPage();
			});
		},

		addResults: function(results) {
			this.$el.find('._carouselWrapper').empty();
			_.each(results, $.proxy(this, 'addResult'));
		},
		addResult: function(result) {
			var view = new app.GroupItemsView({
				result: result
			});
			this.$el.find('._carouselWrapper').append(view.render().el);
			this.setSize(result);
		},

		setSize: function() {
			this.groupSize = this.carouselData[0].images.length;
			this.itemWidth =  this.$el.innerWidth() / this.groupSize;
			this.$el.find('._item').css('width',this.itemWidth);
		},

		manageButtons: function() {
			var $prev = this.$el.find('._prev'),
				$next = this.$el.find('._next');
			if(this.page === 0) {
				$prev.addClass('disabled');
			} else {
				$prev.removeClass('disabled');
				if(this.page === this.carouselData.length - 1) {
					$next.addClass('disabled');
				} else {
					$next.removeClass('disabled');
				}
			}
		},

		showPage: function() {
			var translation = this.page * this.groupSize * this.itemWidth;
			this.$el.find('._carouselWrapper').css({
				transform: 'translate3d(-' + translation +'px, 0px, 0px)', 
				transition: '0.25s'
			});
			this.manageButtons();
		},

		next: function() {
			if(this.page < this.carouselData.length - 1) {
				this.page++;
				this.showPage();
			}
		},
		prev: function() {
			if(this.page > 0) {
				this.page--;
				this.showPage();
			}
		},

		// populate the html to the dom
		render: function () {
			this.$el.html(_.template($('#carouselContainer').html()));
			return this;
		}
	});
}(APP));