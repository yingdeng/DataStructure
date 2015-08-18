/*
Merge Sort: 
(1) Divide the unsorted array into n partitions, each partition contains 1 element. Here the one element is considered as sorted,
(2)Repeatedly merge partitioned units to produce new sublists until there is only 1 sublist remaining.
   This will be the sorted list at the end.

 Time Complexity: O(nlogn)
*/

var a = [5, 1, 12, -5, 16, 2, 12, 14];

function mergeSort(a) {
	if(a.length == 1 ) return a;
  
    var mid = a.length / 2;
    var left = a.slice(0, mid);
    var right = a.slice(mid);
  
    left = mergeSort(left);
    right = mergeSort(right);
      
    return merge(left, right);
}

function merge(left, right) {
	var result=[];
    var leftIndex=0;
    var rightIndex=0;
  
    while(leftIndex<left.length && rightIndex<right.length)
    {
        if(left[leftIndex]>right[rightIndex])
        {
  
            result.push(right[rightIndex]);
            rightIndex++;
        }
        else
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex<left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

mergeSort(a);
console.log(a);