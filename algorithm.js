// algorithm by example

// big O 
// O(1)
// describes constant execution time regardless of sample size

var o1 = 5;
var counter1 = 0;

function bigo1(o1){
	console.log(counter1+1);
	return o1 + 5;
}

console.log(bigo1(o1));

// O(N)
// steps performed will grow linearly with input

var oN = 5;
var resultArrayN = [];
function bigoN(oN){
	for(var counterN = 0 ; counterN < oN; counterN++){	
		resultArrayN.push(counterN);
	}
	return resultArrayN.length; //count the steps
}

console.log(bigoN(oN));

// O(N^2), O(N^3), O(N^4) ...
// one nested loop using n as input caused N^2, two nested loops within the big one caused N^3
// common algoirthm involving loops, nested iterations over the data set, deeper nesting result in O(N^3) and N4 etc.


var oNSqr = 5;
var resultArrayNSqr = [];
function bigoNSqr(oNSqr){
	for(var counterNSqr = 0 ; counterNSqr < oNSqr; counterNSqr++){
		for(var counterNSqr2 = 0; counterNSqr2 < oNSqr; counterNSqr2++){
			resultArrayNSqr.push("Turn: "+counterNSqr+". Inner: "+counterNSqr2+".");
		}
	}
	return resultArrayNSqr.length;
}

console.log(bigoNSqr(oNSqr));

// O(2 ^ n)
// denotes as sample size increases, for each additional element in input set, execution doubles, this can become very large
// a perfect binary tree, all nodes have exactly 2 children
// each depth level increase,  double the # of nodes count of the previous level
/*     +      root 2^0  
      + +		2^1 | depth level 1
   + +   + +	2^2 | depth level 2
  ++ ++  ++ ++	2^3 or 2^2 * 2 (double)

/*
http://www.perlmonks.org/?node_id=227909
Common Orders of Growth

O(1) is the no-growth curve. An O(1) algorithm's performance is conceptually independent of the size of the data set on which it operates. Array element access is O(1), if you ignore implementation details like virtual memory and page faults. Ignoring the data set entirely and returning undef is also O(1), though this is rarely useful.

O(N) says that the algorithm's performance is directly proportional to the size of the data set being processed. Scanning an array or linked list takes O(N) time. Probing an array is still O(N), even if statistically you only have to scan half the array to find a value. Because computer scientists are only interested in the shape of the growth curve at this level, when you see O(2N) or O(10 + 5N), someone is blending implementation details into the conceptual ones.

Depending on the algorithm used, searching a hash is O(N) in the worst case. Insertion is also O(N) in the worst case, but considerably more efficient in the general case.

O(N+M) is just a way of saying that two data sets are involved, and that their combined size determines performance.

O(N2) says that the algorithm's performance is proportional to the square of the data set size. This happens when the algorithm processes each element of a set, and that processing requires another pass through the set. The infamous Bubble Sort is O(N2).

O(N•M) indicates that two data sets are involved, and the processing of each element of one involves processing the second set. If the two set sizes are roughly equivalent, some people get sloppy and say O(N2) instead. While technically incorrect, O(N2) still conveys useful information.

"I've got this list of regular expressions, and I need to apply all of them to this chunk of text" is potentially O(N•M), depending on the regexes.

O(N3) and beyond are what you would expect. Lots of inner loops.

O(2N) means you have an algorithm with exponential time (or space, if someone says space) behavior. In the 2 case, time or space double for each new element in data set. There's also O(10N), etc. In practice, you don't need to worry about scalability with exponential algorithms, since you can't scale very far unless you have a very big hardware budget.

O(log N) and O(N log N) might seem a bit scary, but they're really not. These generally mean that the algorithm deals with a data set that is iteratively partitioned, like a balanced binary tree. (Unbalanced binary trees are O(N2) to build, and O(N) to probe.) Generally, but not always, log N implies log2N, which means, roughly, the number of times you can partition a set in half, then partition the halves, and so on, while still having non-empty sets. Think powers of 2, but worked backwards.
*/

