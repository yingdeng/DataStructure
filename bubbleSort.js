/* 
Bubble Sort: Time Complexity O(n^2);
             Space Complexity O(1)
*/

var a = [7, 4, 5, 2, 9, 1];
 
function bubbleSort(a)
{
    do {
        var swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
};
 
bubbleSort(a);
console.log(a); // Output: [1, 2, 4, 5, 7, 9]