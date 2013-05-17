/* 0 1 1 2 3 5 8 13 21 34 55 89 144 */


var n  = 100;
var resultArray = [];


for(var counter =0; counter < n;  counter++){
	var result;
	if (counter === 0) {
		result = 0;
	} else if(counter === 1){
		result = 1;
	} else {
		result = resultArray[counter-1]+ resultArray[counter-2];
	}
	
	resultArray.push(result);

}

console.log(resultArray);
console.log(resultArray[(n-1)]);

/* now attempt to write formula */

/* recursive */

/* 

1st = 0
2nd = 1

3rd number = 2nd number + 1st number 1st + 1st + 0
4th number =3rd number + 2nd number = 2nd + 2nd + 1st
5th number = 4th number + 3rd number = 3rd + 3rd + 2nd
6th number = 5th number  + 4th number = 4th + 4th + 3rd  
7th number = 6th + 5 th = 5th + 5th + 4th

 */

 /* 0 1 1 2 3 5 8 13 21 34 55 89 144 */

 // very slow

 var m =20;
 function fib(m){
 	if (m === 0) {
 		return 0;
 	} else if (m === 1){
 		return 1;
 	} else{
 		return (fib(m-1) + fib(m-2));
 	}
 }

 console.log(fib(m));

