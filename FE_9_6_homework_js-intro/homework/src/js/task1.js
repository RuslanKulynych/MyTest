var	price = prompt('Enter price', price);

var discount = prompt('Enter discount', discount);
if (price <= 0) {
	alert('Invalid data');
	throw 'stop';
}
var dPrice = price - price * discount/100;
var saved = price - dPrice;

if (dPrice === parseInt(dPrice)) {
	dPrice = dPrice.toFixed();
} else {
	dPrice = dPrice.toFixed(2);
}

if (saved === parseInt(saved)) {
	saved = saved.toFixed();
} else {
	saved = saved.toFixed(2);
}
console.log('Price with discount: ' + dPrice , '; Saved: ' + saved);