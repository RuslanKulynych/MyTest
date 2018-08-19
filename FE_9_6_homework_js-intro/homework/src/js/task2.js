var sideA = prompt('Enter side A', sideA);
var	sideB = prompt('Enter side B', sideB);
var	angle = prompt('Enter angle between A and B side', angle);
var num180 = 180;
function degToRad (angle) {
	return angle / num180 * Math.PI; 
}
var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 2 * sideA * sideB * Math.cos(degToRad(angle)));

var perimeter = Number(sideA) + Number(sideB) + Number(sideC);

var pHalf = perimeter/2;

var S = Math.sqrt(pHalf * (pHalf - sideA) * (pHalf - sideB) * (pHalf - sideC));

if (sideC === parseInt(sideC)) {
	sideC = sideC.toFixed();
} else {
	sideC = sideC.toFixed(2);
}

if (perimeter === parseInt(perimeter)) {
	perimeter = perimeter.toFixed();
} else {
	perimeter = perimeter.toFixed(2);
}

if (S === S.toFixed(2)) {
	S = S.toFixed();

} else {
	S = S.toFixed(2);
}

if (S <= 0.00) {
	alert('Invalid data');
	throw 'stop';
}


console.log('Side C = ', sideC,'; Square = ', S,'; Perimeter = ', perimeter);