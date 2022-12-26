// Sliding Window technique:

// In this technique, we create a window of given length and do the desired operation within the window and move forward to compare other window's ops result. 

// It is useful for tracking the subset of data from the given array/string etc.

// Eg.,
let a = [2,6,9,2,1,8,5,6,3];
maxSumConsecutive(a,3);  // should give 19 (8+5+6) this is the max sum of 3 consecutive no.

// its code will be: 
function maxSumConsecutive(arr,n) {
    if( n > arr.length) return null;  // edge case if window is bigger than the given array.
    let max = -Infinity;   // to tackle negative arrays
    for( let i =0; i< arr.length- n+1; i++) {
        let temp = 0;
        for( let j = 0 ; j < n ; j++) {
            temp += arr[i+j];
        }
        if (temp > max ) {
            max = temp;
        }
    }
    return max;
}

// However it is not efficient for O(n**2)T

// refactored version will be...

function maxSumConsecutiveR(arr,n) {
  if( n > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for(let i = 0 ; i < n ; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = n ; i < arr.length ; i++) {  
    tempSum = tempSum - arr[i - n] + arr[i] ;
    maxSum = Math.max(tempSum , maxSum);
  }
  return maxSum;
}
 // Second loop is our sliding window of size n , which slides on every iteration, deleting extreme left value and adding extreme right value, which save us to add all the no. again. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------    
