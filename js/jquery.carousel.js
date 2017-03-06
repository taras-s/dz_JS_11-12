

(function($) {

	$.fn.carousel = function() {

console.log();
		var thisCarou = this;
		var leftUIEl = $(thisCarou).find('.carousel-arrow-left');
		var rightUIEl = $(thisCarou).find('.carousel-arrow-right');
		var elementsList = $(thisCarou).find('.carousel-list');

		var pixelsOffset = 125;
		var currentLeftValue = 0;
	    var elementsCount = elementsList.find('li').length;
	    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
	    var maximumOffset = 0;

		leftUIEl.click(function() {        
		    if (currentLeftValue != maximumOffset) {
		        currentLeftValue += 125;
		        elementsList.animate({ left : currentLeftValue + "px"}, 500);
		    }        
		});

		rightUIEl.click(function() {        
		    if (currentLeftValue != minimumOffset) {
		        currentLeftValue -= 125;
		        elementsList.animate({ left : currentLeftValue + "px"}, 500);
		    }        
		});

		return thisCarou;
	}

})(jQuery);


