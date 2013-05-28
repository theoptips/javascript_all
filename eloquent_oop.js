
// good codes for closure, inheritance etc.
function reduce(combineFunction, baseNumber, arrayInput){
	arrayInput.forEach(function(item){
		baseNumber = combineFunction(baseNumber,item);
	});

	return baseNumber;
}

function add(a,b){
	return a + b;
}

console.log(reduce(add,0, [1,2,3]));

// takes an array of # and count zeros
function countZero(arrayInput){
	function counter(total, element){
		return total + (element === 0? 1 : 0);
	}

	return reduce(counter,0,arrayInput);
} 

console.log(countZero([0,1,2,3,4,0,0,0,0]));

// OBJECT ORIENTED
// function Fruit(color,sweetness,name,regions){
// 	this.color = color;
// 	this.sweet = sweetness;
// 	this.name = name;
// 	this.regions = regions;

// 	this.showName = function(){
// 		console.log("The name is: "+ this.name);
// 	};
// 	this.showRegion = function(){
// 		this.regions.forEach(function(eachRegion){
// 			console.log("This fruit is from: " + eachRegion);
// 		});
// 	};
// }


// var pineapple = new Fruit("Brown",5,"Pineapple",["United States","Phillipines"]);

// pineapple.showName();
// pineapple.showRegion();