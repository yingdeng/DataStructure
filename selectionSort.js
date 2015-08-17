/*
Selection Sort : Selecting the lowest element requires scanning all n elements (this takes n - 1 comparisons)
                 and then swapping it into the first position. Finding the next element requires scanning the remaining n -1 
                 elements and so on, for (n - 1) + (n - 2) + ... + 2 + 1 = n(n - 1)/2
Time Complexity: O(n^2)
Space Complexity: O(n)
*/

var a = [5, 1, 12, -5, 16, 2, 12, 14];

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

function selectionSort(a){
	var len = a.length - 1;

	for (var i = 0; i < len; i++) {
		var min = i;
		for (var j = i + 1; j < len; j++) {
			if(a[j] < a[min]) {
				min = j;
			}
		}
		if (min != i) {
			swap(a, i, min);
		}
	}
	return a;
};

selectionSort(a);
console.log(a); // [-5, 1, 2, 5, 12, 12, 14, 16]