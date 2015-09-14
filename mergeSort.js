var arr = [23,1,25,12,12,9,45,46,2,1];

function mergeSort(input){
	var start = 0;
	var mid = Math.floor((input.length)/2);

	if(input.length == 1){ // an array with single element is achieved
		return input
	} else { //split the array again and mergeSort on both the arrays and merge the results
		var a1 = input.slice(start,mid);
		var a2 = input.slice(mid);
		return merge(mergeSort(a1),mergeSort(a2))
	}
}

function merge(a1,a2){
	var i = a1.length,
		j = a2.length;

	var c1 = 0,
		c2 = 0;

	var t = []; // temp array to store the merged and sorted array

	// Iterate the loop till either of c1 becomes equal to i or c2 becomes equal to j
	// This step merges 2 arrays, into sorted array
	while ( c1 < i && c2 < j){ 
		if(a1[c1] > a2[c2]){
			t.push(a2[c2]);
			c2++;
		} else {
			t.push(a1[c1]);
			c1++;
		}
	}

	//Merge all the remaining elements into the temp array
	if(c2 == j ){
		while(c1<i){
			t.push(a1[c1]);
			c1++;
		}
	} else if ( c1 == i) {
		while(c2<j){
			t.push(a2[c2]);
			c2++;
		}
	} 


	return t
}

console.log("Input %s", arr)
console.log("Output %s", mergeSort(arr));