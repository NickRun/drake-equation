var $ = require('jquery');

module.exports = function() {
	$.preloadImages = function() {
	  for (var i = 0; i < arguments.length; i++) {
	    $("<img />").attr("src", arguments[i]);
	  }
	}

	$.preloadImages("assets/img/full/galaxy_region-800x500.jpg","assets/img/full/milkyway-800x500.jpg","assets/img/full/universe-800x500.jpg","assets/img/full/transparent-800x500.gif","assets/img/full/symbol_x-800x500.gif","assets/img/full/symbol_cover-800x500.png");
}