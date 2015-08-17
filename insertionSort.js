/*
Insertion Sort: Where a bubble sort relies on a number of small swaps, 
                insertion sort relies on inserting a single element in the right for a given iteration. 
                Every iteration through the collection leaves a greater segment sorted.

Time Complexity: O(n^2)
Space Complexity: O(n)
*/

var a = [5, 1, 12, -5, 16, 2, 12, 14];

function insertionSort(a) {
	var len = a.length;
	for(var i = 1; i < len; i++) {
		var temp = a[i];
		for (var j = i - 1; j >= 0 && a[j] > temp; j--) {
			a[j + 1] = a[j];
		}
		a[j + 1] = temp;
	}
};

insertionSort(a);
console.log(a); // [-5, 1, 2, 5, 12, 12, 14, 16]