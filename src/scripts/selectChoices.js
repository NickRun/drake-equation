var $ = require('jquery');
var findResult = require('./findResult');

module.exports = function() {
	$('.probability-value').on('click', function(){
		activate(this);
	})
	$('.region-value').on('click', function(){
		activate(this);
	})
	function activate(el){
		selectThis = $(el);
		// Don't do anything unless a new selection is made
		if (!(selectThis.hasClass('active'))){
			selectThis.parent().find('.active').removeClass('active');
			selectThis.addClass('active');
			// check to see if both a region and a probability is selected
			if ( ($('.probability-value.active').length > 0) && ($('.region-value.active').length > 0 ) ) {
				var region = regionVal();
				var probability = probabilityVal();
				findResult.controller(region, probability);
				findResult.backgroundImage(region);
			}
		}
	} 
	function regionVal(){
		return $('.select-region').find('.active').attr('data-region');
	}
	function probabilityVal(){
		$('.instructions').remove();
		return $('.select-probability').find('.active').attr('data-probability');
	}
}