/* 
n = 1 // 1
n = 2 // 2 * 1
n = 3 // 3 * 1


 */


// var n = prompt('Enter something');
// n = parseInt(n);
var n = 10;
var result;
function factorial(n){
	if (n===0) {
		result = 1;
	} else {
		result = (n) * factorial(n - 1);
	}

	return result;
}

console.log(factorial(n));
/* 
base first number = 1
second number 2 * base
third 3 * 2 * base  = 3 * factor (2)
fourth 4  * third one

5 * 4 * 3 * 2 *1 =20 *6 = 120
*/

/* with for loops*/

var m = 10;
var product = 1;

for(var counter = 1; counter < (m + 1); counter++) {
	product *= counter;
}

console.log(product);