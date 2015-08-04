"use strict";
(function($) {
	var SimpleCarousel = function($el, options) {
		var self = this,
			header = '<header><h1 class="block-title _title"></h1></header>',
			wrapper = '<div class="carousel-wrap _carouselWrapper"></div>',
			footer = '<div class="buttons-group"><span class="btn _prev disabled">Prev</span><span class="btn _next">Next</span></div>';
		
		this.$el = $el;
		this.page = 0;
		this.options = options;


		this.init = function() {
			getData(drawCarousel);
			initDomEvents();
		}

		this.next = function() {
			if(self.page < self.groups.length -1) {
				self.page++;
				changePage();
			}
		}

		this.prev = function() {
			if(self.page > 0) {
				self.page--;
				changePage();
			}
		}

		function addElements(html) {
			self.$el.append($(html));	
		}

		function checkPrevButtonLimit() {
			var $prev = self.$el.find('._prev');
			if(self.page === 0) {
				disableButton($prev);	
			} else {
				enableButton($prev);
			}
		}

		function checkNextButtonLimit() {
			var $next = self.$el.find('._next');
			if(self.page === self.groups.length -1) {
				disableButton($next);
			} else {
				enableButton($next);
			}	
		}

		function animateChange() {
			var translation = self.page * self.groupSize * self.itemWidth;
			self.$carouselWrapper.css({
				transform: 'translate3d(-' + translation +'px, 0px, 0px)', 
				transition: '0.25s'
			});
		}

		function changePage() {
			checkPrevButtonLimit();
			checkNextButtonLimit();
			animateChange();
			setTitle();
		}

		function disableButton($button) {
			$button.addClass('disabled');
		}

		function enableButton($button) {
			$button.removeClass('disabled');
		}

		function resizeHandler() {
			self.itemWidth = self.$el.innerWidth()  / self.groupSize;
			self.$carouselWrapper.find('._item').css('width', self.itemWidth);
			animateChange();
		}

		function initDomEvents() {
			self.$el.delegate('._prev', 'click', self.prev);
			self.$el.delegate('._next', 'click', self.next);
			$(window).resize(resizeHandler);
		}
		function setTitle() {
			self.$el.find('._title').text(self.groups[self.page].title);
		}

		function drawCarousel(data) {
			var html; 
			addElements(header);
			addElements(wrapper);
			addElements(footer);
			self.$carouselWrapper = self.$el.find('._carouselWrapper');
			self.groups = data;
			setTitle();
			$(data).each(function(i, group) {
				if(i===0) {
					self.groupSize = group.images.length;
					self.itemWidth = self.$el.innerWidth()  / self.groupSize;
				}
				
				$(group.images).each(function(idx, img) {
					html = '<div class="item _item"><img ';
					html += 'src="' + img + '">' 
					self.$carouselWrapper.append($(html).css('width', self.itemWidth));
				});

			});
		}

		function showError() {
			alert('Something went wrong...  :(');
		}

		function getData(callback) {
			$.ajax(options.url, {
				success: callback,
				error: showError
			});
		}
	}
	$.fn.simpleCarousel = function(options) {
		var simpleCarousel = new SimpleCarousel(this, options);
		simpleCarousel.init();
		return this;
	};

}(jQuery));