(function() {
	window.APP = window.APP || {};
	$(document).ready(function() {
		var carouselView = new APP.CarouselView();
		$('body').append(carouselView.render().$el)
	})
	
}());
