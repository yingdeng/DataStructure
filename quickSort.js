/*
Quick Sort: Divide and Conquer Algorithm
Time Complexity: O(nlogn)
*/

var a = [5, 1, 12, -5, 16, 2, 12, 14];

quickSort(arr, 0, arr.length -1)

function  quickSort(arr, left, right) {
  var i = left;
  var j = right;
  var mid = (left + right) / 2; 
  var pivot = parseInt(arr[mid.toFixed()]);  
  /* partition */
  while (i <= j) {
     while (parseInt(arr[i]) < pivot)
           i++;
     while (parseInt(arr[j]) > pivot)
           j--;
     if (i <= j) {
           var tmp = arr[i];
           arr[i] = arr[j];
           arr[j] = tmp;
           i++;
           j--;
     }
  }

  /* recursion */
  if (left < j)
        quickSort(arr, left, j);
  if (i < right)
        quickSort(arr, i, right);
return arr;
}