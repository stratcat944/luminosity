
var red = process.argv[2];
var green = process.argv[3];
var blue = process.argv[4];

var luminosity = function(){
	return 0.2126*red + 0.7152*green + 0.0722*blue;
	
}
console.log(luminosity());


// var isLight = luminosity > 155;

// if (isLight) {
// 	console.log('light')	
// 	} else {
// 		console.log('dark')
// 	}