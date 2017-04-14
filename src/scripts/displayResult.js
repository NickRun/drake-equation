var $ = require('jquery');

module.exports.symbolDots = function(numOfDots, limitCanvasBool, size) {
	$('.circle-container--sm').remove();
	$('.circle-container--full').remove();
	$('.result-text').remove();

	if (size == 'small') {
		var dotSize = 'symbol-circle--small';
	} else if (size == 'medium') {
		var dotSize = 'symbol-circle--medium';
	} else if (size == 'large') {
		var dotSize = 'symbol-circle--large';
	}

	if (limitCanvasBool === true) {
		// Circle container is centered in the middle of results canvas
		$('.result-canvas').prepend('<div class="circle-container--sm"></div>');
		circleContainerEl = $('.circle-container--sm');
	} else {
		$('.result-canvas').prepend('<div class="circle-container--full"></div>');
		circleContainerEl = $('.circle-container--full');
	}

	for (var i = 0; i < numOfDots; i++) {
		var style = randomPosition();
		circleContainerEl.prepend('<div class="symbol-circle '+dotSize+'" id="circle-'+i+'" style=" '+style+'"></div>');
	}

	for (var i = 0; i < numOfDots; i++) {
		circleContainerEl.prepend('<div class="symbol-circle '+dotSize+'" id="circle-'+i+'" style=" '+style+'"></div>');
	}

	function randomPosition(){
		// Range is between 1 & 95
		var leftP = randomRange();
		var topP = randomRange();
		var display = 'block';
		if (limitCanvasBool == true) {
			if ( ((leftP > 85) || (leftP < 15)) && ((topP > 85) || (topP < 15)) ) {
				display = 'none';
			}
		}
		var positionStyle = 'left:'+leftP+'%; top:'+topP+'%; display:'+display;
		return positionStyle;
	}
	function randomRange(){
		return Math.floor(Math.random() * 95) + 1;
	}
}

module.exports.addText = function(text) {
	console.log('worked');
	$('.result-text').remove();
	$('.result-canvas').prepend('<div class="result-text">'+text+'</div>');
}

module.exports.symbolCover = function() {
	$('.result-canvas img').attr('src','assets/img/full/symbol_cover-800x500.png');
}

module.exports.resultDefinition = function(keyText, answerText) {
	if (!keyText === false) {
		$('.result-definition .key').css('display', 'block');
		$('.result-definition .key .definition-value').html(keyText)
	} else {
		$('.result-definition .key').css('display', 'none');
	}
	$('.result-definition .answer').css('display', 'block');
	$('.result-definition .answer .definition-value').html(answerText)
}

module.exports.resultBG = function(imagePath) {
	$('.result-canvas').css('background-image', 'url("'+imagePath+'")');
}

module.exports.symbolRefresh = function() {
	$('.result-canvas img').attr('src','assets/img/full/transparent-800x500.gif');
	$('.symbol-circle').remove();
}