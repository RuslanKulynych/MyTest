var sideA = prompt('Enter side A', sideA);
var	sideB = prompt('Enter side B', sideB);
var	angle = prompt('Enter angle between A and B side', angle);
var num180 = 180;
function degToRad (angle) {
	return angle / num180 * Math.PI; 
}

function roundToTwoDigitsAfterComma(floatNumber) {
    return parseFloat((Math.round(floatNumber * 100) / 100).toFixed(2));
}

var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 2 * sideA * sideB * Math.cos(degToRad(angle)));

var perimeter = Number(sideA) + Number(sideB) + Number(sideC);

var pHalf = perimeter/2;

var S = Math.sqrt(pHalf * (pHalf - sideA) * (pHalf - sideB) * (pHalf - sideC));


console.log('Side C = ', roundToTwoDigitsAfterComma(sideC),'; Square = ', roundToTwoDigitsAfterComma(S),'; Perimeter = ', roundToTwoDigitsAfterComma(perimeter));
