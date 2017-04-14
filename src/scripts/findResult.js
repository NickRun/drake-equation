var displayResult = require('./displayResult');

// region 1: local neighborhood in galaxy
// region 2: milky way
// region 3: observable universe
// probability 1: 10^-24
// probability 2: 10^-18
// probability 3: 3 x 10^-9
// probability 4: 10^-4

module.exports.controller = function(region, probability) {
	var choice = [region,probability];
	switch(choice.join(' ')){
		case '1 3':
			displayResult.symbolRefresh();
			displayResult.addText('We are very likely the first advanced civilization');
			displayResult.resultDefinition(false, 'A = 0.001');
			break;
		case '2 3':
			displayResult.symbolRefresh();
			displayResult.symbolDots(200, true, 'small');
			displayResult.addText('We are likely one of hundreds of civilizations');
			displayResult.resultDefinition('1 blue dot = 1 civilization ', 'A = 200');
			break;
		case '3 3':
			displayResult.symbolRefresh();
			displayResult.symbolDots(1500, false, 'large');
			displayResult.addText('We are likely one of millions of civilizations');
			displayResult.resultDefinition(false, 'A = 10<sup>12</sup> = 1 million million');
			break;
		case '1 2':
			displayResult.symbolRefresh();
			displayResult.addText('We are the first advanced civilization');
			displayResult.resultDefinition(false, 'A = 4 x 10<sup>-12</sup>');
			break;
		case '2 2':
			displayResult.symbolRefresh();
			displayResult.addText('We are the first advanced civilization');
			displayResult.resultDefinition(false, 'A = 6 x 10<sup>-8</sup>');
			break;
		case '3 2':
			displayResult.symbolRefresh();
			displayResult.symbolDots(200, false, 'medium');
			displayResult.addText('We are likely one of thousands of civilizations');
			displayResult.resultDefinition('1 blue dot = 20 civilizations', 'A = 4000');
			break;
		case '1 4':
			displayResult.symbolRefresh();
			displayResult.addText('We are likely the first advanced civilization');
			displayResult.resultDefinition(false, 'A = 0.04');
			break;
		case '2 4':
			displayResult.symbolRefresh();
			displayResult.symbolDots(40, true, 'large');
			displayResult.addText('We are likely one of millions of civilizations');
			displayResult.resultDefinition('1 blue dot = 150,000 civilizations', 'A = 6 million');
			break;
		case '3 4':
			displayResult.symbolRefresh();
			displayResult.symbolDots(1500, false, 'large');
			displayResult.addText('We are likely one of trillions of civilizations');
			displayResult.resultDefinition(false, 'A = 4 x 10<sup>17</sup> = 400 million trillion');
			break;
		case '1 1':
			displayResult.symbolRefresh();
			displayResult.addText('We are the first advanced civilization');
			displayResult.resultDefinition(false, 'A = 4 x 10<sup>-18</sup>');
			break;
		case '2 1':
			displayResult.symbolRefresh();
			displayResult.addText('We are the first advanced civilization');
			displayResult.resultDefinition(false, 'A = 6 x 10<sup>-14</sup>');
			break;
		case '3 1':
			displayResult.symbolRefresh();
			displayResult.addText('We are very likely the first advanced civilization');
			displayResult.resultDefinition(false, 'A = 0.004');
			break;
	}
}

module.exports.backgroundImage = function(region) {
	var imagePath = '';
	if (region == 1) {
		imagePath = 'assets/img/full/galaxy_region-800x500.jpg';
	} else if (region == 2) {
		imagePath = 'assets/img/full/milkyway-800x500.jpg';
	} else if (region == 3) {
		imagePath = 'assets/img/full/universe-800x500.jpg';
	}
	displayResult.resultBG(imagePath);
}