var roads = {};
function makeRoad(from,to,length){
	function addRoad(from,to){
		if (!(from in roads)){
			roads[from] = [];
		}

		roads[from].push({to: to, distance: length});
	}
	addRoad(from,to);
	addRoad(to, from);
}

makeRoad("Point Kiukiu","Hanaiapa",19);
makeRoad("Point Kiukiu","Mt Feani",15);
makeRoad("Point Kiukiu","Taaoa",15);
var myRoad1=  roads;
console.log(myRoad1);

roads= {};

function makeRoads(start,arrayInput){
	for(var i = 0 ; i < arrayInput.length; i+=2){
		console.log(start);
		console.log(arrayInput[i]);
		console.log(arrayInput[i+1]);
		makeRoad(start, arrayInput[i], arrayInput[i+1]);
	}
}

makeRoads("Point Kiukiu", [ "Hanaiapa",19,"Mt Feani",15,"Taaoa",15] );
var myRoad2=  roads;
console.log(myRoad2);

//validation check
// JSON.stringify(myRoad1); // can really directly compare object
// JSON.stringify(myRoad2); 
// console.log("myRoad1 == myRoad2" + (myRoad1 == myRoad2));